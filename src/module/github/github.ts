import { App, type Octokit } from "octokit";
import {
  type ActionResponse,
  type BlockFeedback,
  blockFeedback,
  type PageFeedback,
  pageFeedback,
} from "@/components/feedback/schema";
import { envServer } from "@/lib/env-server";
import { gitConfig } from "./git.config";

export const repo = gitConfig.repo;
export const owner = gitConfig.owner;
export const DocsCategory = "Docs Feedback";

let instance: Octokit | undefined;

async function getOctokit(): Promise<Octokit> {
  if (instance) return instance;

  const appId = envServer.GITHUB_APP_ID;
  const privateKey = envServer.GITHUB_APP_PRIVATE_KEY;

  if (!appId || !privateKey) {
    throw new Error(
      "No GitHub keys provided for Github app, docs feedback feature will not work.",
    );
  }

  const app = new App({
    appId,
    privateKey,
  });

  const { data } = await app.octokit.request(
    "GET /repos/{owner}/{repo}/installation",
    {
      owner,
      repo,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );

  instance = await app.getInstallationOctokit(data.id);
  return instance;
}

interface RepositoryInfo {
  id: string;
  discussionCategories: {
    nodes: {
      id: string;
      name: string;
    }[];
  };
}

let cachedDestination: RepositoryInfo | undefined;

async function getFeedbackDestination() {
  if (cachedDestination) return cachedDestination;

  const octokit = await getOctokit();

  const result = await octokit.graphql<{
    repository: RepositoryInfo;
  }>(`
    query {
      repository(owner: "${owner}", name: "${repo}") {
        id
        discussionCategories(first: 25) {
          nodes { id name }
        }
      }
    }
  `);

  cachedDestination = result.repository;
  return cachedDestination;
}

export async function onPageFeedbackAction(
  feedback: PageFeedback,
): Promise<ActionResponse> {
  "use server";
  const parsed = pageFeedback.parse(feedback);

  return createDiscussionThread(
    parsed.url,
    `[${parsed.opinion}] ${parsed.message}\n\n> Forwarded from user feedback.`,
  );
}

export async function onBlockFeedbackAction(
  feedback: BlockFeedback,
): Promise<ActionResponse> {
  "use server";
  const parsed = blockFeedback.parse(feedback);

  return createDiscussionThread(
    parsed.url,
    `> ${parsed.blockBody ?? parsed.blockId}\n\n${parsed.message}\n\n> Forwarded from user feedback.`,
  );
}

async function createDiscussionThread(
  pageId: string,
  body: string,
): Promise<ActionResponse> {
  const octokit = await getOctokit();
  const destination = await getFeedbackDestination();

  const category = destination.discussionCategories.nodes.find(
    (c) => c.name === DocsCategory,
  );

  if (!category) {
    throw new Error(
      `Please create a "${DocsCategory}" category in GitHub Discussion`,
    );
  }

  const title = `Feedback for ${pageId}`;

  // Search for existing discussion created by this app
  const searchResult = await octokit.graphql<{
    search: {
      nodes: { id: string; url: string }[];
    };
  }>(`
    query {
      search(
        type: DISCUSSION,
        query: ${JSON.stringify(
          `${title} in:title repo:${owner}/${repo} author:@me`,
        )},
        first: 1
      ) {
        nodes {
          ... on Discussion { id url }
        }
      }
    }
  `);

  const discussion = searchResult.search.nodes[0];

  if (discussion) {
    const commentResult = await octokit.graphql<{
      addDiscussionComment: {
        comment: { id: string; url: string };
      };
    }>(`
      mutation {
        addDiscussionComment(
          input: {
            body: ${JSON.stringify(body)},
            discussionId: "${discussion.id}"
          }
        ) {
          comment { id url }
        }
      }
    `);

    return {
      githubUrl: commentResult.addDiscussionComment.comment.url,
    };
  }

  // Create new discussion (FIXED STRUCTURE HERE)
  const createResult = await octokit.graphql<{
    createDiscussion: {
      discussion: { id: string; url: string };
    };
  }>(`
    mutation {
      createDiscussion(
        input: {
          repositoryId: "${destination.id}",
          categoryId: "${category.id}",
          body: ${JSON.stringify(body)},
          title: ${JSON.stringify(title)}
        }
      ) {
        discussion { id url }
      }
    }
  `);

  return {
    githubUrl: createResult.createDiscussion.discussion.url,
  };
}

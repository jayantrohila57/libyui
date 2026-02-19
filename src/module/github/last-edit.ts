import { getGithubLastEdit } from "fumadocs-core/content/github";
import { envServer } from "@/lib/env-server";
import { gitConfig } from "./git.config";

export async function getLastEditTime(path: string) {
  try {
    console.log("Fetching last edit time for:", path);
    const time = await getGithubLastEdit({
      owner: gitConfig.owner,
      repo: gitConfig.repo,
      path: `src/content/docs/${path}`,
      token: envServer.GIT_TOKEN ? `Bearer ${envServer.GIT_TOKEN}` : undefined,
    });
    console.log("Last edit:", time);

    return time;
  } catch (error) {
    console.error("Failed to fetch last edit time:", error);
    return null;
  }
}

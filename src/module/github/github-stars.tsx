import { Star } from "lucide-react";
import Link from "next/link";
import { App } from "octokit";
import { Button } from "@/components/ui/button";

interface GithubStarsBadgeProps {
  owner: string;
  repo: string;
}

export default async function GithubStarsBadge({
  owner,
  repo,
}: GithubStarsBadgeProps) {
  const appId = process.env.GITHUB_APP_ID;
  const privateKey = process.env.GITHUB_APP_PRIVATE_KEY;

  if (!appId || !privateKey) {
    throw new Error("Missing GitHub App credentials");
  }

  const app = new App({
    appId,
    privateKey,
  });

  const { data: installation } = await app.octokit.request(
    "GET /repos/{owner}/{repo}/installation",
    {
      owner,
      repo,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );

  const octokit = await app.getInstallationOctokit(installation.id);

  const { data: repoData } = await octokit.request(
    "GET /repos/{owner}/{repo}",
    {
      owner,
      repo,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );

  const stars = repoData.stargazers_count ?? 0;

  function formatStars(count: number): string {
    if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`;
    if (count >= 1_000) return `${(count / 1_000).toFixed(1)}k`;
    return count.toString();
  }

  return (
    <Button
      variant="secondary"
      render={
        <Link href={`https://github.com/${owner}/${repo}`} target="_blank">
          <span className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span className="font-bold">{formatStars(stars)}</span>
          </span>
        </Link>
      }
    />
  );
}

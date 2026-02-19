import { envClient } from "@/lib/env-client";
import { docsSource } from "@/module/docs/docs.options";

export default async function sitemap() {
  const baseUrl = envClient.NEXT_PUBLIC_BASE_URL;
  const docsUrls = docsSource.getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...docsUrls];
}

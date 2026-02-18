import { env } from "@/lib/env";
import { docsSource } from "@/module/docs/docs.options";

export default async function sitemap() {
  const baseUrl = env.NEXT_PUBLIC_BASE_URL;
  const docsUrls = docsSource.getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...docsUrls];
}

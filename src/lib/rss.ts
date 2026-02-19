import { Feed } from "feed";
import { docsSource } from "@/module/docs/docs.options";
import { getLastEditTime } from "@/module/github/last-edit";
import { getEnv } from "./env-client";

const baseUrl = getEnv("NEXT_PUBLIC_BASE_URL");

export async function getRSS() {
  const feed = new Feed({
    title: "LibyUI Documentation",
    id: `${baseUrl}/docs`,
    link: `${baseUrl}/docs`,
    language: "en",
    image: `${baseUrl}/icon-512x512.png`,
    favicon: `${baseUrl}/icon.png`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Jayant Rohila`,
  });

  const pages = docsSource.getPages();

  for (const page of pages) {
    const lastEdit = await getLastEditTime(page.path);

    feed.addItem({
      id: page.url,
      title: page.data.title,
      description: page.data.description,
      link: `${baseUrl}${page.url}`,
      date: lastEdit ? new Date(lastEdit) : new Date(),
      author: [
        {
          name: "Jayant Rohila",
        },
      ],
    });
  }

  return feed.rss2();
}

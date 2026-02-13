import { docsConfig } from "fumadocs-mdx:collections/server";
import { type InferPageType, loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import { icons } from "lucide-react";
import { createElement } from "react";

export const docsSource = loader({
  baseUrl: "/docs",
  source: docsConfig.toFumadocsSource(),
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }
    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
  plugins: [lucideIconsPlugin()],
});

export function getPageImage(page: InferPageType<typeof docsSource>) {
  const segments = [...page.slugs, "image.png"];

  return {
    segments,
    url: `/og/docs/${segments.join("/")}`,
  };
}

export async function getLLMText(page: InferPageType<typeof docsSource>) {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title}

${processed}`;
}

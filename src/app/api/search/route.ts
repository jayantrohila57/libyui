import { createFromSource } from "fumadocs-core/search/server";
import { docsSource } from "@/module/docs/docs.options";

export const { GET } = createFromSource(docsSource, {
  language: "english",
});

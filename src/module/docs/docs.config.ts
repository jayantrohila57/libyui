import { defineDocs } from "fumadocs-mdx/config";
import { z } from "zod";

const customPageSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  icon: z.string().optional(),
  full: z.boolean().optional(),
});

const customMetaSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  root: z.boolean().optional(),
  pages: z.array(z.union([z.string(), z.any()])).optional(),
  icon: z.string().optional(),
});

export const docsConfig = defineDocs({
  dir: "src/content/docs",
  docs: {
    schema: customPageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: customMetaSchema,
  },
});

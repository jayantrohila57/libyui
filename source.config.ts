import { remarkFeedbackBlock } from "fumadocs-core/mdx-plugins";
import { defineConfig } from "fumadocs-mdx/config";

export { docsConfig } from "./src/module/docs/docs.config";

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkFeedbackBlock],
  },
});

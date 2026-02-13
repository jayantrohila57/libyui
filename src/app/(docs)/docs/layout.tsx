import { DocsLayout } from "fumadocs-ui/layouts/docs";

import { baseOptions } from "@/module/common/layout.shared";
import { docsSource } from "@/module/docs/docs.options";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout tree={docsSource.getPageTree()} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}

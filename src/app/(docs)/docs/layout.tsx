import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { BookIcon } from "lucide-react";
import { docsSource } from "@/module/docs/docs.options";
import { gitConfig } from "@/module/github/git.config";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={docsSource.getPageTree()}
      nav={{
        title: "LibyUI",
      }}
      links={[
        {
          icon: <BookIcon />,
          text: "Docs",
          url: "/docs",
          secondary: false,
          active: "nested-url",
        },
      ]}
      tabMode="auto"
      githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}`}
    >
      {children}
    </DocsLayout>
  );
}

import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { BookIcon } from "lucide-react";
import { LLogo } from "@/components/common/logo";
import { docsSource } from "@/module/docs/docs.options";
import { gitConfig } from "@/module/github/git.config";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={docsSource.getPageTree()}
      nav={{
        title: (
          <span className="flex items-center gap-2">
            <LLogo size={32} />
            <span className="font-semibold">LibyUI</span>
          </span>
        ),
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

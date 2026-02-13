import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookIcon } from "lucide-react";
import { gitConfig } from "@/module/github/git.config";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "LibyUI",
    },
    links: [
      {
        icon: <BookIcon />,
        text: "Docs",
        url: "/docs",
        secondary: false,
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}

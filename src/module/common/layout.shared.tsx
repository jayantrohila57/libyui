import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookIcon, Box, LayoutPanelLeft } from "lucide-react";
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
        active: "nested-url",
      },
      {
        icon: <Box />,
        type: "menu",
        text: "Components",
        url: "/docs/components",
        secondary: false,
        active: "nested-url",
        items: [
          {
            icon: <Box />,
            text: "Button",
            url: "/docs/components/button",
            secondary: false,
            active: "nested-url",
          },
        ],
      },
      {
        icon: <LayoutPanelLeft />,
        text: "Blocks",
        url: "/docs/blocks",
        secondary: false,
        active: "nested-url",
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}

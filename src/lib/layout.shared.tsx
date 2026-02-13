import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookIcon } from "lucide-react";

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: "jayantrohila57",
  repo: "libyui",
  branch: "main",
};

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

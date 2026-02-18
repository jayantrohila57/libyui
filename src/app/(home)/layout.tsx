import { HomeLayout } from "fumadocs-ui/layouts/home";
import { BookIcon } from "lucide-react";
import { LLogo } from "@/components/common/logo";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
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
    >
      {children}
    </HomeLayout>
  );
}

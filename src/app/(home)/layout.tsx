import { HomeLayout } from "fumadocs-ui/layouts/home";
import { BookIcon } from "lucide-react";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
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
    >
      {children}
    </HomeLayout>
  );
}

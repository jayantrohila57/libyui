import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Red_Hat_Display } from "next/font/google";
import InstallPrompt from "@/components/common/pwa-install";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat-display",
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={redHatDisplay.className}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          {children}
          <InstallPrompt />
        </RootProvider>
      </body>
    </html>
  );
}

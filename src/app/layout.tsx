import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import type { Metadata, Viewport } from "next";
import { Red_Hat_Display } from "next/font/google";
import { env } from "@/lib/env";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat-display",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title: "LibyUI - Build Beautiful UI Components. Ship Faster.",
  description:
    "LibyUI is your comprehensive React component library for building modern, accessible, and stunning user interfaces with ease.",
  openGraph: {
    title: "LibyUI - Build Beautiful UI Components. Ship Faster.",
    description:
      "LibyUI is your comprehensive React component library for building modern, accessible, and stunning user interfaces with ease.",
    type: "website",
    url: env.NEXT_PUBLIC_BASE_URL,
    images: [
      {
        url: `${env.NEXT_PUBLIC_BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "LibyUI - Build Beautiful UI Components. Ship Faster.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LibyUI - Build Beautiful UI Components. Ship Faster.",
    description:
      "LibyUI is your comprehensive React component library for building modern, accessible, and stunning user interfaces with ease.",
    images: [`${env.NEXT_PUBLIC_BASE_URL}/opengraph-image`],
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={redHatDisplay.className}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

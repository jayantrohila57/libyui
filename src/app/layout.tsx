import "./global.css";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Red_Hat_Display } from "next/font/google";
import { envClient } from "@/lib/env-client";

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
  metadataBase: new URL(envClient.NEXT_PUBLIC_BASE_URL),
  title: "LibyUI - Build Beautiful UI Components. Ship Faster.",
  description:
    "LibyUI is your comprehensive React component library for building modern, accessible, and stunning user interfaces with ease.",
  openGraph: {
    title: "LibyUI - Build Beautiful UI Components. Ship Faster.",
    description:
      "LibyUI is your comprehensive React component library for building modern, accessible, and stunning user interfaces with ease.",
    type: "website",
    url: envClient.NEXT_PUBLIC_BASE_URL,
    images: [
      {
        url: `${envClient.NEXT_PUBLIC_BASE_URL}/opengraph-image`,
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
    images: [`${envClient.NEXT_PUBLIC_BASE_URL}/opengraph-image`],
  },
  alternates: {
    types: {
      "application/rss+xml": [
        {
          title: "LibyUI Documentation",
          url: `${envClient.NEXT_PUBLIC_BASE_URL}/rss.xml`,
        },
      ],
    },
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
        {/* <RootProvider> */}
        {children}
        <Analytics mode="auto" />
        {/* </RootProvider> */}
      </body>
    </html>
  );
}

import { ChevronRight, MessageCircle, Search } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { envClient } from "@/lib/env-client";

export const metadata: Metadata = {
  metadataBase: new URL(envClient.NEXT_PUBLIC_BASE_URL),
  title: "LibyUI - Build Beautiful UI Components. Ship Faster.",
  description:
    "LibyUI is your comprehensive React component library for building modern, accessible, and stunning user interfaces with ease.",
  keywords: [
    "React",
    "UI Components",
    "Component Library",
    "TypeScript",
    "Tailwind CSS",
  ],
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
};

export default function HeroSection() {
  return (
    <main className="overflow-hidden relative h-[calc(100dvh-3.5rem)]">
      <section className="bg-background">
        <div className="relative py-12 z-0">
          <div className="mask-radial-from-45% mask-radial-to-75% grayscale mask-radial-at-bottom mask-radial-[75%_100%] aspect-3/9 absolute inset-0 opacity-50 contrast-50 blur-xs md:aspect-square lg:aspect-video dark:opacity-100">
            <Image
              src="https://images.unsplash.com/photo-1658660854207-8886b1d69bb8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="hero background"
              width={2198}
              height={1685}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="relative z-10 mx-auto w-full container max-w-352 p-5 md:p-5 sm:pl-6">
            <div className="flex items-center justify-baseline max-sm:flex-col">
              <div className="max-w-4xl grid grid-cols-1 gap-6">
                <Link
                  href="/docs/"
                  className="rounded-(--radius) mx-0 flex w-fit items-center gap-2 border p-1 pr-3 lg:ml-0"
                >
                  <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
                    New
                  </span>
                  <span className="text-sm">Introduction Libyui</span>
                  <span className="bg-(--color-border) block h-4 w-px"></span>
                </Link>
                <div className="flex flex-col gap-6">
                  <h1 className="  text-balance text-4xl font-semibold md:text-5xl xl:text-6xl">
                    Build Beautiful UI Components. Ship Faster.
                  </h1>
                  <p className="text-muted-foreground max-w-2xl text-sm md:text-xl  text-balance">
                    LibyUI is your comprehensive React component library for
                    building modern, accessible, and stunning user interfaces
                    with ease.
                  </p>
                </div>
                <div className=" flex flex-col w-full sm:flex-row justify-start items-start gap-4">
                  <Button className="w-full sm:w-auto" asChild size={"lg"}>
                    <Link href="/docs">
                      <span className="text-nowrap">Documentation</span>
                      <ChevronRight className="opacity-50" />
                    </Link>
                  </Button>
                  <Button
                    variant={"outline"}
                    className="w-full sm:w-auto"
                    asChild
                    size={"lg"}
                  >
                    <Link href="/docs/components">
                      <span className="text-nowrap">View Components</span>
                      <ChevronRight className="opacity-50" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div
                aria-hidden
                className="mask-y-from-50% hidden  sm:relative scale-80 sm:scale-90 max-md:mx-auto max-md:*:scale-90"
              >
                {[
                  "How do I create a responsive navigation bar?",
                  "Build a beautiful card component with hover effects",
                  "Implement a dark mode toggle switch",
                  "Create an animated modal dialog component",
                  "Design a customizable button system",
                  "Build a responsive grid layout",
                  "Implement accessible form components",
                  "Create a loading spinner animation",
                  "Design a toast notification system",
                  "Build a collapsible sidebar menu",
                  "Implement a data table with sorting",
                  "Create a progress bar component",
                ].map((prompt) => (
                  <div
                    key={prompt}
                    className="text-muted-foreground flex items-center gap-2 px-1 md:px-4 py-2 text-sm"
                  >
                    <MessageCircle className="size-3.5 opacity-50" />
                    <span className="text-nowrap">{prompt}</span>
                  </div>
                ))}
                <div className="bg-card ring-border shadow-foreground/6.5 dark:shadow-black/6.5 absolute inset-0 m-auto mt-auto flex h-fit justify-between gap-3 rounded-md p-2 shadow-xl ring-1 sm:inset-2">
                  <div className="flex items-center gap-2">
                    <div className="hover:bg-muted flex size-9 cursor-pointer rounded-full *:m-auto *:size-4">
                      <Search />
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Search components...
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mask-b-from-55% relative mt-12 overflow-hidden">
              <div className="inset-shadow-2xs opacity-70 ring-background dark:inset-shadow-white/20 bg-background relative mx-auto  overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                <Image
                  className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                  src="/mail2.png"
                  alt="app screen"
                  width="2700"
                  height="1440"
                />
                <Image
                  className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                  src="/mail2-light.png"
                  alt="app screen"
                  width="2700"
                  height="1440"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

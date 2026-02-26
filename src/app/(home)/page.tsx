import {
  Blocks,
  BookOpen,
  ChevronRight,
  ExternalLink,
  Layers,
  Layout,
  Package,
  Wrench,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { MotionIcon } from "@/components/svgl/motion";
import { ReactIcon } from "@/components/svgl/react";
import { shadcnui } from "@/components/svgl/shadcn";
import { TailwindCSS } from "@/components/svgl/tailwind";
import { TypeScript } from "@/components/svgl/typescript";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
const items = [
  {
    title: "Components",
    href: "/docs/components",
    icon: Layers,
    description: "Reusable UI building blocks.",
  },
  {
    title: "Blocks",
    href: "/docs/blocks",
    icon: Blocks,
    description: "Composed UI sections.",
  },
  {
    title: "Patterns",
    href: "/docs/patterns",
    icon: Layout,
    description: "Common interface solutions.",
  },
  {
    title: "Recipes",
    href: "/docs/recipes",
    icon: BookOpen,
    description: "Step-by-step implementation.",
  },
  {
    title: "Modules",
    href: "/docs/modules",
    icon: Package,
    description: "Feature-level abstractions.",
  },
  {
    title: "Tooling",
    href: "/tooling",
    icon: Wrench,
    description: "Developer utilities & workflows.",
  },
];

const brandIcons = [
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindCSS,
  },

  {
    name: "TypeScript",
    icon: TypeScript,
  },
  {
    name: "Motion",
    icon: MotionIcon,
  },
  {
    name: "Shadcn Ui",
    icon: shadcnui,
  },
];

export default function HeroSection() {
  return (
    <main className="relative h-[calc(100dvh-3.5rem)]">
      <section className="bg-background">
        <div className="relative py-2 z-10 md:py-10">
          <div className="relative z-10 mx-auto flex flex-col gap-4 w-full container max-w-352 p-5 md:p-5 sm:pl-6">
            <div className="flex items-center justify-baseline max-sm:flex-col">
              <div className="flex flex-row justify-between items-start w-full">
                <div className="max-w-4xl grid grid-cols-1 gap-6">
                  <Link
                    href="/docs/"
                    className="rounded-lg mx-0 flex w-fit items-center gap-2 border p-1 pr-3 lg:ml-0"
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
                  <div className="flex flex-row gap-2 h-full w-full justify-start items-center">
                    <div className="">
                      <span className="text-sm">Build with</span>
                    </div>
                    <div className="grid grid-cols-5 gap-2 w-fit justify-start items-center">
                      {brandIcons.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Button
                            size={"icon-lg"}
                            variant={"ghost"}
                            key={item.name}
                          >
                            <Icon className="h-10 w-10" />
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex flex-col w-full sm:flex-row justify-start items-start gap-4">
                    <Button
                      className="w-full sm:w-auto"
                      size="lg"
                      render={
                        <Link href="/docs" className="flex items-center gap-2">
                          <span className="text-nowrap">Documentation</span>
                          <ChevronRight className="opacity-50" />
                        </Link>
                      }
                    />

                    <Button
                      variant="outline"
                      className="w-full sm:w-auto"
                      size="lg"
                      render={
                        <Link
                          href="/docs/components"
                          className="flex items-center gap-2"
                        >
                          <span className="text-nowrap">View Components</span>
                          <ChevronRight className="opacity-50" />
                        </Link>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-2 grid-cols-2 h-full w-full sm:grid-cols-2 lg:grid-cols-3 py-2 md:py-10">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.title} href={item.href} className="group">
                    <Card className="h-full w-full bg-input/30">
                      <CardHeader>
                        <CardTitle className="flex flex-row gap-2">
                          <Icon className="h-5 w-5" />
                          {item.title}
                        </CardTitle>
                        <CardDescription> {item.description}</CardDescription>
                        <CardAction>
                          <ExternalLink className="h-5 w-5" />
                        </CardAction>
                      </CardHeader>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #80808080 0.5px, transparent 0.5px),
        linear-gradient(to bottom, #80808080 0.5px, transparent 0.5px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
          repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
      `,
          WebkitMaskImage: `
    repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
    </main>
  );
}

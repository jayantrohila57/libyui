import { findNeighbour } from "fumadocs-core/page-tree";
import { ChevronLeft, ChevronRight, ClockIcon } from "lucide-react";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LLMCopyButton, ViewOptions } from "@/components/ai/page-actions";
import { Feedback } from "@/components/feedback/client";
import { getMDXComponents } from "@/components/mdx/mdx-components";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { envClient } from "@/lib/env-client";
import { camelToSlug } from "@/lib/utils";
import { docsSource, getPageImage } from "@/module/docs/docs.options";
import { DocsTableOfContents } from "@/module/docs/docs.toc";
import EditOnGitHub from "@/module/github/edit-on-github";
import { gitConfig } from "@/module/github/git.config";
import { onPageFeedbackAction } from "@/module/github/github";
import GithubStarsBadge from "@/module/github/github-stars";
import { getLastEditTime } from "@/module/github/last-edit";

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = docsSource.getPage(params.slug);
  if (!page) notFound();
  const MDX = page.data.body;
  const iconName = camelToSlug(page.data.icon) as IconName;
  const lastEdit = await getLastEditTime(page.path);
  const neighbours = findNeighbour(docsSource.pageTree, page.url);
  console.log(page.data.full);
  return (
    <div
      data-slot="docs"
      className="flex scroll-mt-24 items-stretch pb-8 text-[1.05rem] sm:text-[15px] xl:w-full"
    >
      <div className="flex w-full flex-1 flex-col">
        <div className="flex w-full flex-col">
          <div className=" flex flex-row items-center gap-2">
            <div className="rounded-lg mx-0 flex w-fit items-center border p-1 ">
              <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] p-1 text-xs">
                <DynamicIcon name={iconName} className="size-4" />
              </span>
            </div>
            <h1 className="font-heading mt-2 scroll-m-28 text-3xl font-bold tracking-tight">
              {page.data.title}
            </h1>
          </div>
          <p className="mb-0 max-w-xl">{page.data.description}</p>
        </div>
        <Separator />
        <div className="flex flex-row gap-2 items-center">
          <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
          <ViewOptions
            markdownUrl={`${page.url}.mdx`}
            githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/src/content/docs/${page.path}`}
          />
          <EditOnGitHub
            href={`https://github.com/${gitConfig.user}/${gitConfig.repo}/edit/${gitConfig.branch}/src/content/docs/${page.path}`}
          />
          <GithubStarsBadge owner={gitConfig.user} repo={gitConfig.repo} />
          <div className="ml-auto flex gap-2">
            {neighbours.previous && (
              <Button
                variant="secondary"
                size="icon"
                className="extend-touch-target size-8 shadow-none md:size-7"
                render={
                  <Link href={neighbours.previous.url}>
                    <ChevronLeft />
                    <span className="sr-only">Previous</span>
                  </Link>
                }
              />
            )}
            {neighbours.next && (
              <Button
                variant="secondary"
                size="icon"
                className="extend-touch-target size-8 shadow-none md:size-7"
                render={
                  <Link href={neighbours.next.url}>
                    <span className="sr-only">Next</span>
                    <ChevronRight />
                  </Link>
                }
              />
            )}
          </div>
        </div>
        <Separator />
        <MDX components={getMDXComponents()} />
        <Feedback onSendAction={onPageFeedbackAction} />
        {lastEdit && (
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <ClockIcon className="size-4" />
            Last updated on {new Date(lastEdit).toLocaleDateString()}
          </p>
        )}
        <div className="hidden h-16 w-full items-center gap-2 px-4 sm:flex sm:px-0">
          {neighbours.previous && (
            <Button
              variant="secondary"
              size="icon-lg"
              render={
                <Link href={neighbours.previous.url}>
                  <ChevronLeft />
                  {neighbours.previous.name}
                  <span className="sr-only">Previous</span>
                </Link>
              }
            />
          )}
          {neighbours.next && (
            <Button
              variant="secondary"
              size="icon-lg"
              render={
                <Link href={neighbours.next.url}>
                  <span className="sr-only">Next</span>
                  {neighbours.next.name}
                  <ChevronRight />
                </Link>
              }
            />
          )}
        </div>
      </div>
      <div className="sticky top-[calc(var(--header-height)+1px)] z-30 ml-auto hidden h-[90svh] w-(--sidebar-width) flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
        <div className="h-(--top-spacing) shrink-0"></div>
        {page.data.toc?.length ? (
          <div className="no-scrollbar flex flex-col gap-8 overflow-y-auto px-8">
            <DocsTableOfContents toc={page.data.toc} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return docsSource.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/docs/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = docsSource.getPage(params.slug);
  if (!page) notFound();

  return {
    metadataBase: new URL(envClient.NEXT_PUBLIC_BASE_URL),
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      type: "article",
      url: `${envClient.NEXT_PUBLIC_BASE_URL}${page.url}`,
      images: [
        {
          url: getPageImage(page).url,
          width: 1200,
          height: 630,
          alt: getPageImage(page).alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.title,
      description: page.data.description,
      images: [getPageImage(page).url],
    },
    robots: { index: true, follow: true },
  };
}

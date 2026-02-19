import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  EditOnGitHub,
} from "fumadocs-ui/layouts/notebook/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { ClockIcon } from "lucide-react";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LLMCopyButton, ViewOptions } from "@/components/ai/page-actions";
import { Feedback } from "@/components/feedback/client";
import { getMDXComponents } from "@/components/mdx/mdx-components";
import { Separator } from "@/components/ui/separator";
import { envClient } from "@/lib/env-client";
import { camelToSlug } from "@/lib/utils";
import { docsSource, getPageImage } from "@/module/docs/docs.options";
import { gitConfig } from "@/module/github/git.config";
import { onPageFeedbackAction } from "@/module/github/github";
import { getLastEditTime } from "@/module/github/last-edit";

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = docsSource.getPage(params.slug);
  if (!page) notFound();
  const MDX = page.data.body;
  const iconName = camelToSlug(page.data.icon) as IconName;
  const lastEdit = await getLastEditTime(page.path);

  return (
    <DocsPage className="" toc={page.data.toc} full={page.data.full}>
      <div className="flex flex-col">
        <div className=" flex flex-row items-center gap-2">
          <div className="rounded-(--radius) mx-0 flex w-fit items-center border p-1 ">
            <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] p-1 text-xs">
              <DynamicIcon name={iconName} className="size-4" />
            </span>
          </div>
          <DocsTitle>{page.data.title}</DocsTitle>
        </div>
        <DocsDescription className="mb-0 max-w-xl">
          {page.data.description}
        </DocsDescription>
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
      </div>
      <Separator />
      <DocsBody className="">
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(docsSource, page),
          })}
        />
      </DocsBody>
      <Feedback onSendAction={onPageFeedbackAction} />
      {lastEdit && (
        <p className="text-sm text-muted-foreground flex items-center gap-2">
          <ClockIcon className="size-4" />
          Last updated on {new Date(lastEdit).toLocaleDateString()}
        </p>
      )}
    </DocsPage>
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

import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LLMCopyButton, ViewOptions } from "@/components/ai/page-actions";
import { getMDXComponents } from "@/components/mdx/mdx-components";
import { Separator } from "@/components/ui/separator";
import { env } from "@/lib/env";
import { camelToSlug } from "@/lib/utils";
import { docsSource, getPageImage } from "@/module/docs/docs.options";
import { gitConfig } from "@/module/github/git.config";

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = docsSource.getPage(params.slug);
  if (!page) notFound();
  const MDX = page.data.body;
  const iconName = camelToSlug(page.data.icon) as IconName;

  return (
    <DocsPage className="" toc={page.data.toc} full={page.data.full}>
      <div className="flex flex-col md:flex-row gap-2 items-start md:items-center justify-between">
        <div className="flex flex-col">
          <div className=" flex flex-row gap-2 items-center">
            <DynamicIcon name={iconName} />
            <DocsTitle>{page.data.title}</DocsTitle>
          </div>
          <DocsDescription className="mb-0 max-w-xl">
            {page.data.description}
          </DocsDescription>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
          <ViewOptions
            markdownUrl={`${page.url}.mdx`}
            githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${page.path}`}
          />
        </div>
      </div>
      <Separator />
      <DocsBody className="">
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(docsSource, page),
          })}
        />
      </DocsBody>
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
    metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
    robots: { index: true, follow: true },
  };
}

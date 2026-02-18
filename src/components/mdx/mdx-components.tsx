import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Banner } from "fumadocs-ui/components/banner";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import { GithubInfo } from "fumadocs-ui/components/github-info";
import { Step, Steps } from "fumadocs-ui/components/steps";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import { TypeTable } from "fumadocs-ui/components/type-table";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { ComponentPreview } from "@/module/common/component-preview";
import { ComponentsList } from "@/module/common/components-list";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    ...TabsComponents,
    Accordion,
    Accordions,
    TypeTable,
    Step,
    Steps,
    GithubInfo,
    File,
    Folder,
    Files,
    CodeBlock,
    Pre,
    Banner,
    ComponentsList,
    ComponentPreview,
  };
}

import type * as React from "react";
import { ComponentPreviewTabs } from "@/module/common/component-preview-tabs";
import {
  ComponentSource,
  type Components,
  components,
} from "@/module/common/components-source";

export function ComponentPreview({
  name,
  type = "component",
  className,
  previewClassName,
  align = "center",
  hideCode = false,
  chromeLessOnMobile = false,
  styleName = "new-york-v4",
  direction = "ltr",
  caption,
  ...props
}: React.ComponentProps<"div"> & {
  name: Components;
  styleName?: string;
  align?: "center" | "start" | "end";
  description?: string;
  hideCode?: boolean;
  type?: "block" | "component" | "example";
  chromeLessOnMobile?: boolean;
  previewClassName?: string;
  direction?: "ltr" | "rtl";
  caption?: string;
}) {
  const Component = components[name];

  if (!Component) {
    return (
      <p className="text-muted-foreground mt-6 text-sm">
        Component{" "}
        <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {name}
        </code>{" "}
        not found in registry.
      </p>
    );
  }

  const content = (
    <ComponentPreviewTabs
      className={className}
      previewClassName={previewClassName}
      align={align}
      hideCode={hideCode}
      source={
        <ComponentSource
          name={name}
          collapsible={false}
          styleName={styleName}
        />
      }
      sourcePreview={
        <ComponentSource
          name={name}
          collapsible={false}
          styleName={styleName}
          maxLines={3}
        />
      }
      chromeLessOnMobile={chromeLessOnMobile}
      direction={direction}
      styleName={styleName}
      {...props}
    >
      <Component />
    </ComponentPreviewTabs>
  );

  if (caption) {
    return (
      <figure
        data-hide-code={hideCode}
        className="flex flex-col data-[hide-code=true]:gap-4"
      >
        {content}
        <figcaption className="text-muted-foreground -mt-8 text-center text-sm data-[hide-code=true]:mt-0">
          {caption}
        </figcaption>
      </figure>
    );
  }

  return content;
}

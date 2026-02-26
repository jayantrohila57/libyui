import { Separator } from "@/components/ui/separator";
import { docsSource } from "@/module/docs/docs.options";
import { CommandMenu } from "@/module/docs/docs.search";
import { LLogo } from "../common/logo";

export function SiteHeader() {
  const pageTree = docsSource.pageTree;
  return (
    <header className="bg-background sticky top-0 z-50 w-full">
      <div className="3xl:fixed:px-0 px-6">
        <div className="flex h-(--header-height) items-center **:data-[slot=separator]:h-4!">
          <LLogo size={40} />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
              <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
                <CommandMenu
                  tree={pageTree}
                  navItems={[
                    {
                      href: "/docs",
                      label: "Docs",
                    },
                    {
                      href: "/docs/components",
                      label: "Components",
                    },
                    {
                      href: "/docs/blocks",
                      label: "Blocks",
                    },
                  ]}
                />
              </div>
            </div>
            <Separator
              orientation="vertical"
              className="ml-2 hidden lg:block"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

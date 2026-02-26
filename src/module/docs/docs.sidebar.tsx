"use client";

import type { Folder, Item, Node, Root } from "fumadocs-core/page-tree";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
} from "@/components/ui/sidebar";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  tree: Root;
}

export function AppSidebar({ tree, ...props }: AppSidebarProps) {
  return (
    <SidebarProvider collapsible="offcanvas" {...props}>
      <Sidebar side="left" variant="sidebar" collapsible="icon">
        <SidebarHeader>
          {/* Your logo, title, or toggle */}
          <h2 className="text-lg font-bold">App Name</h2>
        </SidebarHeader>

        <SidebarContent>
          {tree.children.map((node) => (
            <RenderNode
              key={node.$id ?? node.name?.toString() ?? "unknown"}
              node={node}
            />
          ))}
        </SidebarContent>

        <SidebarFooter>
          {/* Optional footer */}
          <div className="text-sm text-muted-foreground p-2">
            © Your Company
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}

function RenderNode({ node }: { node: Node }) {
  switch (node.type) {
    case "page":
      return <PageLink node={node} />;

    case "separator":
      return <SidebarSeparator />;

    case "folder":
      return <FolderGroup node={node} />;

    default:
      return null;
  }
}

function PageLink({ node }: { node: Item }) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        render={
          <Link href={node.url}>
            {node.icon}
            <span>{node.name}</span>
          </Link>
        }
        isActive={false}
      ></SidebarMenuButton>
    </SidebarMenuItem>
  );
}

function FolderGroup({ node }: { node: Folder }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{node.name}</SidebarGroupLabel>

      <SidebarMenu>
        {node.children.map((child) => (
          <RenderNode
            key={child.$id ?? child.name?.toString() ?? "unknown"}
            node={child}
          />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

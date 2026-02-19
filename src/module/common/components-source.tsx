import dynamic from "next/dynamic";
import { CodeCollapsibleWrapper } from "./code-collapsible-wrapper";

export const components = {
  button: dynamic(
    async () => import("@/components/ui/button").then((m) => m.Button),
    { ssr: true },
  ),
  card: dynamic(
    async () => import("@/components/ui/card").then((m) => m.Card),
    { ssr: true },
  ),
  cardHeader: dynamic(
    async () => import("@/components/ui/card").then((m) => m.CardHeader),
    { ssr: true },
  ),
  cardFooter: dynamic(
    async () => import("@/components/ui/card").then((m) => m.CardFooter),
    { ssr: true },
  ),
  cardTitle: dynamic(
    async () => import("@/components/ui/card").then((m) => m.CardTitle),
    { ssr: true },
  ),
  cardAction: dynamic(
    async () => import("@/components/ui/card").then((m) => m.CardAction),
    { ssr: true },
  ),
  cardDescription: dynamic(
    async () => import("@/components/ui/card").then((m) => m.CardDescription),
    { ssr: true },
  ),
  cardContent: dynamic(
    async () => import("@/components/ui/card").then((m) => m.CardContent),
    { ssr: true },
  ),
  separator: dynamic(
    async () => import("@/components/ui/separator").then((m) => m.Separator),
    { ssr: true },
  ),
} as const;

export type Components = keyof typeof components;

export const ComponentSource = ({
  name,
  title,
  styleName,
  className,
  ...props
}: {
  name: keyof typeof components;
  title?: string;
  styleName?: string;
  className?: string;
  [key: string]: unknown;
}) => {
  if (!name) {
    return null;
  }
  const Component = components[name];

  return (
    <CodeCollapsibleWrapper className={className}>
      <Component {...props} />
    </CodeCollapsibleWrapper>
  );
};

import dynamic from "next/dynamic";

const components = {
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

export const ComponentsList = ({
  component,
  ...props
}: {
  component: keyof typeof components;
  [key: string]: unknown;
}) => {
  const Component = components[component];

  return <Component {...props} />;
};

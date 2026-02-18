import dynamic from "next/dynamic";

const components = {
  button: dynamic(
    async () => import("@/components/ui/button").then((m) => m.Button),
    { ssr: true },
  ),
} as const;

export type Components = keyof typeof components;

export const ComponentsList = ({
  component,
  ...props
}: {
  component: keyof typeof components;
} & React.ComponentProps<(typeof components)[keyof typeof components]>) => {
  const Component = components[component];

  return <Component {...props} />;
};

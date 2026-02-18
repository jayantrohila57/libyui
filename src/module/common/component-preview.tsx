export const ComponentPreview = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className="relative bg-muted/30 mt-6 flex justify-center items-center aspect-[4/2.5] w-full overflow-hidden rounded-xl border md:-mx-1"
      {...props}
    />
  );
};

export const ComponentVariant = ({
  title,
  ...props
}: React.ComponentProps<"div"> & { title: string }) => {
  return (
    <div className="flex col-span-1 bg-background flex-col rounded-md gap-2">
      <div className="p-4 aspect-video rounded-md flex justify-center items-center h-full w-full">
        {props.children}
      </div>
    </div>
  );
};

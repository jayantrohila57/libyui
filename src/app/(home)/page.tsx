import Link from "next/link";
import { cn } from "@/lib/cn";

export default function HomePage() {
  return (
    <div className="h-full flex-1 w-full bg-background relative">
      <div
        className={cn(
          "absolute inset-0 z-0",
          "bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.2)_1px,transparent_0)]",
          "dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.2)_1px,transparent_0)]",
          "bg-size-[20px_20px]",
        )}
      />
      <div className="flex flex-col justify-center text-center h-full">
        <h1 className="text-2xl font-bold mb-4">Hello World</h1>
        <p>
          You can open{" "}
          <Link href="/docs" className="font-medium underline">
            /docs
          </Link>{" "}
          and see the documentation.
        </p>
      </div>
    </div>
  );
}

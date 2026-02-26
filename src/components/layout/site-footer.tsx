import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="w-full fixed p-4  bottom-0">
      <div className="text-sm max-w-340 mx-auto bg-background">
        Built by
        <Button
          variant={"link"}
          className={"mx-1 underline px-0"}
          render={
            <Link href="https://jayantrohila.com" target="_blank">
              Jayant Rohila
            </Link>
          }
        />
        , The source code is available on
        <Button
          variant={"link"}
          className={"mx-1 underline px-0"}
          render={
            <Link
              href="https://github.com/jayantrohila57/libyui"
              target="_blank"
            >
              GitHub
            </Link>
          }
        />
      </div>
    </footer>
  );
}

import { Pencil } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface EditOnGitHubProps {
  href: string;
}

export default function EditOnGitHub({ href }: EditOnGitHubProps) {
  return (
    <Button
      variant={"secondary"}
      render={
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <Pencil className="h-4 w-4" />
          <span>Edit on GitHub</span>
        </Link>
      }
    />
  );
}

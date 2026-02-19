import { FileIcon } from "lucide-react";
import { CSS } from "../svgl/css";
import { JavaScript } from "../svgl/javascript";
import { JSONIcon } from "../svgl/json";
import { TypeScript } from "../svgl/typescript";

export function getIconForLanguageExtension(language: string) {
  switch (language) {
    case "json":
      return <JSONIcon />;
    case "css":
      return <CSS />;
    case "js":
    case "jsx":
      return <JavaScript />;
    case "ts":
    case "tsx":
    case "typescript":
      return <TypeScript />;
    default:
      return <FileIcon />;
  }
}

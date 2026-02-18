import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type SlugInput = string | null | undefined;

interface CamelToSlugOptions {
  clean?: boolean; // remove non-alphanumeric chars
  fallback?: string; // return value if input is null/undefined/empty
}

export function camelToSlug(
  input: SlugInput,
  options: CamelToSlugOptions = {},
): string {
  const { clean = true, fallback = "" } = options;

  if (!input || typeof input !== "string") {
    return fallback;
  }

  const transformed = input
    // camelCase & PascalCase boundaries
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    // consecutive capitals (APIResponse → API-Response)
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    // spaces & underscores
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

  const cleaned = clean
    ? transformed
        .replace(/[^a-z0-9-]/g, "")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
    : transformed;

  return cleaned || fallback;
}

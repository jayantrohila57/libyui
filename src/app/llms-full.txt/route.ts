import { docsSource, getLLMText } from "@/module/docs/docs.options";

export const revalidate = false;

export async function GET() {
  const scan = docsSource.getPages().map(getLLMText);
  const scanned = await Promise.all(scan);

  return new Response(scanned.join("\n\n"));
}

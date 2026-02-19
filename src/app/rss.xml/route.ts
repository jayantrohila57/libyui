import { getRSS } from "@/lib/rss";

export const revalidate = 3600; // 1 hour

export async function GET() {
  return new Response(await getRSS(), {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}

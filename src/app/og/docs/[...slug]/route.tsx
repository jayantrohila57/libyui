/** biome-ignore-all lint/a11y/noSvgWithoutTitle: TODO: No need for now  but will fix it later */

import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { docsSource, getPageImage } from "@/module/docs/docs.options";

export const revalidate = false;

export async function GET(
  _req: Request,
  { params }: RouteContext<"/og/docs/[...slug]">,
) {
  const { slug } = await params;
  const page = docsSource.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return new ImageResponse(
    <div
      style={{
        background: "#000000",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: "80px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#ffffff",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <svg
          width={72}
          height={72}
          viewBox="0 0 140 140"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="10" width="120" height="120" rx={24} fill="#ffffff" />
          <g
            transform="translate(70, 70) scale(3.2) translate(-12, -12)"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            <path d="m16 6 4 14" />
            <path d="M12 6v14" />
            <path d="M8 8v12" />
            <path d="M4 4v16" />
          </g>
        </svg>

        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            opacity: 0.8,
          }}
        >
          LibyUI
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          maxWidth: "900px",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          {page.data.title}
        </div>

        {page.data.description && (
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.5,
              opacity: 0.7,
            }}
          >
            {page.data.description}
          </div>
        )}
      </div>

      <div
        style={{
          fontSize: 20,
          opacity: 0.5,
          fontWeight: 500,
        }}
      >
        libyui.dev
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}

export function generateStaticParams() {
  return docsSource.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}

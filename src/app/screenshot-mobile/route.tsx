/** biome-ignore-all lint/a11y/noSvgWithoutTitle: TODO: No need for now  but will fix it later */

import { ImageResponse } from "next/og";

export const contentType = "image/png";
export const size = {
  width: 375,
  height: 667,
};

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        background: "#000000",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: 20,
      }}
    >
      <svg
        width={80}
        height={80}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginBottom: 30 }}
      >
        <rect
          x="10"
          y="10"
          width="120"
          height="120"
          rx={20}
          fill="#000000"
          stroke="#ffffff"
          strokeWidth="2"
        />
        <g
          transform="translate(70, 70) scale(3.5) translate(-12, -12)"
          stroke="#ffffff"
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
      <div style={{ fontSize: 32, fontWeight: "bold", marginBottom: 15 }}>
        LibyUI
      </div>
      <div style={{ fontSize: 16, opacity: 0.8, textAlign: "center" }}>
        Modern UI Component Library
      </div>
      <div style={{ fontSize: 12, opacity: 0.6, marginTop: 20 }}>
        Built with React & TypeScript
      </div>
    </div>,
    {
      ...size,
    },
  );
}

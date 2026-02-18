/** biome-ignore-all lint/a11y/noSvgWithoutTitle: TODO: No need for now  but will fix it later */

import { ImageResponse } from "next/og";

export const contentType = "image/png";
export const size = {
  width: 1280,
  height: 720,
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
        padding: 40,
      }}
    >
      <svg
        width={120}
        height={120}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "block",
          marginBottom: 40,
        }}
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
      <div
        style={{
          display: "block",
          fontSize: 48,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        LibyUI
      </div>
      <div
        style={{
          display: "block",
          fontSize: 24,
          opacity: 0.8,
          textAlign: "center",
        }}
      >
        Modern UI Component Library
      </div>
      <div
        style={{
          display: "block",
          fontSize: 18,
          opacity: 0.6,
          marginTop: 30,
        }}
      >
        Built with React & TypeScript
      </div>
    </div>,
    {
      ...size,
    },
  );
}

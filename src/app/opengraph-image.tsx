/** biome-ignore-all lint/a11y/noSvgWithoutTitle: TODO: No need for now  but will fix it later */

import { ImageResponse } from "next/og";

// Image metadata
export const alt = "LibyUI";
export const size = {
  width: 1200,
  height: 630,
};
const borderRadius = 20;

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <svg
        width={40}
        height={40}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="10"
          y="10"
          width="120"
          height="120"
          rx={borderRadius}
          style={{
            fill: "#000000",
          }}
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
      LibyUI
    </div>,
    {
      ...size,
    },
  );
}

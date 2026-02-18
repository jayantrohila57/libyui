import * as React from "react";
import { cn } from "@/lib/utils";

type LLogoProps = {
  size?: number;
  borderRadius?: number;
  className?: string;
};

export const LLogo = React.forwardRef<SVGSVGElement, LLogoProps>(
  ({ size = 140, borderRadius = 20, className }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("text-secondary border rounded-sm", className)}
      >
        <title>LibyUI Logo</title>

        {/* Filled Background Square */}
        <rect
          x="10"
          y="10"
          width="120"
          height="120"
          rx={borderRadius}
          className="fill-current"
        />

        {/* Library Icon */}
        <g
          transform="translate(70, 70) scale(3.5) translate(-12, -12)"
          className="stroke-foreground"
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
    );
  },
);

LLogo.displayName = "LLogo";

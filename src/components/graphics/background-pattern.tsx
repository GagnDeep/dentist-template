import * as React from "react";
import { cn } from "@/lib/utils";

export function BackgroundPattern({ className }: { className?: string }) {
  return (
    <svg
      className={cn("absolute inset-0 -z-10 h-full w-full opacity-10", className)}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="dot-pattern"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1" className="fill-current text-primary" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-pattern)" />
    </svg>
  );
}

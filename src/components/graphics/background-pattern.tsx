import * as React from "react";
import { cn } from "@/lib/utils";

export function BackgroundPattern({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 -z-10 h-full w-full opacity-[0.03]", className)} aria-hidden="true">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="dot-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(0)"
          >
            <circle cx="2" cy="2" r="1.5" className="fill-current text-primary" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
      </svg>
      {/* Parallax Layer Effect (Simulated via CSS) */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)] dark:bg-[radial-gradient(circle_800px_at_100%_200px,#334155,transparent)] opacity-20"
      />
    </div>
  );
}

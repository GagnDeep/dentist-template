import * as React from "react";
import { cn } from "@/lib/utils";

const TextUnderline = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("relative inline-block", className)}
    {...props}
  >
    <span className="relative z-10">{children}</span>
    <svg
      className="absolute -bottom-1 left-0 h-3 w-full text-primary/60 dark:text-primary/40"
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
    >
      <path
        d="M0 5 Q 50 10 100 5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  </span>
));
TextUnderline.displayName = "TextUnderline";

export { TextUnderline };

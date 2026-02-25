import * as React from "react";
import { cn } from "@/lib/utils";

const TextHighlight = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "relative inline-block whitespace-nowrap px-1 z-0",
      className
    )}
    {...props}
  >
    <span className="absolute inset-0 -rotate-1 scale-105 rounded-sm bg-accent/40 dark:bg-accent/20 -z-10" />
    <span className="relative z-10">{children}</span>
  </span>
));
TextHighlight.displayName = "TextHighlight";

export { TextHighlight };

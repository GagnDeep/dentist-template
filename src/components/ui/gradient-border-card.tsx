"use client";

import { cn } from "@/lib/utils";

interface GradientBorderCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gradient?: string;
}

export function GradientBorderCard({
  children,
  className,
  gradient = "from-primary via-blue-500 to-teal-400",
  ...props
}: GradientBorderCardProps) {
  return (
    <div
      className={cn(
        "relative p-[1px] rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-lg",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-50 group-hover:opacity-100 transition-opacity duration-500",
          gradient
        )}
      />
      <div className="relative bg-background rounded-[11px] h-full">
        {children}
      </div>
    </div>
  );
}

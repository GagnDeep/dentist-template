"use client";

import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // seconds
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

export function LogoMarquee({
  children,
  className,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
}: LogoMarqueeProps) {
  return (
    <div className={cn("overflow-hidden w-full relative group", className)}>
      <div
        className={cn(
          "flex w-max min-w-full animate-marquee",
          direction === "right" && "animate-marquee-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        <div className="flex items-center gap-16 px-8 min-w-full justify-around shrink-0">
          {children}
        </div>
        <div className="flex items-center gap-16 px-8 min-w-full justify-around shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>

      {/* Gradient Masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>
    </div>
  );
}

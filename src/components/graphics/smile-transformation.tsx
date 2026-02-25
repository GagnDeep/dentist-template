"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function SmileTransformation({ className }: { className?: string }) {
  const [isAfter, setIsAfter] = useState(false);

  return (
    <div className={cn("relative w-full aspect-video bg-muted/30 rounded-xl overflow-hidden flex items-center justify-center border", className)}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <span className={cn(
          "text-6xl font-bold font-heading transition-all duration-500",
          isAfter ? "opacity-0 scale-50" : "opacity-10 text-muted-foreground scale-100"
        )}>
          Before
        </span>
        <span className={cn(
          "text-6xl font-bold font-heading transition-all duration-500 absolute",
          isAfter ? "opacity-10 text-primary scale-100" : "opacity-0 scale-50"
        )}>
          After
        </span>
      </div>

      <svg viewBox="0 0 300 150" className="w-full h-full max-w-[500px] z-0">
        {/* Gum Line */}
        <motion.path
          d={isAfter
            ? "M 50 40 Q 150 40 250 40"
            : "M 50 30 Q 150 60 250 30"}
          stroke="transparent"
          fill="none"
          initial={false}
          animate={{ d: isAfter ? "M 50 40 Q 150 40 250 40" : "M 50 30 Q 150 60 250 30" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* Teeth */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.rect
            key={i}
            x={60 + i * 32}
            width="28"
            height="40"
            rx="4"
            initial={false}
            animate={{
              y: isAfter ? 50 : 40 + (i % 2 === 0 ? -5 : 8),
              rotate: isAfter ? 0 : (i % 3 === 0 ? -5 : 5),
              fill: isAfter ? "#ffffff" : "#d1d5db"
            }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className={isAfter ? "drop-shadow-sm" : ""}
          />
        ))}

        {/* Sparkle (After only) */}
        <motion.path
          d="M 230 40 L 235 30 L 240 40 L 250 45 L 240 50 L 235 60 L 230 50 L 220 45 Z"
          fill="#fbbf24"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isAfter ? 1 : 0,
            opacity: isAfter ? 1 : 0,
            rotate: isAfter ? 180 : 0
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
      </svg>

      {/* Interactive Toggle */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1 bg-background/90 backdrop-blur p-1 rounded-full border shadow-lg z-20">
        <button
          onClick={() => setIsAfter(false)}
          className={cn(
            "text-sm font-medium transition-all px-6 py-2 rounded-full",
            !isAfter ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
          )}
        >
          Before
        </button>
        <button
          onClick={() => setIsAfter(true)}
          className={cn(
            "text-sm font-medium transition-all px-6 py-2 rounded-full",
            isAfter ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-primary"
          )}
        >
          After
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export function SmileTransformation({ className }: { className?: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0]!.clientX : (event as MouseEvent).clientX;
    const position = ((clientX - left) / width) * 100;

    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("touchmove", handleMove);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("touchmove", handleMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full aspect-video bg-muted/30 rounded-xl overflow-hidden cursor-ew-resize select-none border", className)}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* Before Layer (Base) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-slate-100 dark:bg-slate-900">
        <span className="text-9xl font-bold opacity-5 absolute top-4 left-4">Before</span>
        {/* Crooked Smile SVG */}
        <svg viewBox="0 0 300 150" className="w-full h-full max-w-[500px]">
           <path d="M 50 30 Q 150 60 250 30" stroke="transparent" fill="none" />
           {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect
              key={i}
              x={60 + i * 32}
              y={40 + (i % 2 === 0 ? 8 : -5)}
              width="28"
              height="40"
              rx="4"
              fill="#d1d5db"
              transform={`rotate(${i % 3 === 0 ? 5 : -5} ${74 + i * 32} 60)`}
            />
          ))}
        </svg>
      </div>

      {/* After Layer (Clipped) */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-50 dark:bg-slate-800"
        style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
      >
        <span className="text-9xl font-bold opacity-5 text-primary absolute bottom-4 right-4">After</span>
        {/* Perfect Smile SVG */}
        <svg viewBox="0 0 300 150" className="w-full h-full max-w-[500px]">
           <path d="M 50 40 Q 150 40 250 40" stroke="transparent" fill="none" />
           {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect
              key={i}
              x={60 + i * 32}
              y={50}
              width="28"
              height="40"
              rx="4"
              fill="#ffffff"
              className="drop-shadow-sm"
            />
          ))}
          <path
            d="M 230 40 L 235 30 L 240 40 L 250 45 L 240 50 L 235 60 L 230 50 L 220 45 Z"
            fill="#fbbf24"
          />
        </svg>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-xl"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-primary/20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary w-5 h-5">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="19 18 13 12 19 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

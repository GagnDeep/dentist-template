"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MouseParallaxProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MouseParallax({ children, className, strength = 20 }: MouseParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} className={cn("relative", className)} style={{ y: smoothY }}>
      {children}
    </motion.div>
  );
}

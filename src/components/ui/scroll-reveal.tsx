"use client";

import { motion, useInView, type Variants, domAnimation, LazyMotion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.5,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        className={cn(className)}
      >
        {children}
      </motion.div>
    </LazyMotion>
  );
}

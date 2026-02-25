"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const displayValue = useTransform(springValue, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, value, springValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

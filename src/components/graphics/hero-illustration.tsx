"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function HeroIllustration({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.circle
        cx="250"
        cy="250"
        r="200"
        className="fill-primary/10"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M250 100 C 300 100 350 150 350 250 C 350 350 300 400 250 400 C 200 400 150 350 150 250 C 150 150 200 100 250 100 Z"
        className="fill-white dark:fill-gray-800"
        stroke="currentColor"
        strokeWidth="4"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Abstract Tooth Shape */}
      <path
        d="M170 180
           C 170 120, 220 120, 220 160
           C 220 140, 280 140, 280 160
           C 280 120, 330 120, 330 180
           C 330 280, 290 350, 270 380
           L 250 350
           L 230 380
           C 210 350, 170 280, 170 180 Z"
        className="fill-primary text-primary-foreground"
      />
      {/* Shine */}
      <motion.path
        d="M200 180 Q 220 180 230 220"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        className="opacity-50"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Sparkles */}
      <motion.path
        d="M350 100 L 360 80 L 370 100 L 390 110 L 370 120 L 360 140 L 350 120 L 330 110 Z"
        className="fill-yellow-400"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.circle
        cx="120"
        cy="300"
        r="10"
        className="fill-blue-400"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.circle
        cx="400"
        cy="350"
        r="15"
        className="fill-teal-300"
        animate={{ x: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </motion.svg>
  );
}

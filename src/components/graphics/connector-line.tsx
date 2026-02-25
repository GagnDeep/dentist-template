"use client";

import { motion } from "framer-motion";

export function ConnectorLine() {
  return (
    <div className="absolute top-8 left-[12%] right-[12%] h-20 -z-10 hidden lg:block pointer-events-none">
      <svg className="w-full h-full" preserveAspectRatio="none">
        <motion.path
          d="M 0,10 Q 250,50 500,10 T 1000,10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary/20"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

export function HeroBadge() {
  return (
    <div className="relative z-10 flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute h-56 w-56 rounded-full border border-cyan-400/20 border-dashed"
      />

      <motion.div
        animate={{
          y: [0, -14, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex h-44 w-44 items-center justify-center rounded-full border border-cyan-300/40 bg-card text-4xl font-semibold tracking-[0.2em] text-cyan-300 shadow-[0_0_50px_rgba(34,211,238,0.3)]"
      >
        MKN
      </motion.div>
    </div>
  );
}
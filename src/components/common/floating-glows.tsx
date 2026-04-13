"use client";

import { motion } from "framer-motion";

export function FloatingGlows() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[5%] top-[8%] h-56 w-56 rounded-full bg-cyan-400/20 blur-[110px]"
      />

      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 45, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-[16%] h-64 w-64 rounded-full bg-emerald-400/18 blur-[120px]"
      />

      <motion.div
        animate={{ x: [0, 35, 0], y: [0, -30, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[8%] left-[20%] h-52 w-52 rounded-full bg-sky-400/14 blur-[115px]"
      />
    </div>
  );
}
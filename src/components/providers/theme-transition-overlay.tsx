"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";
import { useThemeTransition } from "./theme-transition";

export function ThemeTransitionOverlay() {
  const { resolvedTheme } = useTheme();
  const { x, y, isAnimating } = useThemeTransition();

  const glow =
    resolvedTheme === "dark"
      ? "radial-gradient(circle, rgba(34,211,238,0.20) 0%, rgba(16,185,129,0.10) 30%, rgba(4,8,13,0) 70%)"
      : "radial-gradient(circle, rgba(34,211,238,0.22) 0%, rgba(16,185,129,0.12) 30%, rgba(248,251,255,0) 70%)";

  return (
    <AnimatePresence>
      {isAnimating ? (
        <motion.div
          key={`${resolvedTheme}-${x}-${y}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 16 }}
          exit={{ opacity: 0, scale: 20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none fixed z-[100] h-24 w-24 rounded-full"
          style={{
            left: x - 48,
            top: y - 48,
            background: glow,
          }}
        />
      ) : null}
    </AnimatePresence>
  );
}
"use client";

import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "@/components/providers/theme-provider";
import { useThemeTransition } from "@/components/providers/theme-transition";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { triggerTransition } = useThemeTransition();

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        triggerTransition(x, y);
        setTheme(isDark ? "light" : "dark");
      }}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/70 backdrop-blur-md transition hover:scale-[1.03] hover:border-cyan-400/40"
      aria-label="Toggle theme"
    >
      <motion.div
        key={resolvedTheme}
        initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.28 }}
      >
        {isDark ? (
          <FiSun className="h-5 w-5 text-cyan-300" />
        ) : (
          <FiMoon className="h-5 w-5 text-slate-700" />
        )}
      </motion.div>
    </button>
  );
}
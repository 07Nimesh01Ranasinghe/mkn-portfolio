"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    x.set(offsetX * 0.18);
    y.set(offsetY * 0.18);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition will-change-transform";
  const styles =
    variant === "primary"
      ? "border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20"
      : "border border-border text-foreground hover:border-cyan-400/30 hover:bg-white/5";

  return (
    <motion.div style={{ x: springX, y: springY }}>
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`${base} ${styles}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
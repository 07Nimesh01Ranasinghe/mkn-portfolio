"use client";

import { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ParallaxSectionProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

export function ParallaxSection({
  children,
  className = "",
  intensity = 120,
}: ParallaxSectionProps) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1200], [0, -intensity]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function MouseSpotlight() {
  const [position, setPosition] = useState({ x: -320, y: -320 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-[1] h-80 w-80 rounded-full bg-cyan-400/8 blur-3xl"
      animate={{
        x: position.x - 160,
        y: position.y - 160,
      }}
      transition={{ type: "spring", stiffness: 55, damping: 18, mass: 0.45 }}
    />
  );
}
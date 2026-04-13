"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "@/lib/gsap";

export function LenisProvider({ children }: { children: ReactNode }) {
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.1,
    });

    const updateScrollTrigger = () => ScrollTrigger.update();
    lenis.on("scroll", updateScrollTrigger);

    function raf(time: number) {
      lenis.raf(time);
      frameRef.current = window.requestAnimationFrame(raf);
    }

    frameRef.current = window.requestAnimationFrame(raf);

    ScrollTrigger.refresh();

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      lenis.off("scroll", updateScrollTrigger);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

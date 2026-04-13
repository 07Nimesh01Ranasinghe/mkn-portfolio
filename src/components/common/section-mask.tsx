"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function SectionMask() {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const tween = gsap.fromTo(
        ref.current,
        {
          clipPath: "inset(100% 0% 0% 0% round 42px 42px 0 0)",
        },
        {
          clipPath: "inset(0% 0% 0% 0% round 0px 0px 0 0)",
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "top top",
            scrub: 1,
          },
        }
      );

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 z-10 bg-background"
    />
  );
}
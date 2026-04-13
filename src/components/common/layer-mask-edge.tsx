"use client";

export function LayerMaskEdge() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),rgba(255,255,255,0))] dark:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
    </div>
  );
}
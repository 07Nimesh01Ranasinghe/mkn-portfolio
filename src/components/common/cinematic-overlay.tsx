"use client";

export function CinematicOverlay() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[90]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_58%,rgba(0,0,0,0.34)_100%)]" />
      </div>

      <div className="pointer-events-none fixed inset-0 z-[91] opacity-[0.05] mix-blend-overlay">
        <div className="h-full w-full bg-[url('/noise.png')]" />
      </div>
    </>
  );
}
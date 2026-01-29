"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

// Lazy load the heavy canvas animation after initial paint
const InteractiveHero = dynamic(() => import("./InteractiveHero"), {
  ssr: false,
  loading: () => null,
});

export default function GradientBackground({ children }: { children: React.ReactNode }) {
  const [showAnimation, setShowAnimation] = useState(false);
  const isMobile = useIsMobile();

  // Delay animation load to prioritize content (skip on mobile entirely)
  useEffect(() => {
    if (isMobile) return;
    const timer = setTimeout(() => setShowAnimation(true), 100);
    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Static radial fallback for instant paint */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 20% 15%, rgba(6,182,212,0.15) 0%, rgba(0,0,0,0) 60%), radial-gradient(900px 500px at 80% 30%, rgba(139,92,246,0.12) 0%, rgba(0,0,0,0) 60%), radial-gradient(600px 400px at 60% 80%, rgba(236,72,153,0.08) 0%, rgba(0,0,0,0) 60%)",
          zIndex: 0,
        }}
      />

      {/* Animated linear gradient layer - paused on mobile via CSS */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-25 aurora-gradient"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(6,182,212,0.5), rgba(139,92,246,0.45), rgba(236,72,153,0.4))",
          backgroundSize: "400% 400%",
          animation: "auroraMove 24s linear infinite",
          zIndex: 0,
        }}
      />

      {/* Interactive particles and cubes - lazy loaded, disabled on mobile */}
      {!isMobile && showAnimation && (
        <div aria-hidden className="fixed inset-0 overflow-hidden" style={{ zIndex: 1 }}>
          <InteractiveHero />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

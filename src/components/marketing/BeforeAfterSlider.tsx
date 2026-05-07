"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(2, Math.min(98, x)));
  }, []);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  return (
    <section className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-fuchsia-400 font-medium tracking-widest uppercase text-sm mb-4">
            Transformation
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Before & after
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Drag the slider to see the difference a professional rebuild makes. Same business, completely different first impression.
          </p>
        </div>

        {/* Slider container */}
        <div
          ref={containerRef}
          className="relative rounded-2xl border border-white/[0.08] overflow-hidden cursor-col-resize select-none aspect-[16/10]"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
        >
          {/* "Before" side, outdated website design */}
          <div className="absolute inset-0">
            <Image
              src="/images/marketing/website-redesign-before-comparison.webp"
              alt="Before redesign, outdated website with poor layout, low contrast text, cluttered navigation, and no clear call-to-action"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover object-top"
            />
          </div>

          {/* "After" side, modern professional redesign */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <Image
              src="/images/marketing/website-redesign-after-comparison.webp"
              alt="After redesign, modern, high-converting website with clean layout, clear CTA buttons, mobile-responsive design, and professional branding"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover object-top"
            />
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-500/80 text-white text-xs font-bold z-10">
            BEFORE
          </div>
          <div
            className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/80 text-white text-xs font-bold z-10"
            style={{ opacity: position > 15 ? 1 : 0 }}
          >
            AFTER
          </div>

          {/* Drag handle */}
          <div
            className="absolute top-0 bottom-0 z-20"
            style={{ left: `${position}%`, transform: "translateX(-50%)" }}
          >
            <div className="w-0.5 h-full bg-white/60" />
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/90 border-2 border-white flex items-center justify-center shadow-lg shadow-black/50 cursor-col-resize">
              <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

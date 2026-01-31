"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";

interface ResponsiveVideoProps {
  videoSrc: string;
  posterSrc: string;
  playbackRate?: number;
  className?: string;
  overlayGradient?: string;
}

export default function ResponsiveVideo({
  videoSrc,
  posterSrc,
  playbackRate = 1,
  className = "w-full h-full object-cover",
  overlayGradient,
}: ResponsiveVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const isMobile = useIsMobile();

  // Intersection Observer for lazy loading on desktop
  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  // Set playback rate when video loads
  useEffect(() => {
    if (videoRef.current && isInView) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate, isInView]);

  // Mobile: show static poster image
  if (isMobile) {
    return (
      <div ref={containerRef} className="absolute inset-0 overflow-hidden">
        <Image
          src={posterSrc}
          alt=""
          fill
          className={className}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {overlayGradient && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: overlayGradient }}
          />
        )}
      </div>
    );
  }

  // Desktop: lazy-loaded video
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {isInView ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 min-w-full min-h-full ${className}`}
        >
          <source src={videoSrc} type="video/webm" />
        </video>
      ) : (
        <Image
          src={posterSrc}
          alt=""
          fill
          className={className}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}
      {overlayGradient && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: overlayGradient }}
        />
      )}
    </div>
  );
}

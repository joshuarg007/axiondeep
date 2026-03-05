"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface VideoWithPosterProps {
  /** WebP poster image path (loads instantly) */
  poster: string;
  /** MP4 video path (lazy-loaded when visible) */
  video: string;
  /** SEO-rich alt text for the poster image */
  alt: string;
  /** CSS class for the container */
  className?: string;
  /** Next.js Image sizes attribute for responsive loading */
  sizes?: string;
  /** Image priority hint (for above-the-fold hero) */
  priority?: boolean;
  /** Object-fit for the media (default: cover) */
  objectFit?: "cover" | "contain";
  /** Object-position CSS value */
  objectPosition?: string;
  /** Overlay element rendered on top */
  overlay?: React.ReactNode;
}

/**
 * Progressive media component: shows optimized WebP poster image instantly,
 * then lazy-loads MP4 video when the element scrolls into view.
 * Video auto-plays, loops, and is muted (decorative background pattern).
 */
export default function VideoWithPoster({
  poster,
  video,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
  objectFit = "cover",
  objectPosition = "center",
  overlay,
}: VideoWithPosterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  // IntersectionObserver — start loading video when container enters viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Respect reduced-motion preference — never load video
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-play video once it can play through
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid || !shouldLoad) return;

    const handleCanPlay = () => {
      vid.play().catch(() => {});
      setVideoLoaded(true);
    };

    vid.addEventListener("canplaythrough", handleCanPlay);
    return () => vid.removeEventListener("canplaythrough", handleCanPlay);
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Poster image — always present, loads instantly */}
      <Image
        src={poster}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-${objectFit} transition-opacity duration-700`}
        style={{ objectPosition }}
      />

      {/* Video — lazy-loaded, fades in on top of poster */}
      {shouldLoad && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectFit, objectPosition }}
        >
          <source src={video} type="video/mp4" />
        </video>
      )}

      {/* Optional overlay */}
      {overlay}
    </div>
  );
}

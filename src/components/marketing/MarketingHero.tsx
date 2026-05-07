"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import TypewriterText from "./TypewriterText";

const MarketingHeroCanvas = dynamic(() => import("./MarketingHeroCanvas"), {
  ssr: false,
});

const PHRASES = ["We Build.", "We Rank.", "We Convert."];

export default function MarketingHero() {
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  // Lazy-load hero video after poster image is painted
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleCanPlay = () => {
      vid.play().catch(() => {});
      setVideoReady(true);
    };
    vid.addEventListener("canplaythrough", handleCanPlay);
    return () => vid.removeEventListener("canplaythrough", handleCanPlay);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 overflow-hidden">
      {/* Background poster image, loads instantly for fast LCP */}
      <Image
        src="/images/marketing/hero-background-digital-network.webp"
        alt="Abstract digital network visualization with glowing cyan and violet nodes representing connected web infrastructure"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Background video, lazy-loaded, fades in over poster */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/images/marketing/hero-background-digital-network.mp4" type="video/mp4" />
      </video>

      {/* Canvas particle mesh, renders on top of video */}
      {!isMobile && <MarketingHeroCanvas />}

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-6 animate-fade-in">
          Axion Deep Marketing
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span
            className="block text-white mb-2"
            style={{ textShadow: "0 0 40px rgba(255,255,255,0.3)" }}
          >
            Websites That Work
          </span>
          <span className="block bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
            <TypewriterText phrases={PHRASES} />
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-2xl mx-auto animate-fade-in animation-delay-100">
          We build high-performance websites, rank them on Google, and capture every lead directly into your CRM.
        </p>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in animation-delay-200">
          Stop losing customers to bad websites and invisible search rankings. Our full-funnel approach means every visitor has a path to becoming a paying customer.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-200">
          <Link
            href="#seo-audit"
            className="shimmer-button px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold text-white hover:opacity-90 transition-opacity text-lg"
          >
            Get a Free SEO Audit
          </Link>
          <Link
            href="#services"
            className="px-8 py-4 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 transition-colors text-lg"
          >
            See Our Services
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect } from "react";

interface SolutionsClientProps {
  videoSrc: string;
  playbackRate?: number;
}

export default function SolutionsClient({ videoSrc, playbackRate = 1 }: SolutionsClientProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <div className="relative">
      <div className="relative rounded-2xl overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto"
        >
          <source src={videoSrc} type="video/webm" />
        </video>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 20%), linear-gradient(to left, rgba(0,0,0,0.3) 0%, transparent 20%)",
          }}
        />
      </div>
    </div>
  );
}

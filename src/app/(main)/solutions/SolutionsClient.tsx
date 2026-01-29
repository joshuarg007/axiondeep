"use client";

import ResponsiveVideo from "@/components/ResponsiveVideo";

interface SolutionsClientProps {
  videoSrc: string;
  posterSrc: string;
  playbackRate?: number;
}

export default function SolutionsClient({ videoSrc, posterSrc, playbackRate = 1 }: SolutionsClientProps) {
  return (
    <div className="relative">
      <div className="relative rounded-2xl overflow-hidden">
        <ResponsiveVideo
          videoSrc={videoSrc}
          posterSrc={posterSrc}
          playbackRate={playbackRate}
          className="w-full h-auto object-cover"
          overlayGradient="linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 20%), linear-gradient(to left, rgba(0,0,0,0.3) 0%, transparent 20%)"
        />
      </div>
    </div>
  );
}

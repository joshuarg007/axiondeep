"use client";

import { useState, useEffect, useRef } from "react";

interface Line {
  text: string;
  type: "command" | "output" | "success" | "blank";
  delay: number;
}

const LINES: Line[] = [
  { text: "$ npx create-next-app your-business", type: "command", delay: 0 },
  { text: "  Creating optimized production build...", type: "output", delay: 1200 },
  { text: "", type: "blank", delay: 1800 },
  { text: "$ site2crm init --crm hubspot", type: "command", delay: 2200 },
  { text: "  Connected to HubSpot CRM ✓", type: "success", delay: 3200 },
  { text: "  Lead capture form configured ✓", type: "success", delay: 3600 },
  { text: "", type: "blank", delay: 4000 },
  { text: "$ npm run audit --lighthouse", type: "command", delay: 4400 },
  { text: "  Performance:   98/100  ████████████████████ ", type: "success", delay: 5400 },
  { text: "  SEO:          100/100  ████████████████████ ", type: "success", delay: 5800 },
  { text: "  Accessibility:  97/100  ███████████████████▌ ", type: "success", delay: 6200 },
  { text: "", type: "blank", delay: 6600 },
  { text: "$ site2crm deploy --production", type: "command", delay: 7000 },
  { text: "  Deploying to edge network...", type: "output", delay: 7800 },
  { text: "  ✓ Live at https://your-business.com", type: "success", delay: 8600 },
];

export default function TerminalSection() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [, setTypingIndex] = useState(0);
  const [currentTyped, setCurrentTyped] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  function startAnimation() {
    LINES.forEach((line, i) => {
      setTimeout(() => {
        if (line.type === "command") {
          // Type out command character by character
          const chars = line.text.split("");
          chars.forEach((_, ci) => {
            setTimeout(() => {
              setCurrentTyped(line.text.slice(0, ci + 1));
              setTypingIndex(i);
            }, ci * 30);
          });
          setTimeout(() => {
            setVisibleLines(i + 1);
            setCurrentTyped("");
          }, chars.length * 30 + 50);
        } else {
          setVisibleLines(i + 1);
        }
      }, line.delay);
    });
  }

  useEffect(() => {
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) {
      const id = setTimeout(() => setVisibleLines(LINES.length), 0);
      return () => clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          startAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4">
            Under The Hood
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Engineering-grade websites
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We&apos;re not a template shop. Every site is custom-built with modern frameworks, optimized for performance, and connected to your CRM from day one.
          </p>
        </div>

        {/* Terminal window */}
        <div className="rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/50">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs text-gray-600 font-mono">terminal — axion-deep</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 bg-[#0a0a0f] font-mono text-sm leading-relaxed min-h-[380px]">
            {LINES.slice(0, visibleLines).map((line, i) => (
              <div key={i} className={`${line.type === "blank" ? "h-4" : ""}`}>
                {line.type === "command" && (
                  <span className="text-cyan-400">{line.text}</span>
                )}
                {line.type === "output" && (
                  <span className="text-gray-500">{line.text}</span>
                )}
                {line.type === "success" && (
                  <span className="text-emerald-400">{line.text}</span>
                )}
              </div>
            ))}
            {/* Currently typing line */}
            {currentTyped && (
              <div>
                <span className="text-cyan-400">{currentTyped}</span>
                <span className="inline-block w-2 h-4 bg-cyan-400 ml-0.5 animate-pulse" />
              </div>
            )}
            {/* Blinking cursor at end */}
            {visibleLines >= LINES.length && (
              <div className="mt-2">
                <span className="text-gray-600">$ </span>
                <span className="inline-block w-2 h-4 bg-cyan-400/60 animate-pulse" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Metric {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const METRICS: Metric[] = [
  { label: "Leads Captured", value: 12847, prefix: "" },
  { label: "Sites Optimized", value: 340, prefix: "" },
  { label: "Uptime", value: 99.9, suffix: "%", decimals: 1 },
  { label: "Client Satisfaction", value: 4.9, suffix: "/5", decimals: 1 },
];

function useCountUp(target: number, duration: number, start: boolean, decimals = 0) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  const animate = useCallback(() => {
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    rafRef.current = requestAnimationFrame(step);
  }, [target, duration, decimals]);

  useEffect(() => {
    if (start) animate();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, animate]);

  return value;
}

function MetricItem({ metric, start }: { metric: Metric; start: boolean }) {
  const value = useCountUp(metric.value, 2000, start, metric.decimals || 0);

  return (
    <div className="text-center px-6 py-4">
      <div className="text-2xl md:text-3xl font-bold text-white mb-1">
        {metric.prefix}
        {metric.decimals ? value.toFixed(metric.decimals) : value.toLocaleString()}
        {metric.suffix}
      </div>
      <div className="text-sm text-gray-500 font-medium">{metric.label}</div>
    </div>
  );
}

export default function MetricsTicker() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="border-y border-white/[0.06] bg-white/[0.02]"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
        {METRICS.map((metric) => (
          <MetricItem key={metric.label} metric={metric} start={started} />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLElement>(null);

  // Find the actual scroll container (.snap-container) instead of window
  useEffect(() => {
    const el = document.querySelector(".snap-container") as HTMLElement | null;
    scrollContainerRef.current = el || document.documentElement;
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainerRef,
    offset: ["start end", "end start"],
  });

  const wireframeOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const designOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const seoOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const leadsOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);
  const crmOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);

  // Progress indicator
  const progressWidth = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative" style={{ height: "300vh" }}>
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
        <div className="text-center mb-8">
          <p className="text-violet-400 font-medium tracking-widest uppercase text-sm mb-3">
            The Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Watch a website come to life
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Scroll to see each stage of our build process
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-2xl h-1 bg-white/[0.06] rounded-full mb-8 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 rounded-full"
            style={{ width: progressWidth }}
          />
        </div>

        {/* Browser mockup */}
        <div className="w-full max-w-3xl">
          <div className="rounded-xl border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/50">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] border-b border-white/[0.06]">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <div className="flex-1 mx-4 px-3 py-1 bg-white/[0.04] rounded-md text-xs text-gray-500 font-mono">
                https://your-business.com
              </div>
            </div>

            {/* Content area */}
            <div className="relative bg-[#080810] aspect-[16/9] overflow-hidden">
              {/* Layer 1: Wireframe */}
              <motion.div className="absolute inset-0 p-6" style={{ opacity: wireframeOpacity }}>
                <div className="space-y-4">
                  <div className="h-8 bg-white/[0.04] rounded w-full" />
                  <div className="h-40 bg-white/[0.03] rounded border border-dashed border-white/[0.08] flex items-center justify-center">
                    <span className="text-gray-700 text-xs font-mono">hero-section</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-24 bg-white/[0.03] rounded border border-dashed border-white/[0.08]" />
                    <div className="h-24 bg-white/[0.03] rounded border border-dashed border-white/[0.08]" />
                    <div className="h-24 bg-white/[0.03] rounded border border-dashed border-white/[0.08]" />
                  </div>
                </div>
              </motion.div>

              {/* Layer 2: Design */}
              <motion.div className="absolute inset-0 p-6" style={{ opacity: designOpacity }}>
                <div className="space-y-4">
                  <div className="h-8 bg-gradient-to-r from-white/[0.06] to-white/[0.03] rounded flex items-center px-3">
                    <div className="w-16 h-4 bg-cyan-500/30 rounded" />
                    <div className="ml-auto flex gap-2">
                      <div className="w-10 h-3 bg-white/[0.08] rounded" />
                      <div className="w-10 h-3 bg-white/[0.08] rounded" />
                      <div className="w-10 h-3 bg-white/[0.08] rounded" />
                    </div>
                  </div>
                  <div className="h-40 bg-gradient-to-br from-cyan-500/15 to-violet-500/15 rounded-lg flex flex-col items-center justify-center">
                    <div className="w-48 h-5 bg-white/20 rounded mb-2" />
                    <div className="w-32 h-3 bg-white/10 rounded mb-4" />
                    <div className="w-28 h-8 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-24 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 rounded-lg border border-cyan-500/20 p-3">
                      <div className="w-6 h-6 bg-cyan-500/20 rounded mb-2" />
                      <div className="w-full h-2 bg-white/[0.06] rounded" />
                    </div>
                    <div className="h-24 bg-gradient-to-br from-violet-500/10 to-violet-500/5 rounded-lg border border-violet-500/20 p-3">
                      <div className="w-6 h-6 bg-violet-500/20 rounded mb-2" />
                      <div className="w-full h-2 bg-white/[0.06] rounded" />
                    </div>
                    <div className="h-24 bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-500/5 rounded-lg border border-fuchsia-500/20 p-3">
                      <div className="w-6 h-6 bg-fuchsia-500/20 rounded mb-2" />
                      <div className="w-full h-2 bg-white/[0.06] rounded" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Layer 3: SEO metadata floating panels */}
              <motion.div className="absolute inset-0 p-6" style={{ opacity: seoOpacity }}>
                <div className="relative h-full">
                  <motion.div
                    className="absolute top-2 right-2 px-3 py-2 bg-white/[0.06] backdrop-blur-sm border border-white/[0.1] rounded-lg"
                    initial={{ x: 20 }}
                    animate={{ x: 0 }}
                  >
                    <p className="text-[10px] text-gray-500">Title Tag</p>
                    <p className="text-[11px] text-emerald-400 font-mono">Your Business | #1 Service</p>
                  </motion.div>
                  <motion.div
                    className="absolute top-16 left-2 px-3 py-2 bg-white/[0.06] backdrop-blur-sm border border-white/[0.1] rounded-lg"
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                  >
                    <p className="text-[10px] text-gray-500">Schema</p>
                    <p className="text-[11px] text-cyan-400 font-mono">LocalBusiness ✓</p>
                  </motion.div>
                  <motion.div className="absolute bottom-8 right-4 px-3 py-2 bg-white/[0.06] backdrop-blur-sm border border-white/[0.1] rounded-lg">
                    <p className="text-[10px] text-gray-500">Core Web Vitals</p>
                    <div className="flex gap-2 mt-1">
                      <span className="text-[10px] text-emerald-400">LCP ✓</span>
                      <span className="text-[10px] text-emerald-400">FID ✓</span>
                      <span className="text-[10px] text-emerald-400">CLS ✓</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Layer 4: Leads counter */}
              <motion.div className="absolute inset-0 flex items-center justify-center" style={{ opacity: leadsOpacity }}>
                <div className="text-center">
                  <motion.div
                    className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400"
                    style={{ WebkitTextFillColor: "transparent" }}
                  >
                    347
                  </motion.div>
                  <p className="text-gray-400 mt-2">leads captured this month</p>
                  <div className="flex justify-center gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-cyan-400"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Layer 5: CRM icons */}
              <motion.div className="absolute inset-0 flex items-center justify-center gap-8" style={{ opacity: crmOpacity }}>
                {["HubSpot", "Salesforce", "Pipedrive"].map((crm, i) => (
                  <motion.div
                    key={crm}
                    className="flex flex-col items-center gap-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center">
                      <span className="text-xs font-bold text-white/60">{crm[0]}</span>
                    </div>
                    <span className="text-[10px] text-gray-500">{crm}</span>
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stage labels */}
        <div className="flex justify-center gap-6 mt-6 text-xs text-gray-600">
          <motion.span style={{ opacity: wireframeOpacity }} className="text-white">Wireframe</motion.span>
          <motion.span style={{ opacity: designOpacity }} className="text-white">Design</motion.span>
          <motion.span style={{ opacity: seoOpacity }} className="text-white">SEO</motion.span>
          <motion.span style={{ opacity: leadsOpacity }} className="text-white">Leads</motion.span>
          <motion.span style={{ opacity: crmOpacity }} className="text-white">CRM</motion.span>
        </div>
      </div>
    </section>
  );
}

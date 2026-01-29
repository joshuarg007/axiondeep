"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

export default function HomeClient() {
  return (
    <>
      {/* Animated CTA buttons */}
      <motion.div
        initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
      >
        <Link
          href="/solutions"
          className="group px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all flex items-center gap-2"
        >
          View Our Work
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <Link
          href="/contact"
          className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all"
        >
          Start a Project
        </Link>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-white/40"
          />
        </div>
      </motion.div>
    </>
  );
}

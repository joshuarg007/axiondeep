import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

export default function Home() {
  return (
    <div className="text-center">
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        Axion Deep
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl text-gray-300 mb-8"
        initial={prefersReduced ? false : { opacity: 0 }}
        animate={prefersReduced ? {} : { opacity: 1 }}
        transition={prefersReduced ? {} : { delay: 0.3, duration: 0.9 }}
      >
        From Thought to Precision
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-gray-400 mb-10"
        initial={prefersReduced ? false : { opacity: 0 }}
        animate={prefersReduced ? {} : { opacity: 1 }}
        transition={prefersReduced ? {} : { delay: 0.6, duration: 0.9 }}
      >
        <h3>
          Advancing the frontiers of intelligent systems, quantum-inspired
          computation, and data sciences. Our focus is inquiry and discovery: exploring, prototyping, and
          validating new architectures that bridge scientific depth with engineering rigor.
        </h3>
      </motion.p>


      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to="/solutions"
          aria-label="Explore Axion Deep solutions"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 font-semibold hover:opacity-90 transition"
        >
          Explore Solutions
        </Link>
        <Link
          to="/contact"
          aria-label="Contact Axion Deep"
          className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition"
        >
          Contact Us
        </Link>
      </div>

      <div className="mt-16 text-xs tracking-widest text-gray-500">
        AI • DATA SYSTEMS • INTEGRATION • SECURITY • RELIABILITY
      </div>
    </div>
  );
}

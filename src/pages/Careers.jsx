import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const SectionTitle = ({ children }) => (
  <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-center md:text-left text-white">
    {children}
  </h1>
);

const domains = [
  {
    title: "AI Foundations",
    lines: [
      "Reasoning systems and cognitive architectures",
      "Evaluation and alignment frameworks",
      "Theory of emergent intelligence",
    ],
  },
  {
    title: "Quantum Algorithms",
    lines: [
      "Quantum-inspired optimization and simulation",
      "Hybrid Q-classical workflows",
      "Novel circuit approximations",
    ],
  },
  {
    title: "Simulations & XR Systems",
    lines: [
      "Spatial computing environments",
      "Haptic and embodied interfaces",
      "Synthetic data for model evolution",
    ],
  },
  {
    title: "Advanced Systems & Web Technologies",
    lines: [
      "Autonomous distributed systems",
      "Next-gen internet protocols",
      "Real-time graph compute pipelines",
    ],
  },
  {
    title: "Research Infrastructure",
    lines: [
      "Continuous experimentation frameworks",
      "Data observability and provenance",
      "Scalable open science stacks",
    ],
  },
];

export default function Careers() {
  return (
    <div className="relative z-10 text-gray-300 space-y-20 max-w-5xl mx-auto px-6 md:px-8 lg:px-12 pt-32 md:pt-40">
      <SEO
        title="Careers - Join Our Custom Software Development Team"
        description="Join Axion Deep Labs: We're hiring software developers, AI engineers, and full-stack developers passionate about building custom software solutions. Remote-first, cutting-edge projects."
        keywords="software developer jobs, custom software development careers, AI engineer positions, full-stack developer jobs, React developer careers, Python developer jobs, remote software jobs, software development company careers"
        canonical="/careers"
      />
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <SectionTitle>Careers at Axion Deep Labs</SectionTitle>

        <motion.p
          className="max-w-3xl leading-relaxed text-lg"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We are a collective of researchers, engineers, and experimentalists exploring the next
          layer of intelligence, computation, and human–machine interaction. We don’t hire to fill
          roles — we assemble people who want to redefine the limits of what’s computationally
          possible.
        </motion.p>

        <motion.p
          className="max-w-2xl text-gray-400"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          Axion Deep Labs operates as a hybrid research network. Our members span AI theory, quantum
          computation, systems architecture, and applied mathematics — working remotely,
          asynchronously, and experimentally. If you prototype at 3 AM to test a hypothesis, you’ll
          fit right in.
        </motion.p>
      </motion.div>

      {/* Research Domains (same card style as Mission focus tiles) */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Research Domains</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {domains.map((d) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative border border-white/10 rounded-2xl bg-white/5 p-6 overflow-hidden backdrop-blur-sm hover:bg-white/10 transition"
            >
              <div className="font-semibold text-white mb-3">{d.title}</div>
              <ul className="space-y-2 text-sm text-gray-300">
                {d.lines.map((l, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400/70" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA (matches Mission typography/colors) */}
      <div className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-white">Join Us</h2>
        <p className="text-gray-400 max-w-2xl">
          We collaborate with curious minds — researchers, builders, and dreamers who want to
          advance computational science. Tell us what you’re working on, or the question you can’t
          stop thinking about.
        </p>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold hover:opacity-90 transition"
        >
          Contact the Labs
        </Link>
      </div>
    </div>
  );
}

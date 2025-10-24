import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ children }) => (
  <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-center md:text-left text-white">
    {children}
  </h1>
);

const items = [
  {
    title: "Intelligent Systems",
    bullets: [
      "Reasoning & evaluation loops",
      "Retrieval + simulation pipelines",
      "Operator-in-the-loop tooling",
    ],
  },
  {
    title: "Quantum-Inspired Methods",
    bullets: [
      "Hybrid optimization workflows",
      "Annealing simulators & heuristics",
      "Constraint modeling at scale",
    ],
  },
  {
    title: "Advanced Systems & Web",
    bullets: [
      "Real-time graph compute",
      "Edge orchestration & caching",
      "High-fidelity interfaces",
    ],
  },
  {
    title: "Simulations (VR/AR)",
    bullets: [
      "Spatial research environments",
      "Embodied interaction models",
      "Synthetic data generation",
    ],
  },
];

export default function Solutions() {
  return (
    <div className="relative z-10 text-gray-300 space-y-20 max-w-5xl mx-auto px-6 md:px-8 lg:px-12 pt-32 md:pt-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle>Research & Applied Work</SectionTitle>

        <p className="max-w-3xl leading-relaxed text-lg text-gray-300">
          Exploratory programs that translate ideas into validated capabilities. These are not
          “products” — they are living research tracks we open to collaborators when the science
          warrants it.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {items.map((x) => (
            <motion.div
              key={x.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative border border-white/10 rounded-2xl bg-white/5 p-6 overflow-hidden backdrop-blur-sm hover:bg-white/10 transition"
            >
              <h3 className="font-semibold text-white text-xl mb-3">{x.title}</h3>
              <ul className="space-y-2 text-sm">
                {x.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-sm text-gray-400">
          Interested in collaborating on a specific track?{" "}
          <a href="/contact" className="underline hover:text-gray-300">
            Contact the labs
          </a>
          .
        </div>
      </motion.div>
    </div>
  );
}

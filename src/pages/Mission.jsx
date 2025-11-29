import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SectionTitle = ({ children }) => (
  <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-center md:text-left text-white">
    {children}
  </h1>
);

function FocusTile({ title, lines }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="relative border border-white/10 rounded-2xl bg-white/5 p-6 overflow-hidden backdrop-blur-sm hover:bg-white/10 transition"
      whileHover={{ borderColor: "rgba(6,182,212,0.4)" }}
    >
      <div className="flex items-center justify-between">
        <div className="font-semibold text-white">{title}</div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hover ? 1 : 0 }}
          className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
        >
          focus
        </motion.div>
      </div>

      <AnimatePresence>
        {hover && (
          <motion.ul
            key="lines"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="mt-3 text-sm text-gray-300 space-y-1.5"
          >
            {lines.map((l, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400/70" />
                <span>{l}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Mission() {
  return (
    <div className="relative z-10 text-gray-300 space-y-20 max-w-5xl mx-auto px-6 md:px-8 lg:px-12 pt-32 md:pt-40">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle>Mission & Research Direction</SectionTitle>

        <motion.div
          className="text-gray-300 max-w-4xl leading-relaxed text-lg space-y-4"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            <span className="text-white font-semibold">Axion Deep Labs</span> is
            a research organization focused on exploring, designing, and
            demonstrating the next generation of intelligent and computational
            systems. We study the edges of what’s possible in AI, data, and
            quantum-inspired computation—without the constraints of traditional
            product cycles.
          </p>
          <p>
            Our mission is to pursue disciplined, hypothesis-driven research
            that unites theoretical rigor with practical experimentation. We
            operate in compact, cross-functional teams that function as
            scientific units—observing, modeling, simulating, and verifying to
            turn curiosity into clarity.
          </p>
          <p>
            Every experiment seeks clarity. Every prototype exists to test a
            principle. Every breakthrough is documented for reproducibility.{" "}
            <span className="text-white font-semibold">
              From exploration to precision,
            </span>{" "}
            Axion Deep Labs exists to advance the state of computational science
            and turn discovery into foundation.
          </p>
        </motion.div>

        {/* Focus Areas */}
        <div className="mt-16 space-y-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Focus Domains
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FocusTile
              title="Artificial Intelligence"
              lines={[
                "Evaluation over intuition",
                "Hybrid symbolic-neural architectures",
                "Alignment and interpretability studies",
              ]}
            />
            <FocusTile
              title="Quantum-Inspired Computing"
              lines={[
                "Combinatorial optimization models",
                "Quantum annealing simulation frameworks",
                "Error-aware hybrid algorithms",
              ]}
            />
            <FocusTile
              title="Data Systems"
              lines={[
                "Knowledge graph evolution",
                "Data provenance and observability",
                "Scalable semantic layers",
              ]}
            />
            <FocusTile
              title="Systems Engineering"
              lines={[
                "Low-latency inference pipelines",
                "Edge compute orchestration",
                "Fault-tolerant distributed design",
              ]}
            />
            <FocusTile
              title="Human + Machine Interfaces"
              lines={[
                "Augmented analysis environments",
                "Operator-in-the-loop design",
                "Adaptive cognitive workloads",
              ]}
            />
            <FocusTile
              title="Research Infrastructure"
              lines={[
                "Experiment tracking and reproducibility",
                "Automated benchmarking pipelines",
                "Transparent governance and documentation",
              ]}
            />
          </div>
        </div>

        {/* Research Methodology */}
        <div className="grid md:grid-cols-3 gap-12 mt-20">
          <section className="space-y-4">
            <div className="h-px bg-gradient-to-r from-cyan-400/60 to-violet-500/60" />
            <h3 className="text-xl font-semibold text-white tracking-wide">
              Investigate
            </h3>
            <p className="text-sm text-gray-300">
              Each project begins with a question, a hypothesis, and a boundary.
            </p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <span className="text-white">Observe:</span> collect data, study
                prior art, identify signal.
              </li>
              <li>
                <span className="text-white">Formulate:</span> pose measurable
                hypotheses, define validation metrics.
              </li>
              <li>
                <span className="text-white">Document:</span> maintain
                transparent rationale for every decision.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="h-px bg-gradient-to-r from-cyan-400/60 to-violet-500/60" />
            <h3 className="text-xl font-semibold text-white tracking-wide">
              Prototype
            </h3>
            <p className="text-sm text-gray-300">
              Build only what is necessary to test a theory.
            </p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <span className="text-white">Model:</span> create minimal viable
                simulations or proofs.
              </li>
              <li>
                <span className="text-white">Measure:</span> collect empirical
                data, validate hypotheses.
              </li>
              <li>
                <span className="text-white">Iterate:</span> adapt based on
                quantitative outcomes.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="h-px bg-gradient-to-r from-cyan-400/60 to-violet-500/60" />
            <h3 className="text-xl font-semibold text-white tracking-wide">
              Translate
            </h3>
            <p className="text-sm text-gray-300">
              Convert insight into usable frameworks or open research artifacts.
            </p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <span className="text-white">Publish:</span> share results with
                clarity and reproducibility.
              </li>
              <li>
                <span className="text-white">Refine:</span> apply lessons to
                improve future experiments.
              </li>
              <li>
                <span className="text-white">Collaborate:</span> partner with
                academic and industry labs to expand impact.
              </li>
            </ul>
          </section>
        </div>
      </motion.div>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import researchQuantum from "../assets/images/research-quantum.webp";

export default function Research() {
  return (
    <div className="relative z-10 text-gray-300 space-y-20 max-w-5xl mx-auto px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-20">
      <SEO
        title="Research & Innovation | Custom Software R&D"
        description="Axion Deep Labs research program: Project DRIFT investigates quantum system behavior. Our R&D drives innovation in custom software solutions, AI development, and emerging technologies."
        keywords="software research and development, quantum computing research, AI research, custom software innovation, technology R&D, software development research, emerging technology development"
        canonical="/research"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm text-violet-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
          </span>
          Research Program
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold text-white">
          Frontier Research
        </h1>

        <p className="max-w-3xl leading-relaxed text-lg text-gray-400">
          Our research program investigates fundamental questions about quantum system behavior
          that lack closed-form analytical solutions. We conduct hypothesis-driven experimentation
          to characterize phenomena that must be observed empirically.
        </p>

        {/* Research Image */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8"
        >
          <img
            src={researchQuantum}
            alt="Quantum computing and AI research at Axion Deep Labs"
            className="w-full rounded-2xl shadow-xl"
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      {/* Project DRIFT */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-8"
      >
        <div className="relative border border-violet-500/20 rounded-2xl bg-gradient-to-br from-violet-900/10 to-indigo-900/10 overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }} />
          </div>

          <div className="relative p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div>
                <span className="text-xs font-mono text-violet-400 tracking-widest uppercase mb-3 block">
                  Active Research Program
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Project DRIFT
                </h2>
                <p className="text-violet-300/80 text-lg">
                  Degradation Regimes In Iterated Field Transformations
                </p>
              </div>
              <span className="shrink-0 text-xs px-4 py-2 rounded-full bg-violet-500/10 text-violet-300 border border-violet-400/20 font-medium">
                In Progress
              </span>
            </div>

            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">
                DRIFT investigates behavioral uncertainty in quantum system state evolution under
                repeated manipulation. We focus on the gradual degradation of stability under
                variation in operator ordering and diversity, in regimes where closed-form
                analytical prediction is not feasible across all configurations.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                    Research Themes
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                      <span>State distribution dynamics under iteration</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                      <span>Operator ordering effects on error profiles</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                      <span>Operator diversity as experimental variable</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                      <span>Predictability boundaries and stability thresholds</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                    Scientific Foundation
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                      <span>Tranter et al. (2019) on ordering and Trotter error</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                      <span>Nakamura &amp; Ankerhold (2024) on non-Markovian effects</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                      <span>Huang et al. (2024) on diversity as design axis</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                      <span>Kwon et al. (2021) on gate-based quantum computing</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-gray-500">
                  This research program addresses questions with genuinely unknown answers,
                  involves technical uncertainty that requires empirical investigation, and
                  aims to generate transferable knowledge through systematic experimentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Research Instrument: QUANTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-white">Research Instrument</h2>

        <div className="border border-white/10 rounded-xl bg-white/[0.03] p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
              <span className="text-cyan-400 text-xl">Q</span>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  QUANTA Platform
                </h3>
                <p className="text-sm text-gray-500">Primary research instrument for Project DRIFT</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                QUANTA serves as the systematic experimentation environment for DRIFT research.
                The platform enables configuration of operator sequences, collection of behavioral
                data across parameter variations, and documentation of experimental procedures
                and observations. Research findings inform the platform's educational capabilities.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                  Quantum State Simulation
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                  Gate Sequence Configuration
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                  Data Collection
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                  Experiment Documentation
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 italic">
          Note: QUANTA is also available as an educational platform for learning quantum computing
          fundamentals. See our <Link to="/projects/quanta" className="text-violet-400 hover:text-violet-300 underline">education offering</Link> for
          curriculum and subscription information.
        </p>
      </motion.section>

      {/* Research Approach */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-white">Research Approach</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Hypothesis-Driven",
              desc: "Each experiment tests a specific, falsifiable hypothesis about system behavior under defined conditions."
            },
            {
              title: "Systematic Observation",
              desc: "We characterize phenomena through controlled variation of parameters and rigorous data collection."
            },
            {
              title: "Knowledge Creation",
              desc: "Findings are documented for transferability, contributing to the broader scientific understanding of quantum system behavior."
            }
          ].map((item, i) => (
            <div key={i} className="border border-white/10 rounded-xl bg-white/[0.03] p-6 space-y-3">
              <h3 className="text-white font-medium">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Publications Placeholder */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-white">Publications</h2>

        <div className="border border-dashed border-white/20 rounded-xl bg-white/[0.02] p-8 text-center">
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-300">Research in Progress</h3>
            <p className="text-sm text-gray-500">
              Findings will be published when we have reproducible results meeting
              our documentation standards. We prioritize rigor over speed.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center space-y-6 pt-8"
      >
        <h2 className="text-2xl font-semibold text-white">Research Collaboration</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          We welcome inquiries from academic institutions and researchers working on
          related questions in quantum system behavior, simulation methods, or educational
          technology for quantum computing.
        </p>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 font-semibold hover:opacity-90 transition"
        >
          Contact Research Team
        </Link>
      </motion.section>
    </div>
  );
}

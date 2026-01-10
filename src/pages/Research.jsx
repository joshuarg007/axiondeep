import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Research() {
  return (
    <div className="relative z-10 text-gray-300 space-y-20 max-w-5xl mx-auto px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-20">
      <SEO
        title="Research | Axion Deep Labs"
        description="Frontier research initiatives at Axion Deep Labs. Exploring the boundaries of what's possible in quantum systems, AI reasoning, and emergent computation."
        keywords="research, quantum computing research, AI research, frontier technology, computational research"
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
          Research Division
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold text-white">
          Frontier Research
        </h1>

        <p className="max-w-3xl leading-relaxed text-lg text-gray-400">
          We operate at the boundary between theoretical possibility and practical application.
          Our research initiatives explore questions that don't yet have products—only hypotheses,
          experiments, and the occasional breakthrough.
        </p>
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
                  Active Research
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Project DRIFT
                </h2>
                <p className="text-violet-300/80 text-lg">
                  Dynamic Reasoning in Iterative Feedback Topologies
                </p>
              </div>
              <span className="shrink-0 text-xs px-4 py-2 rounded-full bg-violet-500/10 text-violet-300 border border-violet-400/20 font-medium">
                In Progress
              </span>
            </div>

            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">
                DRIFT investigates how feedback loops in multi-agent systems give rise to emergent
                reasoning capabilities. We're studying the conditions under which iterative
                self-correction produces qualitatively different outputs than single-pass inference.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                    Research Questions
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                      <span>What topological structures in feedback graphs accelerate convergence?</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                      <span>How does reasoning depth scale with iteration count?</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                      <span>Can we detect phase transitions in emergent behavior?</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                    Methods
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                      <span>Multi-agent simulation environments</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                      <span>Graph-theoretic analysis of information flow</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                      <span>Controlled ablation studies</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-gray-500">
                  This research is ongoing. Findings will be published when we have reproducible results.
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
        <h2 className="text-2xl font-semibold text-white">Research Instruments</h2>

        <Link
          to="/projects/quanta"
          className="block border border-white/10 rounded-xl bg-white/[0.03] p-6 hover:bg-white/[0.06] hover:border-cyan-500/30 transition-all group"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-cyan-400 text-lg">⚛</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    QUANTA
                  </h3>
                  <p className="text-sm text-gray-500">Our research instrument for quantum exploration</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                An interactive quantum computing platform we built to test intuitions about
                quantum state evolution and gate sequences. Now available as an educational
                tool for anyone learning quantum computing fundamentals.
              </p>
            </div>
            <svg className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </Link>
      </motion.section>

      {/* Upcoming */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-white">On the Horizon</h2>

        <div className="border border-dashed border-white/20 rounded-xl bg-white/[0.02] p-8 text-center">
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-300">More research initiatives forming</h3>
            <p className="text-sm text-gray-500">
              We're exploring several directions that aren't ready for public discussion.
              Some will become projects. Others will inform our product work.
              Check back for updates.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Philosophy */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-white">Research Philosophy</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Rigor First",
              desc: "We don't publish or productize until we understand why something works, not just that it works."
            },
            {
              title: "Instrument Building",
              desc: "The best way to understand a domain is to build tools for exploring it. Our products often start as research instruments."
            },
            {
              title: "Patient Capital",
              desc: "Some questions take years to answer properly. We're not optimizing for quarterly announcements."
            }
          ].map((item, i) => (
            <div key={i} className="border border-white/10 rounded-xl bg-white/[0.03] p-6 space-y-3">
              <h3 className="text-white font-medium">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center space-y-6 pt-8"
      >
        <h2 className="text-2xl font-semibold text-white">Collaborate on Research</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          We occasionally partner with academic institutions and independent researchers
          on problems that align with our interests. If you have a compelling question, reach out.
        </p>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 font-semibold hover:opacity-90 transition"
        >
          Get in Touch
        </Link>
      </motion.section>
    </div>
  );
}

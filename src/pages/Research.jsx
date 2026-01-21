import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import researchQuantum from "../assets/images/research-quantum.webp";

export default function Research() {
  return (
    <div className="relative text-gray-300">
      <SEO
        title="Research & Innovation | Custom Software R&D"
        description="Axion Deep Labs research program: Project DRIFT investigates quantum system behavior. Our R&D drives innovation in custom software solutions, AI development, and emerging technologies."
        keywords="software research and development, quantum computing research, AI research, custom software innovation, technology R&D, software development research, emerging technology development"
        canonical="/research"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Research", url: "/research" }
        ]}
        faq={[
          {
            question: "What is Project DRIFT?",
            answer: "Project DRIFT (Degradation Regimes In Iterated Field Transformations) investigates behavioral uncertainty in quantum system state evolution under repeated manipulation. We study stability degradation under variation in operator ordering and diversity."
          },
          {
            question: "How does research relate to your software products?",
            answer: "Our QUANTA platform serves as the primary research instrument for Project DRIFT. Research findings inform the platform's educational capabilities, and the platform enables systematic experimentation for our quantum computing research."
          },
          {
            question: "Do you collaborate with academic institutions?",
            answer: "Yes, we welcome inquiries from academic institutions and researchers working on related questions in quantum system behavior, simulation methods, or educational technology for quantum computing."
          }
        ]}
      />

      {/* Hero */}
      <section className="snap-section min-h-screen flex items-center justify-center text-center pt-20">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bold tracking-widest uppercase text-lg md:text-xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            RESEARCH PROGRAM
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
          >
            <span className="text-xl md:text-2xl font-light text-gray-400 tracking-widest mr-3">EXPLORING</span>
            <span className="text-white" style={{ textShadow: '0 0 40px rgba(255,255,255,0.4)' }}>THE</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">UNKNOWN</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 max-w-xl mx-auto"
          >
            Hypothesis-driven experimentation where closed-form solutions don't exist.
          </motion.p>
        </div>
      </section>

      {/* Project DRIFT - with integrated research image */}
      <section className="snap-section min-h-screen flex flex-col">
        {/* Research Image - fades into content */}
        <div className="relative">
          <img
            src={researchQuantum}
            alt="Quantum computing and AI research at Axion Deep Labs"
            className="w-full opacity-40"
            loading="lazy"
          />
          {/* Gradient overlay to blend into content below */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
        </div>

        {/* Project DRIFT Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 flex items-center justify-center px-6 py-16 -mt-32 relative z-10"
        >
          <div className="w-full max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Project DRIFT</h2>
              <p className="text-lg text-violet-300/80">Degradation Regimes In Iterated Field Transformations</p>
            </div>

          <div className="grid md:grid-cols-2 gap-6">
          {/* Research Themes Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/10 p-6 transition-all hover:from-violet-500/25 hover:to-purple-500/15"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl opacity-60">◈</span>
              <h3 className="font-semibold text-white">Research Themes</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                <span>State distribution dynamics under iteration</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                <span>Operator ordering effects on error profiles</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                <span>Operator diversity as experimental variable</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                <span>Predictability boundaries and stability thresholds</span>
              </li>
            </ul>
          </motion.div>

          {/* Scientific Foundation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="relative rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-pink-500/10 p-6 transition-all hover:from-fuchsia-500/25 hover:to-pink-500/15"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl opacity-60">◉</span>
              <h3 className="font-semibold text-white">Scientific Foundation</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                <span>Tranter et al. (2019) on ordering and Trotter error</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                <span>Nakamura &amp; Ankerhold (2024) on non-Markovian effects</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                <span>Huang et al. (2024) on diversity as design axis</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                <span>Kwon et al. (2021) on gate-based quantum computing</span>
              </li>
            </ul>
          </motion.div>

          {/* Focus Card - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 relative rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl opacity-60">⚡</span>
              <h3 className="font-semibold text-white">Focus</h3>
              <span className="ml-auto text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300">In Progress</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              DRIFT investigates behavioral uncertainty in quantum system state evolution under
              repeated manipulation. We focus on the gradual degradation of stability under
              variation in operator ordering and diversity, in regimes where closed-form
              analytical prediction is not feasible across all configurations.
            </p>
          </motion.div>
          </div>
          </div>
        </motion.div>
      </section>

      {/* Research Instrument: QUANTA */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Research Instrument</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                QUANTA serves as the systematic experimentation environment for DRIFT research.
                Configuration of operator sequences, behavioral data collection, and documentation
                of experimental procedures and observations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400">Quantum State Simulation</span>
                <span className="text-xs px-3 py-1 rounded-full bg-violet-500/10 text-violet-400">Gate Sequences</span>
                <span className="text-xs px-3 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-400">Data Collection</span>
              </div>
            </div>
            <div className="relative rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-8 text-center">
              <span className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Q</span>
              <h3 className="text-xl font-semibold text-white mt-4">QUANTA Platform</h3>
              <p className="text-sm text-gray-500 mt-2">Primary research instrument</p>
              <Link to="/projects/quanta" className="inline-block mt-4 text-sm text-violet-400 hover:text-violet-300">
                View education offering →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Approach */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Research Approach</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: "◇", title: "Hypothesis-Driven", desc: "Specific, falsifiable hypotheses about system behavior.", color: "from-emerald-500/20 to-teal-500/10" },
            { icon: "◈", title: "Systematic Observation", desc: "Controlled variation of parameters. Rigorous data collection.", color: "from-orange-500/20 to-red-500/10" },
            { icon: "⬡", title: "Knowledge Creation", desc: "Documented for transferability. Contributing to broader understanding.", color: "from-blue-500/20 to-indigo-500/10" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative rounded-2xl bg-gradient-to-br ${item.color} p-6`}
            >
              <span className="text-2xl opacity-60 mb-3 block">{item.icon}</span>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center w-full"
        >
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Research Collaboration
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Inquiries from academic institutions and researchers welcome.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white font-semibold hover:opacity-90 transition"
            >
              Contact Research Team
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

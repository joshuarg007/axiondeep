import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import researchQuantum from "../assets/images/research-quantum.webp";

export default function Research() {
  return (
    <div className="snap-page relative text-gray-300">
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

      {/* Project DRIFT - with background research image */}
      <section className="snap-section min-h-screen flex flex-col relative overflow-hidden">
        {/* Research Image - positioned behind content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src={researchQuantum}
            alt=""
            className="w-2/3 max-w-2xl opacity-15"
            loading="lazy"
          />
        </div>

        {/* Project DRIFT Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 flex items-center justify-center px-6 py-16 relative z-10"
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

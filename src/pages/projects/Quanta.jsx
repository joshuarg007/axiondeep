import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Quanta() {
  return (
    <div className="relative z-10 text-gray-300 space-y-16 max-w-4xl mx-auto px-6 md:px-8 lg:px-12 pt-32 md:pt-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Solutions
          </Link>

          <div className="flex items-start justify-between gap-4 flex-wrap">
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              QUANTA
            </h1>
            <span className="text-xs px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
              In active research
            </span>
          </div>
          <p className="text-xl text-gray-300 mt-4">
            Quantum Unified Abstraction for Next-gen Algorithmics
          </p>
        </div>

        {/* Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            QUANTA is an intelligent co-design framework that bridges quantum algorithms and real hardware.
            It introduces a hardware-aware abstraction for qubits and an AI-assisted compiler that maps
            algorithms to concrete device topologies and noise models.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Built to interoperate with existing control stacks while remaining vendor-agnostic, QUANTA
            enables researchers and engineers to focus on algorithm design while the framework handles
            the complexity of hardware mapping and optimization.
          </p>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Algorithm–Hardware Co-design",
                description: "Seamlessly bridge the gap between abstract quantum algorithms and physical qubit implementations."
              },
              {
                title: "Resource Estimation & Routing",
                description: "Accurate resource estimation and intelligent qubit routing for optimal circuit execution."
              },
              {
                title: "Noise-aware Optimization",
                description: "Circuit optimization that accounts for device-specific noise models and error rates."
              },
              {
                title: "Vendor Agnostic",
                description: "Works across multiple quantum hardware platforms without vendor lock-in."
              }
            ].map((feature, i) => (
              <div key={i} className="border border-white/10 rounded-xl bg-white/5 p-5">
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Roadmap</h2>
          <div className="space-y-4">
            {[
              { phase: "Q4 2025", milestone: "Prototype meta-layer over existing quantum control stacks" },
              { phase: "H1 2026", milestone: "Noise-aware resource estimator and routing experiments" },
              { phase: "H2 2026", milestone: "Early access for research partners; benchmark releases" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-sm font-medium text-cyan-400 w-20 shrink-0">{item.phase}</span>
                <div className="flex gap-3 items-start">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                  <span className="text-gray-300">{item.milestone}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Interested in QUANTA?</h2>
          <p className="text-gray-400 mb-6">
            We're looking for research partners and early adopters. If you're working on quantum
            algorithms or have access to quantum hardware, let's explore how QUANTA can help.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold hover:opacity-90 transition"
          >
            Get in Touch
          </Link>
        </section>
      </motion.div>
    </div>
  );
}

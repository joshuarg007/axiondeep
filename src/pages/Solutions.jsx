import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SectionTitle = ({ children }) => (
  <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-center md:text-left text-white">
    {children}
  </h1>
);

const projects = [
  {
    key: "quanta",
    title: "QUANTA — Quantum Unified Abstraction for Next‑gen Algorithmics",
    tagline: "An intelligent co‑design framework bridging quantum algorithms and real hardware.",
    blurb:
      "QUANTA introduces a hardware‑aware abstraction for qubits and an AI‑assisted compiler that maps algorithms to concrete device topologies and noise models. Built to interoperate with existing control stacks while remaining vendor‑agnostic.",
    focus: [
      "Algorithm–hardware co‑design",
      "Resource estimation & routing",
      "Noise‑aware circuit optimization",
    ],
    status: "In active research",
    cta: { label: "Learn more", to: "/projects/quanta" },
  },
  {
    key: "site2crm",
    title: "Site2CRM — Intelligent Lead Capture & Enrichment",
    tagline: "From anonymous traffic to actionable CRM intelligence.",
    blurb:
      "Site2CRM transforms website events into structured pipeline data. It enriches firms and contacts, scores intent, and syncs qualified leads into your CRM with attribution you can audit.",
    focus: [
      "Identity resolution & enrichment",
      "Attribution you can audit",
      "Native CRM sync (HubSpot, Pipedrive)",
    ],
    status: "Private beta",
    cta: { label: "Request access", to: "/projects/site2crm" },
  },
];

export default function Projects() {
  return (
    <div className="relative z-10 text-gray-300 space-y-20 max-w-5xl mx-auto px-6 md:px-8 lg:px-12 pt-32 md:pt-40">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <SectionTitle>Projects at Axion Deep Labs</SectionTitle>

        <motion.p
          className="max-w-3xl leading-relaxed text-lg"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We build where rigor meets traction. Our portfolio spans frontier research and applied
          systems — the same engineering bar, different time horizons. Below are two initiatives we
          are advancing in parallel.
        </motion.p>
      </motion.div>

      {/* Featured Projects */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Featured</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="relative border border-white/10 rounded-2xl bg-white/5 p-6 overflow-hidden backdrop-blur-sm hover:bg-white/10 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-semibold text-lg md:text-xl">{p.title}</h3>
                  <p className="text-gray-300 mt-1">{p.tagline}</p>
                </div>
                <span className="shrink-0 text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
                  {p.status}
                </span>
              </div>

              <p className="mt-4 text-sm text-gray-300 leading-relaxed">{p.blurb}</p>

              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {p.focus.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  to={p.cta.to}
                  className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 font-semibold hover:opacity-90 transition"
                >
                  {p.cta.label}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Roadmap */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Roadmap Snapshot</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* QUANTA timeline */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative border border-white/10 rounded-2xl bg-white/5 p-6 overflow-hidden backdrop-blur-sm"
          >
            <div className="font-semibold text-white mb-3">QUANTA</div>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
                <span>Q4 2025: Prototype meta‑layer over existing quantum control stacks.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
                <span>H1 2026: Noise‑aware resource estimator and routing experiments.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
                <span>H2 2026: Early access for research partners; benchmark releases.</span>
              </li>
            </ul>
          </motion.div>

          {/* Site2CRM timeline */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="relative border border-white/10 rounded-2xl bg-white/5 p-6 overflow-hidden backdrop-blur-sm"
          >
            <div className="font-semibold text-white mb-3">Site2CRM</div>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
                <span>Q4 2025: Private beta with initial integrations (HubSpot, Pipedrive).</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
                <span>H1 2026: Attribution reporting and scoring improvements.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
                <span>H2 2026: Public launch and pricing tiers.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <div className="space-y-4 pt-2">
        <h2 className="text-2xl font-semibold text-white">Collaborate</h2>
        <p className="text-gray-400 max-w-2xl">
          We partner selectively with teams who value clear problem statements and measurable
          outcomes. If you have a dataset, device, or domain where these systems could matter, let’s
          talk.
        </p>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 font-semibold hover:opacity-90 transition"
        >
          Contact the Labs
        </Link>
      </div>
    </div>
  );
}

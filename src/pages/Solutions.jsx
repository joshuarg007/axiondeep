import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SectionTitle = ({ children }) => (
  <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-center md:text-left text-white">
    {children}
  </h1>
);

// Placeholder image component
const ImagePlaceholder = ({ label }) => (
  <div className="w-full h-40 rounded-xl bg-gradient-to-br from-cyan-900/30 to-violet-900/30 border border-white/10 flex items-center justify-center mb-4">
    <div className="text-center">
      <div className="text-2xl mb-1">🖼️</div>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  </div>
);

const projects = [
  {
    key: "quanta",
    title: "QUANTA",
    subtitle: "Interactive Quantum Computing Learning Platform",
    tagline: "Build circuits, visualize qubits, master quantum concepts.",
    blurb:
      "A hands-on quantum computing education platform with an interactive circuit builder, real-time Bloch sphere visualization, and structured lessons from fundamentals to advanced algorithms. Learn by doing—not just reading.",
    focus: [
      "Drag-and-drop circuit builder",
      "Real-time Bloch sphere visualization",
      "Structured lessons with exercises",
      "Progress tracking & persistence",
    ],
    tech: ["React", "TypeScript", "FastAPI", "Three.js"],
    status: "In active development",
    statusColor: "cyan",
    image: "QUANTA Circuit Builder",
    cta: { label: "Learn more", to: "/projects/quanta" },
    externalLink: "http://localhost:5175",
  },
  {
    key: "site2crm",
    title: "Site2CRM",
    subtitle: "Intelligent Lead Capture & Enrichment",
    tagline: "From anonymous traffic to actionable CRM intelligence.",
    blurb:
      "Transform website events into structured pipeline data. Capture visitor activity, enrich with firmographic data, score intent signals, and sync qualified leads directly into your CRM with full attribution transparency.",
    focus: [
      "Identity resolution & enrichment",
      "Intent scoring & lead qualification",
      "Auditable attribution",
      "Native CRM sync (HubSpot, Pipedrive)",
    ],
    tech: ["Node.js", "PostgreSQL", "React", "Redis"],
    status: "Private beta",
    statusColor: "violet",
    image: "Site2CRM Dashboard",
    cta: { label: "Request access", to: "/projects/site2crm" },
    externalLink: "http://localhost:3001",
  },
];

export default function Projects() {
  return (
    <div className="relative z-10 text-gray-300 space-y-20 max-w-5xl mx-auto px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-20">
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
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="relative border border-white/10 rounded-2xl bg-white/5 overflow-hidden backdrop-blur-sm hover:bg-white/10 transition group"
            >
              {/* Image placeholder */}
              <div className="p-6 pb-0">
                <ImagePlaceholder label={p.image} />
              </div>

              <div className="p-6 pt-2">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-white font-semibold text-xl">{p.title}</h3>
                    <p className="text-gray-400 text-sm">{p.subtitle}</p>
                  </div>
                  <span className={`shrink-0 text-xs px-2 py-1 rounded-full bg-${p.statusColor}-500/10 text-${p.statusColor}-300 border border-${p.statusColor}-400/20`}>
                    {p.status}
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-cyan-400 text-sm font-medium mb-3">{p.tagline}</p>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed mb-4">{p.blurb}</p>

                {/* Features */}
                <ul className="space-y-2 text-sm text-gray-300 mb-4">
                  {p.focus.map((f, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Link
                    to={p.cta.to}
                    className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold text-sm hover:opacity-90 transition"
                  >
                    {p.cta.label}
                  </Link>
                  <a
                    href={p.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition"
                  >
                    Open app
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
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
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <span className="text-cyan-400">⚛</span>
              </div>
              <div className="font-semibold text-white">QUANTA</div>
            </div>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span><strong className="text-cyan-400">Now:</strong> Core platform with lessons and circuit builder</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400/70" />
                <span>Q1 2026: Complete curriculum through quantum algorithms</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400/70" />
                <span>Q2 2026: User accounts and progress sync</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400/70" />
                <span>H2 2026: Public launch and community features</span>
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
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                <span className="text-violet-400">📊</span>
              </div>
              <div className="font-semibold text-white">Site2CRM</div>
            </div>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span><strong className="text-violet-400">Now:</strong> Private beta with HubSpot and Pipedrive</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400/70" />
                <span>Q1 2026: Salesforce integration and advanced scoring</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400/70" />
                <span>Q2 2026: Attribution dashboard and Zapier</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400/70" />
                <span>H2 2026: Public launch with pricing tiers</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Quick Links</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: "QUANTA App", href: "http://localhost:5175", icon: "⚛" },
            { label: "QUANTA Lessons", href: "http://localhost:5175/learn", icon: "📚" },
            { label: "Site2CRM Dashboard", href: "http://localhost:3001", icon: "📊" },
            { label: "Site2CRM Docs", href: "http://localhost:3001/docs", icon: "📖" },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition"
            >
              <span className="text-xl">{link.icon}</span>
              <span className="text-sm text-gray-300">{link.label}</span>
              <svg className="w-3 h-3 ml-auto text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="space-y-4 pt-2">
        <h2 className="text-2xl font-semibold text-white">Collaborate</h2>
        <p className="text-gray-400 max-w-2xl">
          We partner selectively with teams who value clear problem statements and measurable
          outcomes. If you have a dataset, device, or domain where these systems could matter, let's
          talk.
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

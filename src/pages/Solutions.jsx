import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

// Import media
import quantaSandbox from "../assets/quanta-sandbox.png";
import quantaSandboxVideo from "../assets/quanta-sandbox.webm";
import site2crmDashboard from "../assets/features4.png";
import site2crmVideo from "../assets/features2.webm";
import formaBuilder from "../assets/forma-builder.png";
import formaBuilderVideo from "../assets/forma-builder.webm";
import formaHero from "../assets/forma-hero.png";
import formaDemo from "../assets/forma-demo.webm";
import vesperDashboard from "../assets/vesper-dashboard.png";
import vesperDemo from "../assets/vesper-demo.webm";
// Made4Founders is external - no local assets needed

// Roadmap logos
import quantaLogo from "../assets/icons/icon-solutions-quanta.png";
import site2crmLogo from "../assets/icons/icon-solutions-site2crm.png";
import formaLogo from "../assets/icons/icon-solutions-forma.png";
import vesperLogo from "../assets/icons/icon-solutions-vesper.png";
import founderosLogo from "../assets/icons/icon-solutions-founderos.png";

const SectionTitle = ({ children }) => (
  <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-center md:text-left text-white">
    {children}
  </h1>
);

const projects = [
  {
    key: "quanta",
    title: "QUANTA",
    subtitle: "Interactive Quantum Computing Education Platform",
    tagline: "Build circuits, visualize qubits, master quantum concepts.",
    blurb:
      "A hands-on quantum computing education platform with an interactive circuit builder, real-time Bloch sphere visualization, and structured lessons from qubits to Grover's algorithm. Powered by Qiskit simulation supporting up to 16 qubits.",
    focus: [
      "Drag-and-drop circuit builder with bidirectional code sync",
      "Real-time Bloch sphere and probability visualization",
      "Structured curriculum: Fundamentals to Quantum Algorithms",
      "Free tier with Pro ($15/mo) and Institutional licensing",
    ],
    tech: ["React", "TypeScript", "FastAPI", "Qiskit", "Three.js"],
    status: "Education Platform",
    statusColor: "cyan",
    image: quantaSandbox,
    video: quantaSandboxVideo,
    imageAlt: "QUANTA Sandbox Mode",
    cta: { label: "Learn more", to: "/projects/quanta" },
    externalLink: "https://quanta.axiondeep.com",
  },
  {
    key: "site2crm",
    title: "Site2CRM",
    subtitle: "AI-Powered Lead Analytics for SaaS",
    tagline: "Turn website visitors into CRM leads with AI intelligence.",
    blurb:
      "Transform website traffic into actionable pipeline data. Capture leads with embeddable forms, score with AI-powered win probability, track salesperson performance, and sync directly to HubSpot, Salesforce, Pipedrive, or Zoho.",
    focus: [
      "AI lead scoring with win probability prediction",
      "Salesperson analytics: calls, emails, meetings, deals",
      "Team leaderboards and gamification",
      "Live integrations: HubSpot, Salesforce, Pipedrive, Zoho",
    ],
    tech: ["React", "TypeScript", "FastAPI", "SQLAlchemy", "Stripe"],
    status: "Live",
    statusColor: "green",
    image: site2crmDashboard,
    video: site2crmVideo,
    imageAlt: "Site2CRM Dashboard",
    cta: { label: "View product", to: "/projects/site2crm" },
    externalLink: "https://site2crm.io",
  },
  {
    key: "forma",
    title: "Forma",
    subtitle: "AI-Powered Visual Page Builder",
    tagline: "Drag, drop, generate—build pages without code.",
    blurb:
      "A full-stack visual website builder with 100+ pre-built components, AI-powered generation via Claude, and export to production-ready Next.js or Vite code. Includes real-time team collaboration and component marketplace.",
    focus: [
      "100+ pre-built components (heroes, pricing, testimonials, etc.)",
      "AI-powered component generation with Claude",
      "Real-time team collaboration via WebSocket",
      "Export to Next.js or Vite production code",
    ],
    tech: ["Next.js 14", "TypeScript", "FastAPI", "Claude AI", "WebSocket"],
    status: "Beta",
    statusColor: "amber",
    image: formaHero,
    video: formaDemo,
    imageAlt: "Forma Builder",
    cta: { label: "Learn more", to: "/projects/forma" },
    externalLink: null,
  },
  {
    key: "vesper",
    title: "Vesper",
    subtitle: "Autonomous AI Penetration Testing Platform",
    tagline: "AI that thinks like a hacker, adapts like an expert.",
    blurb:
      "A dual-phase AI security platform with desktop scanner and cloud backend. Features 11,697 Nuclei templates, dual AI agents (Hunter + Analyst), and a learning pipeline that improves vulnerability discovery across engagements.",
    focus: [
      "Dual AI agents: Hunter for scanning, Analyst for correlation",
      "11,697 Nuclei vulnerability templates",
      "Learning pipeline with FAISS semantic search",
      "3-Factor Authentication on SaaS backend",
    ],
    tech: ["Ollama", "FAISS", "Python", "FastAPI", "PyQt6", "Nuclei"],
    status: "Active Development",
    statusColor: "violet",
    image: vesperDashboard,
    video: vesperDemo,
    imageAlt: "Vesper Security Platform",
    cta: { label: "Learn more", to: "/projects/vesper" },
    externalLink: null,
  },
  {
    key: "made4founders",
    title: "Made4Founders",
    subtitle: "Command Center for Startup Founders",
    tagline: "Everything you need to run your startup, in one place.",
    blurb:
      "A comprehensive startup management platform with daily briefs, encrypted credential vault, compliance checklists, Kanban task boards, and accounting integrations. Built for founders who want to focus on building, not admin.",
    focus: [
      "Daily Brief with urgency stickers and deadlines",
      "98-item compliance checklist across 11 categories",
      "AES-256 encrypted credential vault",
      "QuickBooks, Xero, FreshBooks integrations",
    ],
    tech: ["React 19", "TypeScript", "FastAPI", "SQLite", "Docker"],
    status: "Live",
    statusColor: "green",
    image: null,
    video: null,
    imageAlt: "Made4Founders Dashboard",
    cta: { label: "Visit Made4Founders", href: "https://made4founders.com" },
    externalLink: "https://made4founders.com",
  },
];

export default function Projects() {
  return (
    <div className="relative z-10 text-gray-300 space-y-20 max-w-5xl mx-auto px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-20">
      <SEO
        title="Web Development & Software Solutions Portfolio"
        description="Explore our web development and custom software solutions: QUANTA quantum computing platform, Site2CRM AI-powered lead analytics, Forma visual page builder, Vesper security testing, and Made4Founders startup management. Real-world web applications built with React, Python, and modern technology."
        keywords="web development portfolio, custom software solutions portfolio, software products, SaaS applications, web application examples, custom software case studies, AI-powered software, enterprise software products, web development company portfolio, React projects"
        canonical="/solutions"
      />

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <SectionTitle>Solutions</SectionTitle>

        <motion.p
          className="max-w-3xl leading-relaxed text-lg"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We build where rigor meets traction. Our portfolio spans frontier research and applied
          systems—the same engineering bar, different time horizons. Below are five initiatives we
          are advancing in parallel.
        </motion.p>
      </motion.div>

      {/* Featured Projects */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Featured</h2>
        <div className="space-y-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="relative border border-white/10 rounded-lg bg-white/5 overflow-hidden backdrop-blur-sm hover:bg-white/10 transition group"
            >
              <div className="flex flex-col md:flex-row">
                {/* Video/Image */}
                <div className={`p-6 md:w-1/2 ${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  {p.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto rounded-lg border border-white/10"
                    >
                      <source src={p.video} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  ) : p.image ? (
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      className="w-full h-56 object-cover rounded-lg border border-white/10"
                    />
                  ) : (
                    <div className="w-full h-56 rounded-lg bg-gradient-to-br from-cyan-900/30 to-violet-900/30 border border-white/10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">{p.key === "forma" ? "🎨" : p.key === "vesper" ? "🛡️" : p.key === "made4founders" ? "🚀" : "🖼️"}</div>
                        <p className="text-sm text-gray-500">{p.imageAlt}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`p-6 flex flex-col justify-center md:w-1/2 ${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-2xl">{p.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{p.subtitle}</p>
                    </div>
                    <span className={`shrink-0 text-xs px-3 py-1 rounded ${
                      p.statusColor === 'green' ? 'bg-green-500/10 text-green-300 border border-green-400/20' :
                      p.statusColor === 'cyan' ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-400/20' :
                      p.statusColor === 'amber' ? 'bg-amber-500/10 text-amber-300 border border-amber-400/20' :
                      p.statusColor === 'violet' ? 'bg-violet-500/10 text-violet-300 border border-violet-400/20' :
                      'bg-gray-500/10 text-gray-300 border border-gray-400/20'
                    }`}>
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
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
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
                    {p.cta.to ? (
                      <Link
                        to={p.cta.to}
                        className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold text-sm hover:opacity-90 transition"
                      >
                        {p.cta.label}
                      </Link>
                    ) : (
                      <a
                        href={p.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold text-sm hover:opacity-90 transition"
                      >
                        {p.cta.label}
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {p.cta.to && p.externalLink && !p.externalLink.includes("localhost") && (
                      <a
                        href={p.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition"
                      >
                        Visit site
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Roadmap */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Roadmap Snapshot</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {/* QUANTA timeline */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative border border-white/10 rounded-2xl bg-white/5 p-5 overflow-hidden backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={quantaLogo} alt="QUANTA" className="w-10 h-10 rounded-lg" />
              <div>
                <div className="font-semibold text-white">QUANTA</div>
                <span className="text-xs px-2 py-0.5 rounded bg-green-500/10 text-green-300 border border-green-400/20">Live</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-400 shrink-0" />
                <span>Full curriculum through quantum gates</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                <span>Q1 2026: Quantum algorithms (Grover's, Deutsch-Jozsa)</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                <span>Q2 2026: User accounts and progress sync</span>
              </li>
            </ul>
          </motion.div>

          {/* Site2CRM timeline */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="relative border border-white/10 rounded-2xl bg-white/5 p-5 overflow-hidden backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={site2crmLogo} alt="Site2CRM" className="w-10 h-10 rounded-lg" />
              <div>
                <div className="font-semibold text-white">Site2CRM</div>
                <span className="text-xs px-2 py-0.5 rounded bg-green-500/10 text-green-300 border border-green-400/20">Live</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-400 shrink-0" />
                <span>All 4 CRM integrations, AI scoring</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                <span>Q1 2026: Attribution dashboard enhancements</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                <span>Q2 2026: API v2, additional CRM connectors</span>
              </li>
            </ul>
          </motion.div>

          {/* Forma timeline */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="relative border border-white/10 rounded-2xl bg-white/5 p-5 overflow-hidden backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={formaLogo} alt="Forma" className="w-10 h-10 rounded-lg" />
              <div>
                <div className="font-semibold text-white">Forma</div>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-400/20">Beta</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                <span>100+ components, team collab, export</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                <span>Q1 2026: Data model designer, dynamic components</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                <span>Q2 2026: Public launch, marketplace polish</span>
              </li>
            </ul>
          </motion.div>

          {/* Vesper timeline */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="relative border border-white/10 rounded-2xl bg-white/5 p-5 overflow-hidden backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={vesperLogo} alt="Vesper" className="w-10 h-10 rounded-lg" />
              <div>
                <div className="font-semibold text-white">Vesper</div>
                <span className="text-xs px-2 py-0.5 rounded bg-green-500/10 text-green-300 border border-green-400/20">Live</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-400 shrink-0" />
                <span>Dual AI agents, 11K+ templates, 3FA</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                <span>Q1 2026: OOB refinement, attack chain viz</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                <span>Q2 2026: Public beta, CI/CD integration</span>
              </li>
            </ul>
          </motion.div>

          {/* Made4Founders timeline */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="relative border border-white/10 rounded-2xl bg-white/5 p-5 overflow-hidden backdrop-blur-sm md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={founderosLogo} alt="Made4Founders" className="w-10 h-10 rounded-lg" />
              <div>
                <div className="font-semibold text-white">Made4Founders</div>
                <span className="text-xs px-2 py-0.5 rounded bg-green-500/10 text-green-300 border border-green-400/20">Live</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-400 shrink-0" />
                <span>Daily briefs, AES vault, 98 compliance items</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-400 shrink-0" />
                <span>QuickBooks, Xero, FreshBooks integrations</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                <span>Q1 2026: AI insights and task automation</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Quick Links</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { label: "QUANTA", href: "https://quanta.axiondeep.com", icon: "⚛", desc: "Learn quantum computing" },
            { label: "Site2CRM", href: "https://site2crm.io", icon: "📊", desc: "Lead analytics for SaaS" },
            { label: "Forma", href: "/projects/forma", icon: "🎨", desc: "Visual page builder", internal: true },
            { label: "Vesper", href: "/projects/vesper", icon: "🛡️", desc: "AI security agent", internal: true },
            { label: "Made4Founders", href: "https://made4founders.com", icon: "🚀", desc: "Startup command center" },
          ].map((link, i) => (
            link.internal ? (
              <Link
                key={i}
                to={link.href}
                className="flex items-center gap-3 p-4 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition"
              >
                <span className="text-xl">{link.icon}</span>
                <div>
                  <span className="text-sm text-white font-medium">{link.label}</span>
                  <p className="text-xs text-gray-500">{link.desc}</p>
                </div>
              </Link>
            ) : (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition"
              >
                <span className="text-xl">{link.icon}</span>
                <div className="flex-1">
                  <span className="text-sm text-white font-medium">{link.label}</span>
                  <p className="text-xs text-gray-500">{link.desc}</p>
                </div>
                <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )
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

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import vesperDashboard from "../../assets/vesper-dashboard.png";
import vesperDemo from "../../assets/vesper-demo.webm";

export default function Vesper() {
  const saasUrl = "https://api.vespertester.xyz";

  return (
    <div className="relative z-10 text-gray-300 space-y-16 max-w-4xl mx-auto px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-20">
      <SEO
        title="Vesper - Custom AI Security Software | Axion Deep Labs"
        description="Custom security software with autonomous AI agents for penetration testing. Dual-phase architecture with 11,697 Nuclei templates and 3-factor authentication. Built by Axion Deep Labs."
        keywords="custom security software, AI penetration testing software, vulnerability scanning software, custom software solutions, security automation platform, AI security agent"
        canonical="/projects/vesper"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-16"
      >
        {/* Header */}
        <div>
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
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm text-violet-300 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                Active Development
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold text-white">
                Vesper
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-300 mt-4">
            Autonomous AI Penetration Testing Platform
          </p>
          <p className="text-gray-400 mt-3 max-w-2xl">
            A dual-phase security platform with desktop scanner and cloud backend, powered by
            dual AI agents for intelligent vulnerability discovery and analysis.
          </p>
        </div>

        {/* Hero Video/Image */}
        <div className="rounded-xl overflow-hidden border border-white/10">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={vesperDashboard}
            className="w-full object-cover"
            onCanPlay={(e) => e.target.play().catch(() => {})}
          >
            <source src={vesperDemo} type="video/webm" />
            <img src={vesperDashboard} alt="Vesper Security Platform" loading="lazy" />
          </video>
        </div>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stat: "71K+", label: "Lines of Code" },
            { stat: "50+", label: "Modules" },
            { stat: "11,697", label: "Nuclei Templates" },
            { stat: "3FA", label: "Authentication" },
          ].map((item, i) => (
            <div key={i} className="border border-white/10 rounded-xl bg-white/5 p-4 text-center">
              <div className="text-2xl font-bold text-white">{item.stat}</div>
              <div className="text-xs text-gray-500 mt-1">{item.label}</div>
            </div>
          ))}
        </section>

        {/* Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            Vesper is an autonomous AI security platform with dual-phase architecture. The desktop
            application handles reconnaissance and scanning with 11,697 Nuclei templates, while
            the SaaS backend provides secure authentication, user management, and subscription
            handling. Unlike traditional scanners, Vesper's AI agents think like security researchers.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The platform features two specialized AI agents: the Hunter Agent for active scanning
            and attack chain reasoning, and the Analyst Agent for finding correlation, prioritizing
            findings, and generating actionable reports. A learning pipeline captures patterns
            across engagements for continuous improvement.
          </p>
        </section>

        {/* Dual Architecture */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Dual-Phase Architecture</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-violet-500/20 rounded-xl bg-gradient-to-br from-violet-900/10 to-indigo-900/10 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                  <span className="text-violet-400 text-lg">🖥️</span>
                </div>
                <h3 className="font-semibold text-white">Desktop Application</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-2">
                  <span className="text-violet-400">→</span>
                  PyQt6 UI with real-time scan visualization
                </li>
                <li className="flex gap-2">
                  <span className="text-violet-400">→</span>
                  11,697 Nuclei vulnerability templates
                </li>
                <li className="flex gap-2">
                  <span className="text-violet-400">→</span>
                  AI-powered target reconnaissance
                </li>
                <li className="flex gap-2">
                  <span className="text-violet-400">→</span>
                  Learning pipeline for pattern memory
                </li>
                <li className="flex gap-2">
                  <span className="text-violet-400">→</span>
                  SQLite local database with encryption
                </li>
              </ul>
            </div>
            <div className="border border-cyan-500/20 rounded-xl bg-gradient-to-br from-cyan-900/10 to-blue-900/10 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-cyan-400 text-lg">☁️</span>
                </div>
                <h3 className="font-semibold text-white">SaaS Backend</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  FastAPI with async endpoints
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  3-Factor Authentication (password + email + puzzle)
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  Stripe subscription management
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  Admin dashboard with user management
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  Deployed on VPS with Nginx/SSL
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI Agents */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Dual AI Agent System</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-white/10 rounded-xl bg-white/5 p-5">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-semibold text-white mb-2">Hunter Agent</h3>
              <p className="text-sm text-gray-400 mb-3">
                Active scanning agent that executes reconnaissance, identifies attack surfaces,
                and runs vulnerability tests with adaptive strategy based on target behavior.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400">Reconnaissance</span>
                <span className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400">Scanning</span>
                <span className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400">Attack Chains</span>
              </div>
            </div>
            <div className="border border-white/10 rounded-xl bg-white/5 p-5">
              <div className="text-2xl mb-2">🔬</div>
              <h3 className="font-semibold text-white mb-2">Analyst Agent</h3>
              <p className="text-sm text-gray-400 mb-3">
                Analysis agent that correlates findings, assesses severity with context,
                identifies false positives, and generates prioritized remediation reports.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400">Correlation</span>
                <span className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400">Prioritization</span>
                <span className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400">Reporting</span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Platform Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🤖",
                title: "Claude-Powered Reasoning",
                description: "Both agents use Claude for intelligent decision-making, context analysis, and adaptive testing strategies that evolve during engagements."
              },
              {
                icon: "📚",
                title: "Learning Pipeline",
                description: "Error→Solution linking, project DNA analysis, and semantic search via FAISS. Knowledge persists across sessions for continuous improvement."
              },
              {
                icon: "🔗",
                title: "Attack Chain Discovery",
                description: "AI-driven vulnerability correlation identifies how individual findings can be chained together for maximum real-world impact."
              },
              {
                icon: "📡",
                title: "Out-of-Band Detection",
                description: "Built-in OOB infrastructure for blind vulnerabilities: XSS, SSRF, XXE, Log4Shell, DNS exfiltration, and more."
              },
              {
                icon: "🔐",
                title: "3-Factor Authentication",
                description: "SaaS backend secured with password + email verification + Fibonacci puzzle challenge. Includes honeypot detection for automated attacks."
              },
              {
                icon: "📊",
                title: "Real-time Dashboard",
                description: "Live findings visualization with severity scoring, evidence collection, and exportable PDF reports."
              }
            ].map((feature, i) => (
              <div key={i} className="border border-white/10 rounded-xl bg-white/5 p-5">
                <div className="text-2xl mb-2">{feature.icon}</div>
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vulnerability Coverage */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Vulnerability Coverage</h2>
          <p className="text-gray-400 mb-4">
            11,697 Nuclei templates covering OWASP Top 10 and beyond.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "SQL Injection",
              "XSS (All Types)",
              "SSRF",
              "XXE",
              "IDOR",
              "Auth Bypass",
              "Access Control",
              "Log4Shell",
              "SSTI",
              "Command Injection",
              "Path Traversal",
              "Deserialization",
              "CORS Misconfig",
              "Open Redirect",
              "Info Disclosure",
              "CVE Database"
            ].map((vuln, i) => (
              <div key={i} className="border border-white/10 rounded-lg bg-white/5 p-3 text-sm text-gray-300 text-center">
                {vuln}
              </div>
            ))}
          </div>
        </section>

        {/* Security */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Security & Compliance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-white/10 rounded-xl bg-white/5 p-6 space-y-4">
              <h3 className="font-semibold text-white">Authentication Security</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  3FA: Password + Email code + Fibonacci puzzle
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  JWT tokens with HS512 signing
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  BCrypt password hashing
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  Honeypot detection for automated attacks
                </li>
              </ul>
            </div>
            <div className="border border-white/10 rounded-xl bg-white/5 p-6 space-y-4">
              <h3 className="font-semibold text-white">Testing Safeguards</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  Strict scope enforcement
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  Comprehensive audit logging
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  Rate limiting per target
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  Authorization verification before testing
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Technology</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Claude AI", desc: "Reasoning" },
              { name: "FAISS", desc: "Semantic Search" },
              { name: "Python", desc: "Backend" },
              { name: "FastAPI", desc: "SaaS API" },
              { name: "PyQt6", desc: "Desktop UI" },
              { name: "Nuclei", desc: "Scanner" },
              { name: "SQLite", desc: "Local DB" },
              { name: "Nginx", desc: "Proxy" },
            ].map((tech, i) => (
              <div key={i} className="border border-white/10 rounded-lg bg-white/5 p-3 text-center">
                <div className="font-medium text-white text-sm">{tech.name}</div>
                <div className="text-xs text-gray-500">{tech.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Status & Roadmap</h2>
          <div className="space-y-4">
            {[
              {
                milestone: "Complete",
                items: ["Dual AI agent architecture", "11,697 Nuclei templates", "Learning pipeline", "SaaS backend with 3FA", "Desktop scanner UI"],
                status: "Done"
              },
              {
                milestone: "Current",
                items: ["OOB infrastructure refinement", "Attack chain visualization", "Report export formats"],
                status: "In Progress"
              },
              {
                milestone: "Planned",
                items: ["Public beta launch", "CI/CD integration", "Multi-target campaigns", "Enterprise deployment"],
                status: "Planned"
              }
            ].map((phase, i) => (
              <div key={i} className="border border-white/10 rounded-xl bg-white/5 p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{phase.milestone}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    phase.status === "Done"
                      ? "bg-green-500/10 text-green-300 border border-green-400/20"
                      : phase.status === "In Progress"
                      ? "bg-violet-500/10 text-violet-300 border border-violet-400/20"
                      : "bg-gray-500/10 text-gray-300 border border-gray-400/20"
                  }`}>
                    {phase.status}
                  </span>
                </div>
                <ul className="grid md:grid-cols-2 gap-1">
                  {phase.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className={`h-1 w-1 rounded-full ${
                        phase.status === "Done" ? "bg-green-400/70" : "bg-violet-400/70"
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Interested in Vesper?</h2>
          <p className="text-gray-400 mb-6">
            Vesper is in active development with core features complete. Contact us to learn
            about early access or discuss how AI-powered penetration testing could enhance
            your security program.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold hover:opacity-90 transition"
            >
              Request Early Access
            </Link>
            <Link
              to="/solutions"
              className="inline-block px-6 py-3 rounded-full border border-white/20 font-semibold hover:bg-white/5 transition"
            >
              View All Solutions
            </Link>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

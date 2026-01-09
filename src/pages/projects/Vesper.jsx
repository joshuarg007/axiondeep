import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import vesperDashboard from "../../assets/vesper-dashboard.png";
import vesperDemo from "../../assets/vesper-demo.webm";

export default function Vesper() {
  return (
    <div className="relative z-10 text-gray-300 space-y-16 max-w-4xl mx-auto px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-20">
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
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              Vesper
            </h1>
            <span className="text-xs px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-400/20">
              In development
            </span>
          </div>
          <p className="text-xl text-gray-300 mt-4">
            Autonomous AI Penetration Testing Agent
          </p>
        </div>

        {/* Hero Video/Image */}
        <div className="rounded-xl overflow-hidden border border-white/10">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={vesperDashboard}
            className="w-full object-cover"
          >
            <source src={vesperDemo} type="video/webm" />
            <img src={vesperDashboard} alt="Vesper Security Platform" />
          </video>
        </div>

        {/* Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            Vesper is an autonomous AI security agent powered by Claude that conducts intelligent
            penetration testing. Unlike traditional scanners that follow rigid rule sets, Vesper
            thinks like a human security researcher—analyzing context, correlating findings, and
            adapting its approach based on what it discovers.
          </p>
          <p className="text-gray-300 leading-relaxed">
            At its core is NLMN (Neural Long-term Memory Network), a persistent memory system that
            learns from every engagement. This enables Vesper to recognize patterns across targets,
            recall successful attack chains, and continuously improve its vulnerability discovery
            capabilities over time.
          </p>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🤖",
                title: "Autonomous AI Agent",
                description: "Claude-powered reasoning engine that plans, executes, and adapts multi-step attack strategies without manual intervention."
              },
              {
                icon: "🧠",
                title: "Neural Memory (NLMN)",
                description: "Persistent memory with FAISS-GPU that learns from every engagement. Vesper remembers successful techniques and applies them to new targets."
              },
              {
                icon: "🔗",
                title: "Attack Chain Reasoning",
                description: "AI-driven vulnerability correlation that identifies how individual findings can be chained together for maximum impact."
              },
              {
                icon: "📡",
                title: "Intelligent OOB Detection",
                description: "Built-in out-of-band detection for blind vulnerabilities: XSS, SSRF, XXE, Log4Shell, and more."
              },
              {
                icon: "📊",
                title: "Real-time Reporting",
                description: "Live findings dashboard with severity scoring, evidence collection, and remediation recommendations."
              },
              {
                icon: "🔒",
                title: "Authorized Testing Only",
                description: "Strict scope enforcement and audit logging. Vesper only tests what you explicitly authorize."
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

        {/* How It Works */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">How It Works</h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Define Scope",
                description: "Specify your target domains, IP ranges, and any exclusions. Vesper enforces strict boundaries and logs all activity."
              },
              {
                step: "2",
                title: "Reconnaissance",
                description: "Vesper maps the attack surface—discovering subdomains, ports, technologies, and potential entry points using AI-guided enumeration."
              },
              {
                step: "3",
                title: "Intelligent Testing",
                description: "The AI agent plans and executes tests based on context. It adapts its approach as it learns about your application's behavior."
              },
              {
                step: "4",
                title: "Vulnerability Correlation",
                description: "Findings are analyzed for attack chain potential. Vesper identifies how vulnerabilities can be combined for real-world impact."
              },
              {
                step: "5",
                title: "Actionable Reports",
                description: "Receive detailed findings with evidence, severity ratings, and clear remediation steps. Export to PDF or integrate with your ticketing system."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 font-semibold text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Supported Tests */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Vulnerability Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "SQL Injection",
              "XSS (Reflected/Stored/DOM)",
              "SSRF",
              "XXE",
              "IDOR",
              "Authentication Bypass",
              "Broken Access Control",
              "Log4Shell",
              "SSTI",
              "Command Injection",
              "Path Traversal",
              "Insecure Deserialization"
            ].map((vuln, i) => (
              <div key={i} className="border border-white/10 rounded-lg bg-white/5 p-3 text-sm text-gray-300">
                {vuln}
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Technology</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Claude AI", desc: "Reasoning" },
              { name: "FAISS-GPU", desc: "Memory" },
              { name: "Python", desc: "Backend" },
              { name: "Flask", desc: "API" },
              { name: "PyQt5", desc: "Desktop UI" },
              { name: "Docker", desc: "Deployment" },
              { name: "PostgreSQL", desc: "Storage" },
              { name: "Redis", desc: "Queue" },
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
          <h2 className="text-2xl font-semibold text-white">Roadmap</h2>
          <div className="space-y-4">
            {[
              {
                milestone: "Current",
                items: ["Autonomous Claude agent", "NLMN neural memory", "Core vulnerability scanning", "OOB detection"],
                status: "In Progress"
              },
              {
                milestone: "Q1 2026",
                items: ["Advanced attack chain reasoning", "API security testing", "Compliance reporting (PCI-DSS, SOC2)"],
                status: "Planned"
              },
              {
                milestone: "Q2 2026",
                items: ["Multi-agent collaborative testing", "CI/CD integration", "Enterprise deployment options"],
                status: "Planned"
              }
            ].map((phase, i) => (
              <div key={i} className="border border-white/10 rounded-xl bg-white/5 p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{phase.milestone}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    phase.status === "In Progress"
                      ? "bg-violet-500/10 text-violet-300 border border-violet-400/20"
                      : "bg-gray-500/10 text-gray-300 border border-gray-400/20"
                  }`}>
                    {phase.status}
                  </span>
                </div>
                <ul className="space-y-1">
                  {phase.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-violet-400/70" />
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
            Vesper is currently in development. Contact us to learn more about early access
            opportunities or to discuss how AI-powered penetration testing could benefit your
            security program.
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

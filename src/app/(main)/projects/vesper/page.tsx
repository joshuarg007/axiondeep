import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vesper AI — Autonomous Penetration Testing",
  description: "Vesper AI is an autonomous penetration testing platform with dual AI agents, 11,697 vulnerability templates, and OWASP Top 10 coverage for security research.",
  keywords: [
    "AI penetration testing",
    "autonomous security testing",
    "vulnerability assessment",
    "OWASP Top 10",
    "security research",
    "AI security platform",
  ],
  alternates: { canonical: "/projects/vesper" },
};

export default function VesperPage() {
  return (
    <div className="no-snap min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-300 border border-green-500/30">
              Live
            </span>
            <span className="text-xs px-2 py-1 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
              Security
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Vesper AI: Autonomous Penetration Testing Platform</h1>
          <p className="text-xl text-violet-400 font-medium mb-4">
            Two AI agents working in tandem — one attacks, one analyzes.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Vesper AI is an autonomous penetration testing platform that pairs two AI agents
            to systematically discover and validate security vulnerabilities. The attack agent
            executes reconnaissance and exploitation using 11,697 vulnerability templates,
            while the analysis agent evaluates findings, eliminates false positives, and
            generates actionable remediation reports. Built for authorized security testing,
            bug bounty research, and defensive security assessments.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20">
            <p className="text-3xl font-bold text-violet-400">11.7K</p>
            <p className="text-sm text-gray-500 mt-1">Vulnerability Templates</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
            <p className="text-3xl font-bold text-purple-400">2</p>
            <p className="text-sm text-gray-500 mt-1">AI Agents in Tandem</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-transparent border border-fuchsia-500/20">
            <p className="text-3xl font-bold text-fuchsia-400">OWASP</p>
            <p className="text-sm text-gray-500 mt-1">Top 10 Coverage</p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Core Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/10">
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Dual AI Agent Architecture</h3>
              <p className="text-sm text-gray-400">
                Two specialized AI agents operate in tandem. The attack agent handles
                reconnaissance, scanning, and exploitation while the analysis agent validates
                findings, assesses severity, and produces remediation guidance.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/10">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Comprehensive Template Library</h3>
              <p className="text-sm text-gray-400">
                11,697 vulnerability templates powered by Nuclei covering OWASP Top 10,
                known CVEs, misconfigurations, and custom exploit chains. Templates are
                continuously updated as new vulnerabilities are disclosed.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-transparent border border-fuchsia-500/10">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">AI-Generated Reports</h3>
              <p className="text-sm text-gray-400">
                Automated security reports with severity ratings, proof-of-concept details,
                and step-by-step remediation instructions. Reports are structured for both
                technical teams and executive stakeholders.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/10">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Continuous Learning</h3>
              <p className="text-sm text-gray-400">
                The AI agents learn from each engagement, improving attack strategies and
                reducing false positives over time. Each scan builds on prior results to
                identify patterns and prioritize high-impact vulnerabilities.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
          <div className="space-y-4">
            {[
              { step: "01", title: "Target Configuration", desc: "Define the scope, target URLs, and testing parameters. Set exclusion rules and rate limits to stay within authorized boundaries." },
              { step: "02", title: "Automated Reconnaissance", desc: "The attack agent maps the target surface — subdomains, open ports, technology stack, and entry points — building a comprehensive attack graph." },
              { step: "03", title: "Vulnerability Scanning", desc: "11,697 templates run against discovered endpoints. The AI agent selects and sequences templates based on the identified technology stack." },
              { step: "04", title: "Analysis & Reporting", desc: "The analysis agent validates each finding, eliminates false positives, assigns severity scores, and generates a remediation report with proof-of-concept details." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start rounded-xl bg-white/[0.02] border border-violet-500/10 p-5">
                <span className="text-2xl font-bold text-violet-400 opacity-40 shrink-0 w-8 text-right">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Responsible Use */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Responsible Penetration Testing</h2>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/[0.08] to-purple-500/[0.04] border border-white/[0.08]">
            <p className="text-gray-400 leading-relaxed mb-4">
              Vesper AI is designed exclusively for authorized security testing, including
              contracted penetration testing engagements, bug bounty programs, and defensive
              security assessments. The platform enforces scope boundaries through target
              configuration controls and rate limiting to ensure testing stays within
              authorized parameters.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The dual AI agent architecture separates offensive execution from analytical
              judgment. The attack agent systematically maps attack surfaces and executes
              vulnerability templates, while the analysis agent independently validates findings,
              eliminates false positives, and prioritizes remediation. This separation of concerns
              produces higher-quality results than single-agent approaches, reducing noise in
              security reports and ensuring that every reported vulnerability includes validated
              proof-of-concept details and actionable remediation steps.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["Python", "FastAPI", "Claude AI", "Nuclei", "PostgreSQL", "Docker", "Redis"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/5 text-gray-400 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 font-semibold text-white hover:opacity-90 transition"
          >
            Request Access
          </Link>
          <Link
            href="/solutions"
            className="px-8 py-4 rounded-full border border-white/20 font-medium text-white hover:bg-white/5 transition flex items-center gap-2"
          >
            View All Projects
          </Link>
        </div>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/solutions" className="text-gray-400 hover:text-white transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Solutions
          </Link>
        </div>
      </div>
    </div>
  );
}

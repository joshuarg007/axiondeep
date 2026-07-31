import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vesper AI | Autonomous Penetration Testing",
  description: "Vesper AI is an autonomous penetration testing platform with dual AI agents, 11,697 vulnerability templates, and OWASP Top 10 coverage for security research.",
  keywords: [
    "AI penetration testing",
    "autonomous security testing",
    "vulnerability assessment",
    "OWASP Top 10",
    "security research",
    "AI security platform",
  ],
  robots: { index: false, follow: true },
  alternates: { canonical: "/projects/vesper" },
};

const features = [
  {
    title: "Dual AI Agent Architecture",
    desc: "Two specialized AI agents operate in tandem. The attack agent handles reconnaissance, scanning, and exploitation while the analysis agent validates findings, assesses severity, and produces remediation guidance.",
  },
  {
    title: "Comprehensive Template Library",
    desc: "11,697 vulnerability templates powered by Nuclei covering OWASP Top 10, known CVEs, misconfigurations, and custom exploit chains. Templates are continuously updated as new vulnerabilities are disclosed.",
  },
  {
    title: "AI-Generated Reports",
    desc: "Automated security reports with severity ratings, proof-of-concept details, and step-by-step remediation instructions. Reports are structured for both technical teams and executive stakeholders.",
  },
  {
    title: "Continuous Learning",
    desc: "The AI agents learn from each engagement, improving attack strategies and reducing false positives over time. Each scan builds on prior results to identify patterns and prioritize high-impact vulnerabilities.",
  },
];

const steps = [
  {
    step: "01",
    title: "Target Configuration",
    desc: "Define the scope, target URLs, and testing parameters. Set exclusion rules and rate limits to stay within authorized boundaries.",
  },
  {
    step: "02",
    title: "Automated Reconnaissance",
    desc: "The attack agent maps the target surface, subdomains, open ports, technology stack, and entry points, building a comprehensive attack graph.",
  },
  {
    step: "03",
    title: "Vulnerability Scanning",
    desc: "11,697 templates run against discovered endpoints. The AI agent selects and sequences templates based on the identified technology stack.",
  },
  {
    step: "04",
    title: "Analysis & Reporting",
    desc: "The analysis agent validates each finding, eliminates false positives, assigns severity scores, and generates a remediation report with proof-of-concept details.",
  },
];

const techStack = ["Python", "FastAPI", "Claude AI", "Nuclei", "PostgreSQL", "Docker", "Redis"];

export default function VesperPage() {
  return (
    <div className="obs-page">
      <div className="obs-container">
        {/* Header */}
        <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
          <span className="obs-chip live">Live</span>
          <span className="obs-chip">Security</span>
        </div>
        <span className="obs-eyebrow line">Vesper AI</span>
        <h1 className="obs-h1">
          Autonomous <span className="g">penetration testing</span> platform
        </h1>
        <p className="obs-lead" style={{ color: "var(--violet)", fontWeight: 500 }}>
          Two AI agents working in tandem, one attacks, one analyzes.
        </p>
        <p className="obs-lead">
          Vesper AI is an autonomous penetration testing platform that pairs two AI agents
          to systematically discover and validate security vulnerabilities. The attack agent
          executes reconnaissance and exploitation using 11,697 vulnerability templates,
          while the analysis agent evaluates findings, eliminates false positives, and
          generates actionable remediation reports. Built for authorized security testing,
          bug bounty research, and defensive security assessments.
        </p>

        {/* Stats */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
          <span className="obs-metric">Vulnerability Templates <b>11.7K</b></span>
          <span className="obs-metric">AI Agents in Tandem <b>2</b></span>
          <span className="obs-metric">OWASP <b>Top 10 Coverage</b></span>
        </div>

        {/* Features */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">Capabilities</span>
            <h2 className="obs-h2">Core features</h2>
          </div>
          <div className="obs-grid obs-grid-2">
            {features.map((f) => (
              <div key={f.title} className="obs-card">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">Workflow</span>
            <h2 className="obs-h2">How it works</h2>
          </div>
          <div className="obs-grid obs-grid-2">
            {steps.map((item) => (
              <div key={item.step} className="obs-card">
                <span
                  className="obs-eyebrow"
                  style={{ color: "var(--violet)", marginBottom: 12, display: "inline-flex" }}
                >
                  {item.step}
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Responsible Use */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow" style={{ color: "var(--fuchsia)" }}>
              Scope enforcement
            </span>
            <h2 className="obs-h2">Responsible penetration testing</h2>
          </div>
          <div className="obs-prose obs-narrow" style={{ margin: 0 }}>
            <p>
              Vesper AI is designed exclusively for authorized security testing, including
              contracted penetration testing engagements, bug bounty programs, and defensive
              security assessments. The platform enforces scope boundaries through target
              configuration controls and rate limiting to ensure testing stays within
              authorized parameters.
            </p>
            <p>
              The dual AI agent architecture separates offensive execution from analytical
              judgment. The attack agent systematically maps attack surfaces and executes
              vulnerability templates, while the analysis agent independently validates findings,
              eliminates false positives, and prioritizes remediation. This separation of concerns
              produces higher-quality results than single-agent approaches, reducing noise in
              security reports and ensuring that every reported vulnerability includes validated
              proof-of-concept details and actionable remediation steps.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">Under the hood</span>
            <h2 className="obs-h2">Tech stack</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {techStack.map((tech) => (
              <span key={tech} className="obs-chip">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 24 }}>
          <Link href="/contact" className="obs-btn obs-btn-p">
            Request Access
          </Link>
          <Link href="/projects" className="obs-btn obs-btn-g">
            View All Projects
          </Link>
        </div>

        {/* Back Link */}
        <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid var(--line)" }}>
          <Link
            href="/projects"
            className="obs-eyebrow"
            style={{ color: "var(--muted)" }}
          >
            &larr; Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

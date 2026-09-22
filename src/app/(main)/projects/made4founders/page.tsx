import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Made4Founders - Startup Command Center",
  description: "Made4Founders is the all-in-one command center for solo founders. AI daily briefs, encrypted document vault, compliance tracking, investor CRM, and more.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/projects/made4founders" },
};

const coreFeatures = [
  {
    title: "AI Daily Briefs",
    desc: "Every morning, get a personalized summary of tasks, metrics, deadlines, and priorities. The AI learns your patterns and surfaces what matters most.",
  },
  {
    title: "Encrypted Document Vault",
    desc: "AES-256 encrypted storage for your most sensitive documents. Cap tables, contracts, term sheets, all secured with bank-grade encryption.",
  },
  {
    title: "Compliance Tracking",
    desc: "96-item business checklist covering SOC2, GDPR, and legal requirements. Automatic deadline alerts so you never miss a filing.",
  },
  {
    title: "Investor CRM",
    desc: "Track your fundraising pipeline from intro to term sheet. Manage relationships, schedule follow-ups, and never lose track of a warm lead.",
  },
];

const alsoIncluded = [
  "Cap Table Management",
  "409A Valuation Tracking",
  "Investor Updates",
  "Data Room",
  "Team Directory",
  "PTO Tracking",
  "Contractor Management",
  "Meeting Transcripts",
  "Competitor Monitoring",
  "KPI Dashboard",
  "Bank Integrations",
  "Stripe Revenue Sync",
];

const howItWorks = [
  {
    step: "01",
    title: "Connect Your Accounts",
    desc: "Link your bank accounts via Plaid, connect Stripe for revenue tracking, and import your cap table. Made4Founders pulls everything into a single command center so you stop switching between twelve tabs.",
  },
  {
    step: "02",
    title: "AI Generates Your Daily Brief",
    desc: "Every morning, the AI assistant analyzes your runway, upcoming deadlines, compliance gaps, and investor pipeline. You get a personalized briefing that surfaces what matters most, not a generic dashboard.",
  },
  {
    step: "03",
    title: "Track Compliance Automatically",
    desc: "The 96-item compliance checklist covers formation documents, state filings, tax deadlines, SOC2 readiness, GDPR requirements, and employment law basics. Automatic alerts ensure nothing falls through the cracks.",
  },
  {
    step: "04",
    title: "Manage Your Fundraise",
    desc: "Track every investor from warm intro to term sheet. Log meeting notes, set follow-up reminders, and maintain a clean data room with AES-256 encrypted document storage. Your cap table updates automatically as rounds close.",
  },
];

const techStack = ["React", "TypeScript", "FastAPI", "PostgreSQL", "Ollama AI", "Stripe", "Plaid", "AWS"];

export default function Made4FoundersPage() {
  return (
    <div className="obs-page no-snap">
      <div className="obs-container">
        {/* Header */}
        <div style={{ display: "flex", gap: 10, marginBottom: 6 }}>
          <span className="obs-chip live">Live</span>
          <span className="obs-chip">SaaS</span>
        </div>
        <span className="obs-eyebrow line">Portfolio &middot; Made4Founders</span>
        <h1 className="obs-h1">
          Made4Founders: All-in-One <span className="g">Startup Command Center</span>
        </h1>
        <p className="obs-lead" style={{ color: "var(--cyan)" }}>
          Your startup&apos;s command center. One dashboard to rule them all.
        </p>
        <p className="obs-lead">
          Built for founders who juggle a thousand things at once. AI-powered daily briefs
          surface what matters, encrypted document vaults keep your cap table and contracts
          secure, and compliance tracking ensures you never miss a deadline.
        </p>

        {/* Stats */}
        <div className="obs-grid obs-grid-3" style={{ marginTop: 40 }}>
          <div className="obs-card">
            <h3 style={{ fontSize: 34 }}>500+</h3>
            <p>Active Founders</p>
          </div>
          <div className="obs-card">
            <h3 style={{ fontSize: 34 }}>$2.4B</h3>
            <p>Tracked Raises</p>
          </div>
          <div className="obs-card">
            <h3 style={{ fontSize: 34 }}>99.9%</h3>
            <p>Uptime SLA</p>
          </div>
        </div>

        {/* Features */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">Capabilities</span>
            <h2 className="obs-h2">Core Features</h2>
          </div>
          <div className="obs-grid obs-grid-2">
            {coreFeatures.map((feature) => (
              <div key={feature.title} className="obs-card">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* More Features */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">Everything else</span>
            <h2 className="obs-h2">Also Included</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {alsoIncluded.map((feature) => (
              <span key={feature} className="obs-metric">
                {feature}
              </span>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">The workflow</span>
            <h2 className="obs-h2">How the Startup Command Center Works</h2>
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="obs-card"
                style={{ display: "flex", gap: 20, alignItems: "flex-start" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 22,
                    color: "var(--cyan)",
                    flexShrink: 0,
                    width: 34,
                    textAlign: "right",
                  }}
                >
                  {item.step}
                </span>
                <div>
                  <h3 style={{ marginBottom: 8 }}>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Founders Choose Made4Founders */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">Why founders choose it</span>
            <h2 className="obs-h2">Why Solo Founders Choose Made4Founders</h2>
          </div>
          <div className="obs-prose">
            <p>
              Most startup tools assume you have a team. Made4Founders is built for the solo
              founder and small teams of 1-5 people who wear every hat. Instead of paying for
              separate tools for compliance, cap table management, investor relations, document
              storage, and financial tracking, everything lives in one all-in-one platform with
              a single login and a unified dashboard.
            </p>
            <p>
              The AI daily brief is what sets Made4Founders apart from generic project management
              tools. It learns your patterns, understands your runway, and proactively surfaces
              risks before they become problems. Combined with bank-grade AES-256 encryption for
              your most sensitive documents and real-time financial data from Plaid and Stripe
              integrations, it is the command center that replaces the dozen browser tabs you
              have open right now.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">Under the hood</span>
            <h2 className="obs-h2">Tech Stack</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {techStack.map((tech) => (
              <span key={tech} className="obs-chip">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a
            href="https://made4founders.com"
            target="_blank"
            rel="noopener noreferrer"
            className="obs-btn obs-btn-p"
          >
            Try It Free
          </a>
          <a
            href="https://made4founders.com/features"
            target="_blank"
            rel="noopener noreferrer"
            className="obs-btn obs-btn-g"
          >
            See All Features &rarr;
          </a>
        </div>

        {/* Back Link */}
        <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--line)" }}>
          <Link
            href="/projects"
            className="obs-eyebrow"
            style={{ color: "var(--muted)", textDecoration: "none" }}
          >
            &larr; Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

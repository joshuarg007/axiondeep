import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Site2CRM | AI Lead Capture &amp; CRM Integration",
  description: "Site2CRM connects your website to your CRM in real time with AI chat agents that qualify leads, handle objections, and sync to HubSpot, Salesforce, and more.",
  keywords: [
    "AI lead capture",
    "CRM integration",
    "AI chat agents",
    "lead conversion",
    "HubSpot integration",
    "Salesforce integration",
  ],
  robots: { index: false, follow: true },
  alternates: { canonical: "/projects/site2crm" },
};

const features = [
  {
    title: "AI Chat Agents",
    desc: "Persistent AI agents that engage website visitors in natural conversation. They qualify leads based on your custom criteria, handle objections with up to 10 intelligent rebuttals, and guide prospects toward conversion.",
  },
  {
    title: "Real-Time CRM Sync",
    desc: "Qualified leads sync directly to your CRM the moment they convert. No manual data entry, no CSV exports. Contact records include conversation history, lead score, and qualification data.",
  },
  {
    title: "Lead Scoring & Analytics",
    desc: "Every visitor interaction is scored based on engagement depth, qualification responses, and conversion intent. Analytics dashboard shows conversion rates, top objections, and pipeline value in real time.",
  },
  {
    title: "Multi-Step Forms",
    desc: "Create multi-step lead capture forms that progressively collect information without overwhelming visitors. Each step adapts based on previous responses, keeping completion rates high.",
  },
];

const steps = [
  {
    step: "01",
    title: "Install the Widget",
    desc: "Add a single script tag to your website. The AI chat agent appears as a customizable widget that matches your brand colors and messaging. No code changes to your existing site required.",
  },
  {
    step: "02",
    title: "AI Engages Visitors",
    desc: "When a visitor arrives, the AI agent initiates natural conversation based on the page context. It qualifies leads by asking your custom qualification questions, handles up to 10 objection rebuttals per conversation, and guides prospects toward conversion.",
  },
  {
    step: "03",
    title: "Leads Sync to Your CRM",
    desc: "Qualified contacts are pushed to your CRM in real time across HubSpot, Salesforce, Pipedrive, Zoho, or Nutshell. Each contact record includes the full conversation transcript, lead score, qualification responses, and source attribution.",
  },
  {
    step: "04",
    title: "Analyze and Optimize",
    desc: "The analytics dashboard shows conversion rates by page, top objection categories, average conversation length, and pipeline value. Use these insights to refine your AI agent prompts and improve lead quality over time.",
  },
];

export default function Site2CRMPage() {
  return (
    <div className="obs-page">
      <div className="obs-container">
        {/* Header */}
        <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
          <span className="obs-chip live">Live</span>
          <span className="obs-chip">SaaS</span>
        </div>
        <span className="obs-eyebrow line">Product &middot; Site2CRM</span>
        <h1 className="obs-h1">
          AI-Powered Lead Capture &amp; <span className="g">CRM Integration</span>
        </h1>
        <p className="obs-lead" style={{ color: "var(--cyan)" }}>
          Your website talks to your CRM. Automatically.
        </p>
        <p className="obs-lead">
          Site2CRM bridges the gap between your website and your sales pipeline. AI-powered
          chat agents engage visitors in natural conversation, qualify leads based on your
          criteria, handle up to 10 objection rebuttals per conversation, and sync qualified
          contacts directly into your CRM in real time. Every interaction is scored, tracked,
          and ready for your sales team to act on.
        </p>

        {/* Stats */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
          <span className="obs-metric">CRM Integrations <b>5+</b></span>
          <span className="obs-metric">Objection Rebuttals <b>10x</b></span>
          <span className="obs-metric">CRM Sync <b>Real-Time</b></span>
        </div>

        {/* Features */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">Capabilities</span>
            <h2 className="obs-h2">Core Features</h2>
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

        {/* Integrations */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">Connectors</span>
            <h2 className="obs-h2">CRM Integrations</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {["HubSpot", "Salesforce", "Pipedrive", "Zoho", "Nutshell"].map((crm) => (
              <span key={crm} className="obs-metric">
                {crm}
              </span>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">The flow</span>
            <h2 className="obs-h2">How AI Lead Capture Works</h2>
          </div>
          <div className="obs-grid obs-grid-2">
            {steps.map((item) => (
              <div key={item.step} className="obs-card">
                <span
                  className="obs-eyebrow"
                  style={{ color: "var(--violet)", marginBottom: 10 }}
                >
                  {item.step}
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Site2CRM */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">Why teams choose it</span>
            <h2 className="obs-h2">Why Teams Choose Site2CRM for CRM Integration</h2>
          </div>
          <div className="obs-prose obs-narrow" style={{ marginLeft: 0 }}>
            <p>
              Traditional lead capture forms have a problem: visitors abandon them. Static forms
              cannot answer questions, overcome objections, or adapt to individual visitors.
              Site2CRM replaces passive forms with persistent AI chat agents that have real
              conversations, qualify leads based on your specific criteria, and push qualified
              contacts directly into your CRM pipeline without manual data entry.
            </p>
            <p>
              The real-time CRM integration eliminates the gap between lead capture and sales
              follow-up. Your team sees new qualified leads appear in their CRM the moment a
              conversation converts, complete with conversation history, lead score, and
              qualification data. Combined with multi-step forms for structured data collection
              and a full analytics dashboard, Site2CRM provides a complete AI-powered lead capture
              and CRM integration solution.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">Under the hood</span>
            <h2 className="obs-h2">Tech Stack</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {["React", "FastAPI", "PostgreSQL", "DeepSeek", "Stripe", "AWS", "Redis"].map(
              (tech) => (
                <span key={tech} className="obs-metric">
                  {tech}
                </span>
              ),
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="obs-section">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <a
              href="https://site2crm.io"
              target="_blank"
              rel="noopener noreferrer"
              className="obs-btn obs-btn-p"
            >
              Get Started Free
            </a>
            <a
              href="https://site2crm.io"
              target="_blank"
              rel="noopener noreferrer"
              className="obs-btn obs-btn-g"
            >
              See Demo &rarr;
            </a>
          </div>
        </section>

        {/* Back Link */}
        <div style={{ marginTop: 40, paddingTop: 32, borderTop: "1px solid var(--line)" }}>
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

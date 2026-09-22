import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects & Roadmap | Axion Labs",
  description:
    "What Axion Labs is shipping in 2026. Live products, research programs, and roadmap commitments including DeepAudit AI, PERSIST, Vesper, Forma, QUANTA, and Project DRIFT.",
  keywords: [
    "Axion Labs roadmap",
    "research portfolio",
    "DeepAudit AI",
    "PERSIST",
    "Vesper",
    "Forma",
    "QUANTA",
    "NSF SBIR",
  ],
  alternates: { canonical: "/projects" },
};

type Stage = "shipped" | "2026" | "roadmap";
type Badge = "Live" | "Beta" | "Active R&D" | "Research" | "Open Source";
type Accent = "cyan" | "violet" | "fuchsia" | "blue" | "emerald" | "amber";

interface Project {
  name: string;
  tagline: string;
  description: string;
  stage: Stage;
  badge: Badge;
  accent: Accent;
  tags: string[];
  href?: string;
  external?: string;
  detail?: string;
}

// Map each accent to a concrete color token for the Observatory palette.
const accentColor: Record<Accent, string> = {
  cyan: "var(--cyan)",
  violet: "var(--violet)",
  fuchsia: "var(--fuchsia)",
  blue: "#5aa2f0",
  emerald: "#46e6a5",
  amber: "#e6b846",
};

const projects: Project[] = [
  {
    name: "DeepAudit AI",
    tagline: "The audit other tools wish they were",
    description:
      "Renders every page in a real headless Chromium browser the same way Googlebot does. 60+ technical, performance, accessibility, and on-page checks in roughly 60 seconds. Free, no signup, no email. 292+ business sites audited and counting.",
    stage: "shipped",
    badge: "Live",
    accent: "cyan",
    tags: ["Real Browser Rendering", "60+ Checks", "~60s Scan", "Free + No Signup"],
    href: "/projects/deepaudit",
    external: "https://axiondeepdigital.com/free-seo-audit",
  },
  {
    name: "Site2CRM",
    tagline: "AI lead capture that talks to your CRM in real time",
    description:
      "Persistent AI chat agents qualify leads, handle up to 10 objection rebuttals per conversation, and sync directly into HubSpot, Salesforce, Pipedrive, Zoho, and Nutshell. Replaces passive forms with conversation.",
    stage: "shipped",
    badge: "Live",
    accent: "violet",
    tags: ["AI Agents", "5 CRMs", "Real-Time Sync", "Lead Scoring"],
    href: "/projects/site2crm",
    external: "https://site2crm.io",
  },
  {
    name: "Made4Founders",
    tagline: "Command center for solo founders and small teams",
    description:
      "96-item compliance checklist, AES-256 encrypted credential vault, cap table management, real-time runway calculator via Plaid, and an integrated AI business assistant. Built for 1-5 person startups that wear every hat.",
    stage: "shipped",
    badge: "Live",
    accent: "amber",
    tags: ["Compliance", "Encrypted Vault", "Cap Table", "AI Assistant"],
    href: "/projects/made4founders",
    external: "https://made4founders.com",
  },
  {
    name: "Vesper",
    tagline: "Autonomous penetration testing with dual-agent architecture",
    description:
      "Two AI agents working in tandem: an Operator that probes and exploits, an Analyst that validates and reports. 11,697 vulnerability templates spanning OWASP Top 10, CVE catalog, and custom exploit chains. Mandatory scope enforcement built in.",
    stage: "2026",
    badge: "Beta",
    accent: "violet",
    tags: ["Dual AI Agents", "11.7K Templates", "Scope Enforcement", "Continuous Learning"],
    href: "/projects/vesper",
  },
  {
    name: "Forma",
    tagline: "No-code platform that emits real Next.js code",
    description:
      "Drag-drop visual editor, schema-driven data modeler, and FastAPI runtime backend. AI generates layouts from natural-language prompts. One-click export to a Next.js codebase you own outright. No vendor lock-in.",
    stage: "2026",
    badge: "Beta",
    accent: "fuchsia",
    tags: ["100+ Components", "AI Generation", "Schema Modeler", "Next.js Export"],
    href: "/projects/forma",
  },
  {
    name: "QUANTA",
    tagline: "Interactive quantum computing education platform",
    description:
      "Hands-on learning environment with a drag-and-drop circuit builder, real-time Bloch sphere visualization, and structured curriculum from single qubits to Grover's algorithm. Supports up to 16 qubits in the browser.",
    stage: "2026",
    badge: "Beta",
    accent: "cyan",
    tags: ["Circuit Builder", "Bloch Sphere", "16 Qubits", "Curriculum"],
    href: "/projects/quanta",
  },
  {
    name: "PERSIST",
    tagline: "Predicting catastrophic forgetting before it happens",
    description:
      "Topology-driven system that predicts how much a deep learning model will forget under continual learning, and recommends the best mitigation with expected benefit before retraining. Validation underway for medical imaging under FDA's PCCP framework.",
    stage: "2026",
    badge: "Active R&D",
    accent: "blue",
    tags: ["Topological Data Analysis", "Continual Learning", "FDA PCCP", "NSF SBIR Phase I"],
    href: "/projects/persist",
    external: "https://github.com/Axion-Deep-Labs/persist-topological-forgetting",
  },
  {
    name: "SDI",
    tagline: "Structural divergence index for fine-tuning risk",
    description:
      "Predicts performance degradation in fine-tuned foundation models without running full benchmark suites. Combines spectral analysis, representation drift, and Hessian curvature shift into a single composite risk score. Under 10 minutes for 7B-parameter models.",
    stage: "2026",
    badge: "Active R&D",
    accent: "blue",
    tags: ["Model Governance", "Spectral Analysis", "Risk Scoring", "NSF SBIR Phase I"],
    href: "/projects/sdi",
    external: "https://github.com/Axion-Deep-Labs/structural-divergence-index",
  },
  {
    name: "Project DRIFT",
    tagline: "Degradation regimes in iterated field transformations",
    description:
      "Pure-research program studying quantum state evolution, operator ordering, and stability thresholds under repeated transformation. Uses QUANTA as a research instrument under a strict governance framework that separates education and research code paths.",
    stage: "roadmap",
    badge: "Research",
    accent: "violet",
    tags: ["Quantum Physics", "33-Doc Governance", "Dual-Use Framework", "Long-Horizon"],
    href: "/projects/drift",
  },
  {
    name: "Grokking Topology",
    tagline: "Early-warning signals for emergent generalization",
    description:
      "Investigates whether persistent homology of loss-landscape slices can detect grokking before it shows up in test accuracy. 30-seed by 3-weight-decay scaling sweep on NMSU Discovery HPC. Paper in preparation.",
    stage: "roadmap",
    badge: "Research",
    accent: "fuchsia",
    tags: ["Persistent Homology", "Grokking", "30-Seed Sweep", "Paper in Prep"],
    href: "/projects/grokking",
  },
  {
    name: "Food Bank Tech",
    tagline: "Open-source operational tooling for food banks",
    description:
      "Q3 2026 commitment: discovery work with 2-3 food banks, then build what hurts most. Inventory tracking, client intake, volunteer scheduling, route planning. Released free and open source. No branding, no paywall, no strings.",
    stage: "roadmap",
    badge: "Open Source",
    accent: "emerald",
    tags: ["Q3 2026", "Discovery First", "MIT License", "No Branding"],
    href: "/projects/food-bank-tech",
  },
];

function ProjectCard({ p }: { p: Project }) {
  const color = accentColor[p.accent];
  return (
    <div className="obs-card" style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
        <div
          aria-hidden
          style={{
            width: 42,
            height: 42,
            borderRadius: 11,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-disp)",
            fontWeight: 800,
            fontSize: 18,
            color,
            background: "rgba(255,255,255,.04)",
            border: "1px solid var(--line2)",
          }}
        >
          {p.name.charAt(0)}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <h3 style={{ margin: 0 }}>{p.name}</h3>
            <span
              className={p.badge === "Live" ? "obs-chip live" : "obs-chip"}
              style={{ flexShrink: 0 }}
            >
              {p.badge}
            </span>
          </div>
          <p
            style={{
              margin: "2px 0 0",
              fontSize: 13,
              fontWeight: 500,
              color,
              lineHeight: 1.4,
            }}
          >
            {p.tagline}
          </p>
        </div>
      </div>

      <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.65, margin: "0 0 16px" }}>
        {p.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 18 }}>
        {p.tags.map((tag) => (
          <span key={tag} className="obs-chip">
            {tag}
          </span>
        ))}
      </div>

      <div
        style={{
          marginTop: "auto",
          paddingTop: 16,
          borderTop: "1px solid var(--line)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        {p.href ? (
          <Link
            href={p.href}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: ".04em",
              color,
              textDecoration: "none",
            }}
          >
            Explore {p.name} &rarr;
          </Link>
        ) : (
          <span style={{ fontSize: 13, color: "var(--faint)" }}>In active research</span>
        )}
        {p.external && (
          <a
            href={p.external}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--faint)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              minWidth: 0,
            }}
          >
            <span
              style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              {p.external.replace("https://", "").replace("github.com/", "")}
            </span>
            <svg
              width="12"
              height="12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ flexShrink: 0 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsIndexPage() {
  const shipped = projects.filter((p) => p.stage === "shipped");
  const rolling2026 = projects.filter((p) => p.stage === "2026");
  const roadmap = projects.filter((p) => p.stage === "roadmap");

  return (
    <div className="obs-page">
      <div className="obs-container">
        {/* Hero */}
        <header>
          <span className="obs-eyebrow line">Projects &middot; 2026</span>
          <h1 className="obs-h1">
            What we&apos;re actually <span className="g">shipping</span>
          </h1>
          <p className="obs-lead">
            A live snapshot of Axion Labs. What&apos;s in production today, what&apos;s
            rolling out across 2026, and the research programs feeding the next wave.
          </p>
        </header>

        {/* Shipped */}
        <section className="obs-section obs-divider-top">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">
              Shipped &middot; [{shipped.length}]
            </span>
            <h2 className="obs-h2">Live in production</h2>
            <p>Live in production. Customers and visitors using them today.</p>
          </div>
          <div className="obs-grid obs-grid-3">
            {shipped.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </div>
        </section>

        {/* Rolling Out 2026 */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">
              Rolling Out &middot; 2026 &middot; [{rolling2026.length}]
            </span>
            <h2 className="obs-h2">In active build</h2>
            <p>
              In active development or active research with a 2026 release or grant
              milestone.
            </p>
          </div>
          <div className="obs-grid obs-grid-3">
            {rolling2026.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">
              Roadmap &amp; Research &middot; [{roadmap.length}]
            </span>
            <h2 className="obs-h2">Long horizon</h2>
            <p>Long-horizon research programs and committed open-source releases.</p>
          </div>
          <div className="obs-grid obs-grid-3">
            {roadmap.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </div>
        </section>

        {/* Research-to-product framing */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">The pipeline</span>
            <h2 className="obs-h2">From research to product</h2>
          </div>
          <div className="obs-prose obs-narrow" style={{ marginLeft: 0 }}>
            <p>
              Every product on this page traces back to research we did first. Site2CRM and
              Made4Founders apply the AI-agent and integration patterns that came out of our
              applied work. QUANTA is both an education platform and a research instrument
              for Project DRIFT. Vesper is the dual-agent architecture we developed for
              autonomous security testing. PERSIST and SDI are research programs themselves,
              targeting the diagnostic tooling layer we think the next decade of AI
              deployment will need.
            </p>
            <p>
              The pipeline is intentional. Research produces insight, insight produces
              instruments, instruments become products, and products produce the data that
              feeds the next research question. We do not build features in search of a
              problem.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="obs-section">
          <div
            className="obs-narrow"
            style={{
              textAlign: "center",
              background: "var(--panel)",
              border: "1px solid var(--line)",
              borderRadius: 24,
              padding: "56px 40px",
            }}
          >
            <span className="obs-eyebrow" style={{ justifyContent: "center" }}>
              Open door
            </span>
            <h2 className="obs-h2" style={{ marginTop: 16 }}>
              Want to <span className="g">compare notes?</span>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                fontSize: 17,
                lineHeight: 1.6,
                margin: "16px auto 28px",
                maxWidth: "44ch",
              }}
            >
              Investors, collaborators, and prospective partners. We keep the door open. Same
              door whether you want to talk research, licensing, or shipping product
              together.
            </p>
            <Link href="/contact" className="obs-btn obs-btn-p">
              Get in touch &rarr;
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

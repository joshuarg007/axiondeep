import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects & Roadmap | Axion Deep Labs",
  description:
    "What Axion Deep Labs is shipping in 2026. Live products, research programs, and roadmap commitments including DeepAudit AI, PERSIST, Vesper, Forma, QUANTA, and Project DRIFT.",
  keywords: [
    "Axion Deep Labs roadmap",
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

const accentMap: Record<Accent, {
  ring: string;
  border: string;
  borderHover: string;
  gradient: string;
  text: string;
  tagBg: string;
  tagText: string;
  tagBorder: string;
  iconBg: string;
}> = {
  cyan: {
    ring: "shadow-cyan-500/20",
    border: "border-cyan-500/20",
    borderHover: "hover:border-cyan-500/50",
    gradient: "from-cyan-500/15 via-cyan-500/5 to-transparent",
    text: "text-cyan-300",
    tagBg: "bg-cyan-500/10",
    tagText: "text-cyan-200",
    tagBorder: "border-cyan-500/20",
    iconBg: "bg-cyan-500/20",
  },
  violet: {
    ring: "shadow-violet-500/20",
    border: "border-violet-500/20",
    borderHover: "hover:border-violet-500/50",
    gradient: "from-violet-500/15 via-violet-500/5 to-transparent",
    text: "text-violet-300",
    tagBg: "bg-violet-500/10",
    tagText: "text-violet-200",
    tagBorder: "border-violet-500/20",
    iconBg: "bg-violet-500/20",
  },
  fuchsia: {
    ring: "shadow-fuchsia-500/20",
    border: "border-fuchsia-500/20",
    borderHover: "hover:border-fuchsia-500/50",
    gradient: "from-fuchsia-500/15 via-fuchsia-500/5 to-transparent",
    text: "text-fuchsia-300",
    tagBg: "bg-fuchsia-500/10",
    tagText: "text-fuchsia-200",
    tagBorder: "border-fuchsia-500/20",
    iconBg: "bg-fuchsia-500/20",
  },
  blue: {
    ring: "shadow-blue-500/20",
    border: "border-blue-500/20",
    borderHover: "hover:border-blue-500/50",
    gradient: "from-blue-500/15 via-blue-500/5 to-transparent",
    text: "text-blue-300",
    tagBg: "bg-blue-500/10",
    tagText: "text-blue-200",
    tagBorder: "border-blue-500/20",
    iconBg: "bg-blue-500/20",
  },
  emerald: {
    ring: "shadow-emerald-500/20",
    border: "border-emerald-500/20",
    borderHover: "hover:border-emerald-500/50",
    gradient: "from-emerald-500/15 via-emerald-500/5 to-transparent",
    text: "text-emerald-300",
    tagBg: "bg-emerald-500/10",
    tagText: "text-emerald-200",
    tagBorder: "border-emerald-500/20",
    iconBg: "bg-emerald-500/20",
  },
  amber: {
    ring: "shadow-amber-500/20",
    border: "border-amber-500/20",
    borderHover: "hover:border-amber-500/50",
    gradient: "from-amber-500/15 via-amber-500/5 to-transparent",
    text: "text-amber-300",
    tagBg: "bg-amber-500/10",
    tagText: "text-amber-200",
    tagBorder: "border-amber-500/20",
    iconBg: "bg-amber-500/20",
  },
};

const badgeStyles: Record<Badge, string> = {
  "Live": "bg-emerald-500/20 text-emerald-200 border-emerald-400/30",
  "Beta": "bg-amber-500/20 text-amber-200 border-amber-400/30",
  "Active R&D": "bg-violet-500/20 text-violet-200 border-violet-400/30",
  "Research": "bg-blue-500/20 text-blue-200 border-blue-400/30",
  "Open Source": "bg-cyan-500/20 text-cyan-200 border-cyan-400/30",
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
  const a = accentMap[p.accent];
  return (
    <div
      className={`group relative flex flex-col rounded-2xl bg-gradient-to-br ${a.gradient} border ${a.border} ${a.borderHover} transition-all duration-200 hover:scale-[1.01] hover:shadow-2xl ${a.ring}`}
    >
      <div className="p-7 pb-0 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-11 h-11 rounded-xl ${a.iconBg} flex items-center justify-center text-lg font-bold ${a.text}`}
          >
            {p.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white truncate">{p.name}</h3>
              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded border shrink-0 ${badgeStyles[p.badge]}`}
              >
                {p.badge}
              </span>
            </div>
            <p className={`${a.text} text-sm font-medium`}>{p.tagline}</p>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {p.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[11px] px-2.5 py-1 rounded-full ${a.tagBg} ${a.tagText} border ${a.tagBorder}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex-1" />
      </div>

      <div className="px-7 py-4 border-t border-white/5 flex items-center justify-between gap-3">
        {p.href ? (
          <Link
            href={p.href}
            className={`text-sm font-medium ${a.text} hover:translate-x-1 transition-transform`}
          >
            Explore {p.name} →
          </Link>
        ) : (
          <span className="text-sm text-gray-500">In active research</span>
        )}
        {p.external && (
          <a
            href={p.external}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1 truncate"
          >
            {p.external.replace("https://", "").replace("github.com/", "")}
            <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

function StageHeader({ label, count, sublabel }: { label: string; count: number; sublabel: string }) {
  return (
    <div className="flex items-end justify-between mb-6 pb-3 border-b border-white/10">
      <div>
        <div className="flex items-center gap-3 mb-1">
          <h2 className="text-2xl md:text-3xl font-bold text-white">{label}</h2>
          <span className="text-sm text-gray-500 font-mono">[{count}]</span>
        </div>
        <p className="text-sm text-gray-500">{sublabel}</p>
      </div>
    </div>
  );
}

export default function ProjectsIndexPage() {
  const shipped = projects.filter((p) => p.stage === "shipped");
  const rolling2026 = projects.filter((p) => p.stage === "2026");
  const roadmap = projects.filter((p) => p.stage === "roadmap");

  return (
    <div className="no-snap relative text-gray-300">
      {/* Hero */}
      <section className="min-h-[40vh] flex items-center justify-center px-6 pt-28 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-bold tracking-widest uppercase text-sm md:text-base mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            PROJECTS · 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-white" style={{ textShadow: "0 0 40px rgba(255,255,255,0.4)" }}>
              What we&apos;re actually{" "}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              shipping
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            A live snapshot of Axion Deep Labs. What&apos;s in production today, what&apos;s
            rolling out across 2026, and the research programs feeding the next wave.
          </p>
        </div>
      </section>

      {/* Shipped */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <StageHeader
            label="Shipped"
            count={shipped.length}
            sublabel="Live in production. Customers and visitors using them today."
          />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {shipped.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Rolling Out 2026 */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <StageHeader
            label="Rolling Out · 2026"
            count={rolling2026.length}
            sublabel="In active development or active research with a 2026 release or grant milestone."
          />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {rolling2026.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <StageHeader
            label="Roadmap & Research"
            count={roadmap.length}
            sublabel="Long-horizon research programs and committed open-source releases."
          />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {roadmap.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Research-to-product framing */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">From research to product</h2>
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-violet-500/[0.08] to-cyan-500/[0.04] border border-white/[0.08]">
            <p className="text-gray-400 leading-relaxed mb-4">
              Every product on this page traces back to research we did first. Site2CRM and
              Made4Founders apply the AI-agent and integration patterns that came out of our
              applied work. QUANTA is both an education platform and a research instrument
              for Project DRIFT. Vesper is the dual-agent architecture we developed for
              autonomous security testing. PERSIST and SDI are research programs themselves,
              targeting the diagnostic tooling layer we think the next decade of AI deployment
              will need.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The pipeline is intentional. Research produces insight, insight produces
              instruments, instruments become products, and products produce the data that
              feeds the next research question. We do not build features in search of a
              problem.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Want to compare notes?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Investors, collaborators, and prospective partners. We keep the door open. Same
              door whether you want to talk research, licensing, or shipping product together.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 text-white font-semibold hover:opacity-90 transition shadow-lg shadow-violet-500/30"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "Made4Founders",
    slug: "made4founders",
    tagline: "Command center for solo founders",
    description:
      "All-in-one platform for 1-5 person startups. 96-item compliance checklist, AES-256 encrypted credential vault, cap table management, real-time runway calculator via Plaid, AI business assistant, and investor updates.",
    icon: "/icons/icon-solutions-founderos.png",
    badge: "Live" as const,
    badgeColor: "green" as const,
    accentText: "text-orange-400",
    iconBg: "bg-orange-500/20",
    borderColor: "border-orange-500/20",
    borderHover: "hover:border-orange-500/40",
    gradientBg: "from-orange-500/15 via-orange-500/5 to-transparent",
    tagBg: "bg-orange-500/10",
    tagText: "text-orange-400",
    tagBorder: "border-orange-500/20",
    tech: ["React", "FastAPI", "SQLite", "Plaid", "Stripe", "Ollama"],
    tags: ["Compliance", "Encrypted Vault", "Cap Table", "AI Assistant"],
    url: "https://made4founders.com",
    href: "/projects/made4founders",
  },
  {
    name: "Site2CRM",
    slug: "site2crm",
    tagline: "AI lead capture that never gives up",
    description:
      "Persistent AI chat widget that handles objections with up to 10 rebuttals. Multi-step lead capture forms with real-time sync to HubSpot, Salesforce, Pipedrive, Zoho, and Nutshell in under 3 seconds.",
    icon: "/icons/icon-solutions-site2crm.png",
    badge: "Live" as const,
    badgeColor: "green" as const,
    accentText: "text-cyan-400",
    iconBg: "bg-cyan-500/20",
    borderColor: "border-cyan-500/20",
    borderHover: "hover:border-cyan-500/40",
    gradientBg: "from-cyan-500/15 via-cyan-500/5 to-transparent",
    tagBg: "bg-cyan-500/10",
    tagText: "text-cyan-400",
    tagBorder: "border-cyan-500/20",
    tech: ["React", "FastAPI", "PostgreSQL", "DeepSeek", "Stripe", "AWS"],
    tags: ["AI Chat Widget", "CRM Sync", "Lead Scoring", "Analytics"],
    url: "https://site2crm.io",
    href: "/projects/site2crm",
  },
  {
    name: "Vesper",
    slug: "vesper",
    tagline: "AI-powered penetration testing",
    description:
      "Dual AI agents work in tandem: one attacks, one analyzes. 11,697 vulnerability templates covering OWASP Top 10, CVEs, and custom exploit chains. Automated reporting and continuous learning.",
    icon: "/icons/icon-solutions-vesper.png",
    badge: "Live" as const,
    badgeColor: "green" as const,
    accentText: "text-violet-400",
    iconBg: "bg-violet-500/20",
    borderColor: "border-violet-500/20",
    borderHover: "hover:border-violet-500/40",
    gradientBg: "from-violet-500/15 via-violet-500/5 to-transparent",
    tagBg: "bg-violet-500/10",
    tagText: "text-violet-400",
    tagBorder: "border-violet-500/20",
    tech: ["Python", "FastAPI", "Claude AI", "Nuclei", "PostgreSQL"],
    tags: ["Dual AI Agents", "11.7K Templates", "OWASP Top 10", "Auto Reports"],
    url: null,
    href: "/projects/vesper",
  },
  {
    name: "QUANTA",
    slug: "quanta",
    tagline: "Interactive quantum computing education",
    description:
      "Hands-on learning platform with drag-and-drop circuit builder, real-time Bloch sphere visualization, and structured curriculum from qubits to Grover\u2019s algorithm. Supports up to 16 qubits.",
    icon: "/icons/icon-solutions-quanta.png",
    badge: "Beta" as const,
    badgeColor: "amber" as const,
    accentText: "text-cyan-400",
    iconBg: "bg-cyan-500/20",
    borderColor: "border-cyan-500/20",
    borderHover: "hover:border-cyan-500/40",
    gradientBg: "from-cyan-500/15 via-violet-500/5 to-transparent",
    tagBg: "bg-cyan-500/10",
    tagText: "text-cyan-400",
    tagBorder: "border-cyan-500/20",
    tech: ["React", "TypeScript", "FastAPI", "Qiskit", "Three.js"],
    tags: ["Circuit Builder", "Bloch Sphere", "16 Qubits", "Curriculum"],
    url: "https://quanta.axiondeep.com",
    href: "/projects/quanta",
  },
  {
    name: "Forma",
    slug: "forma",
    tagline: "No-code platform that generates real code",
    description:
      "Full-stack application builder combining drag-drop visual editor, schema-driven data modeler, and backend runtime. AI generates layouts from prompts. One-click export to Next.js you own.",
    icon: "/icons/icon-solutions-forma.png",
    badge: "Beta" as const,
    badgeColor: "amber" as const,
    accentText: "text-fuchsia-400",
    iconBg: "bg-fuchsia-500/20",
    borderColor: "border-fuchsia-500/20",
    borderHover: "hover:border-fuchsia-500/40",
    gradientBg: "from-fuchsia-500/15 via-fuchsia-500/5 to-transparent",
    tagBg: "bg-fuchsia-500/10",
    tagText: "text-fuchsia-400",
    tagBorder: "border-fuchsia-500/20",
    tech: ["Next.js", "React", "FastAPI", "PostgreSQL", "Ollama"],
    tags: ["100+ Components", "AI Generation", "Data Modeler", "Next.js Export"],
    url: null,
    href: "/projects/forma",
  },
];

const badgeStyles: Record<string, string> = {
  green: "bg-green-500/20 text-green-300 border-green-400/30",
  amber: "bg-amber-500/20 text-amber-300 border-amber-400/30",
};

export default function ProductGrid() {
  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((p) => (
        <Link
          key={p.slug}
          href={p.href}
          className={`group relative flex flex-col rounded-2xl bg-gradient-to-br ${p.gradientBg} border ${p.borderColor} ${p.borderHover} transition-all duration-200 hover:scale-[1.01] hover:shadow-2xl hover:shadow-black/30`}
        >
          <div className="p-7 pb-0 flex-1 flex flex-col">
            {/* Icon + Name + Badge */}
            <div className="flex items-center gap-3 mb-5">
              {p.icon ? (
                <Image
                  src={p.icon}
                  alt={p.name}
                  width={44}
                  height={44}
                  className="rounded-xl"
                />
              ) : (
                <div
                  className={`w-11 h-11 rounded-xl ${p.iconBg} flex items-center justify-center text-lg font-bold ${p.accentText}`}
                >
                  {p.name.charAt(0)}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white truncate">{p.name}</h3>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded border shrink-0 ${badgeStyles[p.badgeColor]}`}
                  >
                    {p.badge}
                  </span>
                </div>
                <p className={`${p.accentText} text-sm font-medium truncate`}>{p.tagline}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
              {p.description}
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-[11px] px-2.5 py-1 rounded-full ${p.tagBg} ${p.tagText} border ${p.tagBorder}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Spacer pushes tech + footer to bottom */}
            <div className="flex-1" />

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-gray-500 border border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom action bar */}
          <div className="px-7 py-4 border-t border-white/5 flex items-center justify-between">
            <span
              className={`text-sm font-medium ${p.accentText} group-hover:translate-x-1 transition-transform`}
            >
              View Project →
            </span>
            {p.url && (
              <span
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(p.url!, "_blank", "noopener,noreferrer");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(p.url!, "_blank", "noopener,noreferrer");
                  }
                }}
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors cursor-pointer flex items-center gap-1"
              >
                {p.url.replace("https://", "")}
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}

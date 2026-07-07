import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The founders of Axion Deep Labs, Inc. A two-person C-corp conducting original research in deep learning theory and shipping commercial AI products from New Mexico.",
  keywords: [
    "Axion Labs team",
    "Joshua Gutierrez CEO",
    "Crystal Gutierrez President",
    "deep learning research team",
    "independent research laboratory founders",
    "founder-owned AI company",
    "New Mexico AI startup",
  ],
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Team | Axion Labs",
    description:
      "Meet the founders of Axion Labs. A research-led, founder-owned C-corp building original deep learning theory and commercial AI products.",
    url: "/team",
  },
};

const team = [
  {
    name: "Crystal A. Gutierrez",
    role: "Chairperson, President & COO",
    image: "/images/team/crystal.jpg",
    accent: "violet",
    profile: "/team/crystal",
    bio: [
      "Co-founder, majority shareholder, and operating leader of Axion Labs. Crystal directs corporate governance, research infrastructure, and institutional partnerships across the entire portfolio of products and research programs.",
      "Adjunct Professor in the NMSU Engineering Department, she provides the laboratory with institutional access to the NMSU Discovery high-performance computing cluster, a strategic resource powering the PERSIST research program and future experimental work.",
      "Serves as Senior Personnel on the NSF SBIR-track PERSIST program, responsible for machine learning pipeline operations and data analysis oversight.",
    ],
    credentials: [
      "M.E. in Information Technology",
      "B.E. in Information Technology",
      "A.A.S. in Accounting",
      "Adjunct Professor, NMSU Engineering Department",
      "Senior Personnel, NSF SBIR PERSIST program",
    ],
    focus: [
      "Research Infrastructure",
      "Corporate Governance",
      "HPC Operations",
      "ML Pipelines",
      "Institutional Partnerships",
    ],
    links: {},
  },
  {
    name: "Joshua R. Gutierrez",
    role: "CEO, Principal Investigator & Full-Stack Engineer",
    image: "/images/team/joshua.jpg",
    accent: "cyan",
    profile: "/team/joshua",
    bio: [
      "Co-founder and Principal Investigator at Axion Labs. Joshua leads research direction, full-stack product engineering, and grant strategy across the laboratory's commercial and research programs.",
      "Principal Investigator on PERSIST, an NSF SBIR-track research program investigating whether the topology of a neural network's loss landscape predicts catastrophic forgetting. Phase I-A results submitted to CoLLAs 2026.",
      "Ships production software across six product lines spanning SaaS, AI tooling, cybersecurity, and quantum computing education. Hands-on with PyTorch, FastAPI, Next.js, and distributed training on university HPC clusters.",
    ],
    credentials: [
      "MS in AI and Data Science (in progress), Colorado State University",
      "BS in Computer Science, Colorado State University",
      "Author, PERSIST: Topology-based Forgetting Prediction (CoLLAs 2026 submission)",
      "Creator, DeepAudit AI and Vesper",
    ],
    focus: [
      "Deep Learning Research",
      "Topological Data Analysis",
      "Full-Stack Engineering",
      "Grant Strategy",
      "Product Leadership",
    ],
    links: {
      linkedin: "https://www.linkedin.com/in/joshua-gutierrez-b198117a",
      github: "https://github.com/Axion-Deep-Labs",
    },
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.axiondeep.com" },
        { "@type": "ListItem", position: 2, name: "Team", item: "https://www.axiondeep.com/team" },
      ],
    },
    ...team.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      worksFor: {
        "@type": "Organization",
        name: "Axion Deep Labs, Inc.",
        url: "https://www.axiondeep.com",
      },
      image: `https://www.axiondeep.com${member.image}`,
    })),
  ],
};

function accentClasses(accent: string) {
  if (accent === "violet") {
    return {
      role: "text-violet-300",
      bullet: "bg-violet-400",
      chipBorder: "border-violet-400/20",
      chipBg: "bg-violet-500/5",
      chipText: "text-violet-200",
      glow: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
      ring: "ring-violet-400/20",
    };
  }
  return {
    role: "text-cyan-300",
    bullet: "bg-cyan-400",
    chipBorder: "border-cyan-400/20",
    chipBg: "bg-cyan-500/5",
    chipText: "text-cyan-200",
    glow: "from-cyan-500/20 via-blue-500/10 to-transparent",
    ring: "ring-cyan-400/20",
  };
}

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen px-6 py-24 sm:py-32 relative overflow-hidden">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
          <p className="text-xs font-medium tracking-[0.2em] uppercase mb-4 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            The Team
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Two founders.{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              One laboratory.
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Axion Labs is a founder-owned C-corporation. No outside capital,
            no account managers, no middle layers. Every research decision,
            product direction, and engineering commit runs through the two people on this page.
          </p>
        </div>

        {/* Team cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          {team.map((member) => {
            const a = accentClasses(member.accent);
            return (
              <article
                key={member.name}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden backdrop-blur-sm flex flex-col"
              >
                {/* Background glow accent */}
                <div
                  className={`pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-radial ${a.glow} blur-3xl opacity-60`}
                />

                {/* Photo */}
                <div className="relative w-full h-96 shrink-0">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Axion Labs`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-8 right-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-1">
                      {member.name}
                    </h2>
                    <p className={`${a.role} text-sm font-medium tracking-wide`}>
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col relative">
                  {member.bio.map((paragraph, i) => (
                    <p key={i} className="text-gray-400 leading-relaxed mb-4 text-sm">
                      {paragraph}
                    </p>
                  ))}

                  {/* Credentials */}
                  <div className="mt-4 mb-6">
                    <h3 className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.15em] mb-3">
                      Credentials
                    </h3>
                    <ul className="space-y-2">
                      {member.credentials.map((cred) => (
                        <li
                          key={cred}
                          className="flex items-start gap-3 text-sm text-gray-300"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${a.bullet} mt-1.5 shrink-0`} />
                          <span>{cred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Focus areas */}
                  <div className="mb-6">
                    <h3 className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.15em] mb-3">
                      Focus
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.focus.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full ${a.chipBg} border ${a.chipBorder} text-xs ${a.chipText}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-5 mt-auto pt-4 border-t border-white/[0.05] items-center">
                    <Link
                      href={member.profile}
                      className={`text-xs font-medium tracking-wide uppercase ${a.chipText} hover:text-white transition-colors`}
                    >
                      Read full bio &rarr;
                    </Link>
                    {member.links.linkedin && (
                      <a
                        href={member.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium tracking-wide uppercase text-gray-500 hover:text-white transition-colors"
                      >
                        LinkedIn
                      </a>
                    )}
                    {member.links.github && (
                      <a
                        href={member.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium tracking-wide uppercase text-gray-500 hover:text-white transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Corporate footer block */}
        <div className="max-w-4xl mx-auto mt-24 relative z-10">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.15em] mb-2">
                  Entity
                </p>
                <p className="text-sm text-gray-200">Axion Deep Labs, Inc.</p>
                <p className="text-xs text-gray-500 mt-1">C-Corporation, New Mexico</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.15em] mb-2">
                  Founded
                </p>
                <p className="text-sm text-gray-200">February 3, 2026</p>
                <p className="text-xs text-gray-500 mt-1">Las Cruces, New Mexico</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.15em] mb-2">
                  Funding
                </p>
                <p className="text-sm text-gray-200">Founder-owned</p>
                <p className="text-xs text-gray-500 mt-1">No outside capital</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto text-center mt-20 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Work with the research team directly.
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Whether you are exploring a research partnership, a product collaboration,
            or an investment conversation, you will hear back from a founder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="shimmer-button px-8 py-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white font-medium text-base transition-all border border-white/[0.08]"
            >
              Get in Touch
            </Link>
            <Link
              href="/research"
              className="px-8 py-4 rounded-xl border border-white/[0.08] text-gray-300 font-medium hover:bg-white/[0.04] hover:text-white transition-colors text-base"
            >
              Explore the Research
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

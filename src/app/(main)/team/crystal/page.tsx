import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crystal A. Gutierrez — Chairperson, President & COO",
  description:
    "Crystal A. Gutierrez is co-founder, Chairperson, President, and Chief Operating Officer of Axion Deep Labs, Inc. Adjunct Professor of Engineering at New Mexico State University, AWS cloud engineer, and Senior Personnel on the NSF SBIR-track PERSIST research program.",
  keywords: [
    "Crystal Gutierrez",
    "Crystal A. Gutierrez",
    "Axion Deep Labs President",
    "Axion Deep Labs COO",
    "Adjunct Professor NMSU",
    "AWS cloud engineer",
    "Site2CRM cloud engineer",
    "NSF SBIR PERSIST",
    "Phi Kappa Phi",
    "Order of the Engineer",
    "New Mexico State University engineering",
  ],
  alternates: { canonical: "/team/crystal" },
  openGraph: {
    title: "Crystal A. Gutierrez | Axion Deep Labs",
    description:
      "Co-founder, Chairperson, President & COO of Axion Deep Labs. Adjunct Professor at NMSU and Senior Personnel on the PERSIST research program.",
    url: "/team/crystal",
    images: [
      {
        url: "/images/team/crystal.jpg",
        width: 1200,
        height: 1200,
        alt: "Crystal A. Gutierrez, Chairperson, President & COO of Axion Deep Labs",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.axiondeep.com" },
        { "@type": "ListItem", position: 2, name: "Team", item: "https://www.axiondeep.com/team" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Crystal A. Gutierrez",
          item: "https://www.axiondeep.com/team/crystal",
        },
      ],
    },
    {
      "@type": "Person",
      name: "Crystal A. Gutierrez",
      jobTitle: "Chairperson, President & Chief Operating Officer",
      worksFor: {
        "@type": "Organization",
        name: "Axion Deep Labs, Inc.",
        url: "https://www.axiondeep.com",
      },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "New Mexico State University" },
        { "@type": "CollegeOrUniversity", name: "Community College of Aurora" },
      ],
      image: "https://www.axiondeep.com/images/team/crystal.jpg",
      url: "https://www.axiondeep.com/team/crystal",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Cruces",
        addressRegion: "NM",
        addressCountry: "US",
      },
      award: [
        "Phi Kappa Phi (2025)",
        "Order of the Engineer (2025)",
        "Sociedad de Ingenieros (2025)",
      ],
    },
  ],
};

const sectionHeading =
  "text-[11px] font-semibold text-gray-500 uppercase tracking-[0.18em] mb-4";

export default function CrystalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen px-6 py-24 sm:py-32 relative overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-gradient-radial from-violet-500/15 via-fuchsia-500/8 to-transparent blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 text-xs text-gray-500">
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300">Crystal A. Gutierrez</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 mb-16 items-start">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/[0.08] ring-1 ring-violet-400/20">
              <Image
                src="/images/team/crystal.jpg"
                alt="Crystal A. Gutierrez, Chairperson, President & COO of Axion Deep Labs"
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase mb-3 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Co-Founder &middot; Officer of the Corporation
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
                Crystal A. Gutierrez
              </h1>
              <p className="text-violet-300 text-base font-medium tracking-wide mb-6">
                Chairperson, President & Chief Operating Officer
              </p>
              <p className="text-gray-300 leading-relaxed text-base mb-4">
                Crystal A. Gutierrez is the co-founder, majority shareholder,
                Chairperson, President, and Chief Operating Officer of Axion Deep
                Labs, Inc. She directs corporate governance, research
                infrastructure, and institutional partnerships across the
                laboratory&apos;s entire portfolio of products and research programs.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Crystal also serves as Adjunct Professor in the New Mexico State
                University College of Engineering, where she teaches Java
                Programming and Information Security Principles, and as a
                long-tenured Cloud Engineer on the Site2CRM platform. Her dual
                appointment in academia and industry gives Axion Deep Labs direct
                institutional access to one of the Mountain West&apos;s most active
                university research-computing environments.
              </p>
            </div>
          </header>

          {/* Narrative bio */}
          <section className="mb-16 prose prose-invert max-w-none">
            <h2 className={sectionHeading}>Profile</h2>
            <div className="space-y-5 text-gray-300 leading-relaxed text-[15px]">
              <p>
                Crystal&apos;s career sits at the intersection of cloud engineering,
                academic instruction, and corporate operations. As Chairperson and
                President of the Board, she sets governance policy for the
                corporation, oversees the laboratory&apos;s operating cadence, and
                serves as the executive sponsor of every research program and
                commercial product line under the Axion Deep Labs umbrella.
              </p>
              <p>
                As Senior Personnel on the NSF SBIR-track PERSIST research
                program, she is responsible for the integrity of the laboratory&apos;s
                machine-learning pipeline operations and data-analysis oversight,
                including reproducibility, infrastructure hygiene, and statistical
                review of experimental results. She is also the relationship
                owner for the laboratory&apos;s university partnerships, including the
                arrangement that gives Axion Deep Labs sustained access to the
                NMSU Discovery high-performance computing cluster — the core
                compute resource powering the PERSIST experimental program.
              </p>
              <p>
                In parallel, Crystal has supported the Site2CRM platform as a
                cloud engineer since 2019, managing AWS deployments, CI/CD,
                and infrastructure stability for a real-time lead-capture SaaS
                that today serves a growing base of small and mid-sized
                businesses. That hands-on operational experience underwrites the
                laboratory&apos;s engineering culture: every research result is
                expected to be reproducible, every deployment auditable, every
                outage post-mortem&apos;d.
              </p>
              <p>
                Her teaching work at NMSU — a remote-first appointment covering
                cybersecurity, network security, cryptography, and
                object-oriented programming — keeps the laboratory plugged into
                the next generation of engineering talent and into the active
                research questions of the College of Engineering.
              </p>
            </div>
          </section>

          {/* Roles */}
          <section className="mb-16">
            <h2 className={sectionHeading}>Roles &amp; Appointments</h2>
            <ol className="relative border-l border-white/[0.08] pl-6 space-y-8">
              <li className="relative">
                <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-violet-400 ring-4 ring-violet-400/15" />
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-white font-semibold">
                    Co-Founder, Chairperson, President & COO
                  </h3>
                  <span className="text-xs text-gray-500 tracking-wide">
                    2026 — Present
                  </span>
                </div>
                <p className="text-violet-300 text-sm mb-2">
                  Axion Deep Labs, Inc. &middot; Las Cruces, NM
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Operating leader of a research-driven C-corporation. Oversees
                  corporate governance, research infrastructure, institutional
                  partnerships, and operational strategy across all Axion Deep
                  Labs initiatives, including PERSIST, EXP-04, the QUANTA
                  education platform, Site2CRM, Made4Founders, Forma, Vesper, and
                  Axion Deep Digital.
                </p>
              </li>
              <li className="relative">
                <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-violet-400 ring-4 ring-violet-400/15" />
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-white font-semibold">Adjunct Professor</h3>
                  <span className="text-xs text-gray-500 tracking-wide">
                    2025 — 2026
                  </span>
                </div>
                <p className="text-violet-300 text-sm mb-2">
                  New Mexico State University &middot; College of Engineering
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Teaches Java Programming and Information Security Principles in
                  remote learning environments. Curriculum spans cybersecurity,
                  network security, cryptography, and object-oriented programming.
                  Manages digital course materials, grading, and student
                  engagement while maintaining university compliance and
                  academic-standards review.
                </p>
              </li>
              <li className="relative">
                <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-violet-400 ring-4 ring-violet-400/15" />
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-white font-semibold">Cloud Engineer</h3>
                  <span className="text-xs text-gray-500 tracking-wide">
                    2019 — Present
                  </span>
                </div>
                <p className="text-violet-300 text-sm mb-2">
                  Site2CRM &middot; Las Cruces, NM
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Manages AWS cloud deployments and infrastructure operations for
                  a real-time lead-capture SaaS platform. Owns CI/CD reliability,
                  application migrations to cloud environments, and operational
                  performance for a multi-tenant production system.
                </p>
              </li>
              <li className="relative">
                <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-violet-400 ring-4 ring-violet-400/15" />
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-white font-semibold">
                    Senior Personnel — PERSIST
                  </h3>
                  <span className="text-xs text-gray-500 tracking-wide">
                    2026 — Present
                  </span>
                </div>
                <p className="text-violet-300 text-sm mb-2">
                  NSF SBIR-track Research Program
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Senior Personnel on the laboratory&apos;s flagship research program
                  investigating topological signatures of neural-network
                  knowledge persistence. Responsible for ML pipeline operations,
                  data-analysis oversight, and reproducibility infrastructure
                  across the program&apos;s 57-experiment study and ongoing Phase I
                  scale validation on the NMSU Discovery HPC cluster.
                </p>
              </li>
            </ol>
          </section>

          {/* Education + Honors */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className={sectionHeading}>Education</h2>
              <ul className="space-y-5">
                <li>
                  <p className="text-white font-semibold">
                    Master&apos;s Degree, Information Technology
                  </p>
                  <p className="text-sm text-gray-400">
                    New Mexico State University &middot; 2025
                  </p>
                </li>
                <li>
                  <p className="text-white font-semibold">
                    Bachelor&apos;s Degree, Information Technology
                  </p>
                  <p className="text-sm text-gray-400">
                    New Mexico State University &middot; 2023
                  </p>
                </li>
                <li>
                  <p className="text-white font-semibold">Associate&apos;s Degree</p>
                  <p className="text-sm text-gray-400">
                    Community College of Aurora &middot; 2015
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className={sectionHeading}>Honors &amp; Recognition</h2>
              <ul className="space-y-5">
                <li>
                  <p className="text-white font-semibold">Phi Kappa Phi</p>
                  <p className="text-sm text-gray-400">
                    Inducted 2025 &middot; Honor Society of Phi Kappa Phi
                  </p>
                </li>
                <li>
                  <p className="text-white font-semibold">Order of the Engineer</p>
                  <p className="text-sm text-gray-400">
                    Inducted 2025 &middot; Engineering professional pledge
                  </p>
                </li>
                <li>
                  <p className="text-white font-semibold">Sociedad de Ingenieros</p>
                  <p className="text-sm text-gray-400">
                    Inducted 2025 &middot; Engineering honor society
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* Focus areas + Skills */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className={sectionHeading}>Focus Areas</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Corporate Governance",
                  "Research Infrastructure",
                  "HPC Operations",
                  "ML Pipelines",
                  "Institutional Partnerships",
                  "Information Security",
                  "Cloud Engineering",
                  "Reproducibility",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-violet-500/5 border border-violet-400/20 text-xs text-violet-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className={sectionHeading}>Technical Skills</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "AWS",
                  "CI/CD",
                  "Java",
                  "Cryptography",
                  "Network Security",
                  "Cybersecurity Pedagogy",
                  "Object-Oriented Programming",
                  "Technical Writing",
                  "Remote Collaboration",
                  "Problem Solving",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Footer nav */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-10 border-t border-white/[0.06]">
            <Link
              href="/team"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              &larr; Back to the team
            </Link>
            <Link
              href="/team/joshua"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Read about Joshua R. Gutierrez &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

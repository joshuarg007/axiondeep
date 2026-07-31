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
    links: {} as { linkedin?: string; github?: string },
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
    } as { linkedin?: string; github?: string },
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

export default function TeamPage() {
  return (
    <div className="obs-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="obs-container">
        {/* Hero */}
        <div className="obs-narrow" style={{ textAlign: "center" }}>
          <span className="obs-eyebrow line" style={{ justifyContent: "center" }}>
            The Team
          </span>
          <h1 className="obs-h1">
            Two founders. <span className="g">One laboratory.</span>
          </h1>
          <p className="obs-lead" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Axion Labs is a founder-owned C-corporation. No outside capital, no account managers,
            no middle layers. Every research decision, product direction, and engineering commit
            runs through the two people on this page.
          </p>
        </div>

        {/* Team cards */}
        <section className="obs-section">
          <div className="obs-grid obs-grid-2">
            {team.map((member) => {
              const accentColor =
                member.accent === "violet" ? "var(--violet)" : "var(--cyan)";
              return (
                <article
                  key={member.name}
                  className="obs-card"
                  style={{ padding: 0, display: "flex", flexDirection: "column" }}
                >
                  {/* Photo */}
                  <div style={{ position: "relative", width: "100%", height: 384 }}>
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role} at Axion Labs`}
                      fill
                      sizes="(max-width: 820px) 100vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      priority
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, var(--void) 0%, rgba(6,7,10,.5) 50%, transparent 100%)",
                      }}
                    />
                    <div style={{ position: "absolute", bottom: 24, left: 26, right: 26 }}>
                      <h2 className="obs-h3" style={{ marginBottom: 4 }}>
                        {member.name}
                      </h2>
                      <p
                        style={{
                          fontFamily: "var(--font-mono)",
                          textTransform: "uppercase",
                          letterSpacing: ".08em",
                          fontSize: 12,
                          color: accentColor,
                          margin: 0,
                        }}
                      >
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      padding: "28px 26px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {member.bio.map((paragraph, i) => (
                      <p
                        key={i}
                        style={{
                          color: "var(--muted)",
                          fontSize: 14.5,
                          lineHeight: 1.65,
                          margin: "0 0 14px",
                        }}
                      >
                        {paragraph}
                      </p>
                    ))}

                    {/* Credentials */}
                    <div style={{ marginTop: 10, marginBottom: 24 }}>
                      <h3
                        className="obs-eyebrow"
                        style={{ color: "var(--faint)", marginBottom: 14 }}
                      >
                        Credentials
                      </h3>
                      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 9 }}>
                        {member.credentials.map((cred) => (
                          <li
                            key={cred}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 12,
                              fontSize: 14,
                              color: "var(--ink-dim)",
                            }}
                          >
                            <span
                              style={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                background: accentColor,
                                marginTop: 7,
                                flexShrink: 0,
                              }}
                            />
                            <span>{cred}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Focus areas */}
                    <div style={{ marginBottom: 24 }}>
                      <h3
                        className="obs-eyebrow"
                        style={{ color: "var(--faint)", marginBottom: 14 }}
                      >
                        Focus
                      </h3>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {member.focus.map((tag) => (
                          <span key={tag} className="obs-chip">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div
                      style={{
                        display: "flex",
                        gap: 20,
                        marginTop: "auto",
                        paddingTop: 18,
                        borderTop: "1px solid var(--line)",
                        alignItems: "center",
                      }}
                    >
                      <Link
                        href={member.profile}
                        style={{
                          fontFamily: "var(--font-mono)",
                          textTransform: "uppercase",
                          letterSpacing: ".1em",
                          fontSize: 11,
                          color: accentColor,
                          textDecoration: "none",
                        }}
                      >
                        Read full bio &rarr;
                      </Link>
                      {member.links.linkedin && (
                        <a
                          href={member.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: "var(--font-mono)",
                            textTransform: "uppercase",
                            letterSpacing: ".1em",
                            fontSize: 11,
                            color: "var(--muted)",
                            textDecoration: "none",
                          }}
                        >
                          LinkedIn
                        </a>
                      )}
                      {member.links.github && (
                        <a
                          href={member.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: "var(--font-mono)",
                            textTransform: "uppercase",
                            letterSpacing: ".1em",
                            fontSize: 11,
                            color: "var(--muted)",
                            textDecoration: "none",
                          }}
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
        </section>

        {/* Corporate footer block */}
        <section className="obs-section">
          <div className="obs-grid obs-grid-3">
            <div className="obs-card">
              <span className="obs-eyebrow" style={{ color: "var(--faint)" }}>
                Entity
              </span>
              <h3 style={{ marginTop: 12 }}>Axion Deep Labs, Inc.</h3>
              <p>C-Corporation, New Mexico</p>
            </div>
            <div className="obs-card">
              <span className="obs-eyebrow" style={{ color: "var(--faint)" }}>
                Founded
              </span>
              <h3 style={{ marginTop: 12 }}>February 3, 2026</h3>
              <p>Las Cruces, New Mexico</p>
            </div>
            <div className="obs-card">
              <span className="obs-eyebrow" style={{ color: "var(--faint)" }}>
                Funding
              </span>
              <h3 style={{ marginTop: 12 }}>Founder-owned</h3>
              <p>No outside capital</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="obs-section">
          <div className="obs-narrow" style={{ textAlign: "center" }}>
            <span className="obs-eyebrow line" style={{ justifyContent: "center" }}>
              Get in touch
            </span>
            <h2 className="obs-h2" style={{ marginTop: 16 }}>
              Work with the research team <span className="g">directly.</span>
            </h2>
            <p
              className="obs-lead"
              style={{ marginLeft: "auto", marginRight: "auto", marginBottom: 32 }}
            >
              Whether you are exploring a research partnership, a product collaboration, or an
              investment conversation, you will hear back from a founder.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                justifyContent: "center",
              }}
            >
              <Link href="/contact" className="obs-btn obs-btn-p">
                Get in Touch
              </Link>
              <Link href="/research" className="obs-btn obs-btn-g">
                Explore the Research
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

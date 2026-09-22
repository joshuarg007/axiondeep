import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PlatformCards from "@/components/PlatformCards";

export const metadata: Metadata = {
  title: "Applied R&D",
  description:
    "Applied R&D translating original research in machine learning, quantum computing, and information theory into production software.",
  keywords: [
    "applied AI research",
    "research-to-production pipeline",
    "machine learning engineering",
    "technology transfer",
    "research-driven development",
    "reproducible methodology",
    "deep tech R&D",
  ],
  alternates: { canonical: "/development" },
};

const processSteps = [
  {
    step: "01",
    title: "Investigate",
    description:
      "Deep exploration of the problem space, literature review, and technical feasibility assessment. We identify gaps in existing solutions and formulate testable hypotheses before writing any code.",
    image: "/images/process-discover.webp",
    alt: "Investigation phase - exploring the research problem",
  },
  {
    step: "02",
    title: "Prototype",
    description:
      "Architecture design, rapid prototyping, and hypothesis validation. We build minimal viable experiments to prove the approach works before committing to full implementation. Every prototype is version-controlled and reproducible.",
    image: "/images/process-design.webp",
    alt: "Prototype phase - validating research hypotheses",
  },
  {
    step: "03",
    title: "Ship",
    description:
      "Iterative development with rigorous testing, automated CI/CD pipelines, and production deployment. We monitor performance, gather feedback, and continuously improve based on real-world usage data.",
    image: "/images/process-deliver.webp",
    alt: "Ship phase - deploying production-ready technology",
  },
];

const techStack = [
  {
    title: "AI & Machine Learning",
    accent: "var(--cyan)",
    tools: ["PyTorch", "Qiskit", "Ripser", "scikit-tda", "Ollama", "Claude AI", "DeepSeek"],
  },
  {
    title: "Web & Backend",
    accent: "var(--violet)",
    tools: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Docker"],
  },
  {
    title: "Infrastructure",
    accent: "var(--fuchsia)",
    tools: ["AWS", "CUDA", "GitHub Actions", "Stripe", "Plaid", "Three.js"],
  },
];

export default function DevelopmentPage() {
  return (
    <div className="obs-page">
      <div className="obs-container">
        {/* Hero */}
        <span className="obs-eyebrow line">From lab to production</span>
        <h1 className="obs-h1">
          Applied <span className="g">Research</span> &amp; Development
        </h1>
        <p className="obs-lead">Where original research becomes production software.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 34 }}>
          <Link className="obs-btn obs-btn-p" href="/contact">
            Research Inquiries &rarr;
          </Link>
          <Link className="obs-btn obs-btn-g" href="/projects">
            View Our Work
          </Link>
        </div>

        {/* Platforms & Technologies */}
        <section className="obs-section obs-divider-top">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">The stack in the field</span>
            <h2 className="obs-h2">Platforms &amp; Technologies</h2>
            <p>Web, mobile, AI, spatial computing, and cloud infrastructure.</p>
          </div>
          <PlatformCards />
        </section>

        {/* Methodology */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">The methodology</span>
            <h2 className="obs-h2">From investigation to deployment.</h2>
            <p>Research-driven development, measured at every step.</p>
          </div>

          <div className="obs-grid obs-grid-3">
            {processSteps.map((item) => (
              <div key={item.step} className="obs-card">
                <div
                  style={{
                    position: "relative",
                    height: 168,
                    marginBottom: 20,
                    borderRadius: 12,
                    overflow: "hidden",
                    border: "1px solid var(--line)",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={400}
                    height={300}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, var(--void), transparent 70%)",
                    }}
                  />
                  <span
                    className="g"
                    style={{
                      position: "absolute",
                      bottom: 12,
                      left: 16,
                      fontFamily: "var(--font-disp)",
                      fontWeight: 800,
                      fontSize: 34,
                      lineHeight: 1,
                    }}
                  >
                    {item.step}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Technology Stack */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">Core technology stack</span>
            <h2 className="obs-h2">The tools we build on.</h2>
            <p>The frameworks we use across our research and product engineering.</p>
          </div>

          <div className="obs-grid obs-grid-3">
            {techStack.map((group) => (
              <div key={group.title} className="obs-card">
                <h3 style={{ color: group.accent }}>{group.title}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
                  {group.tools.map((t) => (
                    <span key={t} className="obs-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why applied R&D */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">The rationale</span>
            <h2 className="obs-h2">Why applied R&amp;D, not just research.</h2>
            <p>A result without a runnable artifact is a result that evaporates.</p>
          </div>

          <div className="obs-grid obs-grid-2">
            <div className="obs-card">
              <h3>Every finding ships</h3>
              <p>
                Every major experiment at Axion Labs concludes with a deliverable: a benchmark, a
                reference implementation, a trained model, or a deployed service. Results that
                cannot be exercised by another engineer are treated as incomplete. This
                requirement forces our methodology to remain grounded in real constraints rather
                than drifting into theory for its own sake.
              </p>
            </div>
            <div className="obs-card">
              <h3>Industry timelines, academic rigor</h3>
              <p>
                We compress the academic publication cycle into an industry delivery cadence. A
                program that might run eighteen months in a traditional laboratory ships a
                production checkpoint every quarter here, with the final peer-reviewable write-up
                landing alongside the code. Reviewers get both the paper and the repository;
                readers get conclusions backed by software they can run themselves.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="obs-section">
          <div className="obs-narrow" style={{ textAlign: "center" }}>
            <span className="obs-eyebrow" style={{ justifyContent: "center" }}>
              Work with the lab
            </span>
            <h2 className="obs-h2" style={{ marginTop: 16 }}>
              Interested in our <span className="g">Research</span>?
            </h2>
            <p className="obs-lead" style={{ margin: "18px auto 0" }}>
              Technical inquiries, research collaborations, or partnership discussions.
            </p>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
              <Link className="obs-btn obs-btn-p" href="/contact">
                Contact the Lab &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

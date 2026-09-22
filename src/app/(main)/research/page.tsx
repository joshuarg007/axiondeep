import { Metadata } from "next";
import Link from "next/link";
import ResearchPrograms from "@/components/ResearchPrograms";

export const metadata: Metadata = {
  title: "Research Programs | Active Experiments",
  description:
    "Four research programs studying catastrophic forgetting, quantum system behavior, integrated information, and capacity scaling laws in neural networks.",
  keywords: [
    "original research",
    "catastrophic forgetting",
    "continual learning",
    "topological data analysis",
    "persistent homology",
    "loss landscape topology",
    "integrated information theory",
    "IIT phi neural networks",
    "Bekenstein bound",
    "holographic principle",
    "information capacity scaling laws",
    "cross-architecture analysis",
    "reproducible research",
    "preliminary results",
    "deep learning theory",
    "computational neuroscience",
    "machine learning research",
    "independent research organization",
    "NeurIPS",
    "ICML",
  ],
  alternates: { canonical: "/research" },
};

const programPills = [
  { label: "PERSIST", href: "#persist", status: "Preliminary Complete" },
  { label: "DRIFT", href: "#drift", status: "Active" },
  { label: "PHI", href: "#phi", status: "Protocol Defined" },
  { label: "GENESIS", href: "#genesis", status: "Protocol Defined" },
];

export default function ResearchPage() {
  return (
    <div className="obs-page">
      <div className="obs-container">
        {/* Hero */}
        <span className="obs-eyebrow line">Research Programs</span>
        <h1 className="obs-h1">
          Investigating Fundamental Obstacles to{" "}
          <span className="g">Continual Learning</span> in Neural Networks
        </h1>
        <p className="obs-lead">
          Four research programs investigating fundamental obstacles to continual
          learning. Our flagship experiment (EXP-01 PERSIST) has completed
          preliminary proof-of-concept across 19 architectures and 3 datasets,
          demonstrating that loss landscape topology predicts mitigation benefit at
          small scale. Phase I will test whether these signals survive at production
          scale (100M-7B+ parameters), requiring supercomputer resources and novel
          distributed persistent homology algorithms.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            marginTop: 32,
          }}
        >
          {programPills.map((p) => (
            <a
              key={p.label}
              href={p.href}
              className="obs-btn obs-btn-g"
              style={{ gap: 12 }}
            >
              {p.label}
              <span style={{ color: "var(--faint)", letterSpacing: ".08em" }}>
                {p.status}
              </span>
            </a>
          ))}
        </div>

        {/* Research Programs (client component, handles modal interaction) */}
        <section className="obs-section">
          <ResearchPrograms />
        </section>

        {/* Open Research */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">Open Science</span>
            <h2 className="obs-h2">Open Research</h2>
          </div>
          <div className="obs-grid obs-grid-3">
            <div className="obs-card">
              <h3>Code</h3>
              <p>
                Experiment source code, model definitions, and analysis pipelines.
              </p>
              <a
                href="https://github.com/Axion-Deep-Labs/persist-topological-forgetting"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: 14,
                  color: "var(--cyan)",
                  fontSize: 14,
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(70,214,230,.35)",
                }}
              >
                GitHub Repository &rarr;
              </a>
            </div>
            <div className="obs-card">
              <h3>Reproducibility</h3>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "1.1em",
                  color: "var(--muted)",
                  fontSize: 14,
                  lineHeight: 1.7,
                }}
              >
                <li>Deterministic seeding (seed = 42)</li>
                <li>Version-controlled YAML configs</li>
                <li>Full dependency pinning</li>
                <li>PyTorch 2.x, Ripser, scikit-tda</li>
              </ul>
            </div>
            <div className="obs-card">
              <h3>Infrastructure</h3>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "1.1em",
                  color: "var(--muted)",
                  fontSize: 14,
                  lineHeight: 1.7,
                }}
              >
                <li>Preliminary: Local GPU (NVIDIA RTX 4090)</li>
                <li>Phase I: Supercomputer (planned)</li>
                <li>Automated experiment dashboard</li>
                <li>Results in structured JSON</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research Team */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">The People</span>
            <h2 className="obs-h2">Research Team</h2>
          </div>
          <div className="obs-grid obs-grid-2">
            <div className="obs-card">
              <h3>Crystal A. Gutierrez, MS</h3>
              <p
                style={{
                  color: "var(--cyan)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: ".1em",
                  margin: "0 0 14px",
                }}
              >
                Principal Investigator &amp; Co-Founder
              </p>
              <p>
                MS in Information Technology. BS in Information Communication
                Technology. Adjunct Professor, New Mexico State University. Research
                experience in AI-driven predictive modeling through the Purdue
                University Data Mine, developing weather forecasting models in
                collaboration with Bayer. Oversees research strategy, institutional
                partnerships, and experimental design review.
              </p>
            </div>
            <div className="obs-card">
              <h3>Joshua R. Gutierrez, MS</h3>
              <p
                style={{
                  color: "var(--cyan)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: ".1em",
                  margin: "0 0 14px",
                }}
              >
                Co-Principal Investigator &amp; Co-Founder
              </p>
              <p>
                MS in Artificial Intelligence &amp; Data Science. BS in Computer
                Science. Designed and built the lab&apos;s experimental
                infrastructure, model architectures, topological analysis pipeline,
                loss landscape sampling, and reproducibility framework. Leads
                day-to-day experiment execution, computational methodology, and
                software engineering across all research programs.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="obs-section">
          <div
            className="obs-card"
            style={{ padding: "56px 32px", textAlign: "center" }}
          >
            <span className="obs-eyebrow line" style={{ justifyContent: "center" }}>
              Get In Touch
            </span>
            <h2 className="obs-h2" style={{ marginTop: 16 }}>
              Research Collaboration
            </h2>
            <p
              style={{
                color: "var(--muted)",
                maxWidth: "42ch",
                margin: "18px auto 32px",
                fontSize: 16,
                lineHeight: 1.6,
              }}
            >
              We welcome inquiries from academic institutions, funding agencies, and
              researchers working on continual learning, topological data analysis,
              or deep learning theory.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                justifyContent: "center",
              }}
            >
              <Link href="/research/persist/findings" className="obs-btn obs-btn-p">
                Research Findings
              </Link>
              <Link href="/research/experiments" className="obs-btn obs-btn-g">
                Experimental Protocols
              </Link>
              <Link href="/contact" className="obs-btn obs-btn-g">
                Contact Research Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

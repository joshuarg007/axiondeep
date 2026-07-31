import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Axion Labs conducts original research in deep learning theory, catastrophic forgetting, loss landscape topology, and neural network generalization.",
  keywords: [
    "deep learning theory research",
    "catastrophic forgetting",
    "continual learning research",
    "topological data analysis neural networks",
    "loss landscape topology",
    "information capacity scaling",
    "integrated information theory",
    "reproducible ML research",
    "independent research laboratory",
    "computational neuroscience",
    "persistent homology",
    "neural network generalization",
  ],
  alternates: { canonical: "/mission" },
};

const researchDomains = [
  {
    title: "Continual Learning & Catastrophic Forgetting",
    description:
      "Why do neural networks forget previously learned tasks when trained on new data? We investigate the structural and topological conditions under which knowledge persists or degrades across sequential training regimes.",
    status: "Active, experimental data collected",
    color: "var(--cyan)",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
  },
  {
    title: "Topological Data Analysis",
    description:
      "Applying persistent homology to characterize the shape of neural network loss landscapes. We measure how topological features (connected components, loops, voids) relate to learning dynamics and generalization.",
    status: "Active, cross-architecture study in progress",
    color: "var(--violet)",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Information Capacity & Scaling Laws",
    description:
      "Does neural network information capacity follow area laws or volume laws? We test whether capacity scales with boundary parameters (a computational analog of the Bekenstein bound) rather than total parameter count.",
    status: "Protocol defined, pending execution",
    color: "var(--fuchsia)",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-1.5L12 12" />
      </svg>
    ),
  },
  {
    title: "Integrated Information Measurement",
    description:
      "Adapting Integrated Information Theory (Tononi, 2004) from neuroscience to computational systems. We measure Phi across deep learning architecture families and test its correlation with generalization and robustness.",
    status: "Protocol defined, pending execution",
    color: "#34d399",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Quantum System Behavior",
    description:
      "Characterizing stability degradation in quantum state evolution under repeated operator application. We investigate how operator ordering and diversity affect behavioral uncertainty in regimes beyond closed-form prediction.",
    status: "Active, theoretical framework established",
    color: "#fb923c",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Loss Landscape Geometry",
    description:
      "Studying the geometric and topological structure of optimization landscapes in deep neural networks. We analyze how architecture choices, training regimes, and data distribution shape the loss surface.",
    status: "Integrated across active programs",
    color: "#60a5fa",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const methodologySteps = [
  {
    number: 1,
    title: "Formulate",
    description:
      "Identify open questions in the literature and formulate testable hypotheses. Each research program begins with a specific, falsifiable prediction grounded in prior work.",
    color: "var(--cyan)",
    details: [
      { value: "Literature-grounded", label: "hypotheses" },
      { value: "Falsifiable", label: "predictions" },
    ],
  },
  {
    number: 2,
    title: "Design",
    description:
      "Create reproducible experimental protocols with version-controlled YAML configurations, deterministic seeding, and full dependency pinning. Every experiment is designed to be independently replicable.",
    color: "var(--violet)",
    details: [
      { value: "Version-controlled", label: "configurations" },
      { value: "Deterministic", label: "seeding" },
    ],
  },
  {
    number: 3,
    title: "Execute",
    description:
      "Run controlled experiments on local GPU infrastructure with automated tracking. We use ClearML for experiment management, PyTorch for model training, and Ripser/scikit-tda for topological computation.",
    color: "var(--fuchsia)",
    details: [
      { value: "ClearML-tracked", label: "experiments" },
      { value: "PyTorch 2.x", label: "infrastructure" },
    ],
  },
  {
    number: 4,
    title: "Publish",
    description:
      "Share findings through peer-reviewed venues (NeurIPS, ICML, Nature) and open-source code repositories. All experimental code, configurations, and raw data are made publicly available.",
    color: "#fb923c",
    details: [
      { value: "Open-source", label: "code & data" },
      { value: "Peer-reviewed", label: "publication" },
    ],
  },
];

export default function MissionPage() {
  return (
    <div className="obs-page">
      <div className="obs-container">
        {/* Hero */}
        <span className="obs-eyebrow line">Our Mission</span>
        <h1 className="obs-h1">
          Understanding how neural networks{" "}
          <span className="g">learn, forget &amp; generalize.</span>
        </h1>
        <p className="obs-lead">
          Axion Labs conducts original experimental research in deep learning theory. We
          investigate the structural conditions that govern knowledge persistence, information
          capacity, and generalization in neural networks, with an emphasis on reproducibility,
          open methodology, and cross-disciplinary rigor.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}>
          <span className="obs-metric">
            <span style={{ width: 8, height: 8, borderRadius: 99, background: "#34d399" }} />
            Active experiments with preliminary results
          </span>
          <span className="obs-metric">
            <span style={{ width: 8, height: 8, borderRadius: 99, background: "var(--cyan)" }} />
            Open-source methodology
          </span>
        </div>

        {/* Research Domains */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">The domains</span>
            <h2 className="obs-h2">Research Domains</h2>
            <p>
              Our work spans six interconnected domains, unified by a central question: what
              structural properties of neural networks determine their capacity to learn, retain,
              and generalize knowledge?
            </p>
          </div>

          <div className="obs-grid obs-grid-3">
            {researchDomains.map((domain) => (
              <div key={domain.title} className="obs-card">
                <div style={{ color: domain.color, marginBottom: 16 }}>{domain.icon}</div>
                <h3>{domain.title}</h3>
                <p>{domain.description}</p>
                <p
                  style={{
                    marginTop: 14,
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: ".06em",
                    color: "var(--faint)",
                  }}
                >
                  {domain.status}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">The method</span>
            <h2 className="obs-h2">Research Methodology</h2>
            <p>
              Every experiment follows a structured protocol designed for independent
              reproducibility. We version-control configurations, pin dependencies, and publish all
              code and data.
            </p>
          </div>

          <div className="obs-grid obs-grid-2">
            {methodologySteps.map((step) => (
              <div key={step.number} className="obs-card">
                <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
                  <span
                    style={{
                      flexShrink: 0,
                      fontFamily: "var(--font-mono)",
                      fontSize: 22,
                      fontWeight: 700,
                      color: step.color,
                      lineHeight: 1,
                    }}
                  >
                    {String(step.number).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
                      {step.details.map((detail, i) => (
                        <span key={i} className="obs-metric">
                          <b style={{ color: step.color }}>{detail.value}</b>
                          {detail.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Current Focus */}
        <section className="obs-section">
          <div className="obs-card" style={{ padding: "40px 32px" }}>
            <span className="obs-eyebrow">Current focus</span>
            <h2 className="obs-h2" style={{ marginTop: 14 }}>
              Catastrophic Forgetting
            </h2>
            <p className="obs-lead" style={{ marginTop: 18 }}>
              Our flagship experiment (EXP-01) has completed preliminary proof-of-concept,
              demonstrating across 19 small-to-medium architectures and 3 datasets that loss
              landscape topology predicts mitigation benefit at small scale (H0 predicts EWC
              benefit: CIFAR-100 &rho; = 0.76, RESISC-45 &rho; = 0.86). These results are
              preliminary: all models are under 45M parameters. The critical open question is
              whether the signal survives at production scale (100M-7B+ parameters), which requires
              supercomputer resources and potentially novel distributed persistent homology
              algorithms. Phase I scale validation is planned pending supercomputer allocation.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 28 }}>
              <Link href="/research/persist/findings" className="obs-btn obs-btn-p">
                View preliminary results
              </Link>
              <Link href="/research" className="obs-btn obs-btn-g">
                Research programs
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="obs-section">
          <div className="obs-narrow" style={{ textAlign: "center" }}>
            <span className="obs-eyebrow" style={{ justifyContent: "center" }}>
              Collaborate
            </span>
            <h2 className="obs-h2" style={{ marginTop: 16 }}>
              Research Collaborations
            </h2>
            <p className="obs-lead" style={{ margin: "18px auto 0" }}>
              We welcome inquiries from funding agencies, academic collaborators, and researchers
              working on related problems in deep learning theory and continual learning.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                marginTop: 28,
                justifyContent: "center",
              }}
            >
              <Link href="/contact" className="obs-btn obs-btn-p">
                Contact the lab
              </Link>
              <Link href="/research/experiments" className="obs-btn obs-btn-g">
                Experimental protocols
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

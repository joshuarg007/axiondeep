import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Axion Deep Labs conducts original research in deep learning theory — catastrophic forgetting, loss landscape topology, and neural network generalization.",
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
    status: "Active — experimental data collected",
    gradient: "from-cyan-500/10 to-blue-500/5",
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
  },
  {
    title: "Topological Data Analysis",
    description:
      "Applying persistent homology to characterize the shape of neural network loss landscapes. We measure how topological features (connected components, loops, voids) relate to learning dynamics and generalization.",
    status: "Active — cross-architecture study in progress",
    gradient: "from-violet-500/10 to-purple-500/5",
    icon: (
      <svg className="w-8 h-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Information Capacity & Scaling Laws",
    description:
      "Does neural network information capacity follow area laws or volume laws? We test whether capacity scales with boundary parameters (a computational analog of the Bekenstein bound) rather than total parameter count.",
    status: "Protocol defined — pending execution",
    gradient: "from-fuchsia-500/10 to-pink-500/5",
    icon: (
      <svg className="w-8 h-8 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-1.5L12 12" />
      </svg>
    ),
  },
  {
    title: "Integrated Information Measurement",
    description:
      "Adapting Integrated Information Theory (Tononi, 2004) from neuroscience to computational systems. We measure Phi across deep learning architecture families and test its correlation with generalization and robustness.",
    status: "Protocol defined — pending execution",
    gradient: "from-emerald-500/10 to-teal-500/5",
    icon: (
      <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Quantum System Behavior",
    description:
      "Characterizing stability degradation in quantum state evolution under repeated operator application. We investigate how operator ordering and diversity affect behavioral uncertainty in regimes beyond closed-form prediction.",
    status: "Active — theoretical framework established",
    gradient: "from-orange-500/10 to-amber-500/5",
    icon: (
      <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Loss Landscape Geometry",
    description:
      "Studying the geometric and topological structure of optimization landscapes in deep neural networks. We analyze how architecture choices, training regimes, and data distribution shape the loss surface.",
    status: "Integrated across active programs",
    gradient: "from-blue-500/10 to-indigo-500/5",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
    gradient: "from-cyan-500 to-blue-500",
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
    gradient: "from-violet-500 to-purple-500",
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
    gradient: "from-fuchsia-500 to-pink-500",
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
    gradient: "from-orange-500 to-red-500",
    details: [
      { value: "Open-source", label: "code & data" },
      { value: "Peer-reviewed", label: "publication" },
    ],
  },
];

export default function MissionPage() {
  return (
    <div className="snap-page relative text-gray-300">
      {/* Hero Section */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-bold tracking-widest uppercase text-lg md:text-xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            OUR MISSION
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="text-xl md:text-2xl font-light text-gray-400 tracking-widest mr-3">
              UNDERSTANDING
            </span>
            <span className="text-white" style={{ textShadow: "0 0 40px rgba(255,255,255,0.4)" }}>
              HOW NEURAL NETWORKS
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              LEARN, FORGET &amp; GENERALIZE
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Axion Deep Labs conducts original experimental research in deep learning theory.
            We investigate the structural conditions that govern knowledge persistence, information
            capacity, and generalization in neural networks — with an emphasis on reproducibility,
            open methodology, and cross-disciplinary rigor.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Active experiments with preliminary results
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Open-source methodology
            </span>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="snap-section min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Research Domains</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our work spans six interconnected domains, unified by a central question:
              what structural properties of neural networks determine their capacity to learn, retain, and generalize knowledge?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchDomains.map((domain) => (
              <div
                key={domain.title}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${domain.gradient} border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="mb-4">{domain.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{domain.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">{domain.description}</p>
                <p className="text-xs text-gray-500 italic">{domain.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Research Methodology</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every experiment follows a structured protocol designed for independent reproducibility.
              We version-control configurations, pin dependencies, and publish all code and data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {methodologySteps.map((step) => (
              <div
                key={step.number}
                className="group relative rounded-2xl p-8 transition-all"
                style={{
                  background: `linear-gradient(to bottom right, ${step.number === 1 ? "rgba(6,182,212,0.15)" : step.number === 2 ? "rgba(139,92,246,0.15)" : step.number === 3 ? "rgba(217,70,239,0.15)" : "rgba(249,115,22,0.15)"}, transparent)`,
                }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-xl`}
                  >
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{step.description}</p>
                    <div className="flex gap-4 text-xs">
                      {step.details.map((detail, i) => (
                        <div key={i}>
                          <span
                            className={`font-bold ${step.number === 1 ? "text-cyan-400" : step.number === 2 ? "text-violet-400" : step.number === 3 ? "text-fuchsia-400" : "text-orange-400"}`}
                          >
                            {detail.value}
                          </span>{" "}
                          <span className="text-gray-500">{detail.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-cyan-500/[0.08] to-violet-500/[0.04] border border-white/[0.08]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Current Focus: Catastrophic Forgetting
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our flagship experiment (EXP-01) investigates whether persistent homology features
              of neural network loss landscapes predict resistance to catastrophic forgetting.
              With 38 of 57 configurations complete across 19 architectures and 2 datasets, our key
              finding is that topology predicts forgetting on hard tasks where model size fails. On
              CUB-200 (fine-grained, n=19), parameter count predicts the wrong direction (&rho; = -0.92),
              but adding topology rescues prediction (permutation test p = 0.037). RESISC-45 in progress
              for cross-domain validation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/research/findings"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:opacity-90 transition-opacity text-center"
              >
                View preliminary results
              </Link>
              <Link
                href="/research"
                className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors text-center"
              >
                Research programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="snap-section flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center w-full">
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Research Collaborations
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              We welcome inquiries from funding agencies, academic collaborators,
              and researchers working on related problems in deep learning theory and continual learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Contact the lab
              </Link>
              <Link
                href="/research/experiments"
                className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
              >
                Experimental protocols
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

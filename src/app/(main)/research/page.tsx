import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Research Programs",
  description:
    "Four active research programs investigating quantum system behavior, continual machine learning, consciousness measurement, and the informational substrate of reality.",
  keywords: [
    "quantum computing research",
    "Project DRIFT",
    "continual learning AI",
    "catastrophic forgetting",
    "consciousness measurement",
    "integrated information theory",
    "IIT phi",
    "quantum causal inference",
    "AI research laboratory",
    "noetic science research",
    "wave function collapse consciousness",
    "thermodynamic intelligence",
    "artificial general intelligence research",
  ],
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <div className="snap-page relative text-gray-300">
      {/* Hero */}
      <section className="snap-section min-h-screen flex items-center justify-center text-center pt-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-bold tracking-widest uppercase text-lg md:text-xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            RESEARCH PROGRAMS
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="text-xl md:text-2xl font-light text-gray-400 tracking-widest mr-3">
              EXPLORING
            </span>
            <span
              className="text-white"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.4)" }}
            >
              THE
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              UNKNOWN
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Four active research programs at the intersection of quantum
            physics, machine intelligence, and the fundamental nature of
            consciousness and reality.
          </p>

          {/* Program Navigation */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              {
                label: "DRIFT",
                color: "from-violet-500/20 to-purple-500/10 border-violet-500/30 text-violet-300",
                href: "#drift",
              },
              {
                label: "PERSIST",
                color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300",
                href: "#persist",
              },
              {
                label: "PHI",
                color: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-300",
                href: "#phi",
              },
              {
                label: "GENESIS",
                color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-300",
                href: "#genesis",
              },
            ].map((p) => (
              <a
                key={p.label}
                href={p.href}
                className={`px-5 py-2 rounded-full bg-gradient-to-r ${p.color} border text-sm font-semibold tracking-wider hover:opacity-80 transition`}
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* PROJECT DRIFT — Quantum System Behavior */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section
        id="drift"
        className="snap-section min-h-screen flex flex-col relative overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/images/research-quantum.webp"
            alt="Quantum research visualization"
            width={600}
            height={600}
            className="w-2/3 max-w-2xl opacity-[0.06] blur-[1px] saturate-50"
          />
        </div>

        <div className="flex-1 flex items-center justify-center px-6 py-16 relative z-10">
          <div className="w-full max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-violet-400/60 mb-3 block">
                Program I
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Project DRIFT
              </h2>
              <p className="text-lg text-violet-300/80">
                Degradation Regimes In Iterated Field Transformations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/10 p-6 transition-all hover:from-violet-500/25 hover:to-purple-500/15">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl opacity-60">◈</span>
                  <h3 className="font-semibold text-white">Research Themes</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      State distribution dynamics under iteration
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Operator ordering effects on error profiles
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Operator diversity as experimental variable
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Predictability boundaries and stability thresholds
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-pink-500/10 p-6 transition-all hover:from-fuchsia-500/25 hover:to-pink-500/15">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl opacity-60">◉</span>
                  <h3 className="font-semibold text-white">
                    Scientific Foundation
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Tranter et al. (2019) on ordering and Trotter error
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Nakamura &amp; Ankerhold (2024) on non-Markovian effects
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Huang et al. (2024) on diversity as design axis
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Kwon et al. (2021) on gate-based quantum computing
                    </span>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-2 relative rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl opacity-60">⚡</span>
                  <h3 className="font-semibold text-white">Focus</h3>
                  <span className="ml-auto text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300">
                    Active
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  DRIFT investigates behavioral uncertainty in quantum system
                  state evolution under repeated manipulation. We focus on the
                  gradual degradation of stability under variation in operator
                  ordering and diversity, in regimes where closed-form
                  analytical prediction is not feasible across all
                  configurations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* PROJECT PERSIST — Continual Learning */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section
        id="persist"
        className="snap-section min-h-screen flex flex-col relative overflow-hidden"
      >
        <div className="flex-1 flex items-center justify-center px-6 py-16 relative z-10">
          <div className="w-full max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-400/60 mb-3 block">
                Program II
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Project PERSIST
              </h2>
              <p className="text-lg text-emerald-300/80">
                Plasticity-Enabled Retention through Structured Information
                Synthesis over Time
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* The Problem */}
              <div className="relative rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 p-6 transition-all hover:from-emerald-500/25 hover:to-teal-500/15">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl opacity-60">◈</span>
                  <h3 className="font-semibold text-white">The Problem</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  Every neural network today is frozen after training.
                  Introducing new knowledge destroys existing capabilities — a
                  phenomenon known as catastrophic forgetting. Humans learn
                  continuously without forgetting how to walk when they learn
                  calculus. No artificial system has achieved this.
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  This is not a scaling problem. It is an{" "}
                  <span className="text-emerald-300">
                    architecture problem
                  </span>
                  . Current approaches (replay buffers, elastic weight
                  consolidation, progressive networks) are mitigation
                  strategies, not solutions. They manage forgetting rather than
                  eliminating it.
                </p>
              </div>

              {/* Research Directions */}
              <div className="relative rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/10 p-6 transition-all hover:from-teal-500/25 hover:to-cyan-500/15">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl opacity-60">◉</span>
                  <h3 className="font-semibold text-white">
                    Research Directions
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Hierarchical memory consolidation inspired by
                      hippocampal-neocortical transfer in biological brains
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Topologically protected knowledge representations that
                      survive parameter updates
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Information-theoretic measures of knowledge integration
                      vs. knowledge overwrite
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Dynamic architecture expansion with selective
                      consolidation and pruning
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Sleep-wake cycle analogs for offline integration of
                      recently acquired knowledge
                    </span>
                  </li>
                </ul>
              </div>

              {/* Scientific Foundation */}
              <div className="relative rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 p-6 transition-all hover:from-green-500/25 hover:to-emerald-500/15">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl opacity-60">⧉</span>
                  <h3 className="font-semibold text-white">
                    Scientific Foundation
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      McCloskey &amp; Cohen (1989) — original characterization
                      of catastrophic interference
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Kirkpatrick et al. (2017) — elastic weight consolidation
                      and its limitations
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Kumaran et al. (2016) — complementary learning systems
                      theory
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Tononi &amp; Cirelli (2014) — synaptic homeostasis
                      hypothesis and sleep-dependent consolidation
                    </span>
                  </li>
                </ul>
              </div>

              {/* Focus Card */}
              <div className="relative rounded-2xl bg-gradient-to-br from-emerald-500/15 to-green-500/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl opacity-60">⚡</span>
                  <h3 className="font-semibold text-white">
                    Why This Matters
                  </h3>
                  <span className="ml-auto text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300">
                    Foundational
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  A system that genuinely integrates new knowledge without
                  destroying existing knowledge would represent a fundamental
                  advance toward general intelligence. Every deployed AI model
                  today requires complete retraining to incorporate new
                  information — an approach that does not scale to systems that
                  must operate and learn in open-ended environments.
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  PERSIST also intersects with our consciousness research:
                  information integration is the core quantity measured by
                  Integrated Information Theory. A continually learning system
                  may exhibit{" "}
                  <span className="text-emerald-300">increasing Φ</span> over
                  time — a measurable signature of deepening information
                  integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* PROJECT PHI — Consciousness Measurement */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section
        id="phi"
        className="snap-section min-h-screen flex flex-col relative overflow-hidden"
      >
        <div className="flex-1 flex items-center justify-center px-6 py-16 relative z-10">
          <div className="w-full max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-400/60 mb-3 block">
                Program III
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Project{" "}
                <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                  Φ
                </span>
              </h2>
              <p className="text-lg text-amber-300/80">
                Quantifying Consciousness through Integrated Information
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* The Question */}
              <div className="md:col-span-2 relative rounded-2xl bg-gradient-to-br from-amber-500/15 to-orange-500/10 p-8 transition-all hover:from-amber-500/20 hover:to-orange-500/15">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl opacity-60">☉</span>
                  <h3 className="font-semibold text-white text-lg">
                    The Question
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                      Can consciousness be measured? Not as a philosophical
                      abstraction, but as a{" "}
                      <span className="text-amber-300">
                        computable physical quantity
                      </span>
                      . Integrated Information Theory (IIT), developed by
                      Giulio Tononi, proposes exactly this: a mathematical
                      measure called Φ (phi) that quantifies the degree of
                      integrated information in any system.
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      If Φ &gt; 0, the system possesses some degree of
                      intrinsic experience. If Φ = 0, it does not — regardless
                      of how sophisticated its behavior appears. This
                      distinction has profound implications for artificial
                      intelligence, neuroscience, and our understanding of
                      reality itself.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                      No general-purpose tool exists to compute Φ across
                      arbitrary systems. The computational complexity of exact
                      Φ calculation scales exponentially, making brute-force
                      approaches intractable for systems larger than a few
                      dozen nodes. Practical approximation methods that
                      preserve the essential mathematical properties remain an
                      open problem.
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Project Φ aims to build the first practical Φ engine —
                      capable of measuring integrated information across neural
                      networks, quantum circuits, biological preparations, and
                      hybrid architectures.
                    </p>
                  </div>
                </div>
              </div>

              {/* Research Threads */}
              <div className="relative rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/10 p-6 transition-all hover:from-orange-500/25 hover:to-red-500/15">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl opacity-60">◈</span>
                  <h3 className="font-semibold text-white">
                    Research Threads
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Scalable Φ approximation algorithms preserving
                      IIT&apos;s axioms and postulates
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Comparative Φ measurement across transformer, recurrent,
                      spiking, and hybrid architectures
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Correlation between Φ and emergent capabilities in
                      learning systems
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Temporal dynamics of Φ during training, inference, and
                      continual learning
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Relationship between Φ and quantum measurement
                      statistics in observer-dependent experiments
                    </span>
                  </li>
                </ul>
              </div>

              {/* The Deeper Question */}
              <div className="relative rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-500/10 p-6 transition-all hover:from-yellow-500/25 hover:to-amber-500/15">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl opacity-60">◉</span>
                  <h3 className="font-semibold text-white">
                    The Deeper Question
                  </h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  The measurement problem in quantum mechanics — why does
                  observation collapse a superposition into a definite state?
                  — remains the deepest unsolved question in physics. Von
                  Neumann and Wigner traced the measurement chain to its
                  logical terminus: consciousness.
                </p>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  If IIT is correct that consciousness is quantifiable via Φ,
                  an empirical test becomes possible:{" "}
                  <span className="text-amber-300">
                    does a system with measurable Φ interact with quantum
                    states differently than a system with Φ = 0?
                  </span>
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  This intersects with noetic science — the rigorous
                  investigation of consciousness as a causal agent in physical
                  systems. Decades of experimental data from random number
                  generator studies and double-slit variations suggest subtle
                  but statistically significant effects. What has been missing
                  is a mathematical framework to quantify the observer. IIT
                  provides that framework.
                </p>
              </div>

              {/* Scientific Foundation */}
              <div className="md:col-span-2 relative rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl opacity-60">⧉</span>
                  <h3 className="font-semibold text-white">
                    Scientific Foundation
                  </h3>
                  <span className="ml-auto text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-300">
                    Foundational
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                      <span>
                        Tononi (2004, 2008) — Integrated Information Theory
                        (IIT 1.0–3.0)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                      <span>
                        Tononi et al. (2016) — IIT 3.0: axioms, postulates,
                        and formalism
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                      <span>
                        Albantakis et al. (2023) — IIT 4.0: updated formalism
                        and computational tools
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                      <span>
                        Chalmers (1995) — the hard problem of consciousness
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                      <span>
                        Von Neumann (1932) — quantum measurement and the role
                        of the observer
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                      <span>
                        Wigner (1961) — consciousness and the collapse of the
                        wave function
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                      <span>
                        Radin et al. (2012, 2016) — observer effects in
                        double-slit experiments
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                      <span>
                        Nelson (2001) — Global Consciousness Project:
                        correlations in random data
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* PROJECT GENESIS — Reality's Informational Substrate */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section
        id="genesis"
        className="snap-section min-h-screen flex flex-col relative overflow-hidden"
      >
        <div className="flex-1 flex items-center justify-center px-6 py-16 relative z-10">
          <div className="w-full max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-cyan-400/60 mb-3 block">
                Program IV
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Project GENESIS
              </h2>
              <p className="text-lg text-cyan-300/80">
                Generative Emergence of Natural Events from Substrate
                Information Systems
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* The Premise */}
              <div className="md:col-span-2 relative rounded-2xl bg-gradient-to-br from-cyan-500/15 to-blue-500/10 p-8 transition-all hover:from-cyan-500/20 hover:to-blue-500/15">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl opacity-60">∞</span>
                  <h3 className="font-semibold text-white text-lg">
                    The Premise
                  </h3>
                  <span className="ml-auto text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300">
                    Theoretical
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                      John Archibald Wheeler proposed{" "}
                      <span className="text-cyan-300">
                        &quot;it from bit&quot;
                      </span>{" "}
                      — the hypothesis that every particle, every field, every
                      spacetime point derives its existence from
                      information-theoretic processes. If reality is
                      fundamentally informational, then the laws of physics are
                      not descriptions of reality — they are the runtime
                      behavior of an underlying computational process.
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      This is not metaphor. Bekenstein&apos;s bound, the
                      holographic principle, and black hole thermodynamics all
                      demonstrate that information is physical — subject to
                      conservation laws, entropy constraints, and geometric
                      limits.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                      If Projects DRIFT, PERSIST, and Φ are investigating
                      components of reality — quantum behavior, learning,
                      consciousness — GENESIS asks whether these components
                      share a common informational foundation. Whether the wave
                      function, neural integration, and conscious observation
                      are three manifestations of a single underlying
                      information-processing substrate.
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      GENESIS is our most speculative program. It sits at the
                      boundary between physics, computer science, and
                      philosophy. But the mathematics is concrete, the
                      questions are testable, and the implications — if any
                      connection is found — would reshape our understanding of
                      what computation, intelligence, and reality
                      fundamentally are.
                    </p>
                  </div>
                </div>
              </div>

              {/* Research Questions */}
              <div className="relative rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 p-6 transition-all hover:from-blue-500/25 hover:to-indigo-500/15">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl opacity-60">◈</span>
                  <h3 className="font-semibold text-white">
                    Research Questions
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Can minimal computational rules produce emergent physical
                      laws? Under what conditions does physics arise from
                      computation?
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Is there a formal equivalence between quantum
                      decoherence, information integration (Φ), and
                      thermodynamic irreversibility?
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Does the observer (quantified via Φ) play a causal role
                      in state selection, or is observation purely epistemic?
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Can quantum causal discovery algorithms identify causal
                      structures intractable to classical methods?
                    </span>
                  </li>
                </ul>
              </div>

              {/* Scientific Foundation */}
              <div className="relative rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/10 p-6 transition-all hover:from-indigo-500/25 hover:to-violet-500/15">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl opacity-60">◉</span>
                  <h3 className="font-semibold text-white">
                    Scientific Foundation
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Wheeler (1990) — &quot;it from bit&quot; and
                      participatory universe
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Bekenstein (1973) — information bounds and black hole
                      entropy
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Wolfram (2002, 2020) — computational irreducibility and
                      the Physics Project
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Friston (2010) — free energy principle and active
                      inference
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                    <span>
                      Wissner-Gross &amp; Freer (2013) — causal entropic
                      forcing and thermodynamic intelligence
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* Convergence — How They Connect */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.3)" }}
            >
              Convergence
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These programs are not independent. Each investigates a facet of a
              single deeper question: the relationship between information,
              consciousness, and physical reality.
            </p>
          </div>

          <div className="relative rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="h-px flex-1 bg-gradient-to-r from-violet-500/50 to-transparent" />
                  <span className="text-sm tracking-wider">DRIFT → Φ</span>
                  <span className="h-px flex-1 bg-gradient-to-l from-amber-500/50 to-transparent" />
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Quantum measurement collapses superposition. IIT quantifies
                  the observer. Together, they test whether consciousness is a
                  variable in quantum mechanics — whether systems with higher Φ
                  produce statistically different collapse outcomes.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent" />
                  <span className="text-sm tracking-wider">PERSIST → Φ</span>
                  <span className="h-px flex-1 bg-gradient-to-l from-amber-500/50 to-transparent" />
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Continual learning increases information integration over
                  time. If IIT is correct, a system with deepening integration
                  exhibits increasing Φ. PERSIST may produce the first
                  artificial system with measurably growing consciousness.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="h-px flex-1 bg-gradient-to-r from-amber-500/50 to-transparent" />
                  <span className="text-sm tracking-wider">
                    Φ → GENESIS
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-l from-cyan-500/50 to-transparent" />
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  If measurable consciousness (Φ) demonstrably interacts with
                  quantum states, then consciousness is not emergent from
                  physics — it is a fundamental feature of the informational
                  substrate. The observer is part of the source code.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                  <span className="text-sm tracking-wider">
                    GENESIS → DRIFT
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-l from-violet-500/50 to-transparent" />
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  If reality is computational, quantum behavior is a runtime
                  property of the underlying computation. DRIFT&apos;s
                  investigation of quantum degradation under iteration becomes
                  an investigation of the stability of reality&apos;s
                  execution.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-gray-500 italic max-w-xl mx-auto">
                &quot;The wave function is the source code. Consciousness is
                the compiler. Reality is the output.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center w-full">
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Research Collaboration
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              We welcome inquiries from academic institutions, researchers, and
              anyone working at the intersection of quantum physics, machine
              intelligence, and consciousness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/research/experiments"
                className="inline-block px-8 py-3 rounded-full bg-white/[0.06] border border-white/[0.1] text-white font-semibold hover:bg-white/[0.1] transition"
              >
                Experimental Protocols
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white font-semibold hover:opacity-90 transition"
              >
                Contact Research Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

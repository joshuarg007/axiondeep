import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Research Programs — Active Experiments",
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

export default function ResearchPage() {
  return (
    <div className="no-snap relative text-gray-300">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-4">
            RESEARCH PROGRAMS
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Investigating Fundamental Obstacles to Continual Learning in Neural
            Networks
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
            Four research programs with active experiments studying why neural
            networks fail at sequential task learning, how information integrates
            across architectures, and what governs capacity limits. Our flagship
            experiment (EXP-01) is actively producing cross-architecture data
            with preliminary correlation between loss landscape topology and
            catastrophic forgetting resistance.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {[
              {
                label: "PERSIST",
                href: "#persist",
                color:
                  "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300",
                status: "Active",
              },
              {
                label: "DRIFT",
                href: "#drift",
                color:
                  "from-violet-500/20 to-purple-500/10 border-violet-500/30 text-violet-300",
                status: "Active",
              },
              {
                label: "PHI",
                href: "#phi",
                color:
                  "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-300",
                status: "Protocol Defined",
              },
              {
                label: "GENESIS",
                href: "#genesis",
                color:
                  "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-300",
                status: "Protocol Defined",
              },
            ].map((p) => (
              <a
                key={p.label}
                href={p.href}
                className={`px-4 py-2 rounded-full bg-gradient-to-r ${p.color} border text-sm font-semibold tracking-wider hover:opacity-80 transition`}
              >
                {p.label}
                <span className="ml-2 text-xs opacity-60">{p.status}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* PERSIST — Flagship Program                                */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section id="persist" className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-400/60">
                Program I
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300">
                Active &mdash; Producing Results
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Project PERSIST
            </h2>
            <p className="text-emerald-300/80">
              Plasticity-Enabled Retention through Structured Information
              Synthesis over Time
            </p>
          </div>

          {/* Problem + Hypothesis */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-3">Problem</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Catastrophic forgetting (McCloskey &amp; Cohen, 1989) prevents
                neural networks from learning sequential tasks without
                destroying previously acquired knowledge. Current mitigations
                — elastic weight consolidation (Kirkpatrick et al., 2017),
                replay buffers, progressive networks — reduce but do not
                eliminate interference. The underlying geometric mechanism
                remains poorly understood.
              </p>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-3">Hypothesis</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The persistence of learned knowledge under sequential task
                training is predictable from the topological features of the
                loss landscape around converged weight configurations.
                Architectures that induce deeper topological structure —
                measured via persistent homology H₀ — are more resistant to
                catastrophic forgetting.
              </p>
            </div>
          </div>

          {/* Methodology */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-3">Methodology</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Dataset &amp; Training
                </h4>
                <p>
                  Split-CIFAR-100 (Task A: classes 0–49, Task B: classes
                  50–99). 8 architectures trained to convergence on Task A (100
                  epochs, SGD, cosine annealing), then trained sequentially on
                  Task B (10,000 steps). Task A accuracy measured at intervals.
                </p>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Topological Analysis
                </h4>
                <p>
                  Loss landscape sampled on 25×25 grid along filter-normalized
                  random directions (Li et al., 2018). Persistent homology
                  computed via Ripser (sublevel set filtration, H₀ and H₁).
                  Spearman rank correlation between H₀ total persistence and
                  Task A retention across architectures.
                </p>
              </div>
            </div>
          </div>

          {/* Preliminary Results */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/15 p-6 mb-8">
            <h3 className="font-semibold text-white mb-4">
              Preliminary Results (5 of 8 Architectures)
            </h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-emerald-500/20 text-left">
                    <th className="pb-2 text-gray-500 font-medium">
                      Architecture
                    </th>
                    <th className="pb-2 text-gray-500 font-medium">Params</th>
                    <th className="pb-2 text-gray-500 font-medium">
                      H₀ Persistence
                    </th>
                    <th className="pb-2 text-gray-500 font-medium">
                      Retention @10k
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-white/5">
                    <td className="py-2 text-emerald-300">ViT-Small</td>
                    <td className="py-2">~3M</td>
                    <td className="py-2 font-mono">4,254.2</td>
                    <td className="py-2 text-emerald-300">0.84%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">MLP-Mixer</td>
                    <td className="py-2">~2.3M</td>
                    <td className="py-2 font-mono">3,758.8</td>
                    <td className="py-2">0.0%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">WRN-28-10</td>
                    <td className="py-2">~36.5M</td>
                    <td className="py-2 font-mono">2,272.6</td>
                    <td className="py-2">0.0%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">ResNet-18</td>
                    <td className="py-2">~11M</td>
                    <td className="py-2 font-mono">2,151.5</td>
                    <td className="py-2">0.0%</td>
                  </tr>
                  <tr>
                    <td className="py-2">ResNet-50</td>
                    <td className="py-2">~23.6M</td>
                    <td className="py-2 font-mono">1,639.0</td>
                    <td className="py-2">0.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              Preliminary Spearman ρ = 0.866 (H₀ persistence vs. retention,
              n=3). ViT-Small is the only architecture with measurable
              retention and has 2× higher H₀ than any convolutional
              architecture. Parameter count does not predict topological
              structure.
            </p>
            <p className="text-sm text-gray-500">
              3 architectures pending (ResNet-18 Wide, DenseNet-121,
              EfficientNet-B0) to reach n=8 for statistical significance.
            </p>
            <div className="mt-4">
              <Link
                href="/research/findings"
                className="text-sm text-emerald-300 hover:text-emerald-200 transition underline underline-offset-4"
              >
                Full results with figures →
              </Link>
            </div>
          </div>

          {/* References */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h3 className="font-semibold text-white mb-3 text-sm">
              Key References
            </h3>
            <ul className="space-y-1 text-xs text-gray-500">
              <li>
                McCloskey &amp; Cohen (1989). Catastrophic interference in
                connectionist networks. <i>Psych. of Learning and Motivation</i>.
              </li>
              <li>
                Kirkpatrick et al. (2017). Overcoming catastrophic forgetting.
                <i> PNAS</i>, 114(13).
              </li>
              <li>
                Ballester &amp; Araujo (2020). TDA and deep learning.
                <i> NeurIPS Workshop</i>.
              </li>
              <li>
                Li et al. (2018). Visualizing the loss landscape of neural nets.
                <i> NeurIPS</i>.
              </li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              Publication target: NeurIPS / ICML (Continual Learning track)
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* DRIFT — Quantum System Behavior                           */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section id="drift" className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-violet-400/60">
                Program II
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-violet-500/20 text-violet-300">
                Active
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Project DRIFT
            </h2>
            <p className="text-violet-300/80">
              Degradation Regimes In Iterated Field Transformations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-3">Focus</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Investigating behavioral uncertainty in quantum system state
                evolution under repeated manipulation. Focused on stability
                degradation under variation in operator ordering and diversity,
                in regimes where closed-form analytical prediction is not
                feasible across all configurations.
              </p>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-3">
                Research Themes
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-violet-400/40 shrink-0" />
                  State distribution dynamics under iteration
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-violet-400/40 shrink-0" />
                  Operator ordering effects on error profiles
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-violet-400/40 shrink-0" />
                  Operator diversity as experimental variable
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-violet-400/40 shrink-0" />
                  Predictability boundaries and stability thresholds
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h3 className="font-semibold text-white mb-3 text-sm">
              Key References
            </h3>
            <ul className="space-y-1 text-xs text-gray-500">
              <li>
                Tranter et al. (2019). Ordering and Trotter error in quantum
                simulation.
              </li>
              <li>
                Nakamura &amp; Ankerhold (2024). Non-Markovian effects in
                iterated quantum channels.
              </li>
              <li>
                Huang et al. (2024). Gate diversity as a design axis in quantum
                circuits.
              </li>
              <li>
                Kwon et al. (2021). Gate-based quantum computing review.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* PHI — Integrated Information Measurement                  */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section id="phi" className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-400/60">
                Program III
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-300">
                Protocol Defined
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Project Φ
            </h2>
            <p className="text-amber-300/80">
              Systematic Survey of Integrated Information in Neural Network
              Architectures
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-3">Objective</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Compute integrated information (Φ*) — a scalar measure of how
                much a system is &ldquo;more than the sum of its parts&rdquo;
                (Tononi, 2004) — across major deep learning architecture
                families. Test whether Φ* correlates with generalization,
                transfer learning, and robustness. No systematic Φ* survey
                across modern deep learning architectures has been published.
              </p>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-3">Methodology</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                Φ* approximation adapted for neural networks using the KSG
                mutual information estimator (Kraskov et al., 2004). Greedy
                bipartition search for the minimum information partition.
                Validated independently using Perturbational Complexity Index
                (Casali et al., 2013).
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Architecture survey: MLPs, CNNs (ResNet), RNNs (LSTM, GRU),
                Transformers (GPT-2, ViT), Graph Networks (GCN, GAT). Φ*
                measured at 5 training checkpoints per architecture.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-6">
            <h3 className="font-semibold text-white mb-3">
              Connection to PERSIST
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              If topological depth (PERSIST) predicts forgetting resistance,
              does information integration (Φ*) also predict it? Networks with
              higher integrated information may create deeper topological
              features because integration requires complex, multi-scale
              structure in the loss landscape. QUANTA serves as a research
              instrument for interactive exploration of these measurements.
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h3 className="font-semibold text-white mb-3 text-sm">
              Key References
            </h3>
            <ul className="space-y-1 text-xs text-gray-500">
              <li>
                Tononi (2004). An information integration theory of
                consciousness. <i>BMC Neuroscience</i>.
              </li>
              <li>
                Oizumi et al. (2014). From phenomenology to mechanisms of
                consciousness: IIT 3.0. <i>PLoS Comp. Bio.</i>
              </li>
              <li>
                Barrett &amp; Seth (2011). Practical measures of integrated
                information. <i>PLoS Comp. Bio.</i>
              </li>
              <li>
                Casali et al. (2013). Perturbational complexity index.{" "}
                <i>Science Translational Medicine</i>.
              </li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              Publication target: Nature Machine Intelligence / ICLR /
              Neuroscience of Consciousness
            </p>
          </div>

          {/* Footnote: broader context */}
          <details className="mt-4">
            <summary className="text-xs text-gray-600 cursor-pointer hover:text-gray-400 transition">
              Note on broader theoretical context
            </summary>
            <div className="mt-2 rounded-xl bg-white/[0.02] border border-white/[0.04] p-4 text-xs text-gray-500 leading-relaxed">
              <p className="mb-2">
                IIT&apos;s Φ metric has implications beyond computational
                systems. The relationship between integrated information and
                quantum measurement — whether systems with measurable Φ
                interact with quantum states differently — is an open question
                in the foundations of physics. Relevant work includes Von
                Neumann (1932) on quantum measurement, Wigner (1961) on
                consciousness and wave function collapse, and experimental
                investigations by Radin et al. (2012, 2016) and Nelson (2001).
                These connections inform our long-term research direction but
                are not the focus of EXP-02.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* GENESIS — Information Capacity Scaling Laws                */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section id="genesis" className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-cyan-400/60">
                Program IV
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300">
                Protocol Defined
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Project GENESIS
            </h2>
            <p className="text-cyan-300/80">
              Information Capacity Scaling Laws in Neural Networks
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-3">Hypothesis</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Neural network information capacity follows an area law —
                proportional to boundary parameters (input/output interface) —
                rather than a volume law proportional to total parameter count.
                This would constitute a computational analog of the Bekenstein
                bound (Bekenstein, 1973), which establishes that maximum entropy
                in a physical region is proportional to surface area, not
                volume.
              </p>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-3">Methodology</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Memorization capacity measurement (Zhang et al., 2017) across
                15+ architecture configurations varying depth/width ratios.
                Power-law fitting on log-log axes: C ~ V<sup>α</sup> vs C ~
                A<sup>β</sup>. Bayesian model comparison (BIC) to determine
                which scaling relationship is statistically preferred. Decisive
                test: vary depth at constant width — if capacity saturates,
                area law is supported.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-6">
            <h3 className="font-semibold text-white mb-3">
              Connection to PERSIST
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              If capacity is boundary-limited, catastrophic forgetting may
              occur when new task information competes for limited boundary
              capacity. Topological protection (PERSIST) may work by encoding
              knowledge in interior parameters that new learning cannot
              overwrite. The area law, if confirmed, would provide a
              theoretical explanation for why topology predicts forgetting.
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h3 className="font-semibold text-white mb-3 text-sm">
              Key References
            </h3>
            <ul className="space-y-1 text-xs text-gray-500">
              <li>
                Bekenstein (1973). Black holes and entropy.{" "}
                <i>Physical Review D</i>.
              </li>
              <li>
                Zhang et al. (2017). Understanding deep learning requires
                rethinking generalization. <i>ICLR</i>.
              </li>
              <li>
                Kaplan et al. (2020). Scaling laws for neural language models.
              </li>
              <li>
                Wheeler (1990). Information, physics, quantum: the search for
                links.
              </li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              Publication target: Nature Physics / Physical Review Letters /
              ICML
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* Open Research                                             */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">
            Open Research
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-3 text-sm">Code</h3>
              <p className="text-sm text-gray-400 mb-3">
                Experiment source code, model definitions, and analysis
                pipelines.
              </p>
              <a
                href="https://github.com/Axion-Deep-Labs/persist-topological-forgetting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-emerald-300 hover:text-emerald-200 transition underline underline-offset-4"
              >
                GitHub Repository →
              </a>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-3 text-sm">
                Reproducibility
              </h3>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>Deterministic seeding (seed = 42)</li>
                <li>Version-controlled YAML configs</li>
                <li>Full dependency pinning</li>
                <li>PyTorch 2.x, Ripser, scikit-tda</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-3 text-sm">
                Infrastructure
              </h3>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>Local GPU cluster (NVIDIA RTX, CUDA)</li>
                <li>ClearML tracking (self-hosted)</li>
                <li>Automated experiment dashboard</li>
                <li>Results in structured JSON</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* Research Team                                             */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">
            Research Team
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-1">
                Crystal A. Gutierrez, MS
              </h3>
              <p className="text-sm text-emerald-300 mb-3">
                Principal Investigator &amp; Co-Founder
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                MS in Information Technology. BS in Information Communication
                Technology. Adjunct Professor, New Mexico State University.
                Research experience in AI-driven predictive modeling through the
                Purdue University Data Mine, developing weather forecasting
                models in collaboration with Bayer. Oversees research strategy,
                institutional partnerships, and experimental design review.
              </p>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-1">
                Joshua R. Gutierrez, MS
              </h3>
              <p className="text-sm text-emerald-300 mb-3">
                Co-Principal Investigator &amp; Co-Founder
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                MS in Artificial Intelligence &amp; Data Science. BS in
                Computer Science. Designed and built the lab&apos;s experimental
                infrastructure — model architectures, topological analysis
                pipeline, loss landscape sampling, and reproducibility
                framework. Leads day-to-day experiment execution, computational
                methodology, and software engineering across all research
                programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Research Collaboration
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              We welcome inquiries from academic institutions, funding agencies,
              and researchers working on continual learning, topological data
              analysis, or deep learning theory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/research/findings"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold hover:opacity-90 transition"
              >
                Research Findings
              </Link>
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

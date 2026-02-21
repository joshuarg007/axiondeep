import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experimental Protocols — Research Programs",
  description:
    "Three experimental protocols: topological forgetting signatures, integrated information across architectures, and neural network capacity scaling laws.",
  keywords: [
    "topological data analysis catastrophic forgetting",
    "persistent homology loss landscape",
    "continual learning research",
    "catastrophic forgetting neural networks",
    "integrated information theory neural networks",
    "IIT phi deep learning",
    "Bekenstein bound neural networks",
    "holographic principle machine learning",
    "information capacity scaling laws",
    "area law neural networks",
    "cross-architecture analysis",
    "Spearman correlation topology forgetting",
    "reproducible machine learning research",
    "loss landscape topology",
    "Betti numbers neural networks",
    "preliminary research results",
    "computational neuroscience",
    "deep learning theory",
  ],
  alternates: { canonical: "/research/experiments" },
  robots: { index: true, follow: true },
};

/* ───── small reusable pieces ───── */

function SectionDivider({ color }: { color: string }) {
  return (
    <div className="flex items-center gap-4 my-16">
      <span className={`h-px flex-1 bg-gradient-to-r ${color} to-transparent`} />
      <span className={`h-2 w-2 rounded-full ${color.includes("emerald") ? "bg-emerald-500/40" : color.includes("amber") ? "bg-amber-500/40" : "bg-cyan-500/40"}`} />
      <span className={`h-px flex-1 bg-gradient-to-l ${color} to-transparent`} />
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3 text-sm">
      <span className="text-gray-500 shrink-0 w-28 text-right">{label}</span>
      <span className="text-gray-300">{value}</span>
    </div>
  );
}

function Citation({ text }: { text: string }) {
  return (
    <li className="flex gap-2 text-sm text-gray-400">
      <span className="mt-1.5 h-1 w-1 rounded-full bg-white/20 shrink-0" />
      <span>{text}</span>
    </li>
  );
}

export default function ExperimentsPage() {
  return (
    <div className="no-snap relative text-gray-300 min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Research Programs
          </Link>

          <p className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-4">
            EXPERIMENTAL PROTOCOLS
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Priority Experiments
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Detailed scope, methodology, and preliminary results for three
            priority experiments selected for novelty, feasibility, and
            publication impact. EXP-01 is actively producing cross-architecture
            data with strong preliminary correlation.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { label: "EXP-01 · PERSIST", href: "#exp-01", color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300" },
              { label: "EXP-02 · PHI", href: "#exp-02", color: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-300" },
              { label: "EXP-03 · GENESIS", href: "#exp-03", color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-300" },
            ].map((e) => (
              <a
                key={e.label}
                href={e.href}
                className={`px-4 py-2 rounded-full bg-gradient-to-r ${e.color} border text-sm font-semibold tracking-wider hover:opacity-80 transition`}
              >
                {e.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* EXP-01: Topological Protection of Knowledge                   */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="exp-01" className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-400/60 mb-2 block">
              EXP-01 &middot; Program II (PERSIST)
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Topological Signatures of Knowledge Persistence in Continual Learning Systems
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Investigating whether the topological structure of a neural
              network&apos;s loss landscape predicts its resistance to
              catastrophic forgetting during sequential task training.
            </p>
          </div>

          {/* Meta */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/10 p-6 mb-8 space-y-2">
            <MetaRow label="Status" value="Active — 7-phase pipeline, expanding to 3 datasets" />
            <MetaRow label="Progress" value="14/19 architectures on CIFAR-100 (Phases 1-3). WRN width ladder + CUB-200 + RESISC-45 in progress." />
            <MetaRow label="Program" value="PERSIST (Continual Learning)" />
            <MetaRow label="Priority" value="1 of 3" />
            <MetaRow label="Scope" value="19 architectures (14 diverse + 6-point WRN width ladder) across 3 datasets (57 configs)" />
            <MetaRow label="Compute" value="Local GPU (NVIDIA RTX 4090, CUDA, PyTorch 2.x)" />
            <MetaRow label="Novelty" value="First connection of persistent homology to catastrophic forgetting" />
            <MetaRow label="Preliminary" value="H1 ρ = 0.61 (n=14, p=0.021). Within-CNN: ρ = 0.66 (p=0.026). Params dominate full-sample (ρ = -0.74)." />
          </div>

          {/* Preliminary Results */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/15 to-teal-500/10 border border-emerald-500/20 p-6 mb-8">
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-emerald-400 text-lg">&#9679;</span>
              Preliminary Results (14 Architectures, CIFAR-100)
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Cross-architecture analysis (n=14) reveals that H1 persistence (loop structure
              in the loss landscape) correlates with knowledge retention (\u03c1 = 0.61, p = 0.021).
              However, parameter count dominates (\u03c1 = -0.74, p = 0.002, survives Bonferroni).
              After partialing out model size, H1 drops to non-significance (partial \u03c1 = 0.35, p = 0.24).
              Within CNNs only (n=11), H1 re-emerges as significant (\u03c1 = 0.66, p = 0.026),
              suggesting topology carries information within an architecture family.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    <th className="pb-2 text-gray-500 font-medium">Architecture</th>
                    <th className="pb-2 text-gray-500 font-medium">Params</th>
                    <th className="pb-2 text-gray-500 font-medium">Acc.</th>
                    <th className="pb-2 text-gray-500 font-medium">H₁</th>
                    <th className="pb-2 text-gray-500 font-medium">Ret@100</th>
                    <th className="pb-2 text-gray-500 font-medium">Type</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-white/5">
                    <td className="py-1 text-emerald-300">ViT-Tiny</td>
                    <td className="py-1">0.3M</td><td className="py-1">52.7%</td>
                    <td className="py-1 font-mono">0.18</td><td className="py-1 text-emerald-300">22.5%</td>
                    <td className="py-1 text-xs text-gray-500">Transformer</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-1">ShuffleNet-V2</td>
                    <td className="py-1">1.3M</td><td className="py-1">76.8%</td>
                    <td className="py-1 font-mono">0.69</td><td className="py-1 text-emerald-300">17.3%</td>
                    <td className="py-1 text-xs text-gray-500">CNN</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-1 text-emerald-300">ViT-Small</td>
                    <td className="py-1">3.0M</td><td className="py-1">62.2%</td>
                    <td className="py-1 font-mono">0.32</td><td className="py-1 text-emerald-300">9.6%</td>
                    <td className="py-1 text-xs text-gray-500">Transformer</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-1">EfficientNet-B0</td>
                    <td className="py-1">4.1M</td><td className="py-1">76.6%</td>
                    <td className="py-1 font-mono text-emerald-300">2.12</td><td className="py-1">7.1%</td>
                    <td className="py-1 text-xs text-gray-500">CNN+SE</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-1">ResNet-18</td>
                    <td className="py-1">11.2M</td><td className="py-1">82.0%</td>
                    <td className="py-1 font-mono">0.00</td><td className="py-1">0.2%</td>
                    <td className="py-1 text-xs text-gray-500">CNN</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-1">WRN-28-10</td>
                    <td className="py-1">36.5M</td><td className="py-1">84.0%</td>
                    <td className="py-1 font-mono">0.08</td><td className="py-1">0.3%</td>
                    <td className="py-1 text-xs text-gray-500">WRN-ladder</td>
                  </tr>
                  <tr>
                    <td className="py-1">ResNet-18 Wide</td>
                    <td className="py-1">44.7M</td><td className="py-1">83.1%</td>
                    <td className="py-1 font-mono">0.00</td><td className="py-1">0.0%</td>
                    <td className="py-1 text-xs text-gray-500">CNN</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="text-emerald-300 font-semibold">Key tension:</span>{" "}
                H1 persistence correlates with retention (\u03c1 = 0.61) but parameter count
                dominates (\u03c1 = -0.74, survives Bonferroni). After partialing out model size,
                H1 drops to non-significance. Within CNNs only (n=11), H1 re-emerges as
                significant (\u03c1 = 0.66, p = 0.026), suggesting topology matters within
                architecture families.
              </p>
              <p>
                <span className="text-emerald-300 font-semibold">Decisive test:</span>{" "}
                WRN-28-k width ladder (k=1,2,4,6,8,10) isolates scale from topology. Same
                architecture, same depth, varying only width. Expanding to CUB-200 and RESISC-45
                for cross-domain validation. LOAO predictive model with permutation test pending.
              </p>
            </div>
          </div>

          {/* Hypothesis */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-emerald-400 text-lg">H</span>
              Principal Hypothesis
            </h3>
            <p className="text-gray-400 leading-relaxed">
              The persistence of learned knowledge under sequential task training
              is predictable from the topological features of the loss landscape
              around learned weight configurations. Tasks that induce deeper
              topological features &mdash; longer-lived persistent homology
              classes &mdash; in the loss landscape are more resistant to
              catastrophic forgetting during subsequent training.
            </p>
          </div>

          {/* Background */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-3">Background &amp; Gap</h3>
            <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
              <p>
                Catastrophic forgetting (McCloskey &amp; Cohen, 1989) remains one
                of the most fundamental unsolved problems in machine learning.
                Every major mitigation strategy &mdash; replay buffers, elastic
                weight consolidation, progressive networks &mdash; manages the
                symptom rather than addressing the underlying geometric cause.
              </p>
              <p>
                Separately, Topological Data Analysis (TDA) has emerged as a
                powerful tool for characterizing loss landscape geometry
                (Ballester &amp; Araujo, 2020). Persistent homology extracts
                scale-invariant features &mdash; connected components, loops,
                voids &mdash; that survive across multiple scales of analysis.
              </p>
              <p className="text-emerald-300/80">
                No published work has connected these two fields. This experiment
                tests whether the topological depth of learned representations
                predicts their survivability during continual learning.
              </p>
            </div>
          </div>

          {/* Methodology */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-4">Methodology</h3>
            <div className="space-y-6">
              {[
                {
                  phase: "Phase 1 — Train Task A",
                  desc: "Train 19 architectures (14 diverse + 6-point WRN-28-k width ladder) to convergence on Task A across 3 datasets: CIFAR-100, CUB-200-2011, and NWPU-RESISC45. 100 epochs, SGD with cosine annealing. Save best checkpoints.",
                },
                {
                  phase: "Phase 2 — Landscape Topology (Ripser + Cubical)",
                  desc: "Sample 50x50 loss landscape along filter-normalized random directions (Li et al., 2018). 5 independent random 2D slices per architecture. Compute persistent homology via Ripser (graph-based H₀, H₁) and GUDHI cubical complexes (validation baseline). Compute baseline metrics: Hessian trace, Fisher information, max eigenvalue, loss barrier.",
                },
                {
                  phase: "Phase 3 — Sequential Forgetting (Naive + EWC + Cosine)",
                  desc: "Train sequentially on Task B with 3 variants: naive, EWC regularization (Fisher-based penalty), and cosine LR decay. Measure Task A accuracy at steps [10, 25, 50, 100, 250, 500, 1000, 5000]. Compute early AURC, ret@10, ret@100.",
                },
                {
                  phase: "Phase 4 — Correlation & Diagnostics",
                  desc: "Spearman + Kendall correlation with Bonferroni correction (12 metrics). Partial correlations controlling for parameter count. Slice robustness diagnostics: Kruskal-Wallis, per-slice Spearman, pairwise ordering probability, Cohen's d. Cubical vs Ripser agreement. EWC benefit analysis. WRN width ladder: within-ladder correlations isolating scale from topology.",
                },
                {
                  phase: "Phase 5 — Predictive Model (LOAO CV)",
                  desc: "Leave-one-architecture-out Ridge regression with nested alpha selection. 5 models: A (params only), A2 (params + random noise, matched-dimensionality null), B (params + Ripser topology), C (params + cubical topology), D (topology alone). 1,000-permutation test shuffling topology features to test incremental value. If Model B does not beat A2, topology features are no better than noise.",
                },
              ].map((p) => (
                <div key={p.phase}>
                  <h4 className="text-sm font-semibold text-emerald-300 mb-1">{p.phase}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-3">PERSIST Primary Metrics</h3>
              <ul className="space-y-2">
                {[
                  "H₀, H₁ persistent homology via Ripser (graph-based) and GUDHI (cubical complexes)",
                  "Total persistence: Σ(death_i - birth_i) across 5 independent landscape slices",
                  "Task A retention metrics: early AURC (0-500), ret@10, ret@100",
                  "LOAO cross-validated prediction error (MAE) for 5 regression models",
                  "Permutation test p-value for incremental topology value (1,000 permutations)",
                ].map((m) => (
                  <li key={m} className="flex gap-2 text-sm text-gray-400">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400/40 shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-3">PERSIST Secondary Metrics</h3>
              <ul className="space-y-2">
                {[
                  "Spearman ρ + Kendall τ with Bonferroni correction (12 metrics)",
                  "Partial correlations controlling for parameter count",
                  "WRN width ladder: within-ladder Spearman + partial H1|params",
                  "Slice robustness: Kruskal-Wallis, pairwise ordering, Cohen's d",
                  "EWC benefit vs topology correlation (does topology predict regularization response?)",
                ].map((m) => (
                  <li key={m} className="flex gap-2 text-sm text-gray-400">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400/40 shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tools & Infrastructure */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-3">PERSIST Tools &amp; Infrastructure</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Training</h4>
                <p>PyTorch 2.x, CUDA (RTX 4090), Flask dashboard with live monitoring</p>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Topology</h4>
                <p>Ripser (graph-based PH), GUDHI (cubical complexes), scikit-learn (Ridge, StandardScaler)</p>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Datasets</h4>
                <p>CIFAR-100, CUB-200-2011 (fine-grained birds), NWPU-RESISC45 (satellite scenes)</p>
              </div>
            </div>
          </div>

          {/* Expected Outputs */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/10 p-6 mb-8">
            <h3 className="font-semibold text-white mb-3">PERSIST Expected Outputs</h3>
            <ul className="space-y-2">
              {[
                "Correlation analysis: Ripser + cubical PH vs retention across 19 architectures and 3 datasets",
                "WRN width ladder verdict: does topology carry independent signal beyond model scale?",
                "LOAO predictive model: does topology improve prediction of forgetting over params alone?",
                "Cross-domain validation: do topological signatures generalize from natural images to fine-grained and satellite data?",
                "Publication target: NeurIPS / ICML (Continual Learning track)",
              ].map((o) => (
                <li key={o} className="flex gap-2 text-sm text-gray-400">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400/40 shrink-0" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Risks & Mitigations */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-3">PERSIST Risks &amp; Mitigations</h3>
            <div className="space-y-3">
              {[
                {
                  risk: "No correlation found between topology and forgetting",
                  mitigation: "Negative result is still publishable (\"topological features are insufficient to predict forgetting\"). Pivot to information-geometric approaches (Fisher information metric).",
                },
                {
                  risk: "Persistent homology computation intractable for large networks",
                  mitigation: "Use subspace sampling (random 2D slices through weight space). Compute topology on activations rather than weights if needed. Ripser++ scales to millions of simplices.",
                },
                {
                  risk: "Topological regularizer destabilizes Task B training",
                  mitigation: "Anneal λ during training. Use soft constraint (penalty) rather than hard projection onto topological manifold.",
                },
              ].map((r) => (
                <div key={r.risk}>
                  <h4 className="text-sm font-semibold text-red-400/80 mb-1">Risk: {r.risk}</h4>
                  <p className="text-sm text-gray-400">{r.mitigation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* References */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h3 className="font-semibold text-white mb-3">PERSIST References</h3>
            <ul className="space-y-2">
              <Citation text="McCloskey, M. & Cohen, N. J. (1989). Catastrophic interference in connectionist networks. Psychology of Learning and Motivation, 24, 109-165." />
              <Citation text="Kirkpatrick, J. et al. (2017). Overcoming catastrophic forgetting in neural networks. PNAS, 114(13), 3521-3526." />
              <Citation text="Ballester, R. & Araujo, X. (2020). On the interplay between topological data analysis and deep learning. NeurIPS Workshop on TDA." />
              <Citation text="Li, H. et al. (2018). Visualizing the loss landscape of neural nets. NeurIPS." />
              <Citation text="Otter, N. et al. (2017). A roadmap for the computation of persistent homology. EPJ Data Science, 6(1), 1-38." />
              <Citation text="Tononi, G. & Cirelli, C. (2014). Sleep and the price of plasticity. Neuron, 81(1), 12-34." />
              <Citation text="Kumaran, D. et al. (2016). What learning systems do intelligent agents need? Trends in Cognitive Sciences, 20(7), 512-534." />
            </ul>
          </div>
        </div>
      </section>

      <SectionDivider color="from-amber-500/30" />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* EXP-02: Integrated Information Across Architectures            */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="exp-02" className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-400/60 mb-2 block">
              EXP-02 &middot; Program III (PHI)
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Systematic Survey of Integrated Information in Modern Neural Network Architectures
            </h2>
            <p className="text-gray-400 leading-relaxed">
              The first comprehensive measurement of integrated information
              (&Phi;) across the major families of deep learning architectures,
              testing whether &Phi; correlates with generalization,
              transferability, and robustness.
            </p>
          </div>

          {/* Meta */}
          <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/10 p-6 mb-8 space-y-2">
            <MetaRow label="Status" value="Proposed" />
            <MetaRow label="Program" value="PHI (Consciousness Measurement)" />
            <MetaRow label="Priority" value="2 of 3" />
            <MetaRow label="Duration" value="4 - 5 months" />
            <MetaRow label="Compute" value="GPU cluster + significant CPU for MI estimation" />
            <MetaRow label="Novelty" value="First systematic Phi survey across modern deep learning" />
          </div>

          {/* Hypothesis */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-amber-400 text-lg">H</span>
              Principal Hypothesis
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Integrated information (&Phi;), as formalized by Integrated
              Information Theory, varies systematically across neural network
              architectures and correlates with the network&apos;s capacity for
              generalization and transfer learning. Networks with higher &Phi;
              process information in a more integrated manner, producing richer
              internal representations that resist overfitting and transfer more
              effectively to novel domains.
            </p>
          </div>

          {/* Background */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-3">Background &amp; Gap</h3>
            <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
              <p>
                Integrated Information Theory (Tononi, 2004; Tononi et al., 2016)
                proposes &Phi; as a scalar measure of how much a system is
                &ldquo;more than the sum of its parts&rdquo; &mdash; quantifying
                the degree to which information is integrated across a system
                rather than reducible to independent modules.
              </p>
              <p>
                &Phi; has been computed for very small systems (logic gates,
                simple recurrent networks of &lt;20 nodes) but{" "}
                <span className="text-amber-300/80">
                  never systematically for modern deep learning architectures
                </span>
                . This is partly because exact &Phi; computation is NP-hard
                (requires finding the minimum information partition), but
                tractable approximations exist: &Phi;* (Oizumi et al., 2014),
                geometric integrated information (Barrett &amp; Seth, 2011), and
                stochastic interaction (Ay, 2015).
              </p>
              <p>
                The gap is profound: we have a rigorous mathematical framework
                for measuring information integration, and an entire field (deep
                learning) built on architectures that integrate information at
                massive scale &mdash; yet nobody has connected them.
              </p>
            </div>
          </div>

          {/* Methodology */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-4">Methodology</h3>
            <div className="space-y-6">
              {[
                {
                  phase: "Phase 1 — Phi* Implementation for Neural Networks",
                  desc: "Implement Φ* computation adapted for neural networks. Partition each network into functional modules: individual layers, attention heads (transformers), feature map groups (CNNs), temporal steps (RNNs). For each partition scheme, compute mutual information between all module pairs using the KSG estimator (Kraskov et al., 2004) on activation vectors from a held-out probe dataset. Find the Minimum Information Partition (MIP) via greedy bipartition search. Φ* = total mutual information minus information across the MIP.",
                },
                {
                  phase: "Phase 2 — Architecture Survey",
                  desc: "Compute Φ* at 5 training checkpoints (random initialization, 25%, 50%, 75%, full convergence) for: Feedforward MLPs (2, 4, 8 layers), Convolutional (ResNet-18, ResNet-50), Recurrent (LSTM, GRU — 2 and 4 layers), Transformer (GPT-2-small, ViT-Small), Graph (GCN, GAT on Cora/CiteSeer). All trained on comparable tasks (CIFAR-10/100 for vision, WikiText for language, Cora for graph). Record Φ* trajectory during training.",
                },
                {
                  phase: "Phase 3 — Correlation with Generalization",
                  desc: "For each architecture at convergence, measure: test accuracy (generalization gap = train - test), transfer learning performance (fine-tune on CIFAR-100 after CIFAR-10 pretraining, or SST-2 after WikiText), adversarial robustness (PGD attack, ε = 8/255 for vision). Compute Spearman correlation between Φ* and each performance metric across all architectures.",
                },
                {
                  phase: "Phase 4 — Perturbational Complexity Index",
                  desc: "Independently validate Φ* results using PCI (Casali et al., 2013), adapted from neuroscience. For each trained network: inject calibrated Gaussian noise at a single layer, record the propagation pattern across all subsequent layers, compute Lempel-Ziv complexity of the binarized activation response. Compare PCI ranking with Φ* ranking across architectures. Agreement between two independent measures strengthens the result.",
                },
                {
                  phase: "Phase 5 — Phi Dynamics During Training",
                  desc: "Analyze the Φ* trajectory. Key questions: Does Φ* increase monotonically during training, or does it peak and decline (overfitting as integration collapse)? Does Φ* correlate with the information bottleneck phase transitions identified by Shwartz-Ziv & Tishby (2017)? Is there a critical Φ* threshold below which transfer learning fails?",
                },
              ].map((p) => (
                <div key={p.phase}>
                  <h4 className="text-sm font-semibold text-amber-300 mb-1">{p.phase}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-3">PHI Primary Metrics</h3>
              <ul className="space-y-2">
                {[
                  "Φ* (minimum information partition) at each training checkpoint",
                  "PCI (Lempel-Ziv complexity of perturbation response)",
                  "Generalization gap (train accuracy - test accuracy)",
                  "Transfer learning Δ accuracy (target - baseline)",
                  "Spearman ρ(Φ*, generalization) and ρ(Φ*, transfer)",
                ].map((m) => (
                  <li key={m} className="flex gap-2 text-sm text-gray-400">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-amber-400/40 shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-3">PHI Secondary Metrics</h3>
              <ul className="space-y-2">
                {[
                  "Φ* trajectory shape classification (monotonic, peaked, oscillating)",
                  "PCI-Φ* rank correlation (do independent measures agree?)",
                  "Layer-wise Φ contribution (which layers integrate most?)",
                  "Adversarial robustness (PGD success rate)",
                  "Partition sensitivity analysis (how much does module definition matter?)",
                ].map((m) => (
                  <li key={m} className="flex gap-2 text-sm text-gray-400">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-amber-400/40 shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Challenges */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-3">Known Challenges</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p>
                <span className="text-amber-300/80 font-semibold">Scalability.</span>{" "}
                Exact &Phi; is NP-hard. &Phi;* with greedy bipartition is
                O(n&sup2;) in the number of modules. For a 12-layer transformer
                with 12 attention heads, this is 144 modules &mdash; feasible
                with greedy search but requires careful implementation. Networks
                with &gt;1000 effective modules require subsampling.
              </p>
              <p>
                <span className="text-amber-300/80 font-semibold">Partition dependence.</span>{" "}
                &Phi;* values depend on how the network is partitioned into
                modules. We address this by testing multiple partition schemes
                (by layer, by head, by feature group) and reporting the range.
                If rankings are consistent across schemes, the result is robust.
              </p>
              <p>
                <span className="text-amber-300/80 font-semibold">Mutual information estimation.</span>{" "}
                High-dimensional MI estimation is noisy. We use the KSG
                estimator (k=5 neighbors) with dimensionality reduction (PCA to
                64 dimensions per module) on activation vectors from 10,000
                probe inputs. Bootstrap confidence intervals on all MI estimates.
              </p>
            </div>
          </div>

          {/* Tools */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-3">PHI Tools &amp; Infrastructure</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Computation</h4>
                <p>PyTorch, NumPy, SciPy, Weights &amp; Biases, CUDA-capable GPU cluster</p>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Information Theory</h4>
                <p>KSG estimator (custom), MINE (Belghazi et al., 2018) for validation, pyphi (adapted)</p>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Models</h4>
                <p>torchvision (ResNet), HuggingFace (GPT-2, ViT), PyG (GCN, GAT)</p>
              </div>
            </div>
          </div>

          {/* Expected Outputs */}
          <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/10 p-6 mb-8">
            <h3 className="font-semibold text-white mb-3">PHI Expected Outputs</h3>
            <ul className="space-y-2">
              {[
                "First Φ* landscape map across modern deep learning architectures — the 'periodic table' of information integration",
                "Φ trajectory analysis: how integration evolves during training (potential connection to information bottleneck theory)",
                "PCI-Φ* cross-validation: do two independent measures of integration agree in artificial systems?",
                "If correlation holds: Φ* as a practical architecture selection and early-stopping metric",
                "Publication target: Nature Machine Intelligence, ICLR, or Neuroscience of Consciousness (cross-disciplinary)",
              ].map((o) => (
                <li key={o} className="flex gap-2 text-sm text-gray-400">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-amber-400/40 shrink-0" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Risks */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-3">PHI Risks &amp; Mitigations</h3>
            <div className="space-y-3">
              {[
                {
                  risk: "Φ* approximation too noisy to produce meaningful rankings",
                  mitigation: "Use multiple MI estimators (KSG + MINE) and require agreement. Increase probe dataset size. Report confidence intervals on all Φ* values.",
                },
                {
                  risk: "No correlation between Φ* and generalization",
                  mitigation: "Negative result is highly publishable — 'integrated information does not predict generalization' constrains IIT's applicability to artificial systems. Check if correlation exists with different Φ variants (geometric, stochastic interaction).",
                },
                {
                  risk: "Partition dependence makes results non-comparable across architectures",
                  mitigation: "Develop a canonical partition scheme based on computational graph structure. Alternatively, report Φ* under the partition that maximizes it (most charitable interpretation) — if even maximum Φ* doesn't correlate, the result is stronger.",
                },
              ].map((r) => (
                <div key={r.risk}>
                  <h4 className="text-sm font-semibold text-red-400/80 mb-1">Risk: {r.risk}</h4>
                  <p className="text-sm text-gray-400">{r.mitigation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* References */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h3 className="font-semibold text-white mb-3">PHI References</h3>
            <ul className="space-y-2">
              <Citation text="Tononi, G. (2004). An information integration theory of consciousness. BMC Neuroscience, 5(1), 42." />
              <Citation text="Tononi, G. et al. (2016). Integrated information theory: from consciousness to its physical substrate. Nature Reviews Neuroscience, 17(7), 450-461." />
              <Citation text="Oizumi, M. et al. (2014). From the phenomenology to the mechanisms of consciousness: Integrated Information Theory 3.0. PLoS Computational Biology, 10(5)." />
              <Citation text="Barrett, A. B. & Seth, A. K. (2011). Practical measures of integrated information for time-series data. PLoS Computational Biology, 7(1)." />
              <Citation text="Casali, A. G. et al. (2013). A theoretically based index of consciousness independent of sensory processing and behavior. Science Translational Medicine, 5(198)." />
              <Citation text="Kraskov, A. et al. (2004). Estimating mutual information. Physical Review E, 69(6), 066138." />
              <Citation text="Belghazi, M. I. et al. (2018). Mutual Information Neural Estimation. ICML." />
              <Citation text="Shwartz-Ziv, R. & Tishby, N. (2017). Opening the black box of deep neural networks via information. arXiv:1703.00810." />
            </ul>
          </div>
        </div>
      </section>

      <SectionDivider color="from-cyan-500/30" />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* EXP-03: Bekenstein Bound Analogs in Neural Networks            */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="exp-03" className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-cyan-400/60 mb-2 block">
              EXP-03 &middot; Program IV (GENESIS)
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Information Capacity Scaling Laws in Neural Networks: Testing for Holographic Analogs
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Testing whether neural network information capacity follows an
              area law (proportional to boundary parameters) rather than a
              volume law (proportional to total parameters) &mdash; a potential
              analog of the Bekenstein bound from black hole thermodynamics.
            </p>
          </div>

          {/* Meta */}
          <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/10 p-6 mb-8 space-y-2">
            <MetaRow label="Status" value="Proposed" />
            <MetaRow label="Program" value="GENESIS (Informational Substrate)" />
            <MetaRow label="Priority" value="3 of 3" />
            <MetaRow label="Duration" value="3 - 4 months" />
            <MetaRow label="Compute" value="GPU cluster (systematic training runs)" />
            <MetaRow label="Novelty" value="First test of holographic principle analogs in deep learning" />
            <MetaRow label="Risk Profile" value="High risk, high reward — Nature-tier if area law holds" />
          </div>

          {/* Hypothesis */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-cyan-400 text-lg">H</span>
              Principal Hypothesis
            </h3>
            <p className="text-gray-400 leading-relaxed">
              The maximum information a neural network can encode about its
              training data follows an area law &mdash; proportional to the
              number of boundary/interface parameters &mdash; rather than a
              volume law proportional to total parameter count. This would
              constitute a computational analog of the Bekenstein bound, the
              fundamental limit from black hole physics stating that the maximum
              entropy of a region is proportional to its surface area, not its
              volume.
            </p>
          </div>

          {/* Background */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-3">Background &amp; Gap</h3>
            <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
              <p>
                The Bekenstein bound (1973) establishes that the maximum entropy
                &mdash; and therefore information &mdash; containable within a
                physical region is proportional to its surface area, not its
                volume. This counter-intuitive result, formalized as the
                holographic principle by &apos;t Hooft and Susskind, suggests
                that the universe fundamentally encodes information on boundaries
                rather than in bulk.
              </p>
              <p>
                Neural network information capacity is poorly understood.
                Phenomena like double descent (Nakkiran et al., 2019), lottery
                tickets (Frankle &amp; Carlin, 2018), and neural scaling laws
                (Kaplan et al., 2020) all suggest that effective capacity is{" "}
                <span className="text-cyan-300/80">
                  not simply proportional to parameter count
                </span>
                . Something more subtle governs how much information a network
                can actually encode.
              </p>
              <p>
                If neural networks obey an area law, it would suggest that
                information storage in computational systems mirrors information
                storage in physical systems at a deep structural level &mdash;
                supporting the &ldquo;it from bit&rdquo; thesis that
                computation is not merely a metaphor for physics but shares its
                fundamental constraints.
              </p>
            </div>
          </div>

          {/* Definitions */}
          <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/10 p-6 mb-8">
            <h3 className="font-semibold text-white mb-4">Formal Definitions</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div>
                <h4 className="text-cyan-300/80 font-semibold mb-1">Volume (V)</h4>
                <p>Total parameter count of the network. For a network with L layers of width w: V = O(Lw&sup2;).</p>
              </div>
              <div>
                <h4 className="text-cyan-300/80 font-semibold mb-1">Boundary (A) &mdash; Definition 1: Input/Output Interface</h4>
                <p>Parameters that directly interact with input or output: first layer weights + last layer weights. A = O(w &middot; d_in + w &middot; d_out), where d_in and d_out are input/output dimensionalities.</p>
              </div>
              <div>
                <h4 className="text-cyan-300/80 font-semibold mb-1">Boundary (A) &mdash; Definition 2: Cross-Layer Interface</h4>
                <p>Parameters participating in inter-layer connections. For a fully-connected network: A = O((L-1) &middot; w&sup2;), which equals the volume minus intra-layer biases. For this to be interesting, we need architectures where A &ne; V &mdash; networks with substantial intra-layer computation (wide residual blocks, attention within layers).</p>
              </div>
              <div>
                <h4 className="text-cyan-300/80 font-semibold mb-1">Information Capacity (C)</h4>
                <p>Maximum number of random labels the network can memorize to 100% training accuracy (Zhang et al., 2017 methodology). Measured in bits: C = log&sub2;(max memorizable dataset size &times; number of classes).</p>
              </div>
            </div>
          </div>

          {/* Methodology */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-4">Methodology</h3>
            <div className="space-y-6">
              {[
                {
                  phase: "Phase 1 — Capacity Measurement Protocol",
                  desc: "For each architecture configuration, generate datasets with random labels (uniform random assignment of K classes to N samples from CIFAR-10 or synthetic Gaussian data). Binary search for the maximum N where the network reaches 100% training accuracy within a fixed compute budget (50 epochs, SGD with momentum). This N is the effective memorization capacity. Repeat 5 times with different random seeds, report median.",
                },
                {
                  phase: "Phase 2 — Systematic Architecture Sweep",
                  desc: "Measure capacity for 15+ architecture configurations spanning different depth/width ratios. MLPs: [2×512, 4×256, 8×128, 16×64, 32×32] (constant volume ~260K params, varying depth). Wide ResNets: WRN-d-k for d ∈ {16, 22, 28, 40} and k ∈ {1, 2, 4, 8}. Transformers: {2, 4, 8, 12} layers × {64, 128, 256} model dim. For each, compute V (volume) and A (boundary under both definitions).",
                },
                {
                  phase: "Phase 3 — Scaling Law Extraction",
                  desc: "Plot C vs V and C vs A on log-log axes. Fit power laws: C ~ V^α and C ~ A^β. If β ≈ 1.0 and α < 1.0, the area law holds — capacity scales with boundary, not volume. Compute R² for both fits. Use Bayesian model comparison (BIC) to determine which scaling relationship is statistically preferred. Critical test: vary depth at constant width (changes V but not A under Definition 1). If capacity stays constant, area law is strongly supported.",
                },
                {
                  phase: "Phase 4 — Skip Connections as 'Wormholes'",
                  desc: "Skip connections create direct information pathways between non-adjacent layers — topological shortcuts analogous to wormholes in spacetime. Compare capacity of ResNets (with skip connections) vs equivalent-depth plain networks (without). Under the holographic analogy, skip connections should increase the effective boundary area, predicting higher capacity. If confirmed, skip connections are computational wormholes that expand the information boundary.",
                },
                {
                  phase: "Phase 5 — Attention as Non-Local Information Coupling",
                  desc: "Self-attention allows every position to directly access every other position — effectively making the entire network a 'boundary.' Prediction: transformers should deviate from the area law (or equivalently, their effective boundary ≈ volume due to attention). If transformers obey a volume law while non-attention architectures obey an area law, attention is the mechanism that breaks the holographic constraint. This has implications for why transformers scale so well.",
                },
              ].map((p) => (
                <div key={p.phase}>
                  <h4 className="text-sm font-semibold text-cyan-300 mb-1">{p.phase}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-3">GENESIS Primary Metrics</h3>
              <ul className="space-y-2">
                {[
                  "Maximum memorizable dataset size (bits) per architecture",
                  "Volume scaling exponent α in C ~ V^α",
                  "Area scaling exponent β in C ~ A^β",
                  "R² and BIC comparison: area law vs volume law fit",
                  "Constant-width depth sweep: capacity vs depth curve",
                ].map((m) => (
                  <li key={m} className="flex gap-2 text-sm text-gray-400">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-cyan-400/40 shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-3">GENESIS Secondary Metrics</h3>
              <ul className="space-y-2">
                {[
                  "Mutual information I(W; D_train) at convergence (via MINE)",
                  "Skip connection capacity delta (ResNet vs plain net)",
                  "Transformer vs non-transformer scaling exponent comparison",
                  "Effective boundary expansion from attention (measured vs predicted)",
                  "Double descent location relative to boundary capacity",
                ].map((m) => (
                  <li key={m} className="flex gap-2 text-sm text-gray-400">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-cyan-400/40 shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tools */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-3">GENESIS Tools &amp; Infrastructure</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Training</h4>
                <p>PyTorch, Weights &amp; Biases, distributed training (multiple GPU for transformer sweeps)</p>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Analysis</h4>
                <p>SciPy (curve fitting, BIC), NumPy, MINE estimator, matplotlib/seaborn (scaling plots)</p>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Data</h4>
                <p>CIFAR-10 (random label memorization), synthetic Gaussian blobs (controlled complexity)</p>
              </div>
            </div>
          </div>

          {/* Expected Outputs */}
          <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/10 p-6 mb-8">
            <h3 className="font-semibold text-white mb-3">GENESIS Expected Outputs</h3>
            <ul className="space-y-2">
              {[
                "Scaling law characterization: area law vs volume law for 15+ architecture configurations",
                "If area law: first evidence of holographic principle analogs in computational systems — bridging deep learning theory and theoretical physics",
                "Skip connection analysis: empirical test of 'computational wormhole' hypothesis",
                "Transformer exceptionalism: why attention-based architectures may break the area law (explaining their empirical superiority)",
                "Publication target: Nature Physics, Physical Review Letters, or ICML (if framed computationally). Cross-listing on arXiv: cs.LG + hep-th",
              ].map((o) => (
                <li key={o} className="flex gap-2 text-sm text-gray-400">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-cyan-400/40 shrink-0" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Risks */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-3">GENESIS Risks &amp; Mitigations</h3>
            <div className="space-y-3">
              {[
                {
                  risk: "Both area and volume law fit equally well (no clear winner)",
                  mitigation: "The constant-width depth sweep is the decisive test. If capacity increases with depth at constant width, volume law wins. If capacity saturates, area law wins. This test has high statistical power because it isolates the variable.",
                },
                {
                  risk: "Memorization capacity is a poor proxy for information capacity",
                  mitigation: "Supplement with mutual information measurement I(W; D_train) using MINE. If MI-based capacity and memorization-based capacity give the same scaling exponent, the proxy is validated.",
                },
                {
                  risk: "The analogy to Bekenstein is superficial — neural networks aren't physical systems",
                  mitigation: "The claim is not that neural networks are literally bounded by the Bekenstein bound. The claim is that information storage in computational systems may be subject to analogous area-law constraints, suggesting shared mathematical structure. Frame as 'computational holographic principle' not 'Bekenstein bound for neural networks.'",
                },
                {
                  risk: "Results are optimizer-dependent (SGD vs Adam may give different capacity)",
                  mitigation: "Run full sweep with both SGD+momentum and Adam. If scaling exponents differ, report both — optimizer dependence is itself an interesting finding.",
                },
              ].map((r) => (
                <div key={r.risk}>
                  <h4 className="text-sm font-semibold text-red-400/80 mb-1">Risk: {r.risk}</h4>
                  <p className="text-sm text-gray-400">{r.mitigation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* References */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h3 className="font-semibold text-white mb-3">GENESIS References</h3>
            <ul className="space-y-2">
              <Citation text="Bekenstein, J. D. (1973). Black holes and entropy. Physical Review D, 7(8), 2333." />
              <Citation text="'t Hooft, G. (1993). Dimensional reduction in quantum gravity. arXiv:gr-qc/9310026." />
              <Citation text="Susskind, L. (1995). The world as a hologram. Journal of Mathematical Physics, 36(11), 6377-6396." />
              <Citation text="Zhang, C. et al. (2017). Understanding deep learning requires rethinking generalization. ICLR." />
              <Citation text="Nakkiran, P. et al. (2019). Deep double descent: where bigger models and more data can hurt. ICLR." />
              <Citation text="Frankle, J. & Carlin, M. (2018). The lottery ticket hypothesis. ICLR." />
              <Citation text="Kaplan, J. et al. (2020). Scaling laws for neural language models. arXiv:2001.08361." />
              <Citation text="Wheeler, J. A. (1990). Information, physics, quantum: the search for links. Complexity, Entropy, and the Physics of Information." />
              <Citation text="Wolfram, S. (2002). A New Kind of Science. Wolfram Media." />
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* Cross-Experiment Connections                                   */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <SectionDivider color="from-violet-500/30" />

          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Cross-Experiment Connections
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These three experiments are not independent. Results from each
              directly inform and constrain the others.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-2 text-sm">
                <span className="text-emerald-400">EXP-01</span>
                {" → "}
                <span className="text-amber-400">EXP-02</span>
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                If topological depth predicts forgetting resistance, does &Phi;
                also predict it? Networks with higher integrated information may
                naturally create deeper topological features because integration
                requires complex, multi-scale structure in the loss landscape.
              </p>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-2 text-sm">
                <span className="text-amber-400">EXP-02</span>
                {" → "}
                <span className="text-cyan-400">EXP-03</span>
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                If &Phi; correlates with generalization, and information capacity
                follows an area law, then &Phi; may be the mechanism that
                determines how efficiently a network uses its boundary
                parameters. High &Phi; = better boundary utilization.
              </p>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-2 text-sm">
                <span className="text-cyan-400">EXP-03</span>
                {" → "}
                <span className="text-emerald-400">EXP-01</span>
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                If capacity is boundary-limited, catastrophic forgetting may
                occur when new task information competes for limited boundary
                capacity. Topological protection may work by ensuring old
                knowledge is encoded in &ldquo;interior&rdquo; parameters that
                new learning cannot overwrite.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 via-amber-500/5 to-cyan-500/10 border border-white/[0.08] p-8 text-center">
            <p className="text-sm text-gray-400 italic max-w-xl mx-auto leading-relaxed">
              Together, these experiments test a unified thesis: that the
              geometry of knowledge, the integration of information, and the
              fundamental limits of computational capacity are manifestations of
              the same underlying mathematical structure &mdash; one shared by
              both physical and computational systems.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* Execution Workflow                                             */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <SectionDivider color="from-violet-500/30" />

          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Execution Workflow
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              How experiments progress from hypothesis to publication.
              All experiments are tracked via ClearML (self-hosted, open source)
              for full reproducibility.
            </p>
          </div>

          {/* Pipeline */}
          <div className="space-y-4 mb-10">
            {[
              {
                step: "1",
                title: "Configure",
                desc: "Define hypothesis, architecture, hyperparameters, and benchmarks in versioned YAML config. All experimental parameters are declarative — nothing hardcoded.",
                color: "text-violet-400",
                borderColor: "border-violet-500/20",
              },
              {
                step: "2",
                title: "Train Baseline",
                desc: "Train target architecture to convergence on Task A. Checkpoints saved at intervals for downstream analysis. Loss curves, accuracy, and learning rate tracked in real time.",
                color: "text-emerald-400",
                borderColor: "border-emerald-500/20",
              },
              {
                step: "3",
                title: "Measure",
                desc: "Run experiment-specific measurements: loss landscape sampling + persistent homology (EXP-01), Phi* computation across partitions (EXP-02), or memorization capacity binary search (EXP-03). Results logged automatically.",
                color: "text-amber-400",
                borderColor: "border-amber-500/20",
              },
              {
                step: "4",
                title: "Perturb & Observe",
                desc: "Apply the experimental intervention: sequential task training (EXP-01), architecture survey across families (EXP-02), or depth/width sweep at controlled ratios (EXP-03). Measure target variables at defined intervals.",
                color: "text-cyan-400",
                borderColor: "border-cyan-500/20",
              },
              {
                step: "5",
                title: "Correlate",
                desc: "Statistical analysis: Spearman rank correlation, Bayesian model comparison (BIC), power-law fitting. Determine whether the hypothesis is supported, refuted, or inconclusive.",
                color: "text-rose-400",
                borderColor: "border-rose-500/20",
              },
              {
                step: "6",
                title: "Iterate or Publish",
                desc: "Positive result: extend to additional architectures, write paper. Negative result: analyze why, pivot methodology, document findings. All results — positive or negative — are publishable.",
                color: "text-white",
                borderColor: "border-white/20",
              },
            ].map((s) => (
              <div
                key={s.step}
                className={`flex gap-4 items-start rounded-xl bg-white/[0.02] border ${s.borderColor} p-5`}
              >
                <span className={`text-2xl font-bold ${s.color} opacity-40 shrink-0 w-8 text-right`}>
                  {s.step}
                </span>
                <div>
                  <h3 className={`font-semibold ${s.color} mb-1`}>{s.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Infrastructure */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-3 text-sm">Compute</h3>
              <ul className="space-y-2">
                {[
                  "Local GPU cluster (NVIDIA RTX, CUDA)",
                  "PyTorch 2.x with mixed precision",
                  "Distributed training for architecture sweeps",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-gray-400">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/20 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-3 text-sm">Tracking</h3>
              <ul className="space-y-2">
                {[
                  "ClearML (self-hosted, Apache 2.0)",
                  "Full experiment versioning and comparison",
                  "Automated artifact and model storage",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-gray-400">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/20 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-white mb-3 text-sm">Reproducibility</h3>
              <ul className="space-y-2">
                {[
                  "Deterministic seeding across all runs",
                  "Version-controlled configs (YAML)",
                  "Full dependency pinning (pyproject.toml)",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-gray-400">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/20 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/research"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/[0.08] text-sm text-gray-300 hover:bg-white/[0.08] transition"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Research Programs
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600 text-sm text-white font-semibold hover:opacity-90 transition"
          >
            Research Collaboration Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research Findings — Topological Knowledge Persistence",
  description:
    "EXP-01 results: H1 persistence correlates with catastrophic forgetting resistance across 14 architectures (rho=0.61, p=0.021), but parameter count dominates. WRN width ladder experiment in progress.",
  keywords: [
    "topological data analysis",
    "catastrophic forgetting",
    "persistent homology",
    "loss landscape topology",
    "continual learning",
    "cross-architecture analysis",
    "neural network topology",
    "Betti numbers",
    "H1 persistence",
    "knowledge retention",
    "Vision Transformer",
    "ResNet",
    "ShuffleNet",
    "EfficientNet",
    "MobileNet",
    "WideResNet",
    "Split-CIFAR-100",
    "CUB-200",
    "RESISC-45",
    "Spearman correlation",
    "Bonferroni correction",
    "cubical persistent homology",
    "Ripser",
    "GUDHI",
    "reproducible research",
    "machine learning research",
    "deep learning theory",
    "NeurIPS",
    "ICML",
  ],
  alternates: { canonical: "/research/findings" },
  robots: { index: true, follow: true },
};

function Citation({ text }: { text: string }) {
  return (
    <li className="flex gap-2 text-sm text-gray-400">
      <span className="mt-1.5 h-1 w-1 rounded-full bg-white/20 shrink-0" />
      <span>{text}</span>
    </li>
  );
}

function StatCard({
  label,
  value,
  sub,
  accent = "emerald",
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: "emerald" | "amber" | "rose" | "cyan" | "violet";
}) {
  const borderMap = {
    emerald: "border-emerald-500/30",
    amber: "border-amber-500/30",
    rose: "border-rose-500/30",
    cyan: "border-cyan-500/30",
    violet: "border-violet-500/30",
  };
  const bgMap = {
    emerald: "from-emerald-500/10 to-emerald-500/[0.02]",
    amber: "from-amber-500/10 to-amber-500/[0.02]",
    rose: "from-rose-500/10 to-rose-500/[0.02]",
    cyan: "from-cyan-500/10 to-cyan-500/[0.02]",
    violet: "from-violet-500/10 to-violet-500/[0.02]",
  };
  const textMap = {
    emerald: "text-emerald-300",
    amber: "text-amber-300",
    rose: "text-rose-300",
    cyan: "text-cyan-300",
    violet: "text-violet-300",
  };
  return (
    <div
      className={`rounded-xl bg-gradient-to-b ${bgMap[accent]} border ${borderMap[accent]} p-4`}
    >
      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className={`text-xl font-mono font-bold ${textMap[accent]}`}>
        {value}
      </p>
      {sub && <p className="text-xs text-gray-500 mt-1">{sub}</p>}
    </div>
  );
}

export default function FindingsPage() {
  return (
    <div className="no-snap relative text-gray-300 min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Research Programs
          </Link>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-400/60">
              RESEARCH OUTPUT
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
              EXP-01 &middot; PERSIST
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-medium">
              In Progress &middot; 14 of 19 Architectures
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Topological Signatures of Knowledge Persistence in Continual
            Learning Systems
          </h1>

          <p className="text-sm text-gray-500 mb-6">
            Axion Deep Labs &middot; February 2026 &middot; Working Paper
            &middot; Updated with n=14 results
          </p>
        </div>
      </section>

      {/* Abstract */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/15 p-8">
            <h2 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Abstract
            </h2>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              We investigate whether the topological structure of a neural
              network&apos;s loss landscape, characterized via persistent
              homology, predicts its resistance to catastrophic forgetting
              during sequential task training. Across 14 architecture families
              trained on Split-CIFAR-100, we compute H1 persistent homology
              (loops) of loss landscapes sampled on a 50x50 grid using 5
              independent random 2D slices with filter-normalized perturbations
              (Li et al., 2018). We find a significant rank correlation between
              H1 total persistence and knowledge retention at 100 steps
              (Spearman rho = 0.61, p = 0.021, n = 14). However, this
              correlation does not survive Bonferroni correction (p_adj = 0.21
              across 12 hypothesis tests), and parameter count emerges as a
              stronger predictor (rho = -0.74, p = 0.002, survives Bonferroni).
              After partialing out parameter count, H1 persistence drops to
              non-significance (partial rho = 0.35, p = 0.24). Within the CNN
              family alone (n = 11), H1 shows a stronger, significant signal
              (rho = 0.66, p = 0.026), suggesting the topological signal may be
              real but confounded with architectural scale in the full sample.
              A WRN-28-k width ladder experiment (k = 1, 2, 4, 6, 8, 10) is in
              progress to disentangle topology from parameter count, alongside
              cross-domain validation on CUB-200-2011 and NWPU-RESISC45.
            </p>
          </div>
        </div>
      </section>

      {/* Key statistics at a glance */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">
            Results at a Glance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <StatCard
              label="H1 vs Retention"
              value="rho = 0.61"
              sub="p = 0.021, n = 14"
              accent="emerald"
            />
            <StatCard
              label="Params vs Retention"
              value="rho = -0.74"
              sub="p = 0.002, survives Bonferroni"
              accent="rose"
            />
            <StatCard
              label="Partial H1 | Params"
              value="rho = 0.35"
              sub="p = 0.24 (non-significant)"
              accent="amber"
            />
            <StatCard
              label="Within-CNN H1"
              value="rho = 0.66"
              sub="p = 0.026, n = 11"
              accent="cyan"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <StatCard
              label="Architectures"
              value="14 / 19"
              sub="CIFAR-100 complete"
              accent="emerald"
            />
            <StatCard
              label="Datasets"
              value="3"
              sub="CIFAR-100, CUB-200, RESISC-45"
              accent="violet"
            />
            <StatCard
              label="VIF (H1, Params)"
              value="1.45"
              sub="Low multicollinearity"
              accent="cyan"
            />
            <StatCard
              label="Rank Regression R-sq"
              value="0.61"
              sub="Only params significant"
              accent="amber"
            />
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">
            1. Background and Motivation
          </h2>
          <div className="space-y-4 text-[15px] text-gray-400 leading-relaxed">
            <p>
              Catastrophic forgetting, the tendency of neural networks to lose
              previously learned knowledge when trained on new tasks, remains
              one of the most fundamental unsolved problems in machine learning
              (McCloskey and Cohen, 1989). Every major mitigation strategy
              (replay buffers, elastic weight consolidation, progressive
              networks) manages the symptom rather than addressing the underlying
              geometric cause.
            </p>
            <p>
              Topological Data Analysis (TDA) has emerged as a tool for
              characterizing loss landscape geometry (Ballester and Araujo,
              2020). Persistent homology extracts scale-invariant topological
              features that survive across multiple scales of filtration: H0
              (connected components) and H1 (loops/tunnels).
            </p>
            <p className="text-emerald-300/80 font-medium">
              This experiment tests whether H1 persistence (topological loop
              structure) in the loss landscape predicts catastrophic forgetting
              resistance, and whether this signal is independent of model scale.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">2. Methodology</h2>

          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-6">
            <h3 className="font-semibold text-white mb-3">
              Experimental Pipeline
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Datasets (3 Domains)
                </h4>
                <ul className="space-y-1">
                  <li>
                    <span className="text-white">CIFAR-100</span> (14/19
                    architectures complete): Split into Task A (classes 0-49)
                    and Task B (classes 50-99). Standard augmentation.
                  </li>
                  <li>
                    <span className="text-gray-500">CUB-200-2011</span>{" "}
                    (pending): Fine-grained bird classification. 200 species,
                    cross-domain validation.
                  </li>
                  <li>
                    <span className="text-gray-500">NWPU-RESISC45</span>{" "}
                    (pending): Satellite remote sensing. 45 scene classes,
                    cross-domain validation.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Training Protocol
                </h4>
                <ul className="space-y-1">
                  <li>
                    SGD with momentum (0.9), weight decay 5x10^-4, cosine
                    annealing with warmup (5-10 epochs), batch size 128
                  </li>
                  <li>Task A: 100 epochs to convergence</li>
                  <li>
                    Phase 3 variants: naive sequential, EWC (lambda=400),
                    cosine LR schedule
                  </li>
                  <li>
                    Retention metric:{" "}
                    <span className="text-white font-mono">ret@100</span>{" "}
                    (accuracy at 100 steps of Task B training)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Loss Landscape Sampling
                </h4>
                <ul className="space-y-1">
                  <li>
                    <span className="text-white font-mono">50x50</span> grid
                    (2,500 evaluation points) along 2 filter-normalized random
                    directions (Li et al., 2018)
                  </li>
                  <li>Range: [-1.0, 1.0]</li>
                  <li>
                    <span className="text-white">5 independent random 2D
                    slices</span> per architecture (landscape seed randomized
                    but logged)
                  </li>
                  <li>
                    Sublevel set filtration with lower-star construction
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Persistent Homology
                </h4>
                <ul className="space-y-1">
                  <li>
                    Primary: <span className="text-white">Ripser</span> (Vietoris-Rips, sparse mode)
                  </li>
                  <li>
                    Validation: <span className="text-white">GUDHI</span>{" "}
                    cubical persistent homology (Phase 2c, pending)
                  </li>
                  <li>
                    Dimensions: H0 (connected components), H1 (loops)
                  </li>
                  <li>
                    Primary metric: H1 total persistence = sum of
                    (death_i - birth_i) for all H1 features
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h3 className="font-semibold text-white mb-3">
              19 Architectures Under Study
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
              <div>
                <h4 className="text-xs text-emerald-400/60 uppercase tracking-wider mb-2">
                  Complete on CIFAR-100 (14)
                </h4>
                <div className="space-y-1">
                  <p>ResNet-18, ResNet-50, ResNet-101</p>
                  <p>WRN-28-10, DenseNet-121</p>
                  <p>MobileNet-V3-Small, ShuffleNet-V2</p>
                  <p>EfficientNet-B0, RegNet-Y-400MF</p>
                  <p>ViT-Tiny, ViT-Small</p>
                  <p>MLP-Mixer, ConvMixer, DLA</p>
                </div>
              </div>
              <div>
                <h4 className="text-xs text-amber-400/60 uppercase tracking-wider mb-2">
                  WRN Width Ladder (5 pending)
                </h4>
                <div className="space-y-1">
                  <p>
                    WRN-28-1, WRN-28-2, WRN-28-4, WRN-28-6, WRN-28-8
                  </p>
                  <p className="text-gray-500 text-xs mt-2">
                    Same architecture, varying only width multiplier k.
                    Isolates parameter count from architectural inductive bias.
                    The decisive experiment for disentangling topology from
                    scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistical Methodology */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">
            3. Statistical Framework
          </h2>
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Primary Analysis
                </h4>
                <ul className="space-y-1">
                  <li>Spearman rank correlation (non-parametric)</li>
                  <li>Bonferroni correction across 12 hypothesis tests</li>
                  <li>
                    Permutation test: 10,000 shuffles for empirical p-values
                  </li>
                  <li>
                    Variance Inflation Factor (VIF) for multicollinearity
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Confound Controls
                </h4>
                <ul className="space-y-1">
                  <li>
                    Partial Spearman correlation (H1 | parameter count)
                  </li>
                  <li>Rank regression with both H1 and params</li>
                  <li>
                    Within-family analysis (CNN-only, n=11) to control
                    architecture type
                  </li>
                  <li>
                    WRN width ladder: same architecture, varying only params
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">
            4. Results
          </h2>

          {/* Results Table */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/15 p-6 mb-8">
            <h3 className="font-semibold text-white mb-2">
              Table 1. Top Architectures by Retention (CIFAR-100, n = 14)
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Sorted by ret@100 (Task A accuracy after 100 steps of Task B
              training). Full results for all 14 architectures available in
              experiment logs.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-emerald-500/20 text-left">
                    <th className="pb-3 text-gray-400 font-medium">
                      Architecture
                    </th>
                    <th className="pb-3 text-gray-400 font-medium text-right">
                      Params
                    </th>
                    <th className="pb-3 text-gray-400 font-medium text-right">
                      Task A Acc.
                    </th>
                    <th className="pb-3 text-gray-400 font-medium text-right">
                      H1 Pers.
                    </th>
                    <th className="pb-3 text-gray-400 font-medium text-right">
                      Ret@100
                    </th>
                    <th className="pb-3 text-gray-400 font-medium">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 text-emerald-300 font-medium">
                      ViT-Tiny
                    </td>
                    <td className="py-2.5 font-mono text-right">0.3M</td>
                    <td className="py-2.5 font-mono text-right">52.7%</td>
                    <td className="py-2.5 font-mono text-right">0.18</td>
                    <td className="py-2.5 font-mono text-emerald-300 font-medium text-right">
                      22.5%
                    </td>
                    <td className="py-2.5">Transformer</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 text-emerald-300 font-medium">
                      ShuffleNet-V2
                    </td>
                    <td className="py-2.5 font-mono text-right">1.3M</td>
                    <td className="py-2.5 font-mono text-right">76.8%</td>
                    <td className="py-2.5 font-mono text-right">0.69</td>
                    <td className="py-2.5 font-mono text-emerald-300 font-medium text-right">
                      17.3%
                    </td>
                    <td className="py-2.5">CNN</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 text-white">ViT-Small</td>
                    <td className="py-2.5 font-mono text-right">3.0M</td>
                    <td className="py-2.5 font-mono text-right">62.2%</td>
                    <td className="py-2.5 font-mono text-right">0.32</td>
                    <td className="py-2.5 font-mono text-right">9.6%</td>
                    <td className="py-2.5">Transformer</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 text-white">MobileNet-V3-S</td>
                    <td className="py-2.5 font-mono text-right">1.5M</td>
                    <td className="py-2.5 font-mono text-right">68.6%</td>
                    <td className="py-2.5 font-mono text-right">1.90</td>
                    <td className="py-2.5 font-mono text-right">7.6%</td>
                    <td className="py-2.5">CNN+SE</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 text-white">EfficientNet-B0</td>
                    <td className="py-2.5 font-mono text-right">4.1M</td>
                    <td className="py-2.5 font-mono text-right">76.6%</td>
                    <td className="py-2.5 font-mono text-right">2.12</td>
                    <td className="py-2.5 font-mono text-right">7.1%</td>
                    <td className="py-2.5">CNN+SE</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 text-white">RegNet-Y-400MF</td>
                    <td className="py-2.5 font-mono text-right">4.3M</td>
                    <td className="py-2.5 font-mono text-right">72.2%</td>
                    <td className="py-2.5 font-mono text-right">0.02</td>
                    <td className="py-2.5 font-mono text-right">2.0%</td>
                    <td className="py-2.5">CNN+SE</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-gray-500">ResNet-18</td>
                    <td className="py-2.5 font-mono text-right text-gray-500">
                      11.2M
                    </td>
                    <td className="py-2.5 font-mono text-right text-gray-500">
                      82.0%
                    </td>
                    <td className="py-2.5 font-mono text-right text-gray-500">
                      0.00
                    </td>
                    <td className="py-2.5 font-mono text-right text-gray-500">
                      0.2%
                    </td>
                    <td className="py-2.5 text-gray-500">CNN</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Pattern: smaller models retain more. The two highest-retention
              architectures (ViT-Tiny 0.3M, ShuffleNet-V2 1.3M) are also the
              smallest. This raises the central question of the paper: is
              topology an independent signal, or a proxy for parameter count?
            </p>
          </div>

          {/* Correlation Analysis */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-4">
              Correlation Analysis (n = 14 Architectures)
            </h3>

            {/* Correlation Table */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    <th className="pb-3 text-gray-400 font-medium">
                      Test
                    </th>
                    <th className="pb-3 text-gray-400 font-medium text-right">
                      rho
                    </th>
                    <th className="pb-3 text-gray-400 font-medium text-right">
                      p-value
                    </th>
                    <th className="pb-3 text-gray-400 font-medium text-right">
                      p (Bonf.)
                    </th>
                    <th className="pb-3 text-gray-400 font-medium">
                      Verdict
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-white/5">
                    <td className="py-2.5">
                      H1 persistence vs. ret@100
                    </td>
                    <td className="py-2.5 font-mono text-emerald-300 text-right">
                      0.61
                    </td>
                    <td className="py-2.5 font-mono text-right">0.021</td>
                    <td className="py-2.5 font-mono text-amber-300 text-right">
                      0.21
                    </td>
                    <td className="py-2.5 text-amber-300">
                      Nominal sig., fails Bonferroni
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5">
                      Parameter count vs. ret@100
                    </td>
                    <td className="py-2.5 font-mono text-rose-300 text-right">
                      -0.74
                    </td>
                    <td className="py-2.5 font-mono text-right">0.002</td>
                    <td className="py-2.5 font-mono text-emerald-300 text-right">
                      0.024
                    </td>
                    <td className="py-2.5 text-emerald-300">
                      Survives Bonferroni
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5">
                      Partial H1 | params
                    </td>
                    <td className="py-2.5 font-mono text-gray-500 text-right">
                      0.35
                    </td>
                    <td className="py-2.5 font-mono text-gray-500 text-right">
                      0.24
                    </td>
                    <td className="py-2.5 font-mono text-gray-500 text-right">
                      --
                    </td>
                    <td className="py-2.5 text-gray-500">
                      Non-significant
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5">
                      Within-CNN H1 vs. ret@100 (n=11)
                    </td>
                    <td className="py-2.5 font-mono text-cyan-300 text-right">
                      0.66
                    </td>
                    <td className="py-2.5 font-mono text-right">0.026</td>
                    <td className="py-2.5 font-mono text-right">--</td>
                    <td className="py-2.5 text-cyan-300">
                      Significant (exploratory)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/15 p-4">
                <h4 className="text-emerald-300 font-semibold text-sm mb-2">
                  What the data shows
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400/40 shrink-0" />
                    <span>
                      H1 persistence does correlate with retention at nominal
                      significance (p = 0.021)
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400/40 shrink-0" />
                    <span>
                      Within-CNN subsample (n=11) shows stronger H1 signal
                      (rho = 0.66) when architecture type is controlled
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400/40 shrink-0" />
                    <span>
                      VIF = 1.45 indicates H1 and params are not highly
                      collinear; they carry partially distinct information
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-amber-500/5 border border-amber-500/15 p-4">
                <h4 className="text-amber-300 font-semibold text-sm mb-2">
                  What the data does not show
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-amber-400/40 shrink-0" />
                    <span>
                      H1 does NOT survive Bonferroni correction (p_adj = 0.21
                      across 12 tests)
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-amber-400/40 shrink-0" />
                    <span>
                      After partialing out params, H1 drops to non-significance
                      (partial rho = 0.35, p = 0.24)
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-amber-400/40 shrink-0" />
                    <span>
                      Rank regression R-sq = 0.61, but only parameter count is
                      a significant predictor in the joint model
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">
            5. Key Findings
          </h2>
          <div className="space-y-4">
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-emerald-300 mb-2">
                Finding 1: Parameter count is the dominant predictor of
                forgetting resistance
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Across 14 architectures, parameter count shows the strongest
                correlation with retention (rho = -0.74, p = 0.002) and is the
                only predictor that survives Bonferroni correction. Smaller
                models retain more: ViT-Tiny (0.3M params, 22.5% retention)
                versus ResNet-18 (11.2M params, 0.2% retention). This is
                consistent with the overparameterization hypothesis: larger
                models have more capacity to overwrite task-specific
                representations.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-emerald-300 mb-2">
                Finding 2: H1 persistence correlates with retention but is
                confounded with scale
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The H1 correlation (rho = 0.61, p = 0.021) is nominally
                significant but does not survive multiple testing correction.
                When parameter count is partialed out, the H1 signal drops to
                non-significance (partial rho = 0.35, p = 0.24). The topology
                signal may be real but is statistically inseparable from scale
                in the current cross-architecture sample.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-cyan-300 mb-2">
                Finding 3: Within-CNN analysis suggests a genuine topological
                signal
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                When restricting to convolutional architectures only (n = 11),
                H1 persistence shows a stronger correlation (rho = 0.66,
                p = 0.026). By controlling for architecture family, this
                analysis reduces the confounding effect of fundamentally
                different inductive biases (attention vs. convolution vs.
                token-mixing). The within-CNN signal suggests topology may carry
                information beyond what parameter count alone captures.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-amber-300 mb-2">
                Finding 4: The central confound remains unresolved
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The critical question is whether loss landscape topology is an
                independent predictor of forgetting resistance, or merely a
                proxy for parameter count. VIF = 1.45 shows the two are not
                highly collinear, but the partial correlation analysis cannot
                rule out the confound. The WRN width ladder experiment (same
                architecture, varying only k) is designed specifically to
                resolve this: if H1 predicts retention within the ladder, the
                topological signal is real and independent of architectural
                inductive bias.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-violet-300 mb-2">
                Finding 5: Transformers exhibit qualitatively different
                forgetting dynamics
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Both ViT variants (Tiny and Small) appear in the top 3 for
                retention despite very different parameter counts (0.3M and
                3.0M). ViT-Tiny achieves the highest retention of any
                architecture (22.5%) with the fewest parameters. This suggests
                the attention mechanism may create fundamentally different loss
                landscape geometry and forgetting dynamics compared to
                convolution, independent of model scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WRN Width Ladder */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">
            6. WRN Width Ladder: The Decisive Experiment
          </h2>

          <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/5 border border-violet-500/15 p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-medium">
                In Progress
              </span>
            </div>
            <h3 className="font-semibold text-white mb-3">
              Design: WRN-28-k, k = 1, 2, 4, 6, 8, 10
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              The cross-architecture analysis cannot disentangle topology from
              parameter count because different architectures vary in both
              simultaneously. The WRN width ladder holds architecture constant
              (WideResNet-28 with identical depth, skip connections, and
              training protocol) while varying only the width multiplier k. This
              scales parameter count from roughly 0.4M (k=1) to 36.5M (k=10)
              within a single architecture family.
            </p>

            <div className="rounded-xl bg-black/30 border border-white/5 p-4 mb-4">
              <h4 className="text-sm text-white mb-3">
                What this experiment resolves
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                <div>
                  <p className="text-emerald-300 font-medium mb-1">
                    If H1 predicts retention within the ladder:
                  </p>
                  <p>
                    Topology carries independent information. The cross-architecture
                    H1 signal is real, not a scale artifact. The within-ladder
                    Spearman rho and partial H1|params would both be significant.
                  </p>
                </div>
                <div>
                  <p className="text-rose-300 font-medium mb-1">
                    If only parameter count predicts retention:
                  </p>
                  <p>
                    The H1 signal was a proxy for scale. The paper pivots to
                    reporting a negative result for topology and a positive result
                    for the parameter-count/forgetting relationship, which is itself
                    a useful contribution.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-violet-500/20 text-left">
                    <th className="pb-2 text-gray-400 font-medium">Config</th>
                    <th className="pb-2 text-gray-400 font-medium text-right">
                      Width k
                    </th>
                    <th className="pb-2 text-gray-400 font-medium text-right">
                      Approx. Params
                    </th>
                    <th className="pb-2 text-gray-400 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  {[
                    { k: 1, params: "~0.4M", status: "Pending" },
                    { k: 2, params: "~1.5M", status: "Pending" },
                    { k: 4, params: "~5.9M", status: "Pending" },
                    { k: 6, params: "~13M", status: "Pending" },
                    { k: 8, params: "~23M", status: "Pending" },
                    { k: 10, params: "~36.5M", status: "Complete (original)" },
                  ].map((row) => (
                    <tr key={row.k} className="border-b border-white/5">
                      <td className="py-2">WRN-28-{row.k}</td>
                      <td className="py-2 font-mono text-right">{row.k}</td>
                      <td className="py-2 font-mono text-right">
                        {row.params}
                      </td>
                      <td
                        className={`py-2 ${
                          row.status === "Complete (original)"
                            ? "text-emerald-300"
                            : "text-gray-500"
                        }`}
                      >
                        {row.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Domain Validation */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">
            7. Cross-Domain Validation
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-gradient-to-b from-emerald-500/10 to-emerald-500/[0.02] border border-emerald-500/20 p-5">
              <h3 className="font-semibold text-white text-sm mb-2">
                CIFAR-100
              </h3>
              <p className="text-xs text-emerald-300 mb-2">
                14 / 19 architectures complete
              </p>
              <p className="text-sm text-gray-400">
                Standard object recognition. 50 classes per task. Primary
                analysis dataset. 5 WRN width ladder configs pending.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-b from-amber-500/10 to-amber-500/[0.02] border border-amber-500/20 p-5">
              <h3 className="font-semibold text-white text-sm mb-2">
                CUB-200-2011
              </h3>
              <p className="text-xs text-amber-300 mb-2">
                0 / 19 architectures complete
              </p>
              <p className="text-sm text-gray-400">
                Fine-grained bird classification. 200 species. Tests whether
                topological correlations generalize to a domain requiring
                subtle feature discrimination.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-b from-amber-500/10 to-amber-500/[0.02] border border-amber-500/20 p-5">
              <h3 className="font-semibold text-white text-sm mb-2">
                NWPU-RESISC45
              </h3>
              <p className="text-xs text-amber-300 mb-2">
                0 / 19 architectures complete
              </p>
              <p className="text-sm text-gray-400">
                Satellite remote sensing scenes. 45 classes. Tests whether
                correlations hold in a fundamentally different visual domain
                (aerial imagery vs. object photography).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discussion and Next Steps */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">
            8. Discussion and Next Steps
          </h2>
          <div className="space-y-4 text-[15px] text-gray-400 leading-relaxed">
            <p>
              The current results present an honest picture: there is a
              nominally significant correlation between H1 persistence and
              retention, but parameter count is the dominant signal. The
              within-CNN analysis (rho = 0.66, p = 0.026) suggests that after
              controlling for architecture family, topology may carry
              independent information. However, the partial correlation after
              controlling for params (rho = 0.35, p = 0.24) does not reach
              significance.
            </p>
            <p>
              The experiment is at a decision point. The WRN width ladder is
              designed to resolve the central ambiguity: does topology predict
              forgetting when parameter count is the only variable? The outcome
              determines whether the paper reports a positive topological result
              or a well-controlled negative result (which is itself a
              contribution, given the growing interest in TDA for understanding
              neural networks).
            </p>
            <p className="text-white font-medium">
              Pending experiments and analyses:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm pl-2">
              <li>
                <span className="text-emerald-300">WRN width ladder</span>{" "}
                (k=1,2,4,6,8): within-ladder Spearman correlation and partial
                H1|params. The decisive test.
              </li>
              <li>
                <span className="text-emerald-300">
                  Cross-domain replication
                </span>{" "}
                on CUB-200-2011 and NWPU-RESISC45 (all 19 architectures each).
                Tests generalization beyond CIFAR-100.
              </li>
              <li>
                <span className="text-emerald-300">
                  Phase 2c: Cubical PH validation
                </span>{" "}
                via GUDHI to confirm Ripser results using an independent
                topological computation on the grid structure.
              </li>
              <li>
                <span className="text-emerald-300">
                  Phase 5: LOAO predictive model
                </span>{" "}
                (Leave-One-Architecture-Out) with permutation test. Can
                topology predict forgetting for a held-out architecture?
              </li>
              <li>
                <span className="text-emerald-300">
                  EWC and cosine LR analysis
                </span>{" "}
                across Phase 3 variants. Does the topological signal hold under
                different continual learning strategies?
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Reproducibility */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">
            9. Reproducibility and Infrastructure
          </h2>
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Compute
                </h4>
                <ul className="space-y-1">
                  <li>Local GPU cluster (NVIDIA RTX, CUDA)</li>
                  <li>PyTorch 2.x with mixed precision</li>
                  <li>Training seed = 42 (deterministic)</li>
                  <li>Landscape seed randomized, logged per run</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Topology
                </h4>
                <ul className="space-y-1">
                  <li>Ripser (Vietoris-Rips, sparse mode)</li>
                  <li>GUDHI (cubical PH validation, pending)</li>
                  <li>scikit-tda ecosystem</li>
                  <li>5 random slices per architecture</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Tracking and Versioning
                </h4>
                <ul className="space-y-1">
                  <li>Version-controlled YAML configs (57 total)</li>
                  <li>Full dependency pinning (pyproject.toml)</li>
                  <li>Structured JSON output with all metrics</li>
                  <li>Web dashboard for experiment management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">References</h2>
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
            <ul className="space-y-2">
              <Citation text="Ballester, R. and Araujo, X. (2020). On the interplay between topological data analysis and deep learning. NeurIPS Workshop on TDA." />
              <Citation text="Boissonnat, J.-D. et al. (2018). Geometric and Topological Inference. Cambridge University Press." />
              <Citation text="Draxler, F. et al. (2018). Essentially no barriers in neural network energy landscape. ICML." />
              <Citation text="Kirkpatrick, J. et al. (2017). Overcoming catastrophic forgetting in neural networks. PNAS, 114(13), 3521-3526." />
              <Citation text="Li, H. et al. (2018). Visualizing the loss landscape of neural nets. NeurIPS." />
              <Citation text="McCloskey, M. and Cohen, N. J. (1989). Catastrophic interference in connectionist networks. Psychology of Learning and Motivation, 24, 109-165." />
              <Citation text="Otter, N. et al. (2017). A roadmap for the computation of persistent homology. EPJ Data Science, 6(1), 1-38." />
              <Citation text="Rieck, B. et al. (2019). Neural persistence: a complexity measure for deep neural networks using algebraic topology. ICLR." />
              <Citation text="Tononi, G. and Cirelli, C. (2014). Sleep and the price of plasticity. Neuron, 81(1), 12-34." />
            </ul>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/research/experiments"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/[0.08] text-sm text-gray-300 hover:bg-white/[0.08] transition"
          >
            Full Experimental Protocols
          </Link>
          <Link
            href="/research"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/[0.08] text-sm text-gray-300 hover:bg-white/[0.08] transition"
          >
            All Research Programs
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

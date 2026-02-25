import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research Findings — Topological Knowledge Persistence",
  description:
    "EXP-01 cross-dataset results: topology is a conditional predictor of forgetting (CUB-200 p=0.037 suggestive, RESISC-45 p=0.566 not significant) and a mitigation sensitivity marker (H0 predicts EWC benefit, rho=0.86). 57 of 57 configurations complete across 19 architectures and 3 datasets.",
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
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
              3 Datasets Complete &middot; 57 of 57 Configurations
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Topological Signatures of Knowledge Persistence in Continual
            Learning Systems
          </h1>

          <p className="text-sm text-gray-500 mb-6">
            Axion Deep Labs &middot; February 2026 &middot; Working Paper
            &middot; Updated February 2026 with 57/57 cross-dataset results
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
              network&apos;s loss landscape predicts resistance to catastrophic
              forgetting. Across 19 architectures and 3 datasets (CIFAR-100,
              CUB-200-2011, and NWPU-RESISC45), we compute persistent homology
              on 50x50 loss landscape grids using 5 independent random 2D slices
              with both Ripser and GUDHI cubical complexes. On the easy benchmark
              (CIFAR-100, n=19), parameter count dominates (rho = -0.76,
              p = 0.0002, survives Bonferroni) and topology adds no predictive
              value. On the hard fine-grained benchmark (CUB-200, n=19),
              parameter count fails completely (rho = -0.27, p = 0.27) and
              topology rescues prediction (permutation p = 0.037), though this
              does not survive Bonferroni correction across 3 datasets (adjusted
              alpha = 0.0167). On satellite imagery (RESISC-45, n=19), topology
              does not help (permutation p = 0.566). However, the most stable
              cross-dataset signal is that H0 persistence predicts EWC benefit:
              CIFAR-100 rho = 0.76 (p = 0.0002), RESISC-45 rho = 0.86
              (p = 2.4e-6). Topology is a conditional predictor of forgetting
              (task-dependent) and a universal marker of mitigation sensitivity.
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
              label="CUB-200 Key Result"
              value="p = 0.037"
              sub="Suggestive (does not survive Bonferroni)"
              accent="amber"
            />
            <StatCard
              label="Params Alone (CUB)"
              value="rho = -0.92"
              sub="Wrong direction without topology"
              accent="rose"
            />
            <StatCard
              label="+Topology (CUB)"
              value="rho = 0.34"
              sub="Prediction rescued"
              accent="emerald"
            />
            <StatCard
              label="MAE Reduction"
              value="17.5%"
              sub="0.186 to 0.154 with topology"
              accent="cyan"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <StatCard
              label="Configs Complete"
              value="57 / 57"
              sub="19 archs x 3 datasets done"
              accent="emerald"
            />
            <StatCard
              label="RESISC-45 Topology"
              value="p = 0.566"
              sub="Topology does not help on satellite"
              accent="rose"
            />
            <StatCard
              label="Params vs ret (CIFAR)"
              value="rho = -0.76"
              sub="p = 0.0002, survives Bonferroni"
              accent="amber"
            />
            <StatCard
              label="Topo on CIFAR-100"
              value="Not sig."
              sub="Redundant on easy tasks"
              accent="amber"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <StatCard
              label="EWC Benefit (RESISC)"
              value="rho = 0.86"
              sub="H0 predicts EWC benefit, p = 2.4e-6"
              accent="emerald"
            />
            <StatCard
              label="EWC Benefit (CIFAR)"
              value="rho = 0.76"
              sub="H0 predicts EWC benefit, p = 0.0002"
              accent="emerald"
            />
            <StatCard
              label="WRN H0 Monotonicity"
              value="rho = -1.0"
              sub="Perfect on all 3 datasets"
              accent="violet"
            />
            <StatCard
              label="Cubical vs Ripser"
              value="rho = 1.0"
              sub="H1 agreement on all 3 datasets"
              accent="cyan"
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
                    <span className="text-white">CIFAR-100</span> (19/19
                    architectures complete): Split into Task A (classes 0-49)
                    and Task B (classes 50-99). Standard augmentation.
                  </li>
                  <li>
                    <span className="text-white">CUB-200-2011</span> (19/19
                    complete): Fine-grained bird classification. 200 species,
                    cross-domain validation.
                  </li>
                  <li>
                    <span className="text-white">NWPU-RESISC45</span> (19/19
                    architectures complete): Satellite remote sensing. 45 scene
                    classes, cross-domain validation.
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
                    Retention metrics:{" "}
                    <span className="text-white font-mono">ret@100</span> and{" "}
                    <span className="text-white font-mono">ret@10</span>{" "}
                    (accuracy at 100 and 10 steps of Task B training)
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
                    cubical persistent homology (Phase 2c)
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
                  Original Architectures (14)
                </h4>
                <div className="space-y-1">
                  <p>ResNet-18, ResNet-50, ResNet-18 Wide</p>
                  <p>WRN-28-10, DenseNet-121</p>
                  <p>MobileNet-V3-Small, ShuffleNet-V2</p>
                  <p>EfficientNet-B0, RegNet-Y-400MF</p>
                  <p>ViT-Tiny, ViT-Small</p>
                  <p>MLP-Mixer, ConvNeXt-Tiny, VGG-16-BN</p>
                </div>
              </div>
              <div>
                <h4 className="text-xs text-emerald-400/60 uppercase tracking-wider mb-2">
                  WRN Width Ladder (5 additional)
                </h4>
                <div className="space-y-1">
                  <p>
                    WRN-28-1, WRN-28-2, WRN-28-4, WRN-28-6, WRN-28-8
                  </p>
                  <p className="text-gray-500 text-xs mt-2">
                    Same architecture, varying only width multiplier k.
                    Isolates parameter count from architectural inductive bias.
                    All complete on CIFAR-100, CUB-200, and RESISC-45.
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
                  <li>Bonferroni correction across hypothesis tests</li>
                  <li>
                    Permutation test: 1,000 shuffles for empirical p-values
                  </li>
                  <li>
                    Leave-one-architecture-out Ridge regression with nested alpha selection
                  </li>
                  <li>
                    Matched-dimensionality null control (1,000 random feature draws)
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
                  <li>
                    Cross-dataset replication (CIFAR-100, CUB-200, RESISC-45)
                  </li>
                  <li>
                    Within-family analysis (CNN-only) to control
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

          {/* Cross-Dataset Predictive Model */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/15 p-6 mb-8">
            <h3 className="font-semibold text-white mb-2">
              Cross-Dataset Predictive Model (Phase 5)
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Leave-one-architecture-out Ridge regression with permutation testing.
              Compares params-only vs. params+topology models across datasets.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-emerald-500/20 text-left">
                    <th className="pb-3 text-gray-400 font-medium">
                      Dataset
                    </th>
                    <th className="pb-3 text-gray-400 font-medium">
                      Outcome
                    </th>
                    <th className="pb-3 text-gray-400 font-medium text-right">
                      Params-only rho
                    </th>
                    <th className="pb-3 text-gray-400 font-medium text-right">
                      +Topology rho
                    </th>
                    <th className="pb-3 text-gray-400 font-medium text-right">
                      Perm. p
                    </th>
                    <th className="pb-3 text-gray-400 font-medium">
                      Verdict
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-white/5">
                    <td className="py-2.5">CIFAR-100 (n=19)</td>
                    <td className="py-2.5 font-mono">ret@100</td>
                    <td className="py-2.5 font-mono text-right">0.43</td>
                    <td className="py-2.5 font-mono text-right">0.30</td>
                    <td className="py-2.5 font-mono text-gray-500 text-right">0.295</td>
                    <td className="py-2.5 text-gray-500">Not significant</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 text-amber-300 font-medium">CUB-200 (n=19)</td>
                    <td className="py-2.5 font-mono text-amber-300">ret@10</td>
                    <td className="py-2.5 font-mono text-rose-300 text-right">-0.92</td>
                    <td className="py-2.5 font-mono text-amber-300 text-right">0.34</td>
                    <td className="py-2.5 font-mono text-amber-300 font-medium text-right">0.037</td>
                    <td className="py-2.5 text-amber-300 font-medium">Suggestive</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5">RESISC-45 (n=19)</td>
                    <td className="py-2.5 font-mono">ret@100</td>
                    <td className="py-2.5 font-mono text-right">--</td>
                    <td className="py-2.5 font-mono text-right">--</td>
                    <td className="py-2.5 font-mono text-gray-500 text-right">0.566</td>
                    <td className="py-2.5 text-gray-500">Not significant</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5">RESISC-45 (n=19)</td>
                    <td className="py-2.5 font-mono">ret@10</td>
                    <td className="py-2.5 font-mono text-right">--</td>
                    <td className="py-2.5 font-mono text-right">--</td>
                    <td className="py-2.5 font-mono text-gray-500 text-right">0.628</td>
                    <td className="py-2.5 text-gray-500">Not significant</td>
                  </tr>
                  <tr>
                    <td className="py-2.5">RESISC-45 (n=19)</td>
                    <td className="py-2.5 font-mono">early_aurc</td>
                    <td className="py-2.5 font-mono text-right">--</td>
                    <td className="py-2.5 font-mono text-right">--</td>
                    <td className="py-2.5 font-mono text-gray-500 text-right">0.743</td>
                    <td className="py-2.5 text-gray-500">Not significant</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              On CIFAR-100, parameter count alone explains forgetting and topology adds nothing.
              On CUB-200, parameter count predicts in the wrong direction and topology rescues the
              prediction (suggestive at p = 0.037 but does not survive Bonferroni across 3 datasets,
              adjusted alpha = 0.0167). On RESISC-45, topology does not help predict forgetting
              on any metric.
            </p>
          </div>

          {/* CIFAR-100 Results Table */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-2">
              CIFAR-100 Results (n=19, Easy Benchmark)
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              All 19 architectures sorted by ret@100. On this easy benchmark,
              bigger models simply retain better.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left">
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
                      ret@100
                    </th>
                    <th className="pb-3 text-gray-400 font-medium text-right">
                      ret@10
                    </th>
                    <th className="pb-3 text-gray-400 font-medium text-right">
                      H1 Pers.
                    </th>
                    <th className="pb-3 text-gray-400 font-medium">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  {[
                    { arch: "ViT-Tiny", params: "0.3M", acc: "52.7%", ret100: "22.5%", ret10: "95.9%", h1: "0.01", type: "Transformer", highlight: true },
                    { arch: "ShuffleNet-V2", params: "1.3M", acc: "76.8%", ret100: "17.3%", ret10: "84.7%", h1: "0.79", type: "CNN", highlight: true },
                    { arch: "ViT-Small", params: "2.2M", acc: "62.2%", ret100: "9.6%", ret10: "94.7%", h1: "0.24", type: "Transformer", highlight: false },
                    { arch: "MobileNet-V3-S", params: "1.1M", acc: "68.6%", ret100: "7.6%", ret10: "75.0%", h1: "1.89", type: "CNN", highlight: false },
                    { arch: "EfficientNet-B0", params: "4.1M", acc: "76.6%", ret100: "7.1%", ret10: "78.6%", h1: "1.91", type: "CNN", highlight: false },
                    { arch: "WRN-28-1", params: "0.4M", acc: "71.7%", ret100: "6.6%", ret10: "51.0%", h1: "0.00", type: "WRN-ladder", highlight: false },
                    { arch: "RegNet-Y-400MF", params: "4.0M", acc: "72.2%", ret100: "2.0%", ret10: "54.1%", h1: "0.05", type: "CNN", highlight: false },
                    { arch: "WRN-28-2", params: "1.5M", acc: "78.6%", ret100: "1.1%", ret10: "22.8%", h1: "0.00", type: "WRN-ladder", highlight: false },
                    { arch: "VGG-16-BN", params: "14.8M", acc: "78.4%", ret100: "0.8%", ret10: "88.0%", h1: "0.00", type: "CNN", highlight: false },
                    { arch: "WRN-28-8", params: "23.4M", acc: "82.9%", ret100: "0.7%", ret10: "4.4%", h1: "0.01", type: "WRN-ladder", highlight: false },
                    { arch: "WRN-28-4", params: "5.9M", acc: "81.8%", ret100: "0.3%", ret10: "8.5%", h1: "0.02", type: "WRN-ladder", highlight: false },
                    { arch: "WRN-28-10", params: "36.5M", acc: "84.0%", ret100: "0.3%", ret10: "5.3%", h1: "0.07", type: "WRN-ladder", highlight: false },
                    { arch: "ResNet-18", params: "11.2M", acc: "82.0%", ret100: "0.2%", ret10: "46.7%", h1: "0.00", type: "CNN", highlight: false },
                    { arch: "WRN-28-6", params: "13.2M", acc: "82.8%", ret100: "0.1%", ret10: "4.5%", h1: "0.02", type: "WRN-ladder", highlight: false },
                    { arch: "ResNet-50", params: "23.7M", acc: "83.6%", ret100: "0.1%", ret10: "56.0%", h1: "0.00", type: "CNN", highlight: false },
                    { arch: "DenseNet-121", params: "7.1M", acc: "84.5%", ret100: "0.05%", ret10: "25.7%", h1: "0.01", type: "CNN", highlight: false },
                    { arch: "MLP-Mixer", params: "2.3M", acc: "61.5%", ret100: "0.03%", ret10: "0.03%", h1: "0.12", type: "MLP", highlight: false },
                    { arch: "ConvNeXt-Tiny", params: "27.9M", acc: "56.7%", ret100: "0.0%", ret10: "45.0%", h1: "0.00", type: "CNN", highlight: false },
                    { arch: "ResNet-18 Wide", params: "44.7M", acc: "83.1%", ret100: "0.0%", ret10: "29.7%", h1: "0.00", type: "CNN", highlight: false },
                  ].map((row) => (
                    <tr key={row.arch} className="border-b border-white/5">
                      <td className={`py-2.5 ${row.highlight ? "text-emerald-300 font-medium" : ""}`}>
                        {row.arch}
                      </td>
                      <td className="py-2.5 font-mono text-right">{row.params}</td>
                      <td className="py-2.5 font-mono text-right">{row.acc}</td>
                      <td className={`py-2.5 font-mono text-right ${row.highlight ? "text-emerald-300 font-medium" : ""}`}>
                        {row.ret100}
                      </td>
                      <td className="py-2.5 font-mono text-right">{row.ret10}</td>
                      <td className="py-2.5 font-mono text-right">{row.h1}</td>
                      <td className="py-2.5">{row.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CIFAR-100 Phase 4 Correlation Stats */}
            <div className="mt-6 rounded-xl bg-amber-500/5 border border-amber-500/15 p-4">
              <h4 className="text-amber-300 font-semibold text-sm mb-2">
                CIFAR-100 Phase 4 Correlation Analysis
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-amber-400/40 shrink-0" />
                  <span>
                    Parameter count vs ret@100: rho = -0.76, p = 0.0002, survives Bonferroni
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-amber-400/40 shrink-0" />
                  <span>
                    H1 persistence vs ret@100: rho = 0.47, p = 0.042, does NOT survive Bonferroni
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-amber-400/40 shrink-0" />
                  <span>
                    Partial H1 | params: rho = 0.33, p = 0.19, not significant
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-amber-400/40 shrink-0" />
                  <span className="text-amber-300 font-medium">
                    Conclusion: On this easy task, parameter count dominates
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* CUB-200 Results */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/15 p-6 mb-8">
            <h3 className="font-semibold text-white mb-2">
              CUB-200 Results (n=19, Hard Fine-Grained)
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Top architectures by retention on CUB-200-2011 (200 bird species).
              Parameter count fails as a predictor on this hard benchmark.
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
                      ret@100
                    </th>
                    <th className="pb-3 text-gray-400 font-medium">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  {[
                    { arch: "ViT-Tiny", params: "0.3M", ret100: "31.1%", type: "Transformer", highlight: true },
                    { arch: "ViT-Small", params: "2.2M", ret100: "23.4%", type: "Transformer", highlight: true },
                    { arch: "WRN-28-10", params: "36.5M", ret100: "8.1%", type: "WRN-ladder", highlight: false },
                    { arch: "WRN-28-8", params: "23.4M", ret100: "5.0%", type: "WRN-ladder", highlight: false },
                    { arch: "EfficientNet-B0", params: "4.1M", ret100: "3.5%", type: "CNN", highlight: false },
                    { arch: "ShuffleNet-V2", params: "1.3M", ret100: "2.8%", type: "CNN", highlight: false },
                    { arch: "WRN-28-6", params: "13.2M", ret100: "2.4%", type: "WRN-ladder", highlight: false },
                    { arch: "DenseNet-121", params: "7.1M", ret100: "1.9%", type: "CNN", highlight: false },
                  ].map((row) => (
                    <tr key={row.arch} className="border-b border-white/5">
                      <td className={`py-2.5 ${row.highlight ? "text-emerald-300 font-medium" : ""}`}>
                        {row.arch}
                      </td>
                      <td className="py-2.5 font-mono text-right">{row.params}</td>
                      <td className={`py-2.5 font-mono text-right ${row.highlight ? "text-emerald-300 font-medium" : ""}`}>
                        {row.ret100}
                      </td>
                      <td className="py-2.5">{row.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CUB-200 Phase 4 and Phase 5 Details */}
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/15 p-4">
                <h4 className="text-emerald-300 font-semibold text-sm mb-2">
                  CUB-200 Phase 4 Correlations
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400/40 shrink-0" />
                    <span>
                      Parameter count vs ret@100: rho = -0.27, p = 0.27 (NOT significant)
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400/40 shrink-0" />
                    <span className="text-emerald-300 font-medium">
                      Parameter count fails on hard tasks
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/15 p-4">
                <h4 className="text-emerald-300 font-semibold text-sm mb-2">
                  CUB-200 Phase 5 (ret@10 Detail)
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400/40 shrink-0" />
                    <span>Params alone: rho = -0.92 (wrong direction)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400/40 shrink-0" />
                    <span>Params + topology: rho = 0.34 (rescued)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400/40 shrink-0" />
                    <span>Topology alone: rho = 0.33, MAE = 0.147</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400/40 shrink-0" />
                    <span>Permutation test: p = 0.037</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400/40 shrink-0" />
                    <span>Matched-dimensionality control: exceeds 95th percentile</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400/40 shrink-0" />
                    <span>MAE reduction: 17.5%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Phase 6: Pooled Interaction Analysis */}
          <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/5 border border-violet-500/15 p-6 mb-8">
            <h3 className="font-semibold text-white mb-1">
              Phase 6: Pooled Interaction Analysis (n=57)
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Formal test of dataset moderation via OLS with clustered bootstrap.
              All 57 configurations pooled across 3 datasets with dataset x topology
              interaction terms.
            </p>

            {/* EWC Benefit Moderation */}
            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/15 p-4 mb-4">
              <h4 className="text-emerald-300 font-semibold text-sm mb-3">
                EWC Benefit Moderation Test
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <StatCard
                  label="Block Permutation p"
                  value="p = 0.046"
                  sub="Dataset moderates H0 -> EWC benefit"
                  accent="emerald"
                />
                <StatCard
                  label="CIFAR-100 H0 Effect"
                  value="+0.016"
                  sub="CI [+0.005, +0.062] excludes zero"
                  accent="emerald"
                />
                <StatCard
                  label="CUB-200 H0 Effect"
                  value="+0.002"
                  sub="CI [-0.008, +0.013] includes zero"
                  accent="amber"
                />
                <StatCard
                  label="RESISC-45 H0 Effect"
                  value="+0.007"
                  sub="CI [+0.004, +0.012] excludes zero"
                  accent="emerald"
                />
              </div>
              <p className="text-xs text-gray-500">
                H0 partial effects on EWC benefit per dataset. CIs from clustered
                bootstrap. CIFAR-100 and RESISC-45 confidence intervals exclude zero,
                confirming the per-dataset correlations. CUB-200 CI includes zero.
              </p>
            </div>

            {/* Forgetting Prediction Moderation */}
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/15 p-4 mb-4">
              <h4 className="text-amber-300 font-semibold text-sm mb-3">
                Forgetting Prediction Moderation Test
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                <StatCard
                  label="ret@10 Block p"
                  value="p = 0.196"
                  sub="Not significant overall"
                  accent="amber"
                />
                <StatCard
                  label="ret@100 Block p"
                  value="p = 0.035"
                  sub="Significant moderation"
                  accent="emerald"
                />
                <StatCard
                  label="CUB-200 ret@10 Effect"
                  value="-0.123"
                  sub="CI [-0.183, -0.046] excludes zero"
                  accent="emerald"
                />
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-amber-400/40 shrink-0" />
                  <span>
                    CIFAR-100 H0 on ret@10: -0.001, CI [-0.486, +0.073] (includes zero)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400/40 shrink-0" />
                  <span className="text-emerald-300 font-medium">
                    CUB-200 H0 on ret@10: -0.123, CI [-0.183, -0.046] (excludes zero)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-amber-400/40 shrink-0" />
                  <span>
                    RESISC-45 H0 on ret@10: -0.021, CI [-0.264, +0.083] (includes zero)
                  </span>
                </li>
              </ul>
            </div>

            {/* Bottom line */}
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="text-violet-300 font-semibold">Bottom line: </span>
                Dataset significantly moderates the topology-EWC benefit relationship
                (permutation p = 0.046), with H0 predicting EWC benefit on CIFAR-100
                and RESISC-45 (CIs excluding zero) but not CUB-200. For forgetting
                prediction, the ret@100 block test is significant (p = 0.035) and
                CUB-200 is the only dataset where H0 CI on ret@10 excludes zero,
                consistent with Phase 5 findings that topology rescues prediction
                specifically on fine-grained tasks.
              </p>
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
              <h3 className="font-semibold text-amber-300 mb-2">
                Finding 1: Topology is a conditional predictor, not a universal one
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                On CUB-200 (fine-grained birds), topology rescues forgetting
                prediction where parameter count fails (params rho = -0.92 wrong
                direction; +topology rho = 0.34; permutation p = 0.037). However,
                this p-value does not survive Bonferroni correction across 3
                datasets (adjusted alpha = 0.0167), making the result suggestive
                rather than confirmed. On RESISC-45 (satellite scenes), topology
                does not help at all (perm p = 0.566). Topology appears to matter
                on fine-grained visual tasks but not on satellite imagery.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-amber-300 mb-2">
                Finding 2: On easy tasks, parameter count is all you need
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                On CIFAR-100 (n=19), parameter count shows rho = -0.76,
                p = 0.0002, and survives Bonferroni correction. Topology adds
                nothing beyond what scale already explains. Bigger models simply
                retain better on easy benchmarks.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-cyan-300 mb-2">
                Finding 3: Task domain, not just difficulty, determines whether topology predicts forgetting
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The picture is more nuanced than &quot;topology helps on hard
                tasks.&quot; CIFAR-100 (easy): scale dominates. CUB-200
                (fine-grained): topology is suggestive. RESISC-45 (satellite):
                topology does not help despite being a non-trivial task. The
                domain itself matters. Fine-grained visual discrimination may
                create loss landscape structures that topological features can
                capture, while satellite scene classification does not.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/15 p-6">
              <h3 className="font-semibold text-emerald-300 mb-2">
                Finding 4: H0 predicts EWC benefit across datasets (strongest cross-dataset signal)
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The most robust finding across all 3 datasets: H0 persistence
                (connected components) predicts how much a model benefits from
                Elastic Weight Consolidation. On CIFAR-100: rho = 0.76,
                p = 0.0002. On RESISC-45: rho = 0.86, p = 2.4e-6. The Phase 6
                pooled interaction analysis formally confirms that dataset
                moderates this relationship (block permutation p = 0.046), with
                per-dataset H0 partial effects excluding zero on CIFAR-100
                (CI [+0.005, +0.062]) and RESISC-45 (CI [+0.004, +0.012]) but
                not CUB-200 (CI [-0.008, +0.013]). Models with more fragmented
                loss landscapes (higher H0) benefit more from EWC
                regularization. This makes topology a mitigation sensitivity
                marker, telling you not just whether a model will forget, but
                how much a specific intervention will help.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-violet-300 mb-2">
                Finding 5: WRN width ladder confirms universal H0 monotonicity
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The WRN-28-k ladder (k=1,2,4,6,8,10) shows H0 perfectly
                monotonic with width on all 3 datasets (rho = -1.0 on CIFAR-100,
                CUB-200, and RESISC-45). Wider networks universally produce
                smoother loss landscapes. Cubical vs Ripser H1 agreement is also
                perfect (rho = 1.0) on all 3 datasets, confirming methodological
                robustness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WRN Width Ladder */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">
            6. WRN Width Ladder
          </h2>

          <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/5 border border-violet-500/15 p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
                Complete
              </span>
            </div>
            <h3 className="font-semibold text-white mb-3">
              Design: WRN-28-k, k = 1, 2, 4, 6, 8, 10
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              The WRN width ladder holds architecture constant (WideResNet-28
              with identical depth, skip connections, and training protocol)
              while varying only the width multiplier k. This scales parameter
              count from roughly 0.4M (k=1) to 36.5M (k=10) within a single
              architecture family, isolating scale from inductive bias.
            </p>

            <div className="rounded-xl bg-black/30 border border-white/5 p-4 mb-4">
              <h4 className="text-sm text-white mb-3">
                Key Results
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                <div>
                  <p className="text-emerald-300 font-medium mb-1">
                    H0 monotonic with width (universal)
                  </p>
                  <p>
                    H0 persistence is perfectly monotonic with width multiplier
                    (rho = -1.0) on all 3 datasets (CIFAR-100, CUB-200,
                    RESISC-45). Wider networks universally produce smoother loss
                    landscapes with fewer connected components.
                  </p>
                </div>
                <div>
                  <p className="text-cyan-300 font-medium mb-1">
                    Direction flip across datasets
                  </p>
                  <p>
                    CIFAR-100: H0 vs retention rho = 0.71 (suggestive). CUB-200:
                    H0 vs retention rho = -0.83, p = 0.04 (opposite direction).
                    The relationship between topology and forgetting varies by
                    domain, even though H0 monotonicity with scale is universal.
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
                      Params
                    </th>
                    <th className="pb-2 text-gray-400 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  {[
                    { k: 1, params: "0.4M", status: "Complete" },
                    { k: 2, params: "1.5M", status: "Complete" },
                    { k: 4, params: "5.9M", status: "Complete" },
                    { k: 6, params: "13.2M", status: "Complete" },
                    { k: 8, params: "23.4M", status: "Complete" },
                    { k: 10, params: "36.5M", status: "Complete" },
                  ].map((row) => (
                    <tr key={row.k} className="border-b border-white/5">
                      <td className="py-2">WRN-28-{row.k}</td>
                      <td className="py-2 font-mono text-right">{row.k}</td>
                      <td className="py-2 font-mono text-right">
                        {row.params}
                      </td>
                      <td className="py-2 text-emerald-300">
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
                19 / 19 architectures complete
              </p>
              <p className="text-sm text-gray-400">
                Standard object recognition. 50 classes per task. Parameter
                count dominates (rho = -0.76, p = 0.0002). Topology redundant
                on this easy benchmark.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-b from-emerald-500/10 to-emerald-500/[0.02] border border-emerald-500/20 p-5">
              <h3 className="font-semibold text-white text-sm mb-2">
                CUB-200-2011
              </h3>
              <p className="text-xs text-emerald-300 mb-2">
                19 / 19 architectures complete
              </p>
              <p className="text-sm text-gray-400">
                Fine-grained bird classification. 200 species. Topology rescues
                prediction (permutation p = 0.037, suggestive but does not
                survive Bonferroni across 3 datasets) where parameter count
                fails (rho = -0.27, not significant).
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-b from-rose-500/10 to-rose-500/[0.02] border border-rose-500/20 p-5">
              <h3 className="font-semibold text-white text-sm mb-2">
                NWPU-RESISC45
              </h3>
              <p className="text-xs text-emerald-300 mb-2">
                19 / 19 architectures complete
              </p>
              <p className="text-sm text-gray-400">
                Satellite remote sensing scenes. 45 classes. Topology does NOT
                help predict forgetting (perm p = 0.566 ret@100, p = 0.628
                ret@10, p = 0.743 early_aurc). However, H0 strongly predicts
                EWC benefit (rho = 0.86, p = 2.4e-6).
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
              With all 57 configurations complete across 3 datasets, the picture
              is clear: topology is not a universal predictor of forgetting. The
              CUB-200 result (p = 0.037) is suggestive but does not survive
              Bonferroni correction across 3 datasets (adjusted alpha = 0.0167).
              On RESISC-45, topology provides no forgetting prediction at all
              (p = 0.566). Topology&apos;s predictive value for forgetting is
              conditional on the visual domain.
            </p>
            <p>
              However, the strongest cross-dataset signal is not about predicting
              forgetting directly. H0 persistence (connected components) predicts
              how much a model benefits from EWC regularization, and this holds
              on both CIFAR-100 (rho = 0.76, p = 0.0002) and RESISC-45
              (rho = 0.86, p = 2.4e-6). This reframes topology&apos;s role: it is
              a mitigation sensitivity marker. It tells you not just that a model
              might forget, but how much a specific intervention (EWC) will help.
            </p>
            <p className="text-white font-medium">
              Revised narrative:
            </p>
            <ul className="space-y-2 text-sm pl-2 list-disc list-inside">
              <li>
                Topology as <span className="text-amber-300">conditional forgetting predictor</span>:
                works on fine-grained CUB-200, not on satellite RESISC-45 or easy CIFAR-100
              </li>
              <li>
                Topology as <span className="text-emerald-300">mitigation sensitivity marker</span>:
                H0 predicts EWC benefit across datasets (the most robust finding)
              </li>
              <li>
                WRN H0 monotonicity (rho = -1.0) and cubical/Ripser agreement
                (rho = 1.0) are <span className="text-emerald-300">universal across all 3 datasets</span>
              </li>
            </ul>
            <p className="text-white font-medium mt-4">
              Next steps:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm pl-2">
              <li>
                <span className="text-emerald-300">
                  Multi-seed runs
                </span>{" "}
                for confidence intervals on the CUB-200 finding
              </li>
              <li>
                <span className="text-emerald-300">
                  Scale to 30+ architectures
                </span>{" "}
                for more statistical power (target: CUB-200 p &lt; 0.0167
                after Bonferroni)
              </li>
              <li>
                <span className="text-emerald-300">
                  EWC benefit prediction API
                </span>{" "}
                as the commercially viable product angle
              </li>
              <li>
                <span className="text-emerald-300">
                  ArXiv publication
                </span>{" "}
                and NeurIPS/ICML submission
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Proposed Mechanism */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">
            9. Proposed Mechanism: Basin Fragmentation
          </h2>
          <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-violet-500/[0.02] border border-violet-500/20 p-6">
            <div className="space-y-4 text-[15px] text-gray-400 leading-relaxed">
              <p>
                H0 in persistent homology counts connected components in the sublevel
                set filtration of the loss landscape. A high H0 count indicates a
                <span className="text-violet-300"> fragmented landscape </span>
                with many disconnected basins at low loss values.
              </p>
              <p>
                We propose the <span className="text-white font-medium">basin
                fragmentation hypothesis</span>: H0 measures the degree of loss
                landscape fragmentation, which determines how much curvature-based
                regularization (EWC) can help by preventing inter-basin drift during
                sequential training.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-4">
                <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/10 p-4">
                  <p className="text-xs text-emerald-400 uppercase tracking-wider mb-2">
                    High H0 (fragmented landscape)
                  </p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>Many disconnected basins at low loss</li>
                    <li>Naive training drifts across basin boundaries</li>
                    <li>EWC prevents inter-basin drift via Fisher penalty</li>
                    <li>Large EWC benefit</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-rose-500/5 border border-rose-500/10 p-4">
                  <p className="text-xs text-rose-400 uppercase tracking-wider mb-2">
                    Low H0 (smooth landscape)
                  </p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>One broad basin; few disconnected regions</li>
                    <li>Naive training perturbs within the same basin</li>
                    <li>EWC penalty addresses a problem that does not exist</li>
                    <li>Small EWC benefit</li>
                  </ul>
                </div>
              </div>
              <p>
                The WRN width ladder provides supporting evidence: H0 decreases
                perfectly with width (rho = -1.0 vs params) across all three datasets,
                consistent with wider networks having smoother, less fragmented
                landscapes. The CUB-200 null for EWC benefit (rho = 0.31, p = 0.19)
                may indicate that fine-grained discrimination creates forgetting through
                feature-level interference rather than parameter-level basin drift.
              </p>
              <p className="text-xs text-gray-500 mt-2 italic">
                This mechanism is tentative. A causal test would require intervening
                on landscape topology (e.g., via landscape-aware regularization) and
                measuring the effect on EWC benefit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">
            10. Limitations and External Validity
          </h2>
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
            <div className="space-y-4 text-[15px] text-gray-400 leading-relaxed">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-medium text-sm mb-2">What we claim</h4>
                  <ul className="space-y-1 text-sm list-disc list-inside">
                    <li>
                      Dataset significantly moderates the H0-EWC benefit relationship
                      (Phase 6, p = 0.046)
                    </li>
                    <li>
                      H0 partial effects on EWC benefit exclude zero on CIFAR-100 and
                      RESISC-45 but not CUB-200
                    </li>
                    <li>
                      On CUB-200, topology provides the only predictive signal for early
                      forgetting (ret@10 CI excludes zero)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-2">What we do not claim</h4>
                  <ul className="space-y-1 text-sm list-disc list-inside">
                    <li>
                      That topology universally predicts forgetting (RESISC-45 null)
                    </li>
                    <li>
                      That the EWC moderation finding is confirmatory (it emerged from
                      exploratory analysis)
                    </li>
                    <li>
                      That basin fragmentation is an established causal mechanism
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-white font-medium text-sm mb-2">Scope limitations</h4>
                <ul className="space-y-1 text-sm list-disc list-inside">
                  <li>
                    <span className="text-amber-300">19 architectures:</span> moderate
                    statistical power; WRN width ladder controls for family but has
                    limited within-ladder degrees of freedom
                  </li>
                  <li>
                    <span className="text-amber-300">One mitigation method:</span> only
                    EWC tested; if H0 does not predict benefit under Synaptic Intelligence
                    or PackNet, the finding is EWC-specific
                  </li>
                  <li>
                    <span className="text-amber-300">2D projections:</span> topology
                    computed on 2D landscape cross-sections, not the full high-dimensional
                    landscape; 5 slices mitigate but do not eliminate sampling variance
                  </li>
                  <li>
                    <span className="text-amber-300">Borderline p-values:</span> EWC
                    moderation p = 0.046, forgetting ret@100 p = 0.035; CUB-200
                    ret@10 p = 0.037 does not survive Bonferroni
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="text-white font-medium text-sm mb-2">Falsification targets</h4>
                <ol className="space-y-1 text-sm list-decimal list-inside">
                  <li>
                    Synaptic Intelligence benefit shows no H0 correlation on CIFAR-100
                    or RESISC-45 (mechanism is EWC-specific)
                  </li>
                  <li>
                    Adding 10+ architectures eliminates the CUB-200 ret@10 signal
                    (forgetting prediction claim fails)
                  </li>
                  <li>
                    Landscape intervention (e.g., SAM) changes H0 without changing EWC
                    benefit (causal link is broken)
                  </li>
                  <li>
                    Cubical persistence disagrees with Ripser-based H0 on the
                    moderation result (measurement is method-dependent)
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Transparency */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">
            11. Analysis Path Transparency
          </h2>
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
            <div className="space-y-4 text-[15px] text-gray-400 leading-relaxed">
              <p>
                The original hypothesis targeted topology as a direct predictor of
                forgetting. Retention at step 10 was pre-specified as the primary
                outcome, with ret@100 and early AURC as robustness checks.
              </p>
              <p>
                CIFAR-100 was run first and showed parameter count dominates
                (topology null, p = 0.295). CUB-200 was run second and showed topology
                rescues prediction (p = 0.037). RESISC-45 was run third and returned
                a null for topology (p = 0.566), falsifying the simpler
                &ldquo;topology helps on hard tasks&rdquo; framing.
              </p>
              <p>
                The EWC benefit analysis was computed as part of Phase 4 diagnostics,
                not as the original target hypothesis. The shift from
                &ldquo;topology predicts forgetting&rdquo; to &ldquo;topology predicts
                mitigation benefit&rdquo; emerged from the data after the RESISC-45
                null. The Phase 6 pooled interaction model was designed post hoc to
                formalize the cross-dataset moderation pattern.
              </p>
              <p className="text-white font-medium">
                The EWC moderation finding (p = 0.046) should be interpreted as a
                data-driven discovery requiring pre-registered replication, not as a
                confirmatory result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reproducibility */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">
            12. Reproducibility and Infrastructure
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
                  <li>GUDHI (cubical PH validation)</li>
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
                  <li>Flask dashboard for experiment management</li>
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

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Research Findings — Topological Signatures of Knowledge Persistence",
  description:
    "EXP-01 results: loss landscape topology correlates with catastrophic forgetting resistance across five architectures. ViT-Small shows unique retention.",
  keywords: [
    "topological data analysis",
    "catastrophic forgetting",
    "persistent homology",
    "loss landscape topology",
    "continual learning",
    "cross-architecture analysis",
    "neural network topology",
    "Betti numbers",
    "knowledge retention",
    "Vision Transformer",
    "ResNet",
    "MLP-Mixer",
    "WideResNet",
    "Split-CIFAR-100",
    "Spearman correlation",
    "preliminary results",
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

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-400/60">
              RESEARCH OUTPUT
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
              EXP-01 &middot; PERSIST
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-medium">
              Preliminary
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Topological Signatures of Knowledge Persistence in Continual
            Learning Systems
          </h1>

          <p className="text-sm text-gray-500 mb-6">
            Axion Deep Labs &middot; February 2026 &middot; Working Paper
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
              network&apos;s loss landscape — characterized via persistent
              homology — predicts its resistance to catastrophic forgetting
              during sequential task training. Across five architecture families
              (ResNet-18, ResNet-50, ViT-Small, WideResNet-28-10, MLP-Mixer)
              trained on Split-CIFAR-100, we compute H₀ persistent homology of
              loss landscapes sampled around converged weight configurations
              using filter-normalized perturbations (Li et al., 2018). We find
              that H₀ total persistence varies systematically across
              architectures (range: 1,639–4,254) and shows preliminary
              correlation with knowledge retention during sequential training
              (Spearman ρ = 0.866, n = 3). Notably, ViT-Small exhibits 2×
              higher H₀ persistence than any convolutional architecture and is
              the only architecture with measurable Task A retention (0.84%)
              after 10,000 steps of Task B training. Model parameter count does
              not predict topological structure: ResNet-50 (23.6M parameters)
              shows lower H₀ persistence than ResNet-18 (11M parameters). Three
              additional architectures are pending to reach statistical
              significance (n = 8). Publication target: NeurIPS / ICML
              (Continual Learning track).
            </p>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">
            1. Background &amp; Motivation
          </h2>
          <div className="space-y-4 text-[15px] text-gray-400 leading-relaxed">
            <p>
              Catastrophic forgetting — the tendency of neural networks to lose
              previously learned knowledge when trained on new tasks — remains
              one of the most fundamental unsolved problems in machine learning
              (McCloskey &amp; Cohen, 1989). Every major mitigation strategy
              (replay buffers, elastic weight consolidation, progressive
              networks) manages the symptom rather than addressing the underlying
              geometric cause.
            </p>
            <p>
              Separately, Topological Data Analysis (TDA) has emerged as a tool
              for characterizing loss landscape geometry (Ballester &amp; Araujo,
              2020). Persistent homology extracts scale-invariant topological
              features — connected components (H₀), loops (H₁), voids (H₂) —
              that survive across multiple scales of filtration.
            </p>
            <p className="text-emerald-300/80 font-medium">
              No published work has connected these two fields. This experiment
              tests whether the topological depth of learned representations
              predicts their survivability during continual learning.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">2. Methodology</h2>

          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-6">
            <h3 className="font-semibold text-white mb-3">Experimental Setup</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Dataset
                </h4>
                <p>
                  Split-CIFAR-100: Task A (classes 0–49, 25,000 train / 5,000
                  test), Task B (classes 50–99, 25,000 train / 5,000 test).
                  Standard augmentation (random crop, horizontal flip,
                  normalization).
                </p>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Training
                </h4>
                <p>
                  SGD with momentum (0.9), weight decay 5×10⁻⁴, cosine
                  annealing with warmup (5–10 epochs), batch size 128.
                  Task A: 100 epochs to convergence. Task B: 10,000 steps of
                  continuous training.
                </p>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Loss Landscape Sampling
                </h4>
                <p>
                  25×25 grid (625 evaluation points) along 2 filter-normalized
                  random directions (Li et al., 2018). Range: [−1.0, 1.0].
                  Sublevel set filtration with lower-star construction: edge
                  weight = max(loss_i, loss_j).
                </p>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Persistent Homology
                </h4>
                <p>
                  Computed via Ripser (sparse mode). Dimensions: H₀ (connected
                  components), H₁ (loops). Primary metric: total persistence
                  Σ(death_i − birth_i) for all H₀ features. Seed: 42
                  (deterministic across all runs).
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h3 className="font-semibold text-white mb-3">
              Architectures Under Study
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    <th className="pb-2 text-gray-500 font-medium">Architecture</th>
                    <th className="pb-2 text-gray-500 font-medium">Parameters</th>
                    <th className="pb-2 text-gray-500 font-medium">Family</th>
                    <th className="pb-2 text-gray-500 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-white/5">
                    <td className="py-2">ResNet-18</td>
                    <td className="py-2">~11M</td>
                    <td className="py-2">CNN</td>
                    <td className="py-2 text-emerald-300">Complete</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">ResNet-50</td>
                    <td className="py-2">~23.6M</td>
                    <td className="py-2">CNN</td>
                    <td className="py-2 text-emerald-300">Complete</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">ViT-Small</td>
                    <td className="py-2">~3M</td>
                    <td className="py-2">Transformer</td>
                    <td className="py-2 text-emerald-300">Complete</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">WideResNet-28-10</td>
                    <td className="py-2">~36.5M</td>
                    <td className="py-2">CNN (Wide)</td>
                    <td className="py-2 text-emerald-300">Complete</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">MLP-Mixer</td>
                    <td className="py-2">~2.3M</td>
                    <td className="py-2">MLP</td>
                    <td className="py-2 text-emerald-300">Complete</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">ResNet-18 Wide</td>
                    <td className="py-2">~44M</td>
                    <td className="py-2">CNN (Wide)</td>
                    <td className="py-2 text-amber-300">Phase 1</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">DenseNet-121</td>
                    <td className="py-2">~7M</td>
                    <td className="py-2">CNN (Dense)</td>
                    <td className="py-2 text-gray-500">Pending</td>
                  </tr>
                  <tr>
                    <td className="py-2">EfficientNet-B0</td>
                    <td className="py-2">~5.3M</td>
                    <td className="py-2">CNN (Compound)</td>
                    <td className="py-2 text-gray-500">Pending</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">
            3. Results
          </h2>

          {/* Figure 1: Loss Landscape Topology */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-2">
              Figure 1. Topological Features of the Loss Landscape at
              Convergence on Task A
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Loss surface visualizations and persistent homology H₀ features
              across architecture families. Higher H₀ total persistence
              indicates deeper topological structure in the loss landscape
              around converged weights.
            </p>
            <div className="rounded-xl overflow-hidden bg-black/30 border border-white/5">
              <Image
                src="/images/research/exp01-loss-landscape-topology.png"
                alt="Topological features of neural network loss landscapes at convergence on Task A (Split-CIFAR-100). Compares H₀ persistent homology across ResNet-18, ResNet-50, ViT-Small, WideResNet-28-10, and MLP-Mixer architectures. ViT-Small shows highest total persistence (4,254.2), indicating deeper topological structure than convolutional architectures."
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Figure 2: Forgetting Curves */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-2">
              Figure 2. Task A Accuracy and Retention During Sequential Task B
              Training
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Forgetting curves showing Task A test accuracy at evaluation
              checkpoints during Task B training (steps 100, 500, 1,000, 5,000,
              10,000, 25,000). ViT-Small is the only architecture with
              measurable retention beyond step 500.
            </p>
            <div className="rounded-xl overflow-hidden bg-black/30 border border-white/5">
              <Image
                src="/images/research/exp01-forgetting-curves.png"
                alt="Task A accuracy retention curves during sequential Task B training on Split-CIFAR-100. All convolutional architectures (ResNet-18, ResNet-50, WRN-28-10) and MLP-Mixer drop to 0% retention by step 500. ViT-Small maintains gradual decay from 6.0% to 0.84% over 25,000 steps, demonstrating uniquely persistent knowledge retention."
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Results Table */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/15 p-6 mb-8">
            <h3 className="font-semibold text-white mb-4">
              Table 1. Cross-Architecture Results Summary (n = 5 Completed)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-emerald-500/20 text-left">
                    <th className="pb-3 text-gray-400 font-medium">Architecture</th>
                    <th className="pb-3 text-gray-400 font-medium">Params</th>
                    <th className="pb-3 text-gray-400 font-medium">Task A Acc.</th>
                    <th className="pb-3 text-gray-400 font-medium">H₀ Persistence</th>
                    <th className="pb-3 text-gray-400 font-medium">H₀ Count</th>
                    <th className="pb-3 text-gray-400 font-medium">Retention @10k</th>
                    <th className="pb-3 text-gray-400 font-medium">Landscape Time</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 text-emerald-300 font-medium">ViT-Small</td>
                    <td className="py-2.5">~3M</td>
                    <td className="py-2.5">62.2%</td>
                    <td className="py-2.5 font-mono text-emerald-300">4,254.2</td>
                    <td className="py-2.5 font-mono">624</td>
                    <td className="py-2.5 text-emerald-300 font-medium">0.84%</td>
                    <td className="py-2.5">121.2s</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5">MLP-Mixer</td>
                    <td className="py-2.5">~2.3M</td>
                    <td className="py-2.5">61.5%</td>
                    <td className="py-2.5 font-mono">3,758.8</td>
                    <td className="py-2.5 font-mono">624</td>
                    <td className="py-2.5">0.0%</td>
                    <td className="py-2.5">162.1s</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5">WRN-28-10</td>
                    <td className="py-2.5">~36.5M</td>
                    <td className="py-2.5">84.0%</td>
                    <td className="py-2.5 font-mono">2,272.6</td>
                    <td className="py-2.5 font-mono">624</td>
                    <td className="py-2.5">0.0%</td>
                    <td className="py-2.5">999.8s</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5">ResNet-18</td>
                    <td className="py-2.5">~11M</td>
                    <td className="py-2.5">82.0%</td>
                    <td className="py-2.5 font-mono">2,151.5</td>
                    <td className="py-2.5 font-mono">624</td>
                    <td className="py-2.5">0.0%</td>
                    <td className="py-2.5">133.8s</td>
                  </tr>
                  <tr>
                    <td className="py-2.5">ResNet-50</td>
                    <td className="py-2.5">~23.6M</td>
                    <td className="py-2.5">83.6%</td>
                    <td className="py-2.5 font-mono">1,639.0</td>
                    <td className="py-2.5 font-mono">624</td>
                    <td className="py-2.5">0.0%</td>
                    <td className="py-2.5">477.4s</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Correlation */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
            <h3 className="font-semibold text-white mb-3">
              Preliminary Correlation Analysis
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
              <div>
                <h4 className="text-emerald-300 font-semibold mb-2">
                  Spearman Rank Correlation (n = 3)
                </h4>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400/40 shrink-0" />
                    <span>
                      H₀ total persistence vs. retention ratio: <span className="text-white font-mono">ρ = 0.866</span>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400/40 shrink-0" />
                    <span>
                      p-value: <span className="font-mono">0.333</span> (not yet significant — requires n ≥ 5 with variance in retention)
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400/40 shrink-0" />
                    <span>
                      Rank ordering matches hypothesis: highest H₀ → highest retention
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-amber-300 font-semibold mb-2">
                  Limitations &amp; Next Steps
                </h4>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-amber-400/40 shrink-0" />
                    <span>
                      Currently n = 3 for correlation (only 3 architectures had non-degenerate data when first computed)
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-amber-400/40 shrink-0" />
                    <span>
                      3 architectures pending (ResNet-18 Wide, DenseNet-121, EfficientNet-B0) to reach n = 8
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-amber-400/40 shrink-0" />
                    <span>
                      Baseline metrics (Hessian trace, Fisher information, loss barrier) being retroactively computed for early runs
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
            4. Key Findings
          </h2>
          <div className="space-y-4">
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-emerald-300 mb-2">
                Finding 1: Topology varies systematically across architecture families
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                H₀ total persistence spans a 2.6× range across architectures
                (1,639 for ResNet-50 to 4,254 for ViT-Small). This variation is
                not random — it clusters by architecture family: attention-based
                (ViT) and token-mixing (MLP-Mixer) architectures show
                consistently higher H₀ than convolutional architectures,
                regardless of depth or width.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-emerald-300 mb-2">
                Finding 2: Model size does not predict topological structure
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                ResNet-50 (23.6M parameters) has the{" "}
                <span className="text-white">lowest</span> H₀ persistence of
                any completed architecture. WideResNet-28-10 (36.5M parameters)
                ranks third. ViT-Small (3M parameters) ranks first. This
                confirms that persistent homology captures geometric properties
                of the loss landscape that are orthogonal to model capacity as
                measured by parameter count.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-emerald-300 mb-2">
                Finding 3: ViT-Small is uniquely resistant to catastrophic forgetting
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                After 10,000 steps of Task B training, ViT-Small retains 0.84%
                Task A accuracy — the only architecture with any measurable
                retention. All convolutional architectures and MLP-Mixer drop to
                0.0% by step 500. ViT-Small&apos;s forgetting curve shows
                gradual decay (6.0% → 0.84% over 25,000 steps) rather than the
                catastrophic collapse seen in other families.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="font-semibold text-amber-300 mb-2">
                Open Question: MLP-Mixer anomaly
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                MLP-Mixer shows high H₀ persistence (3,758.8 — second highest)
                but zero retention. This suggests that H₀ persistence may be
                necessary but not sufficient for forgetting resistance, or that
                the attention mechanism in ViT provides an additional protective
                property beyond topological depth. Further investigation with
                the remaining architectures will help disambiguate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reproducibility */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">
            5. Reproducibility &amp; Infrastructure
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
                  <li>Deterministic seeding (seed = 42)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Topology
                </h4>
                <ul className="space-y-1">
                  <li>Ripser (persistent homology, sparse mode)</li>
                  <li>scikit-tda ecosystem</li>
                  <li>Gudhi (secondary validation)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Tracking &amp; Versioning
                </h4>
                <ul className="space-y-1">
                  <li>ClearML (self-hosted, Apache 2.0)</li>
                  <li>Version-controlled YAML configs</li>
                  <li>Full dependency pinning (pyproject.toml)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discussion */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">
            6. Discussion &amp; Next Steps
          </h2>
          <div className="space-y-4 text-[15px] text-gray-400 leading-relaxed">
            <p>
              These preliminary results support the hypothesis that loss
              landscape topology carries information about a network&apos;s
              vulnerability to catastrophic forgetting. The correlation between
              H₀ persistence and knowledge retention, while not yet
              statistically significant at n = 3, shows the correct rank
              ordering predicted by the hypothesis.
            </p>
            <p>
              The ViT-Small result is particularly compelling: it combines the
              highest topological persistence with the only measurable knowledge
              retention, and does so with the fewest parameters (3M vs. 11–36M
              for other architectures). This suggests that the attention
              mechanism may create fundamentally different loss landscape
              geometry compared to convolution.
            </p>
            <p>
              The MLP-Mixer anomaly (high H₀, zero retention) indicates that
              H₀ alone is likely insufficient as a predictor. H₁ (loops) and
              baseline metrics (Hessian trace, Fisher information) may be needed
              for a complete topological fingerprint. The current 25×25 grid
              resolution yields H₁ = 0 for all architectures — a finer grid or
              alternative landscape sampling may be needed.
            </p>
            <p className="text-white font-medium">
              Immediate next steps:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-sm pl-2">
              <li>
                Complete remaining 3 architectures (ResNet-18 Wide, DenseNet-121,
                EfficientNet-B0) to reach n = 8 for robust Spearman correlation
              </li>
              <li>
                Retroactively compute baseline metrics (Hessian, Fisher) for
                early runs (exp01, exp01_resnet50, exp01_vit)
              </li>
              <li>
                Investigate finer landscape sampling for H₁ features
              </li>
              <li>
                If correlation holds at n = 8: design topological regularizer
                (Phase 5) and prepare manuscript for NeurIPS / ICML submission
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">References</h2>
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
            <ul className="space-y-2">
              <Citation text="Ballester, R. & Araujo, X. (2020). On the interplay between topological data analysis and deep learning. NeurIPS Workshop on TDA." />
              <Citation text="Kirkpatrick, J. et al. (2017). Overcoming catastrophic forgetting in neural networks. PNAS, 114(13), 3521–3526." />
              <Citation text="Li, H. et al. (2018). Visualizing the loss landscape of neural nets. NeurIPS." />
              <Citation text="McCloskey, M. & Cohen, N. J. (1989). Catastrophic interference in connectionist networks. Psychology of Learning and Motivation, 24, 109–165." />
              <Citation text="Otter, N. et al. (2017). A roadmap for the computation of persistent homology. EPJ Data Science, 6(1), 1–38." />
              <Citation text="Tononi, G. & Cirelli, C. (2014). Sleep and the price of plasticity. Neuron, 81(1), 12–34." />
              <Citation text="Kumaran, D. et al. (2016). What learning systems do intelligent agents need? Trends in Cognitive Sciences, 20(7), 512–534." />
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

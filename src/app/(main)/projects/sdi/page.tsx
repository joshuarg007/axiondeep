import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SDI | Structural Divergence Index for Model Version Governance",
  description:
    "SDI predicts performance degradation in fine-tuned foundation models without running full benchmark suites. Combines spectral analysis, representation drift, curvature shift, and weight geometry into a single risk score.",
  keywords: [
    "model governance",
    "fine-tuning degradation",
    "structural divergence",
    "model risk",
    "LLM evaluation",
    "spectral analysis",
    "CKA",
    "model version control",
    "AI safety",
    "MLOps",
  ],
  alternates: { canonical: "/projects/sdi" },
};

export default function SDIPage() {
  return (
    <div className="no-snap min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
              R&amp;D
            </span>
            <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
              NSF SBIR Phase I
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            SDI: Structural Divergence Index
          </h1>
          <p className="text-xl text-blue-400 font-medium mb-4">
            Predicting fine-tuning degradation from model structure, not
            benchmarks.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            SDI is a composite metric that quantifies geometric and spectral
            shifts between a base model and its fine-tuned variant. It predicts
            performance degradation without running full benchmark suites,
            requiring only lightweight probe inference. The goal: reduce model
            validation from hours of GPU benchmarking to minutes of structural
            analysis.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
            <p className="text-3xl font-bold text-blue-400">&lt;10min</p>
            <p className="text-sm text-gray-500 mt-1">Scan Time (7B Models)</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
            <p className="text-3xl font-bold text-blue-400">4</p>
            <p className="text-sm text-gray-500 mt-1">Structural Signals</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
            <p className="text-3xl font-bold text-blue-400">5</p>
            <p className="text-sm text-gray-500 mt-1">Model Families</p>
          </div>
        </div>

        {/* The Problem */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/10">
            <p className="text-gray-400 leading-relaxed mb-4">
              Fine-tuning foundation models introduces unpredictable behavioral
              regressions. A model fine-tuned for medical question answering
              might lose its ability to follow instructions. A model adapted for
              code generation might start hallucinating more. Organizations
              discover these regressions only after running expensive benchmark
              suites or, worse, after deployment.
            </p>
            <p className="text-gray-400 leading-relaxed">
              A single benchmark pass on a 7B parameter model takes hours of GPU
              time. Organizations running dozens of fine-tunes per week cannot
              evaluate every candidate. The result: degraded models reach
              production.
            </p>
          </div>
        </section>

        {/* How SDI Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            How SDI Works
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
              <h3 className="font-semibold text-blue-300 mb-2">
                Spectral Divergence
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                SVD of each layer&apos;s weight matrix before and after
                fine-tuning. Measures structural deformation of the learned
                transformation, not just magnitude of change.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
              <h3 className="font-semibold text-blue-300 mb-2">
                Representation Drift (CKA)
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Centered Kernel Alignment between base and fine-tuned model
                activations on a fixed 1,000-sample probe set. Detects whether
                internal representations have shifted.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
              <h3 className="font-semibold text-blue-300 mb-2">
                Curvature Shift
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Hessian trace estimates via Hutchinson&apos;s stochastic
                estimator at both checkpoints. Detects sharp-to-flat transitions
                that correlate with generalization changes.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
              <h3 className="font-semibold text-blue-300 mb-2">
                Weight Geometry
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Per-layer L2 distance normalized by layer size, weighted by
                layer depth. Captures raw magnitude of parameter shift across
                the network.
              </p>
            </div>
          </div>
        </section>

        {/* Scientific Foundation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Scientific Foundation
          </h2>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/10">
            <p className="text-gray-400 leading-relaxed mb-4">
              SDI combines four independently replicated research results. No
              novel theoretical claims required. The innovation is engineering
              known signals into a validated predictive governance tool.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                Martin &amp; Mahoney (2021). Implicit self-regularization in
                deep neural networks. <em className="text-gray-500">JMLR</em>.
              </li>
              <li>
                Kornblith et al. (2019). Similarity of neural network
                representations revisited.{" "}
                <em className="text-gray-500">ICML</em>.
              </li>
              <li>
                Keskar et al. (2017). On large-batch training for deep learning:
                generalization gap and sharp minima.{" "}
                <em className="text-gray-500">ICLR</em>.
              </li>
              <li>
                Aghajanyan et al. (2021). Intrinsic dimensionality explains the
                effectiveness of language model fine-tuning.{" "}
                <em className="text-gray-500">ACL</em>.
              </li>
            </ul>
          </div>
        </section>

        {/* Phase I Plan */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Phase I Plan (NSF SBIR, $305K, 9 Months)
          </h2>
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/10">
              <h3 className="font-semibold text-white mb-2">
                Objective 1: Define and Formalize SDI
              </h3>
              <p className="text-sm text-gray-400">
                Mathematical specification and reproducible computation
                pipeline. Open-source implementation. Under 10 minutes for 7B
                models.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/10">
              <h3 className="font-semibold text-white mb-2">
                Objective 2: Fine-Tune Regression Dataset
              </h3>
              <p className="text-sm text-gray-400">
                50+ base-to-fine-tune pairs across 5 model families (Llama,
                Mistral, Phi, Gemma, Qwen). Domain, instruction, and
                deliberately degraded fine-tunes. Full benchmark evaluation on
                both endpoints.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/10">
              <h3 className="font-semibold text-white mb-2">
                Objective 3: Validate Predictive Correlation
              </h3>
              <p className="text-sm text-gray-400">
                Spearman rho &ge; 0.7 between SDI and degradation magnitude
                across MMLU, IFEval, ToxiGen, and TruthfulQA. False negative
                rate &lt; 15% for high-regression cases.
              </p>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Axion-Deep-Labs/structural-divergence-index"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:opacity-90 transition"
            >
              GitHub Repository
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-white/[0.06] border border-white/[0.1] text-white font-semibold hover:bg-white/[0.1] transition"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Back */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/projects" className="text-gray-400 hover:text-white transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

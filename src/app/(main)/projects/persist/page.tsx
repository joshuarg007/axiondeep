import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PERSIST | Predicting Catastrophic Forgetting Before Retraining",
  description:
    "PERSIST is a topology-driven system that predicts how a deep learning model will forget under continual learning, and recommends the best mitigation with expected benefit before retraining. Validation underway for medical imaging under FDA PCCP.",
  keywords: [
    "catastrophic forgetting",
    "continual learning",
    "topological data analysis",
    "persistent homology",
    "FDA PCCP",
    "model governance",
    "NSF SBIR",
  ],
  alternates: { canonical: "/projects/persist" },
};

export default function PersistPage() {
  return (
    <div className="no-snap min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs px-2 py-1 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
              Active R&amp;D
            </span>
            <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
              NSF SBIR Phase I
            </span>
            <span className="text-xs px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              Medical Imaging
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            PERSIST
          </h1>
          <p className="text-xl text-violet-300 font-medium mb-4">
            Predicting catastrophic forgetting before retraining.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            PERSIST is a topology-driven system that predicts how much a deep learning model
            will forget when retrained on new data, and recommends the best mitigation strategy
            with expected benefit before a single training step is wasted. Initial validation
            target is medical imaging AI under the FDA&apos;s Predetermined Change Control
            Plan (PCCP) framework, where every model update has to be justifiable to a regulator.
          </p>
        </div>

        {/* The problem */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">The problem we&apos;re solving</h2>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/[0.08] to-blue-500/[0.04] border border-white/[0.08]">
            <p className="text-gray-400 leading-relaxed mb-4">
              Deep learning models forget. When you fine-tune a model on new data, it tends
              to lose performance on the data it learned from before. This is called
              catastrophic forgetting, and it is a real and unsolved problem for any team
              that has to ship model updates over time. Self-driving stacks, medical imaging
              classifiers, foundation-model fine-tunes, and continually learning agents all
              hit it.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              The standard playbook is to retrain, run a benchmark suite, see how bad the
              regression is, then try a mitigation strategy and retrain again. That cycle
              burns GPU time and produces noisy results. In regulated settings, like medical
              imaging under the FDA&apos;s PCCP framework, it produces a paper trail that
              auditors will challenge.
            </p>
            <p className="text-gray-400 leading-relaxed">
              PERSIST is the opposite approach: predict the forgetting and recommend the
              mitigation before the retrain happens.
            </p>
          </div>
        </div>

        {/* Approach */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">The approach</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/10">
              <h3 className="font-semibold text-white mb-2">Topology of the loss landscape</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                We compute persistent homology over slices of the loss landscape around the
                trained model. The result is a small set of topological features that
                describe how fragmented or smooth the landscape is around the operating
                point. These features turn out to carry strong predictive signal about how
                the model will respond to additional training.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/10">
              <h3 className="font-semibold text-white mb-2">Forgetting prediction</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                A trained predictor takes those topological features plus standard model
                statistics and produces a forecast of expected retention loss under continual
                training. The point is not to predict perfectly. The point is to produce a
                calibrated risk estimate that beats the baseline of running the actual
                retrain.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/10">
              <h3 className="font-semibold text-white mb-2">Mitigation recommendation</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Beyond prediction, PERSIST recommends which mitigation strategy is most
                likely to help, and by how much. EWC regularization, replay, distillation,
                and parameter-isolation methods are scored against the topology of the model
                being updated. Strong topological signal in early experiments shows that
                some mitigations help dramatically on fragmented landscapes and barely at
                all on smooth ones.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-transparent border border-fuchsia-500/10">
              <h3 className="font-semibold text-white mb-2">FDA PCCP-aligned outputs</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Every prediction comes with provenance: model fingerprint, dataset
                fingerprint, topological feature vector, predicted retention loss, and
                recommended mitigation with expected benefit. The output is structured for
                inclusion in a Predetermined Change Control Plan submission.
              </p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Where it stands</h2>
          <div className="space-y-4">
            <div className="rounded-xl bg-white/[0.02] border border-violet-500/10 p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-200 border border-emerald-400/30">
                  Phase I-A · Complete
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Scale validation on ImageNet-100. Eight architectures spanning ResNet,
                ConvNeXt, EfficientNet, DenseNet, and ViT families. Topological signal
                replicates and strengthens at scale. Core findings published in the
                research codebase.
              </p>
            </div>
            <div className="rounded-xl bg-white/[0.02] border border-blue-500/10 p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-200 border border-amber-400/30">
                  Phase I-B · In Progress
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Cross-dataset forgetting sweep. 114 configurations covering six ordered
                dataset pairs across 19 architectures. Mixed-effects analysis identifies
                where topology is load-bearing and where it isn&apos;t. Findings are being
                written up for arXiv.
              </p>
            </div>
            <div className="rounded-xl bg-white/[0.02] border border-cyan-500/10 p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-violet-500/20 text-violet-200 border border-violet-400/30">
                  NSF SBIR · Phase I Application
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Phase I plan targets medical imaging AI under FDA PCCP requirements.
                Personnel, budget, NMSU subaward, and academic advisor commitments locked
                in. Application materials are in active development.
              </p>
            </div>
          </div>
        </div>

        {/* Compute */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">How it&apos;s being run</h2>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/[0.08] to-violet-500/[0.04] border border-white/[0.08]">
            <p className="text-gray-400 leading-relaxed mb-4">
              PERSIST runs on the NMSU Discovery HPC cluster with NVIDIA A100-PCIE-40GB
              GPUs. The full Phase I-A and Phase I-B sweep covers 19 architectures from
              0.3M to 44.7M parameters across three datasets (CIFAR-100, CUB-200-2011, and
              NWPU-RESISC-45) plus the ImageNet-100 scale-validation set. Every experiment
              is reproducible from a config file and a seed.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The codebase is open source under MIT license. Phase I-B raw artifacts
              include 1,824 step checkpoints across the cross-dataset sweep, available for
              independent re-analysis.
            </p>
          </div>
        </div>

        {/* Markets */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Where it goes commercially</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <p className="text-xs uppercase tracking-wider text-violet-300 font-semibold mb-2">Primary</p>
              <h3 className="font-semibold text-white mb-2">Medical imaging</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                FDA PCCP-eligible classifiers and segmentation models. Every retrain must
                be predictable and auditable.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <p className="text-xs uppercase tracking-wider text-blue-300 font-semibold mb-2">Adjacent</p>
              <h3 className="font-semibold text-white mb-2">Foundation-model fine-tuning</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Predicting which fine-tunes will catastrophically regress the base model
                before paying the GPU bill.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <p className="text-xs uppercase tracking-wider text-cyan-300 font-semibold mb-2">Long-tail</p>
              <h3 className="font-semibold text-white mb-2">Autonomy + manufacturing vision</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Continual-learning stacks where every model swap is a deployment risk.
              </p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/research/persist/findings"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 font-semibold text-white hover:opacity-90 transition shadow-lg shadow-violet-500/30"
          >
            Read the findings
          </Link>
          <a
            href="https://github.com/Axion-Deep-Labs/persist-topological-forgetting"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-white/20 font-medium text-white hover:bg-white/5 transition flex items-center gap-2"
          >
            View on GitHub
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

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

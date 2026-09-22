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
    <div className="obs-page">
      <div className="obs-container">
        {/* Header */}
        <span className="obs-eyebrow line">EXP-01 &middot; Active R&amp;D</span>
        <h1 className="obs-h1">
          <span className="g">PERSIST</span>
        </h1>
        <p
          className="obs-lead"
          style={{ marginTop: 18, color: "var(--violet)", fontWeight: 500 }}
        >
          Predicting catastrophic forgetting before retraining.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginTop: 22,
          }}
        >
          <span className="obs-chip">NSF SBIR Phase I</span>
          <span className="obs-chip">Medical Imaging</span>
          <span className="obs-chip live">Active R&amp;D</span>
        </div>
        <p className="obs-lead">
          PERSIST is a topology-driven system that predicts how much a deep learning
          model will forget when retrained on new data, and recommends the best
          mitigation strategy with expected benefit before a single training step is
          wasted. Initial validation target is medical imaging AI under the FDA&apos;s
          Predetermined Change Control Plan (PCCP) framework, where every model update
          has to be justifiable to a regulator.
        </p>

        {/* The problem */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">The problem</span>
            <h2 className="obs-h2">The problem we&apos;re solving</h2>
          </div>
          <div className="obs-prose">
            <p>
              Deep learning models forget. When you fine-tune a model on new data, it
              tends to lose performance on the data it learned from before. This is
              called catastrophic forgetting, and it is a real and unsolved problem for
              any team that has to ship model updates over time. Self-driving stacks,
              medical imaging classifiers, foundation-model fine-tunes, and continually
              learning agents all hit it.
            </p>
            <p>
              The standard playbook is to retrain, run a benchmark suite, see how bad the
              regression is, then try a mitigation strategy and retrain again. That cycle
              burns GPU time and produces noisy results. In regulated settings, like
              medical imaging under the FDA&apos;s PCCP framework, it produces a paper
              trail that auditors will challenge.
            </p>
            <p>
              <strong>
                PERSIST is the opposite approach: predict the forgetting and recommend
                the mitigation before the retrain happens.
              </strong>
            </p>
          </div>
        </section>

        {/* Approach */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">The approach</span>
            <h2 className="obs-h2">How it works</h2>
          </div>
          <div className="obs-grid obs-grid-2">
            <div className="obs-card">
              <h3>Topology of the loss landscape</h3>
              <p>
                We compute persistent homology over slices of the loss landscape around
                the trained model. The result is a small set of topological features that
                describe how fragmented or smooth the landscape is around the operating
                point. These features turn out to carry strong predictive signal about
                how the model will respond to additional training.
              </p>
            </div>
            <div className="obs-card">
              <h3>Forgetting prediction</h3>
              <p>
                A trained predictor takes those topological features plus standard model
                statistics and produces a forecast of expected retention loss under
                continual training. The point is not to predict perfectly. The point is
                to produce a calibrated risk estimate that beats the baseline of running
                the actual retrain.
              </p>
            </div>
            <div className="obs-card">
              <h3>Mitigation recommendation</h3>
              <p>
                Beyond prediction, PERSIST recommends which mitigation strategy is most
                likely to help, and by how much. EWC regularization, replay,
                distillation, and parameter-isolation methods are scored against the
                topology of the model being updated. Strong topological signal in early
                experiments shows that some mitigations help dramatically on fragmented
                landscapes and barely at all on smooth ones.
              </p>
            </div>
            <div className="obs-card">
              <h3>FDA PCCP-aligned outputs</h3>
              <p>
                Every prediction comes with provenance: model fingerprint, dataset
                fingerprint, topological feature vector, predicted retention loss, and
                recommended mitigation with expected benefit. The output is structured
                for inclusion in a Predetermined Change Control Plan submission.
              </p>
            </div>
          </div>
        </section>

        {/* Status */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">Status</span>
            <h2 className="obs-h2">Where it stands</h2>
          </div>
          <div className="obs-grid">
            <div className="obs-card">
              <div style={{ marginBottom: 12 }}>
                <span className="obs-chip live">Phase I-A &middot; Complete</span>
              </div>
              <p>
                Scale validation on ImageNet-100. Eight architectures spanning ResNet,
                ConvNeXt, EfficientNet, DenseNet, and ViT families. Topological signal
                replicates and strengthens at scale. Core findings published in the
                research codebase.
              </p>
            </div>
            <div className="obs-card">
              <div style={{ marginBottom: 12 }}>
                <span className="obs-chip">Phase I-B &middot; In Progress</span>
              </div>
              <p>
                Cross-dataset forgetting sweep. 114 configurations covering six ordered
                dataset pairs across 19 architectures. Mixed-effects analysis identifies
                where topology is load-bearing and where it isn&apos;t. Findings are being
                written up for arXiv.
              </p>
            </div>
            <div className="obs-card">
              <div style={{ marginBottom: 12 }}>
                <span className="obs-chip">NSF SBIR &middot; Phase I Application</span>
              </div>
              <p>
                Phase I plan targets medical imaging AI under FDA PCCP requirements.
                Personnel, budget, NMSU subaward, and academic advisor commitments locked
                in. Application materials are in active development.
              </p>
            </div>
          </div>
        </section>

        {/* Compute */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">Infrastructure</span>
            <h2 className="obs-h2">How it&apos;s being run</h2>
          </div>
          <div className="obs-prose">
            <p>
              PERSIST runs on the NMSU Discovery HPC cluster with NVIDIA A100-PCIE-40GB
              GPUs. The full Phase I-A and Phase I-B sweep covers 19 architectures from
              0.3M to 44.7M parameters across three datasets (CIFAR-100, CUB-200-2011,
              and NWPU-RESISC-45) plus the ImageNet-100 scale-validation set. Every
              experiment is reproducible from a config file and a seed.
            </p>
            <p>
              The codebase is open source under MIT license. Phase I-B raw artifacts
              include 1,824 step checkpoints across the cross-dataset sweep, available
              for independent re-analysis.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24 }}>
            <span className="obs-metric">
              Architectures <b>19</b>
            </span>
            <span className="obs-metric">
              Parameter range <b>0.3M&ndash;44.7M</b>
            </span>
            <span className="obs-metric">
              Datasets <b>4</b>
            </span>
            <span className="obs-metric">
              Step checkpoints <b>1,824</b>
            </span>
            <span className="obs-metric">
              License <b>MIT</b>
            </span>
          </div>
        </section>

        {/* Markets */}
        <section className="obs-section">
          <div className="obs-sec-head">
            <span className="obs-eyebrow">Commercial path</span>
            <h2 className="obs-h2">Where it goes commercially</h2>
          </div>
          <div className="obs-grid obs-grid-3">
            <div className="obs-card">
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  textTransform: "uppercase",
                  letterSpacing: ".14em",
                  fontSize: 11,
                  color: "var(--violet)",
                  margin: "0 0 10px",
                }}
              >
                Primary
              </p>
              <h3>Medical imaging</h3>
              <p>
                FDA PCCP-eligible classifiers and segmentation models. Every retrain must
                be predictable and auditable.
              </p>
            </div>
            <div className="obs-card">
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  textTransform: "uppercase",
                  letterSpacing: ".14em",
                  fontSize: 11,
                  color: "var(--cyan)",
                  margin: "0 0 10px",
                }}
              >
                Adjacent
              </p>
              <h3>Foundation-model fine-tuning</h3>
              <p>
                Predicting which fine-tunes will catastrophically regress the base model
                before paying the GPU bill.
              </p>
            </div>
            <div className="obs-card">
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  textTransform: "uppercase",
                  letterSpacing: ".14em",
                  fontSize: 11,
                  color: "var(--fuchsia)",
                  margin: "0 0 10px",
                }}
              >
                Long-tail
              </p>
              <h3>Autonomy + manufacturing vision</h3>
              <p>
                Continual-learning stacks where every model swap is a deployment risk.
              </p>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="obs-section">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <Link href="/research/persist/findings" className="obs-btn obs-btn-p">
              Read the findings
            </Link>
            <a
              href="https://github.com/Axion-Deep-Labs/persist-topological-forgetting"
              target="_blank"
              rel="noopener noreferrer"
              className="obs-btn obs-btn-g"
            >
              View on GitHub
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* Back */}
          <div style={{ marginTop: 40 }}>
            <Link
              href="/projects"
              className="obs-eyebrow"
              style={{ color: "var(--muted)" }}
            >
              &larr; Back to Projects
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

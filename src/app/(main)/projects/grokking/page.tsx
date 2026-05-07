import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grokking Topology | Early-Warning Signals for Emergent Generalization",
  description:
    "Topological dynamics of grokking: investigating whether persistent homology of loss-landscape slices provides a reliable early-warning signal for emergent generalization in deep learning. Full-scale HPC sweep underway.",
  keywords: [
    "grokking",
    "persistent homology",
    "loss landscape",
    "emergent generalization",
    "modular addition",
    "deep learning",
    "topological data analysis",
  ],
  alternates: { canonical: "/projects/grokking" },
};

export default function GrokkingPage() {
  return (
    <div className="no-snap min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
              Research
            </span>
            <span className="text-xs px-2 py-1 rounded bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">
              Paper in Prep
            </span>
            <span className="text-xs px-2 py-1 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
              HPC Sweep
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
            Grokking Topology
          </h1>
          <p className="text-xl text-fuchsia-300 font-medium mb-4">
            Early-warning signals for emergent generalization.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Grokking is the phenomenon where a neural network, after a long phase of
            apparent overfitting, suddenly snaps into perfect generalization. It is
            disconcerting, it is real, and it is poorly understood. We are investigating
            whether the topology of the loss landscape provides a reliable, early-warning
            signal for grokking, and whether that signal beats simpler scalar proxies like
            weight norm.
          </p>
        </div>

        {/* The question */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">The research question</h2>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/[0.08] to-violet-500/[0.04] border border-white/[0.08]">
            <p className="text-gray-400 leading-relaxed mb-4">
              For the canonical grokking task (modular addition with a small transformer),
              the model can sit at near-zero training loss and chance-level test accuracy
              for tens of thousands of steps before suddenly generalizing. By the time test
              accuracy moves, the dynamics have already happened. Anyone hoping to predict
              or accelerate grokking has to find a signal that fires earlier.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We hypothesized that persistent homology computed over slices of the loss
              landscape near the operating point would carry an earlier and cleaner signal
              than scalar curvature or weight-norm proxies. The full-scale sweep is what
              tests that hypothesis honestly.
            </p>
          </div>
        </div>

        {/* Setup */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Experimental setup</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/10">
              <h3 className="font-semibold text-white mb-2">Task</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Modular addition mod 97 with a one-layer transformer decoder, roughly 302K
                parameters. Canonical grokking testbed where the dynamics are clean and the
                generalization snap is unmistakable.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-transparent border border-fuchsia-500/10">
              <h3 className="font-semibold text-white mb-2">Training</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Full-batch AdamW, lr = 1e-3, varied weight decay, 100K steps. Step
                checkpoints captured throughout, including the entire pre-grokking plateau.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/10">
              <h3 className="font-semibold text-white mb-2">Topological observables</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                H0 total persistence, H0 effective feature count (inverse participation
                ratio), H0 median persistence, H0 persistence entropy. Comparator:
                commutator defect computed full-batch with proper detachment.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/10">
              <h3 className="font-semibold text-white mb-2">Compute</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                NMSU Discovery HPC, A100-PCIE-40GB. Full study is a 90-job constrained
                scaling sweep across 30 seeds and 3 weight-decay values to test reproducibility
                of any signal we find.
              </p>
            </div>
          </div>
        </div>

        {/* Pilot result */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">What the pilot showed</h2>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/[0.06] to-fuchsia-500/[0.04] border border-amber-500/[0.15]">
            <p className="text-gray-400 leading-relaxed mb-4">
              The pilot was a four-seed run designed to gate the full HPC sweep. It produced
              an honest result: on this particular task and at this particular scale, the
              topological signals we tracked were largely redundant with weight norm. Weight
              norm is a simpler, cheaper observable, and on the modular-addition task it
              carries enough of the signal that the topological invariants do not add much.
            </p>
            <p className="text-gray-400 leading-relaxed">
              That is a useful negative result, not a contradiction of the hypothesis. The
              modular-addition task is small. The full study is designed to test whether
              the same redundancy holds across seeds and weight-decay regimes, and whether
              richer or scaled-up tasks expose a regime where topology and weight norm
              diverge.
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Where it stands</h2>
          <div className="space-y-4">
            <div className="rounded-xl bg-white/[0.02] border border-emerald-500/10 p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-200 border border-emerald-400/30">
                  Pilot · Complete
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Four-seed pilot run, analyzed, and documented. Pilot conclusion:
                topological signals largely redundant with weight norm at this scale.
              </p>
            </div>
            <div className="rounded-xl bg-white/[0.02] border border-amber-500/10 p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-200 border border-amber-400/30">
                  Full Sweep · Running
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                30 seeds, 3 weight-decay values, 90 jobs total on NMSU Discovery. Tests
                whether the pilot conclusion holds at scale and whether richer architectures
                or task variations expose a topology-only signal.
              </p>
            </div>
            <div className="rounded-xl bg-white/[0.02] border border-fuchsia-500/10 p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-200 border border-fuchsia-400/30">
                  Paper · In Preparation
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Writeup in preparation regardless of which way the full sweep lands.
                Honest negative results in a fashionable area are worth publishing.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/research/experiments"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 font-semibold text-white hover:opacity-90 transition shadow-lg shadow-fuchsia-500/30"
          >
            See all experiments
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full border border-white/20 font-medium text-white hover:bg-white/5 transition"
          >
            Collaborate with us
          </Link>
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

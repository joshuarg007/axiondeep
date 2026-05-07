import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project DRIFT | Degradation Regimes in Iterated Field Transformations",
  description:
    "Project DRIFT is a long-horizon pure-research program at Axion Deep Labs studying quantum state evolution, operator ordering, and stability thresholds under repeated field transformations. Governed under a 33-document dual-use framework.",
  keywords: [
    "quantum field transformations",
    "operator ordering",
    "stability thresholds",
    "dual-use research",
    "DARPA quantum",
    "fundamental research",
  ],
  alternates: { canonical: "/projects/drift" },
};

export default function DriftPage() {
  return (
    <div className="no-snap min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
              Pure Research
            </span>
            <span className="text-xs px-2 py-1 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
              Long-Horizon
            </span>
            <span className="text-xs px-2 py-1 rounded bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">
              Dual-Use Governed
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
            Project DRIFT
          </h1>
          <p className="text-lg text-violet-300 font-mono mb-4">
            Degradation Regimes In Iterated Field Transformations
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            DRIFT is a pure-research program studying what happens to quantum states under
            repeated, non-trivial field transformations. We work the unglamorous part of the
            problem: operator ordering, decoherence pathways, and the regime boundaries where
            a state moves from recoverable to genuinely degraded. The research is patient,
            the timelines are long, and the deliverables are papers and protocols, not
            products.
          </p>
        </div>

        {/* What we're actually studying */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">What we&apos;re actually studying</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/10">
              <h3 className="font-semibold text-white mb-2">Operator ordering effects</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                When a quantum state passes through a sequence of non-commuting field
                operators, the order matters. We study how that order interacts with state
                preparation, environmental coupling, and measurement-back-action to produce
                or avoid degradation.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/10">
              <h3 className="font-semibold text-white mb-2">Stability thresholds</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Most quantum-state transformations have a regime where small perturbations
                are recoverable and a regime where they cascade. We are mapping where those
                thresholds sit for the families of transformations relevant to error
                correction and metrology.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/10">
              <h3 className="font-semibold text-white mb-2">Iterated dynamics</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Iteration is where toy models stop being toys. Single-shot transformations
                hide fixed-point behavior, attractors, and slow-decay modes that only
                surface under repetition. DRIFT focuses specifically on the iterated case.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-transparent border border-fuchsia-500/10">
              <h3 className="font-semibold text-white mb-2">Degradation taxonomy</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Not all degradation is the same. Coherent drift, incoherent decay,
                state-collapse-to-classical, and basin-jumping each have different
                experimental signatures and different mitigations. We are building a
                cleaner taxonomy of how iterated transformations fail.
              </p>
            </div>
          </div>
        </div>

        {/* Research instruments */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Research instruments</h2>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/[0.08] to-cyan-500/[0.04] border border-white/[0.08]">
            <p className="text-gray-400 leading-relaxed mb-4">
              QUANTA, the quantum-computing education platform built at Axion Deep Labs, is
              also an instrument for DRIFT. QUANTA simulates circuits up to 16 qubits with
              a drag-and-drop builder and real-time Bloch-sphere visualization. The same
              simulator that students use to learn Grover&apos;s algorithm doubles as a
              testbed where we can run iterated-transformation experiments cheaply, log
              every intermediate state, and reproduce findings deterministically.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Education and research code paths are kept strictly separate. The dual-use
              governance framework documents exactly where the instruments converge and
              where they don&apos;t.
            </p>
          </div>
        </div>

        {/* Governance */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Governance</h2>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/[0.08] to-violet-500/[0.04] border border-white/[0.08]">
            <p className="text-gray-400 leading-relaxed mb-4">
              Quantum-computing research has dual-use exposure by default. We treat it that
              way. DRIFT operates under a 33-document governance framework that covers
              language separation between education and research artifacts, contributor
              agreements, export-control review checkpoints, and publication review.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The framework is internal infrastructure, not marketing copy. It exists so
              that when the research produces something interesting, we already know the
              answer to the question of how it gets shared.
            </p>
          </div>
        </div>

        {/* Funding */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Funding posture</h2>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <p className="text-gray-400 leading-relaxed mb-4">
              DRIFT is funded internally today and is targeting external research funding
              from federal R&amp;D agencies appropriate for fundamental quantum work,
              including SBIR/STTR programs, NSF, DOE, and DARPA. The compensation
              structure for founding researchers is points-based and contingent on grant
              funding to align incentives with long-horizon outcomes.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We are not pursuing private capital for DRIFT specifically. The work is too
              early and the returns too patient for a venture timeline. If you are a
              program officer, an academic collaborator, or an applied researcher who
              cares about the iterated regime, we want to talk to you.
            </p>
          </div>
        </div>

        {/* Outputs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">What we publish</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <h3 className="font-semibold text-white mb-2">Papers</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Peer-reviewed and preprint research output. Quality and reproducibility over
                volume.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <h3 className="font-semibold text-white mb-2">Protocols</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Reproducible experimental protocols, configs, and seeds. If a finding cannot
                be reproduced, we treat it as not yet a finding.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <h3 className="font-semibold text-white mb-2">Negative results</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Where the data says no, we say no. Negative-result writeups are part of the
                contract.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 font-semibold text-white hover:opacity-90 transition shadow-lg shadow-violet-500/30"
          >
            Talk to the research team
          </Link>
          <Link
            href="/research"
            className="px-8 py-4 rounded-full border border-white/20 font-medium text-white hover:bg-white/5 transition"
          >
            See all research
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

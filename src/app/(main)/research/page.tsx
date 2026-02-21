import { Metadata } from "next";
import Link from "next/link";
import ResearchPrograms from "@/components/ResearchPrograms";

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

      {/* Research Programs (client component — handles modal interaction) */}
      <ResearchPrograms />

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

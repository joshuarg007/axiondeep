import { Metadata } from "next";
import Link from "next/link";
import { jobs } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Join Our Team",
  description:
    "Join Axion Deep Labs. We assemble researchers, engineers, and experimentalists working on AI, quantum computing, and distributed systems.",
  keywords: [
    "AI research careers",
    "AI research engineer",
    "quantum computing careers",
    "R&D laboratory jobs",
    "research scientist positions",
    "remote research positions",
  ],
  alternates: { canonical: "/careers" },
};

const domains = [
  {
    title: "AI Foundations",
    icon: "\u26A1",
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    lines: [
      "Reasoning systems and cognitive architectures",
      "Evaluation and alignment frameworks",
      "Theory of emergent intelligence",
    ],
  },
  {
    title: "Quantum Algorithms",
    icon: "\u25C8",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/20 hover:border-violet-500/40",
    lines: [
      "Quantum-inspired optimization and simulation",
      "Hybrid Q-classical workflows",
      "Novel circuit approximations",
    ],
  },
  {
    title: "Simulations & XR",
    icon: "\u25C9",
    color: "from-fuchsia-500/20 to-pink-500/10",
    border: "border-fuchsia-500/20 hover:border-fuchsia-500/40",
    lines: [
      "Spatial computing environments",
      "Haptic and embodied interfaces",
      "Synthetic data for model evolution",
    ],
  },
  {
    title: "Distributed Systems",
    icon: "\u2B21",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    lines: [
      "Autonomous distributed systems",
      "Next-gen internet protocols",
      "Real-time graph compute pipelines",
    ],
  },
  {
    title: "Research Infra",
    icon: "\u25C7",
    color: "from-orange-500/20 to-red-500/10",
    border: "border-orange-500/20 hover:border-orange-500/40",
    lines: [
      "Continuous experimentation frameworks",
      "Data observability and provenance",
      "Scalable open science stacks",
    ],
  },
];

const typeColors = {
  "1099": "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400",
  W2: "from-emerald-500/20 to-green-500/10 border-emerald-500/30 text-emerald-400",
  Contract: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400",
};

export default function CareersPage() {
  return (
    <div className="snap-page relative text-gray-300">
      {/* Hero */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-bold tracking-widest uppercase text-lg md:text-xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            JOIN THE LABS
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="text-xl md:text-2xl font-light text-gray-400 tracking-widest mr-3">
              BUILD THE FUTURE OF
            </span>
            <span className="text-white" style={{ textShadow: "0 0 40px rgba(255,255,255,0.4)" }}>
              AI
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              &amp; Quantum Computing
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            We assemble people who redefine computational limits.
          </p>
        </div>
      </section>

      {/* Philosophy + Research Domains */}
      <section className="snap-section min-h-screen flex items-center px-6 py-16">
        <div className="max-w-6xl mx-auto w-full">
          {/* What You'll Work On */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">What You&apos;ll Work On</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <h3 className="font-semibold text-cyan-400 mb-2">Original Research</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Design and execute controlled experiments in deep learning theory, from
                  topological analysis of loss landscapes to information capacity scaling laws.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <h3 className="font-semibold text-violet-400 mb-2">Production Software</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Build and ship research-derived products used by real customers, from AI
                  chat agents to quantum computing education platforms.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <h3 className="font-semibold text-fuchsia-400 mb-2">Experimental Infrastructure</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Develop the tools that make our research reproducible, experiment dashboards,
                  automated pipelines, and GPU cluster management.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <h3 className="font-semibold text-emerald-400 mb-2">Open Science</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Contribute to papers targeting NeurIPS, ICML, and Nature. All code and data
                  are published openly for the research community.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">How We Work</h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                Hybrid research network. Remote-first. Asynchronous. If you prototype at 3 AM to test
                a hypothesis, you&apos;ll fit right in.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We value depth over breadth, rigor over speed, and reproducibility over novelty.
                Every experiment is version-controlled, every result is independently verifiable,
                and every team member has the autonomy to pursue ideas that challenge assumptions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Who We Are</h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                Researchers, engineers, experimentalists. AI theory, quantum computation, systems
                architecture, applied mathematics.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our team spans machine learning research, full-stack engineering, and computational
                physics. We look for people who are equally comfortable reading a NeurIPS paper
                and shipping production code, and who bring intellectual curiosity to both.
              </p>
            </div>
          </div>

          {/* Research Domains */}
          <h2 className="text-2xl font-bold text-white mb-8">Research Domains</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {domains.map((d) => (
              <div
                key={d.title}
                className={`relative rounded-2xl bg-gradient-to-br ${d.color} border ${d.border} p-6 transition-all`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl opacity-60">{d.icon}</span>
                  <h3 className="font-semibold text-white">{d.title}</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  {d.lines.map((l, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Hidden hint card */}
            <div className="relative rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent border border-dashed border-white/10 p-6 flex items-center justify-center">
              <div className="text-center">
                <span className="text-2xl opacity-30">\u25CC</span>
                <p className="text-sm text-gray-600 mt-2">More for contractors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="snap-section min-h-screen flex items-center px-6 py-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Current opportunities to join our team
            </p>
          </div>

          {jobs.length > 0 ? (
            <div className="grid gap-6">
              {jobs.map((job) => (
                <Link
                  key={job.slug}
                  href={`/careers/${job.slug}`}
                  className="group relative rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] p-6 md:p-8 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                    {/* Left: Job Info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${typeColors[job.type]} border`}
                        >
                          {job.type}
                        </span>
                        <span className="text-sm text-gray-500">{job.location}</span>
                        <span className="text-gray-600">|</span>
                        <span className="text-sm text-gray-500">{job.department}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base">{job.shortDescription}</p>
                    </div>

                    {/* Right: Compensation + Arrow */}
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="hidden sm:block text-right">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                          Compensation
                        </p>
                        <p className="text-sm text-gray-300">{job.compensation.details}</p>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 group-hover:bg-gradient-to-r group-hover:from-cyan-500/20 group-hover:to-violet-500/20 flex items-center justify-center transition-all">
                        <svg
                          className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06]">
              <p className="text-gray-500 text-lg">No open positions at this time.</p>
              <p className="text-gray-600 text-sm mt-2">Check back soon or reach out directly.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tell us what you&apos;re building
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Or the question you can&apos;t stop thinking about.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:opacity-90 transition"
            >
              Contact the Labs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join our team: Hiring software developers, AI engineers, and full-stack devs. Remote-first culture, cutting-edge projects.",
  keywords: [
    "software developer jobs",
    "custom software development careers",
    "AI engineer positions",
    "full-stack developer jobs",
    "React developer careers",
    "Python developer jobs",
    "remote software jobs",
  ],
  alternates: { canonical: "/careers" },
};

const domains = [
  {
    title: "AI Foundations",
    icon: "⚡",
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
    icon: "◈",
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
    icon: "◉",
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
    icon: "⬡",
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
    icon: "◇",
    color: "from-orange-500/20 to-red-500/10",
    border: "border-orange-500/20 hover:border-orange-500/40",
    lines: [
      "Continuous experimentation frameworks",
      "Data observability and provenance",
      "Scalable open science stacks",
    ],
  },
];

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
              BUILD
            </span>
            <span className="text-white" style={{ textShadow: "0 0 40px rgba(255,255,255,0.4)" }}>
              WHAT&apos;S
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              NEXT
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
          {/* Philosophy Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">How We Work</h2>
              <p className="text-gray-400 leading-relaxed">
                Hybrid research network. Remote-first. Asynchronous. If you prototype at 3 AM to test
                a hypothesis, you&apos;ll fit right in.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Who We Are</h2>
              <p className="text-gray-400 leading-relaxed">
                Researchers, engineers, experimentalists. AI theory, quantum computation, systems
                architecture, applied mathematics.
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
                <span className="text-2xl opacity-30">◌</span>
                <p className="text-sm text-gray-600 mt-2">More for contractors</p>
              </div>
            </div>
          </div>
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

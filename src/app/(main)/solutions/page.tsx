import { Metadata } from "next";
import Link from "next/link";
import ProductGrid from "./ProductGrid";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "Research-derived ventures from Axion Deep Labs — Made4Founders, Site2CRM, QUANTA, Vesper AI, and Forma. Software built from original research.",
  keywords: [
    "research-derived ventures",
    "deep tech ventures",
    "quantum computing education",
    "AI lead capture",
    "research commercialization",
  ],
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <div className="no-snap relative text-gray-300">
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center px-6 pt-28 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-bold tracking-widest uppercase text-lg md:text-xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            VENTURES
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span
              className="text-white"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.4)" }}
            >
              Research-Derived{" "}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Ventures
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            Software and platforms built from our research programs. Each venture
            applies insights from our experimental work to practical problems.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/10">
              <h3 className="font-semibold text-white mb-2">Research-Driven</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Every product originates from our active research programs. Insights from
                topological data analysis, AI agent architectures, and information theory
                inform the technology behind each venture.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/10">
              <h3 className="font-semibold text-white mb-2">Production-Grade</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Research prototypes become production software through rigorous engineering.
                Each product is built with modern infrastructure, automated testing, and
                continuous deployment pipelines.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-transparent border border-fuchsia-500/10">
              <h3 className="font-semibold text-white mb-2">Open Methodology</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                We publish our research findings and experimental protocols openly. The
                technical foundations behind our ventures are documented and reproducible
                by the broader research community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 pb-20">
        <ProductGrid />
      </section>

      {/* Research to Product Pipeline */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">From Research to Venture</h2>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/[0.08] to-cyan-500/[0.04] border border-white/[0.08]">
            <p className="text-gray-400 leading-relaxed mb-4">
              Each venture in our portfolio originates from active research at Axion Deep Labs.
              Made4Founders applies AI integration patterns developed through our agent architecture
              research to create personalized daily briefings and intelligent document management
              for startup founders. Site2CRM deploys persistent AI chat agents — informed by our
              work on conversational AI and objection handling — to capture and qualify leads in
              real time across five major CRM platforms.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              QUANTA translates our quantum computing research (Project DRIFT) into an interactive
              education platform where learners build circuits with drag-and-drop gates and observe
              quantum state evolution on a 3D Bloch sphere. Vesper AI applies our dual-agent
              architecture research to autonomous penetration testing, pairing an attack agent
              with an analysis agent to produce validated security assessments. Forma draws on
              our component system research to generate production-ready Next.js code from visual
              designs and natural language prompts.
            </p>
            <p className="text-gray-400 leading-relaxed">
              This research-to-venture pipeline ensures that our products are built on original
              insights rather than incremental feature additions. Every venture solves a real
              problem using technology that comes directly from our experimental work — from
              topological data analysis to information integration measurement to AI agent
              coordination patterns.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What we&apos;re working on next
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Interested in our research or want to discuss a collaboration?
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:opacity-90 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

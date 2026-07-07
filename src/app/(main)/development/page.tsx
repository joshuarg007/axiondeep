import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PlatformCards from "@/components/PlatformCards";

export const metadata: Metadata = {
  title: "Applied R&D",
  description:
    "Applied R&D translating original research in machine learning, quantum computing, and information theory into production software.",
  keywords: [
    "applied AI research",
    "research-to-production pipeline",
    "machine learning engineering",
    "technology transfer",
    "research-driven development",
    "reproducible methodology",
    "deep tech R&D",
  ],
  alternates: { canonical: "/development" },
};

const processSteps = [
  {
    step: "01",
    title: "Investigate",
    description: "Deep exploration of the problem space, literature review, and technical feasibility assessment. We identify gaps in existing solutions and formulate testable hypotheses before writing any code.",
    image: "/images/process-discover.webp",
    alt: "Investigation phase - exploring the research problem",
  },
  {
    step: "02",
    title: "Prototype",
    description: "Architecture design, rapid prototyping, and hypothesis validation. We build minimal viable experiments to prove the approach works before committing to full implementation. Every prototype is version-controlled and reproducible.",
    image: "/images/process-design.webp",
    alt: "Prototype phase - validating research hypotheses",
  },
  {
    step: "03",
    title: "Ship",
    description: "Iterative development with rigorous testing, automated CI/CD pipelines, and production deployment. We monitor performance, gather feedback, and continuously improve based on real-world usage data.",
    image: "/images/process-deliver.webp",
    alt: "Ship phase - deploying production-ready technology",
  },
];

export default function DevelopmentPage() {
  return (
    <div className="snap-page relative z-10 text-gray-300">
      {/* Hero Section */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            From lab to production
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Applied{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Research
            </span>{" "}
            & Development
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Where original research becomes production software.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold text-white hover:opacity-90 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              Research Inquiries
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 font-semibold text-white hover:bg-white/10 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Platforms & Technologies
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Web, mobile, AI, spatial computing, and cloud infrastructure.
            </p>
          </div>

          <PlatformCards />
        </div>
      </section>

      {/* Process Section */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Methodology</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Research-driven development from investigation to deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="relative group">
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 text-4xl font-bold bg-gradient-to-br from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                    {item.step}
                  </span>
                </div>
                <div className="relative z-10 space-y-3">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Core Technology Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The tools and frameworks we use across our research and product engineering.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/10">
              <h3 className="font-semibold text-white mb-3">AI &amp; Machine Learning</h3>
              <div className="flex flex-wrap gap-2">
                {["PyTorch", "Qiskit", "Ripser", "scikit-tda", "Ollama", "Claude AI", "DeepSeek"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">{t}</span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/10">
              <h3 className="font-semibold text-white mb-3">Web &amp; Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Docker"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">{t}</span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-transparent border border-fuchsia-500/10">
              <h3 className="font-semibold text-white mb-3">Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "CUDA", "GitHub Actions", "Stripe", "Plaid", "Three.js"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research-to-Production Philosophy */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Why applied R&amp;D, not just research</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A result without a runnable artifact is a result that evaporates.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 pt-4">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Every finding ships</h3>
              <p className="text-gray-400 leading-relaxed">
                Every major experiment at Axion Labs concludes with a deliverable: a benchmark, a reference
                implementation, a trained model, or a deployed service. Results that cannot be exercised by another
                engineer are treated as incomplete. This requirement forces our methodology to remain grounded in
                real constraints rather than drifting into theory for its own sake.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Industry timelines, academic rigor</h3>
              <p className="text-gray-400 leading-relaxed">
                We compress the academic publication cycle into an industry delivery cadence. A program that might
                run eighteen months in a traditional laboratory ships a production checkpoint every quarter here,
                with the final peer-reviewable write-up landing alongside the code. Reviewers get both the paper
                and the repository; readers get conclusions backed by software they can run themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 py-16">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Interested in our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Research
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technical inquiries, research collaborations, or partnership discussions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 font-semibold text-lg text-white hover:opacity-90 transition-all duration-300 shadow-2xl shadow-violet-500/25"
          >
            Contact the Lab
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

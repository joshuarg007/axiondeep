import { Metadata } from "next";
import HomeClient from "./HomeClient";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  description:
    "Axion Deep Labs is an independent R&D organization building AI systems, quantum algorithms, and production software through original research.",
  alternates: {
    canonical: "/",
  },
};

// Server component for SEO - all text content is crawlable
export default function HomePage() {
  return (
    <div className="snap-page">
      {/* Hero Section - Server rendered for SEO */}
      <section className="snap-section min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 relative">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block text-white" style={{ textShadow: "0 0 40px rgba(255,255,255,0.4)" }}>
              Axion Deep Labs
            </span>
            {" "}
            <span className="block bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text" style={{ WebkitTextFillColor: 'transparent' }}>
              Research and Development
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Pioneering <strong className="font-semibold text-gray-300">scientific research</strong> in AI, quantum computing, and computational neuroscience.
          </p>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed mb-4">
            Axion Deep Labs is an <strong className="font-medium text-gray-400">independent research laboratory</strong> that conducts original scientific investigations in machine learning theory, quantum computing, and computational neuroscience. Our experimental research programs produce measurable results that advance the foundational understanding of how intelligent systems learn, adapt, and scale.
          </p>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed mb-6">
            We bridge the gap between <strong className="font-medium text-gray-400">peer-reviewed research</strong> and production-grade software by building the autonomous AI systems, quantum algorithms, and cloud platforms that bring scientific discoveries into real-world applications. Every project is rooted in rigorous R&D methodology with reproducible experiments and published findings.
          </p>
        </div>
        {/* Client-side animations overlay */}
        <HomeClient />
      </section>

      {/* Process Section - Server rendered */}
      <section className="snap-section min-h-screen flex items-center px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <p className="font-bold tracking-widest uppercase text-lg mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text" style={{ WebkitTextFillColor: 'transparent' }}>
                OUR PROCESS
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-xl md:text-2xl font-light text-gray-400 tracking-widest mr-3">
                  FROM
                </span>
                <span className="text-white" style={{ textShadow: "0 0 40px rgba(255,255,255,0.5)" }}>
                  THOUGHT
                </span>
                <br />
                <span className="text-xl md:text-2xl font-light text-gray-400 tracking-widest mr-3">
                  TO
                </span>
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text" style={{ WebkitTextFillColor: 'transparent' }}>
                  REALITY
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Every project at Axion Deep Labs follows a <strong className="font-semibold">rigorous, research-driven methodology</strong> that begins with scientific investigation into the problem space and concludes with the delivery of production-grade software.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our R&D process emphasizes rapid prototyping and early experimental validation before committing to final production architectures, ensuring that every milestone is backed by reproducible results and measurable progress toward clearly defined research objectives.
              </p>
            </div>

            <div className="space-y-10">
              {[
                {
                  num: "01",
                  title: "Investigate",
                  desc: "We begin every engagement with a thorough exploration of the problem space, mapping technical constraints, identifying critical unknowns, and defining a focused investigative agenda that guides all subsequent development work.",
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  num: "02",
                  title: "Hypothesize",
                  desc: "Our team designs candidate architectures and builds rapid prototypes to validate core assumptions early in the process, iterating on each approach until the technical foundation is proven and the path forward is clear.",
                  color: "from-violet-500 to-purple-500",
                },
                {
                  num: "03",
                  title: "Build",
                  desc: "Development proceeds with continuous integration, comprehensive test coverage, and regular code reviews to ensure that every component meets the quality standards required for production-grade scientific and engineering output.",
                  color: "from-fuchsia-500 to-pink-500",
                },
                {
                  num: "04",
                  title: "Ship & Iterate",
                  desc: "We deploy working software to production environments and establish monitoring, feedback loops, and performance benchmarks that drive continuous improvement based on real-world data and user behavior.",
                  color: "from-orange-500 to-red-500",
                },
              ].map((step, i) => (
                <div key={step.num} className="group relative pl-20">
                  <div
                    className={`absolute left-0 top-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg`}
                  >
                    {step.num}
                  </div>
                  {i < 3 && (
                    <div className="absolute left-7 top-14 w-px h-[calc(100%+2.5rem)] bg-gradient-to-b from-white/20 to-transparent" />
                  )}
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Domains Section - Server rendered */}
      <section className="snap-section min-h-screen flex items-center px-6 py-16 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-violet-400 font-medium tracking-wide uppercase text-sm mb-4">
              Technical Domains
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Research domains</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From AI and machine learning research to cloud infrastructure, the scientific and engineering work at Axion Deep Labs spans every layer of modern computing, delivering solutions grounded in rigorous experimentation and peer-reviewed methodology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Large card */}
            <div className="md:col-span-2 md:row-span-2 group relative p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-3">Web Applications</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  We design and develop full-stack SaaS platforms, interactive dashboards, and complex web applications using React, Next.js, and TypeScript, with architectures built to handle enterprise-scale traffic and data requirements from day one.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["React", "Next.js", "TypeScript", "Node.js"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {[
              {
                title: "Mobile Apps",
                desc: "Cross-platform iOS and Android development using React Native and native frameworks for high-performance mobile experiences.",
                gradient: "from-violet-500/10 to-purple-500/5",
                border: "border-violet-500/20 hover:border-violet-500/40",
              },
              {
                title: "AI Research & Integration",
                desc: "Large language model research, custom model training, and intelligent automation pipelines built on cutting-edge scientific experimentation and published findings.",
                gradient: "from-fuchsia-500/10 to-pink-500/5",
                border: "border-fuchsia-500/20 hover:border-fuchsia-500/40",
              },
              {
                title: "Backend & APIs",
                desc: "Scalable backend systems and API development using Python, FastAPI, and GraphQL with robust data architectures.",
                gradient: "from-emerald-500/10 to-teal-500/5",
                border: "border-emerald-500/20 hover:border-emerald-500/40",
              },
              {
                title: "Cloud & DevOps",
                desc: "Infrastructure design and deployment automation across AWS and GCP with continuous integration and delivery pipelines.",
                gradient: "from-orange-500/10 to-red-500/5",
                border: "border-orange-500/20 hover:border-orange-500/40",
              },
            ].map((service) => (
              <div
                key={service.title}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${service.gradient} border ${service.border} transition-all`}
              >
                <h3 className="text-lg font-semibold text-white mb-1">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="snap-section min-h-screen flex items-center px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-medium tracking-wide uppercase text-sm mb-4">
              Active Programs
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Active research programs</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our current scientific research programs explore the boundaries of what neural networks can learn, how information flows through deep architectures, and why certain models generalize better than others. Each program targets peer-reviewed publication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20">
              <p className="text-emerald-400 font-mono text-sm mb-2">PERSIST</p>
              <h3 className="text-xl font-bold text-white mb-3">Topological Signatures in Continual Learning</h3>
              <p className="text-gray-400 leading-relaxed">
                Investigating whether the shape of loss landscapes — measured through persistent homology — can predict a neural network&apos;s vulnerability to catastrophic forgetting. Cross-architecture study spanning 19 model families and 3 datasets.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-violet-500/10 to-purple-500/5 border border-violet-500/20">
              <p className="text-violet-400 font-mono text-sm mb-2">DRIFT</p>
              <h3 className="text-xl font-bold text-white mb-3">Quantum State Evolution Under Repeated Manipulation</h3>
              <p className="text-gray-400 leading-relaxed">
                Characterizing behavioral uncertainty in quantum systems subjected to iterated field transformations. Focused on stability degradation patterns under variation in operator ordering and diversity across multiple quantum circuit configurations.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-fuchsia-500/10 to-pink-500/5 border border-fuchsia-500/20">
              <p className="text-fuchsia-400 font-mono text-sm mb-2">PHI</p>
              <h3 className="text-xl font-bold text-white mb-3">Integrated Information in Deep Networks</h3>
              <p className="text-gray-400 leading-relaxed">
                First comprehensive measurement of integrated information (Phi) across major deep learning architecture families, testing whether information integration correlates with generalization, transfer learning, and robustness to distribution shift.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-500/5 border border-orange-500/20">
              <p className="text-orange-400 font-mono text-sm mb-2">GENESIS</p>
              <h3 className="text-xl font-bold text-white mb-3">Information Capacity Scaling Laws</h3>
              <p className="text-gray-400 leading-relaxed">
                Testing whether neural network information capacity follows an area law rather than a volume law — a computational analog of the holographic principle. Spanning 15+ architecture configurations with power-law fitting and Bayesian model comparison.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="snap-section min-h-screen flex items-center px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 mx-auto mb-8 text-white/10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-3xl md:text-4xl font-light text-white leading-relaxed mb-8">
            Great software is built by people who care deeply about
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text" style={{ WebkitTextFillColor: 'transparent' }}>
              {" "}
              craft, clarity, and outcomes
            </span>
            .
          </blockquote>
          <p className="text-gray-500">— The Axion Deep Labs Philosophy</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-fuchsia-400 font-medium tracking-wide uppercase text-sm mb-4">
                Connect
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Explore what we&apos;re building
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Whether you are exploring a <strong className="font-medium text-gray-300">scientific research collaboration</strong>, have a technical inquiry about our experimental work, or want to discuss a development partnership, the Axion Deep Labs team is ready to help you navigate the intersection of advanced R&D and practical software engineering.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                We respond to all research inquiries within one business day and welcome conversations about how our laboratory capabilities can support your organization&apos;s goals in AI research, quantum computing, or full-stack software engineering.
              </p>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <span>labs@axiondeep.com</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Mission & Process",
  description:
    "We transform complex ideas into production-ready software. Agile development delivering custom web apps, mobile apps, and AI solutions.",
  keywords: [
    "custom software development process",
    "agile software development",
    "web application development company",
    "mobile app development services",
    "AI software development company",
  ],
  alternates: { canonical: "/mission" },
};

const capabilities = [
  {
    image: "/images/webapps.webp",
    imageAlt: "Web application development",
    title: "Web Applications",
    description: "React, Next.js, and TypeScript frontends. Full-stack SaaS platforms built for scale.",
    gradient: "from-cyan-500/10 to-blue-500/5",
  },
  {
    image: "/images/mobileapps.webp",
    imageAlt: "Mobile app development",
    title: "Mobile Apps",
    description: "Native iOS and Android experiences. Cross-platform with React Native.",
    gradient: "from-violet-500/10 to-purple-500/5",
  },
  {
    image: "/images/ai-ml.webp",
    imageAlt: "AI and machine learning",
    title: "AI & ML",
    description: "LLM integrations, custom models, and intelligent automation systems.",
    gradient: "from-fuchsia-500/10 to-pink-500/5",
  },
  {
    image: "/images/backend-apis.webp",
    imageAlt: "Backend and API development",
    title: "Backend & APIs",
    description: "Python, Node.js, FastAPI. RESTful and GraphQL architectures.",
    gradient: "from-emerald-500/10 to-teal-500/5",
  },
  {
    image: "/images/cloud-devops.webp",
    imageAlt: "Cloud and DevOps infrastructure",
    title: "VR & AR",
    description: "Immersive experiences with Unity and WebXR. Spatial computing applications.",
    gradient: "from-orange-500/10 to-red-500/5",
  },
  {
    image: "/images/cloud-devops.webp",
    imageAlt: "Cloud infrastructure",
    title: "Cloud & DevOps",
    description: "AWS, GCP, Azure deployments. CI/CD automation and scalable infrastructure.",
    gradient: "from-blue-500/10 to-indigo-500/5",
  },
];

const processSteps = [
  {
    number: 1,
    title: "Discover",
    description:
      "We start by understanding your vision. Deep conversations, sharp questions, and mapping the problem space together.",
    gradient: "from-cyan-500 to-blue-500",
    stats: [
      { value: "40+", label: "discovery calls" },
      { value: "98%", label: "scope accuracy" },
    ],
  },
  {
    number: 2,
    title: "Design",
    description:
      "Architecture and prototypes. We validate assumptions early and iterate until the solution feels right.",
    gradient: "from-violet-500 to-purple-500",
    stats: [
      { value: "3x", label: "iterations avg" },
      { value: "100%", label: "client sign-off" },
    ],
  },
  {
    number: 3,
    title: "Build",
    description: "Agile sprints with continuous delivery. You see progress weekly, not monthly.",
    gradient: "from-fuchsia-500 to-pink-500",
    stats: [
      { value: "94%", label: "on-time delivery" },
      { value: "Weekly", label: "demo cadence" },
    ],
  },
  {
    number: 4,
    title: "Launch",
    description: "Deploy with confidence. Monitoring, support, and iteration as your product grows.",
    gradient: "from-orange-500 to-red-500",
    stats: [
      { value: "99.9%", label: "uptime SLA" },
      { value: "<2hr", label: "response time" },
    ],
  },
];

export default function MissionPage() {
  return (
    <div className="snap-page relative text-gray-300">
      {/* Hero Section */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-bold tracking-widest uppercase text-lg md:text-xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            OUR MISSION
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="text-xl md:text-2xl font-light text-gray-400 tracking-widest mr-3">
              TRANSFORMING
            </span>
            <span className="text-white" style={{ textShadow: "0 0 40px rgba(255,255,255,0.4)" }}>
              IDEAS
            </span>
            <br />
            <span className="text-xl md:text-2xl font-light text-gray-400 tracking-widest mr-3">INTO</span>
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              REALITY
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            Precision-engineered solutions that scale with your vision.
          </p>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="snap-section min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What we build</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Full-stack expertise across every layer of modern software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${cap.gradient} border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1`}
              >
                <Image
                  src={cap.image}
                  alt={cap.imageAlt}
                  width={64}
                  height={64}
                  className="w-16 h-auto mb-4 opacity-90"
                />
                <h3 className="text-lg font-semibold text-white mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How we work</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A proven process that turns complexity into clarity
            </p>
          </div>

          {/* 2x2 Grid of Process Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className={`group relative rounded-2xl bg-gradient-to-br from-${step.gradient.split(" ")[0].replace("from-", "")}/20 to-${step.gradient.split(" ")[1].replace("to-", "")}/10 p-8 hover:from-${step.gradient.split(" ")[0].replace("from-", "")}/25 hover:to-${step.gradient.split(" ")[1].replace("to-", "")}/15 transition-all cursor-pointer`}
                style={{
                  background: `linear-gradient(to bottom right, ${step.number === 1 ? "rgba(6,182,212,0.2)" : step.number === 2 ? "rgba(139,92,246,0.2)" : step.number === 3 ? "rgba(217,70,239,0.2)" : "rgba(249,115,22,0.2)"}, transparent)`,
                }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-xl`}
                  >
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{step.description}</p>
                    <div className="flex gap-4 text-xs">
                      {step.stats.map((stat, i) => (
                        <div key={i}>
                          <span
                            className={`font-bold ${step.number === 1 ? "text-cyan-400" : step.number === 2 ? "text-violet-400" : step.number === 3 ? "text-fuchsia-400" : "text-orange-400"}`}
                          >
                            {stat.value}
                          </span>{" "}
                          <span className="text-gray-500">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center w-full">
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to build something great?
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Let&apos;s talk about your project. We&apos;d love to hear what you&apos;re working on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Get in touch
              </Link>
              <Link
                href="/solutions"
                className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
              >
                View our work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

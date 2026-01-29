import { Metadata } from "next";
import HomeClient from "./HomeClient";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Custom Software Development Company",
  description:
    "Custom software for startups and enterprises. Web apps, mobile apps, AI-powered software, and SaaS platforms built with React, Python, and cloud tech.",
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
            <span className="text-white" style={{ textShadow: "0 0 40px rgba(255,255,255,0.4)" }}>
              AXION
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              DEEP LABS
            </span>
            <span className="block text-lg md:text-xl font-normal text-gray-500 mt-4 tracking-wide">
              Custom Software Development
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            We transform how technology is understood.
            <br />
            <span className="text-gray-500">From idea to launch, done right.</span>
          </p>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed mb-6">
            <strong className="text-gray-400">Axion Deep Labs</strong> is a research-driven custom software development company specializing in web applications,
            mobile apps, AI-powered solutions, and enterprise software. The Axion Deep Labs team partners with startups and established
            businesses to build scalable, production-ready software that solves real problems.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm">
            As a leading custom software development company, Axion Deep Labs combines deep technical expertise with innovative
            thinking. Our software development process emphasizes quality, security, and long-term maintainability. Whether you need
            custom web development, mobile app development, or AI integration, the Axion Deep Labs team delivers solutions that drive growth.
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
              <p className="font-bold tracking-widest uppercase text-lg mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
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
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  REALITY
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                A battle-tested process refined over hundreds of projects. Clear milestones, constant
                communication, and no surprises.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Our custom software development methodology combines agile practices with deep technical expertise. Every project
                begins with thorough discovery, moves through strategic planning, and delivers working software
                in iterative sprints. We believe in transparency, collaboration, and delivering measurable results.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                At Axion Deep Labs, custom software development means more than writing code. It means understanding your
                business, designing elegant solutions, and building software that scales. Our development team brings
                years of experience across industries to every project.
              </p>
            </div>

            <div className="space-y-10">
              {[
                {
                  num: "01",
                  title: "Discovery",
                  desc: "We dive deep into your business, users, and goals. No assumptions—just clarity.",
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  num: "02",
                  title: "Strategy",
                  desc: "Architecture, tech stack, and roadmap. You'll know exactly what we're building and why.",
                  color: "from-violet-500 to-purple-500",
                },
                {
                  num: "03",
                  title: "Build",
                  desc: "Agile sprints with weekly demos. Clean code, tested thoroughly. You see progress, not excuses.",
                  color: "from-fuchsia-500 to-pink-500",
                },
                {
                  num: "04",
                  title: "Launch & Scale",
                  desc: "Deploy with confidence. We stick around to iterate and grow with you.",
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

      {/* Services Section - Server rendered */}
      <section className="snap-section min-h-screen flex items-center px-6 py-16 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-violet-400 font-medium tracking-wide uppercase text-sm mb-4">
              What Axion Deep Labs Builds
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Full-stack expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Axion Deep Labs specializes in custom software development across the entire technology stack.
              From frontend interfaces to backend systems, our development team delivers complete solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Large card */}
            <div className="md:col-span-2 md:row-span-2 group relative p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-3">Web Applications</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  React, Next.js, TypeScript. Full-stack SaaS platforms, dashboards, and complex web apps
                  built to scale.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  We build performant, accessible web applications using modern frameworks and best practices.
                  From MVP prototypes to enterprise-grade platforms, our web development team delivers
                  solutions that are secure, maintainable, and optimized for search engines and user experience.
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
                desc: "iOS, Android, React Native",
                gradient: "from-violet-500/10 to-purple-500/5",
                border: "border-violet-500/20 hover:border-violet-500/40",
              },
              {
                title: "AI & ML",
                desc: "LLMs, Custom Models, Automation",
                gradient: "from-fuchsia-500/10 to-pink-500/5",
                border: "border-fuchsia-500/20 hover:border-fuchsia-500/40",
              },
              {
                title: "Backend & APIs",
                desc: "Python, FastAPI, GraphQL",
                gradient: "from-emerald-500/10 to-teal-500/5",
                border: "border-emerald-500/20 hover:border-emerald-500/40",
              },
              {
                title: "Cloud & DevOps",
                desc: "AWS, GCP, CI/CD",
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

      {/* Quote Section */}
      <section className="snap-section min-h-screen flex items-center px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 mx-auto mb-8 text-white/10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-3xl md:text-4xl font-light text-white leading-relaxed mb-8">
            Great software is built by people who care deeply about
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              {" "}
              craft, clarity, and outcomes
            </span>
            .
          </blockquote>
          <p className="text-gray-500 mb-6">— The Axion Deep Labs Philosophy</p>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-4">
            At Axion Deep Labs, we approach every custom software development project with curiosity, rigor, and a commitment to excellence.
            Our team combines deep technical expertise with creative problem-solving to deliver software that exceeds expectations.
            Whether you need a simple web application or a complex distributed system, we bring the same level
            of dedication and attention to detail.
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm">
            This philosophy drives everything we do at Axion Deep Labs. Our custom software development services are built on a foundation
            of quality, transparency, and partnership. When you work with Axion Deep Labs, you get more than code—you get a team that
            cares about your success as much as you do.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="snap-section min-h-screen flex items-center justify-center px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-fuchsia-400 font-medium tracking-wide uppercase text-sm mb-4">
                Let&apos;s Talk
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to build something great?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Whether you have a clear vision or just a spark of an idea, we&apos;d love to hear about
                it. No pressure, just a conversation.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Tell us about your project goals, timeline, and technical requirements. Our team will review
                your inquiry and respond within one business day. We work with clients across industries including
                fintech, healthcare, education, e-commerce, and enterprise software.
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
                  <span>hello@axiondeep.com</span>
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

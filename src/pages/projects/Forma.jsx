import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Forma() {
  const appUrl = "http://localhost:3000";

  return (
    <div className="relative z-10 text-gray-300 space-y-16 max-w-4xl mx-auto px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-16"
      >
        {/* Header */}
        <div>
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Solutions
          </Link>

          <div className="flex items-start justify-between gap-4 flex-wrap">
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              Forma
            </h1>
            <span className="text-xs px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-400/20">
              In development
            </span>
          </div>
          <p className="text-xl text-gray-300 mt-4">
            AI-Powered Visual Page Builder
          </p>
        </div>

        {/* Hero Image Placeholder */}
        <div className="w-full rounded-xl bg-gradient-to-br from-amber-900/30 to-violet-900/30 border border-white/10 flex items-center justify-center overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <div className="text-center p-8">
            <div className="text-4xl mb-2">🎨</div>
            <p className="text-sm text-gray-400">Forma Builder Interface</p>
          </div>
        </div>

        {/* Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            Forma is a visual page builder that lets you create stunning web pages through
            drag-and-drop—no coding required. With 100+ pre-built components and AI-powered
            generation, you can go from idea to published page in minutes.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Unlike traditional page builders, Forma combines the flexibility of custom design
            with AI assistance. Describe what you want, and our AI generates production-ready
            components that match your brand and style.
          </p>

          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-violet-600 font-semibold hover:opacity-90 transition"
          >
            Try Forma
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🖱️",
                title: "Drag & Drop Builder",
                description: "Intuitive visual canvas where you drag components from the library and drop them exactly where you want."
              },
              {
                icon: "📦",
                title: "100+ Components",
                description: "Pre-built heroes, navbars, features, pricing tables, testimonials, FAQs, CTAs, footers, cards, and forms."
              },
              {
                icon: "🤖",
                title: "AI Generation",
                description: "Describe what you need and our Claude-powered AI generates custom components that match your vision."
              },
              {
                icon: "📱",
                title: "Responsive Preview",
                description: "Toggle between desktop, tablet, and mobile views to ensure your page looks perfect on every device."
              },
              {
                icon: "⚡",
                title: "Real-time Preview",
                description: "See changes instantly as you build. Open full-page preview in a new tab to test the experience."
              },
              {
                icon: "↩️",
                title: "Undo/Redo",
                description: "Full history management so you can experiment freely and roll back any changes."
              }
            ].map((feature, i) => (
              <div key={i} className="border border-white/10 rounded-xl bg-white/5 p-5">
                <div className="text-2xl mb-2">{feature.icon}</div>
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Component Library */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Component Library</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Heroes", count: "12+" },
              { name: "Navigation", count: "8+" },
              { name: "Features", count: "15+" },
              { name: "Pricing", count: "6+" },
              { name: "Testimonials", count: "10+" },
              { name: "FAQ", count: "5+" },
              { name: "CTA", count: "12+" },
              { name: "Footers", count: "8+" },
              { name: "Cards", count: "15+" },
              { name: "Forms", count: "10+" },
              { name: "Stats", count: "6+" },
              { name: "Content", count: "20+" },
            ].map((category, i) => (
              <div key={i} className="border border-white/10 rounded-lg bg-white/5 p-4">
                <div className="font-medium text-white text-sm">{category.name}</div>
                <div className="text-xs text-amber-400 mt-1">{category.count} variants</div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">How It Works</h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Choose Components",
                description: "Browse the component library and click or drag components onto your canvas. Each component comes with sensible defaults."
              },
              {
                step: "2",
                title: "Customize & Arrange",
                description: "Use the toolbar to move, align, duplicate, or delete components. Adjust properties in the right panel."
              },
              {
                step: "3",
                title: "Generate with AI",
                description: "Need something custom? Describe it to the AI assistant and get a tailored component generated instantly."
              },
              {
                step: "4",
                title: "Preview & Export",
                description: "Preview your page on different devices, then export clean HTML/CSS or publish directly."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-violet-600 flex items-center justify-center text-white font-bold shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                  <p className="text-gray-400 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Use Cases</h2>
          <div className="space-y-6">
            {[
              {
                title: "Landing Pages",
                description: "Build high-converting landing pages for product launches, campaigns, or lead generation in minutes instead of days.",
                icon: "🚀"
              },
              {
                title: "Marketing Sites",
                description: "Create professional marketing websites with consistent branding. Update content without touching code.",
                icon: "📈"
              },
              {
                title: "Rapid Prototyping",
                description: "Mock up ideas quickly for stakeholder review. Iterate on designs in real-time during meetings.",
                icon: "⚡"
              },
              {
                title: "Client Projects",
                description: "Deliver client websites faster. Let clients preview and approve designs before development.",
                icon: "👥"
              }
            ].map((useCase, i) => (
              <div key={i} className="border border-white/10 rounded-xl bg-white/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{useCase.icon}</div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-2">{useCase.title}</h3>
                    <p className="text-gray-400">{useCase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Technology</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Next.js 14", desc: "Frontend" },
              { name: "TypeScript", desc: "Type Safety" },
              { name: "FastAPI", desc: "Backend" },
              { name: "Claude AI", desc: "Generation" },
              { name: "Zustand", desc: "State" },
              { name: "Framer Motion", desc: "Animation" },
              { name: "Tailwind", desc: "Styling" },
              { name: "SQLite", desc: "Storage" },
            ].map((tech, i) => (
              <div key={i} className="border border-white/10 rounded-lg bg-white/5 p-3 text-center">
                <div className="font-medium text-white text-sm">{tech.name}</div>
                <div className="text-xs text-gray-500">{tech.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Roadmap</h2>
          <div className="space-y-4">
            {[
              { phase: "Now", milestone: "Core builder with 100+ components and AI generation", status: "current" },
              { phase: "Q1 2026", milestone: "Component customization panel and style editor" },
              { phase: "Q2 2026", milestone: "Export to HTML/React and CMS integration" },
              { phase: "H2 2026", milestone: "Team collaboration and template marketplace" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className={`text-sm font-medium w-16 shrink-0 ${
                  item.status === "current" ? "text-amber-400" : "text-cyan-400"
                }`}>
                  {item.phase}
                </span>
                <div className="flex gap-3 items-start">
                  <span className={`mt-2 h-2 w-2 rounded-full shrink-0 ${
                    item.status === "current" ? "bg-amber-400" : "bg-amber-400/70"
                  }`} />
                  <span className="text-gray-300">{item.milestone}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Start Building</h2>
          <p className="text-gray-400 mb-6">
            Forma is currently in development. Try the builder locally or get in touch
            to be notified when we launch.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-violet-600 font-semibold hover:opacity-90 transition"
            >
              Launch Forma
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 rounded-full border border-white/20 font-semibold hover:bg-white/5 transition"
            >
              Get Notified
            </Link>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

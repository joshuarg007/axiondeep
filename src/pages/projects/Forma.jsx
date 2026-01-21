import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import formaHero from "../../assets/forma-hero.png";
import formaDemo from "../../assets/forma-demo.webm";
import formaHeroNew from "../../assets/images/project-forma-hero.webp";

export default function Forma() {
  return (
    <div className="relative z-10 text-gray-300 space-y-16 max-w-4xl mx-auto px-6 md:px-8 lg:px-12 pt-20 md:pt-24 pb-20">
      <SEO
        title="Forma - Custom Visual Page Builder Software | Axion Deep Labs"
        description="Custom software for visual website building with AI-powered component generation. 100+ React components, drag-and-drop builder, Figma import, and export to Next.js or Vite. Built by Axion Deep Labs."
        keywords="custom page builder software, AI website builder, React visual builder, custom software solutions, no-code website builder, drag drop builder software"
        canonical="/projects/forma"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" },
          { name: "Forma", url: "/projects/forma" }
        ]}
        software={{
          name: "Forma",
          description: "AI-powered visual React builder with 100+ components, drag-and-drop canvas, team collaboration, and export to production-ready Next.js or Vite code.",
          category: "DeveloperApplication",
          url: "/projects/forma",
          features: ["Visual Canvas", "100+ Components", "AI Generation", "Team Collaboration", "Figma Import", "Code Export"]
        }}
      />

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
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-sm text-amber-300 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Beta
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold text-white">
                Forma
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-300 mt-4">
            AI-Powered Visual React Builder
          </p>
          <p className="text-gray-400 mt-3 max-w-2xl">
            Build complete React websites through drag-and-drop with 100+ components,
            AI-powered generation, and export to production-ready code.
          </p>
        </div>

        {/* Hero Video/Image */}
        <div className="w-full rounded-xl border border-white/10 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={formaHero}
            className="w-full object-cover"
            onCanPlay={(e) => e.target.play().catch(() => {})}
          >
            <source src={formaDemo} type="video/webm" />
            <img src={formaHero} alt="Forma Builder Interface" loading="lazy" />
          </video>
        </div>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stat: "100+", label: "Components" },
            { stat: "20", label: "Pages Built" },
            { stat: "11", label: "API Routers" },
            { stat: "Real-time", label: "Collaboration" },
          ].map((item, i) => (
            <div key={i} className="border border-white/10 rounded-xl bg-white/5 p-4 text-center">
              <div className="text-2xl font-bold text-white">{item.stat}</div>
              <div className="text-xs text-gray-500 mt-1">{item.label}</div>
            </div>
          ))}
        </section>

        {/* Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            Forma is a full-stack visual website builder similar to Webflow or Bubble, but
            purpose-built for React. Drag components onto a visual canvas, customize with
            a properties panel, and export clean Next.js or Vite code ready for deployment.
          </p>
          <p className="text-gray-300 leading-relaxed">
            What sets Forma apart is its AI integration. Describe what you need in plain
            language and Claude generates custom components that match your vision. Combined
            with Figma import, team collaboration, and a component marketplace, Forma
            accelerates development from days to hours.
          </p>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Platform Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🖱️",
                title: "Visual Canvas",
                description: "Drag-and-drop components with responsive grid layout, undo/redo history, multi-page support, and device preview (desktop/tablet/mobile)."
              },
              {
                icon: "📦",
                title: "100+ Pre-Built Components",
                description: "Heroes, navbars, features, pricing tables, testimonials, FAQs, dashboards, galleries, sidebars, forms, cards—all customizable."
              },
              {
                icon: "🤖",
                title: "AI Component Generation",
                description: "Describe what you need and Claude generates production-ready React components. Edit and iterate with natural language."
              },
              {
                icon: "🎨",
                title: "Advanced Styling",
                description: "Properties panel with typography, colors, spacing, borders, shadows, animations, and 3D transforms. Design tokens for consistency."
              },
              {
                icon: "👥",
                title: "Team Collaboration",
                description: "Real-time presence via WebSocket. Invite team members with role-based permissions (owner/admin/editor/viewer)."
              },
              {
                icon: "📤",
                title: "Export to Code",
                description: "Generate clean Next.js or Vite projects as ZIP files. Production-ready code with your exact component structure."
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

        {/* Additional Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Advanced Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Figma Import", desc: "Parse Figma JSON and convert to Forma components" },
              { title: "Component Marketplace", desc: "Browse, publish, and purchase components" },
              { title: "Theme System", desc: "Design tokens, color palettes, font management" },
              { title: "Multi-Page Projects", desc: "Each page has its own canvas and metadata" },
              { title: "Code Injection", desc: "Add custom CSS/JS per component" },
              { title: "GitHub Integration", desc: "OAuth sync to repository" },
            ].map((item, i) => (
              <div key={i} className="border border-white/10 rounded-lg bg-white/5 p-4">
                <div className="font-medium text-white text-sm">{item.title}</div>
                <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Component Library */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Component Library</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
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
              { name: "Dashboards", count: "8+" },
              { name: "Galleries", count: "6+" },
            ].map((category, i) => (
              <div key={i} className="border border-white/10 rounded-lg bg-white/5 p-3 text-center">
                <div className="font-medium text-white text-sm">{category.name}</div>
                <div className="text-xs text-amber-400 mt-1">{category.count}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Architecture</h2>
          <div className="border border-amber-500/20 rounded-xl bg-gradient-to-br from-amber-900/10 to-violet-900/10 p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-white">Frontend (Next.js 14)</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2">
                    <span className="text-amber-400">→</span>
                    VisualCanvas (1,472 lines) - drag-drop builder
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-400">→</span>
                    ComponentLibrary (589 lines) - 100+ components
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-400">→</span>
                    PropertiesPanel (1,099 lines) - styling editor
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-400">→</span>
                    Zustand stores for auth, project, theme, schema
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-white">Backend (FastAPI)</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2">
                    <span className="text-amber-400">→</span>
                    11 API routers (auth, projects, pages, AI, teams...)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-400">→</span>
                    Anthropic Claude for AI generation
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-400">→</span>
                    WebSocket for real-time collaboration
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-400">→</span>
                    Stripe billing, Celery tasks, S3 uploads
                  </li>
                </ul>
              </div>
            </div>
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
              { name: "SQLAlchemy", desc: "ORM" },
              { name: "WebSocket", desc: "Real-time" },
              { name: "Stripe", desc: "Billing" },
              { name: "Tailwind", desc: "Styling" },
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
          <h2 className="text-2xl font-semibold text-white">Status & Roadmap</h2>
          <div className="space-y-4">
            {[
              {
                milestone: "Complete",
                items: ["Visual drag-drop builder", "100+ components", "AI generation", "Team collaboration", "Multi-page support", "Export to Next.js/Vite"],
                status: "Done"
              },
              {
                milestone: "Current",
                items: ["Data model designer UI", "Dynamic components for live data", "Component marketplace polish"],
                status: "In Progress"
              },
              {
                milestone: "Planned",
                items: ["Public launch", "Self-hosted deployment option", "Plugin system", "A/B testing integration"],
                status: "Planned"
              }
            ].map((phase, i) => (
              <div key={i} className="border border-white/10 rounded-xl bg-white/5 p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{phase.milestone}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    phase.status === "Done"
                      ? "bg-green-500/10 text-green-300 border border-green-400/20"
                      : phase.status === "In Progress"
                      ? "bg-amber-500/10 text-amber-300 border border-amber-400/20"
                      : "bg-gray-500/10 text-gray-300 border border-gray-400/20"
                  }`}>
                    {phase.status}
                  </span>
                </div>
                <ul className="grid md:grid-cols-2 gap-1">
                  {phase.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className={`h-1 w-1 rounded-full ${
                        phase.status === "Done" ? "bg-green-400/70" : "bg-amber-400/70"
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Interested in Forma?</h2>
          <p className="text-gray-400 mb-6">
            Forma is feature-complete and in private beta. Contact us to learn about
            early access or discuss how visual development could accelerate your team.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-violet-600 font-semibold hover:opacity-90 transition"
            >
              Request Early Access
            </Link>
            <Link
              to="/solutions"
              className="inline-block px-6 py-3 rounded-full border border-white/20 font-semibold hover:bg-white/5 transition"
            >
              View All Solutions
            </Link>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

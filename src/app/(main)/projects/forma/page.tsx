import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forma Design System & UI Framework",
  description: "Forma is a component-driven design system and full-stack application builder with AI-powered layout generation and one-click Next.js export.",
  keywords: [
    "design system",
    "UI framework",
    "no-code platform",
    "AI code generation",
    "component library",
    "Next.js export",
  ],
  robots: { index: false, follow: true },
  alternates: { canonical: "/projects/forma" },
};

export default function FormaPage() {
  return (
    <div className="no-snap min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs px-2 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Beta
            </span>
            <span className="text-xs px-2 py-1 rounded bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">
              Design Tools
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Forma: Component-Driven Design System &amp; UI Framework</h1>
          <p className="text-xl text-fuchsia-400 font-medium mb-4">
            No-code platform that generates real, production-ready code.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Forma is a full-stack application builder that bridges the gap between design and
            development. Build interfaces with a visual drag-and-drop editor, define data models
            with a schema-driven modeler, and let AI generate complete layouts from natural
            language prompts. When you&apos;re done, export everything as a clean Next.js project
            that you own and can deploy anywhere. Over 100 pre-built components follow a
            consistent design system used across all Axion Labs products.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-transparent border border-fuchsia-500/20">
            <p className="text-3xl font-bold text-fuchsia-400">100+</p>
            <p className="text-sm text-gray-500 mt-1">Components</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20">
            <p className="text-3xl font-bold text-pink-400">AI</p>
            <p className="text-sm text-gray-500 mt-1">Layout Generation</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
            <p className="text-3xl font-bold text-purple-400">Next.js</p>
            <p className="text-sm text-gray-500 mt-1">One-Click Export</p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Core Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-transparent border border-fuchsia-500/10">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Visual Component Editor</h3>
              <p className="text-sm text-gray-400">
                Drag and drop from a library of 100+ components, buttons, forms, cards,
                navigation, data tables, charts, and more. Each component is fully customizable
                with props, variants, and responsive breakpoints.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/10">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">AI Layout Generation</h3>
              <p className="text-sm text-gray-400">
                Describe what you want in natural language and the AI generates a complete
                page layout using your component library. Refine with follow-up prompts or
                switch to manual editing at any point.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/10">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Schema-Driven Data Modeler</h3>
              <p className="text-sm text-gray-400">
                Define your data models visually with relationships, validations, and API
                endpoints generated automatically. The backend runtime connects components
                to real data without writing API code.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/10">
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">One-Click Next.js Export</h3>
              <p className="text-sm text-gray-400">
                Export your entire application as a clean, well-structured Next.js project.
                The generated code uses TypeScript, Tailwind CSS, and follows modern React
                patterns. You own the code and can deploy it anywhere.
              </p>
            </div>
          </div>
        </div>

        {/* Design Philosophy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Design Philosophy</h2>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/[0.08] to-violet-500/[0.04] border border-white/[0.08]">
            <p className="text-gray-400 leading-relaxed mb-4">
              Forma is built on the principle that design and code should never diverge. Every
              component in the visual editor maps directly to a React component in the exported
              code. There is no translation layer, no design-to-code handoff, and no loss of
              fidelity. What you see in the editor is exactly what ships in production.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The component library follows a consistent design system that prioritizes
              accessibility, responsive behavior, and dark mode support. Components are built
              with composition in mind, combine simple primitives to create complex interfaces
              without fighting the framework.
            </p>
          </div>
        </div>

        {/* How Forma Generates Code */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">How the Design System Generates Real Code</h2>
          <div className="space-y-4">
            {[
              { step: "01", title: "Design Visually", desc: "Drag components from the library onto your canvas. Arrange layouts with flexbox and grid controls, set responsive breakpoints, and preview your design across device sizes. Every component maps directly to a React component in the exported code." },
              { step: "02", title: "Define Your Data", desc: "Use the schema-driven data modeler to define entities, relationships, and validation rules. Forma generates API endpoints and database schemas automatically, connecting your UI components to real data without writing backend code." },
              { step: "03", title: "Let AI Assist", desc: "Describe a page layout in natural language and the AI generates a complete design using your component library. Refine with follow-up prompts or switch to manual editing at any point. The AI understands your design system constraints and produces consistent results." },
              { step: "04", title: "Export to Next.js", desc: "One click exports your entire application as a clean, well-structured Next.js project with TypeScript, Tailwind CSS, and modern React patterns. You own the generated code and can deploy it to any hosting provider." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start rounded-xl bg-white/[0.02] border border-fuchsia-500/10 p-5">
                <span className="text-2xl font-bold text-fuchsia-400 opacity-40 shrink-0 w-8 text-right">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "Ollama"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/5 text-gray-400 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 font-semibold text-white hover:opacity-90 transition"
          >
            Request Beta Access
          </Link>
          <Link
            href="/projects"
            className="px-8 py-4 rounded-full border border-white/20 font-medium text-white hover:bg-white/5 transition flex items-center gap-2"
          >
            View All Projects
          </Link>
        </div>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/projects" className="text-gray-400 hover:text-white transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

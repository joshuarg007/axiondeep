import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import founderosDashboard from "../../assets/founderos-dashboard.png";
import founderosDemo from "../../assets/founderos-demo.webm";

export default function FounderOS() {
  const appUrl = "https://founders.axiondeep.com";

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
              FounderOS
            </h1>
            <span className="text-xs px-3 py-1.5 rounded-full bg-green-500/10 text-green-300 border border-green-400/20">
              Live
            </span>
          </div>
          <p className="text-xl text-gray-300 mt-4">
            Command Center for Startup Founders
          </p>
        </div>

        {/* Hero Video/Image */}
        <div className="rounded-xl overflow-hidden border border-white/10">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={founderosDashboard}
            className="w-full object-cover"
            onCanPlay={(e) => e.target.play().catch(() => {})}
          >
            <source src={founderosDemo} type="video/webm" />
            <img src={founderosDashboard} alt="FounderOS Dashboard" />
          </video>
        </div>

        {/* Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            FounderOS is a comprehensive startup management platform that centralizes daily
            operations, business resources, and team collaboration. Built by founders, for
            founders—it's the operating system that keeps your startup organized and focused
            on what matters.
          </p>
          <p className="text-gray-300 leading-relaxed">
            From daily briefs that surface actionable insights to a secure credential vault
            for your team, FounderOS replaces the chaos of scattered tools with a single,
            unified command center.
          </p>

          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold hover:opacity-90 transition"
          >
            Open FounderOS
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
                icon: "📋",
                title: "Daily Brief",
                description: "Start each day with a curated dashboard of actionable insights, priorities, and updates relevant to your startup."
              },
              {
                icon: "📚",
                title: "Business Library",
                description: "Centralized repository for all your documents, SOPs, pitch decks, and resources—searchable and organized."
              },
              {
                icon: "🔐",
                title: "Credential Vault",
                description: "Secure, encrypted storage for passwords, API keys, and sensitive credentials with team sharing controls."
              },
              {
                icon: "👥",
                title: "Role-Based Access",
                description: "Granular permissions with admin, editor, and viewer roles. Control who sees what across your organization."
              },
              {
                icon: "📊",
                title: "Metrics Dashboard",
                description: "Track KPIs, runway, and key business metrics in one place. Connect to your existing data sources."
              },
              {
                icon: "🔔",
                title: "Smart Notifications",
                description: "Stay informed without notification fatigue. FounderOS surfaces what's important and filters the noise."
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

        {/* Use Cases */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Built For</h2>
          <div className="space-y-4">
            {[
              {
                title: "Early-Stage Founders",
                description: "Managing everything from fundraising docs to product roadmaps? FounderOS keeps it all in one place so you can focus on building."
              },
              {
                title: "Growing Teams",
                description: "As your team scales, FounderOS grows with you. Onboard new team members quickly with organized resources and secure credential sharing."
              },
              {
                title: "Remote-First Startups",
                description: "Distributed teams need a single source of truth. FounderOS provides that hub for async collaboration and knowledge sharing."
              }
            ].map((useCase, i) => (
              <div key={i} className="border border-white/10 rounded-xl bg-white/5 p-6">
                <h3 className="font-semibold text-white text-lg mb-2">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Technology</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "React", desc: "Frontend" },
              { name: "TypeScript", desc: "Type Safety" },
              { name: "FastAPI", desc: "Backend" },
              { name: "SQLAlchemy", desc: "ORM" },
              { name: "PostgreSQL", desc: "Database" },
              { name: "Redis", desc: "Caching" },
              { name: "Docker", desc: "Deployment" },
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
          <h2 className="text-2xl font-semibold text-white">Roadmap</h2>
          <div className="space-y-4">
            {[
              {
                milestone: "Current",
                items: ["Daily Brief dashboard", "Business Library", "Credential Vault", "Role-based access control"],
                status: "Live"
              },
              {
                milestone: "Q1 2026",
                items: ["Metrics dashboard", "Third-party integrations (Slack, Notion)", "Mobile app"],
                status: "Planned"
              },
              {
                milestone: "Q2 2026",
                items: ["AI-powered insights", "Automated reporting", "Custom workflows"],
                status: "Planned"
              }
            ].map((phase, i) => (
              <div key={i} className="border border-white/10 rounded-xl bg-white/5 p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{phase.milestone}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    phase.status === "Live"
                      ? "bg-green-500/10 text-green-300 border border-green-400/20"
                      : "bg-gray-500/10 text-gray-300 border border-gray-400/20"
                  }`}>
                    {phase.status}
                  </span>
                </div>
                <ul className="space-y-1">
                  {phase.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-green-400/70" />
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
          <h2 className="text-2xl font-semibold text-white mb-4">Run Your Startup Smarter</h2>
          <p className="text-gray-400 mb-6">
            FounderOS is live and ready to help you organize your startup. Get started today
            and see why founders are switching to a unified command center.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold hover:opacity-90 transition"
            >
              Get Started
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 rounded-full border border-white/20 font-semibold hover:bg-white/5 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

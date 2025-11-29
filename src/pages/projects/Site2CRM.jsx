import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Site2CRM() {
  return (
    <div className="relative z-10 text-gray-300 space-y-16 max-w-4xl mx-auto px-6 md:px-8 lg:px-12 pt-32 md:pt-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="mb-12">
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
              Site2CRM
            </h1>
            <span className="text-xs px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-400/20">
              Private beta
            </span>
          </div>
          <p className="text-xl text-gray-300 mt-4">
            Intelligent Lead Capture & Enrichment
          </p>
        </div>

        {/* Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            Site2CRM transforms anonymous website traffic into actionable CRM intelligence.
            It captures visitor events, enriches company and contact data, scores intent signals,
            and syncs qualified leads directly into your CRM with full attribution.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Unlike traditional lead capture tools, Site2CRM provides transparent attribution
            you can audit, ensuring your sales team knows exactly where leads come from and
            what actions they've taken.
          </p>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Identity Resolution",
                description: "Match anonymous visitors to companies and contacts using multiple data signals."
              },
              {
                title: "Data Enrichment",
                description: "Automatically enrich leads with firmographic and contact data from trusted sources."
              },
              {
                title: "Intent Scoring",
                description: "Score leads based on behavior patterns and engagement signals."
              },
              {
                title: "Auditable Attribution",
                description: "Full transparency into lead sources with attribution you can trust and verify."
              },
              {
                title: "Native CRM Sync",
                description: "Direct integration with HubSpot, Pipedrive, and other major CRM platforms."
              },
              {
                title: "Privacy Compliant",
                description: "Built with GDPR and CCPA compliance in mind from day one."
              }
            ].map((feature, i) => (
              <div key={i} className="border border-white/10 rounded-xl bg-white/5 p-5">
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">How It Works</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Install", description: "Add a lightweight script to your website. Takes less than 5 minutes." },
              { step: "2", title: "Capture", description: "Site2CRM tracks visitor behavior and identifies companies visiting your site." },
              { step: "3", title: "Enrich", description: "Leads are automatically enriched with company and contact information." },
              { step: "4", title: "Sync", description: "Qualified leads flow directly into your CRM, ready for outreach." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Roadmap</h2>
          <div className="space-y-4">
            {[
              { phase: "Q4 2025", milestone: "Private beta with initial integrations (HubSpot, Pipedrive)" },
              { phase: "H1 2026", milestone: "Attribution reporting and scoring improvements" },
              { phase: "H2 2026", milestone: "Public launch and pricing tiers" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-sm font-medium text-cyan-400 w-20 shrink-0">{item.phase}</span>
                <div className="flex gap-3 items-start">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                  <span className="text-gray-300">{item.milestone}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Request Beta Access</h2>
          <p className="text-gray-400 mb-6">
            We're currently in private beta and selectively onboarding companies.
            If you're interested in turning your website traffic into qualified leads,
            let's talk.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold hover:opacity-90 transition"
          >
            Request Access
          </Link>
        </section>
      </motion.div>
    </div>
  );
}

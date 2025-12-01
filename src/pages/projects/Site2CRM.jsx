import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Placeholder image component
const ImagePlaceholder = ({ label, aspectRatio = "16/9" }) => (
  <div
    className="w-full rounded-xl bg-gradient-to-br from-violet-900/30 to-cyan-900/30 border border-white/10 flex items-center justify-center overflow-hidden"
    style={{ aspectRatio }}
  >
    <div className="text-center p-8">
      <div className="text-4xl mb-2">🖼️</div>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  </div>
);

export default function Site2CRM() {
  const appUrl = "http://localhost:3001";
  const docsUrl = "http://localhost:3001/docs";

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

        {/* Hero Image */}
        <ImagePlaceholder label="Site2CRM Dashboard - Lead Pipeline & Analytics" />

        {/* Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            Site2CRM transforms anonymous website traffic into actionable CRM intelligence.
            It captures visitor events, enriches company and contact data, scores intent signals,
            and syncs qualified leads directly into your CRM with full attribution.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Unlike traditional lead capture tools that operate as black boxes, Site2CRM provides
            transparent attribution you can audit. Know exactly where leads come from, what actions
            they've taken, and why they were scored the way they were.
          </p>

          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold hover:opacity-90 transition"
          >
            View Dashboard
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
                icon: "🔍",
                title: "Identity Resolution",
                description: "Match anonymous visitors to companies and contacts using multiple data signals including IP, cookies, and behavioral patterns."
              },
              {
                icon: "📊",
                title: "Data Enrichment",
                description: "Automatically enrich leads with firmographic data—company size, industry, tech stack, and decision-maker contacts."
              },
              {
                icon: "🎯",
                title: "Intent Scoring",
                description: "Score leads based on behavior patterns: pages visited, time on site, return visits, and content engagement."
              },
              {
                icon: "✅",
                title: "Auditable Attribution",
                description: "Full transparency into lead sources. See exactly which campaign, content, or referrer brought each lead."
              },
              {
                icon: "🔗",
                title: "Native CRM Sync",
                description: "Direct integration with HubSpot, Pipedrive, Salesforce, and other major CRM platforms. No manual exports."
              },
              {
                icon: "🔒",
                title: "Privacy Compliant",
                description: "Built with GDPR and CCPA compliance from day one. Consent management and data handling built in."
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

        {/* Screenshots */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <ImagePlaceholder label="Lead Pipeline View" aspectRatio="4/3" />
              <p className="text-sm text-gray-400">See all captured leads with enrichment status and intent scores</p>
            </div>
            <div className="space-y-3">
              <ImagePlaceholder label="Company Profile" aspectRatio="4/3" />
              <p className="text-sm text-gray-400">Detailed company insights with firmographic data and visit history</p>
            </div>
            <div className="space-y-3">
              <ImagePlaceholder label="Attribution Report" aspectRatio="4/3" />
              <p className="text-sm text-gray-400">Track lead sources and campaign performance with full transparency</p>
            </div>
            <div className="space-y-3">
              <ImagePlaceholder label="CRM Integration Settings" aspectRatio="4/3" />
              <p className="text-sm text-gray-400">Configure sync rules and field mappings for your CRM</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">How It Works</h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Install the Script",
                description: "Add a lightweight JavaScript snippet to your website. Takes less than 5 minutes and works with any platform.",
                code: `<script src="https://cdn.site2crm.io/tracker.js" data-key="YOUR_API_KEY"></script>`
              },
              {
                step: "2",
                title: "Capture Visitor Activity",
                description: "Site2CRM automatically tracks page views, form fills, button clicks, and time on site. All events are attributed to identified visitors."
              },
              {
                step: "3",
                title: "Enrich & Score",
                description: "Anonymous visitors are matched to companies. Leads are enriched with firmographic data and scored based on engagement signals."
              },
              {
                step: "4",
                title: "Sync to CRM",
                description: "Qualified leads flow directly into your CRM with all enrichment data, attribution info, and activity timeline attached."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white font-bold shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                  <p className="text-gray-400 mt-1">{item.description}</p>
                  {item.code && (
                    <pre className="mt-3 p-3 rounded-lg bg-black/40 border border-white/10 text-sm text-cyan-300 overflow-x-auto">
                      <code>{item.code}</code>
                    </pre>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Example Use Cases */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Example Use Cases</h2>
          <div className="space-y-6">
            {[
              {
                title: "B2B Lead Generation",
                description: "Identify which companies are visiting your pricing page repeatedly. Get alerts when decision-makers from target accounts engage with your content.",
                icon: "🏢"
              },
              {
                title: "Content Attribution",
                description: "Track which blog posts, case studies, and resources drive the most pipeline. Optimize content strategy based on actual conversion data.",
                icon: "📝"
              },
              {
                title: "Sales Intelligence",
                description: "Give sales reps context before outreach. See exactly what pages a prospect viewed, how many times they visited, and what content resonated.",
                icon: "💼"
              },
              {
                title: "ABM Campaign Tracking",
                description: "Monitor target account engagement across campaigns. Know when key accounts are heating up and ready for outreach.",
                icon: "🎯"
              }
            ].map((example, i) => (
              <div key={i} className="border border-white/10 rounded-xl bg-white/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{example.icon}</div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-2">{example.title}</h3>
                    <p className="text-gray-400">{example.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "HubSpot", status: "Available" },
              { name: "Pipedrive", status: "Available" },
              { name: "Salesforce", status: "Coming Soon" },
              { name: "Slack", status: "Available" },
              { name: "Zapier", status: "Coming Soon" },
              { name: "Segment", status: "Coming Soon" },
              { name: "Google Analytics", status: "Available" },
              { name: "Webhooks", status: "Available" },
            ].map((integration, i) => (
              <div key={i} className="border border-white/10 rounded-lg bg-white/5 p-4">
                <div className="font-medium text-white text-sm">{integration.name}</div>
                <div className={`text-xs mt-1 ${
                  integration.status === "Available" ? "text-green-400" : "text-yellow-400"
                }`}>
                  {integration.status}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* API */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Developer API</h2>
          <p className="text-gray-300">
            Full REST API for custom integrations. Track events, retrieve leads, manage enrichment,
            and build custom workflows.
          </p>
          <div className="border border-white/10 rounded-xl bg-black/40 p-5">
            <div className="text-sm text-gray-400 mb-2">Example: Submit a lead</div>
            <pre className="text-sm text-cyan-300 overflow-x-auto">
{`curl -X POST https://api.site2crm.io/v1/leads \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "jane@example.com",
    "company": "Acme Corp",
    "source": "demo-request"
  }'`}
            </pre>
          </div>
          <a
            href={docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 text-sm inline-flex items-center gap-1"
          >
            View API Documentation →
          </a>
        </section>

        {/* Pricing Preview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: "Starter",
                price: "Free",
                description: "For small sites getting started",
                features: ["1,000 visitors/mo", "Basic enrichment", "Email support"]
              },
              {
                tier: "Growth",
                price: "$99/mo",
                description: "For growing B2B companies",
                features: ["10,000 visitors/mo", "Full enrichment", "CRM integrations", "Priority support"]
              },
              {
                tier: "Enterprise",
                price: "Custom",
                description: "For high-volume sites",
                features: ["Unlimited visitors", "Custom enrichment", "Dedicated support", "SLA"]
              }
            ].map((plan, i) => (
              <div key={i} className={`border rounded-xl p-6 ${
                i === 1
                  ? "border-violet-400/50 bg-violet-500/10"
                  : "border-white/10 bg-white/5"
              }`}>
                <div className="font-semibold text-white text-lg">{plan.tier}</div>
                <div className="text-2xl font-bold text-white mt-2">{plan.price}</div>
                <div className="text-sm text-gray-400 mt-1">{plan.description}</div>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">* Pricing subject to change. Currently in private beta.</p>
        </section>

        {/* Roadmap */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Roadmap</h2>
          <div className="space-y-4">
            {[
              { phase: "Q4 2025", milestone: "Private beta with HubSpot and Pipedrive integrations", status: "current" },
              { phase: "Q1 2026", milestone: "Salesforce integration and advanced scoring models" },
              { phase: "Q2 2026", milestone: "Attribution reporting dashboard and Zapier integration" },
              { phase: "H2 2026", milestone: "Public launch with self-serve signup and pricing tiers" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className={`text-sm font-medium w-20 shrink-0 ${
                  item.status === "current" ? "text-violet-400" : "text-cyan-400"
                }`}>
                  {item.phase}
                </span>
                <div className="flex gap-3 items-start">
                  <span className={`mt-2 h-2 w-2 rounded-full shrink-0 ${
                    item.status === "current" ? "bg-violet-400" : "bg-violet-400/70"
                  }`} />
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
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold hover:opacity-90 transition"
            >
              Request Access
            </Link>
            <a
              href={docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 font-semibold hover:bg-white/5 transition"
            >
              View Docs
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

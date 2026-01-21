import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

// Import media
import features1 from "../../assets/features1.png";
import features2 from "../../assets/features2.png";
import features3 from "../../assets/features3.png";
import features4 from "../../assets/features4.png";
import features1Video from "../../assets/features1.webm";
import features2Video from "../../assets/features2.webm";
import features3Video from "../../assets/features3.webm";
import site2crmHero from "../../assets/images/project-site2crm-hero.webp";

export default function Site2CRM() {
  const appUrl = "https://site2crm.io";

  return (
    <div className="relative z-10 text-gray-300 space-y-16 max-w-4xl mx-auto px-6 md:px-8 lg:px-12 pt-20 md:pt-24 pb-20">
      <SEO
        title="Site2CRM - Custom Lead Analytics Software | Axion Deep Labs"
        description="Custom software solution for lead capture and CRM integration. Embeddable forms with AI lead scoring sync to HubSpot, Salesforce, Pipedrive, or Zoho. Built by Axion Deep Labs."
        keywords="custom lead management software, CRM integration software, AI lead scoring software, custom software solutions, SaaS lead capture, HubSpot integration, Salesforce sync"
        canonical="/projects/site2crm"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" },
          { name: "Site2CRM", url: "/projects/site2crm" }
        ]}
        software={{
          name: "Site2CRM",
          description: "Lead capture forms with AI-powered scoring that sync directly to HubSpot, Salesforce, Pipedrive, or Zoho CRM in real-time.",
          category: "BusinessApplication",
          url: "/projects/site2crm",
          price: "29",
          features: ["AI Lead Scoring", "CRM Integration", "Embeddable Forms", "A/B Testing", "Salesperson Analytics", "Team Leaderboards"]
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-300 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Live Product
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold text-white">
                Site2CRM
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-300 mt-4">
            Lead Capture Forms That Sync to Your CRM
          </p>
          <p className="text-gray-400 mt-3 max-w-2xl">
            Capture leads with embeddable forms, score them with AI-powered win probability,
            and sync directly to HubSpot, Salesforce, Pipedrive, or Zoho in real-time.
          </p>
        </div>

        {/* Hero Video */}
        <div className="rounded-xl overflow-hidden border border-white/10">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={features1}
            className="w-full"
          >
            <source src={features1Video} type="video/webm" />
            <img src={features1} alt="Site2CRM Dashboard" loading="lazy" />
          </video>
        </div>

        {/* Origin Story */}
        <section className="border border-green-500/20 rounded-xl bg-gradient-to-br from-green-900/10 to-cyan-900/10 p-6 md:p-8">
          <h2 className="text-xl font-semibold text-white mb-4">Why We Built This</h2>
          <p className="text-gray-300 leading-relaxed">
            Born from cold-calling frustration: manually entering each lead into a CRM took 7 minutes.
            With 30+ leads per day, that's 3.5 hours wasted on data entry. Site2CRM eliminated this
            entirely—leads flow from form submission to CRM automatically, with full attribution
            and AI scoring attached.
          </p>
        </section>

        {/* Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            Site2CRM captures leads from embeddable forms on your website and pushes them directly
            to your CRM with complete attribution data. Every lead is automatically scored using
            AI-powered win probability, and your sales team can track performance with built-in
            analytics and gamification.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Unlike generic form builders, Site2CRM is built specifically for B2B sales teams.
            Track UTM parameters, run A/B tests on form variants, monitor salesperson performance,
            and keep your team motivated with leaderboards and achievements.
          </p>

          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-green-600 font-semibold hover:opacity-90 transition"
          >
            Launch Site2CRM
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Platform Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🤖",
                title: "AI Lead Scoring",
                description: "Win probability prediction with engagement, source quality, deal value, pipeline velocity, and profile fit components—all calculated automatically."
              },
              {
                icon: "📊",
                title: "Salesperson Analytics",
                description: "Track calls, emails, meetings, and deals per salesperson. View detailed activity metrics, performance trends, and conversion rates."
              },
              {
                icon: "🏆",
                title: "Gamification & Leaderboards",
                description: "Points, badges, streak tracking, and performance rankings. Keep your sales team engaged and motivated with built-in competitions."
              },
              {
                icon: "🧪",
                title: "A/B Testing",
                description: "Create form variants and compare conversion rates. Automatic winner detection based on lead count and conversion data."
              },
              {
                icon: "🔗",
                title: "Full Attribution",
                description: "Capture UTM parameters (source, medium, campaign, term, content), landing page URLs, and referrer data on every lead."
              },
              {
                icon: "📝",
                title: "Embeddable Forms",
                description: "Customizable lead capture forms with configurable fields. Embed anywhere with a simple script tag. CORS-enabled for cross-site use."
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
          <h2 className="text-2xl font-semibold text-white">In Action</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="rounded-xl overflow-hidden border border-white/10">
                <video autoPlay loop muted playsInline poster={features2} className="w-full">
                  <source src={features2Video} type="video/webm" />
                  <img src={features2} alt="Lead Analytics" loading="lazy" />
                </video>
              </div>
              <p className="text-sm text-gray-400">Lead analytics with source breakdown and trendlines</p>
            </div>
            <div className="space-y-3">
              <div className="rounded-xl overflow-hidden border border-white/10">
                <video autoPlay loop muted playsInline poster={features3} className="w-full">
                  <source src={features3Video} type="video/webm" />
                  <img src={features3} alt="Salesperson Dashboard" loading="lazy" />
                </video>
              </div>
              <p className="text-sm text-gray-400">Salesperson dashboard with activity metrics</p>
            </div>
            <div className="space-y-3 md:col-span-2">
              <img
                src={features4}
                alt="Team Leaderboard"
                loading="lazy"
                className="w-full rounded-xl border border-white/10"
              />
              <p className="text-sm text-gray-400">Team leaderboard with gamification and achievements</p>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">CRM Integrations</h2>
          <p className="text-gray-400">
            Real-time sync with major CRM platforms. Leads push automatically with all attribution
            and scoring data attached.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "HubSpot", status: "Live", auth: "OAuth + API" },
              { name: "Salesforce", status: "Live", auth: "OAuth 2.0" },
              { name: "Pipedrive", status: "Live", auth: "API Key" },
              { name: "Zoho", status: "Live", auth: "OAuth" },
              { name: "Google Sign-In", status: "Live", auth: "OAuth" },
              { name: "Webhooks", status: "Live", auth: "API" },
              { name: "Slack Alerts", status: "Live", auth: "Webhook" },
              { name: "Zapier", status: "Coming Soon", auth: "" },
            ].map((integration, i) => (
              <div key={i} className="border border-white/10 rounded-lg bg-white/5 p-4">
                <div className="font-medium text-white text-sm">{integration.name}</div>
                <div className={`text-xs mt-1 ${
                  integration.status === "Live" ? "text-green-400" : "text-yellow-400"
                }`}>
                  {integration.status}
                </div>
                {integration.auth && (
                  <div className="text-xs text-gray-500 mt-1">{integration.auth}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: "Starter",
                price: "$29",
                period: "/month",
                description: "For small teams getting started",
                features: ["500 leads/month", "1 CRM integration", "Basic analytics", "Email support"],
                highlight: false
              },
              {
                tier: "Pro",
                price: "$79",
                period: "/month",
                description: "For growing sales teams",
                features: ["Unlimited leads", "All CRM integrations", "AI lead scoring", "A/B testing", "Priority support"],
                highlight: true
              },
              {
                tier: "AppSumo Lifetime",
                price: "$249",
                period: "one-time",
                description: "Limited availability",
                features: ["1,000 leads/month", "2 CRM integrations", "2 forms", "Lifetime access", "All future updates"],
                highlight: false
              }
            ].map((plan, i) => (
              <div key={i} className={`border rounded-xl p-6 ${
                plan.highlight
                  ? "border-green-500/40 bg-gradient-to-br from-green-900/20 to-cyan-900/20"
                  : "border-white/10 bg-white/[0.03]"
              }`}>
                <div className="font-semibold text-white text-lg">{plan.tier}</div>
                <div className="mt-2 mb-4">
                  <span className="text-2xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </div>
                <div className="text-sm text-gray-400 mb-4">{plan.description}</div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="text-sm text-gray-300 flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-2.5 rounded-lg font-medium transition ${
                    plan.highlight
                      ? "bg-gradient-to-r from-cyan-500 to-green-600 hover:opacity-90"
                      : "bg-white/10 hover:bg-white/15 border border-white/20"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance & Security */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Security & Compliance</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "GDPR Compliant", desc: "Full data export and account deletion", icon: "🔒" },
              { title: "Rate Limited", desc: "Protection against abuse and spam", icon: "🛡️" },
              { title: "Stripe Payments", desc: "PCI-compliant payment processing", icon: "💳" },
            ].map((item, i) => (
              <div key={i} className="border border-white/10 rounded-lg bg-white/5 p-4 flex items-start gap-3">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <div className="font-medium text-white text-sm">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
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
              { name: "React 19", desc: "Frontend" },
              { name: "TypeScript", desc: "Type Safety" },
              { name: "FastAPI", desc: "Backend" },
              { name: "PostgreSQL", desc: "Database" },
              { name: "Claude AI", desc: "Lead Scoring" },
              { name: "Stripe", desc: "Payments" },
              { name: "AWS", desc: "Infrastructure" },
              { name: "Tailwind", desc: "Styling" },
            ].map((tech, i) => (
              <div key={i} className="border border-white/10 rounded-lg bg-white/5 p-3 text-center">
                <div className="font-medium text-white text-sm">{tech.name}</div>
                <div className="text-xs text-gray-500">{tech.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Start Capturing Leads Today</h2>
          <p className="text-gray-400 mb-6">
            Site2CRM is live and processing leads for SaaS teams. Sign up free with your Google
            account or email to start syncing leads to your CRM in minutes.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-green-600 font-semibold hover:opacity-90 transition"
            >
              Launch Site2CRM
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 rounded-full border border-white/20 font-semibold hover:bg-white/5 transition"
            >
              Contact Sales
            </Link>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

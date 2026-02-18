import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Site2CRM — AI Lead Capture & CRM Integration",
  description: "Site2CRM connects your website to your CRM in real time with AI chat agents that qualify leads, handle objections, and sync to HubSpot, Salesforce, and more.",
  keywords: [
    "AI lead capture",
    "CRM integration",
    "AI chat agents",
    "lead conversion",
    "HubSpot integration",
    "Salesforce integration",
  ],
  alternates: { canonical: "/projects/site2crm" },
};

export default function Site2CRMPage() {
  return (
    <div className="no-snap min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-300 border border-green-500/30">
              Live
            </span>
            <span className="text-xs px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              SaaS
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Site2CRM: AI-Powered Lead Capture &amp; CRM Integration</h1>
          <p className="text-xl text-cyan-400 font-medium mb-4">
            Your website talks to your CRM. Automatically.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Site2CRM bridges the gap between your website and your sales pipeline. AI-powered
            chat agents engage visitors in natural conversation, qualify leads based on your
            criteria, handle up to 10 objection rebuttals per conversation, and sync qualified
            contacts directly into your CRM in real time. Every interaction is scored, tracked,
            and ready for your sales team to act on.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20">
            <p className="text-3xl font-bold text-cyan-400">5+</p>
            <p className="text-sm text-gray-500 mt-1">CRM Integrations</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
            <p className="text-3xl font-bold text-blue-400">10x</p>
            <p className="text-sm text-gray-500 mt-1">Objection Rebuttals</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/20">
            <p className="text-3xl font-bold text-teal-400">Real-Time</p>
            <p className="text-sm text-gray-500 mt-1">CRM Sync</p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Core Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">AI Chat Agents</h3>
              <p className="text-sm text-gray-400">
                Persistent AI agents that engage website visitors in natural conversation.
                They qualify leads based on your custom criteria, handle objections with up
                to 10 intelligent rebuttals, and guide prospects toward conversion.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Real-Time CRM Sync</h3>
              <p className="text-sm text-gray-400">
                Qualified leads sync directly to your CRM the moment they convert. No manual
                data entry, no CSV exports. Contact records include conversation history,
                lead score, and qualification data.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/10">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Lead Scoring &amp; Analytics</h3>
              <p className="text-sm text-gray-400">
                Every visitor interaction is scored based on engagement depth, qualification
                responses, and conversion intent. Analytics dashboard shows conversion rates,
                top objections, and pipeline value in real time.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/10">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Multi-Step Forms</h3>
              <p className="text-sm text-gray-400">
                Create multi-step lead capture forms that progressively collect information
                without overwhelming visitors. Each step adapts based on previous responses,
                keeping completion rates high.
              </p>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">CRM Integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {["HubSpot", "Salesforce", "Pipedrive", "Zoho", "Nutshell"].map((crm) => (
              <div key={crm} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-400 text-center">
                {crm}
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">How AI Lead Capture Works</h2>
          <div className="space-y-4">
            {[
              { step: "01", title: "Install the Widget", desc: "Add a single script tag to your website. The AI chat agent appears as a customizable widget that matches your brand colors and messaging. No code changes to your existing site required." },
              { step: "02", title: "AI Engages Visitors", desc: "When a visitor arrives, the AI agent initiates natural conversation based on the page context. It qualifies leads by asking your custom qualification questions, handles up to 10 objection rebuttals per conversation, and guides prospects toward conversion." },
              { step: "03", title: "Leads Sync to Your CRM", desc: "Qualified contacts are pushed to your CRM in real time — HubSpot, Salesforce, Pipedrive, Zoho, or Nutshell. Each contact record includes the full conversation transcript, lead score, qualification responses, and source attribution." },
              { step: "04", title: "Analyze and Optimize", desc: "The analytics dashboard shows conversion rates by page, top objection categories, average conversation length, and pipeline value. Use these insights to refine your AI agent prompts and improve lead quality over time." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start rounded-xl bg-white/[0.02] border border-cyan-500/10 p-5">
                <span className="text-2xl font-bold text-cyan-400 opacity-40 shrink-0 w-8 text-right">
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

        {/* Why Site2CRM */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Why Teams Choose Site2CRM for CRM Integration</h2>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/[0.08] to-blue-500/[0.04] border border-white/[0.08]">
            <p className="text-gray-400 leading-relaxed mb-4">
              Traditional lead capture forms have a problem: visitors abandon them. Static forms
              cannot answer questions, overcome objections, or adapt to individual visitors.
              Site2CRM replaces passive forms with persistent AI chat agents that have real
              conversations, qualify leads based on your specific criteria, and push qualified
              contacts directly into your CRM pipeline without manual data entry.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The real-time CRM integration eliminates the gap between lead capture and sales
              follow-up. Your team sees new qualified leads appear in their CRM the moment a
              conversation converts, complete with conversation history, lead score, and
              qualification data. Combined with multi-step forms for structured data collection
              and a full analytics dashboard, Site2CRM provides a complete AI-powered lead capture
              and CRM integration solution.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["React", "FastAPI", "PostgreSQL", "DeepSeek", "Stripe", "AWS", "Redis"].map((tech) => (
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
          <a
            href="https://site2crm.io"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white hover:opacity-90 transition"
          >
            Get Started Free
          </a>
          <a
            href="https://site2crm.io"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-white/20 font-medium text-white hover:bg-white/5 transition flex items-center gap-2"
          >
            See Demo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/solutions" className="text-gray-400 hover:text-white transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Solutions
          </Link>
        </div>
      </div>
    </div>
  );
}

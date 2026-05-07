import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Made4Founders - Startup Command Center",
  description: "Made4Founders is the all-in-one command center for solo founders. AI daily briefs, encrypted document vault, compliance tracking, investor CRM, and more.",
  alternates: { canonical: "/projects/made4founders" },
};

export default function Made4FoundersPage() {
  return (
    <div className="no-snap min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-300 border border-green-500/30">
              Live
            </span>
            <span className="text-xs px-2 py-1 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30">
              SaaS
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Made4Founders: All-in-One Startup Command Center</h1>
          <p className="text-xl text-orange-400 font-medium mb-4">
            Your startup&apos;s command center. One dashboard to rule them all.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Built for founders who juggle a thousand things at once. AI-powered daily briefs
            surface what matters, encrypted document vaults keep your cap table and contracts
            secure, and compliance tracking ensures you never miss a deadline.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20">
            <p className="text-3xl font-bold text-orange-400">500+</p>
            <p className="text-sm text-gray-500 mt-1">Active Founders</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20">
            <p className="text-3xl font-bold text-red-400">$2.4B</p>
            <p className="text-sm text-gray-500 mt-1">Tracked Raises</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20">
            <p className="text-3xl font-bold text-amber-400">99.9%</p>
            <p className="text-sm text-gray-500 mt-1">Uptime SLA</p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Core Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/10">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">AI Daily Briefs</h3>
              <p className="text-sm text-gray-400">
                Every morning, get a personalized summary of tasks, metrics, deadlines, and priorities.
                The AI learns your patterns and surfaces what matters most.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/10">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Encrypted Document Vault</h3>
              <p className="text-sm text-gray-400">
                AES-256 encrypted storage for your most sensitive documents. Cap tables, contracts,
                term sheets - all secured with bank-grade encryption.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/10">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Compliance Tracking</h3>
              <p className="text-sm text-gray-400">
                96-item business checklist covering SOC2, GDPR, and legal requirements.
                Automatic deadline alerts so you never miss a filing.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/10">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Investor CRM</h3>
              <p className="text-sm text-gray-400">
                Track your fundraising pipeline from intro to term sheet. Manage relationships,
                schedule follow-ups, and never lose track of a warm lead.
              </p>
            </div>
          </div>
        </div>

        {/* More Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Also Included</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Cap Table Management",
              "409A Valuation Tracking",
              "Investor Updates",
              "Data Room",
              "Team Directory",
              "PTO Tracking",
              "Contractor Management",
              "Meeting Transcripts",
              "Competitor Monitoring",
              "KPI Dashboard",
              "Bank Integrations",
              "Stripe Revenue Sync",
            ].map((feature) => (
              <div key={feature} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-400">
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">How the Startup Command Center Works</h2>
          <div className="space-y-4">
            {[
              { step: "01", title: "Connect Your Accounts", desc: "Link your bank accounts via Plaid, connect Stripe for revenue tracking, and import your cap table. Made4Founders pulls everything into a single command center so you stop switching between twelve tabs." },
              { step: "02", title: "AI Generates Your Daily Brief", desc: "Every morning, the AI assistant analyzes your runway, upcoming deadlines, compliance gaps, and investor pipeline. You get a personalized briefing that surfaces what matters most, not a generic dashboard." },
              { step: "03", title: "Track Compliance Automatically", desc: "The 96-item compliance checklist covers formation documents, state filings, tax deadlines, SOC2 readiness, GDPR requirements, and employment law basics. Automatic alerts ensure nothing falls through the cracks." },
              { step: "04", title: "Manage Your Fundraise", desc: "Track every investor from warm intro to term sheet. Log meeting notes, set follow-up reminders, and maintain a clean data room with AES-256 encrypted document storage. Your cap table updates automatically as rounds close." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start rounded-xl bg-white/[0.02] border border-orange-500/10 p-5">
                <span className="text-2xl font-bold text-orange-400 opacity-40 shrink-0 w-8 text-right">
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

        {/* Why Founders Choose Made4Founders */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Why Solo Founders Choose Made4Founders</h2>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/[0.08] to-red-500/[0.04] border border-white/[0.08]">
            <p className="text-gray-400 leading-relaxed mb-4">
              Most startup tools assume you have a team. Made4Founders is built for the solo founder
              and small teams of 1-5 people who wear every hat. Instead of paying for separate
              tools for compliance, cap table management, investor relations, document storage,
              and financial tracking, everything lives in one all-in-one platform with a single
              login and a unified dashboard.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The AI daily brief is what sets Made4Founders apart from generic project management
              tools. It learns your patterns, understands your runway, and proactively surfaces
              risks before they become problems. Combined with bank-grade AES-256 encryption for
              your most sensitive documents and real-time financial data from Plaid and Stripe
              integrations, it is the command center that replaces the dozen browser tabs you have
              open right now.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["React", "TypeScript", "FastAPI", "PostgreSQL", "Ollama AI", "Stripe", "Plaid", "AWS"].map((tech) => (
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
            href="https://made4founders.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 font-semibold text-white hover:opacity-90 transition"
          >
            Try It Free
          </a>
          <a
            href="https://made4founders.com/features"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-white/20 font-medium text-white hover:bg-white/5 transition flex items-center gap-2"
          >
            See All Features
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
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

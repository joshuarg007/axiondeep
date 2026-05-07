import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import BookingWidget from "@/components/BookingWidget";
import Site2CRMWidget from "@/components/Site2CRMWidget";

export const metadata: Metadata = {
  title: "Lead Capture | Turn Visitors Into Leads",
  description:
    "Smart lead capture forms, AI chat widgets, and direct CRM integration powered by Site2CRM. Stop losing leads to manual data entry.",
  keywords: [
    "lead capture",
    "CRM integration",
    "lead generation",
    "Site2CRM",
    "HubSpot integration",
    "Salesforce integration",
    "automated lead capture",
  ],
  alternates: { canonical: "/marketing/lead-capture" },
  openGraph: {
    title: "Lead Capture | Axion Deep Marketing",
    description: "Every visitor becomes a qualified lead. Smart forms + AI chat + direct CRM sync.",
    url: "/marketing/lead-capture",
    images: [
      {
        url: "/images/marketing/og-lead-capture-crm-integration.png",
        width: 1200,
        height: 630,
        alt: "Axion Deep lead capture, automated form and AI chat to CRM integration powered by Site2CRM",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lead Capture Services",
  provider: {
    "@type": "ProfessionalService",
    name: "Axion Deep Marketing",
    url: "https://www.axiondeep.com/marketing",
  },
  description: "Automated lead capture with CRM integration powered by Site2CRM.",
  url: "https://www.axiondeep.com/marketing/lead-capture",
  serviceType: "Lead Generation",
};

const crms = [
  { name: "HubSpot", color: "text-orange-400", border: "border-orange-500/20" },
  { name: "Salesforce", color: "text-blue-400", border: "border-blue-500/20" },
  { name: "Pipedrive", color: "text-emerald-400", border: "border-emerald-500/20" },
  { name: "Nutshell", color: "text-yellow-400", border: "border-yellow-500/20" },
  { name: "Zoho", color: "text-red-400", border: "border-red-500/20" },
];

const painPoints = [
  { problem: "7 minutes per lead entry", solution: "Instant, zero manual entry" },
  { problem: "30 leads/day = 3.5 hours wasted", solution: "3.5 hours saved every day" },
  { problem: "Leads slip through the cracks", solution: "Every lead captured, every time" },
  { problem: "No source tracking", solution: "UTM, referrer, landing page tracked" },
];

export default function LeadCapturePage() {
  return (
    <div className="no-snap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 overflow-hidden">
        {/* Hero background image */}
        <Image
          src="/images/marketing/lead-capture-crm-integration-hero.webp"
          alt="Lead capture and CRM integration visualization showing website forms connecting directly to HubSpot, Salesforce, and Pipedrive"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/60 via-[#050507]/80 to-[#050507]" />

        <p className="relative text-fuchsia-400 font-medium tracking-widest uppercase text-sm mb-6">
          Lead Capture
        </p>
        <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-white" style={{ textShadow: "0 0 40px rgba(255,255,255,0.3)" }}>
            Stop losing{" "}
          </span>
          <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
            leads
          </span>
        </h1>
        <p className="relative text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Every visitor who leaves your site without converting is lost revenue. Our lead capture system, powered by Site2CRM, makes sure that never happens.
        </p>
        <div className="relative flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="shimmer-button px-8 py-4 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-600 font-semibold text-white hover:opacity-90 transition-opacity text-lg">
            Get a Quote
          </a>
          <Link href="/marketing" className="px-8 py-4 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 transition-colors text-lg">
            All Services
          </Link>
        </div>
      </section>

      {/* Pain Points */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The real cost of manual entry</h2>
            <p className="text-gray-400">This is what we built Site2CRM to solve.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {painPoints.map((item) => (
              <div key={item.problem} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-red-400/70 text-sm line-through mb-1">{item.problem}</p>
                    <p className="text-emerald-400 font-medium">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-fuchsia-400 font-medium tracking-widest uppercase text-sm mb-4">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              From first click to qualified lead in your CRM
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Site2CRM combines smart multi-step forms, a 24/7 AI chat widget, and a server-side webhook layer
              that writes directly to your CRM. No middleware to babysit, no Zapier zaps to debug, no data loss
              between tools. Every lead is captured, enriched, and routed automatically.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-fuchsia-400 text-2xl font-bold mb-3">01</div>
              <h3 className="text-white font-semibold mb-2">Visitor interacts</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A prospect lands on your site and either fills out a qualification form or chats with the AI
                assistant. The assistant asks qualifying questions based on your ideal customer profile and
                captures intent in natural conversation. Works 24 hours a day, so after-hours traffic still
                converts into booked calls and real pipeline.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-cyan-400 text-2xl font-bold mb-3">02</div>
              <h3 className="text-white font-semibold mb-2">Lead gets enriched</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The server stamps every submission with UTM parameters, referrer, landing page, device, and
                timestamp. Email addresses are validated, phone numbers are normalized, and company domains
                are matched to firmographic data when available. Junk submissions get filtered before they
                ever reach your sales pipeline.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-emerald-400 text-2xl font-bold mb-3">03</div>
              <h3 className="text-white font-semibold mb-2">CRM receives the lead</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A signed webhook fires to your CRM with the enriched payload. HubSpot, Salesforce, Pipedrive,
                Nutshell, and Zoho all have first-class adapters, and the Zapier fallback handles anything
                custom. Your sales team sees the lead in under two seconds with every field they need to
                follow up intelligently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Integrations */}
      <section className="px-6 py-24 border-y border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-fuchsia-400 font-medium tracking-widest uppercase text-sm mb-4">Integrations</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Connects to your CRM
          </h2>
          <p className="text-gray-400 mb-8">
            Leads flow directly into the CRM you already use. No middleware, no manual import, no delays.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {crms.map((crm) => (
              <div
                key={crm.name}
                className={`px-6 py-3 rounded-xl bg-white/[0.03] border ${crm.border} ${crm.color} font-semibold text-sm`}
              >
                {crm.name}
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-4">
            + Zapier integration for 5,000+ apps
          </p>
        </div>
      </section>

      {/* Live demo */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4">Live Demo</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Try it right now
          </h2>
          <p className="text-gray-400 mb-8">
            The chat widget in the bottom-right corner is a live Site2CRM instance. Try sending a message, that&apos;s exactly what your customers would experience.
          </p>
          <Site2CRMWidget orgKey="org_jUITQNG0ZcPF_KJ0vplRQV8rwWk0pvR9" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 py-24">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-fuchsia-400 font-medium tracking-widest uppercase text-sm mb-4">Get Started</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Never lose a lead again
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Book a free call and we&apos;ll show you exactly how many leads your current site is losing, and how to capture every one of them.
            </p>
            <BookingWidget slug="axiondeep" buttonText="Book a Demo" buttonColor="#ec4899" />
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06]">
            <h3 className="text-lg font-semibold text-white mb-6">Send us a message</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SEOAuditTool from "@/components/marketing/SEOAuditTool";
import ContactForm from "@/components/ContactForm";
import BookingWidget from "@/components/BookingWidget";

export const metadata: Metadata = {
  title: "Squarespace SEO Help | Get Your Site Found",
  description:
    "Squarespace looks great but throttles your SEO control. We push your site as far as the platform allows and tell you honestly when a move makes sense. Free audit included.",
  keywords: [
    "Squarespace SEO",
    "is Squarespace good for SEO",
    "Squarespace SEO help",
    "how to improve Squarespace SEO",
    "Squarespace SEO expert",
    "Squarespace site slow",
  ],
  alternates: { canonical: "/marketing/squarespace-seo" },
  openGraph: {
    title: "Squarespace SEO Help | Axion Deep Marketing",
    description: "We push your Squarespace site as far as the platform allows and tell you honestly when a move makes sense.",
    url: "/marketing/squarespace-seo",
    images: [
      {
        url: "/images/marketing/og-seo-services-search-optimization.png",
        width: 1200,
        height: 630,
        alt: "Axion Deep Squarespace SEO help, optimizing existing Squarespace sites for search visibility",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Squarespace SEO Help",
  provider: {
    "@type": "ProfessionalService",
    name: "Axion Deep Marketing",
    url: "https://www.axiondeep.com/marketing",
  },
  description: "On-platform SEO optimization for existing Squarespace sites, with honest migration advice when the platform is the limit.",
  url: "https://www.axiondeep.com/marketing/squarespace-seo",
  serviceType: "Squarespace SEO Optimization",
};

const process = [
  {
    num: "01",
    title: "Free Audit",
    desc: "Your live Squarespace URL runs through our DeepAudit tool. You get a 100-plus point report, and we flag what's fixable on Squarespace versus what's a platform ceiling.",
    color: "from-slate-400 to-gray-500",
  },
  {
    num: "02",
    title: "Triage & Quote",
    desc: "We split the on-platform wins from the limits, quote a fixed scope, and show the migration math only if you're at the ceiling.",
    color: "from-gray-500 to-zinc-500",
  },
  {
    num: "03",
    title: "Optimize on Squarespace",
    desc: "On-page SEO, schema via code blocks, image and speed optimization, internal linking, local SEO and Google Business Profile, and indexation cleanup, all inside your site.",
    color: "from-zinc-500 to-neutral-400",
  },
  {
    num: "04",
    title: "Verify or Migrate",
    desc: "We re-run the audit for a clean before and after. If you've hit the ceiling, we lay out a redirect-safe migration that protects your rankings.",
    color: "from-emerald-500 to-teal-500",
  },
];

const whatWeFix = [
  {
    title: "Is Squarespace good for SEO?",
    desc: "For a simple local business or portfolio site, often yes. It produces valid markup, lets you edit titles and meta descriptions, generates a sitemap, and supports SSL. The ceilings show up as you grow: limited speed control, a fixed URL structure, restricted redirects, and templates that load more than the page needs.",
  },
  {
    title: "What we fix on Squarespace right now",
    desc: "Most Squarespace sites lose rankings to fixable things long before any platform limit: template-default titles, no structured data, oversized images, thin local content, an unoptimized Google Business Profile, and pages that were never indexed. We fix all of it inside Squarespace. For most local businesses that's the gap between buried and visible.",
  },
  {
    title: "Schema and speed within the platform",
    desc: "We inject structured data through code blocks so your pages qualify for rich results, optimize images and delivery within Squarespace's options, clean up internal linking, and submit and monitor your sitemap in Search Console so every page actually gets indexed.",
  },
  {
    title: "When moving off Squarespace makes sense",
    desc: "If you've optimized everything the platform allows and still lose to faster sites, or you need ecommerce depth or custom functionality, migrating becomes the honest move. We don't lead with it. When it's right, we do it carefully with a full URL audit, 301 redirects on every page, and a faster custom build. You see the cost both ways first.",
  },
];

const faqs = [
  {
    q: "Is Squarespace good for SEO?",
    a: "For simple local and portfolio sites, yes, once the basics are done right. It has ceilings on speed and control that show up as you grow. We optimize within them and tell you when you've hit one.",
  },
  {
    q: "Can you do SEO on my existing Squarespace site?",
    a: "Yes. We handle on-page SEO, schema, image and speed optimization, internal linking, and local SEO directly in Squarespace, no migration required.",
  },
  {
    q: "Why isn't my Squarespace site ranking?",
    a: "Usually template-default titles, missing schema, oversized images, thin local content, or pages that were never indexed. All fixable on the platform. The free audit pinpoints it.",
  },
  {
    q: "Should I switch from Squarespace to rank better?",
    a: "Only after you've maxed out what the platform allows. We optimize Squarespace first and recommend migrating only when the numbers favor it, with redirects to keep your rankings.",
  },
  {
    q: "How much does Squarespace SEO help cost?",
    a: "Fixed scope quoted after the free audit. On-platform optimization costs a fraction of a migration, which is why it's always our first move.",
  },
];

export default function SquarespaceSEOPage() {
  return (
    <div className="no-snap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 overflow-hidden">
        <Image
          src="/images/marketing/seo-services-search-rankings-hero.webp"
          alt="Search rankings dashboard for a Squarespace site, showing keyword visibility and indexation after optimization"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/60 via-[#050507]/80 to-[#050507]" />

        <p className="relative text-slate-300 font-medium tracking-widest uppercase text-sm mb-6">
          Squarespace SEO
        </p>
        <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-white" style={{ textShadow: "0 0 40px rgba(255,255,255,0.3)" }}>
            Get your Squarespace site{" "}
          </span>
          <span className="bg-gradient-to-r from-slate-300 to-zinc-400 bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
            found
          </span>
        </h1>
        <p className="relative text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Squarespace makes a beautiful site and then quietly limits how far you can take its SEO and speed. We get yours to the edge of what the platform allows, and we&apos;re straight with you about where that edge is.
        </p>
        <div className="relative flex flex-col sm:flex-row gap-4">
          <a href="#audit" className="shimmer-button px-8 py-4 rounded-xl bg-gradient-to-r from-slate-500 to-zinc-600 font-semibold text-white hover:opacity-90 transition-opacity text-lg">
            Run a Free Audit
          </a>
          <Link href="/marketing" className="px-8 py-4 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 transition-colors text-lg">
            All Services
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <p className="text-slate-300 font-medium tracking-widest uppercase text-sm mb-4">How It Works</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Optimize first, migrate only if you must
              </h2>
              <p className="text-gray-400 leading-relaxed">
                We start with the free audit so you can see exactly what&apos;s fixable on Squarespace and what&apos;s a platform ceiling, then we fix the wins on a fixed scope you approve up front.
              </p>
            </div>
            <div className="space-y-10">
              {process.map((step, i) => (
                <div key={step.num} className="relative pl-20">
                  <div className={`absolute left-0 top-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {step.num}
                  </div>
                  {i < process.length - 1 && (
                    <div className="absolute left-7 top-14 w-px h-[calc(100%+2.5rem)] bg-gradient-to-b from-white/20 to-transparent" />
                  )}
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we fix */}
      <section className="px-6 py-24 border-y border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-slate-300 font-medium tracking-widest uppercase text-sm mb-4">What We Fix</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How far your Squarespace site can go
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              The honest breakdown of what we fix inside Squarespace, and where the platform draws the line.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {whatWeFix.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live SEO Audit */}
      <div id="audit">
        <SEOAuditTool />
      </div>

      {/* FAQ */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 py-24">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-slate-300 font-medium tracking-widest uppercase text-sm mb-4">Get Started</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See how far your Squarespace site can go
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Book a free call. We&apos;ll review your audit together, show you the on-platform wins, and tell you honestly whether the platform is holding you back.
            </p>
            <BookingWidget slug="axiondeep" buttonText="Book a Free Call" buttonColor="#94a3b8" />
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

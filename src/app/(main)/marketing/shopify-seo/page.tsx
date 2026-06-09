import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SEOAuditTool from "@/components/marketing/SEOAuditTool";
import ContactForm from "@/components/ContactForm";
import BookingWidget from "@/components/BookingWidget";

export const metadata: Metadata = {
  title: "Shopify SEO Help | Fix Speed & Product Rankings",
  description:
    "Slow, unranked Shopify store? We fix product and collection SEO, speed, and conversion on your existing store. A free audit shows what's costing you sales. No replatform.",
  keywords: [
    "Shopify SEO",
    "Shopify site slow",
    "Shopify SEO expert",
    "how to improve Shopify SEO",
    "Shopify speed optimization",
    "Shopify store not ranking",
  ],
  alternates: { canonical: "/marketing/shopify-seo" },
  openGraph: {
    title: "Shopify SEO Help | Axion Deep Marketing",
    description: "We fix product and collection SEO, speed, and conversion on your existing Shopify store. No replatform.",
    url: "/marketing/shopify-seo",
    images: [
      {
        url: "/images/marketing/og-seo-services-search-optimization.png",
        width: 1200,
        height: 630,
        alt: "Axion Deep Shopify SEO help, fixing product and collection SEO, speed, and conversion on existing stores",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopify SEO Help",
  provider: {
    "@type": "ProfessionalService",
    name: "Axion Deep Marketing",
    url: "https://www.axiondeep.com/marketing",
  },
  description: "Product and collection SEO, speed, and conversion fixes for existing Shopify stores. No replatform required.",
  url: "https://www.axiondeep.com/marketing/shopify-seo",
  serviceType: "Shopify SEO Optimization",
};

const process = [
  {
    num: "01",
    title: "Free Audit",
    desc: "Your live Shopify URL runs through our DeepAudit tool. You get a 100-plus point report covering product and collection SEO, duplicate content, speed, and Core Web Vitals. No signup.",
    color: "from-green-500 to-emerald-500",
  },
  {
    num: "02",
    title: "Triage & Quote",
    desc: "We rank the findings by impact on traffic and conversion, then quote a fixed scope. You approve before we touch the store.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    num: "03",
    title: "Optimize",
    desc: "Product and collection SEO, structured data, canonical and crawl cleanup, image and speed optimization, and app-bloat reduction, applied on a theme copy first, signed off, then shipped.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    num: "04",
    title: "Verify & Grow",
    desc: "We re-run the audit for a clean before and after, then optionally fold the store into ongoing SEO so rankings and Core Web Vitals keep improving.",
    color: "from-cyan-500 to-blue-500",
  },
];

const whatWeFix = [
  {
    title: "Why Shopify stores stay invisible",
    desc: "Out of the box, Shopify leaves SEO money on the table: thin, duplicate-prone product and collection pages, auto-created tag and filter URLs that waste crawl budget, manufacturer-copied product descriptions Google treats as duplicate content, and collection pages with no real content above the grid. We fix the structure so your highest-value category and product pages can actually rank.",
  },
  {
    title: "Unique product and collection SEO",
    desc: "We write unique, keyword-targeted titles and descriptions across products and collections, add content blocks to collection pages, set proper canonical tags, and ship structured data for products, reviews, and breadcrumbs so you qualify for rich results in search.",
  },
  {
    title: "Speed is conversion, not just ranking",
    desc: "On a store, speed is money twice: Google ranks faster pages higher, and shoppers abandon slow ones before checkout. We strip the app scripts that aren't earning their weight, optimize and lazy-load images, defer non-critical code, and tune the theme so Core Web Vitals pass on mobile, where most of your shoppers are.",
  },
  {
    title: "We don't tell you to replatform",
    desc: "You don't need to leave Shopify to fix any of this. Replatforming an active store is expensive and risky. Everything we do happens on your existing store. The only time we'd raise a custom build is if you've outgrown Shopify entirely, and even then we'd show you the math first.",
  },
];

const faqs = [
  {
    q: "Why is my Shopify store slow?",
    a: "Usually app bloat injecting scripts on every page, oversized images, render-blocking theme code, and third-party widgets. We profile the store and remove the weight that isn't earning its place.",
  },
  {
    q: "Can you do SEO on my existing Shopify store?",
    a: "Yes. We optimize product and collection pages, structured data, canonicals, and crawl handling directly on your store. No replatforming.",
  },
  {
    q: "Why aren't my Shopify products ranking on Google?",
    a: "Commonly duplicate manufacturer descriptions, thin collection pages, missing product schema, and duplicate filter URLs eating crawl budget. All fixable, and the free audit shows which apply to you.",
  },
  {
    q: "Does site speed really affect Shopify sales?",
    a: "Yes, twice. Faster pages rank higher and shoppers abandon slow ones before checkout. Speed work usually pays back in both rankings and completed orders.",
  },
  {
    q: "How much does Shopify SEO help cost?",
    a: "Fixed scope quoted after the free audit, so there's no open-ended billing. Fixing your existing store costs a fraction of replatforming, which is exactly why we don't recommend leaving Shopify.",
  },
];

export default function ShopifySEOPage() {
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
          alt="Search rankings dashboard for a Shopify store, showing product visibility, speed, and Core Web Vitals after optimization"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/60 via-[#050507]/80 to-[#050507]" />

        <p className="relative text-emerald-400 font-medium tracking-widest uppercase text-sm mb-6">
          Shopify SEO
        </p>
        <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-white" style={{ textShadow: "0 0 40px rgba(255,255,255,0.3)" }}>
            Fix your Shopify store&apos;s{" "}
          </span>
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
            SEO and speed
          </span>
        </h1>
        <p className="relative text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          A slow Shopify store quietly bleeds sales. Every second of load time costs conversions, and unoptimized product and collection pages stay invisible on Google. We fix both on the store you already run, no replatforming.
        </p>
        <div className="relative flex flex-col sm:flex-row gap-4">
          <a href="#audit" className="shimmer-button px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 font-semibold text-white hover:opacity-90 transition-opacity text-lg">
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
              <p className="text-emerald-400 font-medium tracking-widest uppercase text-sm mb-4">How It Works</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Fixed on your store, not replatformed
              </h2>
              <p className="text-gray-400 leading-relaxed">
                We start with the free audit so you can see exactly what&apos;s costing you traffic and sales, then we fix it on your existing store with a fixed scope you approve up front.
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
            <p className="text-emerald-400 font-medium tracking-widest uppercase text-sm mb-4">What We Fix</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What&apos;s costing your store traffic and sales
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              The patterns we see on almost every Shopify store we audit, and how we fix each one on your existing store.
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
            <p className="text-emerald-400 font-medium tracking-widest uppercase text-sm mb-4">Get Started</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See what&apos;s costing you sales
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Book a free call. We&apos;ll review your audit together, show you what&apos;s slowing the store and hiding your products, and quote a fixed scope to fix it.
            </p>
            <BookingWidget slug="axiondeep" buttonText="Book a Free Call" buttonColor="#10b981" />
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

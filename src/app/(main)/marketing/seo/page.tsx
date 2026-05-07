import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SEOAuditTool from "@/components/marketing/SEOAuditTool";
import ContactForm from "@/components/ContactForm";
import BookingWidget from "@/components/BookingWidget";

export const metadata: Metadata = {
  title: "SEO Services | Get Found, Grow Revenue",
  description:
    "Data-driven SEO that puts you on page one. Technical audits, on-page optimization, content strategy, and measurable results with monthly reporting.",
  keywords: [
    "SEO services",
    "search engine optimization",
    "technical SEO",
    "on-page SEO",
    "SEO agency",
    "local SEO",
  ],
  alternates: { canonical: "/marketing/seo" },
  openGraph: {
    title: "SEO Services | Axion Deep Marketing",
    description: "Data-driven SEO that puts you on page one. Technical audits, on-page optimization, and measurable results.",
    url: "/marketing/seo",
    images: [
      {
        url: "/images/marketing/og-seo-services-search-optimization.png",
        width: 1200,
        height: 630,
        alt: "Axion Deep SEO services, data-driven search engine optimization with technical audits and ranking improvements",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services",
  provider: {
    "@type": "ProfessionalService",
    name: "Axion Deep Marketing",
    url: "https://www.axiondeep.com/marketing",
  },
  description: "Data-driven SEO: technical audits, on-page optimization, content strategy, and measurable results.",
  url: "https://www.axiondeep.com/marketing/seo",
  serviceType: "Search Engine Optimization",
};

const process = [
  {
    num: "01",
    title: "Audit",
    desc: "Comprehensive technical audit covering site speed, crawlability, indexing issues, schema markup, and Core Web Vitals. We find every problem before we fix anything.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Keyword research, competitor analysis, and content gap identification. We build a prioritized roadmap based on search volume, difficulty, and revenue potential.",
    color: "from-violet-500 to-purple-500",
  },
  {
    num: "03",
    title: "On-Page",
    desc: "Title tags, meta descriptions, heading structure, internal linking, schema markup, and content optimization. Every page is engineered to rank for its target keywords.",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    num: "04",
    title: "Off-Page & Reporting",
    desc: "Link building, citation management, and authority building. Monthly reports with ranking changes, traffic data, and clear ROI metrics so you always know what you're getting.",
    color: "from-emerald-500 to-teal-500",
  },
];

const faqs = [
  {
    q: "How long does SEO take to show results?",
    a: "Most clients see measurable ranking improvements within 3-4 months. Significant traffic gains typically happen in months 4-6. SEO is a long-term investment that compounds over time.",
  },
  {
    q: "Do you guarantee first page rankings?",
    a: "No ethical SEO company can guarantee specific rankings, Google's algorithm has hundreds of factors. What we guarantee is a data-driven process, transparent reporting, and measurable progress toward your goals.",
  },
  {
    q: "What's included in the monthly report?",
    a: "Keyword ranking changes, organic traffic data, Core Web Vitals scores, backlink profile updates, and a clear summary of what was done and what's planned next.",
  },
];

export default function SEOPage() {
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
          src="/images/marketing/seo-services-search-rankings-hero.webp"
          alt="Search engine optimization dashboard showing keyword rankings, organic traffic growth, and Core Web Vitals scores"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/60 via-[#050507]/80 to-[#050507]" />

        <p className="relative text-violet-400 font-medium tracking-widest uppercase text-sm mb-6">
          SEO Services
        </p>
        <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-white" style={{ textShadow: "0 0 40px rgba(255,255,255,0.3)" }}>
            Get found on{" "}
          </span>
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
            Google
          </span>
        </h1>
        <p className="relative text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Data-driven SEO that puts your business on page one. We don&apos;t guess, we measure, test, and prove results with transparent monthly reporting.
        </p>
        <div className="relative flex flex-col sm:flex-row gap-4">
          <a href="#audit" className="shimmer-button px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-600 font-semibold text-white hover:opacity-90 transition-opacity text-lg">
            Free SEO Audit
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
              <p className="text-violet-400 font-medium tracking-widest uppercase text-sm mb-4">Our Approach</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Systematic, not guesswork
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Our SEO process is built on the same engineering rigor we bring to everything at Axion Deep. Every decision is backed by data, every change is tracked, and every result is measurable.
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
            <p className="text-violet-400 font-medium tracking-widest uppercase text-sm mb-4">Get Started</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to rank higher?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Book a free SEO strategy call. We&apos;ll review your current rankings, identify your biggest opportunities, and outline a plan to get you on page one.
            </p>
            <BookingWidget slug="axiondeep" buttonText="Book a Strategy Call" buttonColor="#8b5cf6" />
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

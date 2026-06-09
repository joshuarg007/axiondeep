import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SEOAuditTool from "@/components/marketing/SEOAuditTool";
import ContactForm from "@/components/ContactForm";
import BookingWidget from "@/components/BookingWidget";

export const metadata: Metadata = {
  title: "Wix SEO Help | Make Your Wix Site Rank",
  description:
    "Wix can rank, but it has real ceilings. We push your Wix site as far as it goes on SEO and speed, and tell you honestly when migrating is the better call. Free audit included.",
  keywords: [
    "Wix SEO",
    "is Wix bad for SEO",
    "Wix site not showing on Google",
    "how to improve Wix SEO",
    "Wix SEO expert",
    "Wix site slow",
  ],
  alternates: { canonical: "/marketing/wix-seo" },
  openGraph: {
    title: "Wix SEO Help | Axion Deep Marketing",
    description: "We push your Wix site as far as it goes on SEO and speed, and tell you honestly when migrating is the better call.",
    url: "/marketing/wix-seo",
    images: [
      {
        url: "/images/marketing/og-seo-services-search-optimization.png",
        width: 1200,
        height: 630,
        alt: "Axion Deep Wix SEO help, optimizing existing Wix sites for search visibility and speed",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wix SEO Help",
  provider: {
    "@type": "ProfessionalService",
    name: "Axion Deep Marketing",
    url: "https://www.axiondeep.com/marketing",
  },
  description: "On-platform SEO and speed optimization for existing Wix sites, with honest migration advice when the platform is the limit.",
  url: "https://www.axiondeep.com/marketing/wix-seo",
  serviceType: "Wix SEO Optimization",
};

const process = [
  {
    num: "01",
    title: "Free Audit",
    desc: "Your live Wix URL goes through our DeepAudit tool. You get a 100-plus point report, and we flag which findings are fixable inside Wix and which ones are platform ceilings.",
    color: "from-amber-500 to-orange-500",
  },
  {
    num: "02",
    title: "Triage & Quote",
    desc: "We separate the on-Wix wins from the platform limits, quote a fixed scope for the wins, and lay out the migration math if you're near the ceiling.",
    color: "from-orange-500 to-rose-500",
  },
  {
    num: "03",
    title: "Optimize on Wix",
    desc: "On-page SEO, schema, image and speed optimization, internal linking, local SEO and Google Business Profile, and indexation cleanup, all inside your existing Wix site.",
    color: "from-rose-500 to-pink-500",
  },
  {
    num: "04",
    title: "Verify or Migrate",
    desc: "We re-run the audit to show the before and after. If you've hit the ceiling, we lay out a redirect-safe migration so nothing breaks and no rankings get lost.",
    color: "from-emerald-500 to-teal-500",
  },
];

const whatWeFix = [
  {
    title: "Is Wix actually bad for SEO?",
    desc: "Not anymore. You can edit titles, meta descriptions, alt text, slugs, and add structured data, and Wix renders content Google can read. It does have real ceilings on page speed, redirects, and server-level control. We are honest about which of your problems are fixable on Wix and which ones are the platform.",
  },
  {
    title: "What we fix on Wix right now",
    desc: "Most Wix sites lose rankings to things that have nothing to do with the ceiling: missing titles, no schema, full-resolution images, thin location pages, an unoptimized Google Business Profile, and pages that were never indexed. We fix all of it inside Wix. For a lot of local businesses, that's the difference between invisible and page one.",
  },
  {
    title: "Local SEO that wins your city",
    desc: "Local is the highest-leverage channel for a Wix business site. We optimize your Google Business Profile, build properly structured location content, keep your name, address, and phone consistent across directories, and target the way customers actually search in your city.",
  },
  {
    title: "When migrating is the honest move",
    desc: "If you've maxed out what Wix allows and still lose to faster competitors, migration becomes the right call. We don't push it by default. When it makes sense, we handle it properly: full URL audit, 301 redirects on every page, and a faster custom build. You see the cost both ways first.",
  },
];

const faqs = [
  {
    q: "Is Wix bad for SEO?",
    a: "Not anymore, but it has real ceilings on speed and control. Most Wix sites can rank well for local searches once the on-page, schema, and local SEO basics are done right. We tell you honestly when the platform is the limit.",
  },
  {
    q: "Can you do SEO on my existing Wix site?",
    a: "Yes. We optimize title tags, meta descriptions, schema, images, internal links, and local SEO directly inside Wix, no migration needed.",
  },
  {
    q: "Why isn't my Wix site showing up on Google?",
    a: "Usually missing indexation, no submitted sitemap, thin content, or missing local SEO signals. All fixable on Wix. We diagnose it in the free audit.",
  },
  {
    q: "Should I move off Wix to rank better?",
    a: "Only if you've hit the platform's ceiling on speed or functionality. We optimize Wix first and only recommend migrating when the math actually favors it, with redirects to protect your rankings.",
  },
  {
    q: "How much does Wix SEO help cost?",
    a: "We quote a fixed scope after the free audit. On-Wix optimization is far cheaper than a migration, which is exactly why we try it first.",
  },
];

export default function WixSEOPage() {
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
          alt="Search rankings dashboard for a Wix site, showing keyword visibility and Core Web Vitals after optimization"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/60 via-[#050507]/80 to-[#050507]" />

        <p className="relative text-amber-400 font-medium tracking-widest uppercase text-sm mb-6">
          Wix SEO
        </p>
        <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-white" style={{ textShadow: "0 0 40px rgba(255,255,255,0.3)" }}>
            Make your Wix site{" "}
          </span>
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
            actually rank
          </span>
        </h1>
        <p className="relative text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Wix gets a bad rap for SEO, and some of it&apos;s earned. But most Wix sites are leaving easy wins on the table before they ever hit the platform&apos;s real limits. We get yours as far as Wix can go, and we&apos;ll tell you straight when the platform itself is the thing holding you back.
        </p>
        <div className="relative flex flex-col sm:flex-row gap-4">
          <a href="#audit" className="shimmer-button px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 font-semibold text-white hover:opacity-90 transition-opacity text-lg">
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
              <p className="text-amber-400 font-medium tracking-widest uppercase text-sm mb-4">How It Works</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Optimize first, migrate only if you must
              </h2>
              <p className="text-gray-400 leading-relaxed">
                We start with the free audit so you can see exactly what&apos;s fixable on Wix and what&apos;s a platform ceiling, then we fix the wins on a fixed scope you approve up front.
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
            <p className="text-amber-400 font-medium tracking-widest uppercase text-sm mb-4">What We Fix</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How far your Wix site can really go
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              The honest breakdown of what we fix inside Wix, and where the platform draws the line.
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
            <p className="text-amber-400 font-medium tracking-widest uppercase text-sm mb-4">Get Started</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find out how far your Wix site can go
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Book a free call. We&apos;ll review your audit together, show you the on-Wix wins, and tell you honestly whether the platform is holding you back.
            </p>
            <BookingWidget slug="axiondeep" buttonText="Book a Free Call" buttonColor="#f59e0b" />
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

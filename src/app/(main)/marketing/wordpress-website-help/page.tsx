import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SEOAuditTool from "@/components/marketing/SEOAuditTool";
import ContactForm from "@/components/ContactForm";
import BookingWidget from "@/components/BookingWidget";

export const metadata: Metadata = {
  title: "WordPress Website Help | Fix Speed, SEO & Security",
  description:
    "Slow, unranked, or bloated WordPress site? We fix speed, SEO, and security on the site you already own. A free audit shows exactly what's broken. No rebuild required.",
  keywords: [
    "WordPress site slow",
    "WordPress SEO help",
    "fix WordPress website",
    "WordPress speed optimization",
    "WordPress maintenance services",
    "WordPress site not showing on Google",
  ],
  alternates: { canonical: "/marketing/wordpress-website-help" },
  openGraph: {
    title: "WordPress Website Help | Axion Deep Marketing",
    description: "We fix speed, SEO, and security on the WordPress site you already own. No rebuild required.",
    url: "/marketing/wordpress-website-help",
    images: [
      {
        url: "/images/marketing/og-seo-services-search-optimization.png",
        width: 1200,
        height: 630,
        alt: "Axion Deep WordPress help, fixing speed, SEO, and security on existing WordPress sites",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WordPress Website Help",
  provider: {
    "@type": "ProfessionalService",
    name: "Axion Deep Marketing",
    url: "https://www.axiondeep.com/marketing",
  },
  description: "Speed, SEO, and security fixes for existing WordPress sites. No rebuild required.",
  url: "https://www.axiondeep.com/marketing/wordpress-website-help",
  serviceType: "WordPress Optimization",
};

const process = [
  {
    num: "01",
    title: "Free Audit",
    desc: "We run your live WordPress URL through our DeepAudit tool. You get a 100-plus point report showing exactly what's slow, unindexed, or insecure, with the real mobile Lighthouse scores. No signup.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    num: "02",
    title: "Triage & Quote",
    desc: "We sort the findings into what's hurting you now versus what's nice to have, and quote a fixed scope. You approve before we touch anything.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    num: "03",
    title: "Fix",
    desc: "Speed, SEO, security, and conversion fixes applied on a staging copy first, signed off, then shipped to your live site. Nothing breaks without a rollback.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    num: "04",
    title: "Verify & Maintain",
    desc: "We re-run the audit so you see the before and after on the same scorecard. Optional monthly maintenance keeps core, plugins, backups, and Core Web Vitals in line.",
    color: "from-emerald-500 to-teal-500",
  },
];

const whatWeFix = [
  {
    title: "Speed without a rebuild",
    desc: "WordPress gets slow from plugin bloat, oversized images, and missing caching, not from being WordPress. We profile the site, find the queries and scripts actually costing you load time, add proper caching and a CDN, and optimize the images that drag every page down. The site stays WordPress. It just stops being slow.",
  },
  {
    title: "SEO past the Yoast green light",
    desc: "A green light in Yoast or Rank Math only means your meta length is right. We run the same 100-plus point audit we use for custom builds: crawlability, indexation, schema, internal linking, render-blocking resources, and the real mobile Lighthouse scores. Then we fix the ones that actually move rankings.",
  },
  {
    title: "Security and maintenance handled",
    desc: "An out-of-date core, theme, or plugin is the most common way small-business sites get hacked. We clean up compromised installs, lock down login and file permissions, set up backups you can actually restore from, and keep everything updated on a schedule so you are not the one watching for vulnerabilities.",
  },
  {
    title: "Honest rebuild advice",
    desc: "Sometimes an install is so far gone that patching it costs more than replacing it. When that's the case, we show you the math and the custom-build option instead of selling you another month of optimization. When it isn't, we keep improving what you have.",
  },
];

const faqs = [
  {
    q: "Can you fix my WordPress site without rebuilding it?",
    a: "Yes. The default is to fix speed, SEO, and security on your existing install. A rebuild is only recommended when patching costs more over a year than replacing, and we show you the math first.",
  },
  {
    q: "Why is my WordPress site so slow?",
    a: "Almost always plugin bloat, unoptimized images, no caching or CDN, and a heavy page builder. We profile the site to find the specific offenders and fix the ones that matter.",
  },
  {
    q: "Will fixing my WordPress site help it rank on Google?",
    a: "Speed, crawlability, indexation, and schema are direct ranking factors. We fix the technical issues that keep WordPress sites off page one, then track the movement in Search Console.",
  },
  {
    q: "Do you offer ongoing WordPress maintenance?",
    a: "Yes. Optional monthly maintenance covers core and plugin updates, security monitoring, backups, and Core Web Vitals so you don't have to watch it.",
  },
  {
    q: "How much does it cost to fix a WordPress site?",
    a: "We quote a fixed scope after the free audit so there are no open-ended hours. Most speed-and-SEO fixes land well under the cost of a rebuild.",
  },
];

export default function WordPressHelpPage() {
  return (
    <div className="no-snap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 overflow-hidden">
        <Image
          src="/images/marketing/developer-terminal-code-deployment.webp"
          alt="Developer terminal optimizing a WordPress site, fixing performance, SEO, and security on an existing install"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/60 via-[#050507]/80 to-[#050507]" />

        <p className="relative text-cyan-400 font-medium tracking-widest uppercase text-sm mb-6">
          WordPress Help
        </p>
        <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-white" style={{ textShadow: "0 0 40px rgba(255,255,255,0.3)" }}>
            Fix the WordPress site{" "}
          </span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
            you already have
          </span>
        </h1>
        <p className="relative text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Your WordPress site doesn&apos;t need a rebuild. It needs someone who can fix what&apos;s slowing it down, keeping it off Google, and leaving it open to attackers. We do that on the site you already own, without starting over.
        </p>
        <div className="relative flex flex-col sm:flex-row gap-4">
          <a href="#audit" className="shimmer-button px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white hover:opacity-90 transition-opacity text-lg">
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
              <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4">How It Works</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Fixed, not replaced
              </h2>
              <p className="text-gray-400 leading-relaxed">
                We start with proof, not a sales pitch. The free audit shows exactly what&apos;s wrong on your live site, then we fix it on a fixed scope you approve up front.
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
            <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4">What We Fix</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The four things slowing your site down
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Most WordPress problems come down to the same handful of culprits. Here is how we handle each one, on the site you already run.
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
            <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4">Get Started</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See exactly what&apos;s broken
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Book a free call. We&apos;ll walk through your audit results together, show you what&apos;s costing you traffic and speed, and quote a fixed scope to fix it.
            </p>
            <BookingWidget slug="axiondeep" buttonText="Book a Free Call" buttonColor="#06b6d4" />
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

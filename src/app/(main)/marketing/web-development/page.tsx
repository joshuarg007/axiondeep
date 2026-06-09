import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import BookingWidget from "@/components/BookingWidget";

export const metadata: Metadata = {
  title: "Web Development | Custom Websites That Convert",
  description:
    "Custom web development with React, Next.js, and Tailwind CSS. Mobile-first, blazing fast, and built to turn visitors into customers.",
  keywords: [
    "custom web development",
    "React development",
    "Next.js agency",
    "responsive website design",
    "website development company",
  ],
  alternates: { canonical: "/marketing/web-development" },
  openGraph: {
    title: "Web Development | Axion Deep Marketing",
    description: "High-performance websites built with modern frameworks. Mobile-first, SEO-ready, CRM-connected.",
    url: "/marketing/web-development",
    images: [
      {
        url: "/images/marketing/og-web-development-agency-services.png",
        width: 1200,
        height: 630,
        alt: "Axion Deep web development services, custom React and Next.js websites that convert visitors into leads",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development",
  provider: {
    "@type": "ProfessionalService",
    name: "Axion Deep Marketing",
    url: "https://www.axiondeep.com/marketing",
  },
  description: "Custom web development with React, Next.js, and Tailwind CSS.",
  url: "https://www.axiondeep.com/marketing/web-development",
  serviceType: "Web Development",
};

const process = [
  {
    num: "01",
    title: "Discovery",
    desc: "We learn your business, audience, competitors, and goals. By the end of this phase we have a complete sitemap, content outline, and design brief.",
    color: "from-cyan-500 to-blue-500",
    image: "/images/marketing/process-discovery-research-phase.webp",
    imageAlt: "Discovery and research phase, analyzing business goals, audience data, and competitor landscape for web project planning",
  },
  {
    num: "02",
    title: "Design",
    desc: "High-fidelity mockups for desktop and mobile. You see exactly what your site will look like before we write a single line of code. Revisions included.",
    color: "from-violet-500 to-purple-500",
    image: "/images/marketing/process-design-wireframe-phase.webp",
    imageAlt: "Design and wireframe phase, creating high-fidelity mockups and responsive layouts before development begins",
  },
  {
    num: "03",
    title: "Development",
    desc: "We build with React, Next.js, and Tailwind CSS for maximum speed and SEO performance. Every site is responsive, accessible, and optimized for Core Web Vitals.",
    color: "from-fuchsia-500 to-pink-500",
    image: "/images/marketing/process-development-coding-phase.webp",
    imageAlt: "Development and coding phase, building with React, Next.js, and Tailwind CSS for optimal performance and SEO",
  },
  {
    num: "04",
    title: "Launch & Support",
    desc: "Deployment, DNS, SSL, analytics, and CRM integration all handled. Post-launch we monitor performance and provide ongoing support to keep you growing.",
    color: "from-emerald-500 to-teal-500",
    image: "/images/marketing/process-launch-deployment-phase.webp",
    imageAlt: "Launch and deployment phase, production deployment with DNS, SSL, analytics, and CRM integration setup",
  },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Node.js", "PostgreSQL", "AWS", "Vercel", "Cloudflare",
];

export default function WebDevelopmentPage() {
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
          src="/images/marketing/web-development-services-hero.webp"
          alt="Modern web development workspace with code editor, responsive design previews, and React component architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/60 via-[#050507]/80 to-[#050507]" />

        <p className="relative text-cyan-400 font-medium tracking-widest uppercase text-sm mb-6">
          Web Development
        </p>
        <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-white" style={{ textShadow: "0 0 40px rgba(255,255,255,0.3)" }}>
            Websites that{" "}
          </span>
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
            actually convert
          </span>
        </h1>
        <p className="relative text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Custom-built with modern frameworks, optimized for speed, and designed to turn every visitor into a lead. Hand-coded for performance you can measure and control you fully own.
        </p>
        <div className="relative flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="shimmer-button px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold text-white hover:opacity-90 transition-opacity text-lg">
            Get a Quote
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
              <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4">Our Process</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                From concept to launch
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Every project follows a proven four-phase methodology designed to minimize surprises and maximize results. You&apos;re involved at every stage.
              </p>
            </div>
            <div className="space-y-10">
              {process.map((step, i) => (
                <div key={step.num} className="relative pl-20">
                  <div className={`absolute left-0 top-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} overflow-hidden`}>
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-40`} />
                    <span className="relative flex items-center justify-center w-full h-full text-white font-bold text-lg">
                      {step.num}
                    </span>
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

      {/* Tech Stack */}
      <section className="px-6 py-24 border-y border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-violet-400 font-medium tracking-widest uppercase text-sm mb-4">Tech Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Built with the best
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-gray-400 hover:text-white hover:border-white/20 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4">What&apos;s Included</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Every site ships production-ready
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              No add-on fees for the things that should come standard. Performance, accessibility,
              analytics, and SEO are all part of the base build. You get a site that performs on day
              one and keeps performing as you grow.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h3 className="text-white font-semibold mb-2">Performance by default</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every build targets 95 or higher on Google Lighthouse across performance,
                accessibility, best practices, and SEO. We ship optimized images, code splitting,
                lazy loading, edge caching, and server-side rendering from day one. Core Web Vitals
                are measured and budgeted during development, not bolted on afterward.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h3 className="text-white font-semibold mb-2">SEO baked in</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Structured data, Open Graph, canonical URLs, XML sitemap, and robots configuration
                all ship with the site. Heading hierarchy and internal linking are planned during
                discovery, so your pages are ready to rank the moment Google crawls them. Everything
                ships in the code from day one and is maintained as your site grows.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h3 className="text-white font-semibold mb-2">CRM and analytics integrated</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Forms wire directly to your CRM through Site2CRM, so leads land in your pipeline
                with full UTM and referrer context. Google Analytics 4, Consent Mode v2, and
                conversion tracking are configured during launch. You see real attribution from
                the first visitor forward.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h3 className="text-white font-semibold mb-2">Accessible and mobile-first</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                WCAG 2.1 AA is the baseline. Color contrast, keyboard navigation, focus indicators,
                form labels, and ARIA landmarks are validated before launch. Every layout is
                designed mobile-first so the phone experience is first-class, not a responsive
                afterthought.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 py-24">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4">Start Your Project</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s build something great
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Book a free discovery call. We&apos;ll discuss your goals, timeline, and budget, and tell you exactly what we&apos;d build and how.
            </p>
            <BookingWidget slug="axiondeep" buttonText="Book a Discovery Call" buttonColor="#06b6d4" />
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

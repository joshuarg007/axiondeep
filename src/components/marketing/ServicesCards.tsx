"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "High-performance websites built with React, Next.js, and Tailwind CSS. Mobile-first, blazing fast, and designed to convert visitors into customers.",
    gradient: "from-cyan-500/10 to-blue-500/5",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    glow: "bg-cyan-500/10",
    href: "/marketing/web-development",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "SEO",
    description:
      "Technical SEO, on-page optimization, and content strategy that puts you on page one. We don't guess — we measure, test, and prove results with data.",
    gradient: "from-violet-500/10 to-purple-500/5",
    border: "border-violet-500/20 hover:border-violet-500/40",
    glow: "bg-violet-500/10",
    href: "/marketing/seo",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Lead Capture",
    description:
      "Every visitor becomes a qualified lead. Smart forms, AI chat widgets, and direct CRM integration — powered by Site2CRM, our proprietary lead capture platform.",
    gradient: "from-fuchsia-500/10 to-pink-500/5",
    border: "border-fuchsia-500/20 hover:border-fuchsia-500/40",
    glow: "bg-fuchsia-500/10",
    href: "/marketing/lead-capture",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    ),
  },
];

export default function ServicesCards() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 font-medium tracking-widest uppercase text-sm mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Full-funnel digital services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From the first pixel to the last lead — we handle every step of turning your online presence into a revenue engine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link
                href={service.href}
                className={`group relative block p-8 rounded-2xl bg-gradient-to-br ${service.gradient} border ${service.border} transition-all duration-300 h-full`}
              >
                {/* Glow */}
                <div className={`absolute top-0 right-0 w-40 h-40 ${service.glow} rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative">
                  <div className="text-white/70 mb-5 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

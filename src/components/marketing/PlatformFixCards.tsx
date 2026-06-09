"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const platforms = [
  {
    title: "WordPress",
    description:
      "Slow, unranked, or bloated? We fix speed, SEO, and security on your existing WordPress site. No rebuild required.",
    gradient: "from-cyan-500/10 to-blue-500/5",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    glow: "bg-cyan-500/10",
    href: "/marketing/wordpress-website-help",
  },
  {
    title: "Wix",
    description:
      "Wix can rank. We push your site as far as the platform allows and tell you honestly when a move makes sense.",
    gradient: "from-amber-500/10 to-orange-500/5",
    border: "border-amber-500/20 hover:border-amber-500/40",
    glow: "bg-amber-500/10",
    href: "/marketing/wix-seo",
  },
  {
    title: "Squarespace",
    description:
      "Beautiful but throttled on SEO control. We get your Squarespace site to the edge of what the platform allows.",
    gradient: "from-slate-400/10 to-zinc-500/5",
    border: "border-slate-400/20 hover:border-slate-400/40",
    glow: "bg-slate-400/10",
    href: "/marketing/squarespace-seo",
  },
  {
    title: "Shopify",
    description:
      "We fix product and collection SEO, speed, and conversion on your existing store. No replatform.",
    gradient: "from-emerald-500/10 to-teal-500/5",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    glow: "bg-emerald-500/10",
    href: "/marketing/shopify-seo",
  },
];

export default function PlatformFixCards() {
  return (
    <section id="platform-fixes" className="px-6 py-24 border-y border-white/[0.06] bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4">
            Already Have a Site?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We fix the site you already have
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            You don&apos;t need to start over. We optimize the speed, SEO, and conversion of your existing
            WordPress, Wix, Squarespace, or Shopify site, and we&apos;re honest about when a rebuild is the better call.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={platform.href}
                className={`group relative block p-7 rounded-2xl bg-gradient-to-br ${platform.gradient} border ${platform.border} transition-all duration-300 h-full`}
              >
                <div className={`absolute top-0 right-0 w-40 h-40 ${platform.glow} rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-3">{platform.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm mb-6">{platform.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                    Fix my site
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

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    tagline: "Get online and start converting",
    icon: "/images/marketing/pricing-starter-plan-icon.webp",
    iconAlt: "Starter plan icon — minimalist rocket launch representing business takeoff with web presence",
    features: [
      "Custom responsive website",
      "Mobile-first design",
      "Basic on-page SEO",
      "Site2CRM lead capture form",
      "Contact form integration",
      "Google Analytics setup",
    ],
    gradient: "from-cyan-500 to-blue-500",
    border: "border-cyan-500/20",
    highlighted: false,
  },
  {
    name: "Growth",
    tagline: "Rank higher, capture more",
    icon: "/images/marketing/pricing-growth-plan-icon.webp",
    iconAlt: "Growth plan icon — ascending chart with SEO and CRM integration symbols for scaling businesses",
    features: [
      "Everything in Starter",
      "Advanced technical SEO",
      "Monthly SEO reporting",
      "CRM integration (HubSpot, Salesforce, etc.)",
      "AI chat widget",
      "A/B testing",
      "Priority support",
    ],
    gradient: "from-violet-500 to-purple-500",
    border: "border-violet-500/40",
    highlighted: true,
  },
  {
    name: "Enterprise",
    tagline: "Full-funnel revenue engine",
    icon: "/images/marketing/pricing-enterprise-plan-icon.webp",
    iconAlt: "Enterprise plan icon — interconnected network of services representing full-funnel digital revenue engine",
    features: [
      "Everything in Growth",
      "Custom web application",
      "Content strategy & creation",
      "Multi-CRM sync",
      "Zapier automation setup",
      "Dedicated account manager",
      "Quarterly strategy reviews",
    ],
    gradient: "from-fuchsia-500 to-pink-500",
    border: "border-fuchsia-500/20",
    highlighted: false,
  },
];

export default function MarketingPricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-fuchsia-400 font-medium tracking-widest uppercase text-sm mb-4">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Packages for every stage
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every business is different. Tell us your goals and we&apos;ll build a custom package that fits your budget and timeline.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border ${tier.border} p-8 transition-all duration-300 hover:border-white/20 ${
                tier.highlighted ? "ring-1 ring-violet-500/30 md:scale-105 md:-my-2" : ""
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-xs font-bold text-white tracking-wide">
                  MOST POPULAR
                </div>
              )}

              {/* Tier icon */}
              <div className="relative w-16 h-16 mb-4 mx-auto rounded-2xl overflow-hidden">
                <Image
                  src={tier.icon}
                  alt={tier.iconAlt}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>

              <div className="mb-6 text-center">
                <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                <p className="text-gray-500 text-sm">{tier.tagline}</p>
              </div>

              <div className="mb-8">
                <span className={`text-3xl font-bold bg-gradient-to-r ${tier.gradient} bg-clip-text`} style={{ WebkitTextFillColor: "transparent" }}>
                  Custom
                </span>
                <span className="text-gray-500 ml-2 text-sm">tailored to your needs</span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:opacity-90"
                    : "border border-white/20 text-white hover:bg-white/5"
                }`}
              >
                Get a Quote
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

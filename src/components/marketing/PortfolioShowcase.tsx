"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Site2CRM",
    tagline: "Lead capture SaaS, form to CRM in seconds",
    description:
      "Full-stack SaaS platform that captures leads from website forms and AI chat widgets, then syncs them directly into HubSpot, Salesforce, Pipedrive, Nutshell, and Zoho. Approved on the Zapier marketplace with 5,000+ app integrations.",
    url: "https://site2crm.io",
    color: "blue",
    gradient: "from-blue-500/15 to-cyan-500/10",
    border: "border-blue-500/20 hover:border-blue-500/40",
    glow: "bg-blue-500/10",
    images: {
      hero: "/images/marketing/site2crm-saas-dashboard-leads.webp",
      heroAlt: "Site2CRM SaaS dashboard showing real-time lead capture, CRM sync status, and form analytics for sales teams",
      detail: "/images/marketing/site2crm-lead-capture-homepage.webp",
      detailAlt: "Site2CRM homepage featuring embeddable lead capture forms, AI chat widget, and direct CRM integration with HubSpot and Salesforce",
    },
    stats: [
      { label: "CRM Integrations", value: "5" },
      { label: "Zapier Status", value: "Approved" },
      { label: "Uptime", value: "99.9%" },
    ],
    tech: ["React", "FastAPI", "PostgreSQL", "AWS", "Stripe", "Zapier"],
    features: [
      "Embeddable lead capture forms",
      "AI chat widget with lead extraction",
      "Real-time CRM sync (HubSpot, Salesforce, Pipedrive, Nutshell, Zoho)",
      "Zapier integration (5,000+ apps)",
      "Lead source tracking (UTM, referrer)",
      "GDPR-compliant with consent management",
    ],
  },
  {
    name: "Made4Founders",
    tagline: "Startup tools and resources platform",
    description:
      "A comprehensive platform built to help founders launch and grow their startups. Full-stack web application with authentication, dashboards, content management, and integrated payment processing.",
    url: "https://made4founders.com",
    color: "orange",
    gradient: "from-orange-500/15 to-amber-500/10",
    border: "border-orange-500/20 hover:border-orange-500/40",
    glow: "bg-orange-500/10",
    images: {
      hero: "/images/marketing/made4founders-startup-platform-homepage.webp",
      heroAlt: "Made4Founders startup platform homepage with modern dark UI, resource library, and founder tools for launching businesses",
      detail: "/images/marketing/made4founders-startup-tools-dashboard.webp",
      detailAlt: "Made4Founders dashboard featuring startup tools, content management, user analytics, and integrated payment processing",
    },
    stats: [
      { label: "Performance", value: "98" },
      { label: "SEO Score", value: "100" },
      { label: "Lighthouse", value: "All Green" },
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Docker", "PostgreSQL"],
    features: [
      "Modern dark UI with responsive design",
      "User authentication & dashboards",
      "Content management system",
      "Integrated payment processing",
      "Docker containerized deployment",
      "CI/CD pipeline with GitHub Actions",
    ],
  },
];

export default function PortfolioShowcase() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-fuchsia-400 font-medium tracking-widest uppercase text-sm mb-4">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built by us, used in production
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We don&apos;t just talk about building great products, we ship them. These are live platforms we built from scratch, serving real users every day.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group relative block rounded-2xl bg-gradient-to-br ${project.gradient} border ${project.border} transition-all duration-300 overflow-hidden`}
            >
              {/* Corner glow */}
              <div className={`absolute -top-20 -right-20 w-60 h-60 ${project.glow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative p-8 md:p-10">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{project.name}</h3>
                      <svg className="w-5 h-5 text-white/40 group-hover:text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-lg">{project.tagline}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-6 shrink-0">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-xl font-bold text-white">{stat.value}</p>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Screenshots */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.08] bg-white/[0.02]">
                    <Image
                      src={project.images.hero}
                      alt={project.images.heroAlt}
                      fill
                      className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.08] bg-white/[0.02]">
                    <Image
                      src={project.images.detail}
                      alt={project.images.detailAlt}
                      fill
                      className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                {/* Features grid */}
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/[0.04] text-xs text-gray-400 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

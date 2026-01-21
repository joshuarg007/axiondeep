import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import quantaLogo from "../assets/images/quanta-logo.webp";
import vesperLogo from "../assets/images/vesper-hydra-logo.webp";
import parsonicLogo from "../assets/images/parsonic-logo.webp";

const products = [
  {
    name: "QUANTA",
    tagline: "Quantum Computing Education",
    description: "Interactive learning platform for quantum computing with visual simulations, structured curriculum, and hands-on exercises.",
    logo: quantaLogo,
    color: "cyan",
    link: "/projects/quanta",
    external: "https://quanta.axiondeep.com",
    status: "Live",
  },
  {
    name: "Site2CRM",
    tagline: "Lead Capture & CRM Sync",
    description: "Embeddable forms with AI lead scoring that sync directly to HubSpot, Salesforce, Pipedrive, or Zoho.",
    logo: null,
    color: "green",
    link: "/projects/site2crm",
    external: "https://site2crm.io",
    status: "Live",
  },
  {
    name: "Vesper Hydra",
    tagline: "AI Security Platform",
    description: "Autonomous penetration testing with dual AI agents, 11,697 Nuclei templates, and intelligent vulnerability discovery.",
    logo: vesperLogo,
    color: "violet",
    link: "/projects/vesper",
    external: null,
    status: "Beta",
  },
  {
    name: "Parsonic",
    tagline: "Web Scraping Automation",
    description: "AI-powered web scraping tool for automated data extraction, parsing, and structured output generation.",
    logo: parsonicLogo,
    color: "amber",
    link: null,
    external: null,
    status: "Coming Soon",
  },
];

export default function Products() {
  return (
    <div className="relative z-10 text-gray-300 space-y-12 max-w-5xl mx-auto px-6 md:px-8 lg:px-12 pt-20 md:pt-24 pb-20">
      <SEO
        title="Products - Software Applications by Axion Deep"
        description="Software products built by Axion Deep Labs. Custom web applications, SaaS platforms, and AI-powered tools including QUANTA, Site2CRM, Vesper Hydra, and Parsonic."
        keywords="software products, SaaS applications, web applications, custom software products, Axion Deep products, Site2CRM, QUANTA, Vesper Hydra"
        canonical="/products"
      />

      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-white">Products</h1>
        <p className="text-gray-400 max-w-2xl">
          Applications built by Axion Deep Labs. Each product operates independently under our umbrella,
          solving real problems with modern technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.name}
            className={`border border-white/10 rounded-2xl bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:border-${product.color}-500/30`}
          >
            <div className="flex items-start gap-4 mb-4">
              {product.logo ? (
                <img
                  src={product.logo}
                  alt={`${product.name} logo`}
                  className={`w-16 h-16 rounded-xl border border-${product.color}-500/20 shadow-lg`}
                  loading="lazy"
                />
              ) : (
                <div className={`w-16 h-16 rounded-xl bg-${product.color}-500/10 border border-${product.color}-500/20 flex items-center justify-center`}>
                  <span className={`text-2xl font-bold text-${product.color}-400`}>
                    {product.name.charAt(0)}
                  </span>
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl font-semibold text-white">{product.name}</h2>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    product.status === "Live"
                      ? "bg-green-500/10 text-green-300 border border-green-400/20"
                      : product.status === "Beta"
                      ? "bg-violet-500/10 text-violet-300 border border-violet-400/20"
                      : "bg-gray-500/10 text-gray-400 border border-gray-400/20"
                  }`}>
                    {product.status}
                  </span>
                </div>
                <p className={`text-sm text-${product.color}-400`}>{product.tagline}</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {product.description}
            </p>

            <div className="flex gap-3 text-sm">
              {product.link && (
                <Link
                  to={product.link}
                  className="text-white hover:text-gray-300 underline underline-offset-2"
                >
                  Learn more
                </Link>
              )}
              {product.external && (
                <a
                  href={product.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-${product.color}-400 hover:text-${product.color}-300 underline underline-offset-2`}
                >
                  Visit site →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

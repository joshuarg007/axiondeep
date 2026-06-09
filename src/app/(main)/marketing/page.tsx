import { Metadata } from "next";
import MarketingHero from "@/components/marketing/MarketingHero";
import ServicesCards from "@/components/marketing/ServicesCards";
import PlatformFixCards from "@/components/marketing/PlatformFixCards";
import SEOAuditTool from "@/components/marketing/SEOAuditTool";
import BeforeAfterSlider from "@/components/marketing/BeforeAfterSlider";
import LeadFlowVisualization from "@/components/marketing/LeadFlowVisualization";
import ROICalculator from "@/components/marketing/ROICalculator";
import ScrollCaseStudy from "@/components/marketing/ScrollCaseStudy";
import TerminalSection from "@/components/marketing/TerminalSection";
import MetricsTicker from "@/components/marketing/MetricsTicker";
import MarketingPricing from "@/components/marketing/MarketingPricing";
import PortfolioShowcase from "@/components/marketing/PortfolioShowcase";
import MarketingCTA from "@/components/marketing/MarketingCTA";

export const metadata: Metadata = {
  title: "Marketing | Web Dev, SEO & Lead Capture",
  description:
    "Axion Deep Marketing builds fast websites, ranks them on Google, and sends leads to your CRM automatically. Full-funnel services for growing businesses.",
  keywords: [
    "web development agency",
    "SEO services",
    "lead capture",
    "website development",
    "CRM integration",
    "digital marketing",
    "Site2CRM",
  ],
  alternates: { canonical: "/marketing" },
  openGraph: {
    title: "Axion Deep Marketing | We Build. We Rank. We Convert.",
    description:
      "High-performance websites, SEO that actually works, and lead capture that fills your CRM automatically.",
    url: "/marketing",
    type: "website",
    images: [
      {
        url: "/images/marketing/og-axion-deep-marketing-services.png",
        width: 1200,
        height: 630,
        alt: "Axion Deep Marketing, full-funnel digital services including web development, SEO, and automated lead capture with CRM integration",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Axion Deep Marketing",
  description:
    "Full-funnel digital services: web development, SEO, and lead capture with direct CRM integration.",
  url: "https://www.axiondeep.com/marketing",
  parentOrganization: {
    "@type": "Organization",
    name: "Axion Deep Labs",
    url: "https://www.axiondeep.com",
  },
  serviceType: [
    "Web Development",
    "Search Engine Optimization",
    "Lead Generation",
    "CRM Integration",
  ],
  areaServed: {
    "@type": "Country",
    name: "US",
  },
  email: "labs@axiondeep.com",
  sameAs: [
    "https://www.linkedin.com/company/111213915",
    "https://x.com/axiondeeplabs",
  ],
};

export default function MarketingPage() {
  return (
    <div className="no-snap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <MarketingHero />

      {/* Services */}
      <ServicesCards />

      {/* Platform fixes — "already have a site?" */}
      <PlatformFixCards />

      {/* Portfolio, Site2CRM & Made4Founders */}
      <PortfolioShowcase />

      {/* SEO Audit Tool */}
      <SEOAuditTool />

      {/* Before/After Slider */}
      <BeforeAfterSlider />

      {/* Lead Flow Visualization */}
      <LeadFlowVisualization />

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Scroll Case Study */}
      <ScrollCaseStudy />

      {/* Terminal */}
      <TerminalSection />

      {/* Metrics Ticker */}
      <MetricsTicker />

      {/* Pricing */}
      <MarketingPricing />

      {/* CTA / Contact */}
      <MarketingCTA />
    </div>
  );
}

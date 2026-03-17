import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import GradientBackground from "@/components/GradientBackground";
import ScrollToTop from "@/components/ScrollToTop";

const GTM_ID = "GTM-W5RSDFR6";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.axiondeep.com"),
  title: {
    default: "Axion Deep Labs — AI & Quantum Computing R&D",
    template: "Axion Deep — %s",
  },
  description:
    "Axion Deep Labs is an independent R&D organization building AI systems, quantum algorithms, and production software through original research.",
  keywords: [
    "AI research laboratory",
    "quantum computing research",
    "independent research organization",
    "original research",
    "machine learning theory",
    "topological data analysis",
    "persistent homology",
    "catastrophic forgetting",
    "integrated information theory",
    "deep learning theory",
    "computational neuroscience",
    "reproducible research",
    "information capacity scaling laws",
    "foundational AI research",
    "peer-reviewed research",
  ],
  authors: [{ name: "Axion Deep Labs" }],
  creator: "Axion Deep Labs",
  publisher: "Axion Deep Labs",
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Axion Deep Labs",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.axiondeep.com",
    siteName: "Axion Deep Labs",
    title: "Axion Deep Labs — Original Research in ML Theory, Quantum Computing & Computational Neuroscience",
    description:
      "Independent research organization with active experiments and preliminary results in topological data analysis, integrated information theory, and information capacity scaling laws. Peer-reviewed publication targets.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Axion Deep Labs — Independent research organization in machine learning theory, quantum computing, and computational neuroscience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axion Deep Labs — Original Research in ML Theory & Quantum Computing",
    description:
      "Independent research organization with active experiments in topological data analysis, integrated information theory, and information capacity scaling laws. Preliminary results and peer-reviewed publication targets.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0f" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.axiondeep.com/#organization",
      name: "Axion Deep Labs",
      url: "https://www.axiondeep.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.axiondeep.com/images/logo.webp",
      },
      sameAs: [
        "https://www.linkedin.com/company/111213915",
        "https://x.com/axiondeeplabs",
        "https://www.facebook.com/people/Axion-Deep-Labs/61587313467089/",
        "https://www.youtube.com/@AxionDeepLabs",
        "https://www.instagram.com/axion_deep_labs/",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "research inquiries",
        email: "labs@axiondeep.com",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.axiondeep.com/#website",
      url: "https://www.axiondeep.com",
      name: "Axion Deep Labs",
      publisher: { "@id": "https://www.axiondeep.com/#organization" },
    },
    {
      "@type": "ResearchOrganization",
      "@id": "https://www.axiondeep.com/#research",
      name: "Axion Deep Labs",
      description:
        "Independent research organization conducting original research in machine learning theory, quantum computing, and computational neuroscience. Active experiments with preliminary results targeting peer-reviewed publication.",
      url: "https://www.axiondeep.com",
      areaServed: "Worldwide",
      knowsAbout: [
        "Machine Learning Theory",
        "Topological Data Analysis",
        "Persistent Homology",
        "Catastrophic Forgetting",
        "Continual Learning",
        "Integrated Information Theory",
        "Quantum Computing",
        "Computational Neuroscience",
        "Information Theory",
        "Deep Learning Theory",
        "Loss Landscape Analysis",
        "Information Capacity Scaling Laws",
      ],
    },
    {
      "@type": "ResearchProject",
      "@id": "https://www.axiondeep.com/#drift",
      name: "Project DRIFT — Degradation Regimes In Iterated Field Transformations",
      description:
        "Investigating behavioral uncertainty in quantum system state evolution under repeated manipulation. Focused on stability degradation under variation in operator ordering and diversity.",
      url: "https://www.axiondeep.com/research#drift",
      parentOrganization: { "@id": "https://www.axiondeep.com/#organization" },
      about: [
        "Quantum system behavior",
        "Operator ordering effects",
        "State distribution dynamics",
        "Trotter error analysis",
      ],
    },
    {
      "@type": "ResearchProject",
      "@id": "https://www.axiondeep.com/#persist",
      name: "Project PERSIST — Topological Signatures of Knowledge Persistence in Continual Learning Systems",
      description:
        "Cross-architecture study (19 architectures, 3 datasets, 57 configs complete) investigating whether persistent homology of loss landscapes predicts resistance to catastrophic forgetting. Key findings: topology rescues prediction on CUB-200 (p=0.037, suggestive) but not RESISC-45 (p=0.566). Most stable signal: H0 predicts EWC benefit across datasets (CIFAR-100 rho=0.76, RESISC-45 rho=0.86). Tools: PyTorch, Ripser, GUDHI.",
      url: "https://www.axiondeep.com/research#persist",
      parentOrganization: { "@id": "https://www.axiondeep.com/#organization" },
      about: [
        "Topological data analysis",
        "Persistent homology",
        "Catastrophic forgetting",
        "Continual learning",
        "Loss landscape topology",
        "Cross-architecture analysis",
      ],
    },
    {
      "@type": "ResearchProject",
      "@id": "https://www.axiondeep.com/#phi",
      name: "Project Phi — Systematic Survey of Integrated Information in Neural Network Architectures",
      description:
        "First comprehensive measurement of integrated information (Phi) across major deep learning architecture families, testing correlation with generalization, transfer learning, and robustness. Methodology: Phi* approximation with KSG estimator, validated against Perturbational Complexity Index.",
      url: "https://www.axiondeep.com/research#phi",
      parentOrganization: { "@id": "https://www.axiondeep.com/#organization" },
      about: [
        "Integrated Information Theory",
        "IIT",
        "Consciousness measurement",
        "Information integration",
        "Neural network generalization",
      ],
    },
    {
      "@type": "ResearchProject",
      "@id": "https://www.axiondeep.com/#genesis",
      name: "Project GENESIS — Information Capacity Scaling Laws Testing Holographic Analogs in Neural Networks",
      description:
        "Testing whether neural network information capacity follows an area law (proportional to boundary parameters) rather than a volume law (proportional to total parameters), constituting a computational analog of the Bekenstein bound. Methodology: memorization capacity measurement across 15+ architecture configurations with power-law fitting and Bayesian model comparison.",
      url: "https://www.axiondeep.com/research#genesis",
      parentOrganization: { "@id": "https://www.axiondeep.com/#organization" },
      about: [
        "Information capacity scaling laws",
        "Bekenstein bound",
        "Holographic principle",
        "Neural network capacity",
        "Area law",
        "Deep learning theory",
      ],
    },
    {
      "@type": "ScholarlyArticle",
      "@id": "https://www.axiondeep.com/#exp01-findings",
      name: "Topological Signatures of Knowledge Persistence in Continual Learning Systems: Preliminary Cross-Architecture Results",
      headline:
        "Topological Signatures of Knowledge Persistence in Continual Learning Systems",
      description:
        "Cross-dataset study (19 architectures, 3 datasets, 57/57 complete). Topology rescues forgetting prediction on CUB-200 (p=0.037, suggestive) but not RESISC-45. H0 predicts EWC mitigation benefit across datasets (rho=0.76-0.86). Parameter count dominates on easy benchmarks.",
      url: "https://www.axiondeep.com/research/persist/findings",
      datePublished: "2026-02-17",
      author: {
        "@id": "https://www.axiondeep.com/#organization",
      },
      publisher: {
        "@id": "https://www.axiondeep.com/#organization",
      },
      about: [
        "Topological data analysis",
        "Persistent homology",
        "Catastrophic forgetting",
        "Continual learning",
        "Loss landscape topology",
        "Cross-architecture analysis",
        "Split-CIFAR-100",
      ],
      isPartOf: {
        "@id": "https://www.axiondeep.com/#persist",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Bing Webmaster Tools verification */}
        <meta name="msvalidate.01" content="BING_VERIFICATION_CODE" />
        {/* Yandex Webmaster verification */}
        <meta name="yandex-verification" content="YANDEX_VERIFICATION_CODE" />
        {/* IndexNow API key */}
        <meta name="indexnow-key" content="2c85497cccf94576a6c7f5e177265c47" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ScrollToTop />
        <GradientBackground>{children}</GradientBackground>
        {/* Site2CRM AI Chat Widget */}
        <Script
          src="https://api.site2crm.io/api/public/chat-widget/widget.js"
          data-widget-key="widget_1"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}

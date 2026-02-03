import type { Metadata } from "next";
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
    default: "Axion Deep Labs — Research & Development",
    template: "Axion Deep — %s",
  },
  description:
    "Axion Deep Labs is a research and development company advancing AI implementation, quantum computing, and intelligent automation. We build production-grade software from original research.",
  keywords: [
    "AI research and development",
    "quantum computing research",
    "intelligent automation",
    "AI implementation",
    "R&D laboratory",
    "software research",
    "applied AI",
  ],
  authors: [{ name: "Axion Deep Labs" }],
  creator: "Axion Deep Labs",
  publisher: "Axion Deep Labs",
  formatDetection: {
    telephone: false,
  },
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0f" },
  ],
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
    title: "Axion Deep Labs — AI & Quantum Computing R&D",
    description:
      "Research and development company advancing AI implementation, quantum computing, and intelligent automation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Axion Deep Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axion Deep Labs — AI & Quantum Computing R&D",
    description:
      "Research and development company advancing AI implementation, quantum computing, and intelligent automation.",
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
        contactType: "customer service",
        email: "hello@axiondeep.com",
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
      "@type": "ProfessionalService",
      "@id": "https://www.axiondeep.com/#service",
      name: "Axion Deep Labs",
      description:
        "Research and development laboratory advancing AI implementation, quantum computing, and intelligent automation. Building production-grade software from original research.",
      url: "https://www.axiondeep.com",
      priceRange: "$$$$",
      areaServed: "Worldwide",
      serviceType: [
        "Research and Development",
        "AI Implementation",
        "Quantum Computing Research",
        "Intelligent Automation",
        "Software Engineering",
      ],
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
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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

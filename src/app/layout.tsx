import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GradientBackground from "@/components/GradientBackground";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.axiondeep.com"),
  title: {
    default: "Custom Software Development Company | Axion Deep Labs",
    template: "%s | Axion Deep Labs",
  },
  description:
    "Custom software solutions for startups and enterprises. We build web applications, mobile apps, AI-powered software, and SaaS platforms. Full-stack development with React, Python, and modern cloud technologies.",
  keywords: [
    "custom software development",
    "web application development",
    "mobile app development",
    "AI software development",
    "SaaS development",
    "React development",
    "Python development",
  ],
  authors: [{ name: "Axion Deep Labs" }],
  creator: "Axion Deep Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.axiondeep.com",
    siteName: "Axion Deep Labs",
    title: "Custom Software Development Company | Axion Deep Labs",
    description:
      "Custom software solutions for startups and enterprises. We build web applications, mobile apps, AI-powered software, and SaaS platforms.",
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
    title: "Custom Software Development Company | Axion Deep Labs",
    description:
      "Custom software solutions for startups and enterprises. Web apps, mobile apps, AI software, and SaaS platforms.",
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
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
        contactType: "sales",
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
        "Custom software development company specializing in web applications, mobile apps, AI-powered software, and SaaS platforms.",
      url: "https://www.axiondeep.com",
      priceRange: "$$$$",
      areaServed: "Worldwide",
      serviceType: [
        "Custom Software Development",
        "Web Application Development",
        "Mobile App Development",
        "AI Software Development",
        "SaaS Development",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <GradientBackground>{children}</GradientBackground>
      </body>
    </html>
  );
}

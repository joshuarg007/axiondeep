import { useEffect } from "react";

/**
 * SEO Component - Updates document title, meta tags, and structured data for each page
 * Usage: <SEO title="Page Title" description="Page description" breadcrumbs={[...]} software={{...}} faq={[...]} />
 */
export default function SEO({
  title,
  description,
  keywords,
  canonical,
  type = "website",
  breadcrumbs,  // Array of { name, url } for BreadcrumbList schema
  software,     // Object for SoftwareApplication schema
  faq,          // Array of { question, answer } for FAQPage schema
  videos        // Array of { name, description, thumbnailUrl, uploadDate, duration } for VideoObject schema
}) {
  const siteName = "Axion Deep Labs";
  const defaultDescription = "Custom software solutions for startups and enterprises. We build web applications, mobile apps, AI-powered software, and SaaS platforms with React, Python, and modern cloud technologies.";
  const baseUrl = "https://www.axiondeep.com";

  const fullTitle = title ? `${title} | ${siteName}` : `Custom Software Development Company | ${siteName}`;
  const metaDescription = description || defaultDescription;
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", metaDescription);

    // Update meta keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) metaKeywords.setAttribute("content", keywords);
    }

    // Update canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) canonicalTag.setAttribute("href", canonicalUrl);

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", fullTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", metaDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", canonicalUrl);

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) ogType.setAttribute("content", type);

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", fullTitle);

    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", metaDescription);

    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute("content", canonicalUrl);

    // Clean up old structured data on unmount
    return () => {
      document.querySelectorAll('script[data-seo-schema]').forEach(el => el.remove());
    };
  }, [fullTitle, metaDescription, canonicalUrl, keywords, type]);

  // Generate BreadcrumbList schema
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.url}`
    }))
  } : null;

  // Generate SoftwareApplication schema
  const softwareSchema = software ? {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": software.name,
    "description": software.description,
    "applicationCategory": software.category || "BusinessApplication",
    "operatingSystem": software.os || "Web Browser",
    "url": `${baseUrl}${software.url}`,
    ...(software.screenshot && { "screenshot": `${baseUrl}${software.screenshot}` }),
    ...(software.price && {
      "offers": {
        "@type": "Offer",
        "price": software.price,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }),
    "author": {
      "@type": "Organization",
      "name": "Axion Deep Labs",
      "url": baseUrl
    },
    ...(software.features && { "featureList": software.features.join(", ") })
  } : null;

  // Generate FAQPage schema
  const faqSchema = faq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  // Generate VideoObject schema(s)
  const videoSchemas = videos ? videos.map(video => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.name,
    "description": video.description,
    "thumbnailUrl": video.thumbnailUrl?.startsWith("http") ? video.thumbnailUrl : `${baseUrl}${video.thumbnailUrl}`,
    "uploadDate": video.uploadDate || "2026-01-20",
    ...(video.duration && { "duration": video.duration }),
    ...(video.contentUrl && { "contentUrl": video.contentUrl?.startsWith("http") ? video.contentUrl : `${baseUrl}${video.contentUrl}` }),
    "publisher": {
      "@type": "Organization",
      "name": "Axion Deep Labs",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo512.png`
      }
    }
  })) : null;

  return (
    <>
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          data-seo-schema="breadcrumb"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {softwareSchema && (
        <script
          type="application/ld+json"
          data-seo-schema="software"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          data-seo-schema="faq"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {videoSchemas && videoSchemas.map((schema, idx) => (
        <script
          key={`video-${idx}`}
          type="application/ld+json"
          data-seo-schema="video"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

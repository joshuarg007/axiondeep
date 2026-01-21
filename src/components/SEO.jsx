import { useEffect } from "react";

/**
 * SEO Component - Updates document title and meta tags for each page
 * Usage: <SEO title="Page Title" description="Page description" />
 */
export default function SEO({
  title,
  description,
  keywords,
  canonical,
  type = "website"
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

  }, [fullTitle, metaDescription, canonicalUrl, keywords, type]);

  return null; // This component doesn't render anything
}

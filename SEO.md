# Axion Deep Labs - SEO Documentation

> **Last Updated:** 2026-01-21  
> **Domain:** https://www.axiondeep.com  
> **Google Analytics:** G-XWF39KFMS2

---

## Primary SEO Focus

### Target Keywords (Priority Order)

1. **Primary Keywords** (High Intent)
   - "custom software solutions"
   - "custom software development company"
   - "web development company"
   - "web development services"
   - "software development services"

2. **Secondary Keywords** (Service-Specific)
   - "web application development"
   - "mobile app development company"
   - "AI software development"
   - "SaaS development company"
   - "enterprise software solutions"
   - "full-stack web development"
   - "React development"
   - "Python development"

3. **Long-Tail Keywords**
   - "custom software solutions for startups"
   - "web development services for startups"
   - "web application development services"
   - "AI-powered software development"
   - "full-stack web development company"
   - "MVP development services"
   - "hire web developers"
   - "React development services"
   - "Python development services"
   - "website development company"

### Brand Keywords
- "Axion Deep Labs"
- "Axion Deep"

---

## Page-Level SEO Configuration

### Homepage (`/`)
```
Title: Custom Software & Web Development Company | Axion Deep Labs
Description: Custom software and web development company building web applications, mobile apps, AI-powered software, and SaaS platforms. Full-stack web development with React, Python, and modern cloud technologies.
Keywords: custom software solutions, web development company, web development services, custom software development company, software development services, web application development, mobile app development, AI software development, SaaS development, enterprise software solutions, React developers, Python developers, full-stack web development, hire web developers
```

### Mission (`/mission`)
```
Title: Our Mission - Custom Software Development Process | Axion Deep Labs
Description: Axion Deep Labs transforms complex ideas into elegant, production-ready software. Our agile development process delivers custom web applications, mobile apps, AI solutions, and enterprise software.
Keywords: custom software development process, agile software development, software development methodology, web application development company
```

### Solutions (`/solutions`)
```
Title: Web Development & Software Solutions Portfolio | Axion Deep Labs
Description: Explore our web development and custom software solutions: QUANTA quantum computing platform, Site2CRM AI-powered lead analytics, Forma visual page builder, Vesper security testing, and Made4Founders startup management.
Keywords: web development portfolio, custom software solutions portfolio, software products, SaaS applications, web application examples, custom software case studies, web development company portfolio, React projects
```

### Development Services (`/development`)
```
Title: Web Development & Custom Software Services | Axion Deep Labs
Description: Web development and custom software services for every platform: web applications, mobile apps, AI-powered software, VR/AR experiences, and enterprise solutions. Full-stack web development.
Keywords: web development services, web development company, custom software development services, web application development, mobile app development company, AI software development, full-stack web development, hire web developers, website development services
```

### Research (`/research`)
```
Title: Research & Innovation | Custom Software R&D | Axion Deep Labs
Description: Axion Deep Labs research program: Project DRIFT investigates quantum system behavior. Our R&D drives innovation in custom software solutions.
Keywords: software research and development, quantum computing research, AI research, custom software innovation
```

### Careers (`/careers`)
```
Title: Careers - Join Our Custom Software Development Team | Axion Deep Labs
Description: Join Axion Deep Labs: We're hiring software developers, AI engineers, and full-stack developers passionate about building custom software solutions.
Keywords: software developer jobs, custom software development careers, AI engineer positions, full-stack developer jobs
```

### Contact (`/contact`)
```
Title: Contact Us - Start Your Custom Software Project | Axion Deep Labs
Description: Ready to build custom software solutions? Contact Axion Deep Labs to discuss your web application, mobile app, or AI software project.
Keywords: contact software development company, custom software consultation, software development quote
```

---

## Technical SEO Checklist

### Meta Tags (index.html)
- [x] Primary title tag with keywords
- [x] Meta description (150-160 chars)
- [x] Meta keywords
- [x] Canonical URL
- [x] Robots meta (index, follow)
- [x] Language declaration
- [x] Viewport meta
- [x] Theme color

### Open Graph Tags
- [x] og:type
- [x] og:url
- [x] og:title
- [x] og:description
- [x] og:image
- [x] og:site_name
- [x] og:locale

### Twitter Cards
- [x] twitter:card
- [x] twitter:url
- [x] twitter:title
- [x] twitter:description
- [x] twitter:image

### Structured Data (JSON-LD)
- [x] Organization schema
- [x] WebSite schema
- [x] Service schema
- [x] ProfessionalService schema (local SEO)

### Files
- [x] robots.txt
- [x] sitemap.xml
- [ ] og-image.png (1200x630px recommended)

---

## Image Optimization Guidelines

### Standards
- **Format:** WebP (85% quality) for all images
- **Metadata:** Strip all EXIF, add copyright: `© 2026 Axion Deep Labs. All rights reserved.`
- **Alt Text:** Descriptive, keyword-rich alt text for all images
- **Loading:** Use `loading="lazy"` for below-fold images

### Current Images (public/images/)

| File | Dimensions | Size | Usage | Alt Text |
|------|------------|------|-------|----------|
| webapps.webp | 400×318 | 53KB | Bento grid - Web Apps | Web application development - React, Next.js, TypeScript |
| mobileapps.webp | 300×265 | 40KB | Bento grid - Mobile | Mobile app development - iOS and Android |
| ai-ml.webp | 300×228 | 40KB | Bento grid - AI/ML | Artificial intelligence and machine learning neural network |
| backend-apis.webp | 300×237 | 30KB | Bento grid - Backend | Backend server and API infrastructure |
| cloud-devops.webp | 300×244 | 35KB | Bento grid - Cloud | Cloud computing and DevOps infrastructure |
| process.webp | 1200×755 | 388KB | Process section | Software development process cycle |

### Image Processing Commands
```bash
# Crop to content
convert input.png -fuzz 5% -trim +repage trimmed.png

# Resize (maintain aspect ratio)
convert trimmed.png -resize 400x resized.png

# Convert to WebP
cwebp -q 85 resized.png -o output.webp

# Strip metadata and add copyright
exiftool -all= -overwrite_original output.webp
exiftool -Artist="Axion Deep Labs" -Copyright="© 2026 Axion Deep Labs. All rights reserved." -overwrite_original output.webp
```

### Size Guidelines by Usage
- **Icons/small images:** 300px width, <50KB
- **Feature images:** 400-600px width, <100KB
- **Hero/section images:** 1200px width, <400KB
- **OG images:** 1200×630px exactly

---

## Google Analytics

### Property Details
- **Property ID:** G-XWF39KFMS2
- **Tag ID:** GT-PJ7KK8NG
- **Implementation:** Global Site Tag (gtag.js)

### Key Events to Track
1. Contact form submissions
2. Page views by section
3. Outbound clicks (to products: QUANTA, Site2CRM, etc.)
4. Scroll depth on key pages
5. Time on page

### Goals to Set Up
1. Contact form completion
2. Solutions page engagement (>2 min)
3. Project page visits
4. Career inquiries

---

## Backlink Strategy

### Internal Cross-Linking (Completed)
- [x] axiondeep.com → site2crm.io (footer)
- [x] axiondeep.com → made4founders.com (footer)
- [x] site2crm.io → axiondeep.com (footer)
- [x] site2crm.io → made4founders.com (footer)
- [x] made4founders.com → axiondeep.com (footer)
- [x] made4founders.com → site2crm.io (footer)

### External Opportunities
- Software directories (Clutch, GoodFirms, DesignRush)
- GitHub organization with open-source projects
- Tech blog guest posts
- Startup directories
- LinkedIn company page

---

## Content Strategy

### High-Value Pages to Create
1. **Case Studies** - Detailed breakdowns of each product
2. **Blog/Insights** - Technical articles for organic traffic
3. **Services Landing Pages** - Dedicated pages for each service type
4. **Industry Pages** - "Software for Healthcare", "Software for Fintech", etc.

### Content Pillars
1. Custom Software Development
2. AI/ML Integration
3. Web Application Architecture
4. Mobile Development
5. Enterprise Solutions

---

## Competitor Keywords to Target

Research these competitors and their ranking keywords:
- Custom software agencies in similar markets
- React/Python development companies
- AI software development firms
- SaaS development companies

Target their ranking keywords:
- "hire react developers"
- "python development company"
- "saas mvp development"
- "ai integration services"
- "enterprise web application development"

---

## Monthly SEO Tasks

### Week 1
- [ ] Review Google Search Console for crawl errors
- [ ] Check page load speeds (Core Web Vitals)
- [ ] Review 404 errors and create redirects

### Week 2
- [ ] Analyze top-performing pages
- [ ] Update sitemap if new pages added
- [ ] Review keyword rankings

### Week 3
- [ ] Create/update content based on keyword gaps
- [ ] Internal linking optimization
- [ ] Image optimization audit

### Week 4
- [ ] Review competitor rankings
- [ ] Backlink outreach
- [ ] Monthly analytics report

---

## Performance Benchmarks

### Target Metrics
- **Organic Traffic:** Track monthly growth
- **Keyword Rankings:** Top 10 for primary keywords
- **Page Load Time:** < 3 seconds
- **Core Web Vitals:** All green
- **Bounce Rate:** < 50%
- **Average Session Duration:** > 2 minutes

### Tools
- Google Analytics 4
- Google Search Console
- PageSpeed Insights
- Lighthouse
- Ahrefs/SEMrush (for keyword tracking)

---

## Quick Reference: SEO Component Usage

```jsx
import SEO from "../components/SEO";

// In your page component:
<SEO
  title="Page Title - Include Primary Keyword"
  description="150-160 character description with keywords naturally included."
  keywords="keyword1, keyword2, keyword3"
  canonical="/page-path"
/>
```

### Guidelines
1. **Title:** 50-60 characters, primary keyword first
2. **Description:** 150-160 characters, include call-to-action
3. **Keywords:** 8-12 relevant keywords, comma-separated
4. **Canonical:** Relative path (component adds base URL)

---

## Files Modified for SEO

| File | Changes |
|------|---------|
| `public/index.html` | Meta tags, Open Graph, structured data |
| `public/robots.txt` | Created - search engine directives |
| `public/sitemap.xml` | Created - all public URLs |
| `src/components/SEO.jsx` | Dynamic meta tag updates |
| `src/pages/Home.jsx` | Page-specific SEO |
| `src/pages/Mission.jsx` | Page-specific SEO |
| `src/pages/Solutions.jsx` | Page-specific SEO |
| `src/pages/Development.jsx` | Page-specific SEO |
| `src/pages/Research.jsx` | Page-specific SEO |
| `src/pages/Careers.jsx` | Page-specific SEO |

---

*This document should be updated whenever SEO changes are made to ensure consistency and track optimization efforts.*

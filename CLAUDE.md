# Axion Deep Labs - Company Website

> **FOR CLAUDE: Read the SESSION STATE section before doing anything.**

---

## BRAND POSITIONING — CRITICAL
**AxionDeep is a PURE R&D holding company. NO sales, NO services, NO client-facing language.**
- Sales go through AAIT Technologies (separate entity)
- Website language: "research," "investigate," "advance," "innovate"
- NEVER: "hire us," "services," "pricing," "your project," "client"

## SESSION STATE (Update before ending each session)
**Last Updated:** 2026-02-08

### Where We Left Off:
- Full SEO overhaul: removed all sales/services language, repositioned as pure R&D
- Removed "Independent Sales Partner" job listing (sales belongs to AAIT)
- Changed JSON-LD from ProfessionalService to ResearchOrganization
- Updated all meta tags, descriptions, keywords, alt texts, llms.txt
- Footer "Services" column → "Research" column
- Navbar "Development" → "R&D"
- Contact form "Tell us about your project" → "How can we help?"
- PlatformCards SEO content reframed from services to R&D

### Roadmap / Future Enhancements:
- [ ] Remove or repurpose Sales Portal pages (/portal, /admin)
- [ ] QUANTA subscription tiers (planned)
- [ ] Update OG image to reflect R&D branding

### Current Blockers:
- None

### Environment Variables (Amplify Hosting):
- `REACT_APP_AUTH_API_URL` = Lambda auth function URL
- `REACT_APP_CONTENT_API_URL` = Lambda content function URL

---

## Project Overview
Modern React landing page for Axion Deep Labs.

---

## QUANTA & PROJECT DRIFT (Dual-Use Governance)

### Critical Context
This website presents TWO distinct offerings that must NEVER be conflated:

| Route | Offering | Plane | Language |
|-------|----------|-------|----------|
| `/quanta` | QUANTA Education Platform | Education (Commercial) | "Learn," "practice," "curriculum" |
| `/research` | Project DRIFT | Research (R&D) | "Investigate," "characterize," "findings" |

### Governance Documentation
Full governance framework (33 documents) at:
```
~/Corporate/AxionDeepLabs/Quanta_Dual_Use_Governance/
```

### Project DRIFT
**Full Name:** Degradation Regimes In Iterated Field Transformations

Research investigating behavioral uncertainty in quantum system state evolution under repeated manipulation.

### QUANTA Education
Educational SaaS platform delivering structured curriculum and interactive simulation of established quantum computing concepts.

### Language Rules
See full guide: `Quanta_Dual_Use_Governance/02_Policies/06_Language_And_Labeling_Guide.md`

Quick rules:
1. QUANTA pages: Never claim "research" or "experimental"
2. Research pages: Never use marketing language or call it a "product"
3. Cross-links OK with correct framing:
   - QUANTA: "Built on insights from our research program"
   - Research: "Using QUANTA as our research instrument"

---

## Tech Stack
- Next.js (App Router)
- React + TypeScript
- TailwindCSS
- AWS Amplify (static hosting)

## Local Development
```bash
npm run dev  # Runs on port 3000
```

## Pages

### Public Pages
- `/` - Home
- `/mission` - Mission statement
- `/solutions` - Product portfolio
- `/development` - Applied R&D
- `/research` - Project DRIFT overview
- `/careers` - Join the labs
- `/contact` - Research inquiries
- `/legal` - Privacy & Terms

### Product Pages
- `/projects/site2crm` - Site2CRM
- `/projects/made4founders` - Made4Founders
- `/projects/quanta` - QUANTA Education
- `/projects/forma` - Forma Builder
- `/projects/vesper` - Vesper AI

## Recent Fixes (2025-12-04)
1. **Tailwind Dynamic Classes**: Fixed gradient classes by using complete class names instead of dynamic construction
2. **Forma Link**: Updated localhost link to production URL
3. **Mobile Menu**: Already working with useState for toggle

## Components
- `GradientBackground` - Animated gradient background
- `LogoMark` - Company logo component
- `NavItem` - Navigation link with active state

## Deployment
Hosted on Vercel or similar (production URL: www.axiondeep.com)

## Notes
- Mobile-responsive navigation with hamburger menu
- Dark theme with gradient accents
- Professional fixed navbar with blur effect

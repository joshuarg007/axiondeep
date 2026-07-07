# Axion Deep Labs - Company Website

> **FOR CLAUDE: Read the SESSION STATE section before doing anything.**

---

## BRAND POSITIONING — CRITICAL
**Public brand is "Axion Labs"** (trade name of Axion Deep Labs, Inc.). This site is the PURE R&D
face: NO sales, NO services, NO client-facing language.
- Legal entity name stays **"Axion Deep Labs, Inc."** — use it in copyright, legal pages, and schema
  `legalName` only. Everywhere else the visible brand is **"Axion Labs"**.
- ALL sales/services go through the subsidiary **Axion Deep Digital** (axiondeepdigital.com). Do NOT
  add services/marketing pages here — they belong on Digital.
- Website language: "research," "investigate," "advance," "innovate"
- NEVER: "hire us," "services," "pricing," "your project," "client"
- The `/marketing/*` services section is being removed (2026-07-06) and 301'd to Digital; `/solutions`
  301's to `/about`; commercial `/projects/*` (site2crm, made4founders, forma, vesper, quanta,
  deepaudit) are `noindex`. Do NOT recreate or re-index them. Rationale + full plan:
  `~/Corporate/AxionDeep/Marketing/axion-labs-rebrand-execution-plan.md`.

## SESSION STATE (Update before ending each session)
**Last Updated:** 2026-02-17

### Where We Left Off:
- Federal grant SEO overhaul: all metadata, descriptions, keywords, llms.txt rewritten for grant-reviewer and AI-scraper discoverability
- Un-noindexed /research/experiments page (was hidden from crawlers)
- Added /research/experiments to sitemap.xml with priority 0.9
- Updated EXP-01 status from "Proposed" to "Active — Phase 4" with preliminary results table (5 architectures, ρ=0.866)
- Bumped /research sitemap priority from 0.8 to 0.9, changefreq from monthly to weekly
- Added 4 ResearchProject JSON-LD schemas (DRIFT, PERSIST, PHI, GENESIS) with descriptions, about fields, and preliminary findings
- Expanded llms.txt from basic overview to comprehensive research-focused document with all 4 programs, methodology, preliminary results, and publication targets
- Updated all page meta descriptions (home, mission, development, contact, research, experiments) with grant-focused language
- Updated OG/Twitter card descriptions for research positioning
- Updated research page image alt text with descriptive research context
- Updated site.webmanifest description
- PERSIST badge changed from "Foundational" to "Active — Experimental"

### Research Experiment Status (from ~/Corporate/axiondeep-experiments):
- **EXP-01 (PERSIST):** Active — Phase 4. 5/8 architectures complete. ρ=0.866 preliminary. Pending: ResNet-18 Wide (Phase 1 done), DenseNet-121, EfficientNet-B0
- **EXP-02 (PHI):** Protocol defined, pending execution
- **EXP-03 (GENESIS):** Protocol defined, pending execution
- **Action needed:** Weekly experiment progress cadence — run at least 1 architecture per week

### Roadmap / Future Enhancements:
- [ ] Remove or repurpose Sales Portal pages (/portal, /admin)
- [ ] QUANTA subscription tiers (planned)
- [ ] Update OG image to reflect R&D/research branding
- [ ] Add Research Team page when talent pool is established
- [ ] Publish EXP-01 preprint to arXiv when n=8 architectures complete
- [ ] Add Publications section once preprints exist

### Current Blockers:
- No research team page yet (need talent pool first)
- EXP-01 needs 3 more architecture runs for statistical significance

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
- `/marketing` - Axion Deep Marketing (services landing page)
- `/marketing/web-development` - Web development services
- `/marketing/seo` - SEO services
- `/marketing/lead-capture` - Lead capture / Site2CRM services
- `/marketing/contact` - Contact + booking
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

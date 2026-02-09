# Axion Deep Labs - Brand Identity Guide

## Brand Overview

**Company Name:** Axion Deep Labs
**Tagline:** *Advancing Intelligence Through Research & Innovation*
**Industry:** AI/ML Research, Quantum Computing Education, Enterprise Software
**Founded:** 2024
**Website:** axiondeep.com

---

## 1. Brand Essence

### Mission
To advance the frontiers of artificial intelligence and quantum computing through rigorous research, innovative software solutions, and accessible education.

### Vision
A world where cutting-edge AI and quantum technologies are responsibly developed and widely accessible to drive human progress.

### Brand Personality
| Trait | Description |
|-------|-------------|
| **Innovative** | Pushing boundaries in AI and quantum research |
| **Precise** | Rigorous, scientific approach to problem-solving |
| **Accessible** | Making complex technology understandable |
| **Trustworthy** | Responsible development with strong governance |
| **Forward-thinking** | Building tomorrow's technology today |

### Brand Voice
- **Tone:** Professional yet approachable, confident but not arrogant
- **Style:** Clear, precise technical communication with human warmth
- **Language:** Active voice, present tense, avoiding jargon when possible

---

## 2. Logo System

### Primary Logo
**File:** `/public/images/logo.webp`

The Axion Deep Labs logo represents the intersection of deep learning and quantum mechanics through an abstract geometric form suggesting both neural networks and quantum superposition.

### Logo Variations
| Version | File | Use Case |
|---------|------|----------|
| Primary (WebP) | `/images/logo.webp` | Web, digital |
| Transparent PNG | `/logo-transparent.png` | Overlays, presentations |
| Black Background | `/logo-black-bg.png` | Dark contexts |
| High-res (1080p) | `/logo-1080p.png` | Print, large displays |

### App Icons
| Size | File | Use Case |
|------|------|----------|
| 512x512 | `/icons/axiondeep-icon-512x512.png` | App stores, PWA |
| 256x256 | `/icons/axiondeep-icon-256x256.png` | Desktop apps |
| 180x180 | `/icons/axiondeep-icon-180x180.png` | Apple touch |
| 64x64 | `/icons/axiondeep-icon-64x64.png` | Small displays |
| ICO | `/favicon.ico` | Browser favicon |

### Logo Clear Space
Maintain minimum clear space equal to the height of the "A" in "Axion" on all sides.

### Logo Don'ts
- Do not rotate or skew the logo
- Do not change logo colors outside brand palette
- Do not add effects (shadows, gradients, outlines)
- Do not place on busy backgrounds without proper contrast
- Do not stretch or distort proportions

---

## 3. Color Palette

### Primary Colors

| Color | Hex | RGB | Tailwind | Usage |
|-------|-----|-----|----------|-------|
| **Void Black** | `#000000` | 0, 0, 0 | `black` | Primary background |
| **Pure White** | `#FFFFFF` | 255, 255, 255 | `white` | Primary text, foreground |

### Accent Colors (The Aurora Palette)

| Color | Hex | RGB | Tailwind | Usage |
|-------|-----|-----|----------|-------|
| **Axion Cyan** | `#06B6D4` | 6, 182, 212 | `cyan-500` | Primary accent, CTAs |
| **Deep Violet** | `#8B5CF6` | 139, 92, 246 | `violet-500` | Secondary accent |
| **Nebula Fuchsia** | `#EC4899` | 236, 72, 153 | `fuchsia-500` | Tertiary accent |

### Gradient System

**Primary Brand Gradient (Aurora)**
```css
background: linear-gradient(90deg, #06B6D4, #8B5CF6, #EC4899);
/* Tailwind: from-cyan-400 via-violet-400 to-fuchsia-400 */
```

**Product-Specific Gradients**
| Product | Gradient | Tailwind |
|---------|----------|----------|
| QUANTA | Cyan → Violet | `from-cyan-500 to-violet-500` |
| Made4Founders | Orange → Red | `from-orange-500 to-red-500` |
| Site2CRM | Cyan → Blue | `from-cyan-500 to-blue-500` |
| Vesper | Emerald → Teal | `from-emerald-500 to-teal-500` |

### Neutral Palette

| Color | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Gray 400 | `#9CA3AF` | `gray-400` | Secondary text |
| Gray 500 | `#6B7280` | `gray-500` | Tertiary text |
| Gray 600 | `#4B5563` | `gray-600` | Subtle text |
| Gray 700 | `#374151` | `gray-700` | Muted elements |
| Gray 800 | `#1F2937` | `gray-800` | Card backgrounds |
| Gray 900 | `#111827` | `gray-900` | Elevated surfaces |

### Semantic Colors

| Purpose | Color | Hex | Tailwind |
|---------|-------|-----|----------|
| Success | Green | `#22C55E` | `green-500` |
| Warning | Amber | `#F59E0B` | `amber-500` |
| Error | Red | `#EF4444` | `red-500` |
| Info | Blue | `#3B82F6` | `blue-500` |

### Color Usage Rules

1. **Background:** Always use Void Black (#000000) as the primary background
2. **Text:** Pure White for primary text, Gray 400 for secondary
3. **Accents:** Use Aurora gradient for hero elements and CTAs
4. **Borders:** Use white with opacity (e.g., `border-white/10`)
5. **Overlays:** Use white with low opacity for glass effects (e.g., `bg-white/5`)

---

## 4. Typography

### Primary Typeface

**Inter** - Google Fonts
```css
font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height | Tracking |
|---------|---------------|---------------|--------|-------------|----------|
| Display | 72px (4.5rem) | 48px (3rem) | 700 | 1.1 | -0.02em |
| H1 | 60px (3.75rem) | 36px (2.25rem) | 700 | 1.1 | -0.02em |
| H2 | 48px (3rem) | 30px (1.875rem) | 700 | 1.2 | -0.01em |
| H3 | 36px (2.25rem) | 24px (1.5rem) | 600 | 1.3 | 0 |
| H4 | 24px (1.5rem) | 20px (1.25rem) | 600 | 1.4 | 0 |
| Body Large | 18px (1.125rem) | 16px (1rem) | 400 | 1.7 | 0 |
| Body | 16px (1rem) | 16px (1rem) | 400 | 1.6 | 0 |
| Body Small | 14px (0.875rem) | 14px (0.875rem) | 400 | 1.5 | 0 |
| Caption | 12px (0.75rem) | 12px (0.75rem) | 500 | 1.4 | 0.05em |
| Label | 13px (0.8125rem) | 13px (0.8125rem) | 500 | 1.2 | 0.1em |

### Text Styles

**Gradient Text (Headlines)**
```css
background: linear-gradient(90deg, #06B6D4, #8B5CF6, #EC4899);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

**Glowing Text (Hero)**
```css
text-shadow: 0 0 40px rgba(255, 255, 255, 0.4);
```

**Navigation Text**
```css
font-size: 13px;
font-weight: 500;
letter-spacing: 0.1em;
text-transform: uppercase;
```

### Typography Hierarchy Rules

1. Use gradient text sparingly - only for key headlines
2. Maintain consistent heading hierarchy (don't skip levels)
3. Body text should always be Gray 400 or White
4. Use uppercase + tracking for labels and navigation
5. Maximum line length: 75 characters for readability

---

## 5. Iconography

### Icon Style
- **Style:** Outline/Linear
- **Stroke Width:** 1.5-2px
- **Corners:** Rounded (2-4px radius)
- **Grid:** 24x24px base, scalable

### Product Icons
Located in `/public/icons/`:

| Product | Icon File | Primary Color |
|---------|-----------|---------------|
| QUANTA | `icon-solutions-quanta.png` | Cyan |
| Site2CRM | `icon-solutions-site2crm.png` | Blue |
| Forma | `icon-solutions-forma.png` | Violet |
| Vesper | `icon-solutions-vesper.png` | Emerald |
| Made4Founders | `icon-solutions-founderos.png` | Orange |

### Icon Usage Guidelines
1. Maintain consistent stroke weight across all icons
2. Use brand accent colors for product-specific icons
3. White icons on dark backgrounds, avoid colored icons on gradients
4. Minimum size: 16x16px for clarity

---

## 6. Imagery & Photography

### Photography Style
- **Theme:** Dark, atmospheric, technological
- **Lighting:** Dramatic, with cyan/violet/fuchsia color grading
- **Subjects:** Abstract tech, data visualization, clean workspaces
- **Treatment:** High contrast, subtle grain, gradient overlays

### Image Treatment
```css
/* Standard overlay for photos */
background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.7) 0%,
  rgba(0, 0, 0, 0.3) 50%,
  rgba(0, 0, 0, 0.7) 100%
);
```

### Video Guidelines
- **Format:** WebM (primary), MP4 (fallback)
- **Aspect Ratio:** 16:9 for hero, 1:1 for thumbnails
- **Duration:** 10-30 seconds for background loops
- **Audio:** None for ambient videos
- **Mobile:** Use static poster images for performance

---

## 7. UI Components

### Buttons

**Primary Button**
```css
background: linear-gradient(90deg, #06B6D4, #8B5CF6);
color: white;
font-weight: 600;
padding: 12px 24px;
border-radius: 12px;
transition: opacity 200ms;
/* Hover: opacity 0.9 */
```

**Secondary Button**
```css
background: transparent;
border: 1px solid rgba(255, 255, 255, 0.2);
color: white;
font-weight: 500;
padding: 12px 24px;
border-radius: 12px;
/* Hover: background rgba(255, 255, 255, 0.05) */
```

**Ghost Button**
```css
background: rgba(255, 255, 255, 0.05);
color: white;
padding: 8px 16px;
border-radius: 8px;
/* Hover: background rgba(255, 255, 255, 0.1) */
```

### Cards

**Standard Card**
```css
background: linear-gradient(135deg,
  rgba(255, 255, 255, 0.05) 0%,
  rgba(255, 255, 255, 0.02) 100%
);
border: 1px solid rgba(255, 255, 255, 0.06);
border-radius: 24px;
padding: 32px;
backdrop-filter: blur(8px);
```

**Product Card**
```css
background: linear-gradient(135deg,
  rgba(6, 182, 212, 0.1) 0%,
  rgba(139, 92, 246, 0.05) 50%,
  transparent 100%
);
border: 1px solid rgba(6, 182, 212, 0.2);
border-radius: 24px;
/* Hover: border-color increases opacity */
```

### Form Elements

**Input Field**
```css
background: rgba(0, 0, 0, 0.3);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 12px;
padding: 12px 16px;
color: white;
/* Focus: border-color rgba(6, 182, 212, 0.5) */
```

**Label**
```css
font-size: 14px;
font-weight: 500;
color: #9CA3AF;
margin-bottom: 8px;
```

---

## 8. Motion & Animation

### Animation Principles
1. **Purposeful:** Animations should guide attention and provide feedback
2. **Subtle:** Avoid flashy or distracting movements
3. **Performant:** Respect user preferences and device capabilities
4. **Consistent:** Use the same easing and timing throughout

### Core Animations

**Fade In**
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
/* Duration: 500ms, Easing: ease-out */
```

**Aurora Background**
```css
@keyframes auroraMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
/* Duration: 24s, Timing: linear, Iteration: infinite */
```

### Timing Guidelines

| Animation Type | Duration | Easing |
|---------------|----------|--------|
| Micro-interactions | 150-200ms | ease-out |
| Element transitions | 200-300ms | ease-in-out |
| Page transitions | 300-500ms | ease-out |
| Background animations | 10-30s | linear |

### Accessibility
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Layout & Spacing

### Grid System
- **Max Width:** 1280px (max-w-6xl)
- **Columns:** 12-column grid
- **Gutter:** 24px (gap-6)
- **Margins:** 24px mobile, 32px desktop

### Spacing Scale (Tailwind-based)
| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight spacing |
| `space-2` | 8px | Related elements |
| `space-4` | 16px | Standard spacing |
| `space-6` | 24px | Section padding |
| `space-8` | 32px | Large spacing |
| `space-12` | 48px | Section gaps |
| `space-16` | 64px | Major sections |

### Breakpoints
| Name | Width | Tailwind |
|------|-------|----------|
| Mobile | 0-639px | default |
| Tablet | 640-767px | `sm:` |
| Small Desktop | 768-1023px | `md:` |
| Desktop | 1024px+ | `lg:` |

---

## 10. Product Sub-Brands

### QUANTA (Education Platform)
- **Color:** Cyan primary
- **Tone:** Educational, accessible, encouraging
- **Visual:** Circuit patterns, quantum visualizations

### Project DRIFT (Research)
- **Color:** Violet primary
- **Tone:** Scientific, precise, exploratory
- **Visual:** Abstract data, wave patterns

### Made4Founders (Business Platform)
- **Color:** Orange/Red gradient
- **Tone:** Entrepreneurial, actionable, supportive
- **Visual:** Growth charts, network diagrams

### Vesper (Security)
- **Color:** Emerald primary
- **Tone:** Vigilant, trustworthy, advanced
- **Visual:** Shield motifs, monitoring dashboards

### Site2CRM (Automation)
- **Color:** Blue/Cyan gradient
- **Tone:** Efficient, smart, seamless
- **Visual:** Flow diagrams, connection lines

---

## 11. Social Media & Marketing

### Social Media Presence
- LinkedIn: Primary professional channel
- X (Twitter): Tech community engagement
- YouTube: Product demos and tutorials
- Facebook: General audience
- Instagram: Culture and behind-the-scenes

### Open Graph Image
**Dimensions:** 1200x630px
**File:** `/public/og-image.png`

**Design Elements:**
- Dark background (#000000)
- Aurora gradient accent
- Logo centered
- Tagline below logo
- Adequate padding for all platforms

### Email Signature
```
[Name]
[Title]
Axion Deep Labs

[email] | axiondeep.com
LinkedIn: linkedin.com/company/axiondeep
```

---

## 12. Brand Assets Checklist

### Core Assets
- [x] Primary logo (WebP, PNG, SVG)
- [x] Logo variations (transparent, dark bg, light bg)
- [x] App icons (all sizes)
- [x] Favicon
- [x] Open Graph image
- [x] Social media profiles

### Design Files
- [ ] Master logo files (AI/Figma)
- [ ] Icon library (SVG sprite)
- [ ] Presentation template
- [ ] Business card design
- [ ] Letterhead template
- [ ] Email template

### Digital Assets
- [x] Color palette CSS/Tailwind
- [x] Typography setup
- [x] Animation keyframes
- [x] Component library (React)

---

## 13. Usage Guidelines Summary

### Do's
- Use the Aurora gradient for hero elements and CTAs
- Maintain high contrast for accessibility
- Use consistent spacing from the scale
- Respect reduced motion preferences
- Keep text readable with adequate line height

### Don'ts
- Don't use colors outside the brand palette
- Don't distort or modify the logo
- Don't use light mode backgrounds
- Don't overcrowd layouts - embrace whitespace
- Don't use Comic Sans (or any non-approved font)

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-30 | Initial brand identity document |

---

*This document is the source of truth for Axion Deep Labs brand identity. For questions or clarifications, contact the design team.*

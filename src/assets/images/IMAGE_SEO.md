# Image SEO Reference - Axion Deep Labs

All images optimized: **96.6% size reduction** (45.6MB → 1.5MB)

## Usage

```jsx
import heroInnovation from '../assets/images/hero-innovation.webp';

<img
  src={heroInnovation}
  alt="Custom software development innovation concept"
  loading="lazy"
/>
```

## Image Inventory with SEO Alt Text

### Hero & Page Images

| File | Dimensions | Size | Recommended Alt Text |
|------|------------|------|---------------------|
| `hero-innovation.webp` | 1200x800 | 124KB | "Custom software development innovation concept" |
| `mission-vision.webp` | 1000x667 | 209KB | "Axion Deep Labs mission and vision for software development" |
| `careers-team.webp` | 1000x666 | 58KB | "Software engineering team collaboration at Axion Deep Labs" |
| `contact-connect.webp` | 1000x667 | 207KB | "Connect with Axion Deep Labs for custom software solutions" |
| `research-quantum.webp` | 1000x666 | 212KB | "Quantum computing and AI research at Axion Deep Labs" |

### Platform Icons

| File | Dimensions | Size | Recommended Alt Text |
|------|------------|------|---------------------|
| `platform-web.webp` | 400x266 | 8KB | "Web application development services" |
| `platform-mobile.webp` | 400x266 | 8KB | "Mobile app development for iOS and Android" |
| `platform-desktop.webp` | 400x266 | 10KB | "Desktop software development services" |
| `platform-ai.webp` | 400x266 | 15KB | "AI and machine learning software development" |
| `platform-ar.webp` | 400x266 | 12KB | "Augmented reality application development" |
| `platform-vr.webp` | 400x266 | 12KB | "Virtual reality software development" |

### Development Process

| File | Dimensions | Size | Recommended Alt Text |
|------|------------|------|---------------------|
| `process-discover.webp` | 500x334 | 49KB | "Discovery phase - understanding software requirements" |
| `process-design.webp` | 500x334 | 49KB | "Design phase - architecting custom software solutions" |
| `process-deliver.webp` | 500x334 | 42KB | "Delivery phase - deploying production-ready software" |

### Project Heroes

| File | Dimensions | Size | Recommended Alt Text |
|------|------------|------|---------------------|
| `project-forma-hero.webp` | 900x600 | 33KB | "Forma - AI-powered visual React page builder" |
| `project-forma-hero-alt.webp` | 900x600 | 175KB | "Forma builder interface with drag-and-drop components" |
| `project-made4founders-hero.webp` | 900x600 | 39KB | "Made4Founders - startup management platform dashboard" |
| `project-quanta-hero.webp` | 900x600 | 36KB | "QUANTA - AI coding assistant for developers" |
| `project-site2crm-hero.webp` | 900x600 | 41KB | "Site2CRM - automated lead capture and CRM integration" |
| `project-vesper-hero.webp` | 900x600 | 47KB | "Vesper Hydra - cybersecurity threat detection platform" |

### Product Logos

| File | Dimensions | Size | Recommended Alt Text |
|------|------------|------|---------------------|
| `parsonic-logo.webp` | 512x438 | 74KB | "Parsonic logo - web scraping automation tool" |
| `quanta-logo.webp` | 512x457 | 76KB | "QUANTA logo - AI coding assistant" |
| `vesper-hydra-logo.webp` | 512x529 | 46KB | "Vesper Hydra logo - cybersecurity platform" |

## SEO Best Practices

1. **Always use `loading="lazy"`** for images below the fold
2. **Use descriptive alt text** with keywords naturally included
3. **Keep filenames semantic** (already done: `platform-web.webp` not `img001.webp`)
4. **WebP format** provides best compression with quality retention
5. **Responsive images** - use `srcset` for different screen sizes if needed

## Import Examples

```jsx
// Single import
import platformWeb from '../assets/images/platform-web.webp';

// Multiple imports
import {
  heroInnovation,
  missionVision,
  careersTeam
} from '../assets/images';
```

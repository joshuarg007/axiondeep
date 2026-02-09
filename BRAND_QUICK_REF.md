# Axion Deep Labs - Brand Quick Reference

## Colors (Copy-Paste Ready)

### Primary
```
Black:    #000000  |  rgb(0, 0, 0)
White:    #FFFFFF  |  rgb(255, 255, 255)
```

### Aurora Accents
```
Cyan:     #06B6D4  |  rgb(6, 182, 212)    |  cyan-500
Violet:   #8B5CF6  |  rgb(139, 92, 246)   |  violet-500
Fuchsia:  #EC4899  |  rgb(236, 72, 153)   |  fuchsia-500
```

### Grays
```
Gray 400: #9CA3AF  (secondary text)
Gray 500: #6B7280  (tertiary text)
Gray 600: #4B5563  (subtle text)
Gray 700: #374151  (muted)
```

---

## Gradients (Tailwind)

**Primary Aurora:**
```
from-cyan-400 via-violet-400 to-fuchsia-400
```

**CSS:**
```css
background: linear-gradient(90deg, #06B6D4, #8B5CF6, #EC4899);
```

---

## Typography

**Font:** Inter (Google Fonts)

| Use | Tailwind Classes |
|-----|-----------------|
| H1 | `text-6xl lg:text-7xl font-bold` |
| H2 | `text-4xl md:text-5xl font-bold` |
| H3 | `text-2xl md:text-3xl font-semibold` |
| Body | `text-base text-gray-400 leading-relaxed` |
| Nav | `text-[13px] font-medium tracking-wide uppercase` |

---

## Buttons

**Primary:**
```jsx
<button className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
```

**Secondary:**
```jsx
<button className="border border-white/20 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/5 transition-colors">
```

---

## Cards

```jsx
<div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/[0.06] rounded-2xl p-8 backdrop-blur-sm">
```

---

## Product Colors

| Product | Primary | Tailwind |
|---------|---------|----------|
| QUANTA | Cyan | `cyan-500` |
| DRIFT | Violet | `violet-500` |
| Made4Founders | Orange | `orange-500` |
| Vesper | Emerald | `emerald-500` |
| Site2CRM | Blue | `blue-500` |

---

## Logo Files

```
Primary:     /images/logo.webp
Transparent: /logo-transparent.png
Dark BG:     /logo-black-bg.png
Favicon:     /favicon.ico
```

---

## Key Animations

```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Aurora Background */
@keyframes auroraMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

---

## Social Links

- LinkedIn: /company/axiondeep
- X/Twitter: @axiondeep
- Website: axiondeep.com

# LUSTRE — Auto Spa & Ceramic Coating

A single-page marketing landing page for a premium car-washing & ceramic-coating business. Built with Vite + React + TypeScript + Tailwind CSS, with real photography and a deliberately non-generic visual identity.

> **Note:** The brand name **"LUSTRE"**, the accent colour, contact details, prices, reviews and photos are all **placeholders** — see [Customizing](#customizing) to make it your own.

---

## 🎨 Design style

**Style name: _Warm Editorial Minimalism_** (a.k.a. editorial / magazine-style), built on a **Swiss / International-typographic** grid.

It reads as "a studio designed this" rather than a template because of a specific recipe — not any single element. It is intentionally the opposite of the over-used "AI default" look (dark background + neon-cyan + glassmorphism + gradient text).

### The recipe

1. **Warm neutral canvas** — a bone / off-white "paper" background instead of stark white or near-black.
2. **One saturated accent, used sparingly** — applied to CTAs, underlines, small tags and hover states only; never everywhere.
3. **A three-font hierarchy with contrast** — a characterful **serif display** + a clean **grotesque** body + a **monospace** for small labels/numbers. The serif-vs-mono tension is the signature move.
4. **Swiss scaffolding** — a 12-column grid, hairline rules, **numbered sections** (`01 — Services`), oversized stat numerals, generous whitespace and asymmetry.
5. **Real photography with monospace captions** — never illustrations or CSS-shape placeholders.
6. **Restrained motion** — gentle fade-up reveals and smooth anchor scrolling; no glass, glow or gimmicks.

### Design tokens

Defined in [`tailwind.config.js`](./tailwind.config.js) and [`src/index.css`](./src/index.css).

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#F5F3EF` | Page background (warm bone) |
| `paper-100/200` | `#FBFAF8` / `#ECE8E1` | Alt section backgrounds, tracks |
| `ink` | `#17150F` | Text, headings, dark panels, buttons |
| `muted` | `#5C584F` | Secondary text |
| `line` | `#E5E0D6` | Hairline borders / dividers |
| `flame` | `#E5481F` | **The single accent** (swap per brand) |
| `flame-600` | `#C23A12` | Accent hover / pressed |

**Typography** (loaded in [`index.html`](./index.html)):

| Role | Font | Notes |
| --- | --- | --- |
| Display / headings | **Fraunces** | High-contrast serif; the personality |
| Body / UI | **Hanken Grotesk** | Clean, neutral grotesque |
| Labels / meta / numbers | **Space Mono** | Section numbers, captions, prices |

**Motion**: ~0.7s ease-out reveals (Framer Motion), and a custom ~0.75s smooth anchor scroll ([`src/lib/useSmoothScroll.ts`](./src/lib/useSmoothScroll.ts)) that also works when the OS "reduce motion" setting is on.

### Reusing this style on another project

Keep the **system**, change the **accent + photos + words**. The same fonts, grid and neutrals suit a SaaS site, a portfolio, a café or an agency — only the accent colour and imagery shift to fit the new brand. Briefing shorthand:

> _"Build a [portfolio / SaaS / café] page in **Warm Editorial Minimalism** — warm paper background, Fraunces + Hanken Grotesk + Space Mono, 12-col grid with hairlines and mono section numbers, real photography, single accent `#XXXXXX`."_

---

## 🧱 Tech stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v3** (design tokens in `tailwind.config.js`)
- **Framer Motion** (scroll reveals, accordion, pricing toggle)
- **lucide-react** (icons)

## 🚀 Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (prints a local URL)
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## 📁 Project structure

```
public/images/            real photography (replaceable placeholders)
src/
  App.tsx                 page assembly + smooth-scroll hook
  index.css               design tokens, base styles, component classes
  lib/
    motion.ts             shared Framer Motion variants & easing
    useSmoothScroll.ts    custom smooth anchor scrolling
  components/
    Navbar, Hero, TrustStrip, Services, Process, BeforeAfter,
    WhyUs, Gallery, Packages, Testimonials, FAQ, BookingCTA, Footer,
    SectionHeading, Reveal
tailwind.config.js        colours, fonts, animations
```

## 🔧 Customizing

| Want to change… | Where |
| --- | --- |
| **Brand name / logo** | `Navbar.tsx`, `Footer.tsx`, `index.html` (title/meta) |
| **Accent colour** | `flame` in `tailwind.config.js` (one value) + `scrollbar-color` / `::selection` in `index.css` |
| **Fonts** | the Google Fonts `<link>` in `index.html` + `fontFamily` in `tailwind.config.js` |
| **Photos** | drop files into `public/images/` using the same filenames |
| **Phone / email / address / hours** | `BookingCTA.tsx`, `Footer.tsx`, `Navbar.tsx` |
| **Prices / packages** | `Packages.tsx` |
| **Scroll speed** | `useSmoothScroll(offset, duration)` call in `App.tsx` |

## 📷 Credits

Placeholder photography sourced from **Unsplash** and **Pexels** (free to use). Replace with the client's own work before launch. All copy, prices, reviews and accreditations are sample content.

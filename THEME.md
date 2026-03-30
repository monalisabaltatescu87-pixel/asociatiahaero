# HAERO Design Theme Document

## Overview

A warm, approachable, and distinctive visual identity for Asociația HAERO — centered on **yellow as the dominant brand color**, paired with the humanist typeface **Nunito**. The goal is a design that feels hopeful, supportive, and community-driven — moving away from the clinical red/blue palette toward something more inviting and unique.

---

## Typography

### Primary Font: Nunito

- **Source:** Google Fonts (`Nunito`)
- **Weights:** 300 (Light), 400 (Regular), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
- **Character:** Rounded terminals give Nunito a friendly, approachable feel — ideal for a patient-support organization. It avoids the overused Inter/Roboto/Arial trap while remaining highly legible.

### Type Scale

| Role | Size (mobile) | Size (desktop) | Weight | Tracking |
|------|--------------|----------------|--------|----------|
| Hero headline | 2.25rem (text-4xl) | 3.75rem (text-6xl) | 800 | tight (-0.025em) |
| Section heading | 1.875rem (text-3xl) | 2.25rem (text-4xl) | 700 | tight |
| Card heading | 1.25rem (text-xl) | 1.25rem (text-xl) | 700 | normal |
| Body | 1rem (text-base) | 1.125rem (text-lg) | 400 | normal |
| Caption / Small | 0.875rem (text-sm) | 0.875rem (text-sm) | 400 | wide (+0.01em) |

---

## Color Palette

### Primary — Yellow Family (dominant)

| Token | Hex | Usage |
|-------|-----|-------|
| `haero-yellow-50` | `#FFFDE7` | Page backgrounds, light fills |
| `haero-yellow-100` | `#FFF9C4` | Card hover backgrounds, subtle highlights |
| `haero-yellow-200` | `#FFF59D` | Accent borders, dividers |
| `haero-yellow-300` | `#FFF176` | Decorative elements, badges |
| `haero-yellow-400` | `#FFEE58` | Secondary buttons, tags |
| `haero-yellow` | `#FBC02D` | Primary brand color — buttons, links, key accents |
| `haero-yellow-600` | `#F9A825` | Primary button hover, active states |
| `haero-yellow-700` | `#F57F17` | Strong emphasis, focus rings |

### Neutral — Warm Grays

| Token | Hex | Usage |
|-------|-----|-------|
| `haero-cream` | `#FFFEF5` | Main page background (replaces pure white) |
| `haero-dark` | `#2D2926` | Primary text, headings, footer background |
| `haero-gray-700` | `#44403C` | Body text |
| `haero-gray-500` | `#78716C` | Secondary text, captions |
| `haero-gray-300` | `#D6D3D1` | Borders, dividers |
| `haero-gray-100` | `#F5F5F4` | Alternate section backgrounds |

### Reserved — Use Sparingly

| Token | Hex | When to use |
|-------|-----|-------------|
| `haero-red` | `#D32F2F` | Error states, critical alerts, form validation only |
| `haero-blue` | `#1976D2` | External links, informational tooltips only |

> **Rule:** Red and blue must never appear as background fills, section accents, or button colors. They are strictly functional — reserved for error states (red) and informational indicators (blue).

---

## Surfaces & Elevation

### Backgrounds

| Surface | Color | Usage |
|---------|-------|-------|
| Page base | `haero-cream` (#FFFEF5) | Default body background |
| Alternate sections | `haero-yellow-50` (#FFFDE7) | Every other content section |
| Cards | `white` (#FFFFFF) | Cards on top of cream/yellow backgrounds |
| Footer | `haero-dark` (#2D2926) | Footer area |
| Hero | Gradient: `haero-yellow-50` → `haero-cream` | Hero section with subtle warmth |

### Elevation (Shadows)

| Level | Shadow | Usage |
|-------|--------|-------|
| Flat | none | Default state for inline elements |
| Raised | `0 1px 3px rgba(45,41,38,0.08)` | Cards at rest |
| Lifted | `0 4px 12px rgba(45,41,38,0.10)` | Cards on hover, dropdowns |
| Floating | `0 8px 24px rgba(45,41,38,0.12)` | Modals, sticky nav on scroll |

---

## Components

### Buttons

| Variant | Background | Text | Border | Usage |
|---------|-----------|------|--------|-------|
| Primary | `haero-yellow` → `haero-yellow-600` on hover | `haero-dark` | none | Main CTAs |
| Secondary | transparent | `haero-dark` | 2px `haero-yellow` | Secondary actions |
| Ghost | transparent | `haero-gray-700` | none | Tertiary actions, nav links |

- Border radius: `rounded-full` (pill shape)
- Padding: `px-8 py-3`
- Font: Nunito 600 (SemiBold), uppercase tracking-wide for primary CTA
- Transition: `transition-all duration-200`
- Focus ring: `ring-2 ring-haero-yellow-700 ring-offset-2`

### Cards

- Background: `white`
- Border radius: `rounded-2xl`
- Shadow: Raised → Lifted on hover
- Padding: `p-8`
- Optional top accent: 4px `haero-yellow` border-top
- Transition: `transition-shadow duration-200`

### Section Dividers

- Replace the current red/yellow underlines with:
  - A `w-16 h-1 rounded-full bg-haero-yellow` bar beneath section headings
  - OR a subtle dotted line: `border-b-2 border-dotted border-haero-yellow-200`

### Navigation

- Background: `white/90` with `backdrop-blur-md` (frosted glass effect)
- Active link: `text-haero-dark` with `border-b-2 border-haero-yellow`
- Hover: `text-haero-yellow-600`
- Mobile menu: slide-in panel with `haero-cream` background

---

## Motion & Interaction

| Interaction | Animation | Duration |
|-------------|-----------|----------|
| Button hover | Background shift + subtle scale(1.02) | 200ms ease |
| Card hover | Shadow elevation + translateY(-2px) | 200ms ease |
| Section entry | Fade-in + translateY(12px) | 400ms ease-out (on scroll) |
| Nav scroll | Background opacity 0 → 0.9 | 150ms ease |
| Mobile menu | SlideIn from right | 250ms ease |

> Keep motion restrained and purposeful. No bouncing, no spinning, no parallax. Every animation should feel like a gentle nod, not a shout.

---

## Iconography & Decorative Elements

- **Icons:** Outlined style, 1.5px stroke, `haero-dark` color (or `haero-yellow` for emphasis)
- **Decorative shapes:** Soft rounded blobs or circles in `haero-yellow-100` / `haero-yellow-200` as background accents behind cards or headings
- **Hero illustration area:** Subtle radial gradient `haero-yellow-100` → transparent as a warm spotlight effect
- **Textures:** None — keep surfaces clean and flat with color alone

---

## Accessibility

- **Contrast:** `haero-dark` on `haero-cream` = 13.8:1 (AAA). Yellow buttons use `haero-dark` text, never white on yellow.
- **Focus states:** Visible `ring-2 ring-haero-yellow-700 ring-offset-2` on all interactive elements
- **Font sizing:** Minimum 16px body text, 14px for captions
- **Touch targets:** Minimum 44x44px for all clickable elements

---

## Summary of Changes from Current Design

| Aspect | Current | New |
|--------|---------|-----|
| Font | System default | Nunito (Google Fonts) |
| Primary color | Red (#D32F2F) | Yellow (#FBC02D) |
| Background | Pure white | Warm cream (#FFFEF5) |
| Red/Blue | Used throughout as accents | Reserved for errors/info only |
| Shadows | Generic Tailwind | Warm-tinted custom shadows |
| Section alternation | White / gray-50 | Cream / yellow-50 |
| Nav style | Solid white | Frosted glass (blur) |
| Heading accents | Yellow + red underlines | Yellow-only bars |
| Overall feel | Clinical, institutional | Warm, hopeful, community-first |

# Theme System Phase 1

This document defines the non-breaking theme foundation introduced in Phase 1.

## Goals

- Keep current amber visuals unchanged.
- Add infrastructure for a future palette switch.
- Avoid component-level class migrations in this phase.

## Token Layers

Active layer:

- `--color-brand-*` (current amber palette)
- Used by current custom CSS and future semantic classes.

Future layer:

- `--color-brand-next-*` (currently scaffolded with same values)
- Reserved for future palette rollout.

## Tailwind Namespaces

- `brand.*` -> maps to `--color-brand-*`
- `brandNext.*` -> maps to `--color-brand-next-*`
- `surface.*`, `text.*`, `success.*` remain semantic and active.

## Guardrails

- Do not mass-replace classes (`amber` -> `brand`) yet.
- Do not change component behavior in this phase.
- Any visible style change in Phase 1 is considered a regression.

## Next Phase Entry Criteria

1. `pnpm run lint` passes.
2. `pnpm run build` passes.
3. Header, hero, offers, and testimonials visuals match current baseline.

## Implementation Status

Completed in this repository:

- Theme token scaffold added in `src/app/globals.css`:
  - active `--color-brand-*`
  - future `--color-brand-next-*`
- Tailwind namespace bridge added in `tailwind.config.ts`:
  - `brand.*` and `brandNext.*`
- UI regression guard fixes restored to amber primitives:
  - `src/components/ui/button.tsx`
  - `src/components/ui/badge.tsx`
- Offers color model hardened:
  - `src/components/sections/OffersSection.tsx`
  - replaced string parsing with typed `colorKey` + map (`OFFER_COLOR_THEMES`)

Stabilization passes completed (no visual intent changes):

- `src/components/common/Navbar.tsx`
- `src/components/MenuClient.tsx`
- `src/components/sections/AboutSection.tsx`
- `src/components/sections/ContactSection.tsx`
- `src/components/sections/TestimonialsSection.tsx`
- `src/components/common/Footer.tsx`

Validation status:

- `pnpm run lint`: passing
- `pnpm run build`: passing

## Current Scope Notes

- `ChefPicksSection` and `TestimonialsSection_new` are not present in the current `src/components/sections` directory.
- Home page currently uses:
  - `HeroSection`
  - `AboutSection`
  - `OffersSection`
  - `TestimonialsSection`
  - `ContactSection`

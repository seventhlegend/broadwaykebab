# Broadway Kebab Design System

This project design profile follows the plain-language `DESIGN.md` format described by [VoltAgent's awesome-design-md](https://github.com/voltagent/awesome-design-md). It is an original Broadway Kebab system informed by that format, not a copy of another brand's identity.

## Visual theme and atmosphere

Neighbourhood Anatolian grill in Tooting: welcoming, generous, grounded in real food photography. Keep the Broadway name and warm paper, ember red, and brass cues. Use the custom arch and B mark with a Georgia wordmark. Use editorial food photography, clear restaurant details, and confident but unhurried layouts. Avoid app-like gradients, glass effects, and decorative animation.

## Color palette and roles

| Token | Value | Role |
| --- | --- | --- |
| `paper` | `#f7f4ec` | Main light canvas |
| `surface` | `#fffdf8` | Raised content and controls |
| `paper-muted` | `#ebe5d9` | Quiet section backgrounds and dividers |
| `ink` | `#211d19` | Main copy and headings |
| `muted` | `#675f56` | Supporting copy |
| `grill` | `#a92e25` | Primary ember red action |
| `grill-deep` | `#76231d` | Hover, footer, and deep contrast |
| `spice` | `#c78b3d` | Brass highlights, phone action, and ratings |

Use the light appearance regardless of the visitor's system preference. Keep red and brass actions legible on warm paper.

## Typography rules

Use Georgia for large display headings, paired with the system sans-serif stack for body text and controls. Headings use balanced wrapping; paragraphs stay readable and around 65 characters per line. Keep currency, opening times, and review scores easy to scan.

## Component styling

- Primary buttons: solid Broadway red, white text, at least 44px tall on touch layouts, visible keyboard focus.
- Secondary buttons: paper surface with a clear red border and label.
- Surfaces: paper or warm white, subtle borders, restrained shadows, one consistent 14px radius.
- Navigation: compact wordmark, clear links, mobile menu with a 44px target.
- Food imagery: local WebP files, explicit dimensions, useful alternative text or empty alt for decoration.
- Reviews and offers: lead with useful information and readable price; avoid text badges covering photographs.

## Layout principles

Use a centered content width up to 1240px, generous section spacing, and responsive grids that collapse to one column. Let the hero photograph and headline establish the first visual anchor. Alternate photographic and text weight without repeating identical card rows.

## Depth and motion

Use borders and a single low shadow level for separation. Motion is limited to short color and opacity transitions. Honor reduced-motion preferences; never animate layout or add scroll hijacks.

## Do and don't

- Do preserve the Broadway name, current offer prices, page routes, anchor IDs, and existing booking, menu, contact, and review content.
- Do use the custom Broadway arch mark and wordmark consistently in navigation and footer.
- Do use warm neutrals, Broadway red, and the existing restaurant photography consistently.
- Don't imitate Starbucks or another brand's colors or logo.
- Don't introduce external image dependencies, decorative gradients, or small icon-only controls without accessible names.

## Responsive behavior

Use the existing Tailwind breakpoints. Keep navigation, booking actions, inputs, and links usable at 390px wide and above. Avoid horizontal overflow and preserve visible focus when navigating to section anchors.

## Source

The document structure is based on the format in [VoltAgent/awesome-design-md](https://github.com/voltagent/awesome-design-md), which describes `DESIGN.md` as the project-specific source of visual rules for coding agents. Broadway tokens and rules above were written for this project.

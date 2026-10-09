# Broadway Kebab

A static restaurant website built with Next.js, React, and Tailwind CSS. All restaurant content and menu data are local in `src/lib/static-data.ts`. Photos are stored in `public/images`; menu photos use WebP.

## Development

Use Node.js 22 and pnpm 10.15.1.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Build and release

```sh
pnpm lint
pnpm build
pnpm serve
pnpm release:zip
```

`build` starts from clean `.next/` and `out/` directories and exports the site into `out/`. `release:zip` rebuilds and creates `broadwaykebab-release.zip`, ready for Cloudflare Pages upload. See [deployment instructions](CLOUDFLARE_DEPLOY.md).

## Pages

- `/`: restaurant information, offers, reviews, contact details.
- `/menu/`: local menu with search and tag filters.
- `/booking/`: TheFork iframe with a direct booking link.

The pages are rendered at build time. Navigation and category accordions use native HTML; only the menu search and filters require React client state. The site uses standard asset paths and links, with no runtime data fetches, custom cache headers, or hosting-specific rewrites.

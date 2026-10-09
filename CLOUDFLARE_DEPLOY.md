# Broadway Kebab — Cloudflare Pages

This project is exported as a static Next.js site. The build writes HTML, JavaScript, CSS, and images to `out/`; it does not need a Next.js server or Pages Functions.

## Cloudflare Pages settings

- Build command: `pnpm run build`
- Build output directory: `out`
- Node.js: `22` (also recorded in `.node-version`)

The `wrangler.toml` file identifies `out/` as the Pages output directory. The build copies `_headers` and `_redirects` into `out/`. Cloudflare reads them from the static output root.

Pages determines each static file's `Content-Type` automatically. Keep MIME overrides out of `_headers` and use path patterns beginning with `/`, rather than bare extension patterns such as `*.css`. [Cloudflare combines repeated header values with commas](https://developers.cloudflare.com/pages/configuration/headers/), which makes a response containing several MIME types invalid for scripts, styles, and images.

## Routes and images

The static export creates `out/index.html`, `out/menu/index.html`, and `out/booking/index.html`. Internal links use trailing slashes, matching `trailingSlash: true`. The redirects file only canonicalizes `/menu` and `/booking`; it does not redirect all unknown paths to the home page.

All menu and offer images are stored under `public/images` and included in the export and release ZIP. The site does not rely on a runtime function for routing or asset MIME types.

## Build and preview

```bash
pnpm run build
pnpm run serve
```

To create a deployable ZIP containing the contents of `out/`:

```bash
pnpm run release:zip
```

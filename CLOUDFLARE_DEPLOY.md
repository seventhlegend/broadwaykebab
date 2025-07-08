# Broadway Kebab - Static Site

**Static Export Optimized for Cloudflare Pages**

## Files Structure for Deploy

- `out/` - Main build output directory
- `out/_headers` - MIME type and cache configurations
- `out/_redirects` - URL routing and static asset fallbacks
- `out/_functions/` - Cloudflare Pages Functions for asset handling
- `out/_next/static/` - Next.js static assets (CSS, JS chunks)

## Deploy Settings for Cloudflare Pages

- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Node.js version**: 18.x

## Key Optimizations

1. All content is statically embedded at build time
2. MIME types properly configured for CSS/JS files
3. Static asset routing prioritized over SPA fallbacks
4. Cloudflare Pages Functions handle edge cases
5. Proper cache headers for performance

## Manual Deploy Steps

1. Run `npm run build` locally
2. Upload `out/` directory contents to Cloudflare Pages
3. Ensure `_headers`, `_redirects`, and `_functions/` are in root

The site should now load without any 404 or MIME type errors on Cloudflare Pages.

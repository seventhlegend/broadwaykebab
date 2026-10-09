# Cloudflare Pages

This is a static Next.js export. There is no server, middleware, Function, custom MIME header, or rewrite layer.

```sh
pnpm install --frozen-lockfile
pnpm run release:zip
```

Upload `broadwaykebab-release.zip` to the existing Cloudflare Pages project. The ZIP contains the contents of `out/` directly, without an extra parent folder.

For a Git-connected Pages project, use `pnpm run build` as the build command and `out` as the output directory. Node.js 22 is recorded in `.node-version`.

Pages serves `/`, `/menu/`, `/booking/`, and the generated 404 page directly. It determines file types and caching automatically. No `_headers`, `_redirects`, `_worker.js`, or Vercel/Apache config is included in the export.

If a browser previously cached the broken MIME response with the old one-year cache header, reload once with the cache disabled in developer tools. The new deployment cannot invalidate a response already stored in a visitor's browser.

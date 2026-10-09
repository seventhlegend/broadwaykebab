export default function NotFound() {
  return (
    <main id="main-content" className="flex min-h-[70svh] flex-col items-center justify-center bg-paper px-4 text-center text-ink">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-grill">Page not found</p>
      <h1 className="mb-4 font-display text-6xl font-bold">404</h1>
      <p className="mb-8 text-xl text-muted">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <a
        href="/"
        className="inline-flex min-h-12 items-center rounded-md bg-grill px-6 py-3 font-semibold text-white transition-colors hover:bg-grill-deep"
      >
        Back to Home
      </a>
    </main>
  );
}

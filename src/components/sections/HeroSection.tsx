import { STATIC_CONTENT } from "@/lib/static-data";
import { buttonClass } from "@/components/ui/button";

export function HeroSection() {
  const hero = STATIC_CONTENT.hero;
  return (
    <section className="relative flex min-h-[min(820px,calc(100svh-5rem))] items-center overflow-hidden bg-ink">
      <img
        src={hero.backgroundImage}
        alt=""
        fetchPriority="high"
        width="2500"
        height="1667"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(18_15_12_/_82%)_0%,rgb(18_15_12_/_60%)_48%,rgb(18_15_12_/_12%)_100%)]" />
      <div className="relative mx-auto w-full max-w-[1240px] px-5 py-24 text-white sm:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-spice sm:text-sm">
            Tooting · Broadway Market
          </p>
          <h1 className="mb-6 max-w-xl font-display text-5xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mb-3 max-w-xl text-lg leading-relaxed text-white/95 sm:text-xl">
            {hero.subtitle}
          </p>
          <p className="mb-9 text-base text-white/80 sm:text-lg">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={hero.ctaLink} className={buttonClass({ size: "lg" })}>
              {hero.ctaText}
            </a>
            <a
              href="/menu/"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/75 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink"
            >
              Explore the menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

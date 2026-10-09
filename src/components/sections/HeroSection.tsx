import { STATIC_CONTENT } from "@/lib/static-data";
import { buttonClass } from "@/components/ui/button";

export function HeroSection() {
  const hero = STATIC_CONTENT.hero;
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden bg-amber-900">
      <img
        src={hero.backgroundImage}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center text-white">
        <h1 className="mb-6 text-5xl font-bold md:text-7xl">{hero.title}</h1>
        <p className="mb-4 text-xl md:text-2xl">{hero.subtitle}</p>
        <p className="mb-8 text-lg">{hero.description}</p>
        <a href={hero.ctaLink} className={buttonClass({ size: "lg" })}>
          {hero.ctaText}
        </a>
      </div>
    </section>
  );
}

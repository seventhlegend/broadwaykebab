import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    backgroundImage: string;
  } | null;
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="hero-section performance-optimized">
      {/* Background Image - Optimized for static export */}
      <img
        src={hero?.backgroundImage || "/images/background-1.avif"}
        alt="Broadway Kebab Restaurant Background"
        className="hero-image absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4 performance-optimized">
        {hero ? (
          <>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-4">{hero.subtitle}</p>
            <p className="text-lg mb-8">{hero.description}</p>
            <Link href={hero.ctaLink}>
              <Button size="lg" className="bg-amber-700 hover:bg-amber-800">
                {hero.ctaText}
              </Button>
            </Link>
          </>
        ) : (
          <>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Broadway Kebab
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              Authentic Turkish Cuisine
            </p>
            <p className="text-lg mb-8">
              Experience the finest kebabs and Mediterranean flavors
            </p>
            <Button size="lg" className="bg-amber-700 hover:bg-amber-800">
              View Our Menu
            </Button>
          </>
        )}
      </div>
    </section>
  );
}

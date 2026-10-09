import { Check, Star, Utensils } from "lucide-react";
import { STATIC_CONTENT } from "@/lib/static-data";

const featureIcons = { utensils: Utensils, check: Check, star: Star };

export default function AboutSection() {
  const about = STATIC_CONTENT.about;

  return (
    <section id="about" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto grid max-w-[1120px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-grill">
            A little taste of home
          </p>
          <h2 className="mb-5 max-w-xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            {about.title}
          </h2>
          <p className="mb-5 text-xl leading-relaxed text-ink">
            {about.subtitle}
          </p>
          <p className="max-w-[62ch] text-base leading-7 text-muted sm:text-lg">
            {about.description}
          </p>
        </div>

        <ul className="divide-y divide-paper-muted border-y border-paper-muted">
          {about.features.map((feature) => {
            const Icon =
              featureIcons[feature.icon as keyof typeof featureIcons] ?? Star;

            return (
              <li key={feature.title} className="flex gap-5 py-6 first:pt-7 last:pb-7">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-grill/10 text-grill">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="mb-1 text-xl font-bold text-ink">
                    {feature.title}
                  </h3>
                  <p className="leading-6 text-muted">{feature.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

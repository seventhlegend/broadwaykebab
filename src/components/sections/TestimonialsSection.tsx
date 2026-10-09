import { Star } from "lucide-react";
import { STATIC_TESTIMONIALS } from "@/lib/static-data";

export default function TestimonialsSection() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mb-10 flex flex-col gap-6 border-b border-paper-muted pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-grill">
              From our guests
            </p>
            <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">
              Google Reviews
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl font-bold text-ink">4.9</span>
            <span>
              <span role="img" className="flex text-spice" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    aria-hidden="true"
                    className="h-5 w-5 fill-current"
                  />
                ))}
              </span>
              <span className="text-sm text-muted">346+ reviews</span>
            </span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {STATIC_TESTIMONIALS.slice(0, 6).map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex min-h-64 flex-col rounded-xl border border-paper-muted bg-surface p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <span
                  role="img"
                  className="flex text-spice"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: testimonial.rating }, (_, index) => (
                    <Star
                      key={index}
                      aria-hidden="true"
                      className="h-4 w-4 fill-current"
                    />
                  ))}
                </span>
                {testimonial.verified && (
                  <span className="text-xs font-medium text-muted">Verified</span>
                )}
              </div>

              <p className="mb-6 flex-1 leading-7 text-ink">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-end justify-between gap-3 border-t border-paper-muted pt-4">
                <div>
                  <p className="font-semibold text-ink">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.location}</p>
                </div>
                {testimonial.date && (
                  <p className="text-xs text-muted">{testimonial.date}</p>
                )}
              </div>
              {testimonial.badges && testimonial.badges.length > 0 && (
                <div className="mt-3 flex gap-2">
                  {testimonial.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full bg-grill/10 px-3 py-1 text-xs font-semibold text-grill-deep"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center gap-2 text-center text-sm text-muted">
          <p>What our customers say about us</p>
          <p>
            Join hundreds of satisfied customers · Powered by Google Reviews
          </p>
        </div>
      </div>
    </section>
  );
}

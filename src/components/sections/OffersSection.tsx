import { CalendarDays, Clock, Wine } from "lucide-react";
import { buttonClass } from "@/components/ui/button";

const offers = [
  {
    id: "wednesday",
    title: "Wednesday Special – Starter + Main for Just £20!",
    description:
      "Join us every Wednesday at Broadway Kebab, inside Broadway Market in Tooting, London, and enjoy a delicious deal:",
    details: [
      "One cold starter + one main course for only £20",
      "Charcoal-grilled chicken and lamb kebabs",
      "Flavourful seafood options available",
      "Served with bulgur rice or chips, salad and fresh flatbread",
      "Perfect for a midweek treat with authentic Anatolian taste",
    ],
    image: "/images/wednesday-special.webp",
    icon: CalendarDays,
    day: "Every Wednesday",
    price: "£20",
  },
  {
    id: "sunday",
    title: "Sunday Bottomless Brunch – Only £30 per person!",
    description:
      "Make your Sundays special with our Bottomless Brunch at Broadway Kebab, inside Broadway Market in Tooting, London.",
    details: [
      "One cold starter: Hummus, Cacık (tzatziki), or Babaganoush",
      "One main course: Chicken/Adana Skewers, Shawarma, Seabass, or Vegetarian",
      "90 minutes of bottomless drinks: Cobra Beer, Wine, and Prosecco",
      "All mains served with bulgur rice or chips, fresh salad, and flatbread",
      "Full Anatolian experience",
    ],
    image: "/images/sunday-brunch.webp",
    icon: Wine,
    day: "Every Sunday",
    price: "£30",
  },
];

export default function OffersSection() {
  return (
    <section className="bg-paper-muted py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-grill">
            Gather round the table
          </p>
          <h2 className="mb-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Weekly Special Offers
          </h2>
          <p className="max-w-[60ch] text-lg leading-7 text-muted">
            Don&apos;t miss our amazing weekly deals! Authentic Anatolian cuisine
            at unbeatable prices.
          </p>
        </div>

        <div className="space-y-8 lg:space-y-10">
          {offers.map((offer, index) => {
            const Icon = offer.icon;

            return (
              <article
                key={offer.id}
                className="grid overflow-hidden rounded-xl border border-paper-muted bg-surface shadow-[0_10px_30px_rgb(33_29_25_/_8%)] lg:grid-cols-2"
              >
                <div className={`${index === 1 ? "lg:order-2" : ""} min-h-72 sm:min-h-96`}>
                  <img
                    src={offer.image}
                    alt={offer.title}
                    loading="lazy"
                    width="1200"
                    height="1000"
                    className="h-full min-h-72 w-full object-cover sm:min-h-96"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">
                  <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="inline-flex min-h-10 items-center gap-2 rounded-full bg-grill/10 px-4 text-sm font-semibold text-grill-deep">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                      {offer.day}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm text-muted">
                      <Clock aria-hidden="true" className="h-4 w-4" />
                      <span className="sr-only">Price:</span> {offer.price}
                    </span>
                  </div>
                  <h3 className="mb-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                    {offer.title}
                  </h3>
                  <p className="mb-5 leading-7 text-muted">{offer.description}</p>
                  <ul className="mb-8 list-disc space-y-2 pl-5 leading-6 text-ink marker:text-spice">
                    {offer.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <a href="/booking/" className={buttonClass({ size: "lg" })}>
                      Book Now
                    </a>
                    <a
                      href="/menu/"
                      className={buttonClass({
                        variant: "outline",
                        size: "lg",
                      })}
                    >
                      View Menu
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

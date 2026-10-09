import { Clock, Calendar, Wine } from "lucide-react";
import { buttonClass } from "@/components/ui/button";

const offers = [
  {
    id: 1,
    title: "Wednesday Special – Starter + Main for Just £20!",
    description:
      "Join us every Wednesday at Broadway Kebab, located inside Broadway Market in Tooting, London, and enjoy a delicious deal:",
    details: [
      "One cold starter + one main course for only £20",
      "Charcoal-grilled chicken and lamb kebabs",
      "Flavourful seafood options available",
      "Served with bulgur rice or chips, salad and fresh flatbread",
      "Perfect for a midweek treat with authentic Anatolian taste",
    ],
    image: "/images/wednesday-special.webp",
    icon: <Calendar className="w-6 h-6" />,
    day: "Every Wednesday",
    price: "£20",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    id: 2,
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
    icon: <Wine className="w-6 h-6" />,
    day: "Every Sunday",
    price: "£30",
    gradient: "from-purple-500 to-indigo-600",
  },
];

export default function OffersSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Weekly Special Offers
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
            Don&apos;t miss our amazing weekly deals! Authentic Anatolian
            cuisine at unbeatable prices.
          </p>
        </div>
        <div className="mx-auto max-w-7xl space-y-12 lg:space-y-16">
          {offers.map((offer, index) => (
            <article
              key={offer.id}
              className={`flex flex-col items-center gap-8 lg:gap-12 ${index === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative h-[400px] overflow-hidden rounded-2xl bg-gray-100 shadow-xl sm:h-[450px] lg:h-[500px]">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    loading="lazy"
                    width="1200"
                    height="1000"
                    className="h-full w-full object-cover"
                  />
                  <span
                    className={`absolute left-4 top-4 rounded-full bg-gradient-to-r ${offer.gradient} px-6 py-3 text-lg font-bold text-white`}
                  >
                    {offer.price}
                  </span>
                  <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 font-semibold text-gray-900">
                    <Clock className="h-4 w-4" />
                    {offer.day}
                  </span>
                </div>
              </div>
              <div className="w-full rounded-lg bg-white p-6 shadow-xl sm:p-8 lg:w-1/2">
                <div
                  className={`mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${offer.gradient} px-4 py-2 text-white`}
                >
                  {offer.icon}
                  <span className="font-semibold">{offer.day}</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                  {offer.title}
                </h3>
                <p className="mb-6 leading-relaxed text-gray-600 sm:text-lg">
                  {offer.description}
                </p>
                <ul className="mb-8 list-disc space-y-3 pl-5 text-gray-700">
                  {offer.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/booking/"
                    className={buttonClass({
                      className: `flex-1 bg-gradient-to-r ${offer.gradient}`,
                    })}
                  >
                    Book Now
                  </a>
                  <a
                    href="/menu/"
                    className={buttonClass({
                      variant: "outline",
                      className: "flex-1",
                    })}
                  >
                    View Menu
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

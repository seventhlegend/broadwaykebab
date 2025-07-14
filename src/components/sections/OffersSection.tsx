"use client";

import { Clock, Calendar, Utensils, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Offer {
  id: number;
  title: string;
  description: string;
  details: string[];
  image: string;
  icon: React.ReactNode;
  day: string;
  price: string;
  color: string;
}

const offers: Offer[] = [
  {
    id: 1,
    title: "50% OFF Main Dishes – Every Tuesday!",
    description:
      "Looking for a midweek treat? Come to Broadway Kebab, inside Broadway Market in Tooting, London, and enjoy 50% off all main dishes every Tuesday!",
    details: [
      "Charcoal-grilled chicken, tender lamb, and fresh seafood dishes",
      "Served with your choice of bulgur rice or chips",
      "Fresh salad and flatbread included",
      "Authentic Anatolian flavour",
    ],
    image:
      "https://raw.githubusercontent.com/seventhlegend/broadwaykebab/refs/heads/main/public/images/UK220737_broadway%20bbq_Hero2.jpg",
    icon: <Utensils className="w-6 h-6" />,
    day: "Every Tuesday",
    price: "50% OFF",
    color: "from-red-500 to-pink-600",
  },
  {
    id: 2,
    title: "Wednesday Special – Cold Starter + Main Course for Just £15!",
    description:
      "Join us every Wednesday at Broadway Kebab, located inside Broadway Market in Tooting, London, and enjoy a delicious deal:",
    details: [
      "One cold starter + one main course for only £15",
      "Charcoal-grilled chicken and lamb kebabs",
      "Flavourful seafood options available",
      "Served with bulgur rice or chips, salad and fresh flatbread",
      "Perfect for a midweek treat with authentic Anatolian taste",
    ],
    image:
      "https://raw.githubusercontent.com/seventhlegend/broadwaykebab/refs/heads/main/public/images/wednesday-offer.jpg",
    icon: <Calendar className="w-6 h-6" />,
    day: "Every Wednesday",
    price: "£15",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 3,
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
    image:
      "https://raw.githubusercontent.com/seventhlegend/broadwaykebab/refs/heads/main/public/images/sunday-brunch.jpg",
    icon: <Wine className="w-6 h-6" />,
    day: "Every Sunday",
    price: "£30",
    color: "from-purple-500 to-indigo-600",
  },
];

export default function OffersSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Weekly Special Offers
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t miss our amazing weekly deals! Authentic Anatolian
            cuisine at unbeatable prices.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-12`}
            >
              {/* Image */}
              <div className="lg:w-1/2 w-full">
                <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a gradient background if image fails
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background = `linear-gradient(135deg, ${
                          offer.color.split(" ")[1]
                        } 0%, ${offer.color.split(" ")[3]} 100%)`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-black/10"></div>

                  {/* Price Badge */}
                  <div
                    className={`absolute top-4 left-4 sm:top-6 sm:left-6 bg-gradient-to-r ${offer.color} text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-base sm:text-lg shadow-lg`}
                  >
                    {offer.price}
                  </div>

                  {/* Day Badge */}
                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-2 sm:px-4 sm:py-2 rounded-full font-semibold flex items-center gap-2 text-sm sm:text-base">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{offer.day}</span>
                    <span className="sm:hidden">
                      {offer.day.replace("Every ", "")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 w-full">
                <Card className="p-6 sm:p-8 h-full border-0 shadow-xl">
                  <CardContent className="p-0">
                    <div
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${offer.color} text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 text-sm sm:text-base`}
                    >
                      {offer.icon}
                      <span className="font-semibold">{offer.day}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                      {offer.title}
                    </h3>

                    <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                      {offer.description}
                    </p>

                    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {offer.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${offer.color} mt-2 flex-shrink-0`}
                          ></div>
                          <p className="text-gray-700 text-sm sm:text-base">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Button
                        className={`bg-gradient-to-r ${offer.color} hover:opacity-90 text-white flex-1 py-3 text-base font-semibold`}
                        onClick={() => {
                          const message = `Hi! I would like to book for ${offer.title} (${offer.day}) for ${offer.price}. Is it available?`;
                          const whatsappUrl = `https://wa.me/447123456789?text=${encodeURIComponent(
                            message
                          )}`;
                          window.open(whatsappUrl, "_blank");
                        }}
                      >
                        Book Now
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-gray-300 hover:bg-gray-50 py-3 text-base font-semibold"
                        onClick={() => {
                          window.location.href = "/menu";
                        }}
                      >
                        View Menu
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

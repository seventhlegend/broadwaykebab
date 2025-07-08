"use client";

import Image from "next/image";
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
    image: "/images/tuesday-offer.jpg",
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
    image: "/images/wednesday-offer.jpg",
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
    image: "/images/sunday-brunch.jpg",
    icon: <Wine className="w-6 h-6" />,
    day: "Every Sunday",
    price: "£30",
    color: "from-purple-500 to-indigo-600",
  },
];

export default function OffersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Weekly Special Offers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t miss our amazing weekly deals! Authentic Anatolian
            cuisine at unbeatable prices.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback to a gradient background if image fails
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.style.background = `linear-gradient(135deg, ${
                        offer.color.split(" ")[1]
                      } 0%, ${offer.color.split(" ")[3]} 100%)`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/10"></div>

                  {/* Price Badge */}
                  <div
                    className={`absolute top-6 left-6 bg-gradient-to-r ${offer.color} text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg`}
                  >
                    {offer.price}
                  </div>

                  {/* Day Badge */}
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {offer.day}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <Card className="p-8 h-full border-0 shadow-xl">
                  <CardContent className="p-0">
                    <div
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${offer.color} text-white px-4 py-2 rounded-full mb-6`}
                    >
                      {offer.icon}
                      <span className="font-semibold">{offer.day}</span>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {offer.title}
                    </h3>

                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {offer.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {offer.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${offer.color} mt-2 flex-shrink-0`}
                          ></div>
                          <p className="text-gray-700">{detail}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        className={`bg-gradient-to-r ${offer.color} hover:opacity-90 text-white flex-1`}
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
                        className="flex-1 border-gray-300 hover:bg-gray-50"
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

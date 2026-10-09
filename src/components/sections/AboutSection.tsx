import { Star, Utensils, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { STATIC_CONTENT } from "@/lib/static-data";

const ABOUT_FEATURE_CARD_CLASS =
  "text-center p-8 border-2 border-amber-200 hover:border-amber-300 transition-colors";
const ABOUT_FEATURE_ICON_WRAPPER_CLASS =
  "w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4";
const ABOUT_FEATURE_ICON_CLASS = "w-8 h-8 text-amber-700";

export default function AboutSection() {
  const about = STATIC_CONTENT.about;

  // Icon mapping for about section features
  const iconMap = {
    utensils: Utensils,
    check: Check,
    star: Star,
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {about.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8">{about.subtitle}</p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {about.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {about.features.map((feature, index) => {
              const IconComponent =
                iconMap[feature.icon as keyof typeof iconMap] || Star;
              return (
                <Card key={index} className={ABOUT_FEATURE_CARD_CLASS}>
                  <CardContent className="p-0">
                    <div className={ABOUT_FEATURE_ICON_WRAPPER_CLASS}>
                      <IconComponent className={ABOUT_FEATURE_ICON_CLASS} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

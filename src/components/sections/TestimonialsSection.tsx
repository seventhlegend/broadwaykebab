"use client";

import { Star } from "lucide-react";
import { TestimonialSkeleton } from "@/components/common/LoadingSkeleton";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  location: string;
  date?: string;
  verified?: boolean;
  badges?: string[];
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[] | null;
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-10 bg-white/20 rounded-lg w-80 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-white/20 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <TestimonialSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Google Reviews</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-current text-yellow-300"
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-white">4.9</span>
            <span className="text-orange-100">(346+ reviews)</span>
          </div>
          <p className="text-lg text-orange-100">
            What our customers say about us
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= testimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-xs text-blue-600 font-medium">
                        Verified
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                  {testimonial.date && (
                    <p className="text-xs text-gray-400">{testimonial.date}</p>
                  )}
                </div>

                {testimonial.badges && testimonial.badges.length > 0 && (
                  <div className="flex gap-1 mt-3">
                    {testimonial.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-orange-100 mb-4">
            Join hundreds of satisfied customers
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-white font-medium">Powered by</span>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xs">G</span>
              </div>
              <span className="text-white font-bold">Google Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

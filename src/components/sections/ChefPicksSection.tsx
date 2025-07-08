"use client";

import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { CardSkeleton } from "@/components/common/LoadingSkeleton";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
  featured?: boolean;
  image?: string;
}

interface ChefPicksProps {
  featuredItems: MenuItem[];
}

export default function ChefPicksSection({ featuredItems }: ChefPicksProps) {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "100px",
  });

  if (featuredItems.length === 0) {
    return null;
  }

  return (
    <section ref={ref} className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        {isIntersecting ? (
          <>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Chef&apos;s Picks
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our most beloved dishes, carefully selected by our head chef
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredItems.slice(0, 6).map((item) => (
                <Card
                  key={item.id}
                  className="group hover:scale-105 transition-transform duration-300 overflow-hidden"
                >
                  {item.image && (
                    <div className="h-48 overflow-hidden relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <div className="flex items-center text-amber-700">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm ml-1">Featured</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-amber-700">
                        ${item.price}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                          >
                            {tag.replace("-", " ")}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/menu">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white"
                >
                  View Full Menu
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-16">
              <div className="h-10 bg-gray-300 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
              <div className="h-6 bg-gray-300 rounded w-96 mx-auto animate-pulse"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

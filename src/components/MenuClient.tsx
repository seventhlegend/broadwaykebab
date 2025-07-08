"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Star,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  X,
  Utensils,
  Leaf,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { STATIC_MENU } from "@/lib/static-data";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
  allergens?: string[];
  featured?: boolean;
  image?: string;
}

interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export default function MenuClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [openCategories, setOpenCategories] = useState<string[]>([
    STATIC_MENU.categories[0]?.id || "",
  ]);
  const [showFilters, setShowFilters] = useState(false);

  // Get all unique tags from menu items
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    (STATIC_MENU.categories as unknown as any[]).forEach((category: any) => {
      category.items.forEach((item: any) => {
        item.tags.forEach((tag: string) => tagSet.add(tag));
      });
    });
    return Array.from(tagSet).sort();
  }, []);

  // Filter menu items based on search and tags
  const filteredCategories = useMemo(() => {
    return (STATIC_MENU.categories as unknown as any[])
      .map((category: any) => ({
        ...category,
        items: category.items.filter((item: any) => {
          const matchesSearch =
            searchTerm === "" ||
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase());

          const matchesTags =
            selectedTags.length === 0 ||
            selectedTags.every((tag) => item.tags.includes(tag));

          return matchesSearch && matchesTags;
        }),
      }))
      .filter((category: any) => category.items.length > 0);
  }, [searchTerm, selectedTags]);

  // Toggle category accordion
  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Toggle tag filter
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Discover authentic Anatolian flavors
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>

            {/* Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3"
            >
              <Filter className="w-5 h-5" />
              Filters
              {selectedTags.length > 0 && (
                <Badge className="ml-2">{selectedTags.length}</Badge>
              )}
            </Button>

            {/* Clear Filters */}
            {(searchTerm || selectedTags.length > 0) && (
              <Button variant="outline" onClick={clearFilters}>
                <X className="w-4 h-4 mr-2" />
                Clear
              </Button>
            )}
          </div>

          {/* Filter Tags */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-medium text-gray-900 mb-3">
                Filter by tags:
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    className={`cursor-pointer transition-colors ${
                      selectedTags.includes(tag)
                        ? "bg-amber-600 hover:bg-amber-700 text-white"
                        : "hover:bg-amber-50"
                    }`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-medium">
              {filteredCategories.reduce(
                (total: number, cat: any) => total + cat.items.length,
                0
              )}
            </span>{" "}
            items
            {(searchTerm || selectedTags.length > 0) &&
              " matching your filters"}
          </p>

          {/* Expand/Collapse All */}
          <div className="mt-4 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setOpenCategories(filteredCategories.map((c: any) => c.id))
              }
            >
              Expand All
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setOpenCategories([])}
            >
              Collapse All
            </Button>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="space-y-6">
          {filteredCategories.map((category: any) => {
            const isOpen = openCategories.includes(category.id);

            return (
              <Card key={category.id} className="overflow-hidden">
                <div
                  className="bg-amber-50 p-6 cursor-pointer hover:bg-amber-100 transition-colors"
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {category.name}
                      </h2>
                      <p className="text-gray-600">{category.description}</p>
                      <p className="text-sm text-amber-700 mt-2">
                        {category.items.length} item
                        {category.items.length !== 1 ? "s" : ""}
                      </p>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-6 h-6 text-amber-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-amber-600" />
                    )}
                  </div>
                </div>

                {/* Category Items */}
                {isOpen && (
                  <CardContent className="p-0">
                    <div className="grid gap-6 p-6">
                      {category.items.map((item: any) => (
                        <div
                          key={item.id}
                          className="flex flex-col md:flex-row gap-6 p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                        >
                          {/* Item Image */}
                          {item.image && (
                            <div className="md:w-48 md:h-36 w-full h-48 relative rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 192px"
                              />
                              {item.featured && (
                                <Badge className="absolute top-2 left-2 bg-amber-600">
                                  <Star className="w-3 h-3 mr-1 fill-current" />
                                  Featured
                                </Badge>
                              )}
                            </div>
                          )}

                          {/* Item Details */}
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-3">
                              <h3 className="text-xl font-semibold text-gray-900">
                                {item.name}
                              </h3>
                              <span className="text-2xl font-bold text-amber-600 ml-4">
                                £{item.price.toFixed(2)}
                              </span>
                            </div>

                            <p className="text-gray-600 mb-4">
                              {item.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {item.tags.slice(0, 2).map((tag: string) => (
                                <Badge key={tag} className="text-xs">
                                  {tag === "vegetarian" && (
                                    <Leaf className="w-3 h-3 mr-1" />
                                  )}
                                  {tag === "signature" && (
                                    <Star className="w-3 h-3 mr-1" />
                                  )}
                                  {tag === "popular" && (
                                    <Utensils className="w-3 h-3 mr-1" />
                                  )}
                                  {tag}
                                </Badge>
                              ))}
                              {item.tags.length > 2 && (
                                <Badge className="text-xs">
                                  +{item.tags.length - 2} more
                                </Badge>
                              )}
                            </div>

                            {/* Allergens */}
                            {item.allergens && item.allergens.length > 0 && (
                              <p className="text-sm text-gray-500">
                                <span className="font-medium">Contains:</span>{" "}
                                {item.allergens.join(", ")}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No items found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or clearing the filters
            </p>
            <Button onClick={clearFilters}>Clear Filters</Button>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown, Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { STATIC_MENU, type MenuItem } from "@/lib/static-data";

const tags = [
  ...new Set(
    STATIC_MENU.categories.flatMap((category) =>
      category.items.flatMap((item) => item.tags),
    ),
  ),
]
  .filter((tag) => tag !== "category")
  .sort();

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex flex-col gap-6 rounded-lg border border-gray-200 bg-white p-6 md:flex-row">
      {item.image && (
        <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-lg md:h-36 md:w-48">
          <img
            src={item.image}
            alt={item.name}
            width="192"
            height="144"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          {item.featured && (
            <Badge className="absolute left-2 top-2">
              <Star className="mr-1 h-3 w-3" />
              Featured
            </Badge>
          )}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
          {!item.subcategory && (
            <span className="whitespace-nowrap text-xl font-bold text-amber-700">
              £{item.price.toFixed(2)}
            </span>
          )}
        </div>
        {item.description && (
          <p className="mb-4 text-gray-600">{item.description}</p>
        )}
        {item.subcategory && (
          <ul className="mb-4 space-y-2">
            {item.subcategory.map((option) => (
              <li
                key={option.name}
                className="flex justify-between gap-4 border-b border-gray-100 py-1 text-sm last:border-0"
              >
                <span>{option.name}</span>
                <span className="whitespace-nowrap font-semibold text-amber-700">
                  £{option.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        )}
        <div className="mb-3 flex flex-wrap gap-2">
          {item.tags
            .filter((tag) => tag !== "category")
            .map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
        </div>
        {item.allergens.length > 0 && (
          <p className="text-sm text-gray-500">
            Contains: {item.allergens.join(", ")}
          </p>
        )}
      </div>
    </article>
  );
}

export default function MenuClient() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const query = search.trim().toLowerCase();
  const categories = STATIC_MENU.categories
    .map((category) => ({
      ...category,
      items: category.items.flatMap((item) => {
        if (!selectedTags.every((tag) => item.tags.includes(tag))) return [];
        const matches = `${item.name} ${item.description}`
          .toLowerCase()
          .includes(query);
        if (matches) return [item];
        const subcategory = item.subcategory?.filter((option) =>
          option.name.toLowerCase().includes(query),
        );
        return subcategory?.length ? [{ ...item, subcategory }] : [];
      }),
    }))
    .filter((category) => category.items.length > 0);
  const isFiltering = Boolean(query || selectedTags.length);

  function clearFilters() {
    setSearch("");
    setSelectedTags([]);
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-amber-900 to-amber-700 px-4 py-16 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Menu</h1>
        <p className="text-xl text-amber-100">
          Discover authentic Anatolian flavors
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <label htmlFor="menu-search" className="sr-only">
                Search menu items
              </label>
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                id="menu-search"
                type="search"
                placeholder="Search menu items..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-amber-700 focus:outline-amber-700"
              />
            </div>
            {isFiltering && (
              <Button variant="outline" onClick={clearFilters}>
                Clear
              </Button>
            )}
          </div>
          <details className="mt-4">
            <summary className="font-medium text-amber-700">
              Filters{selectedTags.length > 0 && ` (${selectedTags.length})`}
            </summary>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Button
                  key={tag}
                  size="sm"
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  aria-pressed={selectedTags.includes(tag)}
                  onClick={() =>
                    setSelectedTags((current) =>
                      current.includes(tag)
                        ? current.filter((value) => value !== tag)
                        : [...current, tag],
                    )
                  }
                >
                  {tag}
                </Button>
              ))}
            </div>
          </details>
        </div>
        <p aria-live="polite" className="mb-6 text-gray-600">
          Showing{" "}
          {categories.reduce(
            (count, category) => count + category.items.length,
            0,
          )}{" "}
          items{isFiltering && " matching your filters"}
        </p>
        <div className="space-y-6">
          {categories.map((category) => (
            <details
              key={category.id}
              open={isFiltering || category.id === "cold-starters"}
              className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              <summary className="flex items-center justify-between gap-4 bg-amber-50 p-6 hover:bg-amber-100">
                <div>
                  <h2 className="mb-2 text-2xl font-bold text-gray-900">
                    {category.name}
                  </h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                <ChevronDown className="h-6 w-6 shrink-0 text-amber-700 group-open:rotate-180" />
              </summary>
              <div
                className={`grid gap-6 p-6 ${category.id === "drinks" ? "md:grid-cols-2 lg:grid-cols-3" : ""}`}
              >
                {category.items.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </details>
          ))}
        </div>
        {categories.length === 0 && (
          <div className="py-12 text-center">
            <h2 className="mb-2 text-xl font-semibold">No items found</h2>
            <p className="mb-6 text-gray-600">
              Try another search or clear the filters.
            </p>
            <Button onClick={clearFilters}>Clear Filters</Button>
          </div>
        )}
      </div>
    </main>
  );
}

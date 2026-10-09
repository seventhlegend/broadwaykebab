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
    <article className="flex flex-col gap-5 rounded-xl border border-paper-muted bg-surface p-4 sm:p-5 md:flex-row md:gap-6 [content-visibility:auto] [contain-intrinsic-size:auto_250px]">
      {item.image && (
        <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-lg bg-paper-muted md:h-36 md:w-48">
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
              <Star aria-hidden="true" className="mr-1 h-3 w-3" />
              Featured
            </Badge>
          )}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-bold text-ink">{item.name}</h3>
          {!item.subcategory && (
            <span className="whitespace-nowrap text-lg font-bold text-grill">
              £{item.price.toFixed(2)}
            </span>
          )}
        </div>
        {item.description && (
          <p className="mb-4 leading-6 text-muted">{item.description}</p>
        )}
        {item.subcategory && (
          <ul className="mb-4 space-y-2">
            {item.subcategory.map((option) => (
              <li
                key={option.name}
                className="flex justify-between gap-4 border-b border-paper-muted py-2 text-sm last:border-0"
              >
                <span>{option.name}</span>
                <span className="whitespace-nowrap font-semibold text-grill">
                  £{option.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        )}
        {item.tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {item.tags
              .filter((tag) => tag !== "category")
              .map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
          </div>
        )}
        {item.allergens.length > 0 && (
          <p className="text-sm text-muted">
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
  const visibleCount = categories.reduce(
    (count, category) => count + category.items.length,
    0,
  );

  function clearFilters() {
    setSearch("");
    setSelectedTags([]);
  }

  return (
    <main id="main-content" className="min-h-[80svh] bg-paper">
      <div className="bg-grill-deep px-5 py-14 text-white sm:px-8 sm:py-16">
        <div className="mx-auto max-w-[1240px]">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-spice">
            Charcoal grilled in Tooting
          </p>
          <h1 className="mb-3 font-display text-5xl font-bold sm:text-6xl">
            Our Menu
          </h1>
          <p className="max-w-xl text-lg leading-7 text-white/80 sm:text-xl">
            Discover authentic Anatolian flavors
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1240px] px-5 py-8 sm:px-8 sm:py-10">
        <div className="mb-8 rounded-xl border border-paper-muted bg-surface p-4 shadow-sm sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <label htmlFor="menu-search" className="sr-only">
                Search menu items
              </label>
              <Search
                aria-hidden="true"
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
              />
              <input
                id="menu-search"
                name="menu-search"
                type="search"
                placeholder="Search menu items…"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="min-h-12 w-full rounded-lg border border-paper-muted bg-paper py-3 pl-10 pr-4 text-base text-ink placeholder:text-muted focus:border-grill"
              />
            </div>
            {isFiltering && (
              <Button variant="outline" onClick={clearFilters}>
                Clear filters
              </Button>
            )}
          </div>
          <details className="mt-4">
            <summary className="inline-flex min-h-11 items-center rounded-lg font-semibold text-grill hover:underline hover:underline-offset-4">
              Filters{selectedTags.length > 0 && ` (${selectedTags.length})`}
            </summary>
            <div className="mt-3 flex flex-wrap gap-2">
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

        <p aria-live="polite" className="mb-6 text-muted">
          Showing {visibleCount} items
          {isFiltering && " matching your filters"}
        </p>

        <div className="space-y-5">
          {categories.map((category) => (
            <details
              key={category.id}
              open={isFiltering || category.id === "cold-starters"}
              className="group overflow-hidden rounded-xl border border-paper-muted bg-surface shadow-sm"
            >
              <summary className="flex min-h-20 items-center justify-between gap-4 bg-paper-muted p-5 transition-colors hover:bg-paper-muted/70 sm:p-6">
                <div>
                  <h2 className="mb-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                    {category.name}
                  </h2>
                  <p className="text-muted">{category.description}</p>
                </div>
                <ChevronDown
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 text-grill transition-transform group-open:rotate-180"
                />
              </summary>
              <div
                className={`grid gap-4 p-4 sm:gap-5 sm:p-6 ${category.id === "drinks" ? "md:grid-cols-2 lg:grid-cols-3" : ""}`}
              >
                {category.items.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </details>
          ))}
        </div>

        {categories.length === 0 && (
          <div className="rounded-xl border border-paper-muted bg-surface py-12 text-center">
            <h2 className="mb-2 font-display text-2xl font-bold text-ink">
              No items found
            </h2>
            <p className="mb-6 text-muted">
              Try another search or clear your filters.
            </p>
            <Button onClick={clearFilters}>Clear filters</Button>
          </div>
        )}
      </div>
    </main>
  );
}

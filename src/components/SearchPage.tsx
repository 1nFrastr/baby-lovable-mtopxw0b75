"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { aircraftCatalog } from "@/data/aircraft";
import { weaponsCatalog } from "@/data/weapons";
import AIImage from "./AIImage";

type Item = {
  kind: "aircraft" | "weapon";
  slug: string;
  name: string;
  tag: string;
  country: string;
  image: string;
  imagePrompt: string;
};

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const items = useMemo<Item[]>(() => {
    const aircraft: Item[] = aircraftCatalog.map((a) => ({
      kind: "aircraft",
      slug: a.slug,
      name: a.name,
      tag: a.type,
      country: a.country,
      image: a.image,
      imagePrompt: a.imagePrompt,
    }));
    const weapons: Item[] = weaponsCatalog.map((w) => ({
      kind: "weapon",
      slug: w.slug,
      name: w.name,
      tag: w.category,
      country: w.country,
      image: w.image,
      imagePrompt: w.imagePrompt,
    }));
    return [...aircraft, ...weapons];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) => {
      const hay = `${i.name} ${i.tag} ${i.country}`.toLowerCase();
      return hay.includes(q);
    });
  }, [items, query]);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-sky-400">
          Search the arsenal
        </p>
        <h1 className="mt-2 text-3xl font-black sm:text-4xl">
          Find aircraft & weapons
        </h1>
        <p className="mt-2 text-foreground/60">
          Type a name, category or country — results update as you type.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-xl">
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg">
            🔍
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search aircraft and weapons"
            placeholder="e.g. F-22, AK-47, Russia, stealth..."
            className="w-full rounded-xl border border-foreground/10 bg-foreground/5 py-3 pl-12 pr-4 text-sm outline-none transition placeholder:text-foreground/40 focus:border-sky-500/60 focus:bg-foreground/10"
          />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between text-sm text-foreground/60">
        <span>{filtered.length} result{filtered.length === 1 ? "" : "s"}</span>
        {query && (
          <button
            onClick={() => setQuery("")}
            className="font-medium text-sky-400 hover:underline"
          >
            Clear
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 text-center">
          <p className="text-4xl">🫥</p>
          <p className="mt-3 font-semibold text-foreground/70">
            Nothing matched “{query}”
          </p>
          <p className="text-sm text-foreground/50">
            Try a different name, category or country.
          </p>
        </div>
      ) : (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <Link
              key={`${item.kind}-${item.slug}`}
              href={`/${item.kind === "aircraft" ? "aircraft" : "weapons"}/${item.slug}`}
              className="group overflow-hidden rounded-xl border border-foreground/10 bg-card/50 transition hover:border-sky-500/50 hover:bg-card"
            >
              <div className="relative h-44 overflow-hidden">
                <AIImage
                  prompt={item.imagePrompt}
                  fallback={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span
                  className={
                    "absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide " +
                    (item.kind === "aircraft"
                      ? "bg-sky-500/90 text-white"
                      : "bg-amber-500/90 text-black")
                  }
                >
                  {item.kind === "aircraft" ? "Aircraft" : "Weapon"}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold leading-tight group-hover:text-sky-400">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-foreground/50">
                  {item.tag} · {item.country}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

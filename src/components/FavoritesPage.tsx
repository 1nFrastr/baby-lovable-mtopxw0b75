"use client";

import Link from "next/link";
import { FAVORITES_KEY, useStoredList } from "@/lib/storage";
import { aircraftCatalog } from "@/data/aircraft";
import { weaponsCatalog } from "@/data/weapons";
import AircraftCard from "@/components/AircraftCard";
import WeaponCard from "@/components/WeaponCard";

export default function FavoritesPage() {
  const { items, clear } = useStoredList(FAVORITES_KEY);

  const aSlugs = items
    .filter((k) => k.startsWith("aircraft:"))
    .map((k) => k.slice("aircraft:".length));
  const wSlugs = items
    .filter((k) => k.startsWith("weapon:"))
    .map((k) => k.slice("weapon:".length));

  const aircraft = aSlugs
    .map((s) => aircraftCatalog.find((a) => a.slug === s))
    .filter(Boolean);
  const weapons = wSlugs
    .map((s) => weaponsCatalog.find((w) => w.slug === s))
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <header className="mb-10 flex items-end justify-between gap-4 border-l-4 border-red-500 pl-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-red-400">
            Your shortlist
          </p>
          <h1 className="mt-2 text-4xl font-black">Favorites</h1>
          <p className="mt-3 text-foreground/60">
            {items.length} saved — tap a heart on any card to add or remove.
          </p>
        </div>
        {items.length > 0 && (
          <button
            onClick={clear}
            className="rounded-lg border border-foreground/15 px-4 py-2 text-sm font-medium text-foreground/70 hover:bg-foreground/10"
          >
            Clear all
          </button>
        )}
      </header>

      {aircraft.length === 0 && weapons.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-foreground/20 p-16 text-center">
          <p className="text-2xl">🤍</p>
          <h2 className="mt-3 text-xl font-bold">No favorites yet</h2>
          <p className="mx-auto mt-2 max-w-sm text-foreground/60">
            Tap the heart icon on any aircraft or weapon to save it here.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/aircraft"
              className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90"
            >
              Browse aircraft
            </Link>
            <Link
              href="/weapons"
              className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90"
            >
              Browse weapons
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-10">
          {aircraft.length > 0 && (
            <section>
              <h2 className="mb-5 text-lg font-bold text-sky-400">
                Aircraft ({aircraft.length})
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {aircraft.map(
                  (a) => a && <AircraftCard key={a.slug} aircraft={a} />
                )}
              </div>
            </section>
          )}
          {weapons.length > 0 && (
            <section>
              <h2 className="mb-5 text-lg font-bold text-amber-400">
                Weapons ({weapons.length})
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {weapons.map(
                  (w) => w && <WeaponCard key={w.slug} weapon={w} />
                )}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}

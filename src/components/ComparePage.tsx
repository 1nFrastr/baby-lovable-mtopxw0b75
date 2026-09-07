"use client";

import Link from "next/link";
import { useStoredList, slugKey, COMPARE_KEY } from "@/lib/storage";
import { aircraftCatalog } from "@/data/aircraft";
import { weaponsCatalog } from "@/data/weapons";
import AIImage from "@/components/AIImage";

type A = (typeof aircraftCatalog)[number];
type W = (typeof weaponsCatalog)[number];

const AIRCRAFT_ROWS: { label: string; key: (a: A) => string }[] = [
  { label: "Type", key: (a) => a.type },
  { label: "Country", key: (a) => a.country },
  { label: "Role", key: (a) => a.role },
  { label: "Top speed", key: (a) => a.speed },
  { label: "Ceiling", key: (a) => a.ceiling },
  { label: "Range", key: (a) => a.range },
  { label: "Crew", key: (a) => a.crew },
  { label: "Engine", key: (a) => a.engine },
  { label: "Armament", key: (a) => a.armament },
];

const WEAPON_ROWS: { label: string; key: (w: W) => string }[] = [
  { label: "Category", key: (w) => w.category },
  { label: "Country", key: (w) => w.country },
  { label: "Caliber", key: (w) => w.caliber },
  { label: "Action", key: (w) => w.action },
  { label: "Rate of fire", key: (w) => w.rateOfFire },
  { label: "Weight", key: (w) => w.weight },
  { label: "Capacity", key: (w) => w.capacity },
];

function CompareTable<T>({
  title,
  items,
  rows,
  hrefFor,
}: {
  title: string;
  items: T[];
  rows: { label: string; key: (item: T) => string }[];
  hrefFor: (item: T) => string;
}) {
  if (items.length === 0) return null;
  return (
    <div className="overflow-x-auto rounded-2xl border border-foreground/10">
      <div className="border-b border-foreground/10 bg-foreground/5 px-4 py-3 text-sm font-bold uppercase tracking-wider text-foreground/60">
        {title}
      </div>
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr>
            <th className="w-40 bg-foreground/5 px-4 py-3 text-left font-semibold uppercase tracking-wider text-foreground/50" />
            {items.map((item) => (
              <th
                key={(item as { slug: string }).slug}
                className="bg-foreground/5 px-4 py-3 text-left align-top"
              >
                <div className="mb-2 h-24 overflow-hidden rounded-lg sm:h-28">
                  <AIImage
                    prompt={(item as { imagePrompt: string }).imagePrompt}
                    fallback={(item as { image: string }).image}
                    alt={(item as { name: string }).name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <Link
                  href={hrefFor(item)}
                  className="font-bold text-foreground hover:text-sky-400"
                >
                  {(item as { name: string }).name}
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={i % 2 === 0 ? "bg-foreground/[0.03]" : ""}
            >
              <td className="border-t border-foreground/10 px-4 py-3 font-medium text-foreground/60">
                {row.label}
              </td>
              {items.map((item) => (
                <td
                  key={(item as { slug: string }).slug}
                  className="border-t border-foreground/10 px-4 py-3 text-foreground/85"
                >
                  {row.key(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ComparePage() {
  const { items, clear } = useStoredList(COMPARE_KEY);

  const aSlugs = items
    .filter((k) => k.startsWith("aircraft:"))
    .map((k) => k.slice("aircraft:".length));
  const wSlugs = items
    .filter((k) => k.startsWith("weapon:"))
    .map((k) => k.slice("weapon:".length));

  const aircraft = aSlugs
    .map((s) => aircraftCatalog.find((a) => a.slug === s))
    .filter(Boolean) as A[];
  const weapons = wSlugs
    .map((s) => weaponsCatalog.find((w) => w.slug === s))
    .filter(Boolean) as W[];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <header className="mb-8 flex items-end justify-between gap-4 border-l-4 border-sky-500 pl-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-sky-400">
            Head to Head
          </p>
          <h1 className="mt-2 text-4xl font-black">Compare</h1>
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

      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-foreground/20 p-16 text-center">
          <p className="text-2xl">⚔️</p>
          <h2 className="mt-3 text-xl font-bold">Nothing to compare yet</h2>
          <p className="mx-auto mt-2 max-w-sm text-foreground/60">
            Use the <span className="font-semibold text-sky-400">scale icon</span>{" "}
            on any aircraft or weapon card to add up to 3 items here.
          </p>
          <Link
            href="/aircraft"
            className="mt-6 inline-block rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90"
          >
            Browse aircraft
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          <CompareTable
            title="Aircraft"
            items={aircraft}
            rows={AIRCRAFT_ROWS}
            hrefFor={(a) => `/aircraft/${a.slug}`}
          />
          <CompareTable
            title="Weapons"
            items={weapons}
            rows={WEAPON_ROWS}
            hrefFor={(w) => `/weapons/${w.slug}`}
          />
        </div>
      )}
    </div>
  );
}

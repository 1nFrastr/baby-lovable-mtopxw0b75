"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Scale, X, ArrowRight, Plane, Crosshair } from "lucide-react";
import { COMPARE_KEY, slugKey, useStoredList } from "@/lib/storage";
import { aircraftCatalog } from "@/data/aircraft";
import { weaponsCatalog } from "@/data/weapons";
import AIImage from "@/components/AIImage";

const MAX_PER_KIND = 3;

type Entry = {
  kind: "aircraft" | "weapon";
  slug: string;
  name: string;
  imagePrompt: string;
  image: string;
};

function resolveEntry(key: string): Entry | null {
  const [kind, slug] = key.split(":");
  if (kind === "aircraft") {
    const a = aircraftCatalog.find((x) => x.slug === slug);
    return a
      ? { kind, slug, name: a.name, imagePrompt: a.imagePrompt, image: a.image }
      : null;
  }
  const w = weaponsCatalog.find((x) => x.slug === slug);
  return w
    ? { kind, slug, name: w.name, imagePrompt: w.imagePrompt, image: w.image }
    : null;
}

function Slot({
  entry,
  onRemove,
}: {
  entry: Entry | null;
  onRemove: (key: string) => void;
}) {
  if (!entry) {
    return (
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border-2 border-dashed border-foreground/15 bg-foreground/[0.03] text-foreground/25">
        <span className="text-xs font-semibold">+</span>
      </div>
    );
  }
  return (
    <div className="group relative shrink-0">
      <div className="h-12 w-12 overflow-hidden rounded-lg border border-sky-400/50 bg-foreground/5">
        <AIImage
          prompt={entry.imagePrompt}
          fallback={entry.image}
          alt={entry.name}
          className="h-full w-full object-cover"
        />
      </div>
      <button
        aria-label={`Remove ${entry.name}`}
        onClick={() => onRemove(slugKey(entry.kind, entry.slug))}
        className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full border border-foreground/10 bg-background text-foreground/70 opacity-0 transition-opacity hover:text-red-500 group-hover:opacity-100"
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  );
}

export default function CompareTray() {
  const { items, toggle } = useStoredList(COMPARE_KEY);
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(false);

  const entries = items
    .map(resolveEntry)
    .filter((e): e is Entry => e !== null);

  const aircraft = entries.filter((e) => e.kind === "aircraft");
  const weapons = entries.filter((e) => e.kind === "weapon");

  useEffect(() => {
    setVisible(entries.length > 0);
  }, [entries.length]);

  useEffect(() => {
    if (entries.length === 0) return;
    setPulse(true);
    const t = setTimeout(() => setPulse(false), 500);
    return () => clearTimeout(t);
  }, [entries.length]);

  if (!visible) return null;

  const aircraftSlots: (Entry | null)[] = [
    ...aircraft,
    ...Array.from({ length: MAX_PER_KIND - aircraft.length }, () => null),
  ];
  const weaponSlots: (Entry | null)[] = [
    ...weapons,
    ...Array.from({ length: MAX_PER_KIND - weapons.length }, () => null),
  ];

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <div
        className={`flex w-full max-w-2xl flex-col gap-3 rounded-2xl border border-foreground/10 bg-background/95 p-3 shadow-2xl shadow-black/20 backdrop-blur ${
          pulse ? "animate-tray-pulse" : ""
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-sky-500/15 text-sky-400">
            <Scale className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Compare</p>
            <p className="text-xs text-foreground/60">
              {entries.length} item{entries.length > 1 ? "s" : ""} selected
            </p>
          </div>
          <Link
            href="/compare"
            className="ml-auto flex shrink-0 items-center gap-1.5 rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-600"
          >
            View
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-xs font-medium text-foreground/60">
              <Plane className="h-3.5 w-3.5" /> Aircraft
            </span>
            <div className="flex gap-2 overflow-x-auto">
              {aircraftSlots.map((e, i) => (
                <Slot key={`a-${e?.slug ?? i}`} entry={e} onRemove={toggle} />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-xs font-medium text-foreground/60">
              <Crosshair className="h-3.5 w-3.5" /> Weapons
            </span>
            <div className="flex gap-2 overflow-x-auto">
              {weaponSlots.map((e, i) => (
                <Slot key={`w-${e?.slug ?? i}`} entry={e} onRemove={toggle} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

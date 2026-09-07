"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Scale, X, ArrowRight } from "lucide-react";
import { COMPARE_KEY, slugKey, useStoredList } from "@/lib/storage";
import { aircraftCatalog } from "@/data/aircraft";
import { weaponsCatalog } from "@/data/weapons";

type Entry = {
  kind: "aircraft" | "weapon";
  slug: string;
  name: string;
  image: string;
};

function resolveEntry(key: string): Entry | null {
  const [kind, slug] = key.split(":");
  if (kind === "aircraft") {
    const a = aircraftCatalog.find((x) => x.slug === slug);
    return a ? { kind, slug, name: a.name, image: a.image } : null;
  }
  const w = weaponsCatalog.find((x) => x.slug === slug);
  return w ? { kind, slug, name: w.name, image: w.image } : null;
}

export default function CompareTray() {
  const { items, toggle } = useStoredList(COMPARE_KEY);
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(false);

  const entries = items
    .map(resolveEntry)
    .filter((e): e is Entry => e !== null);

  // show tray whenever there is at least one item
  useEffect(() => {
    setVisible(entries.length > 0);
  }, [entries.length]);

  // pulse animation when an item is added
  useEffect(() => {
    if (entries.length === 0) return;
    setPulse(true);
    const t = setTimeout(() => setPulse(false), 500);
    return () => clearTimeout(t);
  }, [entries.length]);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <div
        className={`flex max-w-2xl flex-1 items-center gap-3 rounded-2xl border border-foreground/10 bg-background/95 p-3 shadow-2xl shadow-black/20 backdrop-blur ${
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
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 overflow-x-auto">
          {entries.map((e) => (
            <div key={slugKey(e.kind, e.slug)} className="group relative shrink-0">
              <div className="h-12 w-12 overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={e.image}
                  alt={e.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <button
                aria-label={`Remove ${e.name}`}
                onClick={() => toggle(slugKey(e.kind, e.slug))}
                className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full border border-foreground/10 bg-background text-foreground/70 opacity-0 transition-opacity hover:text-red-500 group-hover:opacity-100"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>

        <Link
          href="/compare"
          className="flex shrink-0 items-center gap-1.5 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-600"
        >
          View
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

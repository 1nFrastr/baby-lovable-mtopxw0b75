"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scale, X, ArrowRight, Plane, Crosshair, ChevronUp, ChevronDown } from "lucide-react";
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
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border-2 border-dashed border-foreground/15 bg-foreground/[0.03] text-foreground/25">
        <span className="text-xs font-semibold">+</span>
      </div>
    );
  }
  return (
    <div className="group relative shrink-0">
      <div className="h-10 w-10 overflow-hidden rounded-lg border border-sky-400/50 bg-foreground/5">
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

function CategoryRow({
  label,
  icon,
  slots,
  onRemove,
}: {
  label: string;
  icon: React.ReactNode;
  slots: (Entry | null)[];
  onRemove: (key: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex w-20 shrink-0 items-center gap-1 text-xs font-medium text-foreground/60">
        {icon}
        <span className="truncate">{label}</span>
      </div>
      <div className="flex gap-1.5 overflow-x-auto">
        {slots.map((e, i) => (
          <Slot key={`${e?.slug ?? i}-${i}`} entry={e} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
}

const TRAY_OPEN_KEY = "wing-steel:compare-tray-open";

function persistOpen(v: boolean) {
  try {
    window.localStorage.setItem(TRAY_OPEN_KEY, v ? "1" : "0");
  } catch {
    /* ignore */
  }
}

export default function CompareTray() {
  const { items, toggle } = useStoredList(COMPARE_KEY);
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(() => {
    if (typeof window === "undefined") return true; // SSR: nothing renders anyway
    try {
      const stored = window.localStorage.getItem(TRAY_OPEN_KEY);
      return stored === null ? true : stored === "1";
    } catch {
      return true;
    }
  });
  const [pulse, setPulse] = useState(false);

  const entries = items
    .map(resolveEntry)
    .filter((e): e is Entry => e !== null);

  const aircraft = entries.filter((e) => e.kind === "aircraft");
  const weapons = entries.filter((e) => e.kind === "weapon");

  // auto-collapse on /compare page, re-expand elsewhere (without persisting)
  const lastManual = useRef<boolean | null>(null);
  useEffect(() => {
    if (pathname === "/compare") {
      setOpen(false);
    } else if (lastManual.current !== null) {
      setOpen(lastManual.current);
    }
  }, [pathname]);

  // persist user's manual toggles
  const toggleOpen = () =>
    setOpen((v) => {
      const next = !v;
      lastManual.current = next;
      persistOpen(next);
      return next;
    });

  useEffect(() => {
    setPulse(true);
    const t = setTimeout(() => setPulse(false), 500);
    return () => clearTimeout(t);
  }, [entries.length]);

  if (entries.length === 0) return null;

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
        className={`flex w-full max-w-xl flex-col rounded-2xl border border-foreground/10 bg-background/95 shadow-2xl shadow-black/20 backdrop-blur ${
          pulse ? "animate-tray-pulse" : ""
        }`}
      >
        {/* Header row — always visible */}
        <div className="flex items-center gap-2 px-3 py-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky-500/15 text-sky-400">
            <Scale className="h-4 w-4" />
          </span>
          <p className="text-sm font-semibold leading-tight">Compare</p>
          <p className="text-xs text-foreground/60">
            {entries.length} item{entries.length > 1 ? "s" : ""}
          </p>
          <button
            aria-label={open ? "Collapse compare tray" : "Expand compare tray"}
            onClick={toggleOpen}
            className="ml-auto grid h-7 w-7 place-items-center rounded-lg text-foreground/60 transition-colors hover:bg-foreground/10 hover:text-foreground"
          >
            {open ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
          </button>
          <Link
            href="/compare"
            className="flex shrink-0 items-center gap-1 rounded-lg bg-sky-500 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-sky-600"
          >
            View
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Expandable body */}
        {open && (
          <div className="flex flex-col gap-2.5 border-t border-foreground/10 px-3 pb-3 pt-2.5">
            <CategoryRow
              label="Aircraft"
              icon={<Plane className="h-3.5 w-3.5 shrink-0" />}
              slots={aircraftSlots}
              onRemove={toggle}
            />
            <CategoryRow
              label="Weapons"
              icon={<Crosshair className="h-3.5 w-3.5 shrink-0" />}
              slots={weaponSlots}
              onRemove={toggle}
            />
          </div>
        )}
      </div>
    </div>
  );
}
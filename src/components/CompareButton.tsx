"use client";

import { useState } from "react";
import { Scale } from "lucide-react";
import { slugKey, COMPARE_KEY } from "@/lib/storage";
import { useStoredList } from "@/lib/storage";

const MAX = 3;

export default function CompareButton({
  kind,
  slug,
  name,
  className = "",
}: {
  kind: "aircraft" | "weapon";
  slug: string;
  name: string;
  className?: string;
}) {
  const { items, has, toggle } = useStoredList(COMPARE_KEY);
  const [init, setInit] = useState(false);
  const active = has(slugKey(kind, slug));

  return (
    <button
      aria-label={active ? "Remove from comparison" : "Add to comparison"}
      title={active ? "In comparison" : "Compare"}
      disabled={!active && items.length >= MAX}
      onMouseEnter={() => setInit(true)}
      onClick={() => toggle(slugKey(kind, slug))}
      className={`grid h-10 w-10 place-items-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
        active
          ? "border-sky-400 bg-sky-500 text-white"
          : "border-foreground/15 text-foreground/70 hover:bg-foreground/10"
      } ${className}`}
    >
      <Scale className={`h-5 w-5 ${active ? "fill-current" : ""}`} />
      {!init && <span className="sr-only">{name}</span>}
    </button>
  );
}

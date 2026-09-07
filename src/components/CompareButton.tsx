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
  const [hovered, setHovered] = useState(false);
  const active = has(slugKey(kind, slug));
  // Limit is per category, so 3 weapons never block aircraft (and vice versa).
  const kindCount = items.filter((s) => s.startsWith(`${kind}:`)).length;
  const full = kindCount >= MAX && !active;

  return (
    <button
      aria-label={active ? `Remove ${name} from comparison` : `Add ${name} to comparison`}
      title={
        full
          ? `Comparison is full (max ${MAX})`
          : active
            ? "In comparison — click to remove"
            : `Add ${name} to comparison`
      }
      disabled={full}
      onMouseEnter={() => setHovered(true)}
      onClick={() => toggle(slugKey(kind, slug))}
      className={`grid h-10 w-10 place-items-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
        active
          ? "border-sky-400 bg-sky-500 text-white"
          : "border-foreground/15 text-foreground/70 hover:bg-foreground/10"
      } ${className}`}
    >
      <Scale className={`h-5 w-5 ${active ? "fill-current" : ""}`} />
      {!hovered && <span className="sr-only">{name}</span>}
    </button>
  );
}
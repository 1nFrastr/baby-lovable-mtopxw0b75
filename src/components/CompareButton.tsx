"use client";

import { useState } from "react";
import { Scale, Check } from "lucide-react";
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
      aria-label={
        active
          ? `Remove ${name} from comparison`
          : full
            ? `Comparison full (max ${MAX} per category)`
            : `Add ${name} to comparison`
      }
      title={
        active
          ? `${name} added — click to remove`
          : full
            ? `Max ${MAX} per category reached`
            : `Add ${name} to comparison`
      }
      disabled={full}
      onMouseEnter={() => setHovered(true)}
      onClick={() => toggle(slugKey(kind, slug))}
      className={`grid h-10 w-10 place-items-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
        active
          ? "border-sky-400 bg-sky-500 text-white shadow-lg shadow-sky-500/30"
          : "border-foreground/25 bg-background/70 text-foreground shadow-md shadow-black/40 backdrop-blur-sm hover:border-foreground/50 hover:bg-background/95 hover:text-foreground disabled:bg-background/40 disabled:shadow-none"
      } ${className}`}
    >
      {active ? (
        <Check className="h-5 w-5" />
      ) : (
        <Scale className="h-5 w-5" />
      )}
      {!hovered && <span className="sr-only">{name}</span>}
    </button>
  );
}

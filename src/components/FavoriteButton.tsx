"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { slugKey, FAVORITES_KEY, useStoredList } from "@/lib/storage";

export default function FavoriteButton({
  kind,
  slug,
  className = "",
}: {
  kind: "aircraft" | "weapon";
  slug: string;
  className?: string;
}) {
  const { items, has, toggle } = useStoredList(FAVORITES_KEY);
  const [init, setInit] = useState(false);
  const active = has(slugKey(kind, slug));

  return (
    <button
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
      title={active ? "Favorited" : "Favorite"}
      onMouseEnter={() => setInit(true)}
      onClick={() => toggle(slugKey(kind, slug))}
      className={`grid h-10 w-10 place-items-center rounded-full border transition-colors ${
        active
          ? "border-red-400 bg-red-500 text-white"
          : "border-foreground/15 text-foreground/70 hover:bg-foreground/10"
      } ${className}`}
    >
      {init || active ? (
        <Heart className={`h-5 w-5 ${active ? "fill-current" : ""}`} />
      ) : (
        <Heart className="h-5 w-5" />
      )}
    </button>
  );
}

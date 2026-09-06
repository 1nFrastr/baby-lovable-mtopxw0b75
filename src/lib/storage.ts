"use client";

import { useEffect, useState } from "react";

export function slugKey(kind: "aircraft" | "weapon", slug: string) {
  return `${kind}:${slug}`;
}

export function useStoredList(key: string): {
  items: string[];
  has: (id: string) => boolean;
  toggle: (id: string) => void;
  clear: () => void;
} {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;
    try {
      const raw = window.localStorage.getItem(key);
      if (mounted) setItems(raw ? (JSON.parse(raw) as string[]) : []);
    } catch {
      /* ignore */
    }
    return () => {
      mounted = false;
    };
  }, [key]);

  const has = (id: string) => items.includes(id);

  const toggle = (id: string) => {
    setItems((prev) => {
      const next = prev.includes(id)
        ? prev.filter((s) => s !== id)
        : [...prev, id];
      try {
        window.localStorage.setItem(key, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const clear = () => {
    setItems([]);
    try {
      window.localStorage.removeItem(key);
    } catch {
      /* ignore */
    }
  };

  return { items, has, toggle, clear };
}

export function hashString(str: string): string {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return (h >>> 0).toString(36);
}

export const FAVORITES_KEY = "wing-steel:favorites";
export const COMPARE_KEY = "wing-steel:compare";

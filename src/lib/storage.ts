"use client";

import { useSyncExternalStore } from "react";

export function slugKey(kind: "aircraft" | "weapon", slug: string) {
  return `${kind}:${slug}`;
}

/**
 * Shared in-memory store per localStorage key.
 * Every component that calls useStoredList(key) subscribes to the same
 * store, so a change in one component (e.g. CompareButton) immediately
 * reflects in all others (no stale `disabled` state).
 */
const stores = new Map<string, string[]>();
const listeners = new Map<string, Set<() => void>>();

function getStore(key: string): string[] {
  let store = stores.get(key);
  if (!store) {
    // hydrate from localStorage once (browser only)
    let initial: string[] = [];
    if (typeof window !== "undefined") {
      try {
        const raw = window.localStorage.getItem(key);
        initial = raw ? (JSON.parse(raw) as string[]) : [];
      } catch {
        initial = [];
      }
    }
    store = initial;
    stores.set(key, store);
  }
  return store;
}

function subscribe(key: string, fn: () => void): () => void {
  let set = listeners.get(key);
  if (!set) {
    set = new Set();
    listeners.set(key, set);
  }
  set.add(fn);
  return () => {
    set!.delete(fn);
  };
}

function emit(key: string) {
  const set = listeners.get(key);
  if (set) set.forEach((fn) => fn());
}

function persist(key: string) {
  try {
    window.localStorage.setItem(key, JSON.stringify(getStore(key)));
  } catch {
    /* ignore */
  }
}

function update(key: string, next: string[]) {
  stores.set(key, next);
  persist(key);
  emit(key);
}

/**
 * useSyncExternalStore guarantees the server-rendered (hydration) snapshot
 * is the empty list, matching SSR HTML — then the real localStorage-backed
 * value takes over after hydration without a hydration mismatch error.
 */
export function useStoredList(key: string): {
  items: string[];
  has: (id: string) => boolean;
  toggle: (id: string) => void;
  clear: () => void;
} {
  const items = useSyncExternalStore(
    (cb) => subscribe(key, cb),
    () => getStore(key),
    () => []
  );

  const has = (id: string) => items.includes(id);

  const toggle = (id: string) => {
    const next = items.includes(id)
      ? items.filter((s) => s !== id)
      : [...items, id];
    update(key, next);
  };

  const clear = () => update(key, []);

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
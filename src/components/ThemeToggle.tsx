"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

type Theme = "system" | "light" | "dark";

const THEME_KEY = "wing-steel:theme";
const ORDER: Record<Theme, Theme> = { system: "light", light: "dark", dark: "system" };

function effective(t: Theme): "light" | "dark" {
  if (t !== "system") return t;
  if (typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

function apply(t: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", effective(t));
}

function readStored(): Theme {
  if (typeof window === "undefined") return "system";
  const v = localStorage.getItem(THEME_KEY);
  return v === "light" || v === "dark" || v === "system" ? v : "system";
}

const ICONS: Record<Theme, typeof Sun> = { system: Monitor, light: Sun, dark: Moon };
const LABELS: Record<Theme, string> = {
  system: "Follow system theme",
  light: "Light theme",
  dark: "Dark theme",
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const t = readStored();
    setTheme(t);
    apply(t);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mq || theme !== "system") return;
    const onChange = () => apply("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);

  const toggle = () => {
    const next = ORDER[theme];
    setTheme(next);
    apply(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* ignore */
    }
  };

  const Icon = ICONS[theme];

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={LABELS[theme]}
      title={LABELS[theme]}
      className="grid h-9 w-9 place-items-center rounded-lg border border-foreground/10 text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
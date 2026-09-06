import Link from "next/link";
import type { Weapon } from "@/data/weapons";
import AIImage from "@/components/AIImage";
import FavoriteButton from "@/components/FavoriteButton";
import CompareButton from "@/components/CompareButton";

export default function WeaponCard({ weapon }: { weapon: Weapon }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-52 overflow-hidden">
        <AIImage
          prompt={weapon.imagePrompt}
          fallback={weapon.image}
          alt={weapon.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-md bg-background/70 px-2 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
          {weapon.category}
        </span>
        <div className="absolute right-3 top-3 flex flex-col gap-2">
          <FavoriteButton kind="weapon" slug={weapon.slug} />
          <CompareButton
            kind="weapon"
            slug={weapon.slug}
            name={weapon.name}
          />
        </div>
      </div>
      <Link
        href={`/weapons/${weapon.slug}`}
        className="flex flex-1 flex-col p-5"
      >
        <h3 className="text-xl font-bold">{weapon.name}</h3>
        <p className="mt-1 text-sm font-medium text-amber-400">
          {weapon.country} · {weapon.caliber}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-foreground/10 pt-4 text-sm">
          <span className="font-semibold text-amber-400">Details →</span>
          <span className="text-xs uppercase tracking-widest text-foreground/40">
            Firearm data
          </span>
        </div>
      </Link>
    </div>
  );
}

import { weaponsCatalog } from "@/data/weapons";
import WeaponCard from "@/components/WeaponCard";

export const metadata = {
  title: "Weapons — Wing & Steel",
  description: "Browse a catalog of iconic military small arms.",
};

export default function WeaponsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <header className="mb-12 border-l-4 border-amber-500 pl-4">
        <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
          The Armory
        </p>
        <h1 className="mt-2 text-4xl font-black">Weapons Catalog</h1>
        <p className="mt-3 max-w-2xl text-foreground/60">
          Assault rifles, machine guns and sniper systems — the infantry
          warrior&apos;s toolkit in detail.
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {weaponsCatalog.map((w) => (
          <WeaponCard key={w.slug} weapon={w} />
        ))}
      </div>
    </div>
  );
}

import type { Weapon } from "@/data/home";
import { featuredWeapons } from "@/data/home";
import SectionHeading from "@/components/SectionHeading";
import AIImage from "@/components/AIImage";

function WeaponCard({ weapon }: { weapon: Weapon }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 transition-transform duration-300 hover:-translate-y-1">
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
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold">{weapon.name}</h3>
        <p className="mt-1 text-sm font-medium text-amber-400">
          {weapon.country} · {weapon.caliber}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/60">
          {weapon.notes}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-foreground/10 pt-4 text-sm">
          <span className="font-semibold text-amber-400">Details →</span>
          <span className="text-xs uppercase tracking-widest text-foreground/40">
            Firearm data
          </span>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedWeapons() {
  return (
    <section id="weapons" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="The Armory"
        title="Featured Weapons"
        description="From iconic infantry rifles to anti-materiel monsters — history in your hands."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredWeapons.map((w) => (
          <WeaponCard key={w.name} weapon={w} />
        ))}
      </div>
    </section>
  );
}
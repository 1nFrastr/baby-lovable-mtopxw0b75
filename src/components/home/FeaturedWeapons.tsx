import { featuredWeapons } from "@/data/weapons";
import WeaponCard from "@/components/WeaponCard";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

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
          <WeaponCard key={w.slug} weapon={w} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/weapons"
          className="inline-block rounded-lg bg-amber-500 px-6 py-3 text-sm font-bold text-background transition-colors hover:bg-amber-400"
        >
          View Full Weapons Catalog →
        </Link>
      </div>
    </section>
  );
}

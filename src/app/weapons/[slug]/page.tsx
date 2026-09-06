import { notFound } from "next/navigation";
import Link from "next/link";
import { weaponsCatalog } from "@/data/weapons";
import AIImage from "@/components/AIImage";

export function generateStaticParams() {
  return weaponsCatalog.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const weapon = weaponsCatalog.find((w) => w.slug === params.slug);
  return {
    title: weapon ? `${weapon.name} — Wing & Steel` : "Weapons — Wing & Steel",
    description: weapon?.notes,
  };
}

export default function WeaponDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const weapon = weaponsCatalog.find((w) => w.slug === params.slug);
  if (!weapon) notFound();

  const rows: [string, string][] = [
    ["Caliber", weapon.caliber],
    ["Action", weapon.action],
    ["Rate of fire", weapon.rateOfFire],
    ["Weight", weapon.weight],
    ["Feed", weapon.capacity],
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <Link
        href="/weapons"
        className="text-sm font-medium text-amber-400 hover:underline"
      >
        ← Back to All Weapons
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-foreground/10">
          <AIImage
            prompt={weapon.imagePrompt}
            fallback={weapon.image}
            alt={weapon.name}
            className="h-80 w-full object-cover lg:h-full"
          />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
            {weapon.category} · {weapon.country}
          </p>
          <h1 className="mt-2 text-4xl font-black">{weapon.name}</h1>
          <p className="mt-3 text-lg font-medium text-foreground/70">
            {weapon.caliber}
          </p>
          <p className="mt-4 leading-relaxed text-foreground/70">
            {weapon.notes}
          </p>
          <p className="mt-3 leading-relaxed text-foreground/60">
            {weapon.history}
          </p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-foreground/10 bg-foreground/5 p-6">
        <h2 className="mb-2 text-xl font-bold">Technical data</h2>
        <div>
          {rows.map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between border-b border-foreground/10 py-3 text-sm"
            >
              <span className="text-foreground/50">{label}</span>
              <span className="font-semibold text-right">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

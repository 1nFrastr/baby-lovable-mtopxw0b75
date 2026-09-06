import { notFound } from "next/navigation";
import Link from "next/link";
import { aircraftCatalog } from "@/data/aircraft";
import AIImage from "@/components/AIImage";

export function generateStaticParams() {
  return aircraftCatalog.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const aircraft = aircraftCatalog.find((a) => a.slug === params.slug);
  return {
    title: aircraft ? `${aircraft.name} — Wing & Steel` : "Aircraft — Wing & Steel",
    description: aircraft?.description,
  };
}

function SpecRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-foreground/10 py-3 text-sm">
      <span className="text-foreground/50">{label}</span>
      <span className="font-semibold text-right">{value}</span>
    </div>
  );
}

export default function AircraftDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const aircraft = aircraftCatalog.find((a) => a.slug === params.slug);
  if (!aircraft) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <Link
        href="/aircraft"
        className="text-sm font-medium text-sky-400 hover:underline"
      >
        ← Back to All Aircraft
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-foreground/10">
          <AIImage
            prompt={aircraft.imagePrompt}
            fallback={aircraft.image}
            alt={aircraft.name}
            className="h-80 w-full object-cover lg:h-full"
          />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-sky-400">
            {aircraft.type} · {aircraft.country}
          </p>
          <h1 className="mt-2 text-4xl font-black">{aircraft.name}</h1>
          <p className="mt-3 text-lg font-medium text-foreground/70">
            {aircraft.role}
          </p>
          <p className="mt-4 leading-relaxed text-foreground/70">
            {aircraft.description}
          </p>
          <p className="mt-3 leading-relaxed text-foreground/60">
            {aircraft.history}
          </p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-foreground/10 bg-foreground/5 p-6">
        <h2 className="mb-2 text-xl font-bold">Specifications</h2>
        <div>
          <SpecRow label="Crew" value={aircraft.crew} />
          <SpecRow label="Top speed" value={aircraft.speed} />
          <SpecRow label="Service ceiling" value={aircraft.ceiling} />
          <SpecRow label="Range" value={aircraft.range} />
          <SpecRow label="Engine" value={aircraft.engine} />
          <SpecRow label="Armament" value={aircraft.armament} />
        </div>
      </div>
    </div>
  );
}

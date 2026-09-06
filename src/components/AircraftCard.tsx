import Link from "next/link";
import type { Aircraft } from "@/data/aircraft";
import AIImage from "@/components/AIImage";

export default function AircraftCard({ aircraft }: { aircraft: Aircraft }) {
  return (
    <Link
      href={`/aircraft/${aircraft.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative h-52 overflow-hidden">
        <AIImage
          prompt={aircraft.imagePrompt}
          fallback={aircraft.image}
          alt={aircraft.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-md bg-background/70 px-2 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
          {aircraft.type} · {aircraft.country}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold">{aircraft.name}</h3>
        <p className="mt-1 text-sm font-medium text-sky-400">{aircraft.role}</p>
        <div className="mt-4 flex items-center justify-between border-t border-foreground/10 pt-4 text-sm">
          <span className="text-foreground/60">
            Top speed:{" "}
            <span className="font-semibold text-foreground">
              {aircraft.speed}
            </span>
          </span>
          <span className="font-semibold text-sky-400">Specs →</span>
        </div>
      </div>
    </Link>
  );
}

import { featuredAircraft } from "@/data/aircraft";
import AircraftCard from "@/components/AircraftCard";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export default function FeaturedAircraft() {
  return (
    <section
      id="aircraft"
      className="border-y border-foreground/10 bg-foreground/5 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Flying Machines"
          title="Featured Aircraft"
          description="Quiet supremacists and loud transports — the jets enthusiasts can't stop talking about."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredAircraft.map((a) => (
            <AircraftCard key={a.slug} aircraft={a} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/aircraft"
            className="inline-block rounded-lg bg-sky-500 px-6 py-3 text-sm font-bold text-background transition-colors hover:bg-sky-400"
          >
            View Full Aircraft Catalog →
          </Link>
        </div>
      </div>
    </section>
  );
}

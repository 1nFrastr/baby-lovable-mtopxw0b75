import { aircraftCatalog } from "@/data/aircraft";
import AircraftCard from "@/components/AircraftCard";

export const metadata = {
  title: "Aircraft — Wing & Steel",
  description: "Browse a catalog of iconic military aircraft.",
};

export default function AircraftPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <header className="mb-12 border-l-4 border-sky-500 pl-4">
        <p className="text-sm font-bold uppercase tracking-widest text-sky-400">
          The Flight Deck
        </p>
        <h1 className="mt-2 text-4xl font-black">Aircraft Catalog</h1>
        <p className="mt-3 max-w-2xl text-foreground/60">
          From fifth-generation stealth fighters to rugged transports — explore
          the machines that rule the sky.
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aircraftCatalog.map((a) => (
          <AircraftCard key={a.slug} aircraft={a} />
        ))}
      </div>
    </div>
  );
}

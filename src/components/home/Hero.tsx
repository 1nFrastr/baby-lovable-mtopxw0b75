import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative -mb-0 overflow-hidden border-b border-foreground/10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&fit=crop&w=1600&q=70)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-28 text-center sm:px-6 sm:py-36">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-300">
          ✈️ For drag &amp; thrust enthusiasts
        </p>
        <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
          Where the Skies Meet{" "}
          <span className="bg-gradient-to-r from-sky-400 to-amber-400 bg-clip-text text-transparent">
            Steel &amp; Fire
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-foreground/70">
          Aviation history, fighter jets, and the firearms that shaped modern
          warfare — specs, stories, and the machines you love, all in one
          hangar.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#aircraft"
            className="rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Explore Aircraft
          </Link>
          <Link
            href="#weapons"
            className="rounded-lg border border-foreground/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground/50"
          >
            Browse Weapons
          </Link>
        </div>

        <div className="mt-14 grid w-full max-w-3xl grid-cols-3 gap-4 text-center">
          {[
            { value: "100+", label: "Aircraft Profiles" },
            { value: "400+", label: "Weapon Entries" },
            { value: "7", label: "Decades of History" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-5"
            >
              <p className="text-2xl font-black text-sky-400 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-foreground/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
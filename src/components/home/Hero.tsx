import Link from "next/link";

const PHOTOS = [
  {
    url: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1200&q=80",
    className: "col-span-2 row-span-2",
    fallback: "#0f172a",
  },
  {
    url: "https://images.unsplash.com/photo-1550443095-d75ffea6a5a0?auto=format&fit=crop&w=800&q=80",
    className: "col-span-2 row-span-1",
    fallback: "#1e293b",
  },
  {
    url: "https://images.unsplash.com/photo-1588514912908-8deb8ccb26d3?auto=format&fit=crop&w=800&q=80",
    className: "col-span-2 row-span-1",
    fallback: "#334155",
  },
  {
    url: "https://images.unsplash.com/photo-1595591422198-4e9f1b3b50bb?auto=format&fit=crop&w=800&q=80",
    className: "col-span-3 row-span-1",
    fallback: "#0c4a6e",
  },
  {
    url: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?auto=format&fit=crop&w=800&q=80",
    className: "col-span-3 row-span-1",
    fallback: "#1e1b4b",
  },
];

export default function Hero() {
  return (
    <section className="relative -mb-0 overflow-hidden border-b border-foreground/10">
      {/* 照片墙背景 */}
      <div className="absolute inset-0" aria-hidden>
        <div className="grid h-full w-full grid-cols-6 grid-rows-3 gap-px">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden ${photo.className}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundColor: photo.fallback, backgroundImage: `url(${photo.url})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background/80" />
            </div>
          ))}
        </div>
      </div>

      {/* 文字内容 */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-28 text-center sm:px-6 sm:py-32">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-300 backdrop-blur-sm">
          ✈️ For drag &amp; thrust enthusiasts
        </p>
        <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-6xl">
          Where the Skies Meet{" "}
          <span className="bg-gradient-to-r from-sky-400 to-amber-400 bg-clip-text text-transparent">
            Steel &amp; Fire
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">
          Aviation history, fighter jets, and the firearms that shaped modern
          warfare — specs, stories, and the machines you love, all in one
          hangar.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#aircraft"
            className="rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition-opacity hover:opacity-90"
          >
            Explore Aircraft
          </Link>
          <Link
            href="#weapons"
            className="rounded-lg border border-white/30 bg-black/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/60"
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
              className="rounded-xl border border-white/15 bg-black/35 px-4 py-5 backdrop-blur-sm"
            >
              <p className="text-2xl font-black text-sky-300 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
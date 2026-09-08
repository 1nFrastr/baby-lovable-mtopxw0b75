import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-foreground/10">
      {/* 背景图 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1920&q=80)",
        }}
        aria-hidden
      />
      {/* 统一暗色遮罩，整块压暗，干净不花哨 */}
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      {/* 左上角徽章 */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-28 text-center sm:px-6 sm:py-32">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-sky-300">
          For drag &amp; thrust enthusiasts
        </p>

        <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">
          Where the Skies Meet{" "}
          <span className="text-sky-400">Steel &amp; Fire</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
          Aviation history, fighter jets, and the firearms that shaped modern
          warfare — specs, stories, and the machines you love, all in one
          hangar.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#aircraft"
            className="rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-900/40 transition-colors hover:bg-sky-400"
          >
            Explore Aircraft
          </Link>
          <Link
            href="#weapons"
            className="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
          >
            Browse Weapons
          </Link>
        </div>

        <div className="mt-14 grid w-full max-w-2xl grid-cols-3 gap-3 text-center">
          {[
            { value: "100+", label: "Aircraft" },
            { value: "400+", label: "Weapons" },
            { value: "7", label: "Decades" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-background/50 px-4 py-5"
            >
              <p className="text-2xl font-black text-sky-300 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-widest text-white/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
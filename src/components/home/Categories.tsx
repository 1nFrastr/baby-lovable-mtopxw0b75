import Link from "next/link";
import { categories } from "@/data/home";

export default function Categories() {
  return (
    <section id="categories" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
          The Arsenal
        </p>
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
          Choose Your Front
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            href={cat.href}
            className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-b p-6 transition-transform duration-300 hover:-translate-y-1"
            style={{
              backgroundImage: `linear-gradient(${cat.accent}, transparent)`,
            }}
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-foreground/10 text-2xl">
              {cat.icon}
            </span>
            <h3 className="mt-4 text-lg font-bold">{cat.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/60">
              {cat.description}
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-sky-400">
              View catalog →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

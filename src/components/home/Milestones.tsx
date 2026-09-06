import { milestones } from "@/data/home";
import SectionHeading from "@/components/SectionHeading";

export default function Milestones() {
  return (
    <section
      id="history"
      className="border-t border-foreground/10 bg-foreground/5 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The Timeline"
          title="Milestones in Flight"
          description="The breakthroughs that turned humanity's dream of the sky into reality."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-foreground/10 sm:left-1/2" />
          <div className="space-y-8">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="relative flex items-start gap-6 pl-10 sm:w-1/2 sm:pl-0"
              >
                <div
                  className={
                    "flex " +
                    (indexIsOdd(m.year)
                      ? "sm:mr-auto sm:-translate-x-full sm:flex-row-reverse sm:pr-12 sm:text-right"
                      : "sm:ml-auto sm:pl-12")
                  }
                >
                  <div className="rounded-xl border border-foreground/10 bg-background p-4">
                    <span className="text-xs font-black tracking-widest text-sky-400">
                      {m.year}
                    </span>
                    <p className="mt-1 text-sm font-medium text-foreground/80">
                      {m.event}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function indexIsOdd(year: string) {
  return Number(year) % 2 !== 0;
}

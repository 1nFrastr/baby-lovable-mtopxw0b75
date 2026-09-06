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
          {/* center line */}
          <div className="absolute left-[13px] top-2 bottom-2 w-px bg-foreground/15 sm:left-1/2" />

          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="relative sm:grid sm:grid-cols-2 sm:gap-10"
              >
                {/* dot */}
                <div
                  className="absolute left-0 top-5 z-10 h-[27px] w-[27px] rounded-full border-4 border-background bg-sky-400 sm:left-1/2 sm:-translate-x-1/2"
                />

                {/* card */}
                <div
                  className={
                    "pl-11 sm:pl-0 " +
                    (i % 2 === 0
                      ? "sm:col-start-1 sm:pr-12 sm:text-right"
                      : "sm:col-start-2 sm:pl-12")
                  }
                >
                  <div className="inline-block rounded-xl border border-foreground/10 bg-background p-5 shadow-lg shadow-black/20">
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

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-foreground/60">{description}</p>
      ) : null}
    </div>
  );
}
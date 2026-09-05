export default function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-foreground/60 sm:flex-row sm:px-6">
        <p>
          <span className="font-semibold text-foreground">Wing &amp; Steel</span>{" "}
          — for aviation and military tech enthusiasts.
        </p>
        <p>Air superiority starts with knowledge. ✈️</p>
      </div>
    </footer>
  );
}
import Link from "next/link";

const navLinks = [
  { label: "Aircraft", href: "/aircraft" },
  { label: "Weapons", href: "/weapons" },
  { label: "Favorites", href: "/favorites" },
  { label: "Compare", href: "/compare" },
  { label: "Search", href: "/search" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-sky-500 to-amber-500 text-lg font-black text-background">
            W
          </span>
          <span className="text-lg font-bold tracking-tight">
            Wing <span className="text-sky-400">&amp;</span> Steel
          </span>
        </Link>
        <div className="flex items-center gap-5 text-sm font-medium text-foreground/70">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#learn-more", label: "Overview" },
  { href: "#features", label: "Features" },
  { href: "#theology", label: "Theology" },
];

export default function Topbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#top"
          className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground"
        >
          Steadfast
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              asChild
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </nav>
        <Button asChild variant="outline" size="sm" className="w-auto">
          <a href="#waitlist">Join the waitlist</a>
        </Button>
      </div>
    </header>
  );
}

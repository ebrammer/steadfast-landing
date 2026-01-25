import Image from "next/image";

import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#learn-more", label: "Overview" },
  { href: "#features", label: "Practices" },
  { href: "#scripture", label: "Scripture" },
  { href: "#theology", label: "Theology" },
];

export default function Topbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
            <Image
              src="/images/faviconOrange.png"
              alt="Steadfast emblem"
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Steadfast
          </span>
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
        <Button
          asChild
          variant="default"
          size="sm"
          className="w-auto rounded-full px-5"
        >
          <a href="#waitlist">Join the waitlist</a>
        </Button>
      </div>
    </header>
  );
}

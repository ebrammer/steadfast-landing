import Image from "next/image";

import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#features", label: "Features" },
  { href: "#waitlist", label: "Waitlist" },
];

export default function Topbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/images/faviconOrange.png"
            alt="Steadfast: Faith emblem"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Steadfast: Faith
          </span>
        </a>
        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
          aria-label="Primary"
        >
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

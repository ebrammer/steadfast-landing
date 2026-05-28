"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function V2Topbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 4);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white/90 backdrop-blur-xl transition-shadow duration-200 dark:bg-neutral-950/90",
        isScrolled && "shadow-[0_10px_24px_rgba(15,23,42,0.08)]",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#v2-top" className="flex min-w-0 items-center gap-3">
          <Image
            src="/images/faviconOrange.png"
            alt="Steadfast: Faith emblem"
            width={32}
            height={32}
            className="h-8 w-8 shrink-0"
            priority
          />
          <span className="truncate text-sm font-semibold text-neutral-950 dark:text-neutral-100">
            Steadfast: Faith
          </span>
        </a>
        <nav
          aria-label="Landing navigation"
          className="hidden items-center gap-6 text-sm font-medium text-neutral-600 md:flex dark:text-neutral-400"
        >
          <a
            className="transition hover:text-neutral-950 dark:hover:text-white"
            href="#practice"
          >
            Practice
          </a>
          <a
            className="transition hover:text-neutral-950 dark:hover:text-white"
            href="#features"
          >
            Features
          </a>
          <a
            className="transition hover:text-neutral-950 dark:hover:text-white"
            href="#download"
          >
            Download
          </a>
        </nav>
        <Button
          type="button"
          size="sm"
          className="h-9 rounded-full bg-emerald-950 px-4 text-white shadow-none hover:bg-emerald-900 dark:bg-orange-400 dark:text-neutral-950 dark:hover:bg-orange-300"
        >
          Download
        </Button>
      </div>
    </header>
  );
}

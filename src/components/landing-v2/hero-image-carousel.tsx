"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

const heroImages = [
  {
    src: "/images/website/iphone-home.png",
    alt: "Steadfast home dashboard on iPhone.",
  },
  {
    src: "/images/website/iphone-scripture.png",
    alt: "Steadfast scripture passage screen on iPhone.",
  },
  {
    src: "/images/website/iphone-routine.png",
    alt: "Steadfast routine screen on iPhone.",
  },
  {
    src: "/images/website/iphone-connections.png",
    alt: "Steadfast connections screen on iPhone.",
  },
];

export default function HeroImageCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSelectedIndex((index) => (index + 1) % heroImages.length);
    }, 3800);

    return () => window.clearInterval(timer);
  }, []);

  const selected = heroImages[selectedIndex];

  return (
    <div className="relative mx-auto flex min-h-[560px] w-full max-w-3xl items-center justify-center sm:min-h-[660px] lg:min-h-[720px]">
      <div className="absolute left-1/2 top-1/2 h-[72%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-100/70 blur-3xl dark:bg-teal-400/10" />
      <div className="relative z-10 flex flex-col items-center gap-5">
        <Image
          key={selected.src}
          src={selected.src}
          alt={selected.alt}
          width={1050}
          height={2283}
          className="h-auto w-[62vw] max-w-[360px] rounded-[40px] border border-white/90 object-contain shadow-[0_38px_96px_rgba(15,23,42,0.24)] transition duration-500 sm:w-[42vw] lg:w-[27vw] dark:border-white/10 dark:shadow-[0_38px_96px_rgba(0,0,0,0.62)]"
          sizes="(min-width: 1024px) 27vw, (min-width: 640px) 42vw, 62vw"
          priority
        />
        <div className="flex items-center gap-2" aria-label="Hero image slides">
          {heroImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Show screenshot ${index + 1}`}
              aria-pressed={index === selectedIndex}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950",
                index === selectedIndex
                  ? "w-7 bg-orange-500"
                  : "w-2.5 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

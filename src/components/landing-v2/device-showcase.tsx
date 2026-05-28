"use client";

import { useState } from "react";
import Image from "next/image";
import {
  SquaresFour,
  DeviceMobile,
  DeviceTablet,
  type Icon,
} from "@phosphor-icons/react";

import AppStoreBadge from "@/components/landing-v2/app-store-badge";
import { cn } from "@/lib/utils";

type Platform = {
  name: string;
  Icon: Icon;
  image: string;
  alt: string;
  width: number;
  height: number;
  imageClassName: string;
};

const platforms: Platform[] = [
  {
    name: "iPhone",
    Icon: DeviceMobile,
    image: "/images/app-store/iphone-home.png",
    alt: "Steadfast home dashboard on iPhone.",
    width: 1242,
    height: 2688,
    imageClassName: "max-w-sm rounded-[32px]",
  },
  {
    name: "iPad",
    Icon: DeviceTablet,
    image: "/images/app-store/ipad-home.png",
    alt: "Steadfast home dashboard on iPad.",
    width: 2064,
    height: 2752,
    imageClassName: "max-w-2xl rounded-[24px]",
  },
  {
    name: "Connected",
    Icon: SquaresFour,
    image: "/images/app-store/ipad-connections.png",
    alt: "Steadfast connections screen on iPad.",
    width: 2064,
    height: 2752,
    imageClassName: "max-w-2xl rounded-[24px]",
  },
];

export default function DeviceShowcase() {
  const [selectedName, setSelectedName] = useState(platforms[0].name);
  const selected =
    platforms.find((platform) => platform.name === selectedName) ?? platforms[0];

  return (
    <section className="bg-white pb-16 pt-8 dark:bg-neutral-950 sm:pb-24 sm:pt-10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <h2 className="text-center text-4xl font-semibold leading-tight text-neutral-800 dark:text-neutral-100 sm:text-5xl">
          Close at hand across your day
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-8 text-neutral-600 dark:text-neutral-300">
          Home keeps the next practice nearby, while the full library stays
          ready when you need to browse, connect, or return later.
        </p>
        <div
          className="mt-6 flex justify-center"
          role="tablist"
          aria-label="Device download options"
        >
          <div className="flex flex-wrap justify-center gap-8">
            {platforms.map((platform) => {
              const isSelected = platform.name === selected.name;
              const PlatformIcon = platform.Icon;

              return (
                <button
                  key={platform.name}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls="device-showcase-panel"
                  onClick={() => setSelectedName(platform.name)}
                  className={cn(
                    "relative inline-flex items-center gap-2 border-0 bg-transparent px-0 pb-2 text-xl font-medium transition",
                    "after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-12 after:-translate-x-1/2 after:rounded-full after:transition",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950",
                    isSelected
                      ? "text-neutral-900 after:bg-orange-400 dark:text-neutral-50"
                      : "text-neutral-400 after:bg-transparent hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-200",
                  )}
                >
                  <PlatformIcon
                    aria-hidden="true"
                    className="size-6"
                    weight={isSelected ? "regular" : "light"}
                  />
                  {platform.name}
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <AppStoreBadge />
        </div>

        <div
          id="device-showcase-panel"
          role="tabpanel"
          className="mt-14 flex justify-center sm:mt-20"
        >
          <div className="flex w-full items-center justify-center">
            <Image
              key={selected.name}
              src={selected.image}
              alt={selected.alt}
              width={selected.width}
              height={selected.height}
              className={cn(
                "h-auto w-full object-contain shadow-[0_28px_65px_rgba(15,23,42,0.16)] dark:shadow-[0_28px_65px_rgba(0,0,0,0.45)]",
                selected.imageClassName,
              )}
              sizes="(min-width: 1024px) 72vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

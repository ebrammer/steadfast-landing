import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <Badge className="w-fit">Now in development</Badge>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
            Scripture-shaped faithfulness in ordinary Christian life
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Steadfast: Faith helps Christians keep a daily rhythm of prayer,
            journaling, and Scripture meditation and memorization.
          </p>
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="w-full rounded-full px-6 sm:w-auto"
            >
              <a href="#waitlist">Join the waitlist</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full rounded-full px-6 sm:w-auto"
            >
              <a href="#overview">Learn more</a>
            </Button>
          </div>
          <div className="w-full pt-6">
            <div
              className="relative overflow-hidden rounded-[32px]"
              style={{
                backgroundImage: "url('/images/gridBottom.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="relative flex justify-center px-6 py-12 sm:px-12">
                <Image
                  src="/images/devices.png"
                  alt="Steadfast: Faith on multiple devices"
                  width={1400}
                  height={900}
                  className="h-auto w-full max-w-5xl object-contain"
                  sizes="(min-width: 1024px) 70vw, 100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
          <div className="w-full max-w-4xl pt-6">
            <Card className="border-transparent bg-card shadow-md">
              <CardContent className="p-4 sm:p-6">
                <Image
                  src="/images/screenMockupCutoff.png"
                  alt="Steadfast: Faith app preview"
                  width={1200}
                  height={900}
                  className="h-auto w-full rounded-[32px] object-contain"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  priority
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

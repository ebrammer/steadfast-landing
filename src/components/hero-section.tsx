import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section className="py-24 sm:py-36">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <Badge variant="accent" className="w-fit">
                Embrace steady faithfulness
              </Badge>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
                A steady rule of life, rooted in Scripture.
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Steadfast helps Christians keep a daily rhythm of Scripture
                reading, prayer, and journaling, without distraction.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
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
                <a href="#learn-more">Learn more</a>
              </Button>
            </div>
          </div>
          <Card className="bg-card shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <Image
                src="/images/devices.png"
                alt="Steadfast app preview on devices"
                width={900}
                height={720}
                className="h-auto w-full rounded-2xl object-contain"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

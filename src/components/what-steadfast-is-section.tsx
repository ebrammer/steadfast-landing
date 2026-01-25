import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WhatSteadfastIsSection() {
  return (
    <section id="learn-more" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <Card className="bg-card/80">
            <CardHeader className="space-y-4">
              <CardTitle className="text-2xl sm:text-3xl">
                Built for faithfulness, not noise.
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 text-base leading-7 text-muted-foreground">
              <p>
                Steadfast is a devotional companion for ordinary, enduring
                Christian practice.
              </p>
              <p>
                It brings Scripture reading, prayer, and journaling into a
                single quiet space so believers remain attentive to God&apos;s Word
                and the means of grace in a distracted age.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/80">
            <CardContent className="p-4 sm:p-6">
              <Image
                src="/images/focusModeNew.png"
                alt="Focused Scripture reading screen in Steadfast"
                width={820}
                height={640}
                className="h-auto w-full rounded-md object-contain grayscale"
                sizes="(min-width: 1024px) 36vw, 100vw"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

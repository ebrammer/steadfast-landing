import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WhatSteadfastIsSection() {
  return (
    <section id="learn-more" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-6">
            <Badge className="w-fit">Quiet companion</Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Built for faithfulness, not noise.
            </h2>
            <div className="space-y-4 text-base leading-7 text-muted-foreground">
              <p>
                Steadfast is a devotional companion for ordinary, enduring
                Christian practice.
              </p>
              <p>
                It brings Scripture reading, prayer, and journaling into a
                single quiet space so believers remain attentive to God&apos;s Word
                and the means of grace in a distracted age.
              </p>
            </div>
          </div>
          <Card className="bg-card shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <Image
                src="/images/screenMockupCutoff.png"
                alt="Steadfast reading and prayer interface"
                width={820}
                height={860}
                className="h-auto w-full rounded-2xl object-contain"
                sizes="(min-width: 1024px) 36vw, 100vw"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

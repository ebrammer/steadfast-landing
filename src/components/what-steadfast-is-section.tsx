import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WhatSteadfastIsSection() {
  return (
    <section id="learn-more" className="py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Card className="bg-card/80">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">
              Built for faithfulness, not noise.
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Steadfast is a devotional companion for ordinary, enduring
              Christian practice.
            </p>
            <p>
              It brings Scripture reading, prayer, and journaling into a single
              quiet space so believers remain attentive to God&apos;s Word and the
              means of grace in a distracted age.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

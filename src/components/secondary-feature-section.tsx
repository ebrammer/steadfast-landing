import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function SecondaryFeatureSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
          <Card className="border-transparent bg-card shadow-md">
            <CardContent className="p-4 sm:p-6">
              <Image
                src="/images/screenMockupCutoff.png"
                alt="Steadfast: Faith devotional rhythm preview"
                width={920}
                height={820}
                className="h-auto w-full rounded-[28px] object-contain"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Badge className="w-fit">Grounded practice</Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Built for faithfulness, not noise.
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Steadfast: Faith is a devotional companion for ordinary,
                enduring Christian practice.
              </p>
              <p>
                It brings Scripture reading, prayer, and journaling into a
                single quiet space so believers remain attentive to God&apos;s Word
                and the means of grace in a distracted age.
              </p>
              <p>
                Steadfast: Faith is shaped by historic Protestant spirituality:
                Scripture-centered, ordinary, and durable. It is not a
                replacement for the local church; it is a tool to support daily
                faithfulness within it.
              </p>
            </div>
            <Card className="border-transparent bg-secondary/70 shadow-sm">
              <CardContent className="space-y-3 p-6 text-sm leading-relaxed text-muted-foreground">
                <p>
                  But as for you, continue in what you have learned and have
                  firmly believed, knowing from whom you learned it and how from
                  childhood you have been acquainted with the sacred writings,
                  which are able to make you wise for salvation through faith in
                  Christ Jesus.
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  2 Timothy 3:14-15 (ESV)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

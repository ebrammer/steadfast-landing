import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Scripture",
    tagline: "Read the Bible with focus.",
    description:
      "Follow structured reading plans or read freely, without feeds or interruptions.",
  },
  {
    title: "Prayer",
    tagline: "Pray deliberately.",
    description:
      "Record prayer requests, note answers, and return to them over time.",
  },
  {
    title: "Journaling",
    tagline: "Write with intention.",
    description: "Keep reflections and records of God's faithfulness in your own words.",
  },
  {
    title: "Offline-first",
    tagline: "Available wherever you are.",
    description:
      "Designed to work without constant connectivity, respecting attention and time.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
          <Card className="bg-card shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <Image
                src="/images/focusModeNew.png"
                alt="Scripture reading mode in Steadfast"
                width={820}
                height={640}
                className="h-auto w-full rounded-2xl object-contain"
                sizes="(min-width: 1024px) 36vw, 100vw"
              />
            </CardContent>
          </Card>
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="w-fit">Practices</Badge>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Practices held together.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                A single, calm space for Scripture, prayer, and journaling built
                for daily use, not digital noise.
              </p>
            </div>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <Card key={feature.title} className="bg-card/80">
                  <CardHeader className="space-y-2 pb-3">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="px-2 py-1">
                        {String(index + 1).padStart(2, "0")}
                      </Badge>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base font-medium text-foreground">
                      {feature.tagline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

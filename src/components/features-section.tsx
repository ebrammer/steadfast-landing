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
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Features
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Practices held together.
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-card/80">
                <CardHeader className="space-y-3">
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
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
    </section>
  );
}

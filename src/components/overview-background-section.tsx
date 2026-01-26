import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function OverviewBackgroundSection() {
  return (
    <section id="overview" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <Card
          className="relative overflow-hidden border-transparent bg-card shadow-sm"
          style={{
            backgroundImage: "url('/images/gridBottom.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-background/85" />
          <CardContent className="relative space-y-4 p-8 sm:p-12">
            <Badge className="w-fit">Quiet overview</Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A gentle view of daily faithfulness.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              See Scripture, prayer, and reflection together at a glance. The
              overview keeps your attention on the ordinary means of grace
              without noise or distraction.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

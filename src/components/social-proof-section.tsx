import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function SocialProofSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <Card className="border-transparent bg-card/80 shadow-sm">
          <CardContent className="space-y-4 py-10 text-center">
            <Badge className="mx-auto w-fit">Credibility</Badge>
            <p className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Placeholder metric
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Add a single metric or milestone that reflects real adoption or
              participation once available.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

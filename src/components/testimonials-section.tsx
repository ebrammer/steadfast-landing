import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Placeholder: A short reflection from a beta user about staying attentive to Scripture.",
    name: "Early reader",
  },
  {
    quote:
      "Placeholder: A sentence about returning to prayer requests and seeing the Lord's faithfulness.",
    name: "Prayer partner",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <div className="space-y-8">
          <div className="space-y-3">
            <Badge className="w-fit">Stories</Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Stories taking shape.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              We will share real testimonies here as Steadfast moves through
              private beta.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-card/80">
                <CardContent className="space-y-4 p-6">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {testimonial.quote}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

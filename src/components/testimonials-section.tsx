import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Placeholder: A short reflection from a beta user about staying attentive to Scripture.",
    name: "Early reader",
    initials: "ER",
  },
  {
    quote:
      "Placeholder: A sentence about returning to prayer requests and seeing the Lord's faithfulness.",
    name: "Prayer partner",
    initials: "PP",
  },
  {
    quote:
      "Placeholder: A brief note about the gift of consistency in daily devotion.",
    name: "Steady learner",
    initials: "SL",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="space-y-10">
          <div className="space-y-4 text-center">
            <Badge className="mx-auto w-fit">Testimonies</Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Stories taking shape.
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
              We will share real testimonies here as Steadfast: Faith moves
              through private beta.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-card/80 shadow-sm">
                <CardContent className="space-y-5 p-6">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-foreground">
                      {testimonial.initials}
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      {testimonial.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

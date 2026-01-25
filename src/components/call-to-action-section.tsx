import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CallToActionSection() {
  return (
    <section id="waitlist" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Card className="bg-secondary/60">
          <CardHeader className="space-y-4">
            <CardTitle className="text-3xl sm:text-4xl">
              Faithfulness is cultivated over time.
            </CardTitle>
            <p className="text-base leading-relaxed text-muted-foreground">
              Steadfast is in development. Join the waitlist to follow along as
              we build.
            </p>
          </CardHeader>
          <CardFooter className="pt-2">
            <Button size="lg" className="w-full sm:w-auto">
              Join the waitlist
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

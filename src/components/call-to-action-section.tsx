import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CallToActionSection() {
  return (
    <section id="waitlist" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Card className="bg-primary text-primary-foreground shadow-lg">
          <CardHeader className="space-y-4">
            <CardTitle className="text-3xl sm:text-4xl">
              Faithfulness is cultivated over time.
            </CardTitle>
            <p className="text-base leading-relaxed text-primary-foreground/90">
              Steadfast is in development. Join the waitlist to follow along as
              we build.
            </p>
          </CardHeader>
          <CardFooter className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <Button
              size="lg"
              variant="secondary"
              className="w-full rounded-full px-6 sm:w-auto"
            >
              Join the waitlist
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="w-full rounded-full px-6 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
              asChild
            >
              <a href="/docs/Online_Privacy_Policy.pdf" target="_blank" rel="noreferrer">
                Privacy policy
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

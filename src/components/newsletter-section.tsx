import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <Card className="border-transparent bg-foreground text-background shadow-md">
          <CardContent className="flex flex-col gap-8 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Join the newsletter.
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-background/80">
                Receive occasional updates as Steadfast: Faith moves through
                development. No spam, no noise.
              </p>
            </div>
            <div className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Email address"
                className="border-white/30 bg-background/10 text-background placeholder:text-background/70"
              />
              <Button className="w-full rounded-full px-6 sm:w-auto">
                Notify me
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

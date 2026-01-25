import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <div className="flex flex-col gap-8">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Steadfast
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              A steady rule of life, rooted in Scripture.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Steadfast helps Christians keep a daily rhythm of Scripture
              reading, prayer, and journaling, without distraction.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#waitlist">Join the waitlist</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a href="#learn-more">Learn more</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

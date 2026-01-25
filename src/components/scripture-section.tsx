import { Card, CardContent } from "@/components/ui/card";

export default function ScriptureSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Card className="bg-card/80">
          <CardContent className="space-y-4 py-8 text-base leading-relaxed text-muted-foreground">
            <blockquote className="space-y-4">
              <p>
                But as for you, continue in what you have learned and have firmly
                believed, knowing from whom you learned it and how from childhood
                you have been acquainted with the sacred writings, which are able
                to make you wise for salvation through faith in Christ Jesus.
              </p>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                2 Timothy 3:14-15 (ESV)
              </p>
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TheologicalOrientationSection() {
  return (
    <section id="theology" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Card className="bg-card/80">
          <CardHeader className="space-y-4">
            <CardTitle className="text-2xl sm:text-3xl">
              Grounded in historic Christian practice.
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 text-base leading-7 text-muted-foreground">
            <p>
              Steadfast is shaped by historic Protestant spirituality:
              Scripture-centered, ordinary, and durable.
            </p>
            <p>
              It is not a replacement for the local church; it is a tool to
              support daily faithfulness within it.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

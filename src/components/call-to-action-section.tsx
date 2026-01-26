import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CallToActionSection() {
  return (
    <section id="waitlist" className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <Card className="border-transparent bg-card shadow-md">
          <CardContent className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Faithfulness is cultivated over time.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Steadfast is in development. Join the waitlist to follow along
                as we build.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button size="lg" className="w-full rounded-full px-6 sm:w-auto">
                  Join the waitlist
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full px-6 sm:w-auto"
                >
                  <a
                    href="/docs/Online_Privacy_Policy.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Privacy policy
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image
                src="/images/devices.png"
                alt="Steadfast preview on devices"
                width={820}
                height={620}
                className="h-auto w-full rounded-[28px] object-contain"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

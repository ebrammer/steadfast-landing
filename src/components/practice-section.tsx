import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const highlights = [
  {
    title: "Offline-first by design",
    description: "Stay present even when a connection is not.",
  },
  {
    title: "No feeds or ads",
    description: "A quiet space that protects attention and focus.",
  },
];

export default function PracticeSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-6">
            <Badge className="w-fit">Daily rhythm</Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Your rule of life starts here.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Steadfast is built to support steady practice: Scripture, prayer,
              and reflection kept close, not cluttered.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <Card key={item.title} className="bg-card/80">
                  <CardHeader className="space-y-2 pb-3">
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <Card className="bg-card shadow-md">
              <CardContent className="p-4">
                <Image
                  src="/images/addNewRoutine.png"
                  alt="Creating a new routine in Steadfast"
                  width={720}
                  height={540}
                  className="h-auto w-full rounded-xl object-cover"
                />
              </CardContent>
            </Card>
            <Card className="bg-card shadow-md">
              <CardContent className="p-4">
                <Image
                  src="/images/focusMode.png"
                  alt="Focused reading mode in Steadfast"
                  width={720}
                  height={540}
                  className="h-auto w-full rounded-xl object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

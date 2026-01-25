import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

const previews = [
  {
    src: "/images/focusMode.png",
    alt: "Focused reading view in Steadfast",
    label: "Focused reading",
  },
  {
    src: "/images/addNewRoutine.png",
    alt: "Routine builder in Steadfast",
    label: "Daily routines",
  },
  {
    src: "/images/gridBottom.png",
    alt: "Daily overview grid in Steadfast",
    label: "Quiet overview",
  },
];

export default function PreviewStripSection() {
  return (
    <section className="relative -mt-10 pb-20 sm:-mt-16 sm:pb-28">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <div className="flex gap-5 overflow-x-auto pb-2">
          {previews.map((preview) => (
            <Card
              key={preview.label}
              className="min-w-[220px] flex-1 bg-card shadow-md"
            >
              <CardContent className="space-y-3 p-4">
                <Image
                  src={preview.src}
                  alt={preview.alt}
                  width={520}
                  height={420}
                  className="h-44 w-full rounded-xl object-cover"
                />
                <p className="text-sm font-medium text-foreground">
                  {preview.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

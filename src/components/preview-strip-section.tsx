import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

const previews = [
  {
    src: "/images/focusMode.png",
    alt: "Focused reading view in Steadfast: Faith",
    label: "Focused reading",
    offsetClass: "sm:translate-y-6",
  },
  {
    src: "/images/addNewRoutine.png",
    alt: "Routine builder in Steadfast: Faith",
    label: "Daily routines",
    offsetClass: "sm:-translate-y-2",
  },
  {
    src: "/images/screenMockupCutoff.png",
    alt: "Steadfast: Faith screen preview",
    label: "Guided practice",
    offsetClass: "sm:translate-y-10",
  },
];

export default function PreviewStripSection() {
  return (
    <section className="relative -mt-16 pb-24 sm:-mt-24 sm:pb-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="flex items-end gap-6 overflow-x-auto pb-2">
          {previews.map((preview) => (
            <Card
              key={preview.label}
              className={`min-w-[220px] flex-1 border-transparent bg-card shadow-md ${preview.offsetClass}`}
            >
              <CardContent className="space-y-3 p-4">
                <Image
                  src={preview.src}
                  alt={preview.alt}
                  width={520}
                  height={420}
                  className="h-44 w-full rounded-2xl object-cover"
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

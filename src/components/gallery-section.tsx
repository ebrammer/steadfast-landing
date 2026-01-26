import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const galleryItems = [
  {
    title: "Prayer, remembered",
    description: "Carry requests forward and return to them with care.",
    image: "/images/focusMode.png",
  },
  {
    title: "Scripture, centered",
    description: "Keep the Word close to every note and reflection.",
    image: "/images/focusModeNew.png",
  },
  {
    title: "A daily rhythm",
    description: "A quiet place for faithful, ordinary practice.",
    image: "/images/addNewRoutine.png",
  },
];

export default function GallerySection() {
  return (
    <section id="stories" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <Badge className="mx-auto w-fit">Stories</Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A quiet story taking shape.
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
              This space will be used to show how Scripture, prayer, and
              reflection hold together over time.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {galleryItems.map((item) => (
              <Card
                key={item.title}
                className="relative overflow-hidden border-transparent bg-card shadow-md"
              >
                <CardContent className="relative h-80 p-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-0 left-0 right-0 space-y-2 p-6 text-white">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

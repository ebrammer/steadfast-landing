import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Prayer, practiced attentively",
    description:
      "Capture prayer requests deliberately, not as fleeting notes but as matters to be brought before God.",
    detail:
      "Organize prayers by people or lists, return to them over time, and keep a record of how the Lord answers.",
  },
  {
    title: "Scripture, held close",
    description:
      "Save Scripture passages and connect them directly to prayers, journal entries, and reflections.",
    detail:
      "Scripture remains central, not scattered across apps or lost in bookmarks.",
  },
  {
    title: "Memorization, through repetition",
    description:
      "Commit God's Word to memory using varied, deliberate exercises: recalling words, completing passages, typing from memory, or reordering sections.",
    detail:
      "These tools are designed to support steady engagement, not quick results.",
  },
  {
    title: "Journaling, with purpose",
    description:
      "Record thoughts, prayers, observations, and daily reflections in one place.",
    detail:
      "Journals can be linked directly to related prayers and Scripture, preserving context and continuity over time.",
  },
  {
    title: "A rule of life, made practical",
    description:
      "Steadfast is organized around a daily devotional routine, the heart of the app.",
    detail:
      "Each routine can draw from specific prayers, people, lists, Scripture collections, or reading plans, forming a consistent pattern of practice.",
  },
  {
    title: "Scripture reading, without friction",
    description:
      "Follow structured Bible reading plans or read freely.",
    detail:
      "When desired, Scripture links open directly in your preferred Bible or audio Bible app, allowing you to read or listen without interruption.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="w-fit">Features</Badge>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Practices held together.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Steadfast gathers Scripture, prayer, and journaling into one
                place so daily faithfulness remains clear and uninterrupted.
              </p>
            </div>
            <Card className="rounded-3xl border-transparent bg-card/80 shadow-lg">
              <CardContent className="divide-y divide-border/70 px-6 py-2">
                {features.map((feature) => (
                  <div key={feature.title} className="space-y-3 py-5">
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.detail}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="rounded-3xl border-transparent bg-card shadow-xl">
              <CardContent className="p-4 sm:p-6">
                <Image
                  src="/images/focusModeNew.png"
                  alt="Scripture reading mode in Steadfast"
                  width={820}
                  height={640}
                  className="h-auto w-full rounded-3xl object-contain"
                  sizes="(min-width: 1024px) 36vw, 100vw"
                />
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-transparent bg-card/80 shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <Image
                  src="/images/addNewRoutine.png"
                  alt="Building a daily devotional routine in Steadfast"
                  width={820}
                  height={640}
                  className="h-auto w-full rounded-3xl object-contain"
                  sizes="(min-width: 1024px) 36vw, 100vw"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

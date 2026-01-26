import Image from "next/image";

import { Badge } from "@/components/ui/badge";

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
      "Steadfast: Faith is organized around a daily devotional routine, the heart of the app.",
    detail:
      "Each routine can draw from specific prayers, people, lists, Scripture collections, or reading plans, forming a consistent pattern of practice.",
  },
  {
    title: "Scripture reading, without friction",
    description: "Follow structured Bible reading plans or read freely.",
    detail:
      "When desired, Scripture links open directly in your preferred Bible or audio Bible app, allowing you to read or listen without interruption.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[0.95fr,1.05fr] md:items-start">
          <div className="relative overflow-hidden rounded-[32px] bg-card shadow-sm">
            <div className="flex justify-center px-6 py-10 sm:px-10">
              <Image
                src="/images/focusModeNew.png"
                alt="Focused Scripture view in Steadfast: Faith"
                width={1200}
                height={900}
                className="h-auto w-full max-w-xl object-contain"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="w-fit">Features</Badge>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Practices held together.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Steadfast: Faith gathers Scripture, prayer, and journaling into
                one place so daily faithfulness remains clear and uninterrupted.
              </p>
            </div>
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary/80" />
                  <div className="space-y-2">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

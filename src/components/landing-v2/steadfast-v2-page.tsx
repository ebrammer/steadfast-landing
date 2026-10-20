import Image from "next/image";
import {
  Bell,
  BookBookmark,
  CalendarCheck,
  Compass,
  Fire,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react/dist/lib/types";

import DeviceShowcase from "@/components/landing-v2/device-showcase";
import { getAppStoreUrl } from "@/components/landing-v2/app-store-link";
import HeroImageCarousel from "@/components/landing-v2/hero-image-carousel";
import V2DownloadFooter from "@/components/landing-v2/v2-download-footer";
import V2Topbar from "@/components/landing-v2/v2-topbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const featureStories = [
  {
    eyebrow: "Prayer",
    title: "Remember the people and needs you carry.",
    body: "Save prayers in plain words, connect them to people and lists, and return without turning prayer into a performance system.",
    bullets: [
      "Keep requests, updates, answers, and people together.",
      "Return gently from Home, a list, or a person profile.",
      "Connect prayers to Scripture, journals, routines, and reminders.",
    ],
    image: "/images/website/iphone-prayer.png",
    alt: "Steadfast prayer detail screen with prayer history and notes.",
  },
  {
    eyebrow: "Scripture",
    title: "Keep passages close enough to return to.",
    body: "Save Scripture for prayer, study, encouragement, or memorization, then connect it to the places it shaped your day.",
    bullets: [
      "Save passages you want nearby for prayer, study, or encouragement.",
      "Open passages in your preferred Bible app when you are ready to read.",
      "Group verses into collections around themes, seasons, or needs.",
    ],
    image: "/images/website/iphone-scripture.png",
    alt: "Steadfast scripture passage screen with saved passage details.",
  },
  {
    eyebrow: "Memorization",
    title: "Practice Scripture gently over time.",
    body: "Use short, repeatable tools for recall, review, and maintenance so familiar words stay near without pressure.",
    bullets: [
      "Move slowly from learning to review to lighter maintenance.",
      "Practice with flash cards, word recall, speak and check, and more.",
      "Use a few attentive minutes instead of forcing long sessions.",
    ],
    image: "/images/website/iphone-memorization.png",
    alt: "Steadfast memorization tools screen with practice options.",
  },
  {
    eyebrow: "Routines",
    title: "Build rhythms small enough to repeat.",
    body: "Bring prayers, passages, reading plans, people, and reflection into a repeatable flow for ordinary days.",
    bullets: [
      "Prepare the next small step before the day gets crowded.",
      "Combine prayer, Scripture, people, reading, and reflection.",
      "Adjust the rhythm when the season changes.",
    ],
    image: "/images/website/iphone-routine.png",
    alt: "Steadfast routine screen with a list of routine items.",
  },
];

const supportingFeatures = [
  {
    title: "Home for now",
    body: "Keep the prayers, routines, readings, and quick actions you want close this week.",
  },
  {
    title: "Library for everything",
    body: "Browse the full record when you need older prayers, passages, entries, or plans.",
  },
  {
    title: "Lists and people",
    body: "Keep care personal by gathering prayers around names, families, teams, or seasons.",
  },
  {
    title: "Journals and entries",
    body: "Give reflection, notes, gratitude, and memories a place to return to.",
  },
  {
    title: "Reading plans",
    body: "Keep coming back to Scripture without losing your place.",
  },
  {
    title: "Reminders",
    body: "Let important prayers and practices resurface at the right time.",
  },
];

const practiceCards: Array<{
  title: string;
  body: string;
  Icon?: Icon;
  iconAsset?: string;
}> = [
  {
    title: "Prayer",
    body: "Create prayers, track updates, and mark answered prayers.",
    Icon: Fire,
  },
  {
    title: "Scripture",
    body: "Save passages, organize them, and open them later.",
    iconAsset: "/images/website/bible-regular.svg",
  },
  {
    title: "Memorize",
    body: "Practice saved Scripture with memorization tools.",
    iconAsset: "/images/website/bible-regular.svg",
  },
  {
    title: "Reading Plans",
    body: "Create plans and track reading progress.",
    Icon: Compass,
  },
  {
    title: "Journals",
    body: "Write entries and organize them in journals.",
    Icon: BookBookmark,
  },
  {
    title: "Routines",
    body: "Group practices into a repeatable routine.",
    Icon: CalendarCheck,
  },
  {
    title: "Reminders",
    body: "Set reminders for prayers, Scripture, routines, and more.",
    Icon: Bell,
  },
];

function Hero() {
  return (
    <section
      id="v2-top"
      className="relative overflow-hidden bg-white pb-12 pt-16 dark:bg-neutral-950 sm:pb-16 sm:pt-24"
    >
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <Badge className="mb-7 border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-400/30 dark:bg-orange-400/10 dark:text-orange-300">
            Now on the App Store
          </Badge>
          <h1 className="text-4xl font-semibold leading-[1.05] text-neutral-950 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
            Grow in Christ One Ordinary Day at a Time
          </h1>
          <p className="mt-7 text-base leading-7 text-neutral-600 dark:text-neutral-300 sm:text-lg">
            You already know what matters. You want to pray more faithfully,
            spend time in Scripture, and remember what God is teaching you.
            Steadfast helps you return to it each day.
          </p>
          <div className="mt-9 flex justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-orange-600 px-7 text-white shadow-lg shadow-orange-600/20 hover:bg-orange-700 dark:bg-orange-500 dark:text-neutral-950 dark:hover:bg-orange-400"
            >
              <a
                href={getAppStoreUrl("hero")}
                target="_blank"
                rel="noreferrer"
              >
                Start Free
              </a>
            </Button>
          </div>
        </div>
        <HeroImageCarousel />
      </div>
    </section>
  );
}

function PracticeQuote() {
  return (
    <section className="bg-neutral-50 py-16 dark:bg-neutral-900 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-5 text-center sm:px-8">
        <blockquote className="mx-auto max-w-3xl border-y border-orange-200/80 py-10 text-2xl font-semibold leading-snug text-neutral-950 dark:border-orange-300/20 dark:text-neutral-50 sm:text-3xl">
          Our mission is to help Christians practice the habits that nurture a
          steadfast faith - through prayer, Scripture, memorization, journaling,
          and reflection.
        </blockquote>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="bg-white py-20 dark:bg-neutral-950 sm:py-28">
      <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-700 dark:text-orange-300">
            Mission
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-neutral-950 dark:text-neutral-50 sm:text-5xl">
            Why We Built Steadfast Faith
          </h2>
        </div>
        <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-neutral-600 dark:text-neutral-300 sm:text-lg">
          <p>
            Growing in Christ rarely happens through dramatic moments. More
            often, it happens through ordinary days.
          </p>
          <p>
            We built Steadfast Faith to support those ordinary practices
            because we believe God often uses ordinary means to produce lasting
            growth.
          </p>
          <ul className="list-disc space-y-2 pl-6 text-neutral-600 dark:text-neutral-300">
            <li>A prayer offered before work.</li>
            <li>A passage read before bed.</li>
            <li>A verse memorized over several weeks.</li>
            <li>
              A reminder of God&apos;s faithfulness during a difficult season.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function PracticeRail() {
  return (
    <section className="bg-neutral-50 py-20 dark:bg-neutral-900 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-700 dark:text-orange-300">
            What you can practice
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 dark:text-neutral-50 sm:text-5xl">
            Simple tools for ordinary faithfulness.
          </h2>
        </div>
        <div className="scrollbar-none mt-10 w-screen overflow-x-auto pb-3">
          <div className="flex w-max gap-4 pr-5 sm:pr-8">
            {practiceCards.map(({ title, body, Icon, iconAsset }) => (
              <article
                key={title}
                className="w-[260px] shrink-0 rounded-[8px] border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 sm:w-[280px]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-orange-50 text-orange-700 dark:bg-orange-400/10 dark:text-orange-300">
                  {Icon ? (
                    <Icon
                      aria-hidden="true"
                      className="size-6"
                      weight="regular"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="size-6 bg-current"
                      style={{
                        WebkitMask: `url(${iconAsset}) center / contain no-repeat`,
                        mask: `url(${iconAsset}) center / contain no-repeat`,
                      }}
                    />
                  )}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureStories() {
  return (
    <section
      id="practice"
      className="bg-white py-20 dark:bg-neutral-950 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-700 dark:text-orange-300">
            Scripture, prayer, and reflection
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 dark:text-neutral-50 sm:text-5xl">
            Designed around practices, not productivity.
          </h2>
        </div>
        <div className="mt-16 space-y-16">
          {featureStories.map((feature, index) => (
            <article
              key={feature.title}
              className="grid gap-10 lg:grid-cols-2 lg:items-center"
            >
              <div
                className={
                  index % 2 === 1
                    ? "mx-auto max-w-xl lg:order-2"
                    : "mx-auto max-w-xl"
                }
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-700 dark:text-orange-300">
                  {feature.eyebrow}
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight text-neutral-950 dark:text-neutral-50 sm:text-4xl">
                  {feature.title}
                </h3>
                <p className="mt-5 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
                  {feature.body}
                </p>
                <ul className="mt-6 space-y-3 text-left text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={1050}
                  height={2283}
                  className="mx-auto h-auto max-h-[720px] w-full max-w-[340px] rounded-[34px] border border-white/90 object-contain shadow-[0_28px_76px_rgba(15,23,42,0.16)] lg:max-w-[300px] dark:border-white/10 dark:shadow-[0_28px_76px_rgba(0,0,0,0.5)]"
                  sizes="(min-width: 1024px) 24vw, 86vw"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConnectedPractice() {
  return (
    <section className="bg-neutral-50 py-20 dark:bg-neutral-900 sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-800 dark:text-teal-300">
            Connected practice
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 dark:text-neutral-50 sm:text-5xl">
            Every practice can stay connected.
          </h2>
          <p className="mt-5 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            A prayer can belong to a person. A passage can shape a routine. A
            journal entry can preserve the story behind what changed.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/website/ipad-connections.png"
            alt="Steadfast connections screen showing related people, scripture, and entries."
            width={1640}
            height={2360}
            className="h-auto w-full max-w-3xl rounded-[30px] border border-white/90 object-contain shadow-[0_32px_84px_rgba(15,23,42,0.16)] lg:max-w-2xl dark:border-white/10 dark:shadow-[0_32px_84px_rgba(0,0,0,0.48)]"
            sizes="(min-width: 1024px) 44vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}

function SocialShareCreator() {
  const bullets = [
    "Start from saved Scripture, prayers, entries, or other Steadfast content.",
    "Switch between post and story formats for the channel you are sharing to.",
    "Use presets, shuffle, recent styles, watermarks, and layout controls to move quickly.",
    "Export or share a finished image without rebuilding the words from scratch.",
  ];

  return (
    <section className="overflow-hidden bg-white py-20 dark:bg-neutral-950 sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="relative mx-auto w-full max-w-4xl lg:order-1">
          <div className="relative grid items-end gap-5 sm:grid-cols-2">
            <figure className="mx-auto w-full max-w-[300px] sm:max-w-[330px] lg:max-w-[280px]">
              <Image
                src="/images/website/social-share-story.png"
                alt="Steadfast social share creator editing a story image."
                width={1050}
                height={2283}
                className="h-auto w-full rounded-[34px] border border-white/90 object-contain shadow-[0_32px_82px_rgba(15,23,42,0.18)] dark:border-white/10 dark:shadow-[0_32px_82px_rgba(0,0,0,0.54)]"
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 42vw, 74vw"
              />
              <figcaption className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                Story format
              </figcaption>
            </figure>
            <figure className="mx-auto hidden w-full max-w-[360px] sm:block lg:max-w-[320px]">
              <Image
                src="/images/website/social-share-post.png"
                alt="Steadfast social share creator preparing a post image."
                width={1640}
                height={2360}
                className="h-auto w-full rounded-[30px] border border-white/90 object-contain shadow-[0_32px_82px_rgba(15,23,42,0.16)] dark:border-white/10 dark:shadow-[0_32px_82px_rgba(0,0,0,0.5)]"
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 44vw, 0px"
              />
              <figcaption className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                Post format
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="mx-auto max-w-xl text-center lg:order-2 lg:mx-0 lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700 dark:text-rose-300">
            Social share creator
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 dark:text-neutral-50 sm:text-5xl">
            Turn saved Scripture into images worth sharing.
          </h2>
          <p className="mt-5 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            Create social-ready images from the passages, prayers, and
            reflections you already keep in Steadfast, then share them with
            care beyond the app.
          </p>
          <ul className="mt-6 space-y-3 text-left text-sm leading-6 text-neutral-600 dark:text-neutral-300">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SupportingFeatures() {
  return (
    <section
      id="features"
      className="bg-white py-20 dark:bg-neutral-950 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800 dark:text-emerald-300">
              More ways to stay with it
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 dark:text-neutral-50 sm:text-5xl">
              The small helps that make a rhythm last.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {supportingFeatures.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[8px] border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <h3 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SteadfastV2Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-100">
      <V2Topbar />
      <main>
        <Hero />
        <PracticeQuote />
        <MissionSection />
        <PracticeRail />
        <FeatureStories />
        <ConnectedPractice />
        <SocialShareCreator />
        <DeviceShowcase />
        <SupportingFeatures />
      </main>
      <V2DownloadFooter />
    </div>
  );
}

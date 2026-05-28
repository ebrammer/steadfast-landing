import Image from "next/image";

import AppStoreBadge from "@/components/landing-v2/app-store-badge";
import DeviceShowcase from "@/components/landing-v2/device-showcase";
import HeroImageCarousel from "@/components/landing-v2/hero-image-carousel";
import V2Topbar from "@/components/landing-v2/v2-topbar";
import { Badge } from "@/components/ui/badge";

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

function Hero() {
  return (
    <section
      id="v2-top"
      className="relative overflow-hidden bg-white pb-12 pt-16 dark:bg-neutral-950 sm:pb-16 sm:pt-24"
    >
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_70%_20%,rgba(251,146,60,0.16),transparent_34%),radial-gradient(circle_at_88%_44%,rgba(20,184,166,0.13),transparent_28%)] dark:bg-[radial-gradient(circle_at_70%_20%,rgba(251,146,60,0.12),transparent_34%),radial-gradient(circle_at_88%_44%,rgba(45,212,191,0.10),transparent_28%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <Badge className="mb-7 border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-400/30 dark:bg-orange-400/10 dark:text-orange-300">
            Now on the App Store
          </Badge>
          <h1 className="text-5xl font-semibold leading-[1.02] text-neutral-950 dark:text-neutral-50 sm:text-6xl lg:text-7xl">
            One place for daily Christian practice
          </h1>
          <p className="mt-7 text-lg leading-8 text-neutral-600 dark:text-neutral-300 sm:text-xl">
            Steadfast gathers prayer, memorization, journaling, and reading
            plans together for better daily faithfulness.
          </p>
          <div className="mt-9 flex justify-center lg:justify-start">
            <AppStoreBadge />
          </div>
        </div>
        <HeroImageCarousel />
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
                  className="mx-auto h-auto max-h-[720px] w-full max-w-[340px] rounded-[34px] border border-white/90 object-contain shadow-[0_28px_76px_rgba(15,23,42,0.16)] dark:border-white/10 dark:shadow-[0_28px_76px_rgba(0,0,0,0.5)]"
                  sizes="(min-width: 1024px) 28vw, 86vw"
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
            className="h-auto w-full max-w-3xl rounded-[30px] border border-white/90 object-contain shadow-[0_32px_84px_rgba(15,23,42,0.16)] dark:border-white/10 dark:shadow-[0_32px_84px_rgba(0,0,0,0.48)]"
            sizes="(min-width: 1024px) 52vw, 100vw"
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
          <div className="absolute left-1/2 top-1/2 h-[70%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-100/70 blur-3xl dark:bg-rose-400/10" />
          <div className="relative grid items-end gap-5 sm:grid-cols-2">
            <figure className="mx-auto w-full max-w-[300px] sm:max-w-[330px]">
              <Image
                src="/images/website/social-share-story.png"
                alt="Steadfast social share creator editing a story image."
                width={1050}
                height={2283}
                className="h-auto w-full rounded-[34px] border border-white/90 object-contain shadow-[0_32px_82px_rgba(15,23,42,0.18)] dark:border-white/10 dark:shadow-[0_32px_82px_rgba(0,0,0,0.54)]"
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 42vw, 74vw"
              />
              <figcaption className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                Story format
              </figcaption>
            </figure>
            <figure className="mx-auto hidden w-full max-w-[360px] sm:block">
              <Image
                src="/images/website/social-share-post.png"
                alt="Steadfast social share creator preparing a post image."
                width={1640}
                height={2360}
                className="h-auto w-full rounded-[30px] border border-white/90 object-contain shadow-[0_32px_82px_rgba(15,23,42,0.16)] dark:border-white/10 dark:shadow-[0_32px_82px_rgba(0,0,0,0.5)]"
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 44vw, 0px"
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

function TeamMessage() {
  return (
    <section className="bg-neutral-50 py-20 dark:bg-neutral-900 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-700 dark:text-orange-300">
              A message from the team
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 dark:text-neutral-50 sm:text-5xl">
              The mission comes first.
            </h2>
          </div>
          <div className="rounded-[16px] border border-orange-200/70 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] dark:border-orange-300/15 dark:bg-neutral-950 dark:shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:p-8">
            <div className="space-y-5 text-base leading-8 text-neutral-600 dark:text-neutral-300 sm:text-lg">
              <p>
                Our goal is to help people grow closer to God through
                consistent prayer, scripture, memorization, journaling,
                reflection, and spiritual routines.
              </p>
              <p className="font-semibold text-neutral-950 dark:text-neutral-50">
                That is why the core of Steadfast remains available to
                everyone.
              </p>
              <p>
                Pro+ supports the future development of Steadfast while adding
                sync, backup, multi-device access, and gift codes you can share
                with others.
              </p>
              <blockquote className="border-l-2 border-orange-400 pl-5 font-semibold text-neutral-950 dark:text-neutral-50">
                Lord, increase our borders.
              </blockquote>
              <p>
                Whether you upgrade to Pro+ or choose to stay with the free
                version, thank you for allowing us to come alongside you as you
                grow in your walk with Jesus.
              </p>
            </div>
            <div className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              We&apos;re praying for you. Evan &amp; Jessica
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadFooter() {
  return (
    <footer id="download" className="bg-neutral-950 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <Image
            src="/images/faviconOrange.png"
            alt="Steadfast: Faith emblem"
            width={56}
            height={56}
            className="h-14 w-14"
          />
          <h2 className="mt-8 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Return to what matters, one ordinary day at a time.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
            Download Steadfast: Faith and begin a calmer daily rhythm of
            Scripture, prayer, memorization, and reflection.
          </p>
        </div>
        <div className="flex flex-col gap-5 lg:items-end">
          <AppStoreBadge className="border-neutral-200 bg-neutral-950 text-white hover:bg-neutral-900" />
          <div className="flex flex-wrap gap-5 text-sm text-neutral-300">
            <a className="hover:text-white" href="mailto:hello@steadfast.faith">
              Contact
            </a>
            <a
              className="hover:text-white"
              href="/docs/Updated_Steadfast_Privacy_Policy.pdf"
              rel="noreferrer"
              target="_blank"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function SteadfastV2Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-100">
      <V2Topbar />
      <main>
        <Hero />
        <FeatureStories />
        <ConnectedPractice />
        <SocialShareCreator />
        <DeviceShowcase />
        <SupportingFeatures />
        <TeamMessage />
      </main>
      <DownloadFooter />
    </div>
  );
}

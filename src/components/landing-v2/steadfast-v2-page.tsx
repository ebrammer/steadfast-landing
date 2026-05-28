import Image from "next/image";

import AppStoreBadge from "@/components/landing-v2/app-store-badge";
import DeviceShowcase from "@/components/landing-v2/device-showcase";
import V2Topbar from "@/components/landing-v2/v2-topbar";
import { Badge } from "@/components/ui/badge";

const featureStories = [
  {
    eyebrow: "Prayer",
    title: "Remember the people and needs you carry.",
    body: "Save prayers in plain words, connect them to people and lists, and return without turning prayer into a performance system.",
    image: "/images/app-store/iphone-prayer.png",
    alt: "Steadfast prayer detail screen with prayer history and notes.",
  },
  {
    eyebrow: "Scripture",
    title: "Keep passages close enough to return to.",
    body: "Save Scripture for prayer, study, encouragement, or memorization, then connect it to the places it shaped your day.",
    image: "/images/app-store/iphone-scripture.png",
    alt: "Steadfast scripture passage screen with saved passage details.",
  },
  {
    eyebrow: "Memorization",
    title: "Practice Scripture gently over time.",
    body: "Use short, repeatable tools for recall, review, and maintenance so familiar words stay near without pressure.",
    image: "/images/app-store/iphone-memorization.png",
    alt: "Steadfast memorization tools screen with practice options.",
  },
  {
    eyebrow: "Routines",
    title: "Build rhythms small enough to repeat.",
    body: "Bring prayers, passages, reading plans, people, and reflection into a repeatable flow for ordinary days.",
    image: "/images/app-store/iphone-routine.png",
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
        <div className="relative mx-auto min-h-[520px] w-full max-w-4xl sm:min-h-[620px] lg:min-h-[680px]">
          <div className="absolute left-1/2 top-1/2 h-[72%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-100/60 blur-3xl dark:bg-orange-500/10" />
          <Image
            src="/images/app-store/ipad-home.png"
            alt="Steadfast home dashboard on iPad."
            width={2064}
            height={2752}
            className="absolute left-0 top-14 hidden h-auto w-[46%] -rotate-6 rounded-[22px] object-contain shadow-[0_28px_70px_rgba(15,23,42,0.16)] lg:block dark:shadow-[0_28px_70px_rgba(0,0,0,0.5)]"
            sizes="(min-width: 1024px) 26vw, 0px"
            priority
          />
          <Image
            src="/images/app-store/iphone-scripture.png"
            alt="Steadfast scripture passage screen on iPhone."
            width={1242}
            height={2688}
            className="absolute right-[4%] top-8 h-auto w-[36%] rotate-6 rounded-[28px] object-contain shadow-[0_24px_65px_rgba(15,23,42,0.18)] sm:w-[30%] lg:right-[1%] lg:w-[26%] dark:shadow-[0_24px_65px_rgba(0,0,0,0.5)]"
            sizes="(min-width: 1024px) 16vw, (min-width: 640px) 28vw, 36vw"
            priority
          />
          <Image
            src="/images/app-store/iphone-memorization.png"
            alt="Steadfast memorization practice tools on iPhone."
            width={1242}
            height={2688}
            className="absolute bottom-6 left-[2%] h-auto w-[36%] -rotate-3 rounded-[28px] object-contain shadow-[0_24px_65px_rgba(15,23,42,0.16)] sm:w-[30%] lg:left-[20%] lg:w-[25%] dark:shadow-[0_24px_65px_rgba(0,0,0,0.45)]"
            sizes="(min-width: 1024px) 16vw, (min-width: 640px) 28vw, 36vw"
            priority
          />
          <Image
            src="/images/app-store/iphone-home.png"
            alt="Steadfast home dashboard on iPhone."
            width={1242}
            height={2688}
            className="absolute left-1/2 top-4 h-auto w-[46%] -translate-x-1/2 rounded-[32px] object-contain shadow-[0_32px_80px_rgba(15,23,42,0.22)] sm:w-[38%] lg:top-2 lg:w-[32%] dark:shadow-[0_32px_80px_rgba(0,0,0,0.58)]"
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 34vw, 46vw"
            priority
          />
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
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={1242}
                  height={2688}
                  className="mx-auto h-auto max-h-[720px] w-full max-w-[340px] rounded-[30px] object-contain shadow-[0_22px_60px_rgba(15,23,42,0.14)] dark:shadow-[0_22px_60px_rgba(0,0,0,0.45)]"
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
            src="/images/app-store/ipad-connections.png"
            alt="Steadfast connections screen showing related people, scripture, and entries."
            width={2064}
            height={2752}
            className="h-auto w-full max-w-3xl rounded-[24px] object-contain shadow-[0_28px_70px_rgba(15,23,42,0.14)] dark:shadow-[0_28px_70px_rgba(0,0,0,0.45)]"
            sizes="(min-width: 1024px) 52vw, 100vw"
          />
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
        <DeviceShowcase />
        <SupportingFeatures />
      </main>
      <DownloadFooter />
    </div>
  );
}

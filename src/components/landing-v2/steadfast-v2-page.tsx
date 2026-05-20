import Image from "next/image";

import AppStoreBadge from "@/components/landing-v2/app-store-badge";
import DeviceShowcase from "@/components/landing-v2/device-showcase";
import V2Topbar from "@/components/landing-v2/v2-topbar";
import { Badge } from "@/components/ui/badge";

const featureStories = [
  {
    eyebrow: "Prayer",
    title: "Bring people and needs back into view.",
    body: "Steadfast keeps prayer requests close to the people, lists, and routines they belong to, so prayer becomes a steady practice instead of a scattered note.",
    image: "https://placehold.co/1100x820/f7f7f7/525252.png?text=Prayer",
    alt: "Prayer feature placeholder",
  },
  {
    eyebrow: "Scripture",
    title: "Read, remember, and return to the Word.",
    body: "Save passages, connect them to prayers and reflections, and practice memorization with deliberate repetition across the rhythms of ordinary life.",
    image: "https://placehold.co/1100x820/f7f7f7/525252.png?text=Scripture",
    alt: "Scripture feature placeholder",
  },
  {
    eyebrow: "Daily rhythm",
    title: "A simple rule of life for each day.",
    body: "Shape a devotional routine around Scripture, prayer, journaling, and reading plans without turning your quiet time into another productivity system.",
    image: "https://placehold.co/1100x820/f7f7f7/525252.png?text=Daily+Rhythm",
    alt: "Daily rhythm feature placeholder",
  },
  {
    eyebrow: "Personalization",
    title: "Shape Steadfast around your spiritual disciplines.",
    body: "Customize dashboards, choose the tools you use, and arrange the practices that matter most so Steadfast supports your approach to daily faithfulness.",
    image: "https://placehold.co/1100x820/f7f7f7/525252.png?text=Personalization",
    alt: "Personalization feature placeholder",
  },
];

const supportingFeatures = [
  {
    title: "Linked journals",
    body: "Connect reflections to the prayers and passages that gave them context.",
  },
  {
    title: "Reading plans",
    body: "Follow structured Scripture plans or read freely without losing your place.",
  },
  {
    title: "Memorization tools",
    body: "Practice recall with varied exercises built for slow, repeated attention.",
  },
  {
    title: "Focused sessions",
    body: "Keep the day centered on the next faithful step, not a crowded dashboard.",
  },
  {
    title: "People and lists",
    body: "Organize prayer around the names and communities you are carrying.",
  },
  {
    title: "Cross-device ready",
    body: "Designed for the devices already close at hand throughout the day.",
  },
];

function Hero() {
  return (
    <section
      id="v2-top"
      className="relative overflow-hidden bg-white pb-8 pt-16 dark:bg-neutral-950 sm:pb-10 sm:pt-24"
    >
      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <Badge className="mb-7 border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-400/30 dark:bg-orange-400/10 dark:text-orange-300">
            Now on the App Store
          </Badge>
          <h1 className="text-5xl font-semibold leading-[1.02] text-neutral-950 dark:text-neutral-50 sm:text-6xl lg:text-7xl">
            One place for daily Christian practice
          </h1>
          <p className="mt-7 text-lg leading-8 text-neutral-600 dark:text-neutral-300 sm:text-xl">
            Steadfast gathers prayer, memorization, journaling, and
            reading plans together for better daily faithfulness.
          </p>
          <div className="mt-9 flex justify-center lg:justify-start">
            <AppStoreBadge />
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-4xl">
          <Image
            src="/images/hero_image.png"
            alt="Steadfast: Faith app screens"
            width={1536}
            height={1024}
            className="relative h-auto w-full rounded-[24px] object-contain drop-shadow-[0_28px_60px_rgba(15,23,42,0.16)] dark:drop-shadow-[0_28px_60px_rgba(0,0,0,0.55)]"
            sizes="(min-width: 1024px) 56vw, 100vw"
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
                  width={1200}
                  height={900}
                  className="mx-auto h-auto max-h-[560px] w-full object-contain drop-shadow-[0_20px_50px_rgba(15,23,42,0.10)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportingFeatures() {
  return (
    <section
      id="features"
      className="bg-neutral-50 py-20 dark:bg-neutral-900 sm:py-28"
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
                className="rounded-[8px] border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950"
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
            Continue steadfastly in prayer, one ordinary day at a time.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
            Download Steadfast: Faith and begin a calmer daily rhythm of
            Scripture, prayer, and reflection.
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
        <DeviceShowcase />
        <SupportingFeatures />
      </main>
      <DownloadFooter />
    </div>
  );
}

import Image from "next/image";

import AppStoreBadge from "@/components/landing-v2/app-store-badge";

export default function V2DownloadFooter() {
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
          <AppStoreBadge
            placement="footer"
            className="border-neutral-200 bg-neutral-950 text-white hover:bg-neutral-900"
          />
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
            <a className="hover:text-white" href="/deleteaccount">
              Delete Account
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import V2DownloadFooter from "@/components/landing-v2/v2-download-footer";
import V2Topbar from "@/components/landing-v2/v2-topbar";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Delete Account | Steadfast: Faith",
  description:
    "How to request deletion of your Steadfast: Faith account from inside the app.",
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <V2Topbar linkPrefix="/" />
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-20 sm:px-8 lg:py-28">
        <section className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Account deletion
          </p>
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Delete your Steadfast: Faith account
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">
              You can request account deletion directly inside the Steadfast:
              Faith app. This keeps the request tied to your signed-in account
              and lets the app explain the recovery window before deletion is
              finalized.
            </p>
          </div>
        </section>

        <section className="space-y-5 rounded-lg border border-border bg-card p-6 text-card-foreground sm:p-8">
          <h2 className="text-2xl font-semibold">In the app</h2>
          <ol className="list-decimal space-y-3 pl-5 text-base leading-7 text-muted-foreground">
            <li>Open Steadfast: Faith.</li>
            <li>Go to Settings.</li>
            <li>Open Profile.</li>
            <li>Select Delete account and confirm the request.</li>
          </ol>
          <p className="text-base leading-7 text-muted-foreground">
            If you cannot access the app or need help with this process, email{" "}
            <a
              href="mailto:hello@steadfastfaith.app?subject=Account%20deletion%20request"
              className="font-medium text-foreground underline underline-offset-4"
            >
              hello@steadfastfaith.app
            </a>
            .
          </p>
        </section>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href="mailto:hello@steadfastfaith.app?subject=Account%20deletion%20request">
              Contact support
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </main>
      <V2DownloadFooter />
    </div>
  );
}

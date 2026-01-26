import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function FooterSection() {
  return (
    <footer className="bg-background py-16">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl space-y-5">
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              "Continue steadfastly in prayer, being watchful in it with
              thanksgiving."
            </h2>
            <p className="text-lg text-muted-foreground">
              The Apostle Paul; to the church in Colossae
            </p>
            <p className="text-base text-muted-foreground">
              Colossians 4:2 (ESV)
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <Image
              src="/images/faviconOrange.png"
              alt="Steadfast: Faith emblem"
              width={64}
              height={64}
              className="h-16 w-16"
            />
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 text-sm text-muted-foreground sm:flex-row sm:justify-center">
          <Button asChild variant="link" className="px-0 text-muted-foreground">
            <a href="#">Contact</a>
          </Button>
          <Button asChild variant="link" className="px-0 text-muted-foreground">
            <a href="/docs/Online_Privacy_Policy.pdf" target="_blank" rel="noreferrer">
              Privacy Policy
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}

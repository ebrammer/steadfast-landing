import Image from "next/image";

import { APP_STORE_URL } from "@/components/landing-v2/app-store-link";
import { cn } from "@/lib/utils";

type AppStoreBadgeProps = {
  className?: string;
};

export default function AppStoreBadge({ className }: AppStoreBadgeProps) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Download Steadfast on the App Store"
      className={cn(
        "inline-flex bg-transparent p-0 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950",
        className,
      )}
    >
      <Image
        src="/images/download-on-the-app-store.svg"
        alt="Download on the App Store"
        width={120}
        height={40}
        className="h-12 w-auto"
      />
    </a>
  );
}

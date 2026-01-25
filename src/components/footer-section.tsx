import { Button } from "@/components/ui/button";

export default function FooterSection() {
  return (
    <footer className="border-t border-border/80 bg-background py-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Steadfast
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            A devotional companion for Scripture, prayer, and journaling.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild variant="link" className="px-0 text-muted-foreground">
            <a href="#learn-more">Overview</a>
          </Button>
          <Button asChild variant="link" className="px-0 text-muted-foreground">
            <a href="#features">Practices</a>
          </Button>
          <Button asChild variant="link" className="px-0 text-muted-foreground">
            <a href="#scripture">Scripture</a>
          </Button>
          <Button asChild variant="link" className="px-0 text-muted-foreground">
            <a href="#theology">Theology</a>
          </Button>
          <Button asChild variant="link" className="px-0 text-muted-foreground">
            <a href="/docs/Online_Privacy_Policy.pdf" target="_blank" rel="noreferrer">
              Privacy policy
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}

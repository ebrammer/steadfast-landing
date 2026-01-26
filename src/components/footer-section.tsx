import { Button } from "@/components/ui/button";

export default function FooterSection() {
  return (
    <footer className="border-t border-border/70 bg-background py-16">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr,1fr,1fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Steadfast
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              A devotional companion for Scripture, prayer, and journaling.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Navigation
            </p>
            <div className="flex flex-col items-start gap-2">
              <Button asChild variant="link" className="px-0 text-muted-foreground">
                <a href="#overview">Overview</a>
              </Button>
              <Button asChild variant="link" className="px-0 text-muted-foreground">
                <a href="#features">Features</a>
              </Button>
              <Button asChild variant="link" className="px-0 text-muted-foreground">
                <a href="#stories">Stories</a>
              </Button>
              <Button
                asChild
                variant="link"
                className="px-0 text-muted-foreground"
              >
                <a href="#waitlist">Waitlist</a>
              </Button>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Company
            </p>
            <div className="flex flex-col items-start gap-2">
              <Button asChild variant="link" className="px-0 text-muted-foreground">
                <a href="#testimonials">Testimonials</a>
              </Button>
              <Button asChild variant="link" className="px-0 text-muted-foreground">
                <a href="/docs/Online_Privacy_Policy.pdf" target="_blank" rel="noreferrer">
                  Privacy policy
                </a>
              </Button>
              <Button asChild variant="link" className="px-0 text-muted-foreground">
                <a href="#newsletter">Newsletter</a>
              </Button>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Follow
            </p>
            <div className="flex flex-col items-start gap-2">
              <Button asChild variant="link" className="px-0 text-muted-foreground">
                <a href="#">Instagram</a>
              </Button>
              <Button asChild variant="link" className="px-0 text-muted-foreground">
                <a href="#">Twitter</a>
              </Button>
              <Button asChild variant="link" className="px-0 text-muted-foreground">
                <a href="#">Email</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Steadfast. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/docs/Online_Privacy_Policy.pdf" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

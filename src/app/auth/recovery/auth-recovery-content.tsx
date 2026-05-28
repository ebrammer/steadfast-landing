"use client";

import { useEffect, useMemo, useState } from "react";

type Phase = "loading" | "error" | "success";

const DEEP_LINK_BASE = "steadfast://steadfastfaith.app/auth/recovery";

function readOAuthErrorFromUrl(): {
  oauthError: string | null;
  oauthDescription: string;
} {
  const url = new URL(window.location.href);
  const hashParams = new URLSearchParams(
    url.hash.startsWith("#") ? url.hash.slice(1) : "",
  );
  const search = url.searchParams;

  const oauthError = search.get("error") ?? hashParams.get("error");
  const oauthDescriptionRaw =
    search.get("error_description") ?? hashParams.get("error_description");
  const oauthDescription = oauthDescriptionRaw?.replace(/\+/g, " ") ?? "";

  return { oauthError, oauthDescription };
}

function buildHandoffHref(search: string, hash: string): string {
  return `${DEEP_LINK_BASE}${search}${hash}`;
}

export function AuthRecoveryContent() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [message, setMessage] = useState("");
  const [handoffHref, setHandoffHref] = useState(DEEP_LINK_BASE);

  const openAppLabel = useMemo(
    () => "Continue in Steadfast",
    [],
  );

  useEffect(() => {
    const { oauthError, oauthDescription } = readOAuthErrorFromUrl();
    const search = window.location.search;
    const hash = window.location.hash;
    const hadQueryOrHash = Boolean(search) || Boolean(hash);

    if (oauthError) {
      setPhase("error");
      setMessage(
        [oauthError, oauthDescription].filter(Boolean).join(" — ") ||
          "Password reset could not be completed.",
      );
      return;
    }

    if (!hadQueryOrHash) {
      setPhase("error");
      setMessage(
        "This reset link is incomplete or expired. Request a new password reset from the sign-in screen in the app.",
      );
      return;
    }

    const href = buildHandoffHref(search, hash);
    setHandoffHref(href);

    // Strip one-time codes/tokens from the address bar after capturing handoff URL.
    window.history.replaceState({}, "", window.location.pathname);

    setPhase("success");

    // Best-effort auto-handoff on mobile browsers.
    window.setTimeout(() => {
      window.location.replace(href);
    }, 300);
  }, []);

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-16">
      <h1 className="text-xl font-semibold tracking-tight text-foreground">
        Reset password
      </h1>

      <div className="mt-6 text-base leading-relaxed text-muted-foreground">
        {phase === "loading" && (
          <p aria-live="polite">One moment…</p>
        )}

        {phase === "error" && (
          <p className="text-destructive" role="alert" aria-live="assertive">
            {message}
          </p>
        )}

        {phase === "success" && (
          <div aria-live="polite">
            <p className="text-foreground">
              Open the Steadfast Faith app to choose a new password.
            </p>
            <p className="mt-4">
              <a
                href={handoffHref}
                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {openAppLabel}
              </a>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              If nothing happens, install or update the app, then tap the link
              in your email again.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

type Phase = "loading" | "error" | "success";

const DEEP_LINK_BASE = "steadfast://steadfastfaith.app/auth/callback";

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

export function AuthCallbackContent() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [message, setMessage] = useState("");
  const [fromEmailLink, setFromEmailLink] = useState(false);

  useEffect(() => {
    const { oauthError, oauthDescription } = readOAuthErrorFromUrl();

    if (oauthError) {
      setPhase("error");
      setMessage(
        [oauthError, oauthDescription].filter(Boolean).join(" — ") ||
          "Confirmation could not be completed.",
      );
      return;
    }

    const hadQueryOrHash =
      Boolean(window.location.search) || Boolean(window.location.hash);
    setFromEmailLink(hadQueryOrHash);

    // Supabase has already verified the email before redirecting here. Strip
    // query/hash (may contain one-time codes or tokens) from the address bar.
    const path = window.location.pathname;
    if (hadQueryOrHash) {
      window.history.replaceState({}, "", path);
    }

    setPhase("success");
  }, []);

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-16">
      <h1 className="text-xl font-semibold tracking-tight text-foreground">
        Steadfast
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
              {fromEmailLink
                ? "Your email is confirmed. You can close this tab and continue in the Steadfast app."
                : "This page is shown after you open the confirmation link from your Steadfast email. If you didn’t use that link, you can close this tab."}
            </p>
            <p className="mt-4">
              <a
                href={DEEP_LINK_BASE}
                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Open Steadfast app
              </a>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              If nothing happens, open Steadfast manually—the button may not
              work in desktop browsers.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

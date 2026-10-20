import { track } from "@vercel/analytics/server";
import { NextRequest, NextResponse } from "next/server";

import { getEmailAppStoreUrl } from "@/components/landing-v2/app-store-link";

const DEFAULT_DESTINATION = "/";
const DEFAULT_CONTENT = "email";
const TRACK_EVENT_NAME = "Email Link Click";

function getFirstValue(value: string | null) {
  return value?.trim() || undefined;
}

function normalizeAnalyticsValue(value: string | undefined, fallback: string) {
  return value?.slice(0, 120) || fallback;
}

function getInternalDestination(request: NextRequest, destination: string) {
  const url = new URL(destination, request.nextUrl.origin);

  if (url.origin !== request.nextUrl.origin) {
    return undefined;
  }

  if (url.pathname.startsWith("/email/")) {
    return undefined;
  }

  return url;
}

function appendCampaignParams(
  url: URL,
  campaign: string,
  content: string | undefined,
) {
  url.searchParams.set("utm_source", "email");
  url.searchParams.set("utm_medium", "email");
  url.searchParams.set("utm_campaign", campaign);

  if (content) {
    url.searchParams.set("utm_content", content);
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ campaign: string }> },
) {
  const { campaign: rawCampaign } = await params;
  const campaign =
    decodeURIComponent(rawCampaign).trim().toLowerCase() || "unknown";
  const content = getFirstValue(request.nextUrl.searchParams.get("content"));
  const destination = getFirstValue(request.nextUrl.searchParams.get("to"));

  let redirectUrl: URL;
  let destinationLabel: string;

  if (destination === "app-store") {
    redirectUrl = new URL(getEmailAppStoreUrl(campaign, content));
    destinationLabel = "app-store";
  } else {
    const internalDestination = getInternalDestination(
      request,
      destination ?? DEFAULT_DESTINATION,
    );

    if (!internalDestination) {
      redirectUrl = new URL(DEFAULT_DESTINATION, request.nextUrl.origin);
      destinationLabel = "invalid-destination";
    } else {
      redirectUrl = internalDestination;
      destinationLabel = redirectUrl.pathname;
    }

    appendCampaignParams(redirectUrl, campaign, content);
  }

  await track(
    TRACK_EVENT_NAME,
    {
      campaign: normalizeAnalyticsValue(campaign, "unknown"),
      content: normalizeAnalyticsValue(content, DEFAULT_CONTENT),
      destination: normalizeAnalyticsValue(destinationLabel, "unknown"),
    },
    { request },
  );

  return NextResponse.redirect(redirectUrl, 302);
}

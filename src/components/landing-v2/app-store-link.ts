export const APP_STORE_URL = "https://apps.apple.com/app/id6503166664";

export type AppStoreLinkPlacement = "hero" | "nav" | "showcase" | "footer";

const APP_STORE_CAMPAIGN_TOKENS: Record<AppStoreLinkPlacement, string> = {
  hero: "Initial Launch Hero",
  nav: "Initial Launch Nav",
  showcase: "Initial Launch Showcase",
  footer: "Initial Launch Footer",
};

const APP_STORE_PROVIDER_TOKEN =
  process.env.NEXT_PUBLIC_APP_STORE_PROVIDER_TOKEN ?? "126890899";

export function getAppStoreUrl(placement: AppStoreLinkPlacement) {
  const url = new URL(APP_STORE_URL);

  if (APP_STORE_PROVIDER_TOKEN) {
    url.searchParams.set("pt", APP_STORE_PROVIDER_TOKEN);
  }

  url.searchParams.set("ct", APP_STORE_CAMPAIGN_TOKENS[placement]);
  url.searchParams.set("mt", "8");

  return url.toString();
}

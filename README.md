This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Supabase magic link / email callback (`/auth/callback`)

Production URL: `https://www.steadfastfaith.app/auth/callback` — add that value **exactly** under [Supabase Dashboard](https://supabase.com/dashboard) → Authentication → URL configuration → **Redirect URLs**, alongside `steadfast://steadfastfaith.app/auth/callback`.

Supabase verifies the token **before** redirecting here. This route captures the PKCE `code` (or implicit tokens), deeplinks to `steadfast://steadfastfaith.app/auth/callback` with the same query/hash so the native app can finish the exchange, then strips sensitive params from the address bar.

**QA checklist**

1. Bare URL: open `/auth/callback`; expect expired/incomplete copy.
2. Error params: open `/auth/callback?error=access_denied&error_description=Test`; expect error copy.
3. Handoff: open `/auth/callback?code=test-code`; “Continue in Steadfast” should target `steadfast://steadfastfaith.app/auth/callback?code=test-code`.

### Email campaign tracking

Use `/email/[campaign]` links in outbound emails. The route records a Vercel Analytics custom event named `Email Link Click`, then redirects to the requested destination.

Examples:

```text
https://steadfastfaith.app/email/launch-email
https://steadfastfaith.app/email/launch-email?to=/docs&content=footer
https://steadfastfaith.app/email/launch-email?to=app-store&content=primary-cta
```

Supported parameters:

- `to`: same-site path to redirect to, or `app-store`; defaults to `/`.
- `content`: optional placement label, such as `hero-cta`, `footer`, or `button-1`.

Same-site redirects automatically receive `utm_source=email`, `utm_medium=email`, `utm_campaign=[campaign]`, and `utm_content=[content]` when provided. App Store redirects use the existing provider token and set Apple’s `ct` campaign token to `Email [campaign] [content]`.

### Supabase password recovery (`/auth/recovery`)

Production URL: `https://www.steadfastfaith.app/auth/recovery` — allowlist under Supabase **Redirect URLs** alongside `steadfast://steadfastfaith.app/auth/recovery`.

Supabase verifies the reset token **before** redirecting here. This route captures the PKCE `code` (or implicit tokens), deeplinks to `steadfast://steadfastfaith.app/auth/recovery` with the same query/hash so the native app can finish the exchange, then strips sensitive params from the address bar.

**QA checklist**

1. Bare URL: open `/auth/recovery`; expect expired/incomplete copy.
2. Error params: open `/auth/recovery?error=access_denied&error_description=Test`; expect error copy.
3. Handoff: open `/auth/recovery?code=test-code`; “Continue in Steadfast” should target `steadfast://steadfastfaith.app/auth/recovery?code=test-code`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

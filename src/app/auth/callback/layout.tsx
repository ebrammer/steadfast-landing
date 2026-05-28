import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email confirmed · Steadfast",
  description: "Email confirmation after your Steadfast link.",
  robots: { index: false, follow: false },
};

export default function AuthCallbackLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Continue in Good Passage",
  description: "Complete sign-in in the Good Passage app.",
  robots: { index: false, follow: false },
};

export default function GoodPassageAuthCallbackLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Continue in Steadfast",
  description: "Complete sign-in in the Steadfast Faith app.",
  robots: { index: false, follow: false },
};

export default function AuthCallbackLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

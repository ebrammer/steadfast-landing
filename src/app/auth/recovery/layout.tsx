import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset password · Steadfast",
  description: "Continue password reset in the Steadfast Faith app.",
  robots: { index: false, follow: false },
};

export default function AuthRecoveryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

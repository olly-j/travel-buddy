import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Travel Buddy | Easter Escape 2026",
  description:
    "A premium one-page itinerary for a two-night Rutland escape with a Lincoln heritage day and a Leamington Spa return stop.",
  openGraph: {
    title: "Travel Buddy | Easter Escape 2026",
    description:
      "Rutland calm, Lincoln heritage, and a soft Leamington Spa return in one polished itinerary.",
    images: [
      {
        url: "/og-trip-snapshot.svg",
        width: 1200,
        height: 630,
        alt: "Travel Buddy Easter Escape 2026 preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Buddy | Easter Escape 2026",
    description:
      "Two nights away, one proper heritage day, and a clean soft-return plan.",
    images: ["/og-trip-snapshot.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}

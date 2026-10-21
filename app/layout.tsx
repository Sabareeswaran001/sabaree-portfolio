import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Sabareeswaran Kolanjiyappan | Software Developer Portfolio",
  description: "Portfolio of Sabareeswaran Kolanjiyappan, Computer Science graduate interested in software development, machine learning, computer vision, and embedded systems.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Sabareeswaran Kolanjiyappan — Portfolio",
    description: "Software development, machine learning, computer vision, and embedded systems.",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable}`}>{children}</body>
    </html>
  );
}
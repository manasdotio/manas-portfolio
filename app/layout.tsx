import "./globals.css";
import type { ReactNode } from "react";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://manasdotio.vercel.app"),
  title: "Manas Singh — Fullstack Developer",
  description:
    "Fullstack developer based in Jaipur building complete web applications — from database to UI. Open to full-time roles and freelance projects.",
  keywords: ["fullstack developer", "React", "Next.js", "Node.js", "TypeScript", "portfolio", "Manas Singh", "Jaipur"],
  authors: [{ name: "Manas Singh", url: "https://github.com/manasdotio" }],
  openGraph: {
    title: "Manas Singh — Fullstack Developer",
    description:
      "Fullstack developer based in Jaipur building complete web applications — from database to UI.",
    url: "https://manasdotio.vercel.app",
    siteName: "Manas Singh Portfolio",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Manas Singh — Fullstack Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manas Singh — Fullstack Developer",
    description: "Fullstack developer building complete web applications — from database to UI.",
    images: ["/og.svg"],
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={instrumentSerif.variable}>
      <body className="min-h-screen bg-black text-white antialiased">{children}</body>
    </html>
  );
}

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
  metadataBase: new URL("https://manassingh.dev"),
  title: {
    default: "Manas Singh — Fullstack Developer",
    template: "%s | Manas Singh",
  },
  description:
    "Fullstack developer based in Jaipur building complete web applications — from database to UI. Open to full-time roles and freelance projects.",
  keywords: [
    "fullstack developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "portfolio",
    "Manas Singh",
    "Jaipur",
    "India",
    "software engineer",
  ],
  authors: [{ name: "Manas Singh", url: "https://github.com/manasdotio" }],
  creator: "Manas Singh",
  publisher: "Manas Singh",
  alternates: {
    canonical: "https://manassingh.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Manas Singh — Fullstack Developer",
    description:
      "Fullstack developer based in Jaipur building complete web applications — from database to UI.",
    url: "https://manassingh.dev",
    siteName: "Manas Singh Portfolio",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Manas Singh — Fullstack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manas Singh — Fullstack Developer",
    description: "Fullstack developer building complete web applications — from database to UI.",
    creator: "@manassingh",
    images: ["/og.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://manassingh.dev/#person",
      name: "Manas Singh",
      jobTitle: "Fullstack Developer",
      url: "https://manassingh.dev",
      image: "https://manassingh.dev/og.svg",
      sameAs: [
        "https://github.com/manasdotio",
        "https://www.linkedin.com/in/manasdotio",
        "https://twitter.com/manassingh",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressCountry: "IN",
      },
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "JavaScript",
        "Tailwind CSS",
        "Web Development",
        "Browser Extensions",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://manassingh.dev/#website",
      url: "https://manassingh.dev",
      name: "Manas Singh Portfolio",
      description: "Portfolio of Manas Singh, Fullstack Developer based in Jaipur.",
      publisher: {
        "@id": "https://manassingh.dev/#person",
      },
    },
  ],
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={instrumentSerif.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-black text-white antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

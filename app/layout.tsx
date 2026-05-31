import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Manas Singh — Fullstack Developer",
  description: "I design and build complete web applications — from database to UI.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
        />
      </head>
      <body className="min-h-screen bg-[#050505] text-[#f5f5f5] antialiased">
        {children}
      </body>
    </html>
  );
}

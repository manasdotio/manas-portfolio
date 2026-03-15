import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Manas Portfolio",
  description: "Portfolio website built with Next.js and Tailwind CSS",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">{children}</body>
    </html>
  );
}

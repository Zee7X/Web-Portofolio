import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rizick — Fullstack Developer",
  description:
    "Fullstack developer specializing in Laravel, Flutter, and production web systems. Based in Indonesia.",
  openGraph: {
    title: "Rizick — Fullstack Developer",
    description:
      "Fullstack developer specializing in Laravel, Flutter, and production web systems.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rizick Sabillah — Fullstack Developer & Systems Builder",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Syne:wght@700;800&family=Instrument+Serif:ital,wght@0,400;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

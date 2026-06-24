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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

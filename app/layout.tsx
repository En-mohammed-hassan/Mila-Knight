import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mila Knight | Task Management Software",
  description:
    "Plan, prioritize, and deliver with a clean task manager built for modern teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script id="theme-init" strategy="beforeInteractive">{`
        (function () {
          try {
            var key = "theme";
            var stored = localStorage.getItem(key);
            var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
            var theme = (stored === "dark" || stored === "light") ? stored : (prefersDark ? "dark" : "light");
            var root = document.documentElement;
            if (theme === "dark") root.classList.add("dark");
            else root.classList.remove("dark");
            root.style.colorScheme = theme;
          } catch (e) {}
        })();
      `}</Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50`}
      >
        {children}
      </body>
    </html>
  );
}

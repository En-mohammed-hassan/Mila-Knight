"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function setTheme(next: Theme) {
  const root = document.documentElement;
  if (next === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  root.style.colorScheme = next;
  localStorage.setItem("theme", next);
  window.dispatchEvent(new Event("mila-theme-change"));
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 18a6 6 0 100-12 6 6 0 000 12z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8l1.8-1.8M18 6l1.8-1.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M21 14.5A8.5 8.5 0 0110.5 3a7.5 7.5 0 1010.5 11.5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(
    (onStoreChange: () => void) => {
      if (typeof window === "undefined") return () => {};

      const onChange = () => onStoreChange();
      window.addEventListener("mila-theme-change", onChange);
      window.addEventListener("storage", onChange);

      const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
      mq?.addEventListener?.("change", onChange);

      return () => {
        window.removeEventListener("mila-theme-change", onChange);
        window.removeEventListener("storage", onChange);
        mq?.removeEventListener?.("change", onChange);
      };
    },
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
        ? ("dark" as const)
        : ("light" as const),
    () => "light" as const
  );

  const isDark = theme === "dark";
  const nextTheme: Theme = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => {
        setTheme(nextTheme);
      }}
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      className={[
        "relative inline-flex h-10 w-16 items-center rounded-full p-1",
        "border border-zinc-200/80 bg-white/70 shadow-sm ring-1 ring-black/5 backdrop-blur",
        "transition hover:border-indigo-200 hover:bg-white/80",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        "dark:border-white/10 dark:bg-white/5 dark:ring-white/10 dark:hover:border-white/15 dark:hover:bg-white/10",
        "dark:focus-visible:ring-indigo-400 dark:focus-visible:ring-offset-black",
        className,
      ].join(" ")}
    >
      <span className="sr-only">Toggle theme</span>

      {/* track glow when dark */}
      <span
        aria-hidden="true"
        className={[
          "pointer-events-none absolute inset-0 rounded-full transition",
          isDark
            ? "bg-linear-to-r from-indigo-600/25 via-violet-600/20 to-fuchsia-600/25"
            : "bg-transparent",
        ].join(" ")}
      />

      {/* icons */}
      <SunIcon
        className={[
          "absolute left-2 h-4 w-4 transition",
          isDark ? "text-white/80" : "text-zinc-500",
        ].join(" ")}
      />
      <MoonIcon
        className={[
          "absolute right-2 h-4 w-4 transition",
          isDark ? "text-zinc-400" : "text-zinc-900/80",
        ].join(" ")}
      />

      {/* thumb */}
      <span
        aria-hidden="true"
        className={[
          "relative z-10 h-8 w-8 rounded-full shadow-sm ring-1 ring-black/10 transition-transform",
          "bg-white",
          isDark ? "translate-x-6" : "translate-x-0",
          "dark:bg-zinc-950 dark:ring-white/10",
        ].join(" ")}
      />
    </button>
  );
}

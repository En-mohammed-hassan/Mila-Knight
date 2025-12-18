import Link from "next/link";
import type { ReactNode } from "react";

export function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={[
        "group relative isolate inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold text-white",
        "bg-linear-to-r from-indigo-600 via-violet-600 to-fuchsia-600",
        "shadow-sm ring-1 ring-black/10 transition",
        "hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md",
        "hover:saturate-110 active:saturate-100",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        "dark:focus-visible:ring-indigo-400 dark:focus-visible:ring-offset-black",
        // subtle highlight + glow
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-white/25 before:to-white/0 before:opacity-70 before:mix-blend-overlay before:transition",
        "after:pointer-events-none after:absolute after:-inset-px after:rounded-full after:bg-linear-to-r after:from-indigo-400/0 after:via-indigo-300/30 after:to-fuchsia-400/0 after:opacity-0 after:blur-md after:transition group-hover:after:opacity-100",
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

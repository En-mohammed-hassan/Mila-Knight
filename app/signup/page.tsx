import Link from "next/link";
import { ThemeToggle } from "../components/ThemeToggle";

export default function SignupPage() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-linear-to-b from-white via-indigo-50/40 to-zinc-50 px-4 py-12 text-zinc-900 dark:from-zinc-950 dark:via-indigo-950/30 dark:to-black dark:text-zinc-50">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-80 w-176 -translate-x-1/2 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/10" />
        <div className="absolute -bottom-28 left-1/3 h-80 w-176 -translate-x-1/2 rounded-full bg-violet-300/30 blur-3xl dark:bg-violet-500/10" />
      </div>

      <div className="relative mx-auto w-full max-w-md">
        <div className="mb-4 flex justify-end">
          <ThemeToggle />
        </div>
        <div className="mb-6 text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-sm ring-1 ring-black/5">
            <span className="text-sm font-semibold">MK</span>
          </div>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight">
            Create your account
          </h1>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            This is a for testing placeholder
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200/70 bg-white/70 p-8 shadow-sm ring-1 ring-black/5 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:ring-white/10">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-semibold text-zinc-900 dark:text-zinc-100"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                className="mt-2 h-11 w-full rounded-xl border border-zinc-200/80 bg-white/80 px-4 text-sm text-zinc-900 shadow-sm ring-1 ring-black/5 transition placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:placeholder:text-zinc-500 dark:focus-visible:ring-indigo-400 dark:focus-visible:ring-offset-black"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-sm font-semibold text-zinc-900 dark:text-zinc-100"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="Create a strong password"
                className="mt-2 h-11 w-full rounded-xl border border-zinc-200/80 bg-white/80 px-4 text-sm text-zinc-900 shadow-sm ring-1 ring-black/5 transition placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:placeholder:text-zinc-500 dark:focus-visible:ring-indigo-400 dark:focus-visible:ring-offset-black"
              />
            </div>

            <button
              type="button"
              className="group relative isolate mt-2 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-5 text-sm font-semibold text-white shadow-sm ring-1 ring-black/10 transition hover:-translate-y-0.5 hover:shadow-lg hover:saturate-110 active:translate-y-0 active:shadow-md active:saturate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-white/25 before:to-white/0 before:opacity-70 before:mix-blend-overlay before:transition after:pointer-events-none after:absolute after:-inset-px after:rounded-full after:bg-linear-to-r after:from-indigo-400/0 after:via-indigo-300/30 after:to-fuchsia-400/0 after:opacity-0 after:blur-md after:transition group-hover:after:opacity-100 dark:focus-visible:ring-indigo-400 dark:focus-visible:ring-offset-black"
            >
              Create account
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-300">
            <Link
              href="/"
              className="font-semibold text-zinc-900 hover:underline dark:text-white"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

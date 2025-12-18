import Link from "next/link";
import { Container } from "./Container";
import { IconBolt, IconCheck, IconUsers } from "./Icons";
import { PrimaryButton } from "./PrimaryButton";
import { SectionHeading } from "./SectionHeading";
import { ThemeToggle } from "../ThemeToggle";

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm backdrop-blur",
        "ring-1 ring-black/5 transition will-change-transform",
        "hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none",
        "dark:border-white/10 dark:bg-white/5 dark:ring-white/10",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function SubtleLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200/80 bg-white/80 px-5 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-black/5 transition hover:border-indigo-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:hover:border-white/15 dark:hover:bg-white/10 dark:focus-visible:ring-indigo-400 dark:focus-visible:ring-offset-black"
    >
      {children}
    </Link>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-sm ring-1 ring-black/5">
          <span className="h-6 w-6">{icon}</span>
        </div>
        <div>
          <h3 className="text-base font-semibold text-zinc-950 dark:text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <Card className="relative overflow-hidden">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-sm font-semibold text-white shadow-sm ring-1 ring-black/5">
          {number}
        </div>
        <div>
          <h3 className="text-base font-semibold text-zinc-950 dark:text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}

function Testimonial() {
  return (
    <Card className="relative overflow-hidden p-8 sm:p-10">
      <svg
        aria-hidden="true"
        viewBox="0 0 120 120"
        className="pointer-events-none absolute right-4 top-4 z-0 h-28 w-28 text-indigo-500/10 sm:right-6 sm:top-6 sm:h-32 sm:w-32"
      >
        <path
          fill="currentColor"
          d="M45 25c-9 6-16 16-16 29 0 14 9 23 22 23 10 0 18-7 18-18 0-9-5-16-14-18 1-6 5-11 10-15l-20-1zm50 0c-9 6-16 16-16 29 0 14 9 23 22 23 10 0 18-7 18-18 0-9-5-16-14-18 1-6 5-11 10-15l-20-1z"
        />
      </svg>
      <figure className="relative z-10 mx-auto max-w-3xl">
        <blockquote className="text-pretty text-lg leading-8 text-zinc-800 dark:text-zinc-100 sm:text-xl">
          “We replaced three tools with Mila Knight. The UI is calm, the
          workflow is obvious, and our team finally ships with fewer ‘where is
          this at?’ messages.”
        </blockquote>
        <figcaption className="mt-6 flex items-center justify-center gap-3 text-sm">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-xs font-semibold text-white shadow-sm ring-1 ring-black/5">
            AR
          </span>
          <div className="text-left">
            <div className="font-semibold text-zinc-950 dark:text-white">
              Alex Rivera
            </div>
            <div className="text-zinc-600 dark:text-zinc-300">
              Operations Lead, Northwind
            </div>
          </div>
        </figcaption>
      </figure>
    </Card>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 py-10 dark:border-white/10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-sm text-zinc-600 dark:text-zinc-300">
            © {new Date().getFullYear()} Mila Knight. All rights reserved.
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="#"
              className="text-zinc-700 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-zinc-700 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="text-zinc-700 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-dvh bg-linear-to-b from-white via-indigo-50/40 to-zinc-50 dark:from-zinc-950 dark:via-indigo-950/30 dark:to-black">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -top-28 left-1/2 h-80 w-176 -translate-x-1/2 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/10" />
          <div className="absolute -bottom-28 left-1/3 h-80 w-176 -translate-x-1/2 rounded-full bg-violet-300/30 blur-3xl dark:bg-violet-500/10" />
        </div>

        <Container>
          <header className="flex items-center justify-between py-8">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-sm ring-1 ring-black/5">
                <span className="text-sm font-semibold">MK</span>
              </div>
              <div className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-white">
                Mila Knight
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle className="hidden sm:inline-flex" />
              <details className="relative sm:hidden">
                <summary className="list-none rounded-full border border-zinc-200/80 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-black/5 transition hover:border-indigo-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:hover:border-white/15 dark:hover:bg-white/10 dark:focus-visible:ring-indigo-400 dark:focus-visible:ring-offset-black">
                  Menu
                </summary>
                <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/90 p-2 shadow-lg ring-1 ring-black/5 backdrop-blur dark:border-white/10 dark:bg-zinc-950/80 dark:ring-white/10">
                  <div className="flex items-center justify-between gap-2 px-1 pb-2">
                    <div className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                      Theme
                    </div>
                    <ThemeToggle />
                  </div>
                  <Link
                    href="#features"
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-white/5"
                  >
                    Features
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="mt-1 block rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-white/5"
                  >
                    How it works
                  </Link>
                  <div className="mt-2 px-1 pb-1">
                    <PrimaryButton href="/signup" className="w-full">
                      Try for Free
                    </PrimaryButton>
                  </div>
                </div>
              </details>

              <div className="hidden items-center gap-3 sm:flex">
                <Link
                  href="#features"
                  className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                >
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                >
                  How it works
                </Link>
                <PrimaryButton href="/signup">Try for Free</PrimaryButton>
              </div>
            </div>
          </header>

          <main className="pb-16 pt-10 sm:pb-24 sm:pt-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center rounded-full border border-indigo-200/60 bg-white/70 px-3 py-1 text-xs font-semibold text-indigo-700 shadow-sm backdrop-blur dark:border-indigo-500/20 dark:bg-white/5 dark:text-indigo-200">
                Simple task management for modern teams
              </p>
              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-6xl">
                Plan, prioritize, and deliver without the chaos.
              </h1>
              <p className="mt-5 text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
                Mila Knight helps you capture work fast, keep priorities clear,
                and move tasks from “in progress” to “done” with less overhead.
              </p>

              <div
                id="get-started"
                className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
              >
                <PrimaryButton href="/signup">Get Started</PrimaryButton>
                <SubtleLink href="#how-it-works">See how it works</SubtleLink>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <Card className="py-5">
                  <div className="text-sm font-semibold text-zinc-950 dark:text-white">
                    Fast setup
                  </div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                    Start in minutes
                  </div>
                </Card>
                <Card className="py-5">
                  <div className="text-sm font-semibold text-zinc-950 dark:text-white">
                    Focused
                  </div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                    Clear priorities
                  </div>
                </Card>
                <Card className="py-5">
                  <div className="text-sm font-semibold text-zinc-950 dark:text-white">
                    Team-ready
                  </div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                    Collaborate smoothly
                  </div>
                </Card>
              </div>
            </div>
          </main>
        </Container>
      </div>

      {/* Features */}
      <section id="features" className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title="Everything you need — nothing you don’t."
            description={
              <>
                Keep work visible and organized with a clean UI, thoughtful
                defaults, and just the right amount of structure.
              </>
            }
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Feature
              icon={<IconCheck className="h-6 w-6" />}
              title="Smart task lists"
              description="Capture tasks quickly, add context, and keep your day moving with lightweight organization."
            />
            <Feature
              icon={<IconBolt className="h-6 w-6" />}
              title="Clear priorities"
              description="Highlight what matters most with simple status and due-date signals that don’t overwhelm."
            />
            <Feature
              icon={<IconUsers className="h-6 w-6" />}
              title="Team collaboration"
              description="Assign owners, share progress, and stay aligned — without long threads or busywork."
            />
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="A simple workflow that scales with you."
            description={
              <>
                Three steps to keep tasks organized and the team aligned from
                capture to completion.
              </>
            }
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Step
              number={1}
              title="Add tasks"
              description="Capture work as it comes in. Add details, due dates, and owners in seconds."
            />
            <Step
              number={2}
              title="Organize & prioritize"
              description="Sort by what matters now. Keep the backlog tidy and the next actions obvious."
            />
            <Step
              number={3}
              title="Track progress"
              description="Move tasks forward with clear statuses. Everyone sees what’s happening at a glance."
            />
          </div>
        </Container>
      </section>

      {/* Testimonial */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Testimonial"
            title="Teams love the calm, focused experience."
            description={
              <>
                A lightweight tool that removes friction so your team can spend
                time executing, not managing.
              </>
            }
          />
          <div className="mt-12">
            <Testimonial />
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

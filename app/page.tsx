import Link from "next/link"
import { SiteHeader } from "@/components/site-header"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex min-h-[calc(100vh-65px)] max-w-5xl flex-col justify-center px-6 py-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="rounded-full border border-border px-3 py-1 text-sm text-muted">
            Australasian M-C
          </span>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Websites built and managed, end to end
          </h1>
          <p className="max-w-lg text-pretty leading-relaxed text-muted">
            From a one-off build to fully managed hosting, security, and ongoing updates. Simple,
            transparent pricing with everything included.
          </p>
          <Link
            href="/services"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            View services & pricing
          </Link>
        </div>
      </main>
    </>
  )
}

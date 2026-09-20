import type { Metadata } from "next"
import Link from "next/link"
import { PricingSection } from "@/components/pricing-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Services & Pricing | Australasian Marketing Consultancy",
  description:
    "Choose a one-off website build or ongoing website management with everything included. Transparent pricing for Australasian businesses.",
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-5xl px-6 pb-4 pt-20 text-center sm:pt-24">
          <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm text-muted">
            Services &amp; pricing
          </span>
          <h1 className="mx-auto mt-6 max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted">
            Choose a one-off build or ongoing website management with everything included.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <PricingSection />
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-20">
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-border bg-surface p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-balance text-2xl font-semibold tracking-tight">
                Not sure which plan fits?
              </h2>
              <p className="mt-3 text-pretty leading-relaxed text-muted">
                Tell us about your business and we&apos;ll recommend the right build and management plan.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Get a quote
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

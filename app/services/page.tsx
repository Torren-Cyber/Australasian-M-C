import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { PricingSection } from "@/components/pricing-section"

export const metadata: Metadata = {
  title: "Services & Pricing | Australasian M-C",
  description:
    "Choose a one-off website build or ongoing website management with everything included.",
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
        <header className="flex flex-col items-center gap-4 text-center">
          <span className="rounded-full border border-border px-3 py-1 text-sm text-muted">
            Services
          </span>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="max-w-md text-pretty leading-relaxed text-muted">
            Choose a one-off build or ongoing website management with everything included.
          </p>
        </header>

        <PricingSection />
      </main>
    </>
  )
}

import { PricingSection } from "@/components/pricing-section"

export default function ServicesPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
      <header className="flex flex-col items-center gap-4 text-center">
        <span className="rounded-full border border-border px-3 py-1 text-sm text-muted">
          Australasian M-C
        </span>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Services &amp; packages
        </h1>
        <p className="max-w-md text-pretty leading-relaxed text-muted">
          Choose a one-off build or ongoing website management with everything included.
        </p>
      </header>

      <PricingSection />
    </main>
  )
}

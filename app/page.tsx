import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const services = [
  {
    title: "Website builds",
    description: "Fast, modern, mobile-first websites built to launch and convert.",
  },
  {
    title: "Website management",
    description: "Ongoing updates, security, and support so your site stays healthy.",
  },
  {
    title: "Analytics & reporting",
    description: "Clear monthly reporting on traffic, conversions, and engagement.",
  },
  {
    title: "Content & blogs",
    description: "Regular content and blog publishing to grow your organic reach.",
  },
  {
    title: "eCommerce",
    description: "Online stores with products, cart, and checkout done right.",
  },
  {
    title: "Marketing strategy",
    description: "Practical marketing guidance tailored to Australasian businesses.",
  },
]

const stats = [
  { value: "from $500", label: "One-off website builds" },
  { value: "from $350", label: "Monthly management" },
  { value: "AU & NZ", label: "Businesses supported" },
]

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm text-muted">
              Australasian Marketing Consultancy
            </span>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Websites and marketing that grow{" "}
              <span className="text-accent">Australasian businesses.</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
              We build modern websites and manage them for you — so you can launch with confidence and
              keep growing without the technical headaches.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                View services &amp; pricing
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
              >
                Talk to us
              </Link>
            </div>
          </div>

          <dl className="mt-16 grid gap-6 border-t border-border pt-10 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dt className="text-3xl font-semibold tracking-tight text-accent">{stat.value}</dt>
                <dd className="text-sm text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-t border-border bg-surface/40">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="max-w-2xl">
              <h2 className="text-balance text-3xl font-semibold tracking-tight">What we do</h2>
              <p className="mt-3 text-pretty leading-relaxed text-muted">
                From first build to ongoing growth, we cover everything your business needs to succeed
                online.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex flex-col rounded-xl border border-border bg-surface p-6"
                >
                  <h3 className="text-lg font-medium">{service.title}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
              >
                See full pricing <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-border bg-surface p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready to get your business online?
              </h2>
              <p className="mt-3 text-pretty leading-relaxed text-muted">
                Get a fixed quote for a one-off build, or ongoing management with everything included.
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

const services = [
  {
    number: '01',
    title: 'Brand strategy',
    description:
      'Clarify your positioning, audience narrative, and growth story so your brand cuts through the noise.',
  },
  {
    number: '02',
    title: 'Content & creative',
    description:
      'Turn complex ideas into compelling campaigns, landing pages, and content systems that perform.',
  },
  {
    number: '03',
    title: 'Digital growth',
    description:
      'Build integrated paid, SEO, and lifecycle programs designed to attract, nurture, and convert demand.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-semibold tracking-[0.18em] text-brand">
        WHAT WE DO
      </span>
      <h2 className="mt-6 max-w-2xl text-balance text-3xl font-bold tracking-tight md:text-4xl">
        Marketing that aligns brand, demand, and revenue.
      </h2>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.number}
            className="rounded-[22px] border border-border bg-card p-7 transition-colors hover:border-brand/40"
          >
            <span className="flex size-11 items-center justify-center rounded-full border border-border text-sm font-semibold text-brand">
              {service.number}
            </span>
            <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

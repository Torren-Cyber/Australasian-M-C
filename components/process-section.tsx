const steps = [
  {
    number: '01',
    title: 'Diagnose',
    description:
      'Audit your market, offer, and customer journey to identify the highest, impact opportunities.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Develop a strategy and creative system that gives your team a clear growth direction.',
  },
  {
    number: '03',
    title: 'Deploy',
    description:
      'Launch campaigns, content, and conversion assets ready for real, world testing and optimization.',
  },
  {
    number: '04',
    title: 'Scale',
    description:
      'Use data and learnings to refine the funnel and turn traction into sustainable growth.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-semibold tracking-[0.18em] text-brand">
        HOW WE WORK
      </span>
      <h2 className="mt-6 max-w-2xl text-balance text-3xl font-bold tracking-tight md:text-4xl">
        A clear path from strategy to scale.
      </h2>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-[22px] border border-border bg-card p-7"
          >
            <span className="text-sm font-semibold text-brand">
              {step.number}
            </span>
            <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const insights = [
  {
    tag: 'STRATEGY',
    title: 'Why customer clarity is the biggest growth lever',
  },
  {
    tag: 'PERFORMANCE',
    title: 'Three creative experiments that unlock better conversion',
  },
  {
    tag: 'BRAND',
    title: 'How to turn brand awareness into sales conversations',
  },
]

export function InsightsSection() {
  return (
    <section id="insights" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-semibold tracking-[0.18em] text-brand">
        LATEST THINKING
      </span>
      <h2 className="mt-6 max-w-2xl text-balance text-3xl font-bold tracking-tight md:text-4xl">
        Insights for teams that want to grow smarter.
      </h2>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {insights.map((insight) => (
          <article
            key={insight.tag}
            className="flex flex-col rounded-[22px] border border-border bg-card p-7"
          >
            <span className="text-xs font-semibold tracking-[0.16em] text-muted-foreground">
              {insight.tag}
            </span>
            <h3 className="mt-4 text-lg font-semibold leading-snug">
              {insight.title}
            </h3>
            <Link
              href="/insights"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-foreground"
            >
              Read more
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

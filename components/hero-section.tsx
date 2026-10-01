import { WorldMap } from '@/components/world-map'
import { RotatingBackground } from '@/components/rotating-background'

const stats = [
  { value: '16', label: 'markets reached' },
  { value: '5', label: 'core regions' },
  { value: '24/7', label: 'brand momentum' },
]

const cities = [
  'SYDNEY',
  'TOKYO',
  'SINGAPORE',
  'DUBAI',
  'LONDON',
  'NEW YORK',
  'PARIS',
]

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Rotating city backgrounds */}
      <RotatingBackground />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-32 md:pt-36">
        <div className="rounded-[26px] border border-border bg-background/40 p-6 backdrop-blur-md md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-semibold tracking-[0.18em] text-brand">
                GLOBAL PERSPECTIVE
              </span>
              <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                From Sydney to Singapore. From London to Los Angeles.
              </h1>
              <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                We help brands grow across borders with strategy built for local
                nuance and global ambition. Our work blends market insight,
                category clarity, and performance thinking so every market feels
                considered.
              </p>

              <dl className="mt-8 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block text-2xl font-bold md:text-3xl">
                        {stat.value}
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Focus card */}
            <div className="rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-brand" aria-hidden="true" />
                <span className="text-sm font-medium">Asia, Pacific focus</span>
              </div>
              <div className="mt-4 overflow-hidden rounded-xl border border-border bg-background/40 p-2">
                <WorldMap />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* City marquee */}
      <div className="relative border-y border-border bg-background/70 py-4 backdrop-blur-sm">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...cities, ...cities, ...cities, ...cities].map((city, i) => (
            <span
              key={`${city}-${i}`}
              className="text-sm font-medium tracking-[0.22em] text-muted-foreground"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

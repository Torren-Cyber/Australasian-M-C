import Image from 'next/image'

type PageHeroProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  image?: string
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image = '/city-singapore.png',
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image || "/placeholder.svg"}
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 pb-16 pt-36 text-center md:pb-20 md:pt-44">
        {eyebrow ? (
          <span className="inline-flex rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-brand backdrop-blur">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  )
}

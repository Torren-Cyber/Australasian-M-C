import Link from 'next/link'

type CtaBandProps = {
  title: string
  subtitle: string
  buttonLabel: string
  href: string
}

export function CtaBand({ title, subtitle, buttonLabel, href }: CtaBandProps) {
  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
        <Link
          href={href}
          className="mt-8 inline-flex rounded-full bg-gradient-to-br from-brand to-brand-2 px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  )
}

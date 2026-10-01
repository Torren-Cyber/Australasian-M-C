import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/#process' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Australasian Marketing & Consultancy home"
        >
          <Image
            src="/logo-mark-t.png"
            alt=""
            width={445}
            height={375}
            priority
            className="h-9 w-auto"
          />
          <span className="text-sm font-semibold tracking-tight text-foreground">
            Australasian Marketing &amp; Consultancy
          </span>
        </Link>

        <nav aria-label="Main menu" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-gradient-to-br from-brand to-brand-2 px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
        >
          Book a call
        </Link>
      </div>
    </header>
  )
}

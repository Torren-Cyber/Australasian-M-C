import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-sm font-bold text-accent-foreground">
              A
            </span>
            <span className="text-sm font-semibold tracking-tight">Australasian Marketing Consultancy</span>
          </div>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-muted">
            Websites and marketing that help Australasian businesses launch, grow, and stay online.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">Explore</span>
            <Link href="/" className="text-sm text-muted transition-colors hover:text-foreground">
              Home
            </Link>
            <Link href="/services" className="text-sm text-muted transition-colors hover:text-foreground">
              Services
            </Link>
            <Link href="/about" className="text-sm text-muted transition-colors hover:text-foreground">
              About
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">Company</span>
            <Link href="/contact" className="text-sm text-muted transition-colors hover:text-foreground">
              Contact
            </Link>
            <Link href="/services" className="text-sm text-muted transition-colors hover:text-foreground">
              Pricing
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">Get in touch</span>
            <a
              href="mailto:hello@australasianmarketingconsultancy.com"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Email us
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Australasian Marketing Consultancy. All rights reserved.</p>
          <p>Proudly serving Australia &amp; New Zealand.</p>
        </div>
      </div>
    </footer>
  )
}

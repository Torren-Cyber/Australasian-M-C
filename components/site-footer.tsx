import Link from 'next/link'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/australasianmc' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/143081566' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-sm font-bold text-accent-foreground">
                A
              </span>
              <span className="text-sm font-semibold">Australasian</span>
            </Link>
            <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
              Marketing consultancy built for ambitious brands.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.14em] text-muted-foreground">
              Quick Links
            </h4>
            <ul className="mt-4 flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.14em] text-muted-foreground">
              Get in Touch
            </h4>
            <Link
              href="mailto:Sales@australasianmarketingconsultancy.com"
              className="mt-4 block break-words text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Sales@australasianmarketingconsultancy.com
            </Link>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.14em] text-muted-foreground">
              Follow Us
            </h4>
            <ul className="mt-4 flex flex-col gap-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; 2026 Australasian Marketing &amp; Consultancy. All rights
            reserved.
          </span>
          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-foreground"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

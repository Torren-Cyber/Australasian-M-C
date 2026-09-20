"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-sm font-bold text-accent-foreground">
            A
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight">Australasian</span>
            <span className="text-xs tracking-wide text-muted">Marketing Consultancy</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  active ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get a quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-4 bg-current" />
            <span className="h-0.5 w-4 bg-current" />
            <span className="h-0.5 w-4 bg-current" />
          </div>
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-background px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                      active ? "bg-surface text-foreground" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <li className="mt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-accent px-3 py-2 text-center text-sm font-semibold text-accent-foreground"
              >
                Get a quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

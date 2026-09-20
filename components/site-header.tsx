import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Australasian M-C
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="text-muted transition-colors hover:text-foreground">
            Home
          </Link>
          <Link href="/services" className="text-muted transition-colors hover:text-foreground">
            Services
          </Link>
        </div>
      </nav>
    </header>
  )
}

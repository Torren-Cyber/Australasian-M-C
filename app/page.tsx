export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="rounded-full border border-border px-3 py-1 text-sm text-muted">
        Australasian M-C
      </span>
      <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        Your app is up and running
      </h1>
      <p className="max-w-md text-pretty leading-relaxed text-muted">
        This is a fresh Next.js starter. The 404 is resolved because there is now
        a home page to serve. Start building from here.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href="https://nextjs.org/docs"
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Next.js Docs
        </a>
        <a
          href="https://v0.app"
          className="rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-border/40"
        >
          Built with v0
        </a>
      </div>
    </main>
  )
}

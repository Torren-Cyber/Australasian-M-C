import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Contact | Australasian Marketing & Consultancy',
  description:
    'Ready to grow? Schedule a call with our team to discuss your goals and how we can help.',
}

const expectations = [
  'Initial discovery conversation (30 minutes)',
  'Understanding your business and goals',
  'Discussing how we can add value',
  'No pressure, no sales pitch, just strategy',
]

const faqs = [
  {
    q: 'How far in advance should I book?',
    a: 'You can book anytime that works for you. We typically have availability within 2, 3 days.',
  },
  {
    q: 'Is there a cost for an initial call?',
    a: "No, our initial consultation is completely free. It's a chance for us to understand your needs and see if we're a good fit.",
  },
  {
    q: "What if I can't find a time that works?",
    a: "Email us at Sales@australasianmarketingconsultancy.com and we'll find a time that suits you.",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="LET'S CONNECT"
          title="Get in Touch"
          subtitle="Ready to grow? Schedule a call with our team to discuss your goals and how we can help."
          image="/city-singapore.png"
        />

        <section id="book" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Booking */}
            <div className="rounded-[22px] border border-border bg-card p-7 md:p-9">
              <h2 className="text-2xl font-bold tracking-tight">Book a Call</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Select a time that works best for you. Our team will connect with
                you to discuss your project and goals.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-background">
                <iframe
                  src="https://calendar.app.google/Zn4NwVMkwBomjwKo9"
                  title="Australasian Marketing & Consultancy - Booking Calendar"
                  className="h-[600px] w-full"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Other ways to connect */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">
                Other Ways to Connect
              </h2>

              <div className="rounded-[22px] border border-border bg-card p-7">
                <h3 className="text-base font-semibold">Email</h3>
                <Link
                  href="mailto:Sales@australasianmarketingconsultancy.com"
                  className="mt-3 inline-flex font-semibold text-brand transition-colors hover:text-foreground"
                >
                  Sales@australasianmarketingconsultancy.com
                </Link>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  For enquiries about our services, pricing, or to discuss your
                  project needs.
                </p>
              </div>

              <div className="rounded-[22px] border border-border bg-card p-7">
                <h3 className="text-base font-semibold">What to Expect</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {expectations.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <span className="text-brand" aria-hidden="true">
                        →
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[22px] border border-border bg-card p-7">
                <h3 className="text-base font-semibold">Common Questions</h3>
                <dl className="mt-4 flex flex-col gap-5">
                  {faqs.map((faq) => (
                    <div key={faq.q}>
                      <dt className="text-sm font-semibold text-brand">
                        {faq.q}
                      </dt>
                      <dd className="mt-1.5 leading-relaxed text-muted-foreground">
                        {faq.a}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        <CtaBand
          title="Ready to get started?"
          subtitle="Let's talk about your marketing goals and build something great together."
          buttonLabel="Schedule a Call"
          href="#book"
        />
      </main>
      <SiteFooter />
    </div>
  )
}

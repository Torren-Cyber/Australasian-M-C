import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Services | Australasian Marketing & Consultancy',
  description:
    'Comprehensive marketing and web solutions designed to align brand, demand, and revenue.',
}

const services = [
  {
    number: '01',
    title: 'Brand Strategy',
    lead: 'Clarify your positioning, audience narrative, and growth story so your brand cuts through the noise.',
    body: 'We work with ambitious brands to build a coherent strategy that guides every touchpoint. From market research through positioning workshops to brand architecture, we ensure your brand stands apart and resonates with your ideal customers.',
  },
  {
    number: '02',
    title: 'Content & Creative',
    lead: 'Turn complex ideas into compelling campaigns, landing pages, and content systems that perform.',
    body: "We create content and creative assets that move your audience from awareness to action. Whether it's campaigns, landing pages, video, or long, form content, every piece is built for conversion and aligned with your brand voice.",
  },
  {
    number: '03',
    title: 'Digital Growth',
    lead: 'Build integrated paid, SEO, and lifecycle programs designed to attract, nurture, and convert demand.',
    body: 'We orchestrate your digital presence across paid search, social, email, and organic channels. Our approach combines audience insight, creative testing, and performance data to build sustainable growth engines that deliver ROI.',
  },
]

const websitePlans = [
  {
    name: 'Managed Website Service',
    price: 'From $500',
    unit: '/month',
    note: '12, month commitment locked in',
    features: [
      'Website build and design',
      'Ongoing management and updates',
      'Performance monitoring',
      'Security and maintenance',
    ],
  },
  {
    name: 'One, Time Build',
    price: 'From $3,000',
    unit: '',
    note: 'Website build only',
    features: [
      'Custom website design and build',
      'Responsive and SEO, optimized',
      'Content integration',
      'Initial launch and testing',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          title="Our Services"
          subtitle="We deliver comprehensive marketing and web solutions designed to align brand, demand, and revenue."
          image="/city-hongkong.png"
        />

        <section className="mx-auto max-w-4xl space-y-5 px-6 py-20 md:py-24">
          {services.map((service) => (
            <article
              key={service.number}
              className="rounded-[22px] border border-border bg-card p-7 md:p-9"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-2xl font-bold text-brand">
                  {service.number}
                </span>
                <h2 className="text-xl font-semibold md:text-2xl">
                  {service.title}
                </h2>
              </div>
              <p className="mt-4 leading-relaxed text-foreground/90">
                {service.lead}
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {service.body}
              </p>
            </article>
          ))}

          {/* Website design & management */}
          <article className="rounded-[22px] border border-border bg-card p-7 md:p-9">
            <div className="flex items-baseline gap-4">
              <span className="text-2xl font-bold text-brand">04</span>
              <h2 className="text-xl font-semibold md:text-2xl">
                Website Design &amp; Management
              </h2>
            </div>
            <p className="mt-4 leading-relaxed text-foreground/90">
              Professional, high, performance websites built to convert and grow
              with your business.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We design and build websites that align with your brand and drive
              results. Every site is optimized for conversion, SEO, and user
              experience. Choose the model that fits your needs:
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {websitePlans.map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-2xl border border-border bg-background/60 p-6"
                >
                  <h3 className="text-base font-semibold">{plan.name}</h3>
                  <p className="mt-3">
                    <span className="text-2xl font-bold text-brand">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.unit}</span>
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.note}
                  </p>
                  <ul className="mt-5 flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm">
                        <span className="text-brand" aria-hidden="true">
                          ✓
                        </span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </section>

        <CtaBand
          title="Ready to grow?"
          subtitle="Let's talk about your goals and how we can help."
          buttonLabel="Book a call"
          href="/contact"
        />
      </main>
      <SiteFooter />
    </div>
  )
}

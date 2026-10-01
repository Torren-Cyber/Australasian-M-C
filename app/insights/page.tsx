import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Insights | Australasian Marketing & Consultancy',
  description:
    'Deep dives into the strategies, frameworks, and best practices that drive real business growth.',
}

type Block =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: { label?: string; text: string }[] }

type Article = {
  tag: string
  title: string
  blocks: Block[]
  ctaLabel: string
}

const articles: Article[] = [
  {
    tag: 'WEBSITE BUILDING',
    title: 'Why Your Website Is Your Most Important Sales Tool',
    ctaLabel: 'Discuss Your Website',
    blocks: [
      {
        type: 'p',
        text: "Your website is often the first impression potential customers have of your brand. It's where decision, makers go to validate your credibility, understand your offering, and decide whether to reach out.",
      },
      { type: 'h3', text: 'The Problem with Average Websites' },
      {
        type: 'p',
        text: "Most websites are built to look good. They're not built to convert. They lack clear messaging, don't guide visitors toward action, and fail to communicate why your business is different.",
      },
      {
        type: 'p',
        text: 'An ineffective website costs you more than the cost of building it, it costs you sales.',
      },
      { type: 'h3', text: 'What a High, Performance Website Delivers' },
      {
        type: 'ul',
        items: [
          {
            label: 'Clear Value Proposition:',
            text: 'Visitors immediately understand what you do and why it matters',
          },
          {
            label: 'Trust Signals:',
            text: 'Social proof, case studies, and credentials that establish credibility',
          },
          {
            label: 'Guided Journey:',
            text: 'Every element leads visitors toward a clear next step',
          },
          {
            label: 'Search Visibility:',
            text: 'Built for SEO so potential customers find you organically',
          },
          {
            label: 'Mobile Experience:',
            text: 'Seamless experience across all devices',
          },
          {
            label: 'Performance:',
            text: 'Fast load times that keep visitors engaged',
          },
        ],
      },
      { type: 'h3', text: 'Our Approach' },
      {
        type: 'p',
        text: 'We build websites that work harder than a brochure. Every page, every copy block, every design choice serves a strategic purpose. We combine beautiful design with conversion optimization so your website generates qualified leads, not just traffic.',
      },
    ],
  },
  {
    tag: 'BRAND POSITIONING',
    title: 'Brand Clarity Is Your Competitive Advantage',
    ctaLabel: 'Clarify Your Positioning',
    blocks: [
      {
        type: 'p',
        text: 'In a crowded market, clarity is currency. When you know exactly who you are, what makes you different, and why it matters to your audience, everything else becomes easier, and more effective.',
      },
      { type: 'h3', text: 'The Cost of Unclear Positioning' },
      {
        type: 'p',
        text: "Unclear positioning leads to unclear messaging, which leads to weak campaigns and low conversion rates. You end up competing on price instead of value. Your audience doesn't understand why they should choose you over competitors.",
      },
      { type: 'h3', text: 'The Power of Strong Positioning' },
      { type: 'p', text: 'When your brand is clearly positioned:' },
      {
        type: 'ul',
        items: [
          { text: 'Your ideal customers recognize themselves immediately' },
          { text: 'Your marketing becomes more efficient and cost, effective' },
          { text: 'You attract better leads and higher, quality customers' },
          { text: 'Your team aligns around a shared vision' },
          {
            text: 'You can charge premium prices because the value is clear',
          },
        ],
      },
      { type: 'h3', text: 'How to Build Unshakeable Positioning' },
      {
        type: 'p',
        text: 'Strong positioning comes from deeply understanding your market, your customers, and what you do differently. It requires strategic clarity about:',
      },
      {
        type: 'ul',
        items: [
          { text: "Who your ideal customer really is (and who you're NOT for)" },
          { text: 'What pain points and desires drive their decisions' },
          { text: 'How your solution is genuinely different from alternatives' },
          {
            text: 'The transformation you enable, not just the features you offer',
          },
        ],
      },
      {
        type: 'p',
        text: 'We guide you through a positioning workshop that clarifies your unique value and builds a narrative that resonates with your audience.',
      },
    ],
  },
  {
    tag: 'GROWTH STRATEGY',
    title: 'Sustainable Growth Requires Strategic Focus',
    ctaLabel: 'Build Your Growth Strategy',
    blocks: [
      {
        type: 'p',
        text: 'Not all growth is created equal. Sustainable, profitable growth comes from a strategic approach that aligns your marketing, sales, and operations around a clear growth engine.',
      },
      { type: 'h3', text: 'The Difference Between Activity and Strategy' },
      {
        type: 'p',
        text: "Many businesses confuse marketing activity with marketing strategy. They run campaigns, create content, and spend on ads, but without a clear strategic framework, it's like running in circles. You stay busy but don't move forward.",
      },
      { type: 'h3', text: 'The Elements of a Growth Strategy' },
      { type: 'p', text: 'A real growth strategy includes:' },
      {
        type: 'ul',
        items: [
          {
            label: 'Clear Growth Objectives:',
            text: 'Specific, measurable targets tied to business goals',
          },
          {
            label: 'Customer Understanding:',
            text: "Deep insight into your ideal customer's journey",
          },
          {
            label: 'Channel Strategy:',
            text: 'Deliberate focus on the channels where your audience lives',
          },
          {
            label: 'Message Framework:',
            text: 'Consistent, compelling messages across all touchpoints',
          },
          {
            label: 'Conversion Optimization:',
            text: 'Systematic improvement of every step in the funnel',
          },
          {
            label: 'Measurement & Learning:',
            text: 'Clear metrics and continuous iteration',
          },
        ],
      },
      { type: 'h3', text: 'How We Build Growth Strategies' },
      {
        type: 'p',
        text: 'We start by understanding where you are and where you want to go. We analyze your market, identify your competitive advantages, and build a strategic roadmap that prioritizes the initiatives that will drive the most impact.',
      },
      {
        type: 'p',
        text: 'Then we help you execute with discipline, track progress, and adjust based on results.',
      },
    ],
  },
  {
    tag: 'BUSINESS PLANNING',
    title: 'Planning Turns Ambition Into Action',
    ctaLabel: 'Start Your Planning Process',
    blocks: [
      {
        type: 'p',
        text: 'A good business plan does more than satisfy investors. It gives your team clarity, aligns everyone around shared objectives, and creates a roadmap for disciplined growth.',
      },
      { type: 'h3', text: 'Why Most Business Plans Fail' },
      {
        type: 'p',
        text: "Traditional business plans are often 50, page documents that get written and then shelved. They lack specificity, aren't connected to actual execution, and don't evolve as market conditions change.",
      },
      { type: 'h3', text: 'What Makes a Business Plan Actually Useful' },
      { type: 'p', text: 'A business plan that drives real results:' },
      {
        type: 'ul',
        items: [
          { text: 'Is specific and realistic, not aspirational fiction' },
          { text: 'Breaks down big goals into quarterly milestones' },
          { text: 'Clearly assigns ownership and accountability' },
          { text: 'Includes the financial projections and cash flow scenarios' },
          { text: 'Identifies key risks and mitigation strategies' },
          { text: 'Is reviewed and updated regularly (not annually)' },
        ],
      },
      { type: 'h3', text: 'The Strategic Planning Process' },
      { type: 'p', text: 'We help you:' },
      {
        type: 'ul',
        items: [
          { text: 'Define your vision, mission, and core values' },
          { text: 'Analyze your market, competitors, and opportunities' },
          { text: 'Set realistic, measurable goals for the next 12, 24 months' },
          {
            text: 'Build detailed financial projections based on real assumptions',
          },
          { text: 'Create an execution roadmap with clear responsibilities' },
          { text: 'Establish review cycles to stay on track and adapt quickly' },
        ],
      },
      {
        type: 'p',
        text: "The result isn't just a document. It's a strategic framework that guides your team's decisions and keeps everyone aligned around growth.",
      },
    ],
  },
]

function ArticleBlock({ block }: { block: Block }) {
  if (block.type === 'p') {
    return <p className="mt-4 leading-relaxed text-muted-foreground">{block.text}</p>
  }
  if (block.type === 'h3') {
    return <h3 className="mt-8 text-lg font-semibold text-brand">{block.text}</h3>
  }
  return (
    <ul className="mt-4 flex flex-col gap-3">
      {block.items.map((item) => (
        <li key={item.text} className="flex gap-3 leading-relaxed">
          <span className="text-brand" aria-hidden="true">
            •
          </span>
          <span className="text-muted-foreground">
            {item.label ? (
              <strong className="font-semibold text-foreground">
                {item.label}{' '}
              </strong>
            ) : null}
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="EXPERT INSIGHTS"
          title="Think Strategically. Build Deliberately. Grow Sustainably."
          subtitle="Deep dives into the strategies, frameworks, and best practices that drive real business growth."
          image="/city-kualalumpur.png"
        />

        <div className="mx-auto max-w-3xl space-y-6 px-6 py-20 md:py-24">
          {articles.map((article) => (
            <article
              key={article.tag}
              className="rounded-[22px] border border-border bg-card p-7 md:p-10"
            >
              <span className="text-xs font-semibold tracking-[0.16em] text-muted-foreground">
                {article.tag}
              </span>
              <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight md:text-3xl">
                {article.title}
              </h2>
              {article.blocks.map((block, i) => (
                <ArticleBlock key={i} block={block} />
              ))}
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-foreground"
              >
                {article.ctaLabel}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <CtaBand
          title="Ready to apply these insights to your business?"
          subtitle="Let's work together to build clarity, strategy, and sustainable growth."
          buttonLabel="Book a consultation"
          href="/contact"
        />
      </main>
      <SiteFooter />
    </div>
  )
}

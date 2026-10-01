import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { ProcessSection } from '@/components/process-section'
import { InsightsSection } from '@/components/insights-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <InsightsSection />
      </main>
      <SiteFooter />
    </div>
  )
}

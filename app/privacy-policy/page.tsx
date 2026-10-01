import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Privacy Policy | Australasian Marketing & Consultancy',
  description:
    'How Australasian Marketing & Consultancy collects, uses, and protects your personal data.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero title="Privacy Policy" subtitle="Last updated: August 31, 2026" />

        <article className="mx-auto max-w-3xl px-6 py-20 md:py-24">
          <h2 className="text-xl font-semibold text-brand">Introduction</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Australasian Marketing &amp; Consultancy (&quot;we&quot;,
            &quot;our&quot;, or &quot;us&quot;) operates the Australasian
            Marketing &amp; Consultancy website. This page informs you of our
            policies regarding the collection, use, and disclosure of personal
            data when you use our service and the choices you have associated
            with that data.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-brand">
            Information Collection and Use
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            We collect several different types of information for various
            purposes to provide and improve our service to you.
          </p>

          <h3 className="mt-6 text-base font-semibold">
            Types of Data Collected:
          </h3>
          <ul className="mt-4 flex flex-col gap-4">
            <li className="leading-relaxed text-muted-foreground">
              <strong className="font-semibold text-foreground">
                Personal Data:
              </strong>{' '}
              While using our service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you (&quot;Personal Data&quot;). This may include, but is
              not limited to:
              <ul className="mt-3 flex flex-col gap-2 pl-5">
                {[
                  'Email address',
                  'First name and last name',
                  'Phone number',
                  'Address, State, Province, ZIP/Postal code, City',
                  'Cookies and Usage Data',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-brand" aria-hidden="true">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
            <li className="leading-relaxed text-muted-foreground">
              <strong className="font-semibold text-foreground">
                Usage Data:
              </strong>{' '}
              We may also collect information on how the service is accessed and
              used (&quot;Usage Data&quot;). This may include information such as
              your computer&apos;s Internet Protocol address (e.g. IP address),
              browser type, browser version, the pages you visit, the time and
              date of your visit, and other diagnostic data.
            </li>
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-brand">Use of Data</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Australasian Marketing &amp; Consultancy uses the collected data for
            various purposes:
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {[
              'To provide and maintain our service',
              'To notify you about changes to our service',
              'To allow you to participate in interactive features of our service when you choose to do so',
              'To provide customer support',
              'To gather analysis or valuable information so that we can improve our service',
              'To monitor the usage of our service',
              'To detect, prevent and address technical issues',
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 leading-relaxed text-muted-foreground"
              >
                <span className="text-brand" aria-hidden="true">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-brand">
            Security of Data
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            The security of your data is important to us, but remember that no
            method of transmission over the Internet or method of electronic
            storage is 100% secure. While we strive to use commercially
            acceptable means to protect your Personal Data, we cannot guarantee
            its absolute security.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-brand">
            Changes to This Privacy Policy
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page and
            updating the &quot;Last updated&quot; date at the top of this Privacy
            Policy.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-brand">Contact Us</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact
            us by email at Sales@australasianmarketingconsultancy.com.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-brand">Compliance</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            We are committed to ensuring that your information is protected in
            accordance with applicable privacy laws and regulations, including
            the Privacy Act 1988 (Cth) in Australia and the Privacy Act 2020 in
            New Zealand.
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}

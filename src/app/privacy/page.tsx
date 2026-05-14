import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — AccuNexum',
  description: 'AccuNexum privacy policy describing data collection and use practices for accunexum.com.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="border-b border-navy-100">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="font-medium uppercase tracking-wider text-sm text-accent-700 mb-4">
              Legal
            </p>
            <h1 className="font-heading text-4xl font-semibold text-navy-900 leading-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-navy-500">
              Effective date: May 14, 2026 &middot; Last updated: May 14, 2026
            </p>

            <div className="prose prose-navy mt-12 space-y-8 text-navy-700 leading-relaxed">
              <p className="text-sm italic text-navy-500 border-l-4 border-navy-200 pl-4">
                This privacy policy describes how AccuNexum, LLC (&ldquo;AccuNexum,&rdquo;
                &ldquo;we,&rdquo; or &ldquo;us&rdquo;) collects, uses, and protects
                information through this public marketing website (accunexum.com). It
                does not govern data handling under any client engagement, which is
                covered by separate contractual agreements including Business Associate
                Agreements where applicable.
              </p>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-3">
                  1. Information We Collect
                </h2>
                <p>
                  We collect only information you voluntarily provide and basic
                  technical information automatically logged by web infrastructure.
                </p>
                <p className="mt-3">
                  <strong>Information you provide:</strong> If you contact us via email
                  or any future contact form, we receive your name, email address,
                  organization, and the contents of your message.
                </p>
                <p className="mt-3">
                  <strong>Information automatically collected:</strong> Standard web
                  server logs may include IP address, browser type, referring URL,
                  and timestamp. Our hosting provider (Vercel) may also collect
                  analytics data for performance and operational purposes.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-3">
                  2. How We Use Information
                </h2>
                <p>We use information you provide solely to:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
                  <li>Respond to inquiries about AccuNexum&apos;s services</li>
                  <li>Provide requested information about the framework and platform</li>
                  <li>Communicate with you about prospective engagements</li>
                  <li>Maintain records of our communications</li>
                </ul>
                <p className="mt-3">
                  We do not sell, rent, or share your personal information with
                  third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-3">
                  3. No PHI on This Site
                </h2>
                <p>
                  This website is a public marketing site and is not designed for
                  the submission of Protected Health Information (PHI). Please do
                  not include PHI in any communication sent through this site. PHI
                  is handled exclusively through engaged client systems under
                  applicable Business Associate Agreements.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-3">
                  4. Cookies and Tracking
                </h2>
                <p>
                  We do not use marketing or advertising cookies on this site.
                  Vercel, our hosting provider, may set technical cookies necessary
                  for site operation. We do not use third-party analytics such as
                  Google Analytics, advertising trackers, or social media pixels.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-3">
                  5. Data Retention
                </h2>
                <p>
                  We retain inquiry communications for as long as a business
                  relationship is reasonably foreseeable, typically not less than
                  two years and not more than seven years unless retention is
                  required by law or contractual obligation.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-3">
                  6. Security
                </h2>
                <p>
                  We apply reasonable administrative, technical, and physical
                  safeguards to protect information. All site traffic is served over
                  HTTPS. Inquiry email is processed in accordance with industry-
                  standard email security practices.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-3">
                  7. Your Rights
                </h2>
                <p>
                  Depending on your jurisdiction, you may have rights to access,
                  correct, or delete personal information we hold about you. To
                  exercise these rights, contact us at the address below. We will
                  respond within a reasonable period and in accordance with
                  applicable law.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-3">
                  8. Children
                </h2>
                <p>
                  This site is not directed to children under 13, and we do not
                  knowingly collect personal information from children.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-3">
                  9. Changes to This Policy
                </h2>
                <p>
                  We may update this policy from time to time. Material changes will
                  be noted by updating the &ldquo;Last updated&rdquo; date above.
                  Continued use of the site after changes constitutes acceptance.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-3">
                  10. Contact
                </h2>
                <p>
                  Questions about this policy may be directed to{' '}
                  <a
                    href="mailto:sales@accunexum.com"
                    className="text-accent-700 hover:underline"
                  >
                    sales@accunexum.com
                  </a>.
                </p>
              </section>

              <p className="text-sm italic text-navy-500 border-t border-navy-200 pt-6 mt-12">
                This policy is provided as a good-faith description of our practices
                and is intended as a starting point. AccuNexum recommends review by
                qualified counsel for jurisdiction-specific compliance considerations,
                particularly under HIPAA, state health privacy law, GDPR, and CCPA.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

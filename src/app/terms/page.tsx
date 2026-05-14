import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Use — AccuNexum',
  description: 'Terms of use for the accunexum.com public website.',
};

export default function TermsPage() {
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
              Terms of Use
            </h1>
            <p className="mt-4 text-sm text-navy-500">
              Effective date: May 14, 2026 &middot; Last updated: May 14, 2026
            </p>

            <div className="prose prose-navy mt-12 space-y-8 text-navy-700 leading-relaxed">
              <p className="text-sm italic text-navy-500 border-l-4 border-navy-200 pl-4">
                These terms govern your use of accunexum.com, the public marketing
                website of AccuNexum, LLC. They do not govern any client engagement,
                which is covered by separate contractual agreements.
              </p>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-3">
                  1. Acceptance
                </h2>
                <p>
                  By accessing or using this website, you agree to these Terms of
                  Use. If you do not agree, please do not use the site.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-3">
                  2. Informational Use Only
                </h2>
                <p>
                  Information on this site is provided for general informational
                  purposes. It does not constitute legal, regulatory, clinical, or
                  professional advice. Specific advice for any organization or
                  situation requires a separate engagement with appropriate
                  professionals.
                </p>
                <p className="mt-3">
                  References to laws, regulations, frameworks, and standards on
                  this site are provided as orientation only. The applicable
                  authoritative text of each governs any specific application.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-3">
                  3. Intellectual Property
                </h2>
                <p>
                  All content on this site — including the AccuNexum name, logo,
                  framework references, platform descriptions, and supporting
                  materials — is the intellectual property of AccuNexum, LLC or its
                  licensors, protected by U.S. and international copyright,
                  trademark, and related laws.
                </p>
                <p className="mt-3">
                  You may view and print site content for personal, non-commercial
                  reference. Any other use — including reproduction, distribution,
                  derivative work, public display, or commercial use — requires
                  prior written permission.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-3">
                  4. Restrictions
                </h2>
                <p>You may not:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
                  <li>Use the site to transmit unlawful, harmful, or infringing material</li>
                  <li>Submit Protected Health Information (PHI) through any contact mechanism on this site</li>
                  <li>Attempt to gain unauthorized access to any part of the site or related systems</li>
                  <li>Interfere with the site&apos;s operation or security</li>
                  <li>Use automated means to scrape, copy, or harvest site content</li>
                  <li>Misrepresent your identity or affiliation in any communication</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-3">
                  5. No Warranty
                </h2>
                <p>
                  The site is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo;
                  AccuNexum makes no warranties, express or implied, regarding the
                  site or its content, including warranties of accuracy,
                  completeness, fitness for a particular purpose, or non-
                  infringement. AccuNexum does not warrant that the site will be
                  uninterrupted or error-free.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-3">
                  6. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by law, AccuNexum, its officers,
                  members, employees, and agents are not liable for any indirect,
                  incidental, consequential, or punitive damages arising out of or
                  related to your use of this site, whether based on contract,
                  tort, statute, or any other legal theory.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-3">
                  7. Third-Party Links
                </h2>
                <p>
                  This site may reference third-party websites or services for
                  informational purposes. AccuNexum is not responsible for the
                  content or practices of any third-party site or service.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-3">
                  8. Changes
                </h2>
                <p>
                  AccuNexum may modify these Terms of Use at any time by posting
                  updated terms on this page. The &ldquo;Last updated&rdquo; date
                  above will reflect the most recent change. Continued use of the
                  site after changes constitutes acceptance.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-3">
                  9. Governing Law
                </h2>
                <p>
                  These terms are governed by the laws of the State of [STATE],
                  United States, without regard to its conflict of law principles.
                  Any dispute arising under these terms shall be resolved in the
                  state and federal courts of that jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-3">
                  10. Contact
                </h2>
                <p>
                  Questions about these terms may be directed to{' '}
                  <a
                    href="mailto:sales@accunexum.com"
                    className="text-accent-700 hover:underline"
                  >
                    sales@accunexum.com
                  </a>.
                </p>
              </section>

              <p className="text-sm italic text-navy-500 border-t border-navy-200 pt-6 mt-12">
                These terms are provided as a starting framework. AccuNexum
                recommends review by qualified counsel before relying on them in any
                commercial context. State-specific terms (e.g., governing law,
                consumer protection statutes) should be tailored to the
                jurisdiction in which AccuNexum operates.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function Problem() {
  return (
    <section className="border-b border-navy-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="font-medium uppercase tracking-wider text-sm text-accent-700 mb-4">
            The Problem
          </p>
          <h2 className="font-heading text-4xl font-semibold text-navy-900 leading-tight">
            AI Governance Is Not Optional
          </h2>
          <div className="mt-8 space-y-6 text-lg text-navy-600 leading-relaxed">
            <p>
              Healthcare organizations are deploying AI faster than their governance
              can keep up. Models touch clinical decisions, coverage determinations,
              patient communications, and revenue cycles &mdash; often without a
              documented assessment of who reviews them, what risks they carry, or
              what happens when they fail.
            </p>
            <p>
              A new category of legal exposure is emerging that traditional HIPAA
              compliance does not address. Class actions over algorithmic claim denials
              and AI-driven coverage decisions are testing the legal theory that
              algorithmic decisions without genuine human oversight constitute breach
              of duty. If the theory holds, the precedent reshapes AI governance
              economics across both payer and provider sectors.
            </p>
            <p>
              When the regulator calls &mdash; about an AI decision, a data breach, a
              vendor cascade, or anything else &mdash; &ldquo;we trusted the vendor&rdquo;
              is not a defense. Section 1557, HTI-1, the FDA, state AI bills, and the
              NAIC Model Bulletin all assume the organization can demonstrate a
              defensible governance program. Most cannot.
            </p>
            <p className="text-navy-900 font-medium">
              AccuNexum closes that gap with a framework rigorous enough for regulatory
              scrutiny and a platform operational enough for the people doing the work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

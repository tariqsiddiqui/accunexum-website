const VERTICALS = [
  {
    title: 'Healthcare',
    body: 'Health systems, payers, and life-sciences organizations deploying AI in clinical decision support, prior authorization, claims, SaMD, and post-market surveillance — under HIPAA, HHS Section 1557, FDA, NAIC, and state law.',
  },
  {
    title: 'Financial Services & Insurance',
    body: 'Banks, asset managers, and insurers deploying AI in credit decisioning, fraud triage, underwriting, and claims adjudication — under CFPB, FRB, OCC, NAIC, and state algorithmic accountability law.',
  },
  {
    title: 'Public Sector',
    body: 'Federal and state agencies deploying AI in benefits adjudication, custodial decisions, regulatory triage, and employment — under EU AI Act adequacy, OMB M-24-10, and state-level public-sector AI mandates.',
  },
];

const SPONSORS = [
  'General Counsel',
  'Chief Risk Officer',
  'Chief Compliance Officer',
  'Chief Medical Officer',
  'Audit Committee',
  'Board of Directors',
];

export function ForWhom() {
  return (
    <section id="for-whom" className="border-b border-navy-100 bg-navy-50/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl mb-12">
          <p className="font-medium uppercase tracking-wider text-sm text-accent-700 mb-4">
            For Whom
          </p>
          <h2 className="font-heading text-4xl font-semibold text-navy-900 leading-tight">
            Fortune 500 enterprises. Named executive sponsors.
          </h2>
          <p className="mt-6 text-lg text-navy-600 leading-relaxed">
            Built for organizations where AI has been entering through multiple
            channels — built, bought, embedded, and shadow — for eighteen months
            or more, and where executive accountability for AI decisions cannot
            be delegated.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {VERTICALS.map((v) => (
            <div key={v.title} className="rounded-lg border border-navy-200 bg-white p-6">
              <h3 className="font-heading text-lg font-semibold text-navy-900 mb-3">
                {v.title}
              </h3>
              <p className="text-navy-600 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-navy-200 bg-white p-6">
          <p className="font-medium uppercase tracking-wider text-xs text-accent-700 mb-3">
            Typical sponsors
          </p>
          <p className="text-navy-700 leading-relaxed">
            {SPONSORS.join(' · ')}
          </p>
        </div>
      </div>
    </section>
  );
}

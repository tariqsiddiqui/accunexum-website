const VERTICALS = [
  {
    title: 'For Provider Organizations',
    body: 'Health systems and large physician groups deploying clinical AI, ambient documentation, and operational AI under HIPAA, Section 1557, and state law. Framework calibration for clinical safety, equity, and quality.',
  },
  {
    title: 'For Payer Organizations',
    body: 'Health plans deploying AI in coverage decisions, prior authorization, claims, and member communications under HIPAA, ERISA, NAIC, and state insurance law. Framework calibration for coverage decision integrity and appeal rights.',
  },
  {
    title: 'For Life Sciences Organizations',
    body: 'Pharma, medtech, and clinical research organizations deploying AI in SaMD, clinical operations, and post-market surveillance under FDA, HIPAA, and quality system regulations. Framework calibration for regulatory submission and post-market accountability.',
  },
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
            Built For Healthcare&apos;s Three Verticals
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {VERTICALS.map((v) => (
            <div key={v.title} className="rounded-lg border border-navy-200 bg-white p-6">
              <h3 className="font-heading text-lg font-semibold text-navy-900 mb-3">
                {v.title}
              </h3>
              <p className="text-navy-600 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

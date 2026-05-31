const DOMAINS = [
  {
    number: '1',
    title: 'Decision Register & Classification',
    body: 'A tiered catalog of the consequential decisions where AI is involved — clinical, financial, regulatory, employment, custodial — with named owners and exposure tiers. Inventories of AI tools are no longer actionable; the unit of analysis is the decision.',
  },
  {
    number: '2',
    title: 'Intake & Approval',
    body: 'A single defined process every AI-influenced decision class passes through before production. Four review tracks calibrated to exposure tier and severity.',
  },
  {
    number: '3',
    title: 'Risk, Bias & Equity Assessment',
    body: 'Algorithmic Impact Assessment across five lenses — algorithmic, bias and equity, safety, privacy, cybersecurity — with failure-mode mapping against the canonical AI governance failure modes.',
  },
  {
    number: '4',
    title: 'Autonomy Envelopes & Lifecycle Controls',
    body: 'What the system is permitted to decide, under what conditions, with what fallbacks. Pre-deployment validation, hyper-monitoring, drift detection, change management, and kill-switch criteria with named approvers.',
  },
  {
    number: '5',
    title: 'Decision Authority & Governance Bodies',
    body: 'Named accountability at every escalation tier, with explicit transfer protocols. The AI Governance Committee, board oversight, escalation paths — decisions made by the right people, in the right venue, on the record.',
  },
  {
    number: '6',
    title: 'Vendor & Third-Party Management',
    body: 'Five-category vendor taxonomy. Due-diligence rigor calibrated to category. Contract clause libraries for BAAs, foundation models, and sensitive decision classes.',
  },
  {
    number: '7',
    title: 'Audit, Documentation & Regulatory Response',
    body: 'Per-decision evidentiary trail designed to survive deposition, regulatory subpoena, and class-certification motions. Audit workpapers, regulatory inquiry response, litigation hold, annual governance reporting.',
  },
];

export function Framework() {
  return (
    <section id="framework" className="border-b border-navy-100 bg-navy-50/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl mb-16">
          <p className="font-medium uppercase tracking-wider text-sm text-accent-700 mb-4">
            The Framework
          </p>
          <h2 className="font-heading text-4xl font-semibold text-navy-900 leading-tight">
            The AccuNexum Framework
          </h2>
          <p className="mt-6 text-lg text-navy-600 leading-relaxed">
            Seven domains. One coherent system. The operating substrate
            underneath every engagement — designed for defensibility, organized
            around the consequential decision, not the AI asset.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DOMAINS.map((d) => (
            <div
              key={d.number}
              className="rounded-lg border border-navy-200 bg-white p-6"
            >
              <div className="mb-3 flex items-baseline gap-3">
                <span className="font-heading text-3xl font-semibold text-accent-700">
                  {d.number}
                </span>
                <h3 className="font-heading text-lg font-semibold text-navy-900">
                  {d.title}
                </h3>
              </div>
              <p className="text-navy-600 leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

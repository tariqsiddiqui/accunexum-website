const DOMAINS = [
  {
    number: '1',
    title: 'AI Inventory & Classification',
    body: 'Every AI system in operation, classified by risk tier, PHI exposure, deployment model, and autonomy level. You cannot govern what you cannot see.',
  },
  {
    number: '2',
    title: 'Intake & Approval',
    body: 'A single defined process every AI system passes through before it touches patients, members, or operational workflows. Four review tracks calibrated to risk.',
  },
  {
    number: '3',
    title: 'Risk, Bias & Equity Assessment',
    body: 'The Algorithmic Impact Assessment across five lenses: algorithmic, bias and equity, safety, privacy, and cybersecurity. Plus vertical-specific assessments for clinical, coverage, and quality contexts.',
  },
  {
    number: '4',
    title: 'Lifecycle Controls',
    body: 'Pre-deployment validation, deployment runbooks, hyper-monitoring, drift detection, change management, reapproval, retirement. Governance that holds in production, not just on paper.',
  },
  {
    number: '5',
    title: 'Governance Bodies & Decision Rights',
    body: 'The AI Governance Committee, board oversight, escalation protocols, conflict resolution. Decisions made by the right people with the right authority in the right venue.',
  },
  {
    number: '6',
    title: 'Vendor & Third-Party Management',
    body: 'Five-category vendor taxonomy. Due diligence rigor calibrated to category. Contract clause libraries for BAAs, foundation models, and sensitive use cases.',
  },
  {
    number: '7',
    title: 'Audit, Documentation & Regulatory Response',
    body: 'The Master Document Index, audit workpapers, regulatory inquiry response, litigation hold, annual governance reporting. Built so the next inquiry doesn’t catch you flat-footed.',
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
            Seven domains. One coherent system. Designed for defensibility.
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

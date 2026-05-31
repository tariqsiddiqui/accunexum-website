const ENGAGEMENTS = [
  {
    number: '01',
    name: 'Decision Risk Map',
    tagline: 'The diagnostic.',
    duration: '4–6 weeks · fixed fee',
    sponsors: 'General Counsel · Chief Risk Officer · Chief Compliance Officer · Chief Medical Officer',
    summary:
      'Identify the consequential decisions in your enterprise where AI is already involved, classify them by exposure tier, and deliver a sequenced remediation backlog the board can sign off on.',
    deliverables: [
      'Decision register — tiered catalog of consequential decisions, named owners, decision authority documented',
      'Exposure classification — clinical, financial, regulatory, employment, custodial; severity tiers',
      'Decision-authority gap analysis — where named accountability and de facto authority diverge',
      'Failure-mode mapping — each decision class evaluated against the six canonical AI governance failure modes',
      'Sequenced remediation backlog with effort and risk estimates',
      'Board-ready executive readout',
    ],
  },
  {
    number: '02',
    name: 'Autonomy Envelope Design',
    tagline: 'The flagship.',
    duration: '8–12 weeks · fixed fee or milestone',
    sponsors: 'General Counsel · Chief Risk Officer · Chief Medical Officer · Operational owner',
    summary:
      'Design and operationalize the governance regime for one high-stakes AI decision system. The deliverable is the autonomy envelope — what the system is permitted to decide, under what conditions, with what fallbacks — documented to survive deposition.',
    deliverables: [
      'Autonomy envelope specification — scope of authority, conditions, fallbacks',
      'Decision authority register — named accountability at every escalation tier, transfer protocols',
      'Validation regime — prospective evaluation, performance floor, demographic-performance testing, drift monitoring',
      'Telemetry and audit specification — per-decision evidentiary trail',
      'Kill-switch criteria with named approvers and pre-authorized procedures',
      'Human-in-the-loop design — accountable review, not theater',
      'Implementation roadmap with engineering and process work clearly separated',
    ],
  },
  {
    number: '03',
    name: 'Fractional Chief AI Decision Officer',
    tagline: 'The seat at the table.',
    duration: '6–12 months · executive day-rate retainer',
    sponsors: 'CEO · Board · Audit Committee · General Counsel',
    summary:
      'A standing executive accountable for the enterprise AI decision regime — alongside the General Counsel, Chief Risk Officer, and Chief Medical or Compliance Officer. This role does not yet exist on most org charts. It will be standard by 2028.',
    deliverables: [
      'Named executive accountability with explicit authority and defined scope',
      'Quarterly decision-portfolio review with the audit committee or board',
      'Continuous decision-class governance — new use cases enter the framework before deployment',
      'Cross-functional alignment across legal, compliance, clinical/operational, and engineering',
      'Regulatory readiness — EU AI Act, FDA SaMD, HHS Section 1557, state algorithmic accountability',
      'Crisis response — qualified expertise already named, briefed, and at the executive table',
    ],
  },
];

export function Engagement() {
  return (
    <section id="engagements" className="border-b border-navy-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl mb-16">
          <p className="font-medium uppercase tracking-wider text-sm text-accent-700 mb-4">
            How We Engage
          </p>
          <h2 className="font-heading text-4xl font-semibold text-navy-900 leading-tight">
            Three Engagements. One Thesis.
          </h2>
          <p className="mt-6 text-lg text-navy-600 leading-relaxed">
            Designed as a coherent product line and a natural sales sequence —
            diagnostic, through high-stakes deployment, to standing executive
            accountability. Most enterprises enter at the Decision Risk Map and
            move into Autonomy Envelope Design for the highest-exposure use cases
            it surfaces.
          </p>
        </div>

        <div className="space-y-8">
          {ENGAGEMENTS.map((e) => (
            <div
              key={e.number}
              className="rounded-lg border border-navy-200 bg-navy-50/40 p-8 md:p-10"
            >
              <div className="flex flex-wrap items-baseline gap-4 mb-2">
                <span className="font-heading text-3xl font-semibold text-accent-700">
                  {e.number}
                </span>
                <h3 className="font-heading text-2xl font-semibold text-navy-900">
                  {e.name}
                </h3>
                <span className="text-sm italic text-navy-500">{e.tagline}</span>
              </div>
              <p className="text-sm text-navy-500 mb-1">{e.duration}</p>
              <p className="text-sm text-navy-500 mb-6">Typical sponsors · {e.sponsors}</p>
              <p className="text-navy-700 leading-relaxed mb-6">{e.summary}</p>
              <ul className="space-y-2">
                {e.deliverables.map((d, i) => (
                  <li key={i} className="flex gap-3 items-baseline text-navy-600 leading-relaxed">
                    <span className="text-accent-700 select-none">·</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-3xl text-lg text-navy-700 leading-relaxed font-medium">
          This is not staff augmentation. Not a tool sale. Not a model-validation
          report. The work is closer to fiduciary advisory than to consulting —
          standing accountability for the consequential decisions your
          organization cannot afford to delegate.
        </p>
      </div>
    </section>
  );
}

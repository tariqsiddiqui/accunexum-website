const CASES = [
  {
    label: 'AI Liability — Coverage Decisions',
    headline: 'Cigna PXDX Algorithm',
    summary:
      'A 2023 class action alleges Cigna used an algorithm to deny claims at scale without genuine physician review — with average physician review time reported at 1.2 seconds.',
    tag: 'What AccuNexum directly prevents',
    tagVariant: 'prevent' as const,
    response:
      'Domain 2 forces documented human oversight before deployment. Domain 3 Template 4 requires Coverage Decision impact assessment. Domain 5 mandates decision-rights clarity. Domain 4 surfaces denial pattern anomalies before they become class actions.',
  },
  {
    label: 'AI Liability — Clinical Decisions',
    headline: 'UnitedHealth / NaviHealth',
    summary:
      'A 2023 class action alleges nH Predict was used to deny Medicare Advantage post-acute care with a reported 90% error rate when challenged. Senate Subcommittee report followed in 2024.',
    tag: 'What AccuNexum directly prevents',
    tagVariant: 'prevent' as const,
    response:
      'Domain 3 requires pre-deployment Algorithmic Impact Assessment across five lenses including bias and equity. Domain 4 Monitoring Intelligence detects accuracy and equity drift. Domain 5 Escalation Protocol routes systemic disparities to the AI Governance Committee. The 90% error rate would not survive a working monitoring program.',
  },
  {
    label: 'Vendor Cascade',
    headline: 'Change Healthcare Ransomware',
    summary:
      'The February 2024 attack on Change Healthcare disrupted U.S. claims processing for weeks. UnitedHealth disclosed $872M+ in initial costs. Estimated 100M+ individuals affected.',
    tag: 'Where AccuNexum reduces exposure',
    tagVariant: 'reduce' as const,
    response:
      'AccuNexum cannot prevent another organization’s cyberattack. Domain 6 (Vendor Management) forces categorization of critical foundation-tier vendors, continuous monitoring of vendor risk posture, contractual provisions for incident notification and audit rights, and documented continuity planning — changing how an organization is exposed to vendor cascade events.',
  },
];

const tagStyles = {
  prevent: 'bg-accent-50 text-accent-800 ring-accent-200',
  reduce: 'bg-amber-50 text-amber-900 ring-amber-200',
  defend: 'bg-navy-100 text-navy-800 ring-navy-200',
};

export function Stakes() {
  return (
    <section id="stakes" className="border-b border-navy-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl mb-12">
          <p className="font-medium uppercase tracking-wider text-sm text-accent-700 mb-4">
            The Stakes
          </p>
          <h2 className="font-heading text-4xl font-semibold text-navy-900 leading-tight">
            The Next Major Healthcare Exposure Event Will Not Be a Database Breach.
          </h2>
          <p className="mt-6 text-lg text-navy-600 leading-relaxed">
            It will be an AI lawsuit. The cases below are the leading edge of a category
            of legal exposure traditional HIPAA compliance does not address. AccuNexum
            was built specifically for this category, with secondary value in regulatory
            response defensibility for the broader healthcare environment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {CASES.map((c) => (
            <article
              key={c.headline}
              className="flex flex-col rounded-lg border border-navy-200 bg-white p-6"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-navy-500">
                {c.label}
              </p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-navy-900 leading-snug">
                {c.headline}
              </h3>
              <p className="mt-4 text-sm text-navy-600 leading-relaxed">{c.summary}</p>

              <div className="mt-6 border-t border-navy-100 pt-5">
                <span
                  className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${tagStyles[c.tagVariant]}`}
                >
                  {c.tag}
                </span>
                <p className="mt-3 text-sm text-navy-700 leading-relaxed">{c.response}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-lg border-l-4 border-navy-300 bg-navy-50/40 p-6 max-w-3xl">
          <p className="text-sm text-navy-700 leading-relaxed">
            <strong className="font-medium text-navy-900">Honest scope.</strong> AccuNexum
            is not a cybersecurity tool, a SIEM, or a privacy program. It does not prevent
            ransomware, insider theft, or configuration errors. What it does: govern AI
            deployments before they create liability, and provide the documented
            governance record that shapes regulatory inquiry outcomes when something does
            go wrong &mdash; for any reason.
          </p>
        </div>
      </div>
    </section>
  );
}

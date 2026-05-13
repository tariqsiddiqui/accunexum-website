const CAPABILITIES = [
  'Classifies new AI use cases against framework definitions, with explicit reasoning',
  'Drafts Algorithmic Impact Assessments that humans then review and finalize',
  'Surfaces similar past decisions to support risk acceptance and conditional approval',
  'Monitors deployed AI for drift, bias, and predictive risk',
  'Accelerates incident and regulatory response with cross-client pattern intelligence',
  'Prepares AIGC meeting materials, drafts minutes, tracks action items',
  'Personalizes the framework to the client’s vertical, size, and regulatory exposure',
];

export function Platform() {
  return (
    <section id="platform" className="border-b border-navy-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl mb-12">
          <p className="font-medium uppercase tracking-wider text-sm text-accent-700 mb-4">
            The Platform
          </p>
          <h2 className="font-heading text-4xl font-semibold text-navy-900 leading-tight">
            The AccuNexum Operating Platform
          </h2>
          <p className="mt-6 text-lg text-navy-600 leading-relaxed">
            The framework is the substance. The platform is how the work actually
            gets done.
          </p>
          <p className="mt-4 text-lg text-navy-600 leading-relaxed">
            AccuNexum&apos;s operating platform is AI-native, multi-tenant, and built
            for healthcare governance teams. It implements the full seven-domain
            framework, with AI capabilities embedded in the workflow — not as features
            bolted on, but as the way the platform operates.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="font-heading text-xl font-semibold text-navy-900 mb-4">
              What it does
            </h3>
            <ul className="space-y-3">
              {CAPABILITIES.map((cap, i) => (
                <li key={i} className="flex gap-3 text-navy-600 leading-relaxed">
                  <span className="text-accent-700 font-bold mt-1">·</span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold text-navy-900 mb-4">
              What it requires of you
            </h3>
            <p className="text-navy-600 leading-relaxed">
              The judgment. The decisions. The accountability. The platform doesn&apos;t
              replace governance — it makes governance possible at the scale and speed
              healthcare AI now demands.
            </p>
            <div className="mt-8 rounded-lg border-l-4 border-accent-700 bg-accent-50/40 p-6">
              <h4 className="font-heading text-base font-semibold text-navy-900 mb-2">
                Self-governed by the same framework.
              </h4>
              <p className="text-navy-700 text-sm leading-relaxed">
                Every AI capability the platform operates is itself a registered Use
                Case under the framework, with its own risk classification, AIA,
                monitoring, and audit trail. We practice what we sell.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

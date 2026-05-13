const STEPS = [
  'Framework personalization to the client’s profile',
  'Platform deployment and integration with existing systems',
  'AccuNexum consulting support for governance program design',
  'Ongoing platform operation with AccuNexum visibility into engagement health',
  'Quarterly framework refresh as the regulatory landscape evolves',
];

export function Engagement() {
  return (
    <section className="border-b border-navy-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="font-medium uppercase tracking-wider text-sm text-accent-700 mb-4">
            How We Engage
          </p>
          <h2 className="font-heading text-4xl font-semibold text-navy-900 leading-tight">
            Co-Managed Governance
          </h2>
          <p className="mt-6 text-lg text-navy-600 leading-relaxed">
            AccuNexum operates as a co-managed governance partner. The client retains
            accountability, decision authority, and operational ownership. AccuNexum
            brings the framework, the platform, and the consulting expertise that
            makes the program operate.
          </p>

          <h3 className="font-heading text-lg font-semibold text-navy-900 mt-12 mb-4">
            Typical engagement
          </h3>
          <ul className="space-y-3">
            {STEPS.map((s, i) => (
              <li key={i} className="flex gap-4 items-baseline">
                <span className="font-heading text-sm font-semibold text-accent-700 min-w-[2rem]">
                  0{i + 1}
                </span>
                <span className="text-navy-600 leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-lg text-navy-700 leading-relaxed font-medium">
            This is not staff augmentation. It is not a tool sale. It is a multi-year
            governance partnership underwritten by a framework, operated through a
            platform, and supported by a consulting practice.
          </p>
        </div>
      </div>
    </section>
  );
}

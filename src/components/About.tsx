export function About() {
  return (
    <section id="about" className="border-b border-navy-100 bg-navy-50/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="font-medium uppercase tracking-wider text-sm text-accent-700 mb-4">
            About
          </p>
          <h2 className="font-heading text-4xl font-semibold text-navy-900 leading-tight">
            About AccuNexum
          </h2>
          <div className="mt-8 space-y-6 text-lg text-navy-600 leading-relaxed">
            <p>
              AccuNexum was founded to address a structural gap in healthcare AI
              deployment: the absence of a defensible governance framework rigorous
              enough for the regulatory environment and operational enough for the
              teams doing the work.
            </p>
            <p>
              The AccuNexum Framework synthesizes HIPAA Privacy and Security Rules,
              HHS HTI-1 / DSI, Section 1557, FDA SaMD and AI/ML guidance, NIST AI
              Risk Management Framework, ISO 42001, NAIC Model Bulletin, and material
              state AI law into a single coherent operating model across seven
              domains.
            </p>
            <p>
              The AccuNexum Operating Platform implements that framework in
              production — multi-tenant, AI-native, designed for healthcare governance
              teams and the consulting practices that support them.
            </p>
            <p className="text-navy-500 italic">
              Based in the United States. Working with health systems, health plans,
              and life sciences companies nationwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section id="top" className="border-b border-navy-100 bg-gradient-to-b from-white to-navy-50/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="font-medium uppercase tracking-wider text-sm text-accent-700 mb-6">
          AccuNexum
        </p>
        <h1 className="font-heading text-5xl font-semibold text-navy-900 leading-tight md:text-6xl">
          Healthcare AI,<br />Governed.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-navy-600 leading-relaxed md:text-xl">
          AccuNexum builds the framework and the operating platform that healthcare
          organizations use to deploy AI defensibly — across HIPAA, Section 1557,
          FDA, NAIC, and the regulatory landscape that&apos;s still forming.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-md bg-accent-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-accent-800"
          >
            Request a Briefing
          </a>
          <a
            href="#framework"
            className="rounded-md border border-navy-300 bg-white px-6 py-3 text-base font-medium text-navy-700 hover:bg-navy-50"
          >
            Read the Framework
          </a>
        </div>
      </div>
    </section>
  );
}

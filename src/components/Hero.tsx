export function Hero() {
  return (
    <section id="top" className="border-b border-navy-100 bg-gradient-to-b from-white to-navy-50/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="font-medium uppercase tracking-wider text-sm text-accent-700 mb-6">
          AccuNexum
        </p>
        <h1 className="font-heading text-5xl font-semibold text-navy-900 leading-tight md:text-6xl">
          Say yes to AI<br />without legal saying no.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-navy-600 leading-relaxed md:text-xl">
          AI governance is decision governance, not asset governance. We help
          Fortune 500 enterprises in healthcare, financial services, insurance,
          and the public sector govern the consequential decisions where AI is
          already involved — built to survive deposition, regulatory subpoena,
          and the board&apos;s next question.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-md bg-accent-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-accent-800"
          >
            Request a Briefing
          </a>
          <a
            href="#engagements"
            className="rounded-md border border-navy-300 bg-white px-6 py-3 text-base font-medium text-navy-700 hover:bg-navy-50"
          >
            See the Engagements
          </a>
        </div>
      </div>
    </section>
  );
}

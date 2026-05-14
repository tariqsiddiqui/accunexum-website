export function Contact() {
  return (
    <section id="contact" className="bg-navy-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="font-medium uppercase tracking-wider text-sm text-accent-400 mb-4">
            Contact
          </p>
          <h2 className="font-heading text-4xl font-semibold leading-tight">
            Get In Touch
          </h2>
          <div className="mt-8 space-y-4 text-lg text-navy-200 leading-relaxed">
            <p>
              AccuNexum is actively engaging with design partner organizations
              interested in operationalizing AI governance.
            </p>
            <p>
              If you are a healthcare organization deploying AI and grappling with
              the governance gap — or a clinical leader, compliance officer, or
              general counsel responsible for AI risk in your organization — we&apos;d
              like to hear from you.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="mailto:sales@accunexum.com"
              className="inline-flex items-center gap-3 rounded-md bg-accent-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-accent-700"
            >
              sales@accunexum.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

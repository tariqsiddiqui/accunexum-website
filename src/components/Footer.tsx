export function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-800 text-navy-400">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
        <div>
          <p className="font-heading text-base font-semibold text-white">AccuNexum</p>
          <p className="text-sm mt-1">Defensible AI Governance for Healthcare</p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms of Use</a>
            <a href="mailto:sales@accunexum.com" className="hover:text-white">Contact</a>
          </nav>
          <p className="text-xs text-navy-500">
            &copy; {new Date().getFullYear()} AccuNexum, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

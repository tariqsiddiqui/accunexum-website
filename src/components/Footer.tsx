export function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-800 text-navy-400">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <p className="font-heading text-base font-semibold text-white">AccuNexum</p>
          <p className="text-sm mt-1">Defensible AI Governance for Healthcare</p>
        </div>
        <p className="text-sm text-navy-500">
          &copy; {new Date().getFullYear()} AccuNexum, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

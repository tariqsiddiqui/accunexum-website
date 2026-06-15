export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-800 bg-navy-900">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-heading text-xl font-semibold text-white">
          AccuNexum
        </a>
        <ul className="hidden gap-8 text-sm font-medium text-navy-300 md:flex">
          <li><a href="#stakes" className="hover:text-white">Stakes</a></li>
          <li><a href="#framework" className="hover:text-white">Framework</a></li>
          <li><a href="#engagements" className="hover:text-white">Engagements</a></li>
          <li><a href="#for-whom" className="hover:text-white">For Whom</a></li>
          <li><a href="#about" className="hover:text-white">About</a></li>
        </ul>
        <a
          href="#contact"
          className="rounded-md border border-navy-700 bg-navy-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-navy-700"
        >
          Request a Briefing
        </a>
      </nav>
    </header>
  );
}

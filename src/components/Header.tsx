export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-heading text-xl font-semibold text-navy-900">
          AccuNexum
        </a>
        <ul className="hidden gap-8 text-sm font-medium text-navy-600 md:flex">
          <li><a href="#stakes" className="hover:text-accent-700">Stakes</a></li>
          <li><a href="#framework" className="hover:text-accent-700">Framework</a></li>
          <li><a href="#platform" className="hover:text-accent-700">Platform</a></li>
          <li><a href="#for-whom" className="hover:text-accent-700">For Whom</a></li>
          <li><a href="#about" className="hover:text-accent-700">About</a></li>
        </ul>
        <a
          href="#contact"
          className="rounded-md bg-accent-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-accent-800"
        >
          Request a Briefing
        </a>
      </nav>
    </header>
  );
}

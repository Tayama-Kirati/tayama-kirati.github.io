const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-10 bg-[var(--bg)] border-b border-black/10">
      <div className="max-w-3xl mx-auto px-6 py-4 flex gap-6 justify-center">
        {LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-sm font-medium text-[var(--ink)]/70 hover:text-[var(--accent)] transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

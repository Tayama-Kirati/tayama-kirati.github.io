import { NavLink } from 'react-router-dom';

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/education', label: 'Education' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <nav className="border-b border-black/10">
      <div className="max-w-3xl mx-auto px-6 py-4 flex gap-6 justify-center">
        {LINKS.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? 'text-[var(--accent)]' : 'text-[var(--ink)]/70 hover:text-[var(--accent)]'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

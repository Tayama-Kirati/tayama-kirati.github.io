import { Mail, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const EMAIL = 'tayamakirati@gmail.com';
const GITHUB_URL = 'https://github.com/Tayama-Kirati';
// TODO: replace with your real LinkedIn profile URL.
const LINKEDIN_URL = 'https://www.linkedin.com/in/tayama-kirati-0359372b8/';

const LINKS = [
  { href: `mailto:${EMAIL}`, icon: Mail, label: 'Email', value: EMAIL },
  { href: GITHUB_URL, icon: FaGithub, label: 'GitHub', value: 'GitHub', external: true },
  { href: LINKEDIN_URL, icon: FaLinkedin, label: 'LinkedIn', value: 'LinkedIn', external: true },
  { href: '/resume.pdf', icon: FileText, label: 'Resume', value: 'Download', download: true },
];

export default function Contact() {
  return (
    <section className="text-center">
      <h1 className="text-2xl font-bold text-[var(--ink)] mb-3">Get In Touch</h1>
      <p className="text-[var(--ink)]/60 text-sm mb-10">
        Have a project in mind or want to collaborate? Feel free to reach out.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {LINKS.map(({ href, icon: Icon, label, value, external, download }) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            download={download}
            className="flex flex-col items-center gap-2 group"
          >
            <span className="w-14 h-14 rounded-full bg-[var(--accent)] flex items-center justify-center shadow group-hover:bg-[var(--accent-dark)] transition-colors">
              <Icon size={20} className="text-white" />
            </span>
            <span className="font-semibold text-sm">{label}</span>
            <span className="text-xs text-[var(--ink)]/60 break-all">{value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

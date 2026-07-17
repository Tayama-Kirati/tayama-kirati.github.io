import { FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profile from '../assets/profile.jpg';

const BIO =
  "I'm a passionate and detail-oriented designer who enjoys turning ideas into meaningful digital experiences. With a strong interest in user-centered design, I focus on creating clean, intuitive, and visually engaging interfaces that solve real problems. I love exploring tools like Figma and continuously learning new design trends to improve my skills. Whether working independently or collaborating with a team, I aim to deliver thoughtful, functional, and impactful design solutions that enhance user satisfaction and bring ideas to life.";

const GITHUB_URL = 'https://github.com/Tayama-Kirati';
// TODO: replace with your real LinkedIn profile URL.
const LINKEDIN_URL = 'https://linkedin.com/';

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center gap-6">
      <img
        src={profile}
        alt="Tayama Kirati"
        className="w-40 h-40 rounded-full object-cover shadow-md"
      />

      <div>
        <h1 className="text-3xl font-bold text-[var(--ink)]">Tayama Kirati</h1>
        <p className="text-[var(--gold)] font-medium mt-1">
          UI/UX Designer &amp; Frontend Developer
        </p>
      </div>

      <p className="max-w-xl text-[var(--ink)]/70 leading-relaxed">{BIO}</p>

      <div className="flex gap-6 mt-2">
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 text-sm font-medium hover:text-[var(--gold)] transition-colors"
        >
          <FileText size={18} /> Resume
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm font-medium hover:text-[var(--gold)] transition-colors"
        >
          <FaGithub size={18} /> GitHub
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm font-medium hover:text-[var(--gold)] transition-colors"
        >
          <FaLinkedin size={18} /> LinkedIn
        </a>
      </div>
    </section>
  );
}

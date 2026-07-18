import { FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profile from '../assets/profile.jpg';

const BIO =
  "I'm a passionate and detail-oriented designer who enjoys turning ideas into meaningful digital experiences. With a strong interest in user-centered design, I focus on creating clean, intuitive, and visually engaging interfaces that solve real problems. I love exploring tools like Figma and continuously learning new design trends to improve my skills. Whether working independently or collaborating with a team, I aim to deliver thoughtful, functional, and impactful design solutions that enhance user satisfaction and bring ideas to life.";

const GITHUB_URL = 'https://github.com/Tayama-Kirati';
// TODO: replace with your real LinkedIn profile URL.
const LINKEDIN_URL = 'https://www.linkedin.com/in/tayama-kirati-0359372b8/';

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row gap-10 items-start">
      <img
        src={profile}
        alt="Tayama Kirati"
        className="w-full md:w-64 h-64 object-cover rounded-sm shadow-md flex-shrink-0"
      />

      <div className="flex-1">
        <h1 className="text-3xl font-bold text-[var(--ink)]">Tayama Kirati</h1>
        <p className="text-[var(--accent)] font-medium mt-1">
          UI/UX Designer &amp; Frontend Developer
        </p>

        <p className="text-[var(--ink)]/80 leading-relaxed mt-4">{BIO}</p>

        <div className="flex gap-6 mt-4">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 text-sm font-medium hover:text-[var(--accent)] transition-colors"
          >
            <FileText size={18} /> Resume
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium hover:text-[var(--accent)] transition-colors"
          >
            <FaGithub size={18} /> GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium hover:text-[var(--accent)] transition-colors"
          >
            <FaLinkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

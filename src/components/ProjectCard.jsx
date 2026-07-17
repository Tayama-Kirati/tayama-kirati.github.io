import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ title, description, stack, image, links }) {
  return (
    <div className="border border-black/10 rounded-xl p-6 flex flex-col md:flex-row gap-5 items-start">
      <img
        src={image}
        alt={title}
        className="w-full md:w-48 h-32 object-cover rounded-lg flex-shrink-0"
      />

      <div className="flex-1">
        <h3 className="font-bold text-lg text-[var(--ink)] mb-1">{title}</h3>
        <p className="text-sm text-[var(--ink)]/70 leading-relaxed mb-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-[var(--gold)] bg-[var(--gold)]/10 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {links?.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium hover:text-[var(--gold)] transition-colors"
            >
              <ExternalLink size={14} /> Live demo
            </a>
          )}
          {links?.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium hover:text-[var(--gold)] transition-colors"
            >
              <FaGithub size={14} /> Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

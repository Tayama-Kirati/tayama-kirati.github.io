import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <section>
      <h1 className="text-2xl font-bold text-[var(--ink)] mb-8 text-center">Projects</h1>

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

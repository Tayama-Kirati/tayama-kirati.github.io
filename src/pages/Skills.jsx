import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiBlender,
  SiFigma,
} from 'react-icons/si';
import { skillCategories } from '../data/skills';

const ICONS = {
  react: SiReact,
  tailwindcss: SiTailwindcss,
  nextjs: SiNextdotjs,
  python: SiPython,
  javascript: SiJavascript,
  cplusplus: SiCplusplus,
  sql: SiPostgresql,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
  blender: SiBlender,
  figma: SiFigma,
};

export default function Skills() {
  return (
    <section>
      <h1 className="text-2xl font-bold text-[var(--ink)] mb-8 text-center">Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="border border-black/10 rounded-xl p-6">
            <h2 className="text-sm font-semibold text-[var(--ink)]/70 mb-4 text-center uppercase tracking-wide">
              {cat.title}
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {cat.skills.map((skill) => {
                const Icon = ICONS[skill.icon];
                return (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-3 py-1.5 rounded-full text-sm font-medium"
                  >
                    {Icon && <Icon size={14} />}
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

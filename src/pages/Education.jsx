import { education } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-[var(--ink)] mb-8 pb-2 border-b border-black/10 text-center">
        Education
      </h2>

      <div className="flex flex-col gap-6">
        {education.map((item) => (
          <div key={item.school} className="border border-black/10 rounded-xl p-6">
            <h3 className="font-bold text-lg text-[var(--ink)]">{item.degree}</h3>
            <p className="text-[var(--accent)] font-medium text-sm mt-1">{item.school}</p>
            <p className="text-[var(--ink)]/60 text-sm mt-1">{item.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

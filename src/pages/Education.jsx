import { education } from '../data/education';

export default function Education() {
  return (
    <section>
      <h1 className="text-2xl font-bold text-[var(--ink)] mb-8 text-center">Education</h1>

      <div className="flex flex-col gap-6">
        {education.map((item) => (
          <div key={item.school} className="border border-black/10 rounded-xl p-6">
            <h2 className="font-bold text-lg text-[var(--ink)]">{item.degree}</h2>
            <p className="text-[var(--gold)] font-medium text-sm mt-1">{item.school}</p>
            <p className="text-[var(--ink)]/60 text-sm mt-1">{item.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

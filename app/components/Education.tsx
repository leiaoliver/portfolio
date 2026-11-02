import { education } from "../data";
import SectionTitle from "./SectionTitle";

export default function Education() {
  return (
    <section id="formacao" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title="Formação" />
        <div className="grid gap-6 md:grid-cols-3">
          {education.map((e, i) => (
            <article
              key={e.title}
              className="reveal rounded-3xl border border-line bg-surface/80 p-7 backdrop-blur transition-transform duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="font-display text-4xl font-extrabold text-violet">{e.place}</p>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-ink">{e.title}</h3>
              <p className="mt-2 text-sm text-muted">{e.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { stack } from "../data";
import SectionTitle from "./SectionTitle";

export default function Stack() {
  return (
    <section id="stack" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title="Stack" intro="Do front ao back, na web e no mobile. Estas são as ferramentas do meu dia a dia." />

        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {stack.map((g, gi) => (
            <div key={g.group} className="reveal" style={{ transitionDelay: `${gi * 70}ms` }}>
              <h3 className="mb-4 font-display text-xl font-bold text-ink">{g.group}</h3>
              <ul className="flex flex-wrap gap-2.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="cursor-default rounded-2xl border border-line bg-surface px-4 py-2.5 font-medium text-ink transition-all duration-300 hover:-translate-y-1 hover:-rotate-2 hover:border-violet hover:bg-violet hover:text-white hover:shadow-lg hover:shadow-violet/30"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

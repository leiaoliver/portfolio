const items = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Node.js",
  "GraphQL",
  "Supabase",
  "Hasura",
  "PostgreSQL",
  "IA aplicada",
  "Expo",
  "RabbitMQ",
];

export default function StackMarquee() {
  const row = [...items, ...items];
  return (
    <div className="relative -rotate-1 border-y border-line bg-surface/70 py-5 backdrop-blur" aria-label="Tecnologias que uso">
      <div className="marquee overflow-hidden">
        <div className="marquee-track">
          {row.map((item, i) => (
            <span key={i} className="flex items-center gap-6 px-6 font-display text-2xl font-bold text-ink sm:text-3xl" aria-hidden={i >= items.length}>
              {item}
              <svg className="h-5 w-5 text-violet" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
              </svg>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

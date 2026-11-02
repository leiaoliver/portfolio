export default function SectionTitle({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="reveal mb-14 max-w-2xl">
      <h2 className="font-display text-[clamp(2.4rem,6vw,4rem)] font-extrabold leading-none tracking-[-0.03em] text-ink">
        {title}
        <span className="text-violet">.</span>
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

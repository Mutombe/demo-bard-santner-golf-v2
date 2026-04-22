export default function CourseHoleCard({ hole }) {
  return (
    <article className="group">
      <div className="plate sepia-hover aspect-[4/3] overflow-hidden">
        <img
          src={hole.image}
          alt={`Royal Harare hole ${hole.number} — ${hole.name}`}
          loading="lazy"
          decoding="async"
          onError={(e) => (e.currentTarget.style.opacity = '0.2')}
        />
      </div>
      <div className="mt-5 flex items-baseline gap-4">
        <span className="engraved-numeral text-3xl">{hole.roman}</span>
        <div className="flex-1">
          <p className="eyebrow-ink">Hole {hole.number}</p>
          <h3 className="font-display text-2xl text-royal-900 leading-tight mt-1">{hole.name}</h3>
        </div>
      </div>
      <p className="font-serif text-ink-500 mt-3 text-[1.0rem] leading-relaxed text-pretty italic">
        {hole.notes}
      </p>
    </article>
  );
}

export default function TeeTimeCard({ window, active, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      data-active={active}
      className="numeral-card text-left w-full focus:outline-none"
      aria-pressed={active}
    >
      <div className="flex items-baseline gap-3 mb-2">
        <span className="engraved-numeral text-2xl">{window.roman}</span>
        <span className="eyebrow-ink">{window.label}</span>
      </div>
      <p className="font-display text-3xl text-royal-900 leading-none">
        {window.range}
      </p>
      <p className="font-serif italic text-ink-500 mt-3 text-sm leading-relaxed">
        {window.note}
      </p>
      {active && (
        <span className="mt-4 inline-flex eyebrow text-brass-600 items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 bg-brass-500 rounded-full" />
          Selected
        </span>
      )}
    </button>
  );
}

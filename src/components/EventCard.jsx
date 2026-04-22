import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

// A single event entry, editorial-list style
export default function EventCard({ event, index }) {
  return (
    <Link
      to="/register"
      className="group grid grid-cols-12 items-baseline gap-5 py-7 border-t border-ivory-300 hover:bg-ivory-50 transition-colors px-2 sm:px-4"
    >
      <div className="col-span-2 sm:col-span-1 engraved-numeral text-2xl sm:text-3xl">
        {event.roman}
      </div>
      <div className="col-span-10 sm:col-span-3">
        <p className="font-display text-3xl sm:text-4xl text-royal-900 leading-none">
          {event.day}
          <span className="ml-2 align-middle text-xl italic text-ink-400">{event.month.slice(0,3)}.</span>
        </p>
        <p className="eyebrow-ink mt-2">{event.weekday}, {event.year}</p>
      </div>
      <div className="col-span-12 sm:col-span-7 pl-0 sm:pl-6 sm:border-l sm:border-ivory-300">
        <p className="font-serif text-lg text-ink-600 italic text-pretty">
          {event.note}
        </p>
        <span className="inline-flex items-center gap-2 eyebrow mt-3 group-hover:text-brass-600 transition-colors">
          Reserve a place <ArrowRight size={14} weight="regular" className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

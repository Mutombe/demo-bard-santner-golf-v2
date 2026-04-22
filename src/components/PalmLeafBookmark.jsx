import { motion } from 'framer-motion';
import CountUp from './CountUp';

// A vertical "bookmark" card for a tournament date, styled as a brass-edged
// palm-leaf panel. Past rounds get a PLAYED stamp. Next round pulses.
export default function PalmLeafBookmark({ event, state = 'upcoming', slotsFilled = 0, slotsTotal = 36 }) {
  // state: 'past' | 'next' | 'upcoming'
  const isPast = state === 'past';
  const isNext = state === 'next';

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={[
        'relative bg-paper-50 border px-5 py-7 text-center overflow-hidden',
        'transition-shadow hover:shadow-[0_10px_26px_rgba(11,37,64,0.08)]',
        isNext ? 'border-brass-500' : 'border-ivory-300',
      ].join(' ')}
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 14px), 50% 100%, 0 calc(100% - 14px))',
      }}
    >
      {/* Pulsing ring for next round */}
      {isNext && (
        <motion.div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            boxShadow: 'inset 0 0 0 2px rgba(199,125,58,0.4)',
            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 14px), 50% 100%, 0 calc(100% - 14px))',
          }}
        />
      )}

      {/* Top brass hairline */}
      <hr className="brass-rule-solid w-10 mx-auto mb-4" />

      {/* Roman numeral */}
      <p className="engraved-numeral text-4xl mb-4">{event.roman}</p>

      {/* Day + month */}
      <p className="font-display text-5xl text-royal-900 leading-none">
        <CountUp
          from={0}
          to={Number(event.day)}
          duration={1500}
          format={(n) => String(Math.round(n)).padStart(2, '0')}
        />
      </p>
      <p className="font-display italic text-lg text-ink-500 mt-2">{event.month}</p>
      <p className="eyebrow-ink mt-1 text-[0.62rem]">{event.weekday}</p>

      {/* Year */}
      <p className="font-serif italic text-sm text-ink-400 mt-3">
        <CountUp from={2000} to={Number(event.year)} duration={1400} format={(n) => String(Math.round(n))} />
      </p>

      {/* Slot counter */}
      <hr className="brass-rule w-12 mx-auto my-4" />
      <div className="text-center">
        <p className="eyebrow-ink text-[0.6rem]">Field</p>
        <p className="font-display text-xl text-royal-900 mt-1">
          <CountUp
            from={0}
            to={slotsFilled}
            duration={1600}
            format={(n) => String(Math.round(n)).padStart(2, '0')}
            className="engraved-numeral text-brass-600"
          />
          <span className="mx-1 text-ink-300 italic text-base">/</span>
          <span className="engraved-numeral">{String(slotsTotal).padStart(2, '0')}</span>
        </p>
      </div>

      {/* Note */}
      <p className="mt-4 font-serif italic text-xs text-ink-500 leading-snug text-pretty min-h-[3.2em]">
        {event.note}
      </p>

      {/* PLAYED stamp */}
      {isPast && (
        <motion.div
          initial={{ opacity: 0, scale: 1.3, rotate: -14 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -14 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-14 right-2 border-2 border-brass-500/70 text-brass-600 font-display italic uppercase text-[0.7rem] tracking-[0.25em] px-2 py-1"
          aria-hidden
        >
          Played
        </motion.div>
      )}
    </motion.article>
  );
}

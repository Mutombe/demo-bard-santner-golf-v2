import { motion } from 'framer-motion';
import { useTilt } from '../hooks/useTilt';

// A card with a massive illuminated initial letter in brass, the rest of
// the body text small and serif alongside. Used on Home and Event pages.
// The card tilts toward the cursor by up to 3° — a tangible, editorial
// lift that makes the initial letter feel illuminated from a real light.
export default function IlluminatedCapitalCard({
  letter = 'I',
  eyebrow,
  title,
  body,
  className = '',
}) {
  const t = useTilt(3);
  return (
    <div
      ref={t.ref}
      onMouseMove={t.onMouseMove}
      onMouseLeave={t.onMouseLeave}
      style={{ ...t.style, transition: 'transform 180ms ease-out' }}
    >
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={[
        'group relative p-6 sm:p-8 bg-paper-50 border border-ivory-300',
        'hover:border-brass-500 transition-colors',
        className,
      ].join(' ')}
    >
      <div className="grid grid-cols-[auto_1fr] gap-5 sm:gap-7 items-start">
        <motion.span
          aria-hidden
          className="font-display italic leading-none select-none"
          style={{
            fontSize: 'clamp(4.5rem, 10vw, 8rem)',
            fontWeight: 900,
            color: '#C77D3A',
            lineHeight: 0.85,
            textShadow: '0 2px 0 rgba(199,125,58,0.15)',
          }}
          whileHover={{
            textShadow: '0 0 22px rgba(199,125,58,0.5)',
            scale: 1.03,
          }}
          transition={{ duration: 0.5 }}
        >
          {letter}
        </motion.span>
        <div className="pt-2">
          {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
          <h3 className="font-display italic text-xl sm:text-2xl text-royal-900 leading-tight mb-3">
            {title}
          </h3>
          {typeof body === 'string' ? (
            <p className="font-serif text-ink-500 leading-relaxed text-pretty text-[1.02rem]">
              {body}
            </p>
          ) : (
            body
          )}
        </div>
      </div>
      {/* Bottom hairline that grows on hover */}
      <span
        aria-hidden
        className="absolute left-6 right-6 bottom-3 h-px bg-brass-500/0 group-hover:bg-brass-500/60 transition-colors duration-500"
      />
    </motion.article>
    </div>
  );
}

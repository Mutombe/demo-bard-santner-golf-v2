import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { hero, partnership } from '../data/siteData';

// Three vertical scrolling columns of natural (un-filtered) photos,
// read behind a royal-navy glass. The hero section extends behind the
// transparent navbar on the Home page (nav solidifies on scroll).

// All entries below are clean, unwatermarked photographs. The watermarked
// tournament-photography archive is reserved for the MediaCenter gallery.
const COLUMN_1 = [
  '/images/9th-fairway.jpg',
  '/images/panoramic-parkland.jpg',
  '/images/clubhouse-exterior.jpg',
  '/images/panoramic-course.jpg',
  '/images/caddie-line-read.jpg',
  '/images/event-celebration.jpg',
];

const COLUMN_2 = [
  '/images/clubhouse-press.jpg',
  '/images/drive-follow-through.jpg',
  '/images/panoramic-course.jpg',
  '/images/green-putt.jpg',
  '/images/9th-fairway.jpg',
  '/images/panoramic-parkland.jpg',
];

const COLUMN_3 = [
  '/images/drive-follow-through.jpg',
  '/images/caddie-line-read.jpg',
  '/images/event-celebration.jpg',
  '/images/clubhouse-exterior.jpg',
  '/images/green-putt.jpg',
  '/images/clubhouse-press.jpg',
];

function ScrollingColumn({ images, direction = 'up', duration = 36, paused = false }) {
  const loop = [...images, ...images];
  const animate =
    direction === 'up' ? { y: ['0%', '-50%'] } : { y: ['-50%', '0%'] };

  return (
    <div className="relative h-full overflow-hidden">
      <motion.div
        className="flex flex-col gap-3 will-change-transform"
        style={{ willChange: 'transform' }}
        animate={paused ? { y: animate.y[0] === '0%' ? '-25%' : '-25%' } : animate}
        transition={{
          duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {loop.map((src, i) => (
          <figure
            key={`${src}-${i}`}
            className="relative w-full aspect-[3/4] overflow-hidden"
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              loading={i < 2 ? 'eager' : 'lazy'}
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{
                // Natural photographs — no sepia, no brass filter.
                // Only a whisper of saturation restraint, nothing else.
                filter: 'saturate(0.98)',
              }}
            />
          </figure>
        ))}
      </motion.div>
    </div>
  );
}

export default function HeroScrollingColumns() {
  const [pausedCol, setPausedCol] = useState(null);
  const shouldReduce = useReducedMotion();

  // Slower, consistent feel. Client asked for 36s.
  const colDuration = shouldReduce ? 0 : 36;

  return (
    <section
      className="relative isolate overflow-hidden bg-royal-950 -mt-[calc(5rem+2.25rem)] pt-[calc(5rem+2.25rem)]"
      style={{ minHeight: '100svh' }}
    >
      {/* --- Background: three columns of scrolling natural photographs --- */}
      <div className="absolute inset-0 pointer-events-auto" aria-hidden="true">
        <div className="relative h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
          {/* Column 1 — scrolls UP */}
          <div
            onMouseEnter={() => setPausedCol(0)}
            onMouseLeave={() => setPausedCol(null)}
            className="hidden md:block"
          >
            <ScrollingColumn
              images={COLUMN_1}
              direction="up"
              duration={colDuration}
              paused={pausedCol === 0}
            />
          </div>

          {/* Column 2 — scrolls DOWN */}
          <div
            onMouseEnter={() => setPausedCol(1)}
            onMouseLeave={() => setPausedCol(null)}
          >
            <ScrollingColumn
              images={COLUMN_2}
              direction="down"
              duration={colDuration}
              paused={pausedCol === 1}
            />
          </div>

          {/* Column 3 — scrolls UP */}
          <div
            onMouseEnter={() => setPausedCol(2)}
            onMouseLeave={() => setPausedCol(null)}
            className="hidden lg:block"
          >
            <ScrollingColumn
              images={COLUMN_3}
              direction="up"
              duration={colDuration}
              paused={pausedCol === 2}
            />
          </div>
        </div>
      </div>

      {/* --- Warm-navy glass overlay (replaces the ivory) --- */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,37,64,0.62) 0%, rgba(11,37,64,0.52) 45%, rgba(11,37,64,0.58) 75%, rgba(11,37,64,0.72) 100%)',
        }}
      />
      {/* --- Warm brass vignette at the edges (very subtle) --- */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 55%, rgba(199,125,58,0.12) 100%)',
        }}
      />

      {/* --- Cross-hatch brass grid at 8% --- */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(to right, #C77D3A 1px, transparent 1px), linear-gradient(to bottom, #C77D3A 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* --- Paper grain (kept very low) --- */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.08]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* --- Foreground content — aligns with the nav container --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 min-h-[calc(100svh-5rem-2.25rem)] flex flex-col justify-center py-16 lg:py-24">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 sm:gap-6 text-ivory-200 min-h-[1.5rem]"
        >
          {/* Season 2025 — hidden on mobile per client request; padding preserved by min-h and the hairline + italic below */}
          <span className="hidden sm:inline eyebrow text-brass-400">{hero.eyebrow}</span>
          <span className="h-px w-12 sm:w-24 bg-brass-500/60" />
          <span className="font-display italic text-sm text-ivory-300">An invitation</span>
        </motion.div>

        {/* Headline — Playfair italic, contained within the nav container */}
        <div className="max-w-3xl mt-10">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.6rem,6.4vw,5.8rem)] leading-[1.02] text-ivory-50 text-balance"
            style={{ textShadow: '0 2px 30px rgba(11,37,64,0.4)' }}
          >
            The road <em className="font-display italic text-brass-400">to the</em>{' '}
            <span className="whitespace-nowrap">S.A. Golf</span> Challenge
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.35 }}
            className="mt-9"
          >
            <hr className="brass-rule-solid w-20 mb-7" />
            <p className="font-serif text-[clamp(1.05rem,1.35vw,1.3rem)] text-ivory-100 leading-relaxed text-pretty">
              {hero.subtitle}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="mt-11 flex flex-col sm:flex-row items-start gap-5"
          >
            <Link
              to={hero.primaryCta.to}
              className="press-physics group inline-flex items-center gap-3 px-7 py-4 bg-brass-500 text-royal-950 font-sans text-[0.78rem] tracking-[0.25em] uppercase hover:bg-ivory-50 transition-colors"
            >
              Reserve your slot
              <ArrowRight size={16} weight="regular" className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to={hero.secondaryCta.to}
              className="press-physics group inline-flex items-center gap-3 px-7 py-4 border border-ivory-100/70 text-ivory-50 font-sans text-[0.78rem] tracking-[0.25em] uppercase hover:bg-ivory-100 hover:text-royal-950 transition-colors"
            >
              Read the story
            </Link>
          </motion.div>

          {/* Partnership line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-14 flex items-center gap-5 flex-wrap"
          >
            <img
              src={partnership.sponsor.mark}
              alt="Bard Santner Inc"
              className="h-8 w-auto brightness-0 invert opacity-95"
              loading="eager"
              decoding="async"
            />
            <span className="font-display italic text-xs text-ivory-300 tracking-wider">
              {partnership.preamble}
            </span>
            <img
              src={partnership.host.mark}
              alt="Royal Harare Golf Club"
              className="h-11 w-auto brightness-0 invert opacity-95"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </div>

        {/* Bottom caption — pinned to lower-right, subtle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="hidden lg:block absolute right-10 bottom-10 font-serif italic text-ivory-200 text-sm max-w-[260px] text-right"
        >
          <span className="engraved-numeral text-brass-400 mr-2">IX</span>— {hero.heroCaption}
        </motion.p>
      </div>
    </section>
  );
}

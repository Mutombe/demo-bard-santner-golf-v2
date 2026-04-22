import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CaretLeft, CaretRight } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import RomanNumeralHeading from '../components/RomanNumeralHeading';
import { media } from '../data/siteData';

export default function MediaCenter() {
  const [tag, setTag] = useState('All');
  const [lightbox, setLightbox] = useState(null); // index into filtered list

  const filtered = useMemo(() => {
    if (tag === 'All') return media.items;
    return media.items.filter((m) => m.tag === tag);
  }, [tag]);

  const openLightbox = (i) => setLightbox(i);
  const close = () => setLightbox(null);
  const next = () => setLightbox((i) => (i == null ? i : (i + 1) % filtered.length));
  const prev = () => setLightbox((i) => (i == null ? i : (i - 1 + filtered.length) % filtered.length));

  useEffect(() => {
    if (lightbox == null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  const current = lightbox != null ? filtered[lightbox] : null;

  return (
    <PageTransition>
      <SEO
        title="Media Center — Bard Santner Road to the S.A. Golf Challenge"
        description="Photographs from the Bard Santner Loyalty Event. Course, players, clubhouse, and event moments from the 2025 season at Royal Harare Golf Club."
      />

      <nav className="max-w-5xl mx-auto px-5 sm:px-8 pt-8 text-xs font-sans tracking-[0.22em] uppercase text-ink-400">
        <Link to="/" className="hover:text-royal-900">Home</Link>
        <span className="mx-3 text-brass-500">·</span>
        <span className="text-royal-900">Media</span>
      </nav>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-10 pb-10">
        <SectionReveal>
          <RomanNumeralHeading
            eyebrow={media.eyebrow}
            title="A record"
            italic="of the season"
            subtitle={media.subtitle}
          />
        </SectionReveal>
      </section>

      {/* Filter bar */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-8">
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 border-b border-ivory-300 pb-5">
          <span className="eyebrow mr-2">Filter</span>
          {media.filterTags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={[
                'font-serif italic text-lg transition-colors pb-1 border-b',
                tag === t
                  ? 'text-royal-900 border-brass-500'
                  : 'text-ink-400 border-transparent hover:text-royal-900 hover:border-brass-500/50',
              ].join(' ')}
            >
              {t}
            </button>
          ))}
          <span className="ml-auto eyebrow-ink">{filtered.length} entr{filtered.length === 1 ? 'y' : 'ies'}</span>
        </div>
      </section>

      {/* Caption-first masonry */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {filtered.map((m, i) => (
            <SectionReveal key={m.id} delay={0.03 * (i % 8)}>
              <figure className="break-inside-avoid mb-6 sm:mb-7 group">
                <button
                  onClick={() => openLightbox(i)}
                  className="plate sepia-hover block w-full text-left"
                  aria-label={`Open: ${m.caption}`}
                >
                  <img
                    src={m.src}
                    alt={m.caption}
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => (e.currentTarget.style.opacity = '0.2')}
                  />
                </button>
                <figcaption className="mt-3 px-1">
                  <p className="font-serif italic text-ink-600 text-[1.02rem] leading-snug text-pretty">
                    {m.caption}
                  </p>
                  <p className="mt-2 eyebrow-ink flex items-center gap-3 flex-wrap">
                    <span className="engraved-numeral not-italic text-sm tracking-normal">{m.tag}</span>
                    <span className="text-ink-300">·</span>
                    <span>{m.date}</span>
                    <span className="text-ink-300">·</span>
                    <span className="italic font-serif normal-case tracking-normal text-ink-400">{m.credit}</span>
                  </p>
                </figcaption>
              </figure>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[70] bg-royal-950/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-5 right-5 h-12 w-12 grid place-items-center text-ivory-100 border border-ivory-100/30 hover:bg-ivory-100/10 transition"
            >
              <X size={22} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
              className="absolute left-5 h-12 w-12 grid place-items-center text-ivory-100 border border-ivory-100/30 hover:bg-ivory-100/10 transition"
            >
              <CaretLeft size={22} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
              className="absolute right-5 h-12 w-12 grid place-items-center text-ivory-100 border border-ivory-100/30 hover:bg-ivory-100/10 transition"
            >
              <CaretRight size={22} />
            </button>
            <motion.figure
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="plate bg-ivory-50">
                <img
                  src={current.src}
                  alt={current.caption}
                  className="w-full max-h-[75vh] object-contain"
                  loading="eager"
                />
              </div>
              <figcaption className="mt-4 text-ivory-200 text-center">
                <p className="font-serif italic text-lg text-pretty">{current.caption}</p>
                <p className="eyebrow mt-2 text-brass-400">{current.tag} · {current.date} · {current.credit}</p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}

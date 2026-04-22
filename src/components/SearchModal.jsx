import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MagnifyingGlass, X, ArrowRight } from '@phosphor-icons/react';
import { calendar, conditions, courseEssay, media, faq } from '../data/siteData';

// Build a small editorial search index
function buildIndex() {
  const items = [];
  calendar.events.forEach((ev) => {
    items.push({
      type: 'Event',
      title: `${ev.roman} · ${ev.day} ${ev.month} ${ev.year}`,
      body: `${ev.weekday}. ${ev.note}`,
      to: '/calendar',
    });
  });
  conditions.sections.forEach((s) => {
    items.push({
      type: 'Conditions',
      title: `${s.roman} · ${s.title}`,
      body: s.body.slice(0, 180),
      to: '/tournament-conditions',
    });
  });
  courseEssay.signatureHoles.forEach((h) => {
    items.push({
      type: 'Course',
      title: `Hole ${h.roman} · ${h.name}`,
      body: h.notes,
      to: '/the-course',
    });
  });
  items.push({
    type: 'Course',
    title: `Royal Harare, est. ${courseEssay.founded}`,
    body: courseEssay.prose[0].slice(0, 180),
    to: '/the-course',
  });
  media.items.forEach((m) => {
    items.push({
      type: 'Media',
      title: m.caption,
      body: `${m.tag} · ${m.date} · ${m.credit}`,
      to: '/media',
    });
  });
  faq.items.forEach((f) => {
    items.push({ type: 'FAQ', title: f.q, body: f.a.slice(0, 180), to: '/the-event' });
  });
  return items;
}

export default function SearchModal({ open, onClose }) {
  const [q, setQ] = useState('');
  const navigate = useNavigate();
  const index = useMemo(buildIndex, []);

  useEffect(() => {
    if (!open) setQ('');
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && open) onClose?.();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    if (!q.trim()) return index.slice(0, 6);
    const qq = q.toLowerCase();
    return index
      .filter(
        (i) =>
          i.title.toLowerCase().includes(qq) ||
          i.body.toLowerCase().includes(qq) ||
          i.type.toLowerCase().includes(qq)
      )
      .slice(0, 12);
  }, [q, index]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] bg-royal-950/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="absolute left-1/2 top-20 -translate-x-1/2 w-[min(720px,calc(100%-2rem))] bg-paper-50 border border-brass-500/50 shadow-2xl paper-grain"
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 p-5 border-b border-ivory-300">
              <MagnifyingGlass size={22} weight="regular" className="text-brass-500 shrink-0" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search the series, course, or conditions…"
                className="w-full bg-transparent font-serif text-xl italic text-ink-700 placeholder:text-ink-300 focus:outline-none"
              />
              <button aria-label="Close search" onClick={onClose} className="p-1 text-ink-500 hover:text-royal-900">
                <X size={20} />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto">
              {results.length === 0 ? (
                <p className="p-8 text-center text-ink-400 italic font-serif">Nothing here. Try a different word.</p>
              ) : (
                <ul className="divide-y divide-ivory-200">
                  {results.map((r, i) => (
                    <li key={`${r.type}-${i}`}>
                      <button
                        onClick={() => { navigate(r.to); onClose(); }}
                        className="w-full text-left px-6 py-4 flex items-start gap-4 hover:bg-ivory-50 transition-colors"
                      >
                        <span className="eyebrow shrink-0 mt-1">{r.type}</span>
                        <div className="flex-1 min-w-0">
                          <p className="font-display text-lg text-royal-900 truncate">{r.title}</p>
                          <p className="font-serif text-sm text-ink-500 italic line-clamp-2">{r.body}</p>
                        </div>
                        <ArrowRight size={16} className="text-brass-500 shrink-0 mt-2" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="px-5 py-3 border-t border-ivory-300 bg-ivory-50 flex items-center justify-between text-[0.7rem] font-sans tracking-[0.2em] uppercase text-ink-400">
              <span>Press Esc to close</span>
              <span className="italic font-serif text-sm normal-case tracking-normal text-ink-500">
                {results.length} result{results.length === 1 ? '' : 's'}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

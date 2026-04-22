import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import RomanNumeralHeading from '../components/RomanNumeralHeading';
import EventCard from '../components/EventCard';
import Countdown from '../components/Countdown';
import CountUp from '../components/CountUp';
import Prose from '../components/Prose';
import PalmLeafBookmark from '../components/PalmLeafBookmark';
import { calendar, calendarSlots, proseHtml } from '../data/siteData';

// A scroll-linked month-scrubbing header
function MonthScrubber() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const months = 'February · March · April · May · June · July · August · October · November';
  return (
    <div
      aria-hidden
      className="month-scrubber"
      style={{ transform: `translateX(${-y * 0.4}px)` }}
    >
      {months} · {months}
    </div>
  );
}

export default function Calendar() {
  return (
    <PageTransition>
      <SEO
        title="The Calendar — Bard Santner Road to the S.A. Golf Challenge"
        description="The 2025 calendar of qualifying rounds: nine remaining Saturdays at Royal Harare Golf Club. Entries close at 17:00 on the preceding Wednesday."
      />

      <nav className="max-w-5xl mx-auto px-5 sm:px-8 pt-8 text-xs font-sans tracking-[0.22em] uppercase text-ink-400">
        <Link to="/" className="hover:text-royal-900">Home</Link>
        <span className="mx-3 text-brass-500">·</span>
        <span className="text-royal-900">Calendar</span>
      </nav>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-10 pb-16 relative overflow-hidden">
        {/* Month scrubbing header */}
        <div className="absolute inset-x-0 -bottom-6 overflow-hidden pointer-events-none">
          <MonthScrubber />
        </div>
        <SectionReveal>
          <RomanNumeralHeading
            eyebrow={calendar.eyebrow}
            title="Nine Saturdays,"
            italic="one road"
            subtitle={calendar.subtitle}
          />
        </SectionReveal>
      </section>

      {/* Countdown banner */}
      <section className="bg-ivory-100 py-14 border-y border-ivory-300 relative paper-grain">
        <div className="max-w-4xl mx-auto px-6 relative">
          <SectionReveal>
            <Countdown />
          </SectionReveal>
        </div>
      </section>

      {/* Registered slot counter */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-14 pb-4">
        <SectionReveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4 pb-6 border-b border-ivory-300">
            <div>
              <p className="eyebrow mb-2">Registered for the next round</p>
              <p className="font-display text-royal-900 text-[clamp(2.2rem,4vw,3.4rem)] leading-none">
                <CountUp from={0} to={22} duration={2000} format={(n) => String(Math.round(n)).padStart(2, '0')} className="engraved-numeral text-brass-600" />
                <span className="mx-3 text-ink-300 italic font-serif text-2xl align-middle">/</span>
                <span className="engraved-numeral">
                  <CountUp from={0} to={36} duration={1600} format={(n) => String(Math.round(n)).padStart(2, '0')} />
                </span>
              </p>
            </div>
            <p className="font-serif italic text-ink-500 max-w-sm text-pretty">
              A field of{' '}
              <CountUp from={0} to={36} duration={1400} className="engraved-numeral text-brass-600 not-italic" />
              {' '}plays each qualifying Saturday. Entry closes at 17:00 on the Wednesday preceding.
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* PALM-LEAF BOOKMARKS — 9 rounds as bookmark panels */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <SectionReveal>
          <p className="eyebrow-ink mb-2">The nine rounds</p>
          <p className="font-display italic text-2xl text-royal-900 mb-10">
            Each Saturday is its own <em className="text-brass-600">bookmark</em> in the season.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 sm:gap-5">
          {calendar.events.map((ev, i) => {
            const slot = calendarSlots[ev.roman] || { state: 'upcoming', filled: 0 };
            return (
              <SectionReveal key={ev.roman} delay={0.04 * i}>
                <Link to="/register" className="block">
                  <PalmLeafBookmark
                    event={ev}
                    state={slot.state}
                    slotsFilled={slot.filled}
                    slotsTotal={36}
                  />
                </Link>
              </SectionReveal>
            );
          })}
        </div>
      </section>

      {/* Classic editorial list */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-12 border-t border-ivory-300">
        <SectionReveal>
          <p className="eyebrow-ink mb-2">The remaining rounds</p>
          <div className="grid grid-cols-12 gap-5 pb-4 border-b-2 border-royal-900 font-sans text-[0.7rem] tracking-[0.22em] uppercase text-ink-400">
            <div className="col-span-2 sm:col-span-1">№</div>
            <div className="col-span-10 sm:col-span-3">Date</div>
            <div className="col-span-12 sm:col-span-8 sm:pl-6">Note</div>
          </div>
        </SectionReveal>

        <div>
          {calendar.events.map((ev, i) => (
            <SectionReveal key={ev.roman} delay={0.04 * i}>
              <EventCard event={ev} index={i} />
            </SectionReveal>
          ))}
        </div>

        <Prose
          as="p"
          className="mt-10 font-serif italic text-ink-500 max-w-2xl text-center mx-auto text-pretty"
          html={proseHtml.calendarFootnote}
        />
      </section>
    </PageTransition>
  );
}

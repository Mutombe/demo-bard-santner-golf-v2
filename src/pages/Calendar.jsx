import { Link } from 'react-router-dom';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import RomanNumeralHeading from '../components/RomanNumeralHeading';
import EventCard from '../components/EventCard';
import Countdown from '../components/Countdown';
import CountUp from '../components/CountUp';
import { calendar } from '../data/siteData';

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

      <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-10 pb-16">
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
                <span className="engraved-numeral">36</span>
              </p>
            </div>
            <p className="font-serif italic text-ink-500 max-w-sm text-pretty">
              A field of thirty-six plays each qualifying Saturday. Entry closes at 17:00 on the Wednesday preceding.
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* The editorial list */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-12">
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

        <p className="mt-10 font-serif italic text-ink-500 max-w-2xl text-center mx-auto text-pretty">
          {calendar.footnote}
        </p>
      </section>
    </PageTransition>
  );
}

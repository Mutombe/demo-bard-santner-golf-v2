import { Link } from 'react-router-dom';
import { ArrowRight, Quotes } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import Countdown from '../components/Countdown';
import RomanNumeralHeading from '../components/RomanNumeralHeading';
import EventCard from '../components/EventCard';
import HeroScrollingColumns from '../components/HeroScrollingColumns';
import CountUp from '../components/CountUp';
import Prose from '../components/Prose';
import IlluminatedCapitalCard from '../components/IlluminatedCapitalCard';
import FramedPlate from '../components/FramedPlate';

import {
  masthead, eventEssay, calendar, courseEssay,
  qualifying, media, partnership, proseHtml,
} from '../data/siteData';

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="Bard Santner Road to the S.A. Golf Challenge — Royal Harare Golf Club"
        description="Eleven qualifying rounds, one road to Sun City. A loyalty series from Bard Santner Inc played at Royal Harare Golf Club, est. 1898."
      />

      {/* ---------- HERO: Scrolling columns, natural photos under a royal-navy glass ---------- */}
      <HeroScrollingColumns />

      {/* ---------- ENGRAVED PARTNERSHIP STRIP ---------- */}
      <section className="engraved-plate relative">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-center gap-6 sm:gap-10 flex-wrap relative">
          <img src={partnership.sponsor.mark} alt="Bard Santner Inc" className="h-9 w-auto" loading="eager" />
          <span className="hidden sm:block h-10 w-px bg-brass-500/50" aria-hidden />
          <span className="font-display italic text-ink-500 text-base sm:text-lg">
            {partnership.preamble}
          </span>
          <span className="hidden sm:block h-10 w-px bg-brass-500/50" aria-hidden />
          <img src={partnership.host.mark} alt="Royal Harare Golf Club" className="h-12 w-auto" loading="eager" />
          <span className="glint" aria-hidden />
        </div>
      </section>

      {/* ---------- MASTHEAD QUOTE (Golf Digest) ---------- */}
      <section className="bg-royal-950 text-ivory-100 py-24 relative overflow-hidden paper-grain">
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <Quotes size={42} weight="regular" className="mx-auto text-brass-500 mb-8 -scale-x-100" />
          <p className="font-display italic text-[clamp(1.8rem,3.6vw,3rem)] leading-tight text-ivory-50 text-balance italic-tremble-in">
            {masthead.quote}
          </p>
          <hr className="brass-rule my-10 mx-auto w-32" />
          <div className="flex items-center justify-center gap-4">
            <p className="eyebrow text-ivory-300">{masthead.attribution.split(',')[0]},</p>
            <span className="inline-flex items-baseline gap-2 border border-brass-400 px-3 py-1 text-brass-400">
              <span className="eyebrow text-brass-400 text-[0.58rem]">Est.</span>
              <span className="engraved-numeral text-xl text-brass-300">
                <CountUp from={1900} to={1979} duration={1800} format={(n) => Math.round(n).toString()} />
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* ---------- ESSAY: THE PREMISE — with drop cap & inline brass links ---------- */}
      <section className="py-24 lg:py-32 bg-paper-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionReveal>
            <RomanNumeralHeading
              eyebrow={eventEssay.eyebrow}
              roman="I"
              title={eventEssay.title.split(' ').slice(0, -1).join(' ')}
              italic={eventEssay.title.split(' ').slice(-1)[0]}
              subtitle={eventEssay.subtitle}
            />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-16">
            <div className="lg:col-span-7">
              <SectionReveal delay={0.1}>
                <Prose
                  as="p"
                  className="drop-cap drop-cap-glow font-serif text-[1.18rem] sm:text-[1.22rem] leading-[1.9] text-ink-700 text-pretty"
                  html={proseHtml.homeLead}
                />
                <Prose as="p" className="font-serif text-[1.1rem] leading-[1.85] text-ink-700 text-pretty mt-5" html={proseHtml.homePara1} />
                <Prose as="p" className="font-serif text-[1.1rem] leading-[1.85] text-ink-700 text-pretty mt-5" html={proseHtml.homePara2} />
                <Prose as="p" className="font-serif text-[1.1rem] leading-[1.85] text-ink-700 text-pretty mt-5" html={proseHtml.homePara3} />
                <span className="asterism asterism-breathe" aria-hidden />
                <Prose as="p" className="pull-quote italic text-royal-900 italic-tremble-in" html={proseHtml.homeClosing} />
              </SectionReveal>
            </div>

            <aside className="lg:col-span-5">
              <SectionReveal delay={0.25}>
                <div className="plate sepia-hover aspect-[4/5]">
                  <img
                    src="/images/brand-flags-fairway.jpg"
                    alt="Bard Santner sponsor flags on the Royal Harare fairway"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => (e.currentTarget.style.opacity = '0.2')}
                  />
                </div>
                <Prose
                  as="p"
                  className="mt-4 px-2 font-serif italic text-ink-400 text-sm"
                  html={proseHtml.homeFlagsCaption}
                />
              </SectionReveal>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- COUNTDOWN ---------- */}
      <section className="py-20 bg-ivory-100 border-y border-ivory-300 relative paper-grain">
        <div className="max-w-4xl mx-auto px-6 relative">
          <SectionReveal>
            <Countdown />
          </SectionReveal>
        </div>
      </section>

      {/* ---------- THE COURSE TEASER ---------- */}
      <section className="py-24 lg:py-32 bg-paper-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <SectionReveal>
                <RomanNumeralHeading
                  eyebrow={courseEssay.eyebrow}
                  roman="II"
                  title="Royal Harare"
                  italic="Golf Club"
                  subtitle={courseEssay.subtitle}
                />
                <dl className="mt-10 space-y-4">
                  <div className="flex items-baseline justify-between gap-6 border-b border-ivory-300 pb-3">
                    <dt className="eyebrow-ink">Founded</dt>
                    <dd className="font-display text-xl text-royal-900">
                      <span className="engraved-numeral">MDCCCXCVIII</span>{' '}
                      <span className="text-ink-400 text-base ml-1 italic font-serif">
                        (<CountUp from={1800} to={1898} duration={1600} format={(n) => Math.round(n).toString()} />)
                      </span>
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-6 border-b border-ivory-300 pb-3">
                    <dt className="eyebrow-ink">Royal Charter</dt>
                    <dd className="font-display text-xl text-royal-900 engraved-numeral">
                      <CountUp from={1900} to={1960} duration={1600} format={(n) => Math.round(n).toString()} />
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-6 border-b border-ivory-300 pb-3">
                    <dt className="eyebrow-ink">Course Par</dt>
                    <dd className="font-display text-xl text-royal-900 italic">
                      <CountUp from={60} to={72} duration={1400} format={(n) => Math.round(n).toString()} />
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-6 border-b border-ivory-300 pb-3">
                    <dt className="eyebrow-ink">Length, White Markers</dt>
                    <dd className="font-display text-xl text-royal-900 italic">
                      <CountUp from={5000} to={6888} duration={1800} format={(n) => Math.round(n).toLocaleString()} />m
                    </dd>
                  </div>
                </dl>
                <Link
                  to="/the-course"
                  className="classic-link font-serif italic text-lg mt-10 inline-flex"
                >
                  Read the full essay on the course →
                </Link>
              </SectionReveal>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-5 sm:gap-6">
              {courseEssay.signatureHoles.map((h, i) => (
                <SectionReveal key={h.number} delay={0.1 * i}>
                  <Link to="/the-course" className="group block photo-pop">
                    <div className="plate sepia-hover aspect-square">
                      <img
                        src={h.image}
                        alt={`Hole ${h.number} — ${h.name}`}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => (e.currentTarget.style.opacity = '0.2')}
                      />
                    </div>
                    <figcaption className="mt-3 px-1 flex items-baseline gap-2">
                      <span className="engraved-numeral">{h.roman}</span>
                      <span className="font-display italic text-royal-900 underline-sweep">{h.name}</span>
                    </figcaption>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CALENDAR (preview) ---------- */}
      <section className="py-24 lg:py-28 bg-ivory-50 relative paper-grain">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
          <SectionReveal>
            <RomanNumeralHeading
              eyebrow={calendar.eyebrow}
              roman="III"
              title="Nine Saturdays,"
              italic="one road"
              subtitle={calendar.subtitle}
            />
          </SectionReveal>

          <div className="mt-14 border-b border-ivory-300">
            {calendar.events.slice(0, 5).map((ev, i) => (
              <SectionReveal key={ev.roman} delay={0.05 * i}>
                <EventCard event={ev} index={i} />
              </SectionReveal>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Prose
              as="p"
              className="font-serif italic text-ink-500 max-w-xl"
              html={proseHtml.calendarFootnote}
            />
            <Link
              to="/calendar"
              className="inline-flex items-center gap-3 px-7 py-3.5 border border-royal-900 text-royal-900 font-sans text-[0.72rem] tracking-[0.25em] uppercase hover:bg-royal-900 hover:text-ivory-50 transition-colors"
            >
              The full calendar <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- QUALIFYING CRITERIA — four illuminated pillar cards ---------- */}
      <section className="py-24 lg:py-32 bg-paper-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionReveal>
            <RomanNumeralHeading
              eyebrow={qualifying.eyebrow}
              roman="IV"
              title="How"
              italic="one qualifies"
              subtitle={qualifying.subtitle}
            />
          </SectionReveal>

          {/* Four illuminated pillar cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 mt-16">
            {qualifying.items.slice(0, 4).map((item) => (
              <SectionReveal key={item.roman}>
                <IlluminatedCapitalCard
                  letter={item.roman}
                  eyebrow={`Criterion ${item.roman}`}
                  title={item.title}
                  body={item.body}
                />
              </SectionReveal>
            ))}
          </div>

          {/* Remaining two, as editorial entries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 mt-12">
            {qualifying.items.slice(4).map((item, i) => (
              <SectionReveal key={item.roman} delay={0.05 * i}>
                <Link
                  to="/the-event"
                  className="group flex items-start gap-5 p-5 -m-5 transition-colors hover:bg-ivory-50 border-b border-ivory-200"
                >
                  <span className="engraved-numeral text-3xl shrink-0 pt-0.5 w-10 transition-colors group-hover:text-brass-500">
                    {item.roman}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-royal-900 mb-2 underline-sweep inline-block">
                      {item.title}
                    </h3>
                    <p className="font-serif text-ink-500 leading-relaxed text-pretty">{item.body}</p>
                    <span className="inline-flex items-center gap-2 eyebrow mt-3 text-ink-400 group-hover:text-brass-600 transition-colors">
                      Read more
                      <ArrowRight size={12} className="arrow-reveal" />
                    </span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>

          {/* Downstream prizes — framed plates with corner ornaments */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
            {qualifying.downstream.map((d, i) => {
              // Round counts (for count-up)
              const rounds = d.title.includes('Nedbank') ? 7 : 3;
              return (
                <SectionReveal key={d.title} delay={0.1 * i}>
                  <Link to="/the-event" className="group block">
                    <FramedPlate tilt={i === 0 ? -0.6 : 0.6}>
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={d.image}
                          alt={d.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-center transition-transform duration-[900ms] group-hover:scale-[1.015]"
                        />
                      </div>
                    </FramedPlate>
                    <p className="eyebrow mt-6">{d.eyebrow}</p>
                    <h3 className="font-display text-2xl text-royal-900 mt-2 underline-sweep inline-block">
                      {d.title}
                    </h3>
                    <p className="mt-2 inline-flex items-baseline gap-2 font-serif italic text-ink-500">
                      <span className="eyebrow-ink text-[0.62rem]">Threshold</span>
                      <span className="engraved-numeral text-lg text-brass-600">
                        <CountUp from={0} to={rounds} duration={1400} format={(n) => Math.round(n).toString()} />
                      </span>
                      <span className="text-ink-400 text-sm">
                        qualifying round{rounds === 1 ? '' : 's'}
                      </span>
                    </p>
                    <p className="font-serif text-ink-500 mt-3 leading-relaxed italic text-pretty">{d.body}</p>
                    <span className="inline-flex items-center gap-2 eyebrow mt-4 text-ink-400 group-hover:text-brass-600 transition-colors">
                      Read the prize details
                      <ArrowRight size={12} className="arrow-reveal" />
                    </span>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- MEDIA STRIP ---------- */}
      <section className="py-24 lg:py-28 bg-ivory-100 border-t border-ivory-300 relative paper-grain">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionReveal>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <RomanNumeralHeading
                eyebrow={media.eyebrow}
                roman="V"
                title="A record"
                italic="of the season"
              />
              <Link
                to="/media"
                className="classic-link font-serif italic text-lg"
              >
                The full gallery →
              </Link>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
            {media.items.slice(0, 8).map((m, i) => (
              <SectionReveal key={m.id} delay={0.04 * i}>
                <Link to="/media" className="group block photo-pop">
                  <div className="plate sepia-hover aspect-[4/5]">
                    <img src={m.src} alt={m.caption} loading="lazy" decoding="async" />
                  </div>
                  <figcaption className="mt-2 px-1 font-serif text-xs italic text-ink-400 leading-snug group-hover:text-ink-600 transition-colors">
                    {m.caption}
                  </figcaption>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CLOSING CTA ---------- */}
      <section className="py-24 lg:py-32 bg-royal-950 text-ivory-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/panoramic-parkland.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-25"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-royal-950/70" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <SectionReveal>
            <p className="eyebrow text-brass-400 mb-6">An open invitation</p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] leading-tight text-ivory-50 text-balance">
              Come, <em className="italic text-brass-400">play</em> the season.
            </h2>
            <hr className="brass-rule my-10 w-24 mx-auto" />
            <p className="font-serif text-[clamp(1.05rem,1.3vw,1.2rem)] text-ivory-200 max-w-2xl mx-auto leading-relaxed italic">
              <CountUp from={0} to={9} duration={1200} format={(n) => Math.round(n).toString()} /> remaining Saturdays.{' '}
              <CountUp from={0} to={3} duration={1200} format={(n) => Math.round(n).toString()} /> tee-time windows.
              One leaderboard that quietly gathers its own weight through the year.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/register"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brass-500 text-royal-950 font-sans text-[0.78rem] tracking-[0.25em] uppercase hover:bg-ivory-50 transition-colors"
              >
                Reserve a tee time <ArrowRight size={16} />
              </Link>
              <Link
                to="/tournament-conditions"
                className="inline-flex items-center gap-3 px-8 py-4 border border-ivory-200/50 text-ivory-100 font-sans text-[0.78rem] tracking-[0.25em] uppercase hover:bg-ivory-100/10 transition-colors"
              >
                The full conditions
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}

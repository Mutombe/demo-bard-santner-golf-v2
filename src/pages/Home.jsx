import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Quotes } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import Countdown from '../components/Countdown';
import RomanNumeralHeading from '../components/RomanNumeralHeading';
import EventCard from '../components/EventCard';

import {
  hero, masthead, partnership, brand, eventEssay, calendar,
  courseEssay, qualifying, media,
} from '../data/siteData';

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="Bard Santner Road to the S.A. Golf Challenge — Royal Harare Golf Club"
        description="Eleven qualifying rounds, one road to Sun City. A loyalty series from Bard Santner Inc played at Royal Harare Golf Club, est. 1898."
      />

      {/* ---------- HERO ---------- */}
      <section className="relative min-h-[calc(100svh-5rem)] flex flex-col">
        {/* Partnership line at top */}
        <div className="relative z-20 pt-10 sm:pt-12">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-4 sm:gap-6 text-ink-500">
              <span className="eyebrow">{hero.eyebrow}</span>
              <span className="h-px flex-1 bg-brass-500/40 max-w-[180px]" />
              <span className="font-display italic text-sm text-ink-500">An invitation</span>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
          {/* Left: editorial lede */}
          <div className="lg:col-span-6 px-5 sm:px-8 lg:pl-16 xl:pl-24 pt-10 lg:pt-20 pb-16 lg:pr-10 flex flex-col justify-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.6rem,6vw,5.4rem)] leading-[1.02] text-royal-900 text-balance"
            >
              {hero.titleBefore}{' '}
              <em className="font-display italic text-brass-600">{hero.titleItalic}</em>{' '}
              {hero.titleAfter}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 1 }}
              className="mt-9 max-w-xl"
            >
              <hr className="brass-rule-solid w-16 mb-6" />
              <p className="font-serif text-[clamp(1.05rem,1.3vw,1.25rem)] text-ink-500 leading-relaxed text-pretty">
                {hero.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                to={hero.primaryCta.to}
                className="group inline-flex items-center gap-3 px-7 py-4 bg-royal-900 text-ivory-50 font-sans text-[0.78rem] tracking-[0.25em] uppercase hover:bg-brass-500 transition-colors"
              >
                {hero.primaryCta.label}
                <ArrowRight size={16} weight="regular" className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to={hero.secondaryCta.to}
                className="classic-link font-serif italic text-lg"
              >
                {hero.secondaryCta.label}
              </Link>
            </motion.div>

            {/* Partnership mark inline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-14 flex items-center gap-5"
            >
              <img src={partnership.sponsor.mark} alt="Bard Santner Inc" className="h-7 w-auto" loading="eager" decoding="async" />
              <span className="font-display italic text-xs text-ink-400 tracking-wider">{partnership.preamble}</span>
              <img src={partnership.host.mark} alt="Royal Harare Golf Club" className="h-10 w-auto" loading="eager" decoding="async" />
            </motion.div>
          </div>

          {/* Right: framed photograph */}
          <div className="lg:col-span-6 relative bg-ivory-100">
            <div className="lg:absolute inset-0 lg:py-12 lg:pr-12 xl:pr-20 lg:pl-6">
              <div className="plate h-full min-h-[480px] lg:min-h-0">
                <img
                  src={hero.heroImage}
                  alt={hero.heroCaption}
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                  onError={(e) => (e.currentTarget.style.opacity = '0.2')}
                />
              </div>
              <p className="mt-3 px-2 font-serif italic text-ink-400 text-sm hidden lg:block">
                <span className="engraved-numeral mr-2">IX</span>— {hero.heroCaption}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MASTHEAD QUOTE ---------- */}
      <section className="bg-royal-950 text-ivory-100 py-24 relative overflow-hidden paper-grain">
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <Quotes size={42} weight="regular" className="mx-auto text-brass-500 mb-8 -scale-x-100" />
          <p className="font-display italic text-[clamp(1.8rem,3.6vw,3rem)] leading-tight text-ivory-50 text-balance">
            {masthead.quote}
          </p>
          <hr className="brass-rule my-10 mx-auto w-32" />
          <p className="eyebrow text-ivory-300">{masthead.attribution}</p>
        </div>
      </section>

      {/* ---------- ESSAY: THE PREMISE ---------- */}
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
                <p className="drop-cap font-serif text-[1.15rem] sm:text-[1.2rem] leading-[1.8] text-ink-700 text-pretty">
                  {eventEssay.leadParagraph}
                </p>
                {eventEssay.paragraphs.map((p, i) => (
                  <p key={i} className="font-serif text-[1.1rem] leading-[1.8] text-ink-700 text-pretty mt-5">
                    {p}
                  </p>
                ))}
                <span className="asterism" aria-hidden />
                <p className="pull-quote italic text-royal-900">
                  {eventEssay.closingLine}
                </p>
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
                <p className="mt-4 px-2 font-serif italic text-ink-400 text-sm">
                  Flags at the opening round. The Highveld sky is almost aggressively blue in February.
                </p>
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
                  {courseEssay.amenities.slice(0, 4).map((a) => (
                    <div key={a.label} className="flex items-baseline justify-between gap-6 border-b border-ivory-300 pb-3">
                      <dt className="eyebrow-ink">{a.label}</dt>
                      <dd className="font-display text-xl text-royal-900">
                        {a.roman ? <span className="engraved-numeral">{a.roman}</span> : a.value}
                      </dd>
                    </div>
                  ))}
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
                  <figure>
                    <div className="plate sepia-hover aspect-square">
                      <img
                        src={h.image}
                        alt={`Hole ${h.number} — ${h.name}`}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => (e.currentTarget.style.opacity = '0.2')}
                      />
                    </div>
                    <figcaption className="mt-3 px-1">
                      <span className="engraved-numeral mr-2">{h.roman}</span>
                      <span className="font-display italic text-royal-900">{h.name}</span>
                    </figcaption>
                  </figure>
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
            <p className="font-serif italic text-ink-500 max-w-xl">
              {calendar.footnote}
            </p>
            <Link
              to="/calendar"
              className="inline-flex items-center gap-3 px-7 py-3.5 border border-royal-900 text-royal-900 font-sans text-[0.72rem] tracking-[0.25em] uppercase hover:bg-royal-900 hover:text-ivory-50 transition-colors"
            >
              The full calendar <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- QUALIFYING CRITERIA ---------- */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-16">
            {qualifying.items.map((item, i) => (
              <SectionReveal key={item.roman} delay={0.05 * i}>
                <article className="flex items-start gap-5">
                  <span className="engraved-numeral text-3xl shrink-0 pt-0.5 w-10">{item.roman}</span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-royal-900 mb-2">{item.title}</h3>
                    <p className="font-serif text-ink-500 leading-relaxed text-pretty">{item.body}</p>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>

          {/* Downstream prizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            {qualifying.downstream.map((d, i) => (
              <SectionReveal key={d.title} delay={0.1 * i}>
                <article className="group">
                  <div className="plate sepia-hover aspect-[4/3]">
                    <img src={d.image} alt={d.title} loading="lazy" decoding="async" />
                  </div>
                  <p className="eyebrow mt-5">{d.eyebrow}</p>
                  <h3 className="font-display text-2xl text-royal-900 mt-2">{d.title}</h3>
                  <p className="font-serif text-ink-500 mt-3 leading-relaxed italic text-pretty">{d.body}</p>
                </article>
              </SectionReveal>
            ))}
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
                <figure>
                  <div className="plate sepia-hover aspect-[4/5]">
                    <img src={m.src} alt={m.caption} loading="lazy" decoding="async" />
                  </div>
                  <figcaption className="mt-2 px-1 font-serif text-xs italic text-ink-400 leading-snug">
                    {m.caption}
                  </figcaption>
                </figure>
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
              Nine remaining Saturdays. Three tee-time windows. One leaderboard that quietly gathers its own weight through the year.
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

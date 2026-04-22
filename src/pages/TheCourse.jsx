import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import RomanNumeralHeading from '../components/RomanNumeralHeading';
import CourseHoleCard from '../components/CourseHoleCard';
import CountUp from '../components/CountUp';
import Prose from '../components/Prose';
import RoyalCourseMap from '../components/RoyalCourseMap';
import { courseEssay, masthead, partnership, proseHtml, courseTimeline, nineHoleTeaser } from '../data/siteData';

export default function TheCourse() {
  return (
    <PageTransition>
      <SEO
        title="The Course — Royal Harare Golf Club, est. 1898"
        description="Royal Harare Golf Club: parkland of the Highveld, founded 1898, ranked by Golf Digest among the world's finest. A long-form essay on the course and its signature holes."
      />

      <nav className="max-w-5xl mx-auto px-5 sm:px-8 pt-8 text-xs font-sans tracking-[0.22em] uppercase text-ink-400">
        <Link to="/" className="hover:text-royal-900">Home</Link>
        <span className="mx-3 text-brass-500">·</span>
        <span className="text-royal-900">The Course</span>
      </nav>

      {/* Masthead */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-10 pb-14 text-center">
        <SectionReveal>
          <p className="eyebrow mb-4">The Course</p>
          <h1 className="font-display text-[clamp(2.4rem,5.8vw,5rem)] leading-[1.05] text-royal-900 text-balance">
            Royal Harare
            <br />
            <em className="italic text-brass-600">Golf Club</em>
          </h1>
          <hr className="brass-rule brass-rule-breathe mx-auto w-28 mt-8" />
          <p className="mt-8 engraved-numeral text-2xl tracking-[0.1em]">MDCCCXCVIII</p>
          <p className="eyebrow-ink mt-2">
            Established{' '}
            <CountUp
              from={1800}
              to={1898}
              duration={1800}
              className="engraved-numeral not-italic tracking-normal text-brass-600"
              format={(n) => Math.round(n).toString()}
            />
          </p>
        </SectionReveal>
      </section>

      {/* Hero photograph */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 mb-20">
        <SectionReveal>
          <figure className="plate">
            <img
              src="/images/parkland-avenue.jpg"
              alt="Msasa avenue on the course"
              className="w-full h-[62vh] object-cover object-center"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </figure>
          <figcaption className="mt-3 px-2 font-serif italic text-ink-400 text-sm">
            Msasa avenue on the 14th. The trees turn copper in August.
          </figcaption>
        </SectionReveal>
      </section>

      {/* Essay with brass inline links + asterism dividers */}
      <article className="max-w-4xl mx-auto px-5 sm:px-8 pb-20">
        <SectionReveal>
          <Prose
            as="p"
            className="drop-cap drop-cap-glow font-serif text-[1.2rem] leading-[1.9] text-ink-700 text-pretty"
            html={proseHtml.coursePara1}
          />
          <span className="asterism asterism-breathe" aria-hidden />
          <Prose as="p" className="font-serif text-[1.15rem] leading-[1.9] text-ink-700 text-pretty" html={proseHtml.coursePara2} />
          <span className="asterism asterism-breathe" aria-hidden />
          <Prose as="p" className="font-serif text-[1.15rem] leading-[1.9] text-ink-700 text-pretty" html={proseHtml.coursePara3} />
        </SectionReveal>
      </article>

      {/* ROYAL COURSE HAND-DRAWN MAP */}
      <section className="py-20 bg-ivory-50 border-y border-ivory-300 relative paper-grain">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
          <SectionReveal>
            <RomanNumeralHeading
              eyebrow="The Routing"
              title="The course,"
              italic="drawn by hand"
              subtitle="An editorial rendering of the 18 holes at Royal Harare. The 9th — the signature — is highlighted in brass."
              align="center"
              className="text-center"
            />
          </SectionReveal>
          <div className="mt-12">
            <SectionReveal delay={0.15}>
              <RoyalCourseMap />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* GOLF DIGEST QUOTE — framed */}
      <section id="golf-digest" className="py-20 bg-paper-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionReveal>
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block p-10 sm:p-14 border-2 border-brass-500 bg-ivory-50 relative"
            >
              <span className="absolute top-3 left-3 text-brass-500 font-display italic text-5xl leading-none">&ldquo;</span>
              <p className="pull-quote italic text-royal-900 italic-tremble-in text-balance">
                {masthead.quote}
              </p>
              <span className="absolute bottom-3 right-4 text-brass-500 font-display italic text-5xl leading-none rotate-180">&ldquo;</span>
              <hr className="brass-rule my-8 mx-auto w-24" />
              <div className="flex items-center justify-center gap-3">
                <p className="eyebrow-ink">Golf Digest</p>
                <span className="inline-flex items-baseline gap-2 border border-brass-500 px-3 py-1 text-brass-600 bg-paper-50">
                  <span className="eyebrow text-brass-600 text-[0.58rem]">Vol.</span>
                  <span className="engraved-numeral text-lg">
                    <CountUp from={1900} to={1979} duration={1800} format={(n) => Math.round(n).toString()} />
                  </span>
                </span>
              </div>
            </motion.div>
          </SectionReveal>
        </div>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="py-24 bg-ivory-50 border-y border-ivory-300 relative paper-grain">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 relative">
          <SectionReveal>
            <RomanNumeralHeading
              eyebrow="A Short History"
              title="Five moments"
              italic="of the club"
              subtitle="From the savanna layout of 1898 to the loyalty series of 2025 — a brief timeline of the stewardship."
            />
          </SectionReveal>

          <ol className="mt-14 relative">
            {/* Timeline rule */}
            <span
              aria-hidden
              className="absolute left-[68px] top-2 bottom-2 w-px bg-brass-500/40 hidden sm:block"
            />
            {courseTimeline.map((t, i) => (
              <SectionReveal key={t.year} delay={0.05 * i} as="li">
                <div className="relative flex items-start gap-6 py-8 border-b border-ivory-300 last:border-b-0">
                  {/* Brass dot */}
                  <span
                    aria-hidden
                    className="hidden sm:block absolute left-[65px] top-10 h-2 w-2 rounded-full bg-brass-500 ring-4 ring-ivory-50"
                  />
                  <p className="font-display text-royal-900 text-[clamp(2rem,3.5vw,3rem)] leading-none italic shrink-0 min-w-[4.5rem] sm:min-w-[6rem]">
                    <CountUp
                      from={t.year - 80}
                      to={t.year}
                      duration={1800}
                      format={(n) => Math.round(n).toString()}
                      className="engraved-numeral not-italic text-brass-600"
                    />
                  </p>
                  <div className="flex-1 sm:pl-10">
                    <h3 className="font-display italic text-2xl text-royal-900 mb-1">{t.title}</h3>
                    <p className="font-serif text-ink-500 leading-relaxed italic text-pretty">{t.body}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Amenities ledger */}
      <section className="py-20 bg-paper-50">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <SectionReveal>
            <RomanNumeralHeading
              eyebrow="The Ledger"
              title="The Course"
              italic="in Numbers"
            />
          </SectionReveal>

          <dl className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            <div className="flex items-baseline justify-between gap-6 py-5 border-b border-ivory-300">
              <dt className="eyebrow-ink">Founded</dt>
              <dd className="font-display text-2xl text-royal-900">
                <span className="engraved-numeral">MDCCCXCVIII</span>{' '}
                <span className="text-ink-400 text-base ml-2 italic font-serif">
                  (<CountUp from={1800} to={1898} duration={1600} format={(n) => Math.round(n).toString()} />)
                </span>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-6 py-5 border-b border-ivory-300">
              <dt className="eyebrow-ink">Royal Charter</dt>
              <dd className="font-display text-2xl text-royal-900 engraved-numeral">
                <CountUp from={1900} to={1960} duration={1600} format={(n) => Math.round(n).toString()} />
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-6 py-5 border-b border-ivory-300">
              <dt className="eyebrow-ink">Course Par</dt>
              <dd className="font-display text-2xl text-royal-900 italic">
                <CountUp from={60} to={72} duration={1400} format={(n) => Math.round(n).toString()} />
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-6 py-5 border-b border-ivory-300">
              <dt className="eyebrow-ink">Length, White Markers</dt>
              <dd className="font-display text-2xl text-royal-900 italic">
                <CountUp from={5000} to={6888} duration={1800} format={(n) => Math.round(n).toLocaleString()} />m
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-6 py-5 border-b border-ivory-300">
              <dt className="eyebrow-ink">Holes</dt>
              <dd className="font-display text-2xl text-royal-900 italic">
                <CountUp from={0} to={18} duration={1200} format={(n) => Math.round(n).toString()} />
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-6 py-5 border-b border-ivory-300">
              <dt className="eyebrow-ink">Greens</dt>
              <dd className="font-display text-2xl text-royal-900 italic">Bermuda, overseeded</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* NINE-HOLE TEASER — 3×3 grid with Roman numerals */}
      <section id="signature" className="py-24 bg-ivory-50 border-y border-ivory-300 relative paper-grain">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
          <SectionReveal>
            <RomanNumeralHeading
              eyebrow="The Front Nine"
              title="Nine holes,"
              italic="in summary"
              subtitle="A short catalogue of the front nine — yardage, par, and the name by which each hole is known."
            />
          </SectionReveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {nineHoleTeaser.map((h, i) => (
              <SectionReveal key={h.roman} delay={0.04 * i}>
                <motion.article
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="group relative bg-paper-50 border border-ivory-300 p-6 hover:border-brass-500 hover:shadow-[0_10px_26px_rgba(11,37,64,0.08)] transition-all"
                >
                  <div className="flex items-baseline justify-between gap-3 mb-4">
                    <span className="engraved-numeral text-5xl text-brass-600">{h.roman}</span>
                    <span className="eyebrow-ink text-[0.6rem]">Hole {h.n}</span>
                  </div>
                  <h3 className="font-display italic text-xl text-royal-900 mb-3">{h.name}</h3>
                  <hr className="brass-rule w-8 mb-3" />
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="eyebrow-ink text-[0.58rem]">Par</p>
                      <p className="font-display text-xl text-royal-900 engraved-numeral">
                        <CountUp from={0} to={h.par} duration={1300} format={(n) => Math.round(n).toString()} />
                      </p>
                    </div>
                    <div>
                      <p className="eyebrow-ink text-[0.58rem]">Yards</p>
                      <p className="font-display text-xl text-royal-900 engraved-numeral">
                        <CountUp from={0} to={h.yards} duration={1700} format={(n) => Math.round(n).toLocaleString()} />
                      </p>
                    </div>
                  </div>
                </motion.article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signature holes (existing image cards) */}
      <section className="py-24 bg-paper-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionReveal>
            <RomanNumeralHeading
              eyebrow="Signature Holes"
              title="Four holes"
              italic="worth the walk"
              subtitle="Not a comprehensive tour — a short catalogue of holes that the members talk about most."
            />
          </SectionReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {courseEssay.signatureHoles.map((h, i) => (
              <SectionReveal key={h.number} delay={0.08 * i}>
                <CourseHoleCard hole={h} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-royal-950 text-ivory-100 py-20 lg:py-28 relative overflow-hidden">
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
            <div className="flex items-center justify-center gap-5 mb-8">
              <img src="/icon.png" alt="Bard Santner Inc" className="h-9 w-auto" />
              <span className="font-display italic text-sm text-ivory-300">in partnership with</span>
              <img src={partnership.host.mark} alt="Royal Harare Golf Club" className="h-11 w-auto brightness-0 invert opacity-90" />
            </div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight text-ivory-50">
              Play the course <em className="italic text-brass-400">this season</em>.
            </h2>
            <Link
              to="/register"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-brass-500 text-royal-950 font-sans text-[0.78rem] tracking-[0.25em] uppercase hover:bg-ivory-50 transition-colors"
            >
              Reserve a tee time <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}

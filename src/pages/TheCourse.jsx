import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import RomanNumeralHeading from '../components/RomanNumeralHeading';
import CourseHoleCard from '../components/CourseHoleCard';
import CountUp from '../components/CountUp';
import { courseEssay, masthead, partnership } from '../data/siteData';

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

      {/* Essay */}
      <article className="max-w-4xl mx-auto px-5 sm:px-8 pb-20 prose">
        <SectionReveal>
          <p className="drop-cap drop-cap-glow font-serif text-[1.2rem] leading-[1.85] text-ink-700 text-pretty">
            {courseEssay.prose[0]}
          </p>
          {courseEssay.prose.slice(1).map((p, i) => (
            <p key={i} className="font-serif text-[1.15rem] leading-[1.85] text-ink-700 text-pretty mt-6">
              {p}
            </p>
          ))}

          <span className="asterism asterism-breathe" aria-hidden />
        </SectionReveal>
      </article>

      {/* Masthead quote */}
      <section className="bg-ivory-100 py-20 border-y border-ivory-300 relative paper-grain">
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <SectionReveal>
            <p className="pull-quote italic text-royal-900 text-balance">
              "{masthead.quote}"
            </p>
            <hr className="brass-rule my-8 mx-auto w-24" />
            <p className="eyebrow-ink">{masthead.attribution}</p>
          </SectionReveal>
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
            {courseEssay.amenities.map((a) => (
              <div key={a.label} className="flex items-baseline justify-between gap-6 py-5 border-b border-ivory-300">
                <dt className="eyebrow-ink">{a.label}</dt>
                <dd className="font-display text-2xl text-royal-900">
                  {a.roman
                    ? <><span className="engraved-numeral">{a.roman}</span> <span className="text-ink-400 text-base ml-2 italic font-serif">({a.value})</span></>
                    : <span className="italic">{a.value}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Signature holes */}
      <section className="py-24 bg-ivory-50 relative paper-grain">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
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

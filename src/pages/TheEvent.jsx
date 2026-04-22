import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import RomanNumeralHeading from '../components/RomanNumeralHeading';
import CountUp from '../components/CountUp';
import Prose from '../components/Prose';
import IlluminatedCapitalCard from '../components/IlluminatedCapitalCard';
import FramedPlate from '../components/FramedPlate';
import { eventEssay, qualifying, faq, partnership, proseHtml } from '../data/siteData';

export default function TheEvent() {
  return (
    <PageTransition>
      <SEO
        title="The Event — The Bard Santner Loyalty Event at Royal Harare"
        description="An editorial essay on the Bard Santner Loyalty Event: format, eligibility, prizes, and the long-form loyalty of eleven qualifying rounds."
      />

      {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto px-5 sm:px-8 pt-8 text-xs font-sans tracking-[0.22em] uppercase text-ink-400">
        <Link to="/" className="hover:text-royal-900">Home</Link>
        <span className="mx-3 text-brass-500">·</span>
        <span className="text-royal-900">The Event</span>
      </nav>

      {/* Hero masthead */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-10 pb-16 lg:pb-24">
        <SectionReveal>
          <p className="eyebrow mb-4">The Bard Santner Loyalty Event</p>
          <h1 className="font-display text-[clamp(2.4rem,5.4vw,4.6rem)] leading-[1.05] text-royal-900 text-balance">
            {eventEssay.title.split(' ').slice(0, -1).join(' ')}{' '}
            <em className="italic text-brass-600">{eventEssay.title.split(' ').slice(-1)[0]}</em>
          </h1>
          <hr className="brass-rule w-24 mt-8" />
          <p className="font-serif text-[clamp(1.1rem,1.5vw,1.35rem)] italic text-ink-500 mt-8 max-w-3xl leading-relaxed text-pretty">
            {eventEssay.subtitle}
          </p>
        </SectionReveal>
      </section>

      {/* Feature photograph */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 mb-20">
        <SectionReveal>
          <figure className="plate">
            <img
              src="/images/panoramic-course.jpg"
              alt="Panoramic of the course at first light"
              className="w-full h-[52vh] object-cover object-center"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </figure>
          <figcaption className="mt-3 px-2 font-serif italic text-ink-400 text-sm">
            The course, looking east at first light. Opening Saturday, 8 February 2025.
          </figcaption>
        </SectionReveal>
      </section>

      {/* Essay body — editorial, with brass inline links throughout */}
      <article className="max-w-4xl mx-auto px-5 sm:px-8 pb-20 lg:pb-28">
        <SectionReveal>
          <Prose
            as="p"
            className="drop-cap drop-cap-glow font-serif text-[1.2rem] leading-[1.9] text-ink-700 text-pretty"
            html={proseHtml.eventLead}
          />
          <Prose as="p" className="font-serif text-[1.15rem] leading-[1.85] text-ink-700 text-pretty mt-6" html={proseHtml.eventPara1} />
          <Prose as="p" className="font-serif text-[1.15rem] leading-[1.85] text-ink-700 text-pretty mt-6" html={proseHtml.eventPara2} />
          <Prose as="p" className="font-serif text-[1.15rem] leading-[1.85] text-ink-700 text-pretty mt-6" html={proseHtml.eventPara3} />

          <span className="asterism asterism-breathe" aria-hidden />

          <Prose as="p" className="pull-quote text-center italic-tremble-in" html={proseHtml.eventClosing} />

          <hr className="brass-rule brass-rule-breathe mt-16" />
        </SectionReveal>
      </article>

      {/* FOUR WAYS TO QUALIFY — illuminated-capital pillar cards */}
      <section id="qualify" className="bg-ivory-50 py-24 lg:py-28 relative paper-grain">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
          <SectionReveal>
            <RomanNumeralHeading
              eyebrow={qualifying.eyebrow}
              title="Four ways"
              italic="to qualify"
              subtitle={qualifying.subtitle}
            />
          </SectionReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
            {qualifying.items.slice(0, 4).map((item, i) => (
              <SectionReveal key={item.roman} delay={0.05 * i}>
                <IlluminatedCapitalCard
                  letter={item.roman}
                  eyebrow={`Criterion ${item.roman}`}
                  title={item.title}
                  body={item.body}
                />
              </SectionReveal>
            ))}
          </div>

          {/* The trailing two */}
          <ol className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10">
            {qualifying.items.slice(4).map((item, i) => (
              <SectionReveal key={item.roman} delay={0.05 * i} as="li">
                <div className="flex items-start gap-5">
                  <span className="engraved-numeral text-3xl shrink-0 w-10">{item.roman}</span>
                  <div>
                    <h3 className="font-display text-xl text-royal-900 mb-2">{item.title}</h3>
                    <p className="font-serif text-ink-500 leading-relaxed text-pretty">{item.body}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* PRIZE LADDER — two framed plates with wax-seal overlay */}
      <section id="prizes" className="py-24 bg-paper-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionReveal>
            <RomanNumeralHeading
              eyebrow="The Prize Ladder"
              title="Two"
              italic="destinations"
              subtitle="What awaits the player who plays loyally — the travel prize that crowns the series, and the travel invitation that may arrive sooner."
            />
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mt-14">
            {qualifying.downstream.map((d, i) => {
              const rounds = d.title.includes('Nedbank') ? 7 : 3;
              return (
                <SectionReveal key={d.title} delay={0.08 * i}>
                  <article id={d.title.includes('Nedbank') ? 'nedbank' : 'sa-open'}>
                    <FramedPlate tilt={i === 0 ? -0.6 : 0.6}>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <img
                          src={d.image}
                          alt={d.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-center"
                        />
                        {/* Wax seal over the corner */}
                        <div className="absolute top-4 right-4 grid place-items-center">
                          <div className="h-14 w-14 rounded-full grid place-items-center text-ivory-50 font-display italic text-xl"
                               style={{
                                 background: 'radial-gradient(circle at 40% 40%, #D3874A 0%, #A4652A 55%, #5E3916 100%)',
                                 boxShadow: '0 2px 6px rgba(62,38,16,0.4)',
                               }}>
                            <span className="opacity-90">B</span>
                          </div>
                        </div>
                      </div>
                    </FramedPlate>
                    <p className="eyebrow mt-6">{d.eyebrow}</p>
                    <h3 className="font-display text-2xl text-royal-900 mt-2">{d.title}</h3>
                    <p className="mt-2 inline-flex items-baseline gap-3 font-serif italic text-ink-500">
                      <span className="eyebrow-ink text-[0.62rem]">Threshold</span>
                      <span className="engraved-numeral text-2xl text-brass-600">
                        <CountUp from={0} to={rounds} duration={1500} />
                      </span>
                      <span className="text-ink-400 text-sm">
                        qualifying round{rounds === 1 ? '' : 's'}
                      </span>
                    </p>
                    <p className="font-serif text-ink-500 mt-3 leading-relaxed italic text-pretty">{d.body}</p>
                  </article>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPONSOR CAMEO — partnership crests drifting */}
      <section className="py-20 bg-ivory-50 border-y border-ivory-300 relative paper-grain">
        <div className="max-w-5xl mx-auto px-6 relative">
          <SectionReveal>
            <p className="eyebrow text-center mb-6">The Partnership</p>
            <div className="engraved-plate py-10">
              <div className="flex items-center justify-center gap-10 flex-wrap">
                <div className="text-center">
                  <div className="h-24 w-24 mx-auto border-2 border-brass-500 rounded-full grid place-items-center bg-paper-50">
                    <img src={partnership.sponsor.mark} alt="Bard Santner" className="h-12 w-auto" />
                  </div>
                  <p className="mt-3 font-display italic text-royal-900">Bard Santner Inc</p>
                  <p className="eyebrow-ink text-[0.6rem] mt-1">Sponsor</p>
                </div>
                <span className="fleuron" aria-hidden />
                <div className="text-center">
                  <div className="h-24 w-24 mx-auto border-2 border-brass-500 rounded-full grid place-items-center bg-paper-50">
                    <img src={partnership.host.mark} alt="Royal Harare Golf Club" className="h-14 w-auto" />
                  </div>
                  <p className="mt-3 font-display italic text-royal-900">Royal Harare Golf Club</p>
                  <p className="eyebrow-ink text-[0.6rem] mt-1">
                    Host · est.{' '}
                    <CountUp from={1800} to={1898} duration={1500} format={(n) => Math.round(n).toString()} />
                  </p>
                </div>
              </div>
              <span className="glint" aria-hidden />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-28 bg-paper-50">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <SectionReveal>
            <RomanNumeralHeading
              eyebrow={faq.eyebrow}
              title="Replies to"
              italic="familiar questions"
            />
          </SectionReveal>

          <div className="mt-14 divide-y divide-ivory-300 border-y border-ivory-300">
            {faq.items.map((f, i) => (
              <SectionReveal key={i} delay={0.04 * i}>
                <details className="group py-7">
                  <summary className="flex items-baseline gap-5 cursor-pointer list-none">
                    <span className="engraved-numeral text-xl shrink-0 w-8">{String(i + 1).padStart(2, '0')}</span>
                    <span className="flex-1 font-display text-xl lg:text-2xl text-royal-900 leading-snug">
                      {f.q}
                    </span>
                    <span className="text-brass-500 font-display italic text-2xl shrink-0 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="font-serif italic text-[1.1rem] text-ink-600 leading-relaxed mt-5 pl-14 text-pretty">
                    {f.a}
                  </p>
                </details>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-royal-950 text-ivory-100 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionReveal>
            <p className="eyebrow text-brass-400 mb-5">Your place in the draw</p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight text-ivory-50">
              Reserve a tee time for the <em className="italic text-brass-400">next round</em>.
            </h2>
            <Link
              to="/register"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-brass-500 text-royal-950 font-sans text-[0.78rem] tracking-[0.25em] uppercase hover:bg-ivory-50 transition-colors"
            >
              Register <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}

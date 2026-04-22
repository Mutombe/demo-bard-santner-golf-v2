import { Link } from 'react-router-dom';
import { DownloadSimple, Printer } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import CountUp from '../components/CountUp';
import Prose from '../components/Prose';
import { conditions, partnership, brand, proseHtml } from '../data/siteData';

export default function TournamentConditions() {
  return (
    <PageTransition>
      <SEO
        title="Tournament Conditions — Bard Santner Race to the Nedbank Golf Challenge 2025"
        description="The full Tournament Conditions for the 2025 Bard Santner Loyalty Event & Race to the Nedbank Golf Challenge, published by the Tournament Committee of Royal Harare Golf Club."
      />

      <nav className="max-w-5xl mx-auto px-5 sm:px-8 pt-8 text-xs font-sans tracking-[0.22em] uppercase text-ink-400 no-print">
        <Link to="/" className="hover:text-royal-900">Home</Link>
        <span className="mx-3 text-brass-500">·</span>
        <span className="text-royal-900">Tournament Conditions</span>
      </nav>

      {/* Document header */}
      <article className="max-w-4xl mx-auto px-5 sm:px-8 pt-10 pb-16 print-clean">
        <SectionReveal>
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="flex-1 min-w-[220px]">
              <p className="eyebrow mb-3">Official Document</p>
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] text-royal-900 text-balance">
                {conditions.title}
              </h1>
              <p className="font-display italic text-ink-500 mt-4 text-xl leading-snug">
                {conditions.subtitle}
              </p>
            </div>
            <div className="flex gap-3 no-print">
              <a
                href={conditions.pdfHref}
                download
                className="press-physics page-curl inline-flex items-center gap-2 px-5 py-3 bg-royal-900 text-ivory-50 font-sans text-[0.72rem] tracking-[0.22em] uppercase hover:bg-brass-500 transition-colors"
              >
                <DownloadSimple size={14} weight="regular" /> {conditions.pdfLabel}
              </a>
              <button
                onClick={() => window.print()}
                className="press-physics inline-flex items-center gap-2 px-5 py-3 border border-royal-900 text-royal-900 font-sans text-[0.72rem] tracking-[0.22em] uppercase hover:bg-royal-900 hover:text-ivory-50 transition-colors"
              >
                <Printer size={14} weight="regular" /> Print
              </button>
            </div>
          </div>

          {/* Partnership marks */}
          <div className="mt-10 flex items-center gap-5 pb-8 border-b border-ivory-300">
            <img src={partnership.sponsor.mark} alt="Bard Santner Inc" className="h-7 w-auto" loading="eager" />
            <span className="font-display italic text-xs text-ink-400 tracking-wider">in partnership with</span>
            <img src={partnership.host.mark} alt="Royal Harare Golf Club" className="h-10 w-auto" loading="eager" />
          </div>
        </SectionReveal>

        {/* Committee */}
        <SectionReveal>
          <section className="mt-12">
            <p className="eyebrow mb-4"><span className="engraved-numeral mr-3">I</span>The Tournament Committee</p>
            <h2 className="font-display italic text-2xl text-royal-900 mb-6">{conditions.committee.title}</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-10">
              {conditions.committee.members.map((m) => (
                <div key={m.name} className="flex items-baseline justify-between gap-4 border-b border-ivory-200 pb-2">
                  <dt className="eyebrow-ink">{m.role}</dt>
                  <dd className="font-display italic text-royal-900 text-lg">{m.name}</dd>
                </div>
              ))}
            </dl>
          </section>
        </SectionReveal>

        <hr className="brass-rule my-14" />

        {/* Sections */}
        <div>
          {conditions.sections.map((s, i) => {
            // Alternate ornament between sections
            const ornament = i % 2 === 0 ? '❦' : '⁂';
            // Anchor ids for deep-linking
            const anchorId = s.title.toLowerCase().includes('format') ? 'format'
              : s.title.toLowerCase().includes('draw') ? 'draw'
              : s.title.toLowerCase().includes('prize') ? 'prizes'
              : s.title.toLowerCase().includes('eligib') ? 'handicap'
              : undefined;
            return (
              <SectionReveal key={s.roman} delay={0.04 * i}>
                <section id={anchorId} className="mt-10 first:mt-0">
                  <div className="flex items-baseline gap-5 mb-4">
                    <span className="engraved-numeral text-3xl shrink-0">{s.roman}</span>
                    <h2 className="font-display italic text-[clamp(1.4rem,2.4vw,2rem)] text-royal-900 leading-tight">
                      {s.title}
                    </h2>
                    <span aria-hidden className="text-brass-500 font-display italic text-2xl ml-auto select-none">
                      {ornament}
                    </span>
                  </div>
                  <p className="drop-cap drop-cap-glow font-serif text-[1.1rem] leading-[1.85] text-ink-600 text-pretty pl-0 sm:pl-14">
                    {s.body}
                  </p>
                  {i < conditions.sections.length - 1 && <hr className="brass-rule brass-rule-breathe mt-12" />}
                </section>
              </SectionReveal>
            );
          })}
        </div>

        <span className="asterism asterism-breathe" aria-hidden />

        <SectionReveal>
          <Prose
            as="p"
            className="font-display italic text-center text-ink-500 text-lg"
            html={proseHtml.rulesFooter + '<br/>Season MMXXV.'}
          />
          <p className="mt-4 text-center eyebrow-ink">
            Committee members —{' '}
            <CountUp from={0} to={conditions.committee.members.length} duration={1400} className="engraved-numeral text-brass-600 not-italic" />
            , in service this season.
          </p>
        </SectionReveal>
      </article>

      {/* Download strip */}
      <section className="bg-ivory-100 border-y border-ivory-300 py-12 no-print relative paper-grain">
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="eyebrow mb-4">For your records</p>
          <h3 className="font-display text-2xl text-royal-900 mb-6">
            The official PDF, <em className="italic text-brass-600">stamped</em> by the Tournament Committee.
          </h3>
          <a
            href={conditions.pdfHref}
            download
            className="press-physics page-curl inline-flex items-center gap-3 px-7 py-3.5 bg-royal-900 text-ivory-50 font-sans text-[0.72rem] tracking-[0.25em] uppercase hover:bg-brass-500 transition-colors"
          >
            <DownloadSimple size={16} /> Download the PDF
          </a>
        </div>
      </section>
    </PageTransition>
  );
}

import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import Prose from '../components/Prose';
import { proseHtml } from '../data/siteData';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Not found — Bard Santner Golf" description="The page you sought is not on the card." />
      <main className="min-h-[70vh] flex items-center justify-center px-6 text-center py-20">
        <div className="max-w-xl">
          {/* Golf ball in rough */}
          <svg viewBox="0 0 140 80" className="mx-auto w-40 h-auto mb-4" aria-hidden>
            {/* Rough grass silhouette */}
            <path d="M 0 70 Q 10 58 20 65 T 40 63 T 60 66 T 80 62 T 100 65 T 120 63 T 140 68 L 140 80 L 0 80 Z"
                  fill="#C77D3A" opacity="0.3" />
            <path d="M 0 74 Q 12 66 24 71 T 48 70 T 72 69 T 96 72 T 120 70 T 140 74 L 140 80 L 0 80 Z"
                  fill="#C77D3A" opacity="0.4" />
            {/* Ball */}
            <circle cx="78" cy="64" r="9" fill="#FBF8F2" stroke="#0B2540" strokeWidth="0.5" />
            {/* Dimples */}
            <circle cx="76" cy="62" r="0.8" fill="#ADB7CE" />
            <circle cx="80" cy="62" r="0.8" fill="#ADB7CE" />
            <circle cx="78" cy="66" r="0.8" fill="#ADB7CE" />
            <circle cx="74" cy="65" r="0.8" fill="#ADB7CE" />
            <circle cx="82" cy="65" r="0.8" fill="#ADB7CE" />
            {/* Tall grass blades */}
            <path d="M 60 70 L 62 50 L 64 72 Z" fill="#A4652A" opacity="0.6" />
            <path d="M 88 71 L 90 54 L 92 72 Z" fill="#A4652A" opacity="0.6" />
            <path d="M 70 72 L 71 58 L 72 73 Z" fill="#A4652A" opacity="0.6" />
          </svg>
          <p className="engraved-numeral text-6xl">IV · IV</p>
          <p className="eyebrow mt-4 mb-6">Four Hundred &amp; Four</p>
          <h1 className="font-display text-4xl sm:text-5xl text-royal-900 text-balance leading-tight">
            The page you sought
            <br />
            <em className="italic text-brass-600">is lost in the fairway.</em>
          </h1>
          <hr className="brass-rule my-8 mx-auto w-24" />
          <Prose
            as="p"
            className="font-serif italic text-ink-500 max-w-md mx-auto"
            html={proseHtml.notFoundBody}
          />
          <Link
            to="/"
            className="press-physics mt-10 inline-flex items-center gap-2 px-7 py-3.5 bg-royal-900 text-ivory-50 font-sans text-[0.72rem] tracking-[0.25em] uppercase hover:bg-brass-500 transition"
          >
            Return to home
          </Link>
        </div>
      </main>
    </PageTransition>
  );
}

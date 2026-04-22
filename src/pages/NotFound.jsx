import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Not found — Bard Santner Golf" description="The page you sought is not on the card." />
      <main className="min-h-[70vh] flex items-center justify-center px-6 text-center">
        <div>
          <p className="engraved-numeral text-7xl">IV · IV</p>
          <p className="eyebrow mt-4 mb-6">Four Hundred &amp; Four</p>
          <h1 className="font-display text-4xl sm:text-5xl text-royal-900 text-balance leading-tight">
            The page you sought
            <br />
            <em className="italic text-brass-600">is not on the card.</em>
          </h1>
          <hr className="brass-rule my-8 mx-auto w-24" />
          <p className="font-serif italic text-ink-500 max-w-md mx-auto">
            Perhaps the round has been rescheduled. Return to the clubhouse and begin again.
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 bg-royal-900 text-ivory-50 font-sans text-[0.72rem] tracking-[0.25em] uppercase hover:bg-brass-500 transition"
          >
            Return to home
          </Link>
        </div>
      </main>
    </PageTransition>
  );
}

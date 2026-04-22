import React from 'react';
import { ArrowCounterClockwise, House } from '@phosphor-icons/react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    if (typeof console !== 'undefined') console.error('[ErrorBoundary]', error, info);
  }
  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <main className="min-h-screen flex items-center justify-center bg-paper-50 px-6">
        <div className="max-w-xl text-center">
          <p className="eyebrow mb-4">A small interruption</p>
          <h1 className="font-display text-4xl sm:text-5xl text-royal-900 mb-6 leading-tight">
            Something on the page<br /><em>has misbehaved.</em>
          </h1>
          <hr className="brass-rule my-6" />
          <p className="font-serif text-lg text-ink-500 mb-8">
            Refresh the page to return to play, or take the path back to the clubhouse.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => window.location.reload()}
              className="press-physics inline-flex items-center gap-2 px-6 py-3 bg-royal-900 text-ivory-50 font-sans text-sm tracking-wider uppercase hover:bg-royal-800 transition"
            >
              <ArrowCounterClockwise size={16} weight="regular" /> Refresh
            </button>
            <a
              href="/"
              className="press-physics inline-flex items-center gap-2 px-6 py-3 border border-ink-600 text-ink-700 font-sans text-sm tracking-wider uppercase hover:bg-ink-700 hover:text-ivory-50 transition"
            >
              <House size={16} weight="regular" /> Return home
            </a>
          </div>
        </div>
      </main>
    );
  }
}

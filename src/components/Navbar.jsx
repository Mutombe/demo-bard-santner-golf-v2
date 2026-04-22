import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, MagnifyingGlass } from '@phosphor-icons/react';
import { nav, partnership, brand } from '../data/siteData';

export default function Navbar({ onOpenSearch }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          'fixed top-0 inset-x-0 z-40 transition-shadow duration-500 bg-paper-50 border-b',
          scrolled ? 'border-ivory-300 shadow-[0_1px_0_rgba(11,37,64,0.04)]' : 'border-ivory-200',
        ].join(' ')}
      >
        {/* Thin partnership ribbon */}
        <div className="border-b border-ivory-200/70 bg-paper-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 py-2 flex items-center justify-between text-[0.66rem] tracking-[0.25em] uppercase font-sans text-ink-400">
            <span className="hidden sm:inline">Season MMXXV · A loyalty of eleven rounds</span>
            <span className="sm:hidden">Season MMXXV</span>
            <span className="hidden md:inline text-brass-600">golf@bardsantner.com · +263 861 2000 700</span>
          </div>
        </div>

        <nav className="max-w-7xl mx-auto px-5 sm:px-10 h-20 flex items-center justify-between gap-6 bg-paper-50">
          {/* Dual partnership mark */}
          <Link to="/" className="flex items-center gap-4 group shrink-0" aria-label="Home">
            <img
              src={partnership.sponsor.mark}
              alt="Bard Santner Inc"
              className="h-8 sm:h-9 w-auto"
              loading="eager"
              decoding="async"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            <span className="h-8 w-px bg-brass-500/50 hidden sm:block" aria-hidden />
            <img
              src={partnership.host.mark}
              alt="Royal Harare Golf Club · est. 1898"
              className="h-9 sm:h-11 w-auto hidden sm:block"
              loading="eager"
              decoding="async"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-5 xl:gap-7 font-sans text-[0.72rem] xl:text-[0.76rem] tracking-[0.2em] uppercase whitespace-nowrap">
            {nav.primary.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    [
                      'transition-colors duration-300 pb-1 border-b',
                      isActive
                        ? 'text-royal-900 border-brass-500'
                        : 'text-ink-500 border-transparent hover:text-royal-900 hover:border-brass-500/60',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              aria-label="Open search"
              className="h-10 w-10 grid place-items-center text-ink-500 hover:text-royal-900 hover:bg-ivory-100 transition-colors"
            >
              <MagnifyingGlass size={18} weight="regular" />
            </button>
            <Link
              to="/register"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-royal-900 text-ivory-50 font-sans text-[0.72rem] tracking-[0.22em] uppercase border border-royal-900 hover:bg-brass-500 hover:border-brass-500 transition-colors"
            >
              Reserve <span aria-hidden>→</span>
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden h-10 w-10 grid place-items-center text-royal-900 hover:bg-ivory-100 transition-colors"
              aria-label="Open menu"
              aria-expanded={open}
            >
              {open ? <X size={22} weight="regular" /> : <List size={22} weight="regular" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.aside
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-paper-50 lg:hidden flex flex-col"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between h-20 px-5 border-b border-ivory-300">
              <div className="flex items-center gap-3">
                <img src={partnership.sponsor.mark} alt="Bard Santner" className="h-8 w-auto" />
                <span className="font-display text-sm italic text-ink-400">× Royal Harare</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="h-10 w-10 grid place-items-center text-royal-900 hover:bg-ivory-100"
              >
                <X size={22} weight="regular" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-10">
              <button
                onClick={() => { setOpen(false); onOpenSearch?.(); }}
                className="w-full flex items-center gap-3 px-4 py-3 border border-ivory-300 font-sans text-sm uppercase tracking-[0.18em] text-ink-500 mb-8"
              >
                <MagnifyingGlass size={16} /> Search the site
              </button>
              <ul className="space-y-1">
                {nav.primary.map((item, idx) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        [
                          'flex items-baseline gap-5 py-4 border-b border-ivory-200 transition-colors',
                          isActive ? 'text-royal-900' : 'text-ink-700 hover:text-royal-900',
                        ].join(' ')
                      }
                    >
                      <span className="engraved-numeral text-sm w-8">{(idx + 1).toString().padStart(2, '0')}</span>
                      <span className="font-display text-2xl">{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>

              <hr className="brass-rule my-10" />

              <div className="font-serif text-ink-500 text-sm leading-relaxed">
                <p className="mb-1">{brand.seriesName}, Season {brand.year}</p>
                <p className="italic">Played at {partnership.host.name}, est. {partnership.host.founded}.</p>
              </div>

              <Link
                to="/register"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 px-6 py-4 bg-royal-900 text-ivory-50 font-sans text-sm tracking-[0.2em] uppercase hover:bg-brass-500 transition-colors"
              >
                Reserve a Tee Time →
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

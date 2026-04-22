import { Link } from 'react-router-dom';
import { footer, partnership, brand, contact } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="relative bg-royal-950 text-ivory-200 pt-20 pb-10 paper-grain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        {/* Masthead */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-ivory-200/15">
          <div className="md:col-span-5">
            <div className="flex items-center gap-5 mb-6">
              {/* Orange BS mark — designed for dark backgrounds */}
              <img
                src="/icon.png"
                alt="Bard Santner Inc"
                className="h-10 w-auto"
                loading="lazy"
                decoding="async"
              />
              <span className="font-display italic text-xs text-ivory-300 tracking-wider">
                in partnership with
              </span>
              {/* Royal Harare crest — invert to ivory on dark */}
              <img
                src={partnership.host.mark}
                alt="Royal Harare Golf Club"
                className="h-11 w-auto brightness-0 invert opacity-90"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="font-serif text-lg text-ivory-200 leading-relaxed max-w-md">
              {footer.tagline}
            </p>
            <hr className="brass-rule my-7" />
            <p className="font-serif italic text-ivory-300 text-sm">
              "{`Among the fifty finest golf courses outside the United States.`}"
              <br />
              <span className="eyebrow-ink text-ivory-300 mt-1 inline-block">— Golf Digest, 1979</span>
            </p>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-10">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h4 className="eyebrow mb-5">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="font-serif text-ivory-200 hover:text-brass-400 transition-colors text-[1.02rem]">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow mb-5">Correspondence</h4>
            <ul className="space-y-3 font-serif text-ivory-200 text-[1.02rem]">
              <li><a href={`tel:+${contact.phoneDigits}`} className="hover:text-brass-400 transition">{contact.phone}</a></li>
              <li><a href={`mailto:${contact.email}`} className="hover:text-brass-400 transition">{contact.email}</a></li>
              <li><a href={`mailto:${contact.clubEmail}`} className="hover:text-brass-400 transition">{contact.clubEmail}</a></li>
              <li className="text-ivory-300 italic mt-4">{contact.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-sans tracking-[0.2em] uppercase text-ivory-300">
          <p>{footer.legal}</p>
          <div className="flex items-center gap-6">
            {footer.social.map((s) => (
              <a key={s.label} href={s.href} className="hover:text-brass-400 transition" target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
            <a href={footer.credit.href} target="_blank" rel="noreferrer" className="hover:text-brass-400 transition">
              {footer.credit.label}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

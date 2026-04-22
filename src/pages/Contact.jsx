import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WhatsappLogo, EnvelopeSimple, Phone, MapPin } from '@phosphor-icons/react';
import { toast } from 'sonner';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import RomanNumeralHeading from '../components/RomanNumeralHeading';
import Prose from '../components/Prose';
import WaxSealButton from '../components/WaxSealButton';
import { contact, partnership, proseHtml } from '../data/siteData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General enquiry', message: '' });
  const [channel, setChannel] = useState('email');
  const set = (f) => (e) => setForm((s) => ({ ...s, [f]: e.target.value }));

  const compose = () =>
    [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Subject: ${form.subject}`,
      '',
      form.message,
    ].join('\n');

  const send = () => {
    if (!form.name || !form.message || (!form.email && !form.phone)) {
      toast("Kindly complete a name, a message, and at least one contact detail.");
      return;
    }
    // TODO: Wire to Django backend POST /api/contact/
    if (channel === 'whatsapp') {
      const url = `${contact.whatsappBase}?text=${encodeURIComponent(compose())}`;
      window.open(url, '_blank', 'noreferrer');
      toast("Your message has been opened in WhatsApp.");
    } else {
      const href = `${contact.mailtoBase}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(compose())}`;
      window.location.href = href;
      toast("Your mail client has been opened.");
    }
  };

  return (
    <PageTransition>
      <SEO
        title="Contact — Bard Santner Road to the S.A. Golf Challenge"
        description="Correspond with the Tournament Director or the office of Royal Harare Golf Club. Telephone, email, WhatsApp."
      />

      <nav className="max-w-5xl mx-auto px-5 sm:px-8 pt-8 text-xs font-sans tracking-[0.22em] uppercase text-ink-400">
        <Link to="/" className="hover:text-royal-900">Home</Link>
        <span className="mx-3 text-brass-500">·</span>
        <span className="text-royal-900">Contact</span>
      </nav>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-10 pb-16">
        <SectionReveal>
          <RomanNumeralHeading
            eyebrow="Correspondence"
            title="In"
            italic="writing"
          />
          <Prose
            as="p"
            className="font-serif text-[clamp(1.05rem,1.4vw,1.25rem)] text-ink-500 mt-5 max-w-2xl text-pretty leading-relaxed"
            html={proseHtml.contactIntro}
          />
        </SectionReveal>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: contact blocks */}
        <div className="lg:col-span-5 space-y-10">
          <SectionReveal>
            <div className="flex items-center gap-4">
              <img src={partnership.sponsor.mark} alt="" className="h-7 w-auto" />
              <span className="h-6 w-px bg-brass-500/60" />
              <p className="font-display italic text-royal-900 text-lg">Tournament Director</p>
            </div>
            <hr className="brass-rule my-5 w-24" />
            <ul className="space-y-3 font-serif text-lg text-ink-600">
              <li className="flex items-center gap-3"><Phone size={18} className="text-brass-500 shrink-0" /><a href={`tel:+${contact.phoneDigits}`} className="classic-link">{contact.phone}</a></li>
              <li className="flex items-center gap-3"><EnvelopeSimple size={18} className="text-brass-500 shrink-0" /><a href={`mailto:${contact.email}`} className="classic-link">{contact.email}</a></li>
              <li className="flex items-center gap-3"><WhatsappLogo size={18} className="text-brass-500 shrink-0" /><a href={contact.whatsappBase} target="_blank" rel="noreferrer" className="classic-link">WhatsApp the office</a></li>
            </ul>
          </SectionReveal>

          <SectionReveal>
            <div className="flex items-center gap-4">
              <img src={partnership.host.mark} alt="" className="h-9 w-auto" />
              <p className="font-display italic text-royal-900 text-lg">Royal Harare Golf Club</p>
            </div>
            <hr className="brass-rule my-5 w-24" />
            <ul className="space-y-3 font-serif text-lg text-ink-600">
              <li className="flex items-center gap-3"><EnvelopeSimple size={18} className="text-brass-500 shrink-0" /><a href={`mailto:${contact.clubEmail}`} className="classic-link">{contact.clubEmail}</a></li>
              <li className="flex items-start gap-3"><MapPin size={18} className="text-brass-500 shrink-0 mt-1" /><span className="italic">{contact.address}</span></li>
            </ul>
          </SectionReveal>

          <SectionReveal>
            <div className="plate sepia-hover">
              <img src="/images/clubhouse-exterior.jpg" alt="Royal Harare Clubhouse" loading="lazy" decoding="async" className="aspect-[4/3] object-cover object-center" />
            </div>
            <p className="mt-3 px-1 font-serif italic text-ink-400 text-sm">The clubhouse under the midday sun, 5th Street Extension.</p>
          </SectionReveal>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-7">
          <SectionReveal>
            <form
              onSubmit={(e) => { e.preventDefault(); send(); }}
              className="bg-paper-50 border border-ivory-300 p-6 sm:p-9 relative paper-grain"
            >
              <p className="eyebrow mb-5"><span className="engraved-numeral mr-3">I</span>A message</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <label>
                  <span className="eyebrow-ink block mb-1.5">Name</span>
                  <input value={form.name} onChange={set('name')} className="w-full bg-paper-50 border border-ivory-300 focus:border-brass-500 outline-none px-4 py-3.5 font-serif text-[1.05rem] italic" placeholder="Your name" />
                </label>
                <label>
                  <span className="eyebrow-ink block mb-1.5">Subject</span>
                  <select value={form.subject} onChange={set('subject')} className="w-full bg-paper-50 border border-ivory-300 focus:border-brass-500 outline-none px-4 py-3.5 font-serif text-[1.05rem] italic">
                    <option>General enquiry</option>
                    <option>Draw and entries</option>
                    <option>Prize-giving</option>
                    <option>Media accreditation</option>
                    <option>Sponsorship</option>
                  </select>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <label>
                  <span className="eyebrow-ink block mb-1.5">Email</span>
                  <input type="email" value={form.email} onChange={set('email')} className="w-full bg-paper-50 border border-ivory-300 focus:border-brass-500 outline-none px-4 py-3.5 font-serif text-[1.05rem] italic" placeholder="name@example.com" />
                </label>
                <label>
                  <span className="eyebrow-ink block mb-1.5">Phone</span>
                  <input type="tel" value={form.phone} onChange={set('phone')} className="w-full bg-paper-50 border border-ivory-300 focus:border-brass-500 outline-none px-4 py-3.5 font-serif text-[1.05rem] italic" placeholder="+263 …" />
                </label>
              </div>

              <label className="block mb-6">
                <span className="eyebrow-ink block mb-1.5">Message</span>
                <textarea value={form.message} onChange={set('message')} rows={6} className="w-full bg-paper-50 border border-ivory-300 focus:border-brass-500 outline-none px-4 py-3.5 font-serif text-[1.05rem] italic resize-y" placeholder="A line or two…" />
              </label>

              <hr className="brass-rule my-6" />

              <p className="eyebrow mb-4">Choose a dispatch channel</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { id: 'whatsapp', label: 'Whatsappian Dispatch', sub: 'by telephone' },
                  { id: 'email',    label: 'Written Correspondence', sub: 'by letter' },
                ].map((c) => {
                  const active = channel === c.id;
                  return (
                    <button
                      type="button"
                      key={c.id}
                      onClick={() => setChannel(c.id)}
                      className={[
                        'relative text-left px-5 py-4 border-2 transition-all',
                        active
                          ? (c.id === 'whatsapp' ? 'border-[#25D366] bg-[#25D366]/5' : 'border-brass-500 bg-brass-500/5')
                          : 'border-ivory-300 hover:border-brass-500/60 hover:bg-ivory-50',
                      ].join(' ')}
                    >
                      <div className="flex items-center gap-4">
                        {c.id === 'whatsapp' ? (
                          // Brass telephone receiver
                          <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden>
                            <path
                              d="M6 8 C 6 6, 8 4, 10 4 L 13 4 L 15 10 L 12 12 Q 14 18, 20 20 L 22 17 L 28 19 L 28 22 C 28 24, 26 26, 24 26 C 14 26, 6 18, 6 8 Z"
                              fill={active ? '#25D366' : '#C77D3A'}
                              stroke="#0B2540"
                              strokeWidth="0.5"
                            />
                          </svg>
                        ) : (
                          // Brass feather quill
                          <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden>
                            <path
                              d="M4 28 L 10 22 L 24 8 Q 28 4, 28 4 Q 26 10, 22 14 L 10 26 Z"
                              fill={active ? '#C77D3A' : '#C77D3A'}
                              stroke="#0B2540"
                              strokeWidth="0.5"
                            />
                            <line x1="4" y1="28" x2="10" y2="22" stroke="#0B2540" strokeWidth="1" />
                          </svg>
                        )}
                        <div>
                          <p className="font-display italic text-lg text-royal-900 leading-tight">{c.label}</p>
                          <p className="eyebrow-ink text-[0.58rem] not-italic mt-1">{c.sub}</p>
                        </div>
                      </div>
                      {active && (
                        <motion.span
                          aria-hidden
                          layoutId="channel-active"
                          className="absolute inset-0 pointer-events-none"
                          style={{ boxShadow: 'inset 0 0 0 2px rgba(199,125,58,0.3)' }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-center">
                <WaxSealButton
                  type="submit"
                  sublabel={channel === 'whatsapp' ? 'Dispatch by WhatsApp' : 'Dispatch by Email'}
                  label="Press to send"
                />
              </div>
              <p className="mt-5 text-center font-serif italic text-ink-400 text-sm">
                A reply, in kind, usually within a working day.
              </p>
            </form>
          </SectionReveal>
        </div>
      </section>

      {/* Framed map with "YOU ARE HERE" marker */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-24">
        <SectionReveal>
          <div className="p-4 border-2 border-brass-500 bg-ivory-50 relative">
            <div className="absolute top-2 left-2 right-2 h-px bg-brass-500/40" aria-hidden />
            <div className="absolute bottom-2 left-2 right-2 h-px bg-brass-500/40" aria-hidden />
            <div className="relative aspect-[16/9] w-full bg-ivory-200 overflow-hidden">
              {/* Static map (SVG placeholder of the district) */}
              <svg viewBox="0 0 800 450" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C77D3A" strokeWidth="0.3" opacity="0.35" />
                  </pattern>
                </defs>
                <rect width="800" height="450" fill="#F7F2E7" />
                <rect width="800" height="450" fill="url(#mapGrid)" />
                {/* Streets */}
                <path d="M 0 180 L 800 200" stroke="#0B2540" strokeWidth="1.2" opacity="0.45" />
                <path d="M 0 280 L 800 270" stroke="#0B2540" strokeWidth="1.2" opacity="0.45" />
                <path d="M 320 0 L 340 450" stroke="#0B2540" strokeWidth="1.4" opacity="0.55" />
                <path d="M 520 0 L 510 450" stroke="#0B2540" strokeWidth="1.2" opacity="0.45" />
                {/* Golf course shape (green oval) */}
                <ellipse cx="420" cy="240" rx="200" ry="110" fill="#ADB7CE" opacity="0.35" />
                <ellipse cx="420" cy="240" rx="180" ry="90" fill="#0B2540" opacity="0.1" />
                <text x="420" y="245" textAnchor="middle" fontFamily="'Playfair Display', serif" fontStyle="italic" fontSize="16" fill="#0B2540" opacity="0.75">
                  Royal Harare Golf Club
                </text>
                {/* 5th Street label */}
                <text x="340" y="100" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="9" fill="#5D5A54" letterSpacing="0.15em" opacity="0.85" transform="rotate(92, 340, 100)">
                  5TH STREET EXTENSION
                </text>
              </svg>

              {/* YOU ARE HERE marker */}
              <div className="absolute" style={{ top: '50%', left: '52%' }}>
                <motion.div
                  className="relative -translate-x-1/2 -translate-y-full"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <svg width="36" height="44" viewBox="0 0 36 44">
                    <motion.circle
                      cx="18" cy="38" r="6"
                      fill="none"
                      stroke="#C77D3A"
                      strokeWidth="1.2"
                      animate={{ r: [4, 10, 4], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <path d="M 18 4 C 10 4, 4 10, 4 18 C 4 26, 18 40, 18 40 C 18 40, 32 26, 32 18 C 32 10, 26 4, 18 4 Z"
                          fill="#C77D3A" stroke="#0B2540" strokeWidth="0.8" />
                    <circle cx="18" cy="17" r="5" fill="#FBF8F2" />
                  </svg>
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 whitespace-nowrap px-2 py-0.5 bg-ivory-50 border border-brass-500 font-display italic text-xs text-royal-900">
                    You are here
                  </span>
                </motion.div>
              </div>

              {/* Compass rose */}
              <div className="absolute top-4 right-4 opacity-70">
                <svg width="36" height="36" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#0B2540" strokeWidth="0.6" />
                  <path d="M 18 4 L 20 18 L 18 32 L 16 18 Z" fill="#C77D3A" />
                  <text x="18" y="-2" textAnchor="middle" fontFamily="serif" fontSize="6" fill="#0B2540">N</text>
                </svg>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center font-serif italic text-ink-400 text-sm">
            Royal Harare Golf Club · 5th Street Extension, Harare
          </p>
        </SectionReveal>
      </section>
    </PageTransition>
  );
}

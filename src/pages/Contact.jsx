import { useState } from 'react';
import { Link } from 'react-router-dom';
import { WhatsappLogo, EnvelopeSimple, Phone, MapPin } from '@phosphor-icons/react';
import { toast } from 'sonner';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import RomanNumeralHeading from '../components/RomanNumeralHeading';
import { contact, partnership } from '../data/siteData';

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
            subtitle="For questions on the draw, the handicap allowance, or the travel prizes, reach the Tournament Director at Bard Santner. For course and clubhouse matters, the Royal Harare office."
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

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex border border-ivory-300 w-full sm:w-auto">
                  {[
                    { id: 'email',    label: 'Email' },
                    { id: 'whatsapp', label: 'WhatsApp' },
                  ].map((c) => (
                    <button
                      type="button"
                      key={c.id}
                      onClick={() => setChannel(c.id)}
                      className={[
                        'flex-1 px-5 py-3 font-sans text-[0.72rem] tracking-[0.22em] uppercase transition',
                        channel === c.id
                          ? (c.id === 'whatsapp' ? 'bg-[#128C7E] text-ivory-50' : 'bg-royal-900 text-ivory-50')
                          : 'text-ink-500 hover:bg-ivory-100',
                      ].join(' ')}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
                <button
                  type="submit"
                  className={[
                    'inline-flex items-center gap-3 px-7 py-3.5 text-ivory-50 font-sans text-[0.72rem] tracking-[0.22em] uppercase transition-colors ml-auto',
                    channel === 'whatsapp' ? 'bg-[#25D366] hover:bg-[#1FB557]' : 'bg-brass-500 hover:bg-brass-600',
                  ].join(' ')}
                >
                  Dispatch message
                </button>
              </div>
              <p className="mt-5 font-serif italic text-ink-400 text-sm">
                A reply, in kind, usually within a working day.
              </p>
            </form>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}

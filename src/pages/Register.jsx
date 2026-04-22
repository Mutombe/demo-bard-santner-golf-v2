import { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, WhatsappLogo, EnvelopeSimple } from '@phosphor-icons/react';
import { toast } from 'sonner';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import RomanNumeralHeading from '../components/RomanNumeralHeading';
import TeeTimeCard from '../components/TeeTimeCard';
import Prose from '../components/Prose';
import WaxSealButton from '../components/WaxSealButton';
import {
  calendar, teeWindows, shirtSizes, genders, dietaryOptions, contact, proseHtml,
} from '../data/siteData';
import { haptic } from '../lib/haptics';

const initialForm = {
  eventRoman: '',
  firstName: '',
  surname: '',
  gender: '',
  club: 'Royal Harare Golf Club',
  handicap: '',
  membershipNumber: '',
  teeWindow: '',
  cell: '',
  email: '',
  dietary: 'None',
  shirtSize: 'L',
  attendPrizeGiving: 'yes',
};

function formReducer(state, action) {
  switch (action.type) {
    case 'SET':  return { ...state, [action.field]: action.value };
    case 'RESET': return initialForm;
    default: return state;
  }
}

const steps = [
  { roman: 'I',   title: 'The Round',    subtitle: 'Select the Saturday on which you wish to play.' },
  { roman: 'II',  title: 'The Player',   subtitle: 'Personal and club particulars.' },
  { roman: 'III', title: 'The Tee-Time', subtitle: 'Choose a window. Fields are limited per range.' },
  { roman: 'IV',  title: 'Contact & Preferences', subtitle: 'For the draw email and prize-giving.' },
  { roman: 'V',   title: 'Review & Submit', subtitle: 'A final look before the card is entered.' },
];

export default function Register() {
  const [form, dispatch] = useReducer(formReducer, initialForm);
  const [step, setStep] = useState(0);

  const selectedEvent = calendar.events.find((e) => e.roman === form.eventRoman);
  const selectedWindow = teeWindows.find((w) => w.id === form.teeWindow);

  const canProceed = () => {
    if (step === 0) return !!form.eventRoman;
    if (step === 1) return form.firstName && form.surname && form.gender && form.handicap !== '' && form.membershipNumber;
    if (step === 2) return !!form.teeWindow;
    if (step === 3) return form.cell && form.email;
    return true;
  };

  const next = () => {
    if (!canProceed()) {
      toast("Kindly complete the details before proceeding.");
      return;
    }
    haptic(12);
    setStep((s) => Math.min(s + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const back = () => {
    haptic(8);
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const composeMessage = () => [
    "Bard Santner Loyalty Event — Tee Time Request",
    "",
    `Round: ${selectedEvent ? `${selectedEvent.roman} · ${selectedEvent.day} ${selectedEvent.month} ${selectedEvent.year}` : '—'}`,
    `Player: ${form.firstName} ${form.surname} (${form.gender})`,
    `Club: ${form.club}`,
    `Membership #: ${form.membershipNumber}`,
    `HNA Handicap Index: ${form.handicap}`,
    `Tee-time window: ${selectedWindow ? `${selectedWindow.roman} · ${selectedWindow.label} ${selectedWindow.range}` : '—'}`,
    `Contact: ${form.cell} · ${form.email}`,
    `Golf-shirt size: ${form.shirtSize}`,
    `Dietary: ${form.dietary}`,
    `Attending prize-giving: ${form.attendPrizeGiving}`,
  ].join('\n');

  const submitWhatsApp = () => {
    // TODO: Wire to Django backend POST /api/register/
    const msg = encodeURIComponent(composeMessage());
    window.open(`${contact.whatsappBase}?text=${msg}`, '_blank', 'noreferrer');
    toast("Your request has been dispatched to WhatsApp. An official draw confirmation will follow by email.");
  };
  const submitEmail = () => {
    // TODO: Wire to Django backend POST /api/register/
    const subj = encodeURIComponent("Bard Santner Loyalty Event — Tee Time Request");
    const body = encodeURIComponent(composeMessage());
    window.location.href = `${contact.mailtoBase}?subject=${subj}&body=${body}`;
    toast("Your mail client has been opened. An official draw confirmation will follow.");
  };

  return (
    <PageTransition>
      <SEO
        title="Register — Reserve a Tee Time for a Bard Santner Qualifying Round"
        description="Reserve a place in the draw for one of nine remaining qualifying Saturdays at Royal Harare Golf Club. Entries close on the Wednesday preceding."
      />

      <nav className="max-w-5xl mx-auto px-5 sm:px-8 pt-8 text-xs font-sans tracking-[0.22em] uppercase text-ink-400">
        <Link to="/" className="hover:text-royal-900">Home</Link>
        <span className="mx-3 text-brass-500">·</span>
        <span className="text-royal-900">Register</span>
      </nav>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-10 pb-12">
        <SectionReveal>
          <RomanNumeralHeading
            eyebrow="The Entry"
            title="Reserve a"
            italic="tee time"
          />
          <Prose
            as="p"
            className="font-serif text-[clamp(1.05rem,1.4vw,1.25rem)] text-ink-500 mt-5 max-w-2xl text-pretty leading-relaxed"
            html={proseHtml.registerIntro}
          />
        </SectionReveal>
      </section>

      {/* Step indicator */}
      <section className="bg-ivory-50 border-y border-ivory-300 py-8 relative paper-grain">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 relative">
          <ol className="grid grid-cols-5 gap-2 sm:gap-4">
            {steps.map((s, i) => {
              const active = step === i;
              const done = step > i;
              return (
                <li key={s.roman} className="flex flex-col">
                  <div className={[
                    'h-0.5 mb-3 transition-colors',
                    done ? 'bg-brass-500' : active ? 'bg-royal-900' : 'bg-ivory-300',
                  ].join(' ')} />
                  <div className="flex items-baseline gap-2">
                    <span className={[
                      'engraved-numeral text-sm',
                      done ? 'text-brass-500' : active ? 'text-royal-900' : 'text-ink-300',
                    ].join(' ')}>{s.roman}</span>
                    <span className={[
                      'hidden sm:inline font-sans text-[0.7rem] tracking-[0.2em] uppercase',
                      active ? 'text-royal-900' : 'text-ink-400',
                    ].join(' ')}>{s.title}</span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Step content — on paper-texture background */}
      <section className="py-16 lg:py-20 bg-paper-50 relative paper-grain">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 relative">
          <SectionReveal key={step}>
            <div className="mb-10">
              <p className="eyebrow mb-3"><span className="engraved-numeral mr-3">{steps[step].roman}</span>{steps[step].title}</p>
              <h2 className="font-display text-3xl sm:text-4xl text-royal-900">{steps[step].subtitle}</h2>
              <hr className="brass-rule w-20 mt-6" />
            </div>

            {step === 0 && <StepEventSelect form={form} dispatch={dispatch} />}
            {step === 1 && <StepPlayer form={form} dispatch={dispatch} />}
            {step === 2 && <StepTeeWindow form={form} dispatch={dispatch} />}
            {step === 3 && <StepContact form={form} dispatch={dispatch} />}
            {step === 4 && (
              <StepReview
                form={form}
                selectedEvent={selectedEvent}
                selectedWindow={selectedWindow}
                onWhatsApp={submitWhatsApp}
                onEmail={submitEmail}
              />
            )}

            {step < 4 && (
              <div className="mt-12 flex items-center justify-between gap-4 pt-8 border-t border-ivory-300">
                <button
                  onClick={back}
                  disabled={step === 0}
                  className="press-physics inline-flex items-center gap-2 px-5 py-3 font-sans text-[0.72rem] tracking-[0.22em] uppercase text-ink-500 hover:text-royal-900 transition disabled:opacity-30"
                >
                  <ArrowLeft size={14} /> Back
                </button>
                <button
                  onClick={next}
                  className="press-physics inline-flex items-center gap-2 px-8 py-4 bg-royal-900 text-ivory-50 font-sans text-[0.72rem] tracking-[0.22em] uppercase hover:bg-brass-500 transition-colors"
                >
                  Continue <ArrowRight size={14} />
                </button>
              </div>
            )}
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}

// ---------- Field component ----------
function Field({ label, children, hint, roman }) {
  return (
    <label className="block">
      <span className="flex items-baseline gap-3 mb-2">
        {roman && <span className="engraved-numeral text-sm">{roman}</span>}
        <span className="eyebrow-ink">{label}</span>
      </span>
      {children}
      {hint && <span className="mt-1 block font-serif italic text-sm text-ink-400">{hint}</span>}
    </label>
  );
}

const inputBase =
  "w-full bg-paper-50 border border-ivory-300 focus:border-brass-500 focus:ring-0 focus:outline-none px-4 py-3.5 font-serif text-[1.0625rem] text-ink-700 placeholder:text-ink-300 transition-colors";

// ---------- Step I: Event selection ----------
function StepEventSelect({ form, dispatch }) {
  return (
    <div className="grid grid-cols-1 gap-0 border-t border-ivory-300">
      {calendar.events.map((ev) => {
        const active = form.eventRoman === ev.roman;
        return (
          <button
            key={ev.roman}
            type="button"
            onClick={() => dispatch({ type: 'SET', field: 'eventRoman', value: ev.roman })}
            className={[
              'grid grid-cols-12 items-center gap-5 py-6 px-4 border-b border-ivory-300 text-left transition-colors',
              active ? 'bg-ivory-50' : 'hover:bg-ivory-50',
            ].join(' ')}
            aria-pressed={active}
          >
            <span className={['col-span-2 sm:col-span-1 engraved-numeral text-2xl', active ? 'text-brass-600' : ''].join(' ')}>{ev.roman}</span>
            <div className="col-span-10 sm:col-span-3">
              <p className="font-display text-2xl text-royal-900 leading-none">
                {ev.day} <span className="italic text-base text-ink-500">{ev.month.slice(0,3)}.</span>
              </p>
              <p className="eyebrow-ink mt-2">{ev.weekday}</p>
            </div>
            <p className="col-span-12 sm:col-span-7 font-serif italic text-ink-500 text-pretty">{ev.note}</p>
            <span className="col-span-12 sm:col-span-1 text-right">
              {active && <Check size={20} weight="bold" className="inline text-brass-500" />}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ---------- Step II: Player ----------
function StepPlayer({ form, dispatch }) {
  const set = (field) => (e) => dispatch({ type: 'SET', field, value: e.target.value });
  return (
    <div className="space-y-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="First name" roman="I">
          <input className={inputBase} value={form.firstName} onChange={set('firstName')} placeholder="Given name" />
        </Field>
        <Field label="Surname" roman="II">
          <input className={inputBase} value={form.surname} onChange={set('surname')} placeholder="Family name" />
        </Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Gender" roman="III">
          <select className={inputBase} value={form.gender} onChange={set('gender')}>
            <option value="">— Select —</option>
            {genders.map((g) => <option key={g}>{g}</option>)}
          </select>
        </Field>
        <Field label="Club" roman="IV">
          <input className={inputBase} value={form.club} onChange={set('club')} />
        </Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="HNA Handicap Index" roman="V" hint="Max 21.2 men · 26.2 ladies.">
          <input
            type="number"
            step="0.1"
            min="0"
            max="54"
            className={inputBase}
            value={form.handicap}
            onChange={set('handicap')}
            placeholder="e.g. 18.4"
          />
        </Field>
        <Field label="Membership number" roman="VI">
          <input className={inputBase} value={form.membershipNumber} onChange={set('membershipNumber')} placeholder="RHGC membership #" />
        </Field>
      </div>
    </div>
  );
}

// ---------- Step III: Tee window ----------
function StepTeeWindow({ form, dispatch }) {
  return (
    <div className="space-y-5">
      <p className="font-serif italic text-ink-500 mb-2">
        Three windows, published by the Tournament Director. Selection is on a first-come basis — the final draw is the committee's to make.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {teeWindows.map((w) => (
          <TeeTimeCard
            key={w.id}
            window={w}
            active={form.teeWindow === w.id}
            onSelect={() => dispatch({ type: 'SET', field: 'teeWindow', value: w.id })}
          />
        ))}
      </div>
    </div>
  );
}

// ---------- Step IV: Contact ----------
function StepContact({ form, dispatch }) {
  const set = (field) => (e) => dispatch({ type: 'SET', field, value: e.target.value });
  return (
    <div className="space-y-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Cell" roman="I">
          <input type="tel" className={inputBase} value={form.cell} onChange={set('cell')} placeholder="+263 …" />
        </Field>
        <Field label="Email" roman="II">
          <input type="email" className={inputBase} value={form.email} onChange={set('email')} placeholder="name@example.com" />
        </Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Dietary preference" roman="III">
          <select className={inputBase} value={form.dietary} onChange={set('dietary')}>
            {dietaryOptions.map((d) => <option key={d}>{d}</option>)}
          </select>
        </Field>
        <Field label="Golf-shirt size" roman="IV">
          <select className={inputBase} value={form.shirtSize} onChange={set('shirtSize')}>
            {shirtSizes.map((s) => <option key={s}>{s}</option>)}
          </select>
        </Field>
      </div>
      <Field label="Attending prize-giving?" roman="V" hint="Prize-giving is within thirty minutes of the final card. Attendance is a condition of the event.">
        <div className="flex gap-5 mt-1">
          {['yes', 'no'].map((v) => (
            <label key={v} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="attendPrizeGiving"
                value={v}
                checked={form.attendPrizeGiving === v}
                onChange={set('attendPrizeGiving')}
                className="accent-brass-500 h-4 w-4"
              />
              <span className="font-serif text-lg italic text-ink-600">{v === 'yes' ? 'Yes, of course.' : 'Regretfully, no.'}</span>
            </label>
          ))}
        </div>
      </Field>
    </div>
  );
}

// ---------- Step V: Review ----------
function StepReview({ form, selectedEvent, selectedWindow, onWhatsApp, onEmail }) {
  const rows = [
    { label: 'Round',              value: selectedEvent ? `${selectedEvent.roman} · ${selectedEvent.day} ${selectedEvent.month} ${selectedEvent.year}` : '—' },
    { label: 'Player',             value: `${form.firstName} ${form.surname}` },
    { label: 'Gender',             value: form.gender },
    { label: 'Club',               value: form.club },
    { label: 'HNA Handicap Index', value: form.handicap },
    { label: 'Membership #',       value: form.membershipNumber },
    { label: 'Tee-time window',    value: selectedWindow ? `${selectedWindow.roman} · ${selectedWindow.range}` : '—' },
    { label: 'Cell',               value: form.cell },
    { label: 'Email',              value: form.email },
    { label: 'Dietary',            value: form.dietary },
    { label: 'Golf-shirt size',    value: form.shirtSize },
    { label: 'Attending prize-giving', value: form.attendPrizeGiving === 'yes' ? 'Yes' : 'No' },
  ];

  return (
    <div>
      <p className="font-serif italic text-ink-500 mb-8">
        A last look. Confirm, then dispatch your request by whichever channel you prefer — the tournament director will receive either equally.
      </p>

      <dl className="border-t border-ivory-300">
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-12 py-3.5 border-b border-ivory-300 items-baseline gap-4">
            <dt className="col-span-5 sm:col-span-4 eyebrow-ink">{r.label}</dt>
            <dd className="col-span-7 sm:col-span-8 font-serif text-ink-700 text-lg italic">{r.value || '—'}</dd>
          </div>
        ))}
      </dl>

      <hr className="brass-rule my-10" />

      <p className="text-center font-display italic text-royal-900 text-lg mb-6">
        Press the <em className="text-brass-600">wax seal</em> to dispatch your entry.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <WaxSealButton
          onClick={onWhatsApp}
          sublabel="Whatsappian Dispatch"
          label="Send via WhatsApp"
        />
        <WaxSealButton
          onClick={onEmail}
          sublabel="Written Correspondence"
          label="Send via Email"
        />
      </div>

      <p className="mt-8 text-center font-serif italic text-ink-400 text-sm">
        The committee will confirm your place in the draw by email on the Thursday preceding.
      </p>
    </div>
  );
}

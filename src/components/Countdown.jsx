import { useEffect, useMemo, useState } from 'react';
import { countdown } from '../data/siteData';

const WORDS = [
  'zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve',
  'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'
];
const TENS = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

function numberToWords(n) {
  n = Math.max(0, Math.floor(n));
  if (n < 20) return WORDS[n];
  if (n < 100) {
    const t = Math.floor(n / 10);
    const r = n % 10;
    return r === 0 ? TENS[t] : `${TENS[t]}-${WORDS[r]}`;
  }
  if (n < 1000) {
    const h = Math.floor(n / 100);
    const rest = n % 100;
    return rest === 0
      ? `${WORDS[h]} hundred`
      : `${WORDS[h]} hundred ${numberToWords(rest)}`;
  }
  return String(n);
}

function capitalise(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function Countdown({ targetIso = countdown.nextDate, label = countdown.nextEventName }) {
  const target = useMemo(() => new Date(targetIso).getTime(), [targetIso]);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const totalMinutes = Math.floor(diff / 60_000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  const daysWord = capitalise(numberToWords(days));
  const hoursWord = numberToWords(hours);
  const minsWord = numberToWords(minutes);

  return (
    <div className="relative text-center">
      <p className="eyebrow mb-5">{label}</p>
      <p className="font-display text-[clamp(1.6rem,3.2vw,2.6rem)] leading-snug italic text-royal-900 text-balance max-w-3xl mx-auto">
        {daysWord} <span className="not-italic font-normal text-ink-500 text-base tracking-[0.2em] uppercase font-sans align-middle px-2">days</span>
        <span className="text-brass-500 mx-1">·</span>
        {hoursWord} <span className="not-italic font-normal text-ink-500 text-base tracking-[0.2em] uppercase font-sans align-middle px-2">hours</span>
        <span className="text-brass-500 mx-1">·</span>
        {minsWord} <span className="not-italic font-normal text-ink-500 text-base tracking-[0.2em] uppercase font-sans align-middle px-2">minutes</span>
      </p>
      <p className="font-serif text-ink-500 mt-4 text-lg italic">
        to the next tee.
      </p>
    </div>
  );
}

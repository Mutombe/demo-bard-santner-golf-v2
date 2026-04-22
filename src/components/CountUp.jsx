import { useEffect, useRef, useState } from 'react';

// Ease-out cubic
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

export default function CountUp({
  from = 0,
  to = 100,
  duration = 1800,
  className = '',
  prefix = '',
  suffix = '',
  format = (n) => Math.round(n).toLocaleString(),
  startDelay = 0,
  once = true,
}) {
  const [value, setValue] = useState(from);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const runAnim = () => {
      if (hasRun.current && once) return;
      hasRun.current = true;
      if (reduce) {
        setValue(to);
        return;
      }
      const startAt = performance.now() + startDelay;
      let raf;
      const tick = (now) => {
        if (now < startAt) {
          raf = requestAnimationFrame(tick);
          return;
        }
        const progress = Math.min(1, (now - startAt) / duration);
        const eased = easeOut(progress);
        setValue(from + (to - from) * eased);
        if (progress < 1) {
          raf = requestAnimationFrame(tick);
        }
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnim();
            if (once) io.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [from, to, duration, startDelay, once]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {format(value)}
      {suffix}
    </span>
  );
}

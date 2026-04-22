import { useEffect, useRef, useState } from 'react';

// A letterbox unveil — a section's top and bottom "curtains" are clipped
// inward by 5% each, and on entry they open to 0 over 500ms. This feels
// like a film frame advancing, not a fade. Paired with a subtle 8–10px
// translate + opacity on children via SectionReveal.
//
// Wrapping is opt-in: pages drop <SectionLetterbox> around sections where
// the cinematic beat is wanted (not around every section — that would
// read as a gimmick).
export default function SectionLetterbox({ children, className = '' }) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setRevealed(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        clipPath: revealed ? 'inset(0 0 0 0)' : 'inset(5% 0 5% 0)',
        transition: 'clip-path 500ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {children}
    </div>
  );
}

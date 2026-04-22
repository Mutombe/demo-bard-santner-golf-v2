import { useEffect, useRef, useState } from 'react';

// A 1px brass hairline that draws itself left-to-right when it scrolls
// into view. Used between major sections as a "film cue" — subtle,
// editorial, not flashy. 900ms cubic-bezier.
export default function BrassHairline({ className = '', width = '100%' }) {
  const ref = useRef(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setDrawn(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={['brass-hairline-draw mx-auto', className].join(' ')}
      style={{
        width,
        height: '1px',
        background: '#C77D3A',
        transformOrigin: 'left center',
        transform: drawn ? 'scaleX(1)' : 'scaleX(0)',
        opacity: drawn ? 0.6 : 0,
        transition:
          'transform 900ms cubic-bezier(0.22, 1, 0.36, 1), opacity 600ms ease-out',
      }}
    />
  );
}

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from '@phosphor-icons/react';
import { haptic } from '../lib/haptics';

// Resets scroll on route change
export function ScrollToTopOnRoute() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// Floating round brass button. Sits to the LEFT of FloatingWhatsApp so
// both live in the bottom-right cluster without overlapping.
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.35 }}
          onClick={() => { haptic(8); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          aria-label="Scroll to top"
          className="press-physics fixed bottom-6 right-24 z-40 h-12 w-12 md:h-[52px] md:w-[52px] rounded-full grid place-items-center text-ivory-50 transition-transform hover:scale-[1.04]"
          style={{
            background: '#C77D3A',
            boxShadow:
              '0 1px 0 rgba(199,125,58,0.5), 0 8px 22px rgba(62,38,16,0.22), inset 0 0 0 1px rgba(255,236,201,0.18)',
          }}
        >
          <ArrowUp size={18} weight="regular" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

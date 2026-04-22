import { motion } from 'framer-motion';

// Gentle opacity + small translate — editorial restraint.
// Translate tightened to 8–10px (from 14) so the reveal feels like a
// page advancing, not a slide-in. 700ms easeOut on children; a 50ms
// stagger can be achieved by passing `delay={0.05 * i}` at the
// callsite, which is already the convention throughout the codebase.
export default function SectionReveal({ children, delay = 0, className = '', as = 'div' }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 9 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

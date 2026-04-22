import { motion } from 'framer-motion';

// A classical "framed painting" plate — brass border + animated corner
// ornaments, subtle hover tilt.
export default function FramedPlate({ children, tilt = 0.6, className = '' }) {
  return (
    <motion.div
      whileHover={{ rotate: tilt, y: -3 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={[
        'group relative bg-ivory-50 p-3 border-2 border-brass-500 shadow-[0_2px_0_#E3D6B7]',
        className,
      ].join(' ')}
      style={{ transformOrigin: 'center center' }}
    >
      {/* Inner hairline */}
      <div className="absolute inset-2 border border-brass-500/40 pointer-events-none" aria-hidden />

      {/* Corner ornaments */}
      {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
        <span
          key={i}
          aria-hidden
          className={[
            'absolute w-4 h-4 bg-brass-500 pointer-events-none transition-all duration-500',
            pos,
            'group-hover:w-5 group-hover:h-5',
            pos.includes('top-0') ? '-translate-y-1.5' : 'translate-y-1.5',
            pos.includes('left-0') ? '-translate-x-1.5' : 'translate-x-1.5',
          ].join(' ')}
          style={{
            clipPath:
              pos === 'top-0 left-0'
                ? 'polygon(0 0, 100% 0, 0 100%)'
                : pos === 'top-0 right-0'
                ? 'polygon(0 0, 100% 0, 100% 100%)'
                : pos === 'bottom-0 left-0'
                ? 'polygon(0 0, 100% 100%, 0 100%)'
                : 'polygon(100% 0, 100% 100%, 0 100%)',
          }}
        />
      ))}

      {children}
    </motion.div>
  );
}

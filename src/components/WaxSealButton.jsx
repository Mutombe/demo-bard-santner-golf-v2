import { motion } from 'framer-motion';
import { haptic } from '../lib/haptics';

// A classical brass wax-seal submit button.
// Static: an intact seal with a "B" monogram.
// Hover:  the seal cracks slightly.
// Press:  the seal splits open with a brass spark.
// Haptic: a firmer 20ms confirm on tap.
export default function WaxSealButton({
  onClick,
  label = 'Dispatch',
  sublabel = 'Press the seal',
  disabled = false,
  className = '',
  type = 'button',
}) {
  const onPress = (e) => {
    if (disabled) return;
    haptic(20);
    if (onClick) onClick(e);
  };
  return (
    <motion.button
      type={type}
      onClick={onPress}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.015 }}
      whileTap={disabled ? {} : { scale: 0.94, y: 1 }}
      className={[
        'press-seal group relative inline-flex items-center gap-5 px-6 py-5 bg-ivory-50 border border-brass-500',
        'text-royal-900 font-serif italic text-lg disabled:opacity-50 disabled:cursor-not-allowed',
        'transition-shadow hover:shadow-[0_8px_30px_rgba(199,125,58,0.25)] active:shadow-[0_4px_14px_rgba(199,125,58,0.2)]',
        className,
      ].join(' ')}
      aria-label={label}
    >
      {/* Seal */}
      <motion.span
        aria-hidden
        className="relative shrink-0 h-16 w-16 grid place-items-center"
      >
        <svg viewBox="0 0 80 80" width="64" height="64" className="drop-shadow-[0_2px_4px_rgba(164,101,42,0.4)]">
          <defs>
            <radialGradient id="sealFill" cx="50%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#D3874A" />
              <stop offset="55%" stopColor="#A4652A" />
              <stop offset="100%" stopColor="#5E3916" />
            </radialGradient>
          </defs>
          {/* Outer scalloped wax circle (simplified octagon with wobbly edge) */}
          <motion.circle
            cx="40"
            cy="40"
            r="30"
            fill="url(#sealFill)"
            animate={{ scale: [1, 1.025, 1] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: 'center' }}
          />
          {/* Inner hairline ring */}
          <circle cx="40" cy="40" r="24" fill="none" stroke="#FBF2EA" strokeOpacity="0.3" strokeWidth="0.5" />
          {/* Monogram "B" */}
          <text
            x="40"
            y="48"
            textAnchor="middle"
            fontSize="22"
            fontFamily="'Playfair Display', Georgia, serif"
            fontWeight="700"
            fontStyle="italic"
            fill="#FBF2EA"
            opacity="0.92"
          >
            B
          </text>
          {/* Crack that appears on hover */}
          <motion.path
            d="M 40 12 L 38 24 L 42 32 L 38 44 L 40 56"
            stroke="#3E2610"
            strokeWidth="0.6"
            strokeLinecap="round"
            fill="none"
            initial={{ opacity: 0, pathLength: 0 }}
            variants={{
              rest: { opacity: 0, pathLength: 0 },
              hover: { opacity: 0.75, pathLength: 1 },
            }}
            transition={{ duration: 0.5 }}
            className="[transition:opacity_0.4s_ease]"
            style={{ opacity: 'var(--crack-op, 0)' }}
          />
        </svg>
        {/* Brass spark on hover */}
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(211,135,74,0.4) 0%, transparent 60%)',
          }}
        />
      </motion.span>
      <span className="flex flex-col items-start text-left">
        <span className="eyebrow text-brass-600 mb-1">{sublabel}</span>
        <span className="font-display text-2xl italic leading-tight">{label}</span>
      </span>
    </motion.button>
  );
}

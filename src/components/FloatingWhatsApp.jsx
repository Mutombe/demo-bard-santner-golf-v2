import { motion } from 'framer-motion';
import { WhatsappLogo } from '@phosphor-icons/react';
import { contact } from '../data/siteData';
import { haptic } from '../lib/haptics';

// Editorial brass FAB — replaces WhatsApp green for V2's palette.
// A subtle brass-glow pulse ring breathes in place; no bounce, no flash.
export default function FloatingWhatsApp() {
  const msg = encodeURIComponent(
    "Hello Bard Santner team, I would like to enquire about the Road to the S.A. Golf Challenge."
  );
  const href = `${contact.whatsappBase}?text=${msg}`;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      onClick={() => haptic(8)}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fab-brass press-physics fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full grid place-items-center text-ivory-50 transition-transform hover:scale-[1.04]"
      style={{ background: '#C77D3A' }}
    >
      {/* Breathing glow ring, soft */}
      <span aria-hidden className="fab-brass-pulse" />
      <WhatsappLogo size={28} weight="fill" className="relative z-10" />
    </motion.a>
  );
}

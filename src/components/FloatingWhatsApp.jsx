import { motion } from 'framer-motion';
import { WhatsappLogo } from '@phosphor-icons/react';
import { contact } from '../data/siteData';

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
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed bottom-6 left-6 z-40 h-14 w-14 rounded-full grid place-items-center text-white shadow-xl transition-transform hover:scale-105"
      style={{ background: '#25D366' }}
    >
      <WhatsappLogo size={28} weight="fill" />
    </motion.a>
  );
}

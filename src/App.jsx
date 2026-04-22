import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop, { ScrollToTopOnRoute } from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SearchModal from './components/SearchModal';

import Home from './pages/Home';
import TheEvent from './pages/TheEvent';
import TheCourse from './pages/TheCourse';
import Calendar from './pages/Calendar';
import Register from './pages/Register';
import TournamentConditions from './pages/TournamentConditions';
import MediaCenter from './pages/MediaCenter';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  // Home extends behind the transparent navbar; inner pages sit below it.
  const isHome = location.pathname === '/';

  return (
    <ErrorBoundary>
      <ScrollToTopOnRoute />
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

      <div className={isHome ? 'min-h-screen' : 'min-h-screen pt-[calc(5rem+2.25rem)]'}>
        <AnimatePresence mode="popLayout">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/the-event" element={<TheEvent />} />
            <Route path="/the-course" element={<TheCourse />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tournament-conditions" element={<TournamentConditions />} />
            <Route path="/media" element={<MediaCenter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </div>

      <Footer />
      <ScrollToTop />
      <FloatingWhatsApp />

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#FBF8F2',
            color: '#0B2540',
            border: '1px solid #C77D3A',
            borderRadius: 0,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.05rem',
            fontStyle: 'italic',
            padding: '14px 18px',
          },
        }}
      />
    </ErrorBoundary>
  );
}

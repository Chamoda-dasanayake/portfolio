import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';

const LoadingScreen = () => (
  <motion.div
    className="fixed inset-0 z-[100] flex items-center justify-center"
    style={{ background: '#0b0a08' }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
  >
    <div className="text-center">
      {/* Animated logo */}
      <motion.div
        className="w-20 h-20 rounded-2xl flex items-center justify-center font-bold text-sm mx-auto mb-8"
        style={{
          background: 'linear-gradient(135deg, #c48a2a, #d4a24a)',
          color: '#0b0a08',
          boxShadow: '0 0 40px rgba(196, 138, 42, 0.2)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className="text-2xl font-bold">CD</span>
      </motion.div>

      {/* Loading bar */}
      <div className="w-48 h-0.5 bg-white/5 rounded-full overflow-hidden mx-auto">
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #c48a2a, #d4a24a)' }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </div>
    </div>
  </motion.div>
);

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-2xl glass flex items-center justify-center transition-all"
          style={{ 
            color: '#d4a24a',
            boxShadow: '0 0 20px rgba(212, 162, 74, 0.1)',
          }}
          whileHover={{ y: -3 }}
          aria-label="Scroll to top"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M8 12V4M4 7l4-4 4 4" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Initialize Lenis for premium buttery smooth scrolling
  useEffect(() => {
    if (!document.getElementById('lenis-script')) {
      const script = document.createElement('script');
      script.id = 'lenis-script';
      script.src = 'https://unpkg.com/lenis@1.1.2/dist/lenis.min.js';
      script.onload = () => {
        const lenis = new window.Lenis({
          duration: 1.5,
          smoothWheel: true,
          wheelMultiplier: 1.2,
          touchMultiplier: 2,
        });

        // Expose lenis globally for anchor links if needed
        window.lenis = lenis;

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      {!loading && (
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Certificates />
            <Experience />
            <GithubStats />
            <Contact />
          </main>

          <Footer />
          <ScrollToTop />
        </motion.div>
      )}
    </>
  );
}

export default App;

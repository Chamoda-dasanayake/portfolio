import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown, HiDownload, HiExternalLink } from 'react-icons/hi';
import { personalInfo } from '../data/portfolioData';

const roles = [
  "AI Engineer",
  "Full-Stack Developer",
  "MERN Stack Developer",
  "Machine Learning Engineer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const photoRef = useRef(null);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // 3D tilt effect on mouse move
  useEffect(() => {
    const el = photoRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.14, delayChildren: 0.5 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* 1. Static Clean Background */}
      <div className="absolute inset-0 bg-hero-gradient z-0" />
      <div className="absolute inset-0 bg-grid opacity-30 z-0" />

      {/* 2. Large Background Image with Cinematic Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Gradient overlays to blend smoothly into the dark background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0a08] via-[#0b0a08]/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a08] via-transparent to-transparent z-10 h-1/3 top-auto bottom-0" />
        
        {/* Only the image is animated */}
        <motion.div
          className="absolute inset-0 w-full h-full origin-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: [1, 1.08, 1] }}
          transition={{ 
            opacity: { duration: 1.5, ease: 'easeOut' },
            scale: { duration: 18, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <img
            src="/chamoda.jpg"
            alt="Chamoda Dasanayake Background"
            className="absolute top-0 right-[-10%] md:right-[-2%] lg:right-0 w-[130%] md:w-[75%] lg:w-[60%] h-[110vh] -mt-[5vh] object-cover object-center lg:object-right opacity-30 md:opacity-80 lg:opacity-[0.95]"
            style={{ 
              filter: 'contrast(1.05) brightness(0.95)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 100%)'
            }}
          />
        </motion.div>
      </div>

      {/* 3. Subtle warm accent glow */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full blur-[200px] opacity-[0.06] z-0"
        style={{ background: 'radial-gradient(circle, #c48a2a, transparent)' }} />
      <div className="absolute bottom-[25%] right-[20%] w-[400px] h-[400px] rounded-full blur-[180px] opacity-[0.04] z-0"
        style={{ background: 'radial-gradient(circle, #d4a24a, transparent)' }} />

      {/* 4. Main content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl text-center lg:text-left pt-12 md:pt-20 mx-auto lg:mx-0">
          {/* Main heading */}
          <motion.h1
            variants={childVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-5"
          >
            <span className="text-white">I'm </span>
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            variants={childVariants}
            className="h-10 md:h-12 flex items-center lg:justify-start justify-center mb-6"
          >
            <span className="text-xl md:text-2xl lg:text-3xl font-semibold" style={{ color: '#e8e4dd' }}>
              {displayText}
            </span>
            <span className="w-0.5 h-7 md:h-9 ml-1 animate-pulse" style={{ background: '#d4a24a' }} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={childVariants}
            className="text-base md:text-lg max-w-xl mb-10 leading-relaxed lg:mx-0 mx-auto px-2 sm:px-0"
            style={{ color: '#9c9588' }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={childVariants}
            className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary w-full sm:w-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <HiExternalLink size={18} />
              View Projects
            </motion.a>
            <motion.a
              href={personalInfo.resumeUrl}
              download="Chamoda_Dasanayake_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <HiDownload size={18} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div
            variants={childVariants}
            className="mt-12 flex flex-wrap lg:justify-start justify-center gap-3"
          >
            {['React', 'Node.js', 'Python', 'LangChain', 'TensorFlow', 'MongoDB'].map(
              (tech, i) => (
                <motion.span
                  key={tech}
                  className="tech-badge"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.08 }}
                >
                  {tech}
                </motion.span>
              )
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
          style={{ color: '#6b6560' }}
        >
          <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
          <HiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

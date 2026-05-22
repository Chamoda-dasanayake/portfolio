import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HiOutlineMail, HiHeart } from 'react-icons/hi';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs"
              style={{
                background: 'linear-gradient(135deg, #c48a2a, #d4a24a)',
                color: '#0b0a08',
              }}
            >
              CD
            </div>
            <span className="text-sm" style={{ color: '#6b6560' }}>
              © {currentYear} {personalInfo.name}. Built with{' '}
              <HiHeart className="inline text-xs" style={{ color: '#d4a24a' }} /> and React.
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              style={{ color: '#6b6560' }}
              whileHover={{ y: -2 }}
              aria-label="GitHub"
            >
              <SiGithub size={18} />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              style={{ color: '#6b6560' }}
              whileHover={{ y: -2 }}
              aria-label="LinkedIn"
            >
              <SiLinkedin size={18} />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-white transition-colors"
              style={{ color: '#6b6560' }}
              whileHover={{ y: -2 }}
              aria-label="Email"
            >
              <HiOutlineMail size={18} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

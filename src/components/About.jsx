import { motion } from 'framer-motion';
import { HiAcademicCap, HiLightningBolt } from 'react-icons/hi';
import { aboutData } from '../data/portfolioData';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const stats = aboutData.stats;

  return (
    <section id="about" className="relative py-10 md:py-12 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #c48a2a, transparent)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-white">
            Know Who <span className="gradient-text">I Am</span>
          </h2>
          <p className="section-subheading mt-4">
            Passionate about building intelligent systems that bridge the gap between cutting-edge AI and real-world applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Left: Description */}
          <motion.div variants={childVariants} className="space-y-6">
            {aboutData.description.map((para, i) => (
              <p key={i} className="leading-relaxed text-[15px]" style={{ color: '#9c9588' }}>
                {para}
              </p>
            ))}

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="glass-card px-5 py-3 flex items-center gap-3">
                <HiAcademicCap className="text-lg" style={{ color: '#d4a24a' }} />
                <span className="text-sm" style={{ color: '#e8e4dd' }}>{aboutData.education}</span>
              </div>
              <div className="glass-card px-5 py-3 flex items-center gap-3">
                <HiLightningBolt className="text-lg" style={{ color: '#e9c07e' }} />
                <span className="text-sm" style={{ color: '#e8e4dd' }}>AI & Full-Stack Focus</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Feature Highlights */}
          <motion.div variants={childVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 flex flex-col justify-between group relative overflow-hidden"
                whileHover={{ scale: 1.03 }}
              >
                {/* Subtle gradient glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                     style={{ background: 'radial-gradient(circle at top right, rgba(212, 162, 74, 0.1), transparent 70%)' }} />
                
                <div className="mb-6 relative z-10">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-[#d4a24a]/20"
                        style={{ background: 'rgba(212, 162, 74, 0.05)', color: '#d4a24a' }}>
                    <span className="font-bold font-mono">{`0${i + 1}`}</span>
                  </span>
                </div>
                
                <span className="text-sm sm:text-[15px] font-semibold leading-snug relative z-10 group-hover:text-white transition-colors duration-300" 
                      style={{ color: '#e8e4dd' }}>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import { motion } from 'framer-motion';
import { HiBriefcase, HiAcademicCap, HiStar } from 'react-icons/hi';
import { experienceData } from '../data/portfolioData';

const iconMap = {
  work: HiBriefcase,
  education: HiAcademicCap,
  achievement: HiStar,
};

const colorMap = {
  work: '#c48a2a',
  education: '#d4a24a',
  achievement: '#e9c07e',
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-12 md:py-16 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[200px] opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #c48a2a, transparent)' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-white">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading mt-4">
            The path that shaped my skills and passion for technology
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, rgba(196,138,42,0.3), rgba(212,162,74,0.15), transparent)' }} />

          {experienceData.map((item, i) => {
            const Icon = iconMap[item.type] || HiBriefcase;
            const color = colorMap[item.type] || '#c48a2a';
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                className={`relative flex items-start gap-6 mb-12 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `${color}12`,
                      border: `1px solid ${color}25`,
                    }}
                  >
                    <Icon size={18} color={color} />
                  </div>
                </div>

                {/* Content card */}
                <div className={`glass-card p-6 ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                  isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto'
                }`}>
                  <span className="text-xs font-mono tracking-wider uppercase" style={{ color: '#d4a24a' }}>{item.year}</span>
                  <h3 className="text-white font-semibold text-lg mt-1">{item.title}</h3>
                  <p className="text-sm mt-1 font-medium" style={{ color: '#6b6560' }}>{item.company}</p>
                  <p className="text-sm mt-3 leading-relaxed" style={{ color: '#9c9588' }}>{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

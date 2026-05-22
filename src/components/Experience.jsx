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
    <section id="volunteering" className="relative py-10 md:py-12 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[200px] opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #c48a2a, transparent)' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-white">
            Volunteering & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="section-subheading mt-4">
            Contributions, leadership roles, and community engagement
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[23px] top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, rgba(196,138,42,0.3), rgba(212,162,74,0.15), transparent)' }} />

          {experienceData.map((item, i) => {
            const Icon = iconMap[item.type] || HiBriefcase;
            const color = colorMap[item.type] || '#c48a2a';

            return (
              <motion.div
                key={i}
                className="relative flex items-start gap-6 sm:gap-8 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="relative z-10 shrink-0">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{
                      background: `${color}12`,
                      border: `1px solid ${color}25`,
                    }}
                  >
                    <Icon size={18} color={color} />
                  </div>
                </div>

                <div className="glass-card p-5 sm:p-6 w-full group hover:-translate-y-1 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-white font-semibold text-[17px]">{item.title}</h3>
                      <p className="text-[13px] font-medium mt-1" style={{ color: '#6b6560' }}>{item.company}</p>
                    </div>
                    <span className="text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full border border-[#d4a24a]/20 w-fit shrink-0" style={{ color: '#d4a24a', background: 'rgba(212, 162, 74, 0.05)' }}>
                      {item.year}
                    </span>
                  </div>
                  <p className="text-[14px] mt-3 leading-relaxed whitespace-pre-line" style={{ color: '#9c9588' }}>{item.description}</p>
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

import { motion, AnimatePresence } from 'framer-motion';
import { HiBadgeCheck } from 'react-icons/hi';
import { certificatesData } from '../data/portfolioData';

const Certificates = () => {
  return (
    <section id="certificates" className="relative py-8 md:py-12 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[200px] opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #c48a2a, transparent)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-white">
            Licenses & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subheading mt-4">
            Professional qualifications and completed coursework
          </p>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
          <AnimatePresence mode="popLayout">
            {certificatesData.map((item, i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card overflow-hidden group flex flex-col h-full relative p-6 hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" 
                       style={{ boxShadow: 'inset 0 0 0 1px rgba(196, 138, 42, 0.3)' }} />
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: 'rgba(196, 138, 42, 0.1)', border: '1px solid rgba(196, 138, 42, 0.2)' }}>
                      <HiBadgeCheck size={24} color="#c48a2a" />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full border border-[#c48a2a]/20 shrink-0" style={{ color: '#c48a2a', background: 'rgba(196, 138, 42, 0.05)' }}>
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-white font-semibold text-[17px] mb-1 group-hover:text-[#c48a2a] transition-colors">{item.title}</h3>
                  <p className="text-[13px] font-medium mb-3" style={{ color: '#e9c07e' }}>{item.issuer}</p>
                  
                  {item.credentialId && (
                    <p className="text-[12px] font-mono mb-4" style={{ color: '#6b6560' }}>Credential ID: {item.credentialId}</p>
                  )}
                  
                  <p className="text-[14px] leading-relaxed whitespace-pre-line mb-6 flex-1" style={{ color: '#9c9588' }}>
                    {item.description}
                  </p>

                  {item.link && item.link !== '#' && (
                    <div className="mt-auto pt-4 border-t border-white/5">
                      <a href={item.link} target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-white transition-colors flex items-center gap-2 w-fit" style={{ color: '#c48a2a' }}>
                        <HiBadgeCheck size={18} /> View Credential
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;

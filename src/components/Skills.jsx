import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="relative py-10 md:py-12 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[200px] opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #d4a24a, transparent)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-white">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subheading mt-4">
            Technologies and tools I use to build scalable, intelligent systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="glass-card p-8 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            >
              {/* Subtle background glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                   style={{ background: 'radial-gradient(circle, #d4a24a, transparent)' }} />

              {/* Category info */}
              <h3 className="text-xl font-bold mb-2 text-white relative z-10">{category.title}</h3>
              <p className="text-[15px] mb-8 relative z-10" style={{ color: '#9c9588' }}>
                {category.description}
              </p>

              {/* Skills pills */}
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: 'rgba(212, 162, 74, 0.04)',
                      border: '1px solid rgba(212, 162, 74, 0.12)',
                      color: '#e8e4dd',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

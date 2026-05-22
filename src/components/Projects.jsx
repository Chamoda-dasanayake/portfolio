import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineExternalLink, HiOutlineCode } from 'react-icons/hi';
import { projectsData } from '../data/portfolioData';

const categories = ['All', ...new Set(projectsData.flatMap(p => Array.isArray(p.category) ? p.category : [p.category]))];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => Array.isArray(p.category) ? p.category.includes(activeCategory) : p.category === activeCategory);

  return (
    <section id="projects" className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[180px] opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #c48a2a, transparent)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mt-4">
            A showcase of my best work in AI, machine learning, and full-stack development
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'text-white'
                  : 'border border-white/5 hover:border-white/10'
              }`}
              style={activeCategory === cat ? {
                background: 'linear-gradient(135deg, #c48a2a, #d4a24a)',
                color: '#0b0a08',
                boxShadow: '0 4px 20px rgba(196, 138, 42, 0.2)',
              } : {
                color: '#9c9588',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card overflow-hidden group flex flex-col h-full relative"
              >
                {/* Subtle gradient border effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" 
                     style={{ boxShadow: 'inset 0 0 0 1px rgba(212, 162, 74, 0.3)' }} />

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2 flex-wrap">
                       {project.featured && (
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider"
                          style={{ background: 'rgba(212, 162, 74, 0.1)', color: '#d4a24a', border: '1px solid rgba(212, 162, 74, 0.2)' }}>
                          Featured
                        </span>
                      )}
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-medium uppercase tracking-wider" style={{ background: 'rgba(255,255,255,0.03)', color: '#9c9588', border: '1px solid rgba(255,255,255,0.05)' }}>
                        {Array.isArray(project.category) ? project.category.join(' / ') : project.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[#d4a24a] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed mb-6" style={{ color: '#9c9588' }}>
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-all hover:bg-white/5" 
                              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', color: '#e8e4dd' }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-white/5">
                      {project.github && project.github !== '#' && (
                        <a href={project.github} target="_blank" rel="noreferrer"
                          className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
                          style={{ color: '#9c9588' }}>
                          <HiOutlineCode size={18} /> Source Code
                        </a>
                      )}
                      {project.live && project.live !== '#' && (
                        <a href={project.live} target="_blank" rel="noreferrer"
                          className="flex items-center gap-2 text-sm font-medium transition-colors ml-auto hover:text-[#e9c07e]"
                          style={{ color: '#d4a24a' }}>
                          <HiOutlineExternalLink size={18} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

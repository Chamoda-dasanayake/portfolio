import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { HiOutlineFire, HiOutlineStar, HiOutlineCode } from 'react-icons/hi';
import { githubStats } from '../data/portfolioData';

const GithubStats = () => {
  const statCards = [
    { icon: HiOutlineCode, label: 'Contributions', value: githubStats.contributions, color: '#c48a2a' },
    { icon: HiOutlineFire, label: 'Day Streak', value: githubStats.streak, color: '#d4a24a' },
    { icon: SiGithub, label: 'Repositories', value: githubStats.repos, color: '#e9c07e' },
    { icon: HiOutlineStar, label: 'Stars Earned', value: githubStats.stars, color: '#b8860b' },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-white">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="section-subheading mt-4">
            Contributing to the developer community through open source
          </p>
        </motion.div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <stat.icon size={24} color={stat.color} className="mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-wider font-medium" style={{ color: '#6b6560' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Language bars */}
        <motion.div
          className="glass-card p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
            <HiOutlineCode style={{ color: '#d4a24a' }} />
            Top Languages
          </h3>

          {/* Combined bar */}
          <div className="h-3 rounded-full overflow-hidden flex mb-6 bg-white/5">
            {githubStats.languages.map((lang) => (
              <motion.div
                key={lang.name}
                className="h-full"
                style={{ backgroundColor: lang.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4">
            {githubStats.languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                <span className="text-sm" style={{ color: '#9c9588' }}>{lang.name}</span>
                <span className="text-xs font-mono" style={{ color: '#6b6560' }}>{lang.percentage}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;

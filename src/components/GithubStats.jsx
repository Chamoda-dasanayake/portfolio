import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { HiOutlineFire, HiOutlineStar, HiOutlineCode } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { githubStats as initialStats } from '../data/portfolioData';

const GithubStats = () => {
  const [stats, setStats] = useState({
    repos: initialStats.repos,
    stars: initialStats.stars,
    contributions: initialStats.contributions,
    streak: initialStats.streak,
    languages: initialStats.languages
  });

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/Chamoda-dasanayake');
        if (!userRes.ok) return;
        const userData = await userRes.json();
        
        const reposRes = await fetch('https://api.github.com/users/Chamoda-dasanayake/repos?per_page=100');
        if (!reposRes.ok) return;
        const reposData = await reposRes.json();
        
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        
        const langMap = {};
        reposData.forEach(repo => {
          if (repo.language) {
            let lang = repo.language;
            if (lang === 'HTML' || lang === 'CSS') lang = 'HTML/CSS';
            langMap[lang] = (langMap[lang] || 0) + 1;
          }
        });
        
        const totalLangs = Object.values(langMap).reduce((a, b) => a + b, 0);
        const languageColors = {
          Python: '#3572a5',
          JavaScript: '#f1e05a',
          TypeScript: '#3178c6',
          Java: '#b07219',
          'HTML/CSS': '#e34c26',
          'Jupyter Notebook': '#DA5B0B',
          C: '#555555',
          'C++': '#f34b7d',
          'C#': '#178600'
        };
        
        let dynamicLangs = Object.entries(langMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / totalLangs) * 100),
            color: languageColors[name] || '#6e7681'
          }));
          
        const top5Percentage = dynamicLangs.reduce((acc, lang) => acc + lang.percentage, 0);
        if (top5Percentage < 100) {
          dynamicLangs.push({
            name: 'Other',
            percentage: 100 - top5Percentage,
            color: '#6e7681'
          });
        }

        setStats(prev => ({
          ...prev,
          repos: userData.public_repos || prev.repos,
          stars: totalStars || prev.stars,
          languages: dynamicLangs.length > 0 ? dynamicLangs : prev.languages
        }));
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchGithubData();
  }, []);

  const statCards = [
    { icon: HiOutlineCode, label: 'Contributions', value: stats.contributions, color: '#c48a2a' },
    { icon: HiOutlineFire, label: 'Day Streak', value: stats.streak, color: '#d4a24a' },
    { icon: SiGithub, label: 'Repositories', value: stats.repos, color: '#e9c07e' },
    { icon: HiOutlineStar, label: 'Stars Earned', value: stats.stars, color: '#b8860b' },
  ];

  return (
    <section className="relative py-10 md:py-12 overflow-hidden">
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
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}+</div>
              <div className="text-xs uppercase tracking-wider font-medium" style={{ color: '#6b6560' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contribution Graph */}
          <motion.div
            className="glass-card p-6 md:p-8 flex flex-col justify-center items-center overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2 w-full">
              <SiGithub style={{ color: '#e9c07e' }} />
              Contributions Graph
            </h3>
            <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
              <div className="min-w-[650px]">
                <img 
                  src="https://ghchart.rshah.org/d4a24a/Chamoda-dasanayake" 
                  alt="Chamoda's Github Chart" 
                  className="w-full h-auto opacity-90"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Language bars */}
          <motion.div
            className="glass-card p-6 md:p-8 flex flex-col justify-center"
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
              {stats.languages.map((lang) => (
                <motion.div
                  key={lang.name}
                  className="h-full"
                  style={{ backgroundColor: lang.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4">
              {stats.languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                  <span className="text-sm" style={{ color: '#9c9588' }}>{lang.name}</span>
                  <span className="text-xs font-mono" style={{ color: '#6b6560' }}>{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;


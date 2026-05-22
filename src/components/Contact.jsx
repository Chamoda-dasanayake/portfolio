import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socials = [
    { icon: SiGithub, href: personalInfo.github, label: 'GitHub' },
    { icon: SiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: HiOutlineMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <section id="contact" className="relative py-12 md:py-16 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-[0.03]"
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
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subheading mt-4">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left: Contact info */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <HiOutlineMail className="text-xl" style={{ color: '#d4a24a' }} />
                <span className="text-white font-medium text-sm">Email</span>
              </div>
              <p className="text-sm" style={{ color: '#9c9588' }}>{personalInfo.email}</p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <HiOutlineLocationMarker className="text-xl" style={{ color: '#e9c07e' }} />
                <span className="text-white font-medium text-sm">Location</span>
              </div>
              <p className="text-sm" style={{ color: '#9c9588' }}>{personalInfo.location}</p>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass w-12 h-12 rounded-xl flex items-center justify-center transition-all"
                  style={{ color: '#9c9588' }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            className="md:col-span-3 glass-card p-8"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-5">
              <div>
                <label className="text-sm mb-2 block font-medium" style={{ color: '#9c9588' }}>Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-white text-sm focus:outline-none transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(212, 162, 74, 0.3)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(212, 162, 74, 0.08)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="text-sm mb-2 block font-medium" style={{ color: '#9c9588' }}>Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-white text-sm focus:outline-none transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(212, 162, 74, 0.3)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(212, 162, 74, 0.08)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm mb-2 block font-medium" style={{ color: '#9c9588' }}>Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-white text-sm focus:outline-none transition-all resize-none"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(212, 162, 74, 0.3)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(212, 162, 74, 0.08)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="btn-primary w-full justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

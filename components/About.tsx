'use client'

import { motion } from 'framer-motion'

const achievements = [
  'First blockchain advisory firm in DIFC specializing in FMI consulting',
  'Advised on $2B+ in tokenized real-world asset transactions',
  'Partnered with leading central banks on CBDC research',
  'Successfully navigated 50+ regulatory approval processes',
  'Established security token frameworks for major financial institutions',
  'Led blockchain integration for Fortune 500 companies'
]

export default function About() {
  return (
    <section id="about" className="py-32 bg-neutral-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About Us</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Leading the transformation of traditional finance through blockchain innovation
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect p-12 rounded-3xl mb-20 border-l-4 border-primary-500"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
          <p className="text-lg text-neutral-300 leading-relaxed mb-4">
            Loepfe Consulting bridges the gap between traditional finance and blockchain technology,
            providing institutional-grade advisory services to clients navigating the digital asset ecosystem.
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed">
            With deep expertise in blockchain technology, regulatory frameworks, and financial markets,
            we empower organizations to leverage distributed ledger technology while maintaining compliance,
            security, and operational excellence.
          </p>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 glass-effect p-6 rounded-xl"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-neutral-300">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

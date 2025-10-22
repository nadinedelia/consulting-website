'use client'

import { motion } from 'framer-motion'

const achievements = [
  'Involvement in CBDC implementations for central banks across UAE, Saudi Arabia, and Qatar ',
  'Advised Fortune 500 companies and major clearing houses on blockchain integration',
  'Led real-world asset tokenization projects across real estate, bonds, and equities',
  'Created and operated mission-critical infrastructure for government entities',
]

// Client locations for globe animation
const clientLocations = [
  { name: 'Switzerland', angle: 0 },
  { name: 'London', angle: 33 },
  { name: 'Germany', angle: 66 },
  { name: 'Brasil', angle: 99 },
  { name: 'USA', angle: 132 },
  { name: 'Qatar', angle: 165 },
  { name: 'Saudi Arabia', angle: 198 },
  { name: 'UAE', angle: 231 },
  { name: 'Thailand', angle: 264 },
  { name: 'South Africa', angle: 297 },
  { name: 'Kenya', angle: 330 }
]

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden scroll-mt-12">
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
          className="text-center mb-32"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">About Us</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Bridging TradFi and DeFi
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative max-w-4xl mx-auto mb-20 overflow-hidden rounded-2xl group"
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Inner content box */}
          <div className="relative m-[2px] bg-neutral-900/95 backdrop-blur-xl rounded-2xl p-8 md:p-10">
            {/* Animated corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl group-hover:bg-primary-500/30 transition-all duration-500"></div>

            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-base md:text-lg text-neutral-300 leading-relaxed mb-3">
                Loepfe Consulting bridges the gap between traditional finance and blockchain technology,
                providing institutional-grade advisory services to clients navigating the digital asset ecosystem.
              </p>
              <p className="text-base md:text-lg text-neutral-400 leading-relaxed">
                With deep expertise in blockchain technology, software and infrastructure architecture and financial markets,
                we empower organizations to leverage distributed ledger technology while maintaining compliance,
                security, and operational excellence.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Founder Key Achievements</h3>
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

        {/* Global Presence Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          {/* <h3 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Global Presence</span>
          </h3> */}
          <p className="text-xl text-neutral-400 mb-2">Serving clients on 5 continents</p>
          <p className="text-sm text-neutral-500">Focus markets: UAE, United Kingdom, Switzerland & United States</p>
        </motion.div>

        {/* Globe Animation - Hero Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-[600px] max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="nodeGradientGlobe" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2ec973" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#20a85b" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glowGlobe">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Central rotating globe structure */}
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                style={{ originX: '300px', originY: '300px' }}
              >
                {/* Main circle outline */}
                <circle
                  cx="300"
                  cy="300"
                  r="150"
                  fill="none"
                  stroke="#2ec973"
                  strokeWidth="2"
                  opacity="0.3"
                />

                {/* Latitude lines */}
                {[-90, -60, -30, 0, 30, 60, 90].map((lat, i) => {
                  const ry = Math.abs(Math.cos((lat * Math.PI) / 180)) * 150
                  return (
                    <ellipse
                      key={`lat-${i}`}
                      cx="300"
                      cy="300"
                      rx="150"
                      ry={ry}
                      fill="none"
                      stroke="#2ec973"
                      strokeWidth="1"
                      opacity="0.2"
                      transform={`translate(0, ${lat * 0.8})`}
                    />
                  )
                })}

                {/* Longitude lines (vertical curves) */}
                {[0, 30, 60, 90, 120, 150].map((angle, i) => (
                  <ellipse
                    key={`lon-${i}`}
                    cx="300"
                    cy="300"
                    rx="30"
                    ry="150"
                    fill="none"
                    stroke="#2ec973"
                    strokeWidth="1"
                    opacity="0.2"
                    transform={`rotate(${angle} 300 300)`}
                  />
                ))}
              </motion.g>

              {/* Orbiting client location nodes - similar to Hero hexagon nodes */}
              {clientLocations.map((location, i) => {
                const angle = location.angle
                const orbitRadius = 150
                return (
                  <motion.g key={`location-${i}`}>
                    {/* Orbiting path */}
                    <motion.circle
                      cx={300 + Math.cos((angle * Math.PI) / 180) * orbitRadius}
                      cy={300 + Math.sin((angle * Math.PI) / 180) * orbitRadius}
                      r="6"
                      fill="url(#nodeGradientGlobe)"
                      filter="url(#glowGlobe)"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Connecting lines from center to nodes */}
                    <motion.line
                      x1="300"
                      y1="300"
                      x2={300 + Math.cos((angle * Math.PI) / 180) * orbitRadius}
                      y2={300 + Math.sin((angle * Math.PI) / 180) * orbitRadius}
                      stroke="#2ec973"
                      strokeWidth="1"
                      opacity="0.2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1, opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                    />
                  </motion.g>
                )
              })}

              {/* Central pulsing core */}
              <motion.circle
                cx="300"
                cy="300"
                r="20"
                fill="url(#nodeGradientGlobe)"
                filter="url(#glowGlobe)"
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Data streams flowing outward */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.path
                  key={`stream-${i}`}
                  d={`M 300 300 Q ${300 + Math.cos((angle * Math.PI) / 180) * 100} ${
                    300 + Math.sin((angle * Math.PI) / 180) * 100
                  } ${300 + Math.cos((angle * Math.PI) / 180) * 200} ${
                    300 + Math.sin((angle * Math.PI) / 180) * 200
                  }`}
                  stroke="#2ec973"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: [0, 1, 1], opacity: [0, 0.6, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* Floating particles */}
              {[...Array(15)].map((_, i) => {
                const randomAngle = (i * 360) / 15
                return (
                  <motion.circle
                    key={`particle-${i}`}
                    cx="300"
                    cy="300"
                    r="2"
                    fill="#2ec973"
                    initial={{ opacity: 0 }}
                    animate={{
                      cx: [
                        300,
                        300 + Math.cos((randomAngle * Math.PI) / 180) * (100 + Math.random() * 100)
                      ],
                      cy: [
                        300,
                        300 + Math.sin((randomAngle * Math.PI) / 180) * (100 + Math.random() * 100)
                      ],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeOut",
                    }}
                  />
                )
              })}
            </svg>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

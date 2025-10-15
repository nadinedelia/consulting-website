'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Animated blockchain network visualization */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(46, 201, 115, 0)" />
              <stop offset="50%" stopColor="rgba(46, 201, 115, 0.4)" />
              <stop offset="100%" stopColor="rgba(46, 201, 115, 0)" />
            </linearGradient>
          </defs>

          {/* Animated connecting lines */}
          <motion.line
            x1="10%" y1="20%" x2="40%" y2="35%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="60%" y1="30%" x2="85%" y2="45%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="30%" y1="70%" x2="55%" y2="60%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="70%" y1="75%" x2="90%" y2="65%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1.5, repeat: Infinity, ease: "linear" }}
          />

          {/* Animated nodes */}
          <motion.circle
            cx="10%" cy="20%" r="4"
            fill="#2ec973"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
          />
          <motion.circle
            cx="40%" cy="35%" r="4"
            fill="#2ec973"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
            transition={{ duration: 1, delay: 0.3, repeat: Infinity, repeatDelay: 2 }}
          />
          <motion.circle
            cx="60%" cy="30%" r="4"
            fill="#2ec973"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
            transition={{ duration: 1, delay: 0.6, repeat: Infinity, repeatDelay: 2 }}
          />
          <motion.circle
            cx="85%" cy="45%" r="4"
            fill="#2ec973"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
            transition={{ duration: 1, delay: 0.9, repeat: Infinity, repeatDelay: 2 }}
          />
          <motion.circle
            cx="30%" cy="70%" r="4"
            fill="#2ec973"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
            transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatDelay: 2 }}
          />
          <motion.circle
            cx="55%" cy="60%" r="4"
            fill="#2ec973"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
            transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatDelay: 2 }}
          />
          <motion.circle
            cx="70%" cy="75%" r="4"
            fill="#2ec973"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
            transition={{ duration: 1, delay: 1.8, repeat: Infinity, repeatDelay: 2 }}
          />
          <motion.circle
            cx="90%" cy="65%" r="4"
            fill="#2ec973"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
            transition={{ duration: 1, delay: 2.1, repeat: Infinity, repeatDelay: 2 }}
          />
        </svg>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-white">Transforming</span>
              <br />
              <span className="gradient-text">Web3 Vision</span>
              <br />
              <span className="text-white">Into Reality</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-xl">
              Blockchain consulting for institutional clients, FMIs, and enterprises.
            </p>

          </motion.div>

          {/* Right side - Large 3D Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Large animated blockchain cube/network */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2ec973" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#20a85b" stopOpacity="0.3" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Central rotating hexagon structure */}
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ originX: '250px', originY: '250px' }}
                >
                  {/* Hexagon layers */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <motion.line
                      key={`hex1-${i}`}
                      x1="250"
                      y1="250"
                      x2={250 + Math.cos((angle * Math.PI) / 180) * 120}
                      y2={250 + Math.sin((angle * Math.PI) / 180) * 120}
                      stroke="#2ec973"
                      strokeWidth="2"
                      opacity="0.3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                    />
                  ))}

                  {/* Outer hexagon */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const nextAngle = (angle + 60) % 360
                    return (
                      <motion.line
                        key={`hex2-${i}`}
                        x1={250 + Math.cos((angle * Math.PI) / 180) * 120}
                        y1={250 + Math.sin((angle * Math.PI) / 180) * 120}
                        x2={250 + Math.cos((nextAngle * Math.PI) / 180) * 120}
                        y2={250 + Math.sin((nextAngle * Math.PI) / 180) * 120}
                        stroke="#2ec973"
                        strokeWidth="2"
                        opacity="0.5"
                      />
                    )
                  })}
                </motion.g>

                {/* Orbiting nodes */}
                {[0, 72, 144, 216, 288].map((angle, i) => (
                  <motion.g key={`orbit-${i}`}>
                    <motion.circle
                      cx="250"
                      cy="250"
                      r="150"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="1"
                      opacity="0.2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "linear" }}
                      style={{ originX: '250px', originY: '250px' }}
                    />
                    <motion.circle
                      cx={250 + Math.cos((angle * Math.PI) / 180) * 150}
                      cy={250 + Math.sin((angle * Math.PI) / 180) * 150}
                      r="8"
                      fill="url(#nodeGradient)"
                      filter="url(#glow)"
                      animate={{
                        cx: [
                          250 + Math.cos((angle * Math.PI) / 180) * 150,
                          250 + Math.cos(((angle + 360) * Math.PI) / 180) * 150,
                        ],
                        cy: [
                          250 + Math.sin((angle * Math.PI) / 180) * 150,
                          250 + Math.sin(((angle + 360) * Math.PI) / 180) * 150,
                        ],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.g>
                ))}

                {/* Central pulsing core */}
                <motion.circle
                  cx="250"
                  cy="250"
                  r="20"
                  fill="url(#nodeGradient)"
                  filter="url(#glow)"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Connecting particles */}
                {[...Array(12)].map((_, i) => (
                  <motion.circle
                    key={`particle-${i}`}
                    cx="250"
                    cy="250"
                    r="3"
                    fill="#2ec973"
                    initial={{ opacity: 0 }}
                    animate={{
                      cx: [250, 250 + (Math.random() - 0.5) * 300],
                      cy: [250, 250 + (Math.random() - 0.5) * 300],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeOut",
                    }}
                  />
                ))}

                {/* Data streams */}
                {[30, 90, 150, 210, 270, 330].map((angle, i) => (
                  <motion.path
                    key={`stream-${i}`}
                    d={`M 250 250 Q ${250 + Math.cos((angle * Math.PI) / 180) * 100} ${
                      250 + Math.sin((angle * Math.PI) / 180) * 100
                    } ${250 + Math.cos((angle * Math.PI) / 180) * 200} ${
                      250 + Math.sin((angle * Math.PI) / 180) * 200
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
                      delay: i * 0.4,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

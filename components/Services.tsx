'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Institutional Advisory',
    description: 'Strategic guidance for financial institutions navigating blockchain adoption and digital asset integration.',
    features: ['RWA Strategy', 'Compliance', 'Digital Asset Custody']
  },
  {
    title: 'Real World Assets',
    description: 'Expert tokenization strategies for physical assets, real estate and traditional financial instruments.',
    features: ['Asset Tokenization', 'Market Infrastructure', 'Liquidity Solutions']
  },
  {
    title: 'Blockchain Integration',
    description: 'End-to-end blockchain implementation for enterprises, from architecture design to deployment.',
    features: ['Technical Architecture', 'Smart Contract Development', 'System Integration']
  }
]

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Comprehensive blockchain consulting services tailored for institutional clients and enterprises
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl card-hover group"
            >
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-neutral-500">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

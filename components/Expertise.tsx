'use client'

import { motion } from 'framer-motion'

const expertiseAreas = [
  {
    category: 'Blockchain Technologies',
    items: ['Ethereum & EVM chains', 'Hedera', 'Corda', 'Solana']
  },
  {
    category: 'Digital Assets',
    items: ['Asset Tokenization', 'Stablecoins', 'Digital Securities', 'CBDCs']
  },
  {
    category: 'Industries',
    items: ['Banking & Finance', 'Capital Markets', 'Payment Systems', 'Asset Management']
  }
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Our Expertise</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Deep domain knowledge across ledger technologies and digital assets
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl border-l-2 border-primary-500"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{area.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {area.items.map((item, idx) => (
                  <div key={idx} className="flex items-center text-neutral-400">
                    <svg className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

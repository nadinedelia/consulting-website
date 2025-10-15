'use client'

import { motion } from 'framer-motion'

const expertiseAreas = [
  {
    category: 'Blockchain Technologies',
    items: ['Ethereum & EVM chains', 'Hyperledger Fabric', 'Solana', 'Polygon', 'Avalanche', 'Layer 2 Solutions']
  },
  {
    category: 'Digital Assets',
    items: ['Asset Tokenization', 'Security Tokens', 'Stablecoins', 'NFTs', 'Digital Securities', 'CBDCs']
  },
  {
    category: 'Industries',
    items: ['Banking & Finance', 'Capital Markets', 'Real Estate', 'Commodities', 'Payment Systems', 'Asset Management']
  },
  {
    category: 'Regulatory Frameworks',
    items: ['MiCA (EU)', 'FSRA (ADGM)', 'VARA (Dubai)', 'FCA (UK)', 'SEC (US)', 'Basel III']
  }
]

const geographicPresence = [
  {
    region: 'UAE',
    description: 'Headquarters in Dubai, serving MENA region',
    markets: ['DIFC', 'ADGM', 'VARA']
  },
  {
    region: 'United Kingdom',
    description: 'Strategic presence in London financial district',
    markets: ['FCA Regulated', 'Digital Assets']
  },
  {
    region: 'United States',
    description: 'Advisory services for US institutional clients',
    markets: ['SEC Compliance', 'TradFi Integration']
  }
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Expertise</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Deep domain knowledge across blockchain technologies, digital assets, and regulatory frameworks
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl border-l-4 border-primary-500"
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

        {/* Geographic Presence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl font-bold text-white mb-4">Global Presence</h3>
          <p className="text-lg text-neutral-400">Serving institutional clients across three continents</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {geographicPresence.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl text-center card-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">{location.region}</h4>
              <p className="text-neutral-400 mb-4">{location.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {location.markets.map((market, idx) => (
                  <span key={idx} className="px-3 py-1 bg-neutral-800 text-primary-400 text-xs rounded-full border border-neutral-700">
                    {market}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

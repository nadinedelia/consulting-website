import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Careers() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-neutral-300 mb-1">
              Build the future of blockchain technology
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2l md:text-3xl font-bold text-center mb-16 text-white">
              Open Positions
            </h2>

            {/* Position 2 */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-8 mb-6 hover:border-primary-600/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Blockchain Developer</h3>
                  <div className="flex gap-4 text-sm text-neutral-400">
                    <span>📍 Dubai</span>
                    <span>⏰ Full-time</span>
                    <span>Visa Sponsorship Available</span>
                  </div>
                </div>
              </div>
              <p className="text-neutral-300 mb-4">
                Build and deploy smart contracts and decentralized applications
              </p>
              <ul className="space-y-2 text-neutral-400 mb-6">
                <li>• 3+ years of smart contract development experience</li>
                <li>• Proficiency in Solidity or Rust</li>
                <li>• Understanding of DeFi protocols and tokenization</li>
                <li>• Security-first mindset with auditing experience</li>
              </ul>
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                Apply Now
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2l md:text-3xl font-bold text-center mb-16 text-white">
              Our Hiring Process
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Submit Application</h3>
                  <p className="text-neutral-400">
                    Apply through the contact form with your resume and portfolio. Tell us why you're interested in working with us.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Initial Screening</h3>
                  <p className="text-neutral-400">
                    We'll review your application and reach out within a week for a brief introductory call.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Technical Assessment</h3>
                  <p className="text-neutral-400">
                    Complete a role-specific assessment or case study to demonstrate your expertise.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Offer & Onboarding</h3>
                  <p className="text-neutral-400">
                    Receive your offer and join our team. We'll ensure a smooth onboarding process to set you up for success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary-900/30 to-primary-800/30 border border-primary-700/50 rounded-2xl p-12">
            <h2 className="text-2xl md:text-2xl font-bold mb-6 text-white">
              Don't See the Right Role?
            </h2>
            <p className="text-m text-neutral-300 mb-8">
              We're always looking for talented individuals. Send us your resume and tell us how you can contribute to our team.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

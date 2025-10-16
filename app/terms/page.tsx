export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-neutral-950 pt-32 pb-20">
      <div className="section-container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="text-neutral-400 mb-8">Last updated: January 2025</p>

        <div className="space-y-8 text-neutral-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
            <p className="mb-4">
              Loepfe Consulting provides blockchain and Web3 advisory services to institutional clients.
              The specific scope, terms, and conditions of consulting services will be defined in separate
              engagement agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
            <p className="mb-4">
              All content on this website, including text, graphics, logos, and software, is the property
              of Loepfe Consulting and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
            <p className="mb-4">
              Loepfe Consulting shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages resulting from your use of or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Confidentiality</h2>
            <p className="mb-4">
              We maintain strict confidentiality regarding all client information and engagements.
              Detailed confidentiality terms will be outlined in individual engagement agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Governing Law</h2>
            <p className="mb-4">
              These terms shall be governed by and construed in accordance with the laws of the
              United Arab Emirates (DIFC).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective
              immediately upon posting to this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service, please contact:{' '}
              <a href="mailto:loepfe.consulting@pm.me" className="text-primary-400 hover:text-primary-300">
                loepfe.consulting@pm.me
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

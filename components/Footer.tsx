'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Logo */}
          <div>
            <Image
              src="/logo.svg"
              alt="Loepfe Consulting"
              width={300}
              height={75}
              className="h-26 w-auto"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-3">
            <p className="text-neutral-400">
              Web3 consulting firm specializing in institutional clients, FMIs, and digital asset solutions across UAE, UK, CH and US markets.
            </p>
            <a
              href="mailto:loepfe.consulting@pm.me"
              className="text-primary-400 hover:text-primary-300 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              loepfe.consulting@pm.me
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; 2025 Loepfe Consulting – FZCO. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

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

          {/* Description */}
          <div className="flex items-center">
            <p className="text-neutral-400">
              Web3 consulting firm specializing in institutional clients, FMIs, and digital asset solutions across UAE, UK, and US markets.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; 2025 Loepfe Consulting – FZCO. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

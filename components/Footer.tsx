'use client'

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="gradient-text">Loepfe</span>
              <span className="text-white ml-2">Consulting</span>
            </div>
            <p className="text-neutral-400 mb-4 max-w-md">
              Leading blockchain consulting firm specializing in institutional clients, FMIs, and digital asset solutions across UAE, UK, and US markets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-neutral-400 hover:text-primary-400 transition-colors">Services</a></li>
              <li><a href="#expertise" className="text-neutral-400 hover:text-primary-400 transition-colors">Expertise</a></li>
              <li><a href="#about" className="text-neutral-400 hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-neutral-400 hover:text-primary-400 transition-colors">Institutional Advisory</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-primary-400 transition-colors">Real World Assets</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-primary-400 transition-colors">FMI Consulting</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-primary-400 transition-colors">Digital Assets</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; 2024 Loepfe Consulting. All rights reserved.
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

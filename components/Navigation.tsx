'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/logo.svg"
              alt="Loepfe Consulting"
              width={500}
              height={125}
              className="h-32 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#expertise"
              className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
            >
              Expertise
            </a>
            <a
              href="#about"
              className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
            >
              About
            </a>
            <Link
              href="/careers"
              className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
            >
              Careers
            </Link>
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

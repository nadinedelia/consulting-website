import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Loepfe Consulting | Blockchain & Web3 Advisory',
  description: 'Premier blockchain consulting firm specializing in institutional clients, FMIs, and Real World Assets. Serving clients in UAE, UK, and US.',
  keywords: ['blockchain consulting', 'web3 advisory', 'institutional blockchain', 'digital assets', 'FMI consulting', 'real world assets', 'tokenization'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

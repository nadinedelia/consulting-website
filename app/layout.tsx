import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Loepfe Consulting | Blockchain & Web3 Advisory',
  description: 'Blockchain consulting firm specializing in institutional clients, FMIs, and Real World Assets. Serving clients in UAE, UK, and US.',
  keywords: ['blockchain consulting', 'web3 advisory', 'institutional blockchain', 'digital assets', 'FMI consulting', 'real world assets', 'tokenization'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}

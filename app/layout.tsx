import type { Metadata } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Steven Liew | On-Chain Data Analyst',
  description:
    'Portfolio of Steven Liew — on-chain data analyst specializing in blockchain analytics, Dune dashboards, and high-signal data insights.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body className={`${inter.className} antialiased bg-dark-bg text-slate-200`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
import type { Metadata } from 'next'
import { Press_Start_2P, VT323 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start',
  display: 'swap',
})

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Steven Liew | Windows 98 Desktop',
  description:
    'Portfolio of Steven Liew — on-chain data analyst specializing in blockchain analytics, Dune dashboards, and high-signal data insights.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${pressStart.variable} ${vt323.variable}`}>
      <body className={`font-sans text-win-black bg-win-teal overflow-hidden select-none`}>
        <div className="crt-overlay pointer-events-none fixed inset-0 z-[9999]" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
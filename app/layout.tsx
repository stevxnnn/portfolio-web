import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

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
    <html lang="en" className="scroll-smooth">
      <body className="font-body text-on-surface bg-surface antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
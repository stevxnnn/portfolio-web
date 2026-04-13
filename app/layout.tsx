import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://stevenliew.dev'),
  title: 'Steven Liew | On-Chain Data Analyst',
  description:
    'Steven Liew is an on-chain data analyst specializing in blockchain analytics, Dune dashboards, DeFi intelligence, and Web3 data engineering. Open to full-time, contract, and freelance roles.',
  keywords: [
    'on-chain analytics', 'blockchain data analyst', 'Dune Analytics', 'Web3 data science',
    'DeFi analytics', 'data engineering', 'SQL', 'smart contract analytics', 'TVL tracking',
    'Steven Liew', 'crypto analyst', 'blockchain engineer'
  ],
  authors: [{ name: 'Steven Liew', url: 'https://stevenliew.dev' }],
  openGraph: {
    title: 'Steven Liew | On-Chain Data Analyst',
    description:
      'Turning raw blockchain data into decisions that move capital. On-chain analytics, Dune dashboards, and DeFi intelligence.',
    url: 'https://stevenliew.dev',
    siteName: 'Steven Liew Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Steven Liew — On-Chain Data Analyst',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steven Liew | On-Chain Data Analyst',
    description:
      'Turning raw blockchain data into decisions that move capital. Open to full-time, contract, and freelance roles.',
    images: ['/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="font-body text-on-surface bg-surface antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
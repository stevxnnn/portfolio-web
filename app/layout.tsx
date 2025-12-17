import type { Metadata } from 'next'
<<<<<<< HEAD
import { JetBrains_Mono, Inter } from 'next/font/google'
=======
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
>>>>>>> 8384a800080fd4127d41779779f4a0eca043e482
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
  title: 'On-Chain Data Analyst | Portfolio',
  description: 'Portfolio of an on-chain data analyst specializing in blockchain analytics and data insights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<<<<<<< HEAD
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
=======
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
        <Analytics />
      </body>
>>>>>>> 8384a800080fd4127d41779779f4a0eca043e482
    </html>
  )
}


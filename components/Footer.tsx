'use client'

import { Github, Linkedin, Mail, BarChart3 } from 'lucide-react'

const SOCIALS = [
  { icon: Mail, href: 'mailto:stevenliew929@gmail.com', label: 'Email' },
  { icon: Linkedin, href: 'https://linkedin.com/in/liewsteven', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/stevxnnn', label: 'GitHub' },
  { icon: BarChart3, href: 'https://dune.com/zardy', label: 'Dune' },
]

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant/10 bg-surface-container-lowest">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a
              href="#hero"
              className="font-heading text-lg font-bold text-primary tracking-wider hover:opacity-80 transition-opacity"
            >
              SL<span className="text-on-surface-variant">.</span>
            </a>
            <p className="text-xs text-on-surface-variant mt-1 font-body">
              On-Chain Data Analyst
            </p>
          </div>

          <div className="flex items-center gap-4">
            {SOCIALS.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer"
                  aria-label={social.label}
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>

          <p className="text-xs text-on-surface-variant font-body">
            &copy; {new Date().getFullYear()} Steven Liew
          </p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Mail, BarChart3 } from 'lucide-react'
import emailjs from '@emailjs/browser'

const SOCIALS = [
  { name: 'Email', icon: Mail, href: 'mailto:stevenliew929@gmail.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/liewsteven' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/stevxnnn' },
  { name: 'Dune', icon: BarChart3, href: 'https://dune.com/zardy' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

    if (!serviceID || !templateID || !publicKey) {
      setSubmitStatus({
        type: 'error',
        message: 'Email service is not configured.',
      })
      setIsSubmitting(false)
      return
    }

    try {
      const result = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'stevenliew929@gmail.com',
        },
        publicKey
      )

      if (result.status === 200) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully.' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus({ type: 'error', message: 'Failed to send message.' })
      }
    } catch (error: any) {
      console.error('EmailJS error:', error)
      setSubmitStatus({
        type: 'error',
        message: error.text || 'Failed to send message.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="section-spacing bg-surface-container-low/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            custom={0}
          >
            <p className="text-label text-primary mb-4">Contact</p>
            <h2 className="text-headline text-3xl md:text-4xl text-on-surface mb-6">
              Let&apos;s connect
            </h2>
            <p className="font-body text-on-surface-variant text-base md:text-lg leading-relaxed mb-10">
              Have a data challenge or need on-chain intelligence? I&apos;m always open to interesting
              conversations and new collaborations.
            </p>

            {/* Social links */}
            <div className="flex flex-wrap gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded bg-surface-container hover:bg-surface-container-high transition-colors duration-200 group cursor-pointer"
                  >
                    <Icon size={16} className="text-on-surface-variant group-hover:text-primary transition-colors duration-200" />
                    <span className="font-body text-sm text-on-surface-variant group-hover:text-on-surface transition-colors duration-200">
                      {social.name}
                    </span>
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            custom={2}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-label text-on-surface-variant mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container-lowest rounded px-4 py-3 font-body text-on-surface text-base outline-none border border-transparent focus:border-primary/50 transition-colors duration-200 placeholder:text-on-surface-variant/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-label text-on-surface-variant mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container-lowest rounded px-4 py-3 font-body text-on-surface text-base outline-none border border-transparent focus:border-primary/50 transition-colors duration-200 placeholder:text-on-surface-variant/40"
                  placeholder="you@domain.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-label text-on-surface-variant mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-surface-container-lowest rounded px-4 py-3 font-body text-on-surface text-base outline-none border border-transparent focus:border-primary/50 transition-colors duration-200 resize-y placeholder:text-on-surface-variant/40"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus.message && (
                  <span className={`font-body text-sm font-medium ${
                    submitStatus.type === 'success' ? 'text-primary' : 'text-red-400'
                  }`}>
                    {submitStatus.message}
                  </span>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaSpinner,
  FaCheck,
} from 'react-icons/fa'

// Dune icon component
function DuneIcon({ className }: { className?: string }) {
  return (
    <img
      src="https://image.coinpedia.org/app_uploads/profile/1662614524274lcltlj6gvk.png"
      alt="Dune"
      className={className}
      style={{
        width: '28px',
        height: '28px',
        objectFit: 'contain',
        borderRadius: '50%',
        mixBlendMode: 'screen',
      }}
    />
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
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
        message:
          'Email service is not configured. Please contact the site administrator.',
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
        setSubmitStatus({
          type: 'success',
          message: "Message sent! I'll get back to you soon.",
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Something went wrong. Please try again.',
        })
      }
    } catch (error: any) {
      console.error('EmailJS error:', error)
      setSubmitStatus({
        type: 'error',
        message:
          error.text || 'Failed to send message. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    {
      name: 'Email',
      icon: <FaEnvelope />,
      href: 'mailto:stevenliew929@gmail.com',
      hoverColor: 'hover:text-red-400',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      href: 'https://linkedin.com/in/liewsteven',
      hoverColor: 'hover:text-blue-400',
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      href: 'https://github.com/stevxnnn',
      hoverColor: 'hover:text-slate-200',
    },
    {
      name: 'Dune',
      icon: <DuneIcon />,
      href: 'https://dune.com/zardy',
      hoverColor: 'hover:text-accent-gold',
    },
  ]

  return (
    <section id="contact" className="section-container pb-32 md:pb-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
          <span className="text-gradient-gold">GET IN</span>{' '}
          <span className="text-white">TOUCH</span>
        </h2>
        <div className="w-16 h-0.5 bg-accent-gold/50 mx-auto mb-4" />
        <p className="text-slate-400 max-w-xl mx-auto font-sans">
          Have a data challenge? Let's turn it into insights.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Contact form */}
        <div className="gradient-border">
          <div className="bg-dark-card rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-white mb-6 font-mono">
              <span className="text-accent-gold">LET'S TALK</span> DATA
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg-lighter border border-dark-border rounded-xl text-white focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/20 transition-all font-sans text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg-lighter border border-dark-border rounded-xl text-white focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/20 transition-all font-sans text-sm"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-bg-lighter border border-dark-border rounded-xl text-white focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/20 transition-all resize-none font-sans text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-xl font-sans text-sm ${submitStatus.type === 'success'
                      ? 'bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald'
                      : 'bg-red-500/10 border border-red-500/30 text-red-400'
                    }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3.5 bg-accent-gold hover:bg-accent-gold-light disabled:bg-accent-gold/40 disabled:cursor-not-allowed text-dark-bg rounded-xl font-bold transition-all hover:scale-[1.02] disabled:hover:scale-100 flex items-center justify-center gap-2 font-mono text-sm shadow-lg shadow-accent-gold/20"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    SENDING...
                  </>
                ) : submitStatus.type === 'success' ? (
                  <>
                    <FaCheck />
                    SENT!
                  </>
                ) : (
                  <>
                    SEND MESSAGE
                    <FaPaperPlane />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Connect card */}
        <div className="gradient-border">
          <div className="bg-dark-card rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-4 font-mono">
                <span className="text-accent-blue">LET'S</span> CONNECT
              </h3>
              <p className="text-slate-400 text-sm font-sans leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out
                through any channel below.
              </p>
            </div>

            <div className="flex gap-5">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-500 ${link.hoverColor} text-2xl transition-all hover:scale-110`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

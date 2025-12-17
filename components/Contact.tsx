'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaSpinner,
} from 'react-icons/fa'

// Dune Analytics Icon Component
const DuneIcon = ({ className }: { className?: string }) => (
  <img
    src="https://image.coinpedia.org/app_uploads/profile/1662614524274lcltlj6gvk.png"
    alt="Dune Analytics"
    className={className}
    style={{ 
      width: '32px', 
      height: '32px', 
      objectFit: 'contain',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      mixBlendMode: 'screen',
    }}
  />
)

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

    // EmailJS configuration
    // Get these from your EmailJS dashboard: https://www.emailjs.com/
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

    // Validate that all required environment variables are set
    if (!serviceID || !templateID || !publicKey) {
      setSubmitStatus({
        type: 'error',
        message: 'Email service is not configured. Please contact the site administrator.',
      })
      setIsSubmitting(false)
      return
    }

    try {
      // Send email using EmailJS
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
          message: 'Thank you for your message! I will get back to you soon.',
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
        message: error.text || 'Failed to send message. Please try again later.',
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
      color: 'text-red-400 hover:text-red-300',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      href: 'https://linkedin.com/in/liewsteven',
      color: 'text-blue-400 hover:text-blue-300',
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      href: 'https://github.com/stevxnnn',
      color: 'text-gray-400 hover:text-gray-300',
    },
    {
      name: 'Dune',
      icon: <DuneIcon className="w-8 h-8" />,
      href: 'https://dune.com/zardy',
      color: 'opacity-80 hover:opacity-100 transition-opacity',
    },
  ]

  return (
    <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            <span className="text-neon-blue">GET IN</span>{' '}
            <span className="text-white">TOUCH</span>
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans">
            Have a data challenge? Let's turn it into insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-dark-card p-8 rounded-lg border border-neon-blue/20">
            <h3 className="text-2xl font-semibold text-white mb-6 font-mono">
              <span className="text-neon-blue">LET'S TALK</span>{' '}
              <span className="text-white">DATA</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200 mb-2"
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
                  className="w-full px-4 py-3 bg-dark-bg border border-neon-blue/20 rounded-lg text-white focus:outline-none focus:border-neon-blue transition-colors font-sans"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200 mb-2"
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
                  className="w-full px-4 py-3 bg-dark-bg border border-neon-blue/20 rounded-lg text-white focus:outline-none focus:border-neon-blue transition-colors font-sans"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black border border-primary-500/20 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg font-sans ${
                    submitStatus.type === 'success'
                      ? 'bg-neon-green/20 border border-neon-green/40 text-neon-green'
                      : 'bg-red-500/20 border border-red-500/40 text-red-400'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-neon-blue hover:bg-neon-cyan disabled:bg-neon-blue/50 disabled:cursor-not-allowed text-dark-bg rounded-lg font-semibold transition-all transform hover:scale-105 disabled:transform-none flex items-center justify-center space-x-2 font-mono shadow-lg shadow-neon-blue/50"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <span>HIRE ME FOR INSIGHTS</span>
                    <FaPaperPlane />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-dark-card p-8 rounded-lg border border-neon-blue/20">
            <h3 className="text-2xl font-semibold text-white mb-6 font-mono">
              <span className="text-neon-cyan">LET'S</span>{' '}
              <span className="text-white">CONNECT</span>
            </h3>
            <p className="text-gray-200 mb-6">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              through any of the channels below.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.color} text-3xl transition-transform transform hover:scale-110`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}


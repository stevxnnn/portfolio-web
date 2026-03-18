'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

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
          'Email service is not configured. Please contact the network administrator.',
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
          message: "Data pack transmitted successfully.",
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Transmission error: packet loss.',
        })
      }
    } catch (error: any) {
      console.error('EmailJS error:', error)
      setSubmitStatus({
        type: 'error',
        message:
          error.text || 'Failed to establish connection to SMTP server.',
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

  return (
    <div className="p-4 h-full flex flex-col font-sans w-full bg-win-gray text-base lg:text-lg min-h-[500px]">
      <div className="win-border-sunken bg-white p-6 flex-grow border-[#808080] overflow-auto flex flex-col items-center sm:items-stretch">
        <h2 className="font-display text-xl mb-6 text-win-blue drop-shadow-sm border-b-2 border-win-black pb-2">MAIL_CLIENT.EXE</h2>
        <p className="mb-6">Have a data challenge? Send me a direct broadcast.</p>

        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-bold underline mb-2 w-fit">Sender Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="win-border-sunken p-2 w-full outline-none focus:bg-blue-50 text-base"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-bold underline mb-2 w-fit">Reply-To Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="win-border-sunken p-2 w-full outline-none focus:bg-blue-50 text-base"
              placeholder="user@domain.com"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="font-bold underline mb-2 w-fit">Message Body:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="win-border-sunken p-3 w-full outline-none focus:bg-blue-50 resize-y text-base font-mono whitespace-pre-wrap"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-win-shadow mt-6">
             <button
                type="submit"
                disabled={isSubmitting}
                className="win-button px-8 py-2 font-bold text-base disabled:opacity-50 active:translate-y-[1px]"
              >
                {isSubmitting ? 'Transmitting...' : 'Send Packet'}
              </button>
             {submitStatus.message && (
                <span className={`font-bold ${submitStatus.type === 'success' ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                  {submitStatus.message}
                </span>
             )}
          </div>
        </form>

        <div className="mt-10 pt-6 border-t border-win-shadow w-full">
          <p className="font-bold mb-4">Other Communication Protocols:</p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:stevenliew929@gmail.com" className="text-blue-700 underline flex items-center gap-2 hover:bg-blue-100 p-2 border border-transparent hover:border-blue-300 text-base">Email</a>
            <a href="https://linkedin.com/in/liewsteven" target="_blank" className="text-blue-700 underline flex items-center gap-2 hover:bg-blue-100 p-2 border border-transparent hover:border-blue-300 text-base">LinkedIn</a>
            <a href="https://github.com/stevxnnn" target="_blank" className="text-blue-700 underline flex items-center gap-2 hover:bg-blue-100 p-2 border border-transparent hover:border-blue-300 text-base">GitHub</a>
            <a href="https://dune.com/zardy" target="_blank" className="text-blue-700 underline flex items-center gap-2 hover:bg-blue-100 p-2 border border-transparent hover:border-blue-300 text-base">Dune Profile</a>
          </div>
        </div>
      </div>
    </div>
  )
}

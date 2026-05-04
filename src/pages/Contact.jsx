import { useState } from 'react'
import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  const subjects = [
    'General Inquiry',
    'Bespoke Commission',
    'Order Inquiry',
    'Press & Media',
    'Wholesale',
    'Care & Repair',
  ]

  const socials = [
    { label: 'Instagram', handle: '@pathra.philippines', href: 'https://www.instagram.com/pathra.philippines' },
    { label: 'TikTok', handle: 'pathraphilippines', href: 'https://www.tiktok.com/@pathraphilippines' },
    { label: 'Facebook', handle: 'Pathra', href: 'https://www.facebook.com/Pathracollection' },
  ]

  return (
    <PageLayout>
      {/* Header */}
      <section className="pt-40 pb-16 px-6 max-w-7xl mx-auto border-b border-parchment">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-[10px] tracking-[0.5em] uppercase text-gold mb-6">Get in Touch</p>
          <h1
            className="font-serif font-light leading-none text-charcoal"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(3rem, 7vw, 6.5rem)',
            }}
          >
            We'd love
            <br />
            <em style={{ fontStyle: 'italic', color: '#8B9A8A' }}>to hear from you.</em>
          </h1>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-16">
              <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-8">The Atelier</p>
              <div className="space-y-6 text-mist text-sm font-light leading-relaxed">
                <div>
                  <p className="text-charcoal font-medium text-xs tracking-wider mb-1">Address</p>
                  <p>Pulilan, Bulacan<br />Philippines</p>
                </div>
    
                <div>
                  <p className="text-charcoal font-medium text-xs tracking-wider mb-1">Contact</p>
                  <a href="mailto:pathra.philippines@gmail.com" className="hover:text-charcoal transition-colors duration-300">
                    pathra.philippines@gmail.com
                  </a>
                  <br />
                  <a href="tel:+12125550182" className="hover:text-charcoal transition-colors duration-300">
                    0936 849 0516
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-8">Follow Us</p>
              <div className="space-y-4">
                {socials.map(({ label, handle, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <span className="w-8 h-px bg-gold/40 group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
                    <span className="text-sm text-mist group-hover:text-charcoal transition-colors duration-300">
                      {label}
                    </span>
                    <span className="text-[10px] tracking-[0.2em] text-gold/60">{handle}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Atelier image */}
            <div className="mt-16">
              <img
                src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=700&q=85&auto=format&fit=crop"
                alt="Pathra atelier"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center py-24 text-center">
                <div className="w-12 h-px bg-gold mb-10 mx-auto" />
                <h2
                  className="font-serif font-light text-4xl text-charcoal mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Thank you.
                </h2>
                <p className="text-mist text-sm font-light max-w-xs leading-relaxed">
                  Your message has been received. A member of our team will be in touch within 48 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: 'General Inquiry', message: '' }) }}
                  className="mt-10 text-[10px] tracking-[0.35em] uppercase text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-10">Send a Message</p>

                {/* Name */}
                <div className="group">
                  <label className="block text-[9px] tracking-[0.35em] uppercase text-mist mb-3">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-parchment pb-3 text-charcoal text-sm font-light placeholder-mist/50 outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[9px] tracking-[0.35em] uppercase text-mist mb-3">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-parchment pb-3 text-charcoal text-sm font-light placeholder-mist/50 outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[9px] tracking-[0.35em] uppercase text-mist mb-3">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-parchment pb-3 text-charcoal text-sm font-light outline-none focus:border-gold transition-colors duration-300 cursor-pointer appearance-none"
                  >
                    {subjects.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[9px] tracking-[0.35em] uppercase text-mist mb-3">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full bg-transparent border-b border-parchment pb-3 text-charcoal text-sm font-light placeholder-mist/50 outline-none focus:border-gold transition-colors duration-300 resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-14 py-4 bg-charcoal text-cream text-[10px] tracking-[0.4em] uppercase font-sans font-medium transition-all duration-500 hover:bg-gold"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}

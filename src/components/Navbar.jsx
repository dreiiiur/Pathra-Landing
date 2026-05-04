import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/bags', label: 'Collection' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  const isLight = isHome && !scrolled
  const textColor = isLight ? 'text-cream' : 'text-charcoal'
  const bgColor = scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : (isHome ? 'bg-transparent' : 'bg-white')

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${bgColor}`}
        style={{ height: scrolled ? '64px' : '80px' }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center gap-3">
            <img
              src={isLight ? '/images/logo2.png' : '/images/logo1.png'}
              alt="Pathra Logo"
              className="h-8 transition-all duration-500"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={scrollToTop}
                className={`relative text-[11px] tracking-[0.3em] uppercase font-sans font-medium transition-colors duration-500 group ${textColor}`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px transition-all duration-400 ${location.pathname === to ? 'w-full bg-gold' : 'w-0 bg-current group-hover:w-full'}`}
                />
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex flex-col gap-1.5 w-7 transition-colors duration-500 ${textColor}`}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="h-px w-full bg-current block transition-all duration-300"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="h-px w-full bg-current block"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="h-px w-full bg-current block transition-all duration-300"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#003314] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-12">
              {navLinks.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    to={to}
                    onClick={scrollToTop}
                    className={`text-4xl font-serif font-light text-cream tracking-wider transition-colors duration-300 hover:text-gold ${location.pathname === to ? 'text-gold' : ''}`}
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 text-[10px] tracking-[0.4em] text-mist uppercase"
            >
              Pathra Collection
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

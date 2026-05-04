import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/bags/Hero.jpg"
          alt="Hero bag"
          className="w-full h-full object-cover scale-105"
          style={{ animation: 'slowZoom 12s ease-out forwards' }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#003314]/30 via-transparent to-[#003314]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-8 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-white mb-6">New Collection · 2025</p>
          <h1
            className="text-cream font-serif font-light leading-none mb-8"
            style={{
              fontFamily: "po",
              fontSize: 'clamp(3.5rem, 10vw, 9rem)',
              letterSpacing: '-0.02em'
            }}
          >
            The Art<br />
            <em className="not-italic text-cream/80">of Carrying</em>
          </h1>

          <div className="flex items-center gap-8 flex-wrap">
            <Link
              to="/bags"
              className="inline-block px-10 py-3.5 border border-cream text-cream text-[10px] tracking-[0.35em] uppercase font-sans font-medium transition-all duration-500 hover:bg-cream hover:text-charcoal"
            >
              Explore Collection
            </Link>
            <Link
              to="/about"
              className="text-cream/70 text-[10px] tracking-[0.3em] uppercase font-sans hover:text-cream transition-colors duration-300 flex items-center gap-3"
            >
              Our Story
              <span className="w-8 h-px bg-current inline-block" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
      >
        <div className="w-px h-16 bg-cream/40 relative overflow-hidden">
          <div
            className="absolute top-0 w-full bg-cream"
            style={{ animation: 'scrollLine 1.8s ease-in-out infinite', height: '40%' }}
          />
        </div>
        <span className="text-[9px] tracking-[0.4em] text-cream/50 uppercase rotate-90 origin-center mt-2">Scroll</span>
      </motion.div>

      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1); }
        }
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  )
}

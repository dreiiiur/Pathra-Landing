import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import HeroSection from '../components/HeroSection'
import ProductGrid from '../components/ProductGrid'
import { featuredProducts } from '../data/products'

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  return (
    <PageLayout>
      {/* Hero */}
      <HeroSection />

      {/* Marquee strip */}
      <div className="bg-[#003314] py-4 overflow-hidden">
        <div className="flex gap-0 whitespace-nowrap" style={{ animation: 'marquee 25s linear infinite' }}>
          {Array(6).fill(null).map((_, i) => (
            <span key={i} className="text-[10px] tracking-[0.4em] uppercase text-mist px-12">
              Pathra Collection · Handcrafted Excellence · Timeless Design · Since 2018 ·
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* Editorial intro */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-[10px] tracking-[0.4em] uppercase text-mb-8">The Pathra Philosophy</p>
            <h2
              className="font-serif font-light text-5xl md:text-6xl leading-tight text-[#003314] mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Where form
              <br />
              <em style={{ fontStyle: 'italic' }}>meets function</em>
              <br />
              in silence.
            </h2>
            <div className="w-12 h-px bg-[#d5b896] mb-8" />
            <p className="text-mist font-light leading-relaxed text-base max-w-sm">
              Each Pathra piece is a study in restraint — where the leather's hand, the stitch's precision,
              and the hardware's weight tell the only story that matters.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=900&q=85&auto=format&fit=crop"
                alt="Pathra craftsmanship"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-parchment p-6 hidden md:block">
                <p className="font-serif text-3xl text-[#003314]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Since 2018
                </p>
                <p className="text-[9px] tracking-[0.35em] uppercase text-mist mt-1">New York Atelier</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#d5b896] mb-4">Featured Pieces</p>
              <h2
                className="font-serif font-light text-4xl md:text-5xl text-[#003314]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Selected Works
              </h2>
            </div>
            <Link
              to="/bags"
              className="hidden md:flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#003314] hover:text-[#d5b896] transition-colors duration-300"
            >
              View all
              <span className="w-8 h-px bg-current" />
            </Link>
          </div>
        </FadeIn>

        <ProductGrid products={featuredProducts} columns={3} />

        <div className="text-center mt-16 md:hidden">
          <Link
            to="/bags"
            className="inline-block px-10 py-3.5 border border-[#003314] text-[#003314] text-[10px] tracking-[0.35em] uppercase font-sans transition-all duration-500 hover:bg-[#003314] hover:text-cream"
          >
            View All Pieces
          </Link>
        </div>
      </section>

      {/* Full-width editorial banner */}
      <section className="relative h-screen max-h-[700px] overflow-hidden my-20">
        <img
          src="https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?w=1800&q=90&auto=format&fit=crop"
          alt="Editorial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003314]/70 to-transparent" />
        <div className="absolute inset-0 flex items-center px-12 md:px-24">
          <FadeIn className="max-w-xl">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#d5b896] mb-6">Autumn — Winter 2025</p>
            <h2
              className="font-serif font-light text-4xl md:text-6xl text-cream leading-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The Season
              <br />
              of Intention
            </h2>
            <Link
              to="/bags"
              className="inline-block px-10 py-3.5 border border-cream text-cream text-[10px] tracking-[0.35em] uppercase font-sans transition-all duration-500 hover:bg-cream hover:text-[#003314]"
            >
              Discover the Edit
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Values strip */}
      <section className="py-24 px-6 border-t border-b border-parchment">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {[
            { num: '01', title: 'Handcrafted', sub: 'Every piece is hand-stitched by master artisans with decades of experience.' },
            { num: '02', title: 'Sustainably Sourced', sub: 'Full-grain leathers selected from certified European tanneries.' },
            { num: '03', title: 'Lifetime Guarantee', sub: 'Each Pathra piece is built to last and backed by our lifetime promise.' },
          ].map(({ num, title, sub }, i) => (
            <FadeIn key={num} delay={i * 0.15}>
              <div>
                <p className="font-serif text-4xl text-[#d5b896]/40 mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{num}</p>
                <h3
                  className="font-serif text-2xl text-[#003314] mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {title}
                </h3>
                <p className="text-mist text-sm font-light leading-relaxed max-w-xs mx-auto">{sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}

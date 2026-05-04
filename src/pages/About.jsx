import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PageLayout from '../components/PageLayout'

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <p className="text-[10px] tracking-[0.5em] uppercase text-gold mb-8">Est. 2025 · Baliuag, Bulacan</p>
          <h1
            className="font-serif font-light leading-none text-charcoal mb-12"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(3rem, 8vw, 7rem)',
            }}
          >
            A house built
            <br />
            <em style={{ fontStyle: 'italic', color: '#8B9A8A' }}>on silence.</em>
          </h1>
          <div className="w-12 h-px bg-gold mx-auto" />
        </motion.div>
      </section>

      {/* Hero image */}
      <FadeIn>
        <div className="mx-6 md:mx-16 mb-32">
          <img
            src="/images/bags/Event.jpg"
            alt="Pathra Atelier"
            className="w-full h-[60vh] object-cover"
          />
          <p className="text-[9px] tracking-[0.35em] uppercase text-mist mt-3">Pathra Collection, Baliuag, Bulacan · 2025</p>
        </div>
      </FadeIn>

      {/* Story sections */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32">
          <FadeIn className="md:col-span-4 md:col-start-2">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-8">Origin</p>
          </FadeIn>
          <FadeIn delay={0.15} className="md:col-span-6">
            <h2
              className="font-serif font-light text-4xl md:text-5xl text-charcoal leading-tight mb-10"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Best for a
              <em style={{ fontStyle: 'italic' }}> professional, high-end feel that emphasizes the brand's origin.</em>
            </h2>
            <div className="space-y-6 text-mist text-sm font-light leading-relaxed">
              <p>
                  The Pathra Collection was established in 2025 in the heart of Pulilan, Bulacan. Our vision was born from a singular pursuit: to create leather goods that speak through the integrity of their material, not a luxury logo.              </p>
              <p>
                  What began as a dedicated local workshop has evolved into a collective of master artisans, each bringing decades of experience in leatherwork and hand-stitching. The founding principle remains simple: if the leather isn't right, nothing else matters.              </p>
            </div>
          </FadeIn>
        </div>

        {/* Image pair */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-32">
          <FadeIn>
            <img
              src="/images/bags/Almira/almira 3.png"
              alt="Pathra craft"
              className="w-full aspect-[4/5] object-cover"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <img
              src="/images/about.jpg"
              alt="Pathra materials"
              className="w-full aspect-[4/5] object-cover mt-0 md:mt-12"
            />
          </FadeIn>
        </div>

        {/* Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32">
          <FadeIn className="md:col-span-4 md:col-start-2">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-8">The Method</p>
          </FadeIn>
          <FadeIn delay={0.15} className="md:col-span-6">
            <h2
              className="font-serif font-light text-4xl md:text-5xl text-charcoal leading-tight mb-10"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Craft is not a technique. It is a devotion.
              <br />
              <em style={{ fontStyle: 'italic' }}>It is a devotion.</em>
            </h2>
            <div className="space-y-6 text-mist text-sm font-light leading-relaxed">
              <p>
                Each Pathra piece represents between 24 and 48 hours of meticulous handwork by our artisans in Pulilan, Bulacan.              </p>
              <p>
                We use premium full-grain and top-grain leathers, ethically sourced from partner tanneries in Tuscany and Barcelona.              </p>
              <p>
                The Pathra philosophy centers on the integrity of the material, which is why we do not use vegan leather. Our pieces are crafted using only premium full-grain and top-grain leathers sourced from certified tanneries in Tuscany and Barcelona. We believe that true, affordable luxury is found in the tactile richness and enduring quality of authentic hides that are built to last a lifetime.       </p>            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team / Values grid */}
      <section className="bg-[#f5f5f5] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-5">Our Values</p>
              <h2
                className="font-serif font-light text-4xl text-charcoal"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                What we believe
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Radical Honest',
                body: 'We tell you exactly what your bag is made of, where it was made, and who made it. No ambiguity.'
              },
              {
                title: 'Material Truth',
                body: 'The best leather needs no embellishment. We choose materials that age with dignity and improve with use.'
              },
              {
                title: 'Quiet Permanence',
                body: 'We design for decades, not seasons. A Pathra piece should feel as relevant in 20 years as it does today.'
              },
            ].map(({ title, body }, i) => (
              <FadeIn key={title} delay={i * 0.15}>
                <div className="text-center">
                  <div className="w-8 h-px bg-gold mx-auto mb-8" />
                  <h3
                    className="font-serif font-light text-2xl text-charcoal mb-5"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {title}
                  </h3>
                  <p className="text-mist text-sm font-light leading-relaxed">{body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

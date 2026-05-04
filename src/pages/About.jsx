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
              Born from the belief that
              <em style={{ fontStyle: 'italic' }}> beauty needs no explanation.</em>
            </h2>
            <div className="space-y-6 text-mist text-sm font-light leading-relaxed">
              <p>
                Pathra Collection was founded in 2018 by designer Mira Pathra, who left a decade in Parisian couture to pursue a singular vision: bags that speak through their material, not their logo.
              </p>
              <p>
                From a small workshop in lower Manhattan, Mira assembled a team of seven artisans — each with over twenty years of experience in leatherwork, hardware casting, and hand-stitching. The founding principle was simple: if the leather isn't right, nothing else matters.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Image pair */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-32">
          <FadeIn>
            <img
              src="/images/Almira/almira 3.png"
              alt="Pathra craft"
              className="w-full aspect-[4/5] object-cover"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <img
              src="/images/Almira/almira.jpg"
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
              Craft is not a technique.
              <br />
              <em style={{ fontStyle: 'italic' }}>It is a devotion.</em>
            </h2>
            <div className="space-y-6 text-mist text-sm font-light leading-relaxed">
              <p>
                Each Pathra bag requires between 24 and 48 hours of handwork. We use only full-grain and top-grain leathers sourced from three tanneries in Tuscany and Barcelona — partners we have worked with since our founding.
              </p>
              <p>
                Hardware is cast in solid brass and hand-finished to a matte or brushed surface. We do not use chrome plating. Every closure is tension-tested and every seam is examined under magnification before a piece leaves our workshop.
              </p>
              <p>
                This is not artisanal theater. It is simply the only way we know how to work.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Full quote */}
        <FadeIn>
          <div className="text-center py-24 border-t border-b border-parchment">
            <p
              className="font-serif font-light text-3xl md:text-5xl text-charcoal max-w-4xl mx-auto leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "We are not interested in trend. We are interested in the weight of leather in your hand — that specific gravity that tells you something was made with care."
            </p>
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mt-10">— Mira Pathra, Founder</p>
          </div>
        </FadeIn>
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
                title: 'Radical Honesty',
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

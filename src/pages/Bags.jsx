import { useState } from 'react'
import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import ProductGrid from '../components/ProductGrid'
import { products, categories } from '../data/products'

const sortOptions = ['Featured', 'Newest', 'Price: Low to High', 'Price: High to Low']

export default function Bags() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeSort, setActiveSort] = useState('Featured')
  const [filterOpen, setFilterOpen] = useState(false)

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <PageLayout>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-parchment">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] tracking-[0.45em] uppercase text-gold mb-6">The Collection</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h1
              className="font-serif font-light text-6xl md:text-8xl text-charcoal leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              All Bags
            </h1>
            <p className="text-mist text-sm font-light max-w-sm md:text-right leading-relaxed">
              A curated selection of Pathra's finest — from structured day pieces to luminous evening companions.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-cream/95 backdrop-blur-sm border-b border-parchment py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          {/* Category pills */}
          <div className="flex gap-3 overflow-x-auto pb-1 hide-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 text-[9px] tracking-[0.3em] uppercase px-5 py-2 border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-charcoal text-cream border-charcoal'
                    : 'border-parchment text-mist hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort + count */}
          <div className="flex items-center justify-between">
            <p className="text-[10px] tracking-widest text-mist uppercase">
              {filtered.length} Piece{filtered.length !== 1 ? 's' : ''}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[9px] tracking-[0.3em] uppercase text-mist">Sort:</span>
              <select
                value={activeSort}
                onChange={e => setActiveSort(e.target.value)}
                className="text-[9px] tracking-[0.2em] uppercase bg-transparent border-none text-charcoal cursor-pointer outline-none"
              >
                {sortOptions.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {filtered.length > 0 ? (
          <ProductGrid products={filtered} columns={3} />
        ) : (
          <div className="py-32 text-center">
            <p className="font-serif text-2xl text-mist" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              No pieces found in this category.
            </p>
          </div>
        )}
      </section>

      {/* Editorial footer banner */}
      <section className="mx-6 mb-20 relative overflow-hidden">
        <div className="bg-parchment px-12 py-20 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-5">Bespoke Service</p>
            <h2
              className="font-serif font-light text-4xl md:text-5xl text-charcoal leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Commission
              <br />
              <em style={{ fontStyle: 'italic' }}>your own piece.</em>
            </h2>
          </div>
          <div className="flex-1 text-mist text-sm leading-relaxed md:border-l md:border-gold/30 md:pl-12">
            <p>
              Work directly with our New York atelier to create a bespoke Pathra bag — your choice of leather, hardware, dimensions, and monogram.
            </p>
            <a
              href="/contact"
              className="inline-block mt-8 text-[10px] tracking-[0.35em] uppercase text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Begin the Conversation
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </PageLayout>
  )
}

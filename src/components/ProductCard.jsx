import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-parchment aspect-[3/4] mb-5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.image2 && (
          <img
            src={product.image2}
            alt={product.name + ' detail'}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
        {/* Tag */}
        {product.tag && (
          <div className="absolute top-4 left-4 bg-charcoal text-cream text-[9px] tracking-[0.3em] uppercase px-3 py-1.5">
            {product.tag}
          </div>
        )}
        {/* Quick view overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 bg-cream/90 backdrop-blur-sm py-3 text-center"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase text-charcoal">View Details</span>
        </motion.div>
      </div>

      {/* Info */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-mist mb-1.5">{product.category}</p>
          <h3
            className="font-serif font-light text-xl text-charcoal transition-colors duration-300 group-hover:text-[#003314]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {product.name}
          </h3>
        </div>
        <div className="text-right">
          <p className="font-serif text-lg text-charcoal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {product.price}
          </p>
        </div>
      </div>

      {/* Gold underline */}
      <div className="h-px mt-3 bg-[#d5b896]/30 relative overflow-hidden">
        <motion.div
          animate={{ x: hovered ? '0%' : '-100%' }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 bg-charcoal"
        />
      </div>
    </motion.div>
  )
}

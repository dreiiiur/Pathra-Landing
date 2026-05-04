import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiMessengerFill } from 'react-icons/ri'
import { FaTiktok } from 'react-icons/fa'
import PageLayout from '../components/PageLayout'
import { products } from '../data/products'

const stars = [1, 2, 3, 4, 5]

export default function ProductView() {
  const { id } = useParams()
  const product = products.find(item => item.id === String(id))
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '')
  const [selectedImage, setSelectedImage] = useState(
    product?.colorImages?.[product?.colors?.[0]] || product?.image
  )

  if (!product) {
    return (
      <PageLayout>
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.45em] uppercase text-gold mb-6">Product not found</p>
          <h1 className="font-serif font-light text-5xl text-charcoal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            We couldn&apos;t find that piece.
          </h1>
          <Link
            to="/bags"
            className="mt-10 inline-block rounded-full border border-charcoal px-8 py-3 text-[10px] tracking-[0.35em] uppercase text-charcoal transition-colors duration-300 hover:bg-charcoal hover:text-cream"
          >
            Back to collection
          </Link>
        </section>
      </PageLayout>
    )
  }

  const thumbnails = Array.from(
    new Set(
      [product.image, product.image2, ...(product.colorImages ? Object.values(product.colorImages) : [])].filter(Boolean)
    )
  )
  const rating = product.rating || 4.7
  const reviewText = product.reviews || '2.6k Reviews'

  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col gap-4 text-[10px] tracking-[0.35em] uppercase text-mist">
          <div className="flex flex-wrap items-center gap-2">
            <Link to="/" className="text-mist hover:text-charcoal transition-colors duration-300">
              Home
            </Link>
            <span>/</span>
            <Link to="/bags" className="text-mist hover:text-charcoal transition-colors duration-300">
              Collection
            </Link>
            <span>/</span>
            <span className="text-charcoal">{product.name}</span>
          </div>
        </div>

        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="overflow-hidden rounded-[1.5rem] bg-parchment">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover"
              />
            </div>

            <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-3 sm:gap-4">
              {thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(thumb)}
                  className={`overflow-hidden rounded-2xl sm:rounded-3xl border transition-all duration-300 ${selectedImage === thumb ? 'border-charcoal' : 'border-parchment'} focus:outline-none`}
                >
                  <img src={thumb} alt={`${product.name} thumbnail ${index + 1}`} className="h-20 sm:h-24 w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="space-y-4">
              <div className="flex flex-col gap-3">
                <p className="text-[10px] tracking-[0.45em] uppercase text-gold">{product.category}</p>
                <h1 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight" style={{ fontFamily: "poppins" }}>
                  {product.name}
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2 text-sm text-charcoal">
                  {stars.map(star => (
                    <span key={star} className={star <= Math.round(rating) ? 'text-gold' : 'text-parchment'}>
                      ★
                    </span>
                  ))}
                  <span className="font-medium">{rating}</span>
                </div>
                <span className="text-[10px] tracking-[0.35em] uppercase text-mist">{reviewText}</span>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <p className="text-[10px] tracking-[0.35em] uppercase text-gold">Price</p>
                  <p className="text-[12px] sm:text-[14px] text-mist line-through">{product.oldPrice || ''}</p>
                </div>
                <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal" style={{ fontFamily: "poppins" }}>
                  {product.price}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-mist max-w-xl">
                {product.description}
              </p>

              <p className="text-sm leading-relaxed text-mist max-w-xl">
                <span className="font-medium text-charcoal">Material:</span> {product.material}
              </p>

                <p className="text-sm leading-relaxed text-mist max-w-xl">
                <span className="font-medium text-charcoal">Dimensions:</span> {product.dimensions}
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-[10px] tracking-[0.35em] uppercase text-gold">Colors available</p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => {
                        setSelectedColor(color)
                        setSelectedImage(product.colorImages?.[color] || product.image)
                      }}
                      className={`rounded-full border px-3 sm:px-4 py-2 text-[9px] sm:text-[10px] uppercase tracking-[0.35em] transition-all duration-300 ${selectedColor === color ? 'border-charcoal bg-charcoal text-cream' : 'border-parchment text-charcoal bg-[#faf5ef]'}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="https://www.facebook.com/Pathracollection"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0695FF] px-6 sm:px-8 py-4 text-[10px] tracking-[0.35em] uppercase text-cream transition-colors duration-300 hover:bg-gray-400 min-h-[50px] sm:min-h-[58px]"
                >
                  <RiMessengerFill className="text-lg sm:text-xl" />
                  Check out on Messenger
                </a>
                <a
                  href="https://www.tiktok.com/@pathraphilippines"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border bg-black px-6 sm:px-8 py-4 text-[10px] tracking-[0.35em] uppercase text-cream transition-colors duration-300 hover:border-0 hover:bg-gray-400 hover:text-cream min-h-[50px] sm:min-h-[58px]"
                >
                  <FaTiktok className="text-lg sm:text-xl" />
                  Check out on TikTok
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}

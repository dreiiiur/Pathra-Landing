import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'
import { RiMessengerFill } from 'react-icons/ri'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <footer className="bg-[#003314] text-cream py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Brand */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <img src="/images/logo2.png" alt="Pathra logo" className="h-10 w-auto" />
              <div>
                <p
                  className="font-serif font-light tracking-[0.25em] text-2xl text-cream"
                  style={{ fontFamily: "poppins", fontWeight: "bold" }}
                >
                  PATHRA
                </p>
                <p className="text-[9px] tracking-[0.5em] uppercase text-gold mt-0.5">Collection</p>
              </div>
            </div>
            <p className="text-mist text-sm font-light leading-relaxed max-w-xs">
              Crafted for those who understand that true luxury is never announced — it is felt.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-8">Navigate</p>
            <div className="flex flex-col gap-4">
              {[['/', 'Home'], ['/bags', 'Collection'], ['/about', 'Our Story'], ['/contact', 'Contact']].map(([to, label]) => (
                <Link
                  key={to}
                  to={to}
                  onClick={scrollToTop}
                  className="text-sm text-mist hover:text-cream transition-colors duration-300 w-fit"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-8">Connect</p>
            <div className="flex flex-col gap-3 text-sm text-mist">
              <a href="mailto:hello@pathracollection.com" className="hover:text-cream transition-colors duration-300">
                hello@pathracollection.com
              </a>
              <p>+63 1234 5678</p>
              <p className="mt-2">Pulilan, Bulacan, Philippines</p>
            </div>

            {/* Social icons */}
            <div className="flex gap-4 mt-8 text-xl text-mist">
              <a href="https://www.instagram.com/pathracollection" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors duration-300 hover:text-white">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/pathracollection" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors duration-300 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="https://www.tiktok.com/@pathracollection" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="transition-colors duration-300 hover:text-white">
                <FaTiktok />
              </a>
              <a href="https://m.me/pathracollection" target="_blank" rel="noopener noreferrer" aria-label="Messenger" className="transition-colors duration-300 hover:text-white">
                <RiMessengerFill />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] tracking-widest text-mist uppercase">
            © {new Date().getFullYear()} Pathra Collection. All rights reserved.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms', 'Accessibility'].map(item => (
              <a key={item} href="#" className="text-[10px] tracking-wider text-mist hover:text-cream transition-colors uppercase">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

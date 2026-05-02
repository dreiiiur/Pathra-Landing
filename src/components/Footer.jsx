import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#003314] text-cream py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <p
                className="font-serif font-light tracking-[0.25em] text-2xl text-cream"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                PATHRA
              </p>
              <p className="text-[9px] tracking-[0.5em] uppercase text-gold mt-0.5">Collection</p>
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
              <p>+1 (212) 555 0182</p>
              <p className="mt-2">New York, New York</p>
            </div>

            {/* Social icons */}
            <div className="flex gap-4 mt-8">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="text-mist hover:text-gold transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.6"/>
                  <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6"/>
                  <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="text-mist hover:text-gold transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* TikTok */}
              <a href="#" aria-label="TikTok" className="text-mist hover:text-gold transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.7a8.18 8.18 0 004.78 1.52V6.79a4.85 4.85 0 01-1.01-.1z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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

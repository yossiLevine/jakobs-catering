'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { NAV_ITEMS, SITE } from '@/lib/constants'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)

      const sections = NAV_ITEMS.map((item) => item.href.slice(1))
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className="fixed top-1 right-0 left-0 z-30"
        animate={{
          backgroundColor: isScrolled ? 'rgba(255,255,255,0.97)' : 'rgba(0,0,0,0)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
          boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo (right in RTL) */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleNavClick('#hero')}
                className="font-heebo font-black text-xl md:text-2xl tracking-wide"
                style={{ color: isScrolled ? '#1A2340' : '#C9A84C' }}
              >
                {SITE.name}
              </button>
            </div>

            {/* Desktop nav (left in RTL) */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-3 py-2 font-heebo font-semibold text-sm transition-colors duration-200 group ${
                    isScrolled
                      ? activeSection === item.href.slice(1)
                        ? 'text-gold'
                        : 'text-navy hover:text-gold'
                      : activeSection === item.href.slice(1)
                      ? 'text-gold'
                      : 'text-white/90 hover:text-gold'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 right-0 left-0 h-0.5 bg-gold transition-transform duration-200 ${
                      activeSection === item.href.slice(1)
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </button>
              ))}
              {/* Phone CTA */}
              <a
                href={`tel:${SITE.phone1}`}
                className={`mr-4 px-4 py-2 rounded-sm font-heebo font-bold text-sm transition-all duration-200 border-2 ${
                  isScrolled
                    ? 'border-gold text-gold hover:bg-gold hover:text-navy'
                    : 'border-white/70 text-white hover:border-gold hover:text-gold'
                }`}
              >
                {SITE.phoneFormatted1}
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`md:hidden p-2 ${isScrolled ? 'text-navy' : 'text-white'}`}
              aria-label="פתח תפריט"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}

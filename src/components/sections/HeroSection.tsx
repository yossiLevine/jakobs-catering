'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SITE } from '@/lib/constants'

const staggerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
  }),
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" ref={containerRef} className="relative h-[100svh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background */}
      <motion.div className="absolute inset-0 z-0 overflow-hidden" style={{ y: bgY }}>
        {/* Gradient background (video disabled for now) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1520] via-[#1A2340] to-[#1c1510]" />

        {/* Decorative pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #C9A84C 0px,
              #C9A84C 1px,
              transparent 1px,
              transparent 60px
            )`,
          }}
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 container-custom w-full">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.p
            custom={0}
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            className="font-assistant font-semibold text-sm md:text-base tracking-[0.25em] text-gold uppercase mb-4"
          >
            {SITE.taglineShort}
          </motion.p>

          {/* H1 */}
          <motion.h1
            custom={1}
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            className="font-heebo font-black text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6"
          >
            {SITE.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            custom={2}
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            className="font-heebo font-light text-xl md:text-2xl text-cream-dark/90 mb-4"
          >
            {SITE.tagline}
          </motion.p>

          {/* Event types */}
          <motion.p
            custom={3}
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            className="font-assistant text-base md:text-lg text-white/60 mb-10"
          >
            מתמחים בברית מילה &bull; בר ובת מצווה &bull; אירוסין &bull; שבתות
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={4}
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo('menus')}
              className="px-8 py-4 bg-gold text-navy font-heebo font-bold text-lg rounded-sm shadow-lg hover:bg-gold-dark hover:-translate-y-0.5 transition-all duration-200"
            >
              לתפריטים שלנו
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 border-2 border-white/60 text-white font-heebo font-bold text-lg rounded-sm hover:border-gold hover:text-gold transition-all duration-200"
            >
              צרו קשר
            </button>
          </motion.div>
        </div>
      </div>

      {/* Gold bottom decoration */}
      <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent z-20 opacity-60" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="font-assistant text-xs text-white/40 tracking-widest">גלול למטה</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-bounce-slow" />
      </motion.div>
    </section>
  )
}

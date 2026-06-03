'use client'

import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import SectionHeading from '@/components/ui/SectionHeading'
import FadeInSection from '@/components/animations/FadeInSection'
import { SITE } from '@/lib/constants'

// Placeholder gallery items — replace src with real images
const GALLERY_ITEMS = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  alt: `תמונה מאירוע קייטרינג ${i + 1}`,
  // Placeholder colored divs will be shown until real images are added
  src: '',
  color: ['#1A2340', '#2C3E6B', '#C9A84C', '#1c2d4a', '#243058', '#a0622a', '#1A2340', '#2C3E6B', '#C9A84C'][i],
}))

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  return (
    <section id="gallery" className="section-padding bg-cream-dark">
      <div className="container-custom">
        <FadeInSection>
          <SectionHeading
            label="הגלריה שלנו"
            title="רגעים שאנחנו גאים בהם"
            subtitle="כל תמונה מספרת סיפור של אירוע מוצלח – בואו להתרשם"
          />
        </FadeInSection>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {GALLERY_ITEMS.map((item, i) => (
            <FadeInSection key={item.id} delay={i * 0.06}>
              <div
                className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer"
                style={{ aspectRatio: i % 3 === 0 ? '4/3' : i % 3 === 1 ? '3/4' : '1/1' }}
                onClick={() => setLightboxIndex(i)}
              >
                {/* Placeholder background */}
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundColor: item.color }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* CTA to Google Photos */}
        <FadeInSection delay={0.2}>
          <div className="text-center mt-12">
            <a
              href={SITE.googlePhotosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-gold border-2 border-navy font-heebo font-bold text-lg rounded-sm hover:bg-navy-light transition-all duration-200"
            >
              לגלריה המלאה
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </FadeInSection>
      </div>

      {/* Lightbox — will show images when real src is provided */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={GALLERY_ITEMS.map((item) => ({ src: item.src || '/placeholder.jpg', alt: item.alt }))}
      />
    </section>
  )
}

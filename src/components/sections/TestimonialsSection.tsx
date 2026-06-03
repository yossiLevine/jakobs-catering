'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SectionHeading from '@/components/ui/SectionHeading'
import FadeInSection from '@/components/animations/FadeInSection'
import { TESTIMONIALS } from '@/lib/testimonials'
import { SITE } from '@/lib/constants'

function StarIcon() {
  return (
    <svg className="w-5 h-5 fill-gold" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-cream overflow-hidden">
      <div className="container-custom">
        <FadeInSection>
          <SectionHeading
            label="מה אומרים הלקוחות"
            title="חוות דעת אמיתיות"
            subtitle="אנחנו גאים בכל ביקורת – הנה מה שהלקוחות שלנו אומרים"
          />
        </FadeInSection>

        {/* Google rating badge */}
        <FadeInSection delay={0.1}>
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="flex">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <span className="font-heebo font-bold text-navy text-lg">5.0</span>
            <a
              href={SITE.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-assistant text-sm text-gray-500 hover:text-gold transition-colors underline"
            >
              ביקורות בגוגל
            </a>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="pb-14"
            dir="rtl"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col border border-taupe/40">
                  {/* Quote mark */}
                  <div className="font-heebo font-black text-6xl text-gold/20 leading-none mb-2 select-none">&ldquo;</div>

                  {/* Review text */}
                  <p className="font-assistant text-gray-600 leading-relaxed flex-1 mb-6">{t.text}</p>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => <StarIcon key={i} />)}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-taupe/50">
                    <span className="font-heebo font-bold text-navy">{t.name}</span>
                    <span className="text-xs font-assistant bg-gold/10 text-gold-dark px-2 py-1 rounded-full border border-gold/20">
                      {t.event}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeInSection>
      </div>
    </section>
  )
}

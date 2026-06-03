'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import FadeInSection from '@/components/animations/FadeInSection'
import { SERVICES } from '@/lib/services'

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-navy">
      <div className="container-custom">
        <FadeInSection>
          <SectionHeading
            label="מה אנחנו עושים"
            title="השירותים שלנו"
            subtitle="מתמחים במגוון אירועים יהודיים עם אותה רמה של מקצועיות, כשרות ואהבה לאוכל"
            light
          />
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <FadeInSection key={service.id} delay={i * 0.1}>
              <div className="group bg-navy-card border border-white/10 rounded-xl p-7 hover:-translate-y-2 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 cursor-default h-full flex flex-col">
                {/* Icon */}
                <div className="text-4xl mb-4">{service.emoji}</div>

                {/* Title */}
                <h3 className="font-heebo font-bold text-xl text-white mb-3">{service.title}</h3>

                {/* Description */}
                <p className="font-assistant text-white/60 leading-relaxed flex-1 mb-5">
                  {service.description}
                </p>

                {/* Highlight chip */}
                <div>
                  <span className="inline-block px-3 py-1 bg-gold/15 border border-gold/30 text-gold text-xs font-assistant font-semibold rounded-full">
                    {service.highlight}
                  </span>
                </div>

                {/* Bottom gold line on hover */}
                <div className="mt-5 h-px bg-gradient-to-r from-gold/0 via-gold/0 to-gold/0 group-hover:via-gold/60 transition-all duration-500" />
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* CTA */}
        <FadeInSection delay={0.3}>
          <div className="text-center mt-14">
            <p className="font-assistant text-white/50 mb-5">יש לכם אירוע שלא מופיע כאן?</p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold text-gold font-heebo font-bold text-lg rounded-sm hover:bg-gold hover:text-navy transition-all duration-200"
            >
              דברו איתנו
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

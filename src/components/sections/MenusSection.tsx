import SectionHeading from '@/components/ui/SectionHeading'
import FadeInSection from '@/components/animations/FadeInSection'
import { MENU_PDFS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function MenusSection() {
  return (
    <section id="menus" className="section-padding bg-navy">
      <div className="container-custom">
        <FadeInSection>
          <SectionHeading
            label="התפריטים שלנו"
            title="בחרו את התפריט המושלם"
            subtitle="כל תפריט בנוי בקפידה עם חומרי גלם איכותיים, כשרות מהדרין וטעם שלא נשכח"
            light
          />
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MENU_PDFS.map((menu, i) => (
            <FadeInSection key={menu.id} delay={i * 0.15}>
              <div
                className={cn(
                  'relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 h-full flex flex-col',
                  menu.featured
                    ? 'border-gold bg-gradient-to-b from-navy-card to-navy-light shadow-2xl shadow-gold/20 scale-105'
                    : 'border-white/10 bg-navy-card hover:border-gold/40'
                )}
              >
                {/* Featured badge */}
                {menu.featured && (
                  <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0" />
                )}

                <div className="p-8 flex flex-col flex-1">
                  {/* Badge */}
                  <span
                    className={cn(
                      'inline-block self-start px-3 py-1 text-xs font-assistant font-bold rounded-full mb-5',
                      menu.featured
                        ? 'bg-gold text-navy'
                        : 'bg-white/10 text-white/70 border border-white/20'
                    )}
                  >
                    {menu.badge}
                  </span>

                  {/* Title */}
                  <h3 className="font-heebo font-bold text-2xl text-white mb-3">{menu.title}</h3>

                  {/* Description */}
                  <p className="font-assistant text-white/60 mb-6 leading-relaxed">{menu.description}</p>

                  {/* Items list */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {menu.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 font-assistant text-white/70 text-sm">
                        <span className="w-5 h-5 rounded-full border border-gold/50 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={menu.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'flex items-center justify-center gap-2 w-full py-3.5 rounded-lg font-heebo font-bold text-base transition-all duration-200',
                      menu.featured
                        ? 'bg-gold text-navy hover:bg-gold-dark'
                        : 'border-2 border-gold/50 text-gold hover:bg-gold hover:text-navy'
                    )}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    הורד תפריט PDF
                  </a>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Note */}
        <FadeInSection delay={0.3}>
          <p className="text-center font-assistant text-white/40 text-sm mt-10">
            כל התפריטים ניתנים להתאמה אישית לפי הצרכים שלכם &bull; צרו קשר לפרטים
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}

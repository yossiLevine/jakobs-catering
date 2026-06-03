import SectionHeading from '@/components/ui/SectionHeading'
import FadeInSection from '@/components/animations/FadeInSection'

const VALUES = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'כשרות ללא פשרות',
    text: 'כשרות מהדרין בכל אירוע, עם ציוד נפרד ומוגש בקפידה מרגע ההכנה ועד ההגשה',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'שירות אישי',
    text: 'כל אירוע מקבל ליווי אישי מרגע ההזמנה ועד הפינוי האחרון – אנחנו כאן בשבילכם',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'טעם שלא נשכח',
    text: 'תפריט עשיר, הגשה אסתטית ואיכות שהאורחים שלכם יזכרו עוד הרבה אחרי האירוע',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text (right in RTL) */}
          <FadeInSection direction="right">
            <p className="font-assistant font-semibold text-sm tracking-[0.2em] uppercase text-gold mb-3">
              הסיפור שלנו
            </p>
            <h2 className="font-heebo font-bold text-4xl md:text-5xl text-navy mb-6 leading-tight">
              אנחנו מאמינים שאירוח טוב
              <br />
              <span className="text-gold">מתחיל בפרטים הקטנים</span>
            </h2>
            <p className="font-assistant text-gray-600 text-lg leading-relaxed mb-5">
              בג׳ייקובס קייטרינג, כל אירוע מקבל את תשומת הלב המלאה שלנו. אנחנו מביאים איתנו
              ניסיון, תשוקה לאוכל טוב ומחויבות אמיתית לחוויה שלא תישכח לאורחים שלכם.
            </p>
            <p className="font-assistant text-gray-600 text-lg leading-relaxed mb-8">
              אנחנו מתמחים באירועי מחזור החיים – ברית מילה, בר ובת מצווה, אירוסין ושבתות חתן –
              עם כשרות מהדרין ורמת שירות שלא מתפשרת.
            </p>
            {/* Stats */}
            <div className="flex gap-10">
              {[
                { number: '15+', label: 'שנות ניסיון' },
                { number: '500+', label: 'אירועים מוצלחים' },
                { number: '100%', label: 'כשרות מהדרין' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-heebo font-black text-3xl text-gold">{stat.number}</div>
                  <div className="font-assistant text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Visual (left in RTL) */}
          <FadeInSection direction="left" delay={0.2}>
            <div className="relative">
              {/* Main card */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-navy to-navy-light shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/20">
                    <svg className="w-24 h-24 mx-auto mb-4 text-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="font-assistant text-gold/40 text-sm">הוסף תמונה כאן</p>
                  </div>
                </div>
                {/* Gold border accent */}
                <div className="absolute inset-0 border-2 border-gold/20 rounded-2xl" />
              </div>
              {/* Decorative floating card */}
              <div className="absolute -bottom-6 -right-6 bg-gold rounded-xl p-5 shadow-xl">
                <p className="font-heebo font-black text-navy text-2xl">כשר</p>
                <p className="font-assistant text-navy/80 text-xs">מהדרין</p>
              </div>
              {/* Background decoration */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold/30 rounded-xl" />
            </div>
          </FadeInSection>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map((value, i) => (
            <FadeInSection key={value.title} delay={i * 0.15}>
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-taupe/50 group">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="font-heebo font-bold text-xl text-navy mb-3">{value.title}</h3>
                <p className="font-assistant text-gray-500 leading-relaxed">{value.text}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

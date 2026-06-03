'use client'

import { useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import FadeInSection from '@/components/animations/FadeInSection'
import { SITE, EVENT_TYPES } from '@/lib/constants'

interface FormData {
  name: string
  email: string
  phone: string
  eventType: string
  eventDate: string
  message: string
}

const INITIAL: FormData = { name: '', email: '', phone: '', eventType: '', eventDate: '', message: '' }

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validate = () => {
    const e: Partial<FormData> = {}
    if (!form.name.trim()) e.name = 'שם מלא הוא שדה חובה'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'כתובת מייל לא תקינה'
    if (!form.message.trim()) e.message = 'אנא כתבו הודעה'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm(INITIAL)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const field = (
    id: keyof FormData,
    label: string,
    type: string = 'text',
    required = false
  ) => (
    <div>
      <label htmlFor={id} className="block font-assistant text-sm font-semibold text-navy/80 mb-1.5">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={form[id]}
        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
        className={`w-full px-4 py-3 rounded-lg border font-assistant text-navy bg-cream placeholder:text-gray-400 transition-colors duration-200 ${
          errors[id] ? 'border-red-400' : 'border-taupe hover:border-gold/50'
        }`}
        placeholder={`הזינו ${label.toLowerCase()}`}
      />
      {errors[id] && <p className="text-red-500 text-xs mt-1 font-assistant">{errors[id]}</p>}
    </div>
  )

  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container-custom">
        <FadeInSection>
          <SectionHeading
            label="צרו קשר"
            title="נשמח לשמוע מכם"
            subtitle="מלאו את הטופס ונחזור אליכם בהקדם האפשרי"
          />
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact details (right in RTL) */}
          <FadeInSection direction="right">
            <div className="space-y-6">
              <h3 className="font-heebo font-bold text-2xl text-navy mb-6">פרטי התקשרות</h3>

              {[
                { href: `tel:${SITE.phone1}`, icon: 'phone', label: SITE.phoneFormatted1 },
                { href: `tel:${SITE.phone2}`, icon: 'phone', label: SITE.phoneFormatted2 },
                { href: `mailto:${SITE.email}`, icon: 'mail', label: SITE.email },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-taupe/50 hover:border-gold/40 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors duration-200">
                    {item.icon === 'phone' ? (
                      <svg className="w-5 h-5 text-gold group-hover:text-navy transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-gold group-hover:text-navy transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>
                  <span className="font-assistant text-navy font-medium">{item.label}</span>
                </a>
              ))}

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#25D366]/10 rounded-xl border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#25D366] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <span className="font-heebo font-bold text-[#128C7E]">שלח הודעה בוואטסאפ</span>
                  <p className="font-assistant text-xs text-gray-500">מענה מהיר בשעות פעילות</p>
                </div>
              </a>

              {/* Note */}
              <p className="font-assistant text-gray-400 text-sm leading-relaxed">
                זמני פעילות: ראשון–חמישי 8:00–20:00 | שישי 8:00–14:00
              </p>
            </div>
          </FadeInSection>

          {/* Form (left in RTL) */}
          <FadeInSection direction="left" delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-taupe/40 space-y-5">
              {field('name', 'שם מלא', 'text', true)}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {field('email', 'כתובת מייל', 'email', true)}
                {field('phone', 'טלפון', 'tel')}
              </div>

              {/* Event type */}
              <div>
                <label htmlFor="eventType" className="block font-assistant text-sm font-semibold text-navy/80 mb-1.5">
                  סוג האירוע
                </label>
                <select
                  id="eventType"
                  value={form.eventType}
                  onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-taupe hover:border-gold/50 font-assistant text-navy bg-cream transition-colors duration-200"
                >
                  <option value="">בחרו סוג אירוע</option>
                  {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {field('eventDate', 'תאריך אירוע משוער', 'date')}

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-assistant text-sm font-semibold text-navy/80 mb-1.5">
                  הודעה / פרטים נוספים <span className="text-gold">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border font-assistant text-navy bg-cream placeholder:text-gray-400 resize-none transition-colors duration-200 ${
                    errors.message ? 'border-red-400' : 'border-taupe hover:border-gold/50'
                  }`}
                  placeholder="ספרו לנו על האירוע שלכם – גודל, תאריך, כל פרט שיעזור לנו"
                />
                {errors.message && <p className="text-red-500 text-xs mt-1 font-assistant">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-gold text-navy font-heebo font-bold text-lg rounded-lg hover:bg-gold-dark hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none shadow-md hover:shadow-lg"
              >
                {status === 'sending' ? 'שולח...' : 'שלח הודעה'}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                  <p className="font-assistant text-green-700 font-semibold">ההודעה נשלחה בהצלחה!</p>
                  <p className="font-assistant text-green-600 text-sm mt-1">נחזור אליכם בהקדם האפשרי.</p>
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
                  <p className="font-assistant text-red-700 font-semibold">שגיאה בשליחה</p>
                  <p className="font-assistant text-red-600 text-sm mt-1">
                    אנא נסו שוב או צרו קשר ישירות: {SITE.phoneFormatted1}
                  </p>
                </div>
              )}
            </form>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

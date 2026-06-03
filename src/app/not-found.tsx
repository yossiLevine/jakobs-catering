import Link from 'next/link'
import { SITE } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center" dir="rtl">
      <div className="text-center px-6">
        <p className="font-assistant font-semibold text-sm tracking-widest text-gold uppercase mb-4">שגיאה 404</p>
        <h1 className="font-heebo font-black text-6xl text-navy mb-4">הדף לא נמצא</h1>
        <p className="font-assistant text-gray-500 text-xl mb-10">
          הדף שחיפשתם אינו קיים. בואו נחזיר אתכם הביתה.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-heebo font-bold text-lg rounded-sm hover:bg-gold-dark transition-colors duration-200"
        >
          חזרה לעמוד הבית
        </Link>
        <div className="mt-16">
          <p className="font-assistant text-gray-400 text-sm">
            או צרו קשר ישירות:{' '}
            <a href={`tel:${SITE.phone1}`} className="text-gold hover:underline">
              {SITE.phoneFormatted1}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

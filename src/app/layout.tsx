import type { Metadata } from 'next'
import { Heebo, Assistant } from 'next/font/google'
import './globals.css'
import { SITE } from '@/lib/constants'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import ScrollProgress from '@/components/ui/ScrollProgress'

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-heebo',
  display: 'swap',
})

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '600'],
  variable: '--font-assistant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | קייטרינג כשר בוטיק לאירועים`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'קייטרינג כשר',
    'ברית מילה',
    'בר מצווה',
    'בת מצווה',
    'שבת חתן',
    'אירוסין',
    'קייטרינג ישראל',
    "ג'ייקובס קייטרינג",
    'jakobs catering',
  ],
  openGraph: {
    title: `${SITE.name} | קייטרינג כשר בוטיק`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: 'he_IL',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | קייטרינג כשר בוטיק`,
    description: SITE.description,
  },
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: SITE.url,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FoodService',
  name: SITE.nameEn,
  alternateName: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: [`+972${SITE.phone1.slice(1)}`, `+972${SITE.phone2.slice(1)}`],
  email: SITE.email,
  servesCuisine: 'Kosher',
  priceRange: '₪₪₪',
  areaServed: 'Israel',
  currenciesAccepted: 'ILS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${assistant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-assistant antialiased">
        <ScrollProgress />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}

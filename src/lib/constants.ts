export const SITE = {
  name: "ג'ייקובס קייטרינג",
  nameEn: 'Jakobs Catering',
  tagline: 'העבודה עלינו. היוקרה וההכנסת האורחים – שלכם.',
  taglineShort: 'קייטרינג כשר | בוטיק',
  description:
    "קייטרינג כשר בוטיק לברית מילה, בר ובת מצווה, אירוסין ושבתות חתן. שירות אישי, תפריט עשיר, טעם שלא נשכח.",
  phone1: '0534461239',
  phone2: '0548492527',
  phoneFormatted1: '053-446-1239',
  phoneFormatted2: '054-849-2527',
  email: 'ydj0548492527@gmail.com',
  whatsapp: '972534461239',
  whatsappMessage: 'שלום, אני מעוניין לקבל פרטים על הקייטרינג',
  googlePhotosUrl: 'https://photos.google.com',
  googleMapsUrl: 'https://maps.google.com',
  url: 'https://www.jakobscatering.co.il',
}

export const NAV_ITEMS = [
  { label: 'בית', href: '#hero' },
  { label: 'אודות', href: '#about' },
  { label: 'שירותים', href: '#services' },
  { label: 'גלריה', href: '#gallery' },
  { label: 'תפריטים', href: '#menus' },
  { label: 'צרו קשר', href: '#contact' },
]

export const MENU_PDFS = [
  {
    id: 'reception',
    title: 'תפריט קבלת פנים',
    description: 'ניבולים, מאפים, סלטים ומנות קטנות להתחלה מושלמת',
    file: '/menus/menu-reception.pdf',
    badge: 'קלאסי',
    items: ['ניבולים מגוונים', 'מאפים טריים', 'סלטים וממרחים', 'מנות דגים'],
  },
  {
    id: 'regular',
    title: 'תפריט רגיל',
    description: 'ארוחה מלאה לכל אירוע משפחתי – בשרי, עשיר ומפנק',
    file: '/menus/menu-regular.pdf',
    badge: 'הפופולרי שלנו',
    featured: true,
    items: ['מנות ראשונות', 'מנות עיקריות', 'תוספות עשירות', 'קינוחים'],
  },
  {
    id: 'shabbat',
    title: 'תפריט שבת',
    description: 'חבילה שלמה מליל שישי ועד סעודה שלישית',
    file: '/menus/menu-shabbat.pdf',
    badge: 'חבילה מלאה',
    items: ['ארוחת ליל שבת', 'ארוחת שחרית', 'סעודה שלישית', 'כולל ציוד'],
  },
]

export const EVENT_TYPES = [
  'ברית מילה',
  'בר / בת מצווה',
  'אירוסין',
  'שבת חתן',
  'סעודת ברכה',
  'אחר',
]

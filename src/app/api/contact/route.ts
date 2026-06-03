import { NextRequest, NextResponse } from 'next/server'
import { SITE } from '@/lib/constants'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, eventType, eventDate, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'שדות חסרים' }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      // In dev without key, just log and succeed
      console.log('Contact form submission (no RESEND_API_KEY):', { name, email, phone, eventType, eventDate, message })
      return NextResponse.json({ success: true })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(resendApiKey)

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: SITE.email,
      replyTo: email,
      subject: `פנייה חדשה מהאתר – ${name}${eventType ? ` | ${eventType}` : ''}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A2340;">פנייה חדשה מאתר ${SITE.name}</h2>
          <hr style="border-color: #C9A84C;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; color: #666;">שם:</td><td style="padding: 8px;">${name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #666;">מייל:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px; font-weight: bold; color: #666;">טלפון:</td><td style="padding: 8px;"><a href="tel:${phone}">${phone}</a></td></tr>` : ''}
            ${eventType ? `<tr><td style="padding: 8px; font-weight: bold; color: #666;">סוג אירוע:</td><td style="padding: 8px;">${eventType}</td></tr>` : ''}
            ${eventDate ? `<tr><td style="padding: 8px; font-weight: bold; color: #666;">תאריך:</td><td style="padding: 8px;">${eventDate}</td></tr>` : ''}
          </table>
          <hr style="border-color: #eee;" />
          <h3 style="color: #1A2340;">הודעה:</h3>
          <p style="background: #f9f7f2; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'שגיאה פנימית' }, { status: 500 })
  }
}

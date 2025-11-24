import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Send email using Gmail SMTP
    // Note: You'll need to set up environment variables
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
This email was sent from your portfolio contact form.
    `.trim()

    // Using a simple fetch to send email via a service
    // For production, you can use:
    // 1. Resend API (recommended - free tier available)
    // 2. SendGrid
    // 3. Nodemailer with Gmail SMTP
    
    // For now, we'll use a simple approach with EmailJS or create a service
    // This is a placeholder - you'll need to configure your email service
    
    // Option 1: Use Resend (recommended)
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const TO_EMAIL = process.env.CONTACT_EMAIL || 'tendillashieryle@gmail.com'
    
    if (RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Portfolio Contact Form <onboarding@resend.dev>',
          to: TO_EMAIL,
          subject: `New Contact Form Message from ${name}`,
          text: emailContent,
          reply_to: email,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      return NextResponse.json(
        { message: 'Email sent successfully!' },
        { status: 200 }
      )
    }

    // Fallback: Log to console (for development)
    console.log('Email would be sent to:', TO_EMAIL)
    console.log('Content:', emailContent)

    return NextResponse.json(
      { message: 'Email service not configured. Check server logs.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}


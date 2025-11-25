'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema, NewsletterFormSchema } from '@/lib/schemas'
import ContactFormEmail from '@/emails/contact-form-email'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { name, email, message } = result.data
    const { data, error } = await resend.emails.send({
      from: 'contact@impruthvi.me',
      to: ['contact@impruthvi.me'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message })
    })

    if (!data || error) {
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    console.log(`Error: ${error}`)

    return { error }
  }
}

export async function subscribe(data: NewsletterFormInputs) {
  const result = NewsletterFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { email } = result.data
    const { data, error } = await resend.contacts.create({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string
    })

    if (!data || error) {
      throw new Error('Failed to subscribe')
    }

    // Send welcome email to new subscriber
    await resend.emails.send({
      from: 'contact@impruthvi.me',
      to: [email],
      subject: 'Welcome to IMPRUTHVI Newsletter! 🎉',
      html: `
        <h1>Thanks for subscribing!</h1>
        <p>Hey there! 👋</p>
        <p>Thanks for subscribing to my newsletter. I'll share updates about new blog posts, projects, and tech insights.</p>
        <p>Don't worry - I won't spam you. Only quality content, I promise!</p>
        <p>Cheers,<br/>Pruthvisinh Rajput (IMPRUTHVI)</p>
      `
    })

    return { success: true }
  } catch (error) {
    return { error }
  }
}

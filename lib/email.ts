
import { Resend } from 'resend'
import { getResendApiKey, getResendFromEmail } from './config'

// Create a function to get Resend instance with dynamic API key
async function getResendInstance(): Promise<Resend | null> {
  const apiKey = await getResendApiKey()
  if (!apiKey) {
    console.error('Failed to get Resend API key from configuration')
    return null
  }
  return new Resend(apiKey)
}

export async function sendWelcomeEmail(email: string) {
  try {
    const resend = await getResendInstance()
    if (!resend) {
      return { success: false, error: 'Failed to initialize email service' }
    }

    const fromEmail = await getResendFromEmail() || 'KasaNow <sms@updates.kasanow.app>'

    // 1. Send welcome email to the user
    const userEmailPromise = resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Welcome to KasaNow Waitlist! 🚀',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; line-height: 1.6; padding: 20px;">
          <div style="background-color: #0F172A; padding: 32px; border-radius: 16px 16px 0 0; text-align: center;">
            <h1 style="color: #ffffff; margin: 0 0 8px 0; font-size: 24px; font-weight: 700;">Welcome to KasaNow</h1>
            <p style="color: #60A5FA; margin: 0; font-size: 16px; font-weight: 600;">You’re officially on the waitlist.</p>
          </div>

          <div style="background-color: #ffffff; padding: 32px; border-radius: 0 0 16px 16px; border: 1px solid #e2e8f0; border-top: none;">
            <p style="font-size: 16px; color: #334155; margin-top: 0;">Hi there,</p>
            <p style="font-size: 16px; color: #334155; margin-bottom: 20px;">
              Thank you for joining the KasaNow waitlist. We’re preparing for launch and look forward to giving you access to a simple and reliable SMS communication platform.
            </p>
            <p style="font-size: 16px; color: #334155; margin-bottom: 20px;">
              We’ll notify you as soon as KasaNow goes live.
            </p>
            <p style="font-size: 16px; color: #334155; margin-bottom: 24px;">
              Thank you for your interest and for being part of the KasaNow journey.
            </p>

            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #f1f5f9;">
              <p style="color: #3A57FC; font-weight: 700; margin: 0; font-size: 16px;">The KasaNow Team</p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 24px; color: #94a3b8; font-size: 12px;">
            <p style="margin: 0;">© 2026 KasaNow Ltd. All rights reserved.</p>
          </div>
        </div>
      `,
    })

    // 2. Send notification email to info@kasanow.app with replyTo set to user
    const teamNotificationPromise = resend.emails.send({
      from: fromEmail,
      to: 'info@kasanow.app',
      replyTo: email,
      subject: `🚀 New Waitlist Signup: ${email}`,
      html: `
        <div style="font-family: sans-serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; line-height: 1.6; padding: 20px;">
          <div style="background-color: #0F172A; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px;">New Waitlist Signup 🚀</h1>
          </div>
          <div style="background-color: #ffffff; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
            <p style="font-size: 16px; margin-bottom: 12px;">A new user has reserved a spot on the KasaNow waitlist:</p>
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; font-size: 16px; font-weight: bold; color: #3A57FC; text-align: center; margin-bottom: 20px;">
              <a href="mailto:${email}" style="color: #3A57FC; text-decoration: none;">${email}</a>
            </div>
            <div style="text-align: center; margin-top: 20px;">
              <a href="mailto:${email}?subject=Welcome%20to%20KasaNow" style="display: inline-block; background-color: #3A57FC; color: #ffffff; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;">
                Reply to User
              </a>
            </div>
          </div>
        </div>
      `
    })

    const [userResult, teamResult] = await Promise.all([userEmailPromise, teamNotificationPromise])

    if (userResult.error) {
      console.error('[email] Resend user welcome email error:', userResult.error)
    }
    if (teamResult.error) {
      console.error('[email] Resend team notification error:', teamResult.error)
    }

    return { success: true, userEmailId: userResult.data?.id, teamEmailId: teamResult.data?.id }
  } catch (error) {
    console.error('Email sending exception:', error)
    return { success: false, error }
  }
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export async function sendContactNotificationEmail(data: ContactFormData) {
  try {
    const resend = await getResendInstance()
    if (!resend) {
      return { success: false, error: 'Failed to initialize email service' }
    }

    const fromEmail = await getResendFromEmail() || 'KasaNow <sms@updates.kasanow.app>'
    const recipientEmail = 'info@kasanow.app'

    const { data: resendData, error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: `${data.name} <${data.email}>`,
      subject: `New Contact Inquiry from ${data.name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; line-height: 1.6; padding: 20px;">
          <div style="background-color: #0F172A; padding: 28px; border-radius: 16px 16px 0 0; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">New Contact Inquiry</h1>
            <p style="color: #60A5FA; margin: 6px 0 0 0; font-size: 14px;">KasaNow Website Contact Form</p>
          </div>

          <div style="background-color: #ffffff; padding: 32px; border-radius: 0 0 16px 16px; border: 1px solid #e2e8f0; border-top: none;">
            <div style="margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid #f1f5f9;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 6px 0; color: #64748b; font-size: 14px; width: 110px; font-weight: 600;">Full Name:</td>
                  <td style="padding: 6px 0; color: #0f172a; font-size: 15px; font-weight: 700;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #64748b; font-size: 14px; font-weight: 600;">Work Email:</td>
                  <td style="padding: 6px 0; color: #3A57FC; font-size: 15px; font-weight: 600;">
                    <a href="mailto:${data.email}" style="color: #3A57FC; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #64748b; font-size: 14px; font-weight: 600;">Phone:</td>
                  <td style="padding: 6px 0; color: #0f172a; font-size: 15px;">
                    <a href="tel:${data.phone}" style="color: #0f172a; text-decoration: none;">${data.phone || 'N/A'}</a>
                  </td>
                </tr>
              </table>
            </div>

            <div style="margin-bottom: 24px;">
              <h3 style="color: #0f172a; font-size: 15px; margin-bottom: 10px;">Message:</h3>
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; color: #334155; font-size: 15px; white-space: pre-wrap;">${data.message}</div>
            </div>

            <div style="text-align: center; margin-top: 32px; padding-top: 24px; border-top: 1px solid #f1f5f9;">
              <a href="mailto:${data.email}?subject=Re:%20Inquiry%20to%20KasaNow" style="display: inline-block; background-color: #3A57FC; color: #ffffff; padding: 12px 28px; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 14px;">
                Reply to ${data.name}
              </a>
              <p style="color: #94a3b8; font-size: 12px; margin-top: 14px;">
                Or simply hit "Reply" in your email client to respond directly to ${data.email}.
              </p>
            </div>
          </div>
        </div>
      `
    })

    if (error) {
      console.error('[email] Contact notification Resend API error:', error)
      return { success: false, error }
    }

    console.log('[email] Contact notification sent successfully:', resendData?.id)
    return { success: true, data: resendData }
  } catch (error) {
    console.error('Contact notification email exception:', error)
    return { success: false, error }
  }
}

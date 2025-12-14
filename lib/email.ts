
import { Resend } from 'resend'

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWelcomeEmail(email: string) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'KasaNow <hello@kasanow.app>',
            to: email,
            subject: 'Welcome to KasaNow Waitlist! 🚀',
            html: `
        <div style="font-family: sans-serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; line-height: 1.6;">
            <div style="text-align: center; padding: 24px 0;">
              <h1 style="color: #3A57FC; margin-bottom: 8px;">Welcome to KasaNow!</h1>
              <p style="font-size: 18px; color: #666;">You're on the list. 🚀</p>
            </div>

            <div style="background-color: #ffffff; padding: 32px; border-radius: 12px; border: 1px solid #e5e7eb;">
              <p style="font-size: 16px;">Hi there,</p>
              <p style="font-size: 16px;">Thanks for joining the waitlist! We are getting ready to launch very soon, and we can't wait to show you what we've been building.</p>
              
              <h2 style="color: #333; margin-top: 32px;">Why KasaNow?</h2>
              <div style="margin-bottom: 24px;">
                <p><strong>🔑  No API Keys needed</strong></p>
                <p style="color: #555; margin-top: -12px; margin-bottom: 16px;">Start sending SMS campaigns instantly without complex technical setup.</p>
                
                <p><strong>⚡  Instant Setup</strong></p>
                <p style="color: #555; margin-top: -12px; margin-bottom: 16px;">Create an account and launch your first campaign in minutes.</p>
                
                <p><strong>🌍  Global Reach</strong></p>
                <p style="color: #555; margin-top: -12px; margin-bottom: 16px;">Connect with customers anywhere in the world efficiently.</p>
              </div>

              <h2 style="color: #333; margin-top: 32px;">What to Expect Next</h2>
              <ul style="color: #555; padding-left: 20px;">
                <li>We’ll notify you the moment we go live.</li>
                <li>As an early member, you’ll get exclusive access to new features.</li>
                <li>Special onboarding support to help you get started.</li>
              </ul>

              <div style="margin-top: 40px; border-top: 1px solid #e5e7eb; padding-top: 24px; text-align: center;">
                <p style="color: #888; font-size: 14px;">We are thrilled to have you with us on this journey.</p>
                <p style="color: #3A57FC; font-weight: bold;">- The KasaNow Team</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 24px; color: #999; font-size: 12px;">
              <p>© 2025 KasaNow Ltd. All rights reserved.</p>
            </div>
          </div>
      `,
        })

        if (error) {
            console.error('Email sending error:', error)
            return { success: false, error }
        }

        return { success: true, data }
    } catch (error) {
        console.error('Email sending exception:', error)
        return { success: false, error }
    }
}

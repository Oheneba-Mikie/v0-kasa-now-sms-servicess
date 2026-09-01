'use server'

import { sendContactNotificationEmail } from '@/lib/email'
import { supabase } from '@/lib/supabase'

export interface SubmitContactInput {
  name: string
  email: string
  phone: string
  message: string
}

export async function submitContactForm(input: SubmitContactInput) {
  try {
    const { name, email, phone, message } = input

    // Basic validation
    if (!name || !name.trim()) {
      return { success: false, message: 'Please enter your full name.' }
    }

    if (!email || !email.includes('@')) {
      return { success: false, message: 'Please enter a valid email address.' }
    }

    if (!message || !message.trim()) {
      return { success: false, message: 'Please enter your message.' }
    }

    // 1. Save to Supabase contact_messages table for audit/records
    try {
      const { error: dbError } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: name.trim(),
            email: email.trim(),
            phone: phone ? phone.trim() : null,
            message: message.trim(),
            status: 'unread'
          }
        ])

      if (dbError) {
        console.warn('[contact] Warning saving to database:', dbError.message)
      }
    } catch (dbErr) {
      console.warn('[contact] DB Exception:', dbErr)
    }

    // 2. Send email notification to info@kasanow.app with replyTo set to user
    const emailResult = await sendContactNotificationEmail({
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : '',
      message: message.trim()
    })

    if (!emailResult.success) {
      console.error('[contact] Error sending notification email:', emailResult.error)
      // Even if email fails, if record was saved or attempting to submit, report friendly status
      return { 
        success: false, 
        message: 'Failed to send your message via email. Please try again or email us directly at info@kasanow.app.' 
      }
    }

    return { 
      success: true, 
      message: 'Thank you! Your message has been sent to info@kasanow.app.' 
    }
  } catch (error) {
    console.error('[contact] Unexpected error in submitContactForm:', error)
    return { 
      success: false, 
      message: 'An unexpected error occurred. Please try again.' 
    }
  }
}

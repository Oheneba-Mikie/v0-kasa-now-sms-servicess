'use server'

import { supabase } from '@/lib/supabase'
import { Resend } from 'resend'

// Initialize Resend with key from env
const resend = new Resend(process.env.RESEND_API_KEY)

export async function joinWaitlist(email: string) {
    try {
        // 1. Validate input (basic check, could use zod)
        if (!email || !email.includes('@')) {
            return { success: false, message: 'Invalid email address' }
        }

        // 2. Insert into Supabase
        const { error: dbError } = await supabase
            .from('waitlist')
            .insert([{ email, status: 'pending' }])

        if (dbError) {
            // Handle duplicate email specifically if possible
            if (dbError.code === '23505') { // Postgres unique violation code
                return { success: true, message: 'You are already on the waitlist!' }
            }
            console.error('Database error:', dbError)
            return { success: false, message: 'Failed to join waitlist. Please try again.' }
        }

        // 3. Send Email via Resend
        // Note: We wrap this in try/catch to not fail the whole request if email fails, 
        // but ideally we want both to succeed.
        try {
            const { error: emailError } = await resend.emails.send({
                from: 'KasaNow <onboarding@resend.dev>', // Use default testing domain or user's domain
                to: email,
                subject: 'Welcome to KasaNow Waitlist! 🚀',
                html: `
          <div style="font-family: sans-serif; color: #333;">
            <h1 style="color: #3A57FC;">Welcome to KasaNow!</h1>
            <p>You've successfully joined our waitlist.</p>
            <p>We're building the future of SMS communication, and we're thrilled to have you with us.</p>
            <br/>
            <p>Stay tuned for updates!</p>
            <p>- The KasaNow Team</p>
          </div>
        `,
            })

            if (emailError) {
                console.error('Resend error:', emailError)
                // We still return success because they are in the DB
            }
        } catch (e) {
            console.error('Email sending failed:', e)
        }

        return { success: true, message: 'Successfully joined the waitlist!' }

    } catch (err) {
        console.error('Unexpected error:', err)
        return { success: false, message: 'An unexpected error occurred.' }
    }
}

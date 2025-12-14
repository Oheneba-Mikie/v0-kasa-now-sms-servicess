'use server'

import { supabase } from '@/lib/supabase'
import { Resend } from 'resend'
import { sendWelcomeEmail } from '@/lib/email'

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
            await sendWelcomeEmail(email)
        } catch (e) {
            console.error('Email sending failed:', e)
        }

        return { success: true, message: 'Successfully joined the waitlist!' }

    } catch (err) {
        console.error('Unexpected error:', err)
        return { success: false, message: 'An unexpected error occurred.' }
    }
}

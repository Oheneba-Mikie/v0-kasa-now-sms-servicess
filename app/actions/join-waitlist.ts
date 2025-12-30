'use client'

import { supabase } from '@/lib/supabase'

export async function joinWaitlist(email: string) {
    try {
        // 1. Validate input (basic check, could use zod)
        if (!email || !email.includes('@')) {
            return { success: false, message: 'Invalid email address' }
        }

        // 2. Call Edge Function
        const { data, error } = await supabase.functions.invoke('join-waitlist', {
            body: { email }
        })

        if (error) {
            console.error('Edge function error:', error)
            return { success: false, message: 'Failed to join waitlist. Please try again.' }
        }

        return data || { success: true, message: 'Successfully joined the waitlist!' }

    } catch (err) {
        console.error('Unexpected error:', err)
        return { success: false, message: 'An unexpected error occurred.' }
    }
}


import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { sendWelcomeEmail } from '@/lib/email'

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')
    const next = searchParams.get('next') ?? '/waitlist'

    if (code) {
        const supabase = await createClient()
        const { error } = await supabase.auth.exchangeCodeForSession(code)

        if (!error) {
            // User is signed in. Let's sync to Waitlist table.
            const { data: { user } } = await supabase.auth.getUser()

            if (user && user.email) {
                // Check if exists
                const { data: existing } = await supabase
                    .from('waitlist')
                    .select('id')
                    .eq('email', user.email)
                    .single()

                if (!existing) {
                    // Insert into waitlist
                    const { error: insertError } = await supabase
                        .from('waitlist')
                        .insert([{ email: user.email, status: 'verified' }]) // Status verified since it's OAuth

                    if (!insertError) {
                        // Send Welcome Email
                        await sendWelcomeEmail(user.email)
                    }
                }
            }

            const forwardedHost = request.headers.get('x-forwarded-host') // original origin before load balancer
            const isLocal = origin.includes('localhost')
            if (isLocal) {
                // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
                return NextResponse.redirect(`${origin}${next}`)
            } else if (forwardedHost) {
                return NextResponse.redirect(`https://${forwardedHost}${next}`)
            } else {
                return NextResponse.redirect(`${origin}${next}`)
            }
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}

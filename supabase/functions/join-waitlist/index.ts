import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface WaitlistRequest {
  email: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Get Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const { email }: WaitlistRequest = await req.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ success: false, message: 'Invalid email address' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Insert into waitlist
    const { error: dbError } = await supabaseClient
      .from('waitlist')
      .insert([{ email, status: 'pending' }])

    if (dbError) {
      // Handle duplicate email
      if (dbError.code === '23505') {
        return new Response(
          JSON.stringify({ success: true, message: 'You are already on the waitlist!' }),
          { 
            status: 200, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }
      console.error('Database error:', dbError)
      return new Response(
        JSON.stringify({ success: false, message: 'Failed to join waitlist. Please try again.' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Get Resend API key from app_config
    const { data: configData, error: configError } = await supabaseClient
      .from('app_config')
      .select('key_value')
      .eq('key_name', 'RESEND_API_KEY')
      .eq('environment', 'production')
      .single()

    if (configError || !configData?.key_value) {
      console.error('Failed to get Resend API key:', configError)
      // Still return success for waitlist signup, but log email failure
      return new Response(
        JSON.stringify({ success: true, message: 'Successfully joined the waitlist!' }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Send welcome email
    try {
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${configData.key_value}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
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
                  <li>We'll notify you the moment we go live.</li>
                  <li>As an early member, you'll get exclusive access to new features.</li>
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
          `
        })
      })

      if (!emailResponse.ok) {
        console.error('Failed to send email:', await emailResponse.text())
      }
    } catch (emailError) {
      console.error('Email sending error:', emailError)
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Successfully joined the waitlist!' }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({ success: false, message: 'An unexpected error occurred.' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
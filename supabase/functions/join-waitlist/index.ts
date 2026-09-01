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
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || 'https://uwnfgigdzbxgsdhckhha.supabase.co'
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || Deno.env.get('SUPABASE_ANON_KEY') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3bmZnaWdkemJ4Z3NkaGNraGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4OTc1MDMsImV4cCI6MjA3OTQ3MzUwM30.2VNhJ-5u_U76xFVn1hAt_7vlWrOi2TlSBU_soI8ygfU'

    const supabaseClient = createClient(supabaseUrl, supabaseKey)

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
    let isAlreadyRegistered = false
    const { error: dbError } = await supabaseClient
      .from('waitlist')
      .insert([{ email, status: 'pending' }])

    if (dbError) {
      // Handle duplicate email
      if (dbError.code === '23505') {
        isAlreadyRegistered = true
      } else {
        console.error('Database error:', dbError)
        return new Response(
          JSON.stringify({ success: false, message: `Failed to join waitlist: ${dbError.message}` }),
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }
    }

    // Determine Resend API Key (Check app_config first, then fall back to Deno.env)
    let resendApiKey = ''
    const { data: configData } = await supabaseClient
      .from('app_config')
      .select('key_value')
      .eq('key_name', 'RESEND_API_KEY')
      .eq('environment', 'production')
      .maybeSingle()
    
    if (configData?.key_value && configData.key_value.startsWith('re_')) {
      resendApiKey = configData.key_value
    } else {
      const envKey = Deno.env.get('RESEND_API_KEY')
      if (envKey && envKey.startsWith('re_')) {
        resendApiKey = envKey
      } else if (configData?.key_value) {
        resendApiKey = configData.key_value
      } else if (envKey) {
        resendApiKey = envKey
      }
    }

    // Determine Resend From Email
    let resendFromEmail = ''
    const { data: fromConfigData } = await supabaseClient
      .from('app_config')
      .select('key_value')
      .eq('key_name', 'RESEND_FROM_EMAIL')
      .eq('environment', 'production')
      .maybeSingle()
    
    if (fromConfigData?.key_value && fromConfigData.key_value.includes('@')) {
      resendFromEmail = fromConfigData.key_value
    } else {
      const envFrom = Deno.env.get('RESEND_FROM_EMAIL')
      if (envFrom && envFrom.includes('@')) {
        resendFromEmail = envFrom
      } else {
        resendFromEmail = 'KasaNow <sms@updates.kasanow.app>'
      }
    }

    if (resendFromEmail && !resendFromEmail.includes('<')) {
      resendFromEmail = `KasaNow <${resendFromEmail}>`
    }

    if (!resendApiKey) {
      console.error('Resend API key not configured in environment or app_config table')
      return new Response(
        JSON.stringify({ success: true, message: 'Successfully joined the waitlist!' }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Send welcome email to user AND notification email to info@kasanow.app
    let emailSent = false
    try {
      const userWelcomePromise = fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: resendFromEmail,
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

      const teamNotificationPromise = fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: resendFromEmail,
          to: 'info@kasanow.app',
          reply_to: email,
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
      })

      const [userRes, teamRes] = await Promise.all([userWelcomePromise, teamNotificationPromise])

      if (!userRes.ok) console.error('Failed user email:', await userRes.text())
      if (!teamRes.ok) console.error('Failed team notification:', await teamRes.text())
      if (userRes.ok) emailSent = true
    } catch (emailError) {
      console.error('Email sending error:', emailError)
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        isNew: !isAlreadyRegistered,
        message: isAlreadyRegistered 
          ? 'You are already on the waitlist! We have re-sent your confirmation email.' 
          : 'Successfully joined the waitlist!'
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({ success: false, message: `An unexpected error occurred: ${String(error)}` }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
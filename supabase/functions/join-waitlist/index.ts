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
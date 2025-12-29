
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uwnfgigdzbxgsdhckhha.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3bmZnaWdkemJ4Z3NkaGNraGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4OTc1MDMsImV4cCI6MjA3OTQ3MzUwM30.2VNhJ-5u_U76xFVn1hAt_7vlWrOi2TlSBU_soI8ygfU'

const supabase = createClient(supabaseUrl, supabaseKey)

async function test(email: string, label: string) {
    console.log(`--- Testing ${label}: ${email} ---`)
    const { data, error } = await supabase.functions.invoke('join-waitlist', {
        body: { email }
    })

    if (error) {
        console.error('Error:', error)
    } else {
        console.log('Success:', data)
    }
}

async function runTests() {
    const newEmail = `universal-test-${Date.now()}@example.com`

    // 1. New user
    await test(newEmail, 'New User')

    // 2. Existing user (same email)
    await test(newEmail, 'Existing User')
}

runTests()

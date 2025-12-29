
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uwnfgigdzbxgsdhckhha.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3bmZnaWdkemJ4Z3NkaGNraGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4OTc1MDMsImV4cCI6MjA3OTQ3MzUwM30.2VNhJ-5u_U76xFVn1hAt_7vlWrOi2TlSBU_soI8ygfU'

const supabase = createClient(supabaseUrl, supabaseKey)

async function test() {
    console.log('Testing App Config access with Anon Key...')
    const { data, error } = await supabase
        .from('app_config')
        .select('*')
        .eq('key_name', 'RESEND_API_KEY')
        .eq('environment', 'production')

    if (error) {
        console.error('Query Error:', error)
    } else {
        console.log('Data found:', data)
        console.log('Rows count:', data?.length)
    }
}

test()

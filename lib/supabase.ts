
import { createClient } from '@supabase/supabase-js'
import { getSupabaseUrl, getSupabaseAnonKey } from './config'

// Fallback values for client-side initialization
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uwnfgigdzbxgsdhckhha.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3bmZnaWdkemJ4Z3NkaGNraGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4OTc1MDMsImV4cCI6MjA3OTQ3MzUwM30.2VNhJ-5u_U76xFVn1hAt_7vlWrOi2TlSBU_soI8ygfU'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Function to create a dynamic Supabase client with config from database
export async function createDynamicSupabaseClient() {
  try {
    const [url, key] = await Promise.all([
      getSupabaseUrl(),
      getSupabaseAnonKey()
    ])

    if (url && key) {
      return createClient(url, key)
    }
  } catch (error) {
    console.error('Failed to create dynamic Supabase client:', error)
  }
  
  // Fallback to default client
  return supabase
}

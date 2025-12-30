import { createClient } from '@supabase/supabase-js'

// These are the only two env vars we'll keep locally to bootstrap the connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uwnfgigdzbxgsdhckhha.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3bmZnaWdkemJ4Z3NkaGNraGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4OTc1MDMsImV4cCI6MjA3OTQ3MzUwM30.2VNhJ-5u_U76xFVn1hAt_7vlWrOi2TlSBU_soI8ygfU'

const supabase = createClient(supabaseUrl, supabaseKey)

// Cache for configuration values to avoid repeated database calls
const configCache = new Map<string, { value: string; timestamp: number }>()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export async function getConfig(keyName: string): Promise<string | null> {
  // Check cache first
  const cached = configCache.get(keyName)
  if (cached && (Date.now() - cached.timestamp) < CACHE_DURATION) {
    return cached.value
  }

  try {
    const { data, error } = await supabase
      .from('app_config')
      .select('key_value')
      .eq('key_name', keyName)
      .eq('environment', 'production')
      .single()

    if (error || !data) {
      console.warn(`[config] Failed to fetch config for ${keyName} (Env: production):`, error?.message || 'No data found')
      return null
    }

    console.log(`[config] Successfully fetched config for: ${keyName}`)

    // Cache the result
    configCache.set(keyName, {
      value: data.key_value,
      timestamp: Date.now()
    })

    return data.key_value
  } catch (error) {
    console.error(`Error fetching config for ${keyName}:`, error)
    return null
  }
}

export async function getResendApiKey(): Promise<string | null> {
  return await getConfig('RESEND_API_KEY')
}

export async function getResendFromEmail(): Promise<string | null> {
  return await getConfig('RESEND_FROM_EMAIL')
}

export async function getSupabaseUrl(): Promise<string | null> {
  return await getConfig('NEXT_PUBLIC_SUPABASE_URL')
}

export async function getSupabaseAnonKey(): Promise<string | null> {
  return await getConfig('NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

// Utility to get multiple config values at once
export async function getMultipleConfigs(keys: string[]): Promise<Record<string, string | null>> {
  const results = await Promise.all(keys.map(key => getConfig(key)))

  const config: Record<string, string | null> = {}
  keys.forEach((key, index) => {
    config[key] = results[index]
  })

  return config
}

// Clear the cache (useful for testing or forcing refresh)
export function clearConfigCache(): void {
  configCache.clear()
}
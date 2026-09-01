import { sendWelcomeEmail } from '../lib/email'

async function resendUser() {
  console.log('Resending welcome email to dyluqury@denipl.com...')
  const result = await sendWelcomeEmail('dyluqury@denipl.com')
  console.log('Result:', result)
}

resendUser()

import { submitContactForm } from '../app/actions/submit-contact'

async function test() {
  console.log('Testing contact form submission...')
  const result = await submitContactForm({
    name: 'Test Customer',
    email: 'customer@example.com',
    phone: '+233201234567',
    message: 'Hello KasaNow team, I would like to inquire about SMS pricing for enterprise.'
  })

  console.log('Contact form test result:', result)
}

test()

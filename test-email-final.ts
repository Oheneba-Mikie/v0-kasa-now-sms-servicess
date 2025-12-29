
import { joinWaitlist } from './app/actions/join-waitlist'

async function test() {
    console.log('--- STARTING EMAIL TEST ---')
    const testEmail = `test-${Date.now()}@example.com`
    console.log(`Testing with email: ${testEmail}`)

    try {
        const result = await joinWaitlist(testEmail)
        console.log('Result:', JSON.stringify(result, null, 2))
    } catch (err) {
        console.error('Test failed with error:', err)
    }
    console.log('--- TEST FINISHED ---')
}

test()

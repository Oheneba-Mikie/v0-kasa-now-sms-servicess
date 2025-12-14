
import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

const envPath = path.resolve(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
const envVars = envContent.split('\n').reduce((acc, line) => {
    const [key, value] = line.split('=');
    if (key && value) acc[key.trim()] = value.trim();
    return acc;
}, {} as Record<string, string>);

const resend = new Resend(envVars['RESEND_API_KEY']);

async function testVerifiedEmail() {
    console.log('Sending from verified domain: hello@kasanow.app');

    try {
        const { data, error } = await resend.emails.send({
            from: 'KasaNow <hello@kasanow.app>',
            to: 'juniorronaldolizy56@gmail.com',
            subject: 'KasaNow Verification Test 🚀',
            html: `
        <h1>It Works! 🎉</h1>
        <p>This email confirms that your domain <strong>kasanow.app</strong> is verified and sending correctly.</p>
        <p>You can now receive new signups from anyone.</p>
      `
        });

        if (error) {
            console.error('❌ Error:', error);
        } else {
            console.log('✅ Success! ID:', data?.id);
        }
    } catch (e) {
        console.error('❌ Exception:', e);
    }
}

testVerifiedEmail();

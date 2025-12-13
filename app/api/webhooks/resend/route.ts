import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
// import { Webhook } from 'svix'; // Resend uses Svix for webhooks usually, but we'll do simple raw body first or assume no sig check for MVP unless user provided secret.

export async function POST(req: Request) {
    try {
        const payload = await req.json();

        // Verify webhook signature here if RESEND_WEBHOOK_SECRET is set
        // const secret = process.env.RESEND_WEBHOOK_SECRET;
        // ... verification logic ...

        // Payload structure depends on Resend event type
        // Example: { type: 'email.sent', data: { email_id: '...', ... } }

        const eventType = payload.type;
        const emailId = payload.data?.email_id;

        if (!eventType) {
            return NextResponse.json({ error: 'Missing event type' }, { status: 400 });
        }

        const { error } = await supabase
            .from('email_events')
            .insert([
                {
                    event_type: eventType,
                    email_id: emailId,
                    payload: payload,
                },
            ]);

        if (error) {
            console.error('Supabase write error:', error);
            return NextResponse.json({ error: 'Database error' }, { status: 500 });
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        console.error('Webhook handler error:', err);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

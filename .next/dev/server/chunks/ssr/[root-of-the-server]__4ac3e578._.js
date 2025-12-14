module.exports = [
"[project]/lib/supabase.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/esm/wrapper.mjs [app-rsc] (ecmascript)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://uwnfgigdzbxgsdhckhha.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3bmZnaWdkemJ4Z3NkaGNraGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4OTc1MDMsImV4cCI6MjA3OTQ3MzUwM30.2VNhJ-5u_U76xFVn1hAt_7vlWrOi2TlSBU_soI8ygfU");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])(supabaseUrl, supabaseKey);
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/lib/email.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendWelcomeEmail",
    ()=>sendWelcomeEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-rsc] (ecmascript)");
;
// Initialize Resend
const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resend"](process.env.RESEND_API_KEY);
async function sendWelcomeEmail(email) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'KasaNow <hello@kasanow.app>',
            to: email,
            subject: 'Welcome to KasaNow Waitlist! 🚀',
            html: `
        <div style="font-family: sans-serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; line-height: 1.6;">
            <div style="text-align: center; padding: 24px 0;">
              <h1 style="color: #3A57FC; margin-bottom: 8px;">Welcome to KasaNow!</h1>
              <p style="font-size: 18px; color: #666;">You're on the list. 🚀</p>
            </div>

            <div style="background-color: #ffffff; padding: 32px; border-radius: 12px; border: 1px solid #e5e7eb;">
              <p style="font-size: 16px;">Hi there,</p>
              <p style="font-size: 16px;">Thanks for joining the waitlist! We are getting ready to launch very soon, and we can't wait to show you what we've been building.</p>
              
              <h2 style="color: #333; margin-top: 32px;">Why KasaNow?</h2>
              <div style="margin-bottom: 24px;">
                <p><strong>🔑  No API Keys needed</strong></p>
                <p style="color: #555; margin-top: -12px; margin-bottom: 16px;">Start sending SMS campaigns instantly without complex technical setup.</p>
                
                <p><strong>⚡  Instant Setup</strong></p>
                <p style="color: #555; margin-top: -12px; margin-bottom: 16px;">Create an account and launch your first campaign in minutes.</p>
                
                <p><strong>🌍  Global Reach</strong></p>
                <p style="color: #555; margin-top: -12px; margin-bottom: 16px;">Connect with customers anywhere in the world efficiently.</p>
              </div>

              <h2 style="color: #333; margin-top: 32px;">What to Expect Next</h2>
              <ul style="color: #555; padding-left: 20px;">
                <li>We’ll notify you the moment we go live.</li>
                <li>As an early member, you’ll get exclusive access to new features.</li>
                <li>Special onboarding support to help you get started.</li>
              </ul>

              <div style="margin-top: 40px; border-top: 1px solid #e5e7eb; padding-top: 24px; text-align: center;">
                <p style="color: #888; font-size: 14px;">We are thrilled to have you with us on this journey.</p>
                <p style="color: #3A57FC; font-weight: bold;">- The KasaNow Team</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 24px; color: #999; font-size: 12px;">
              <p>© 2025 KasaNow Ltd. All rights reserved.</p>
            </div>
          </div>
      `
        });
        if (error) {
            console.error('Email sending error:', error);
            return {
                success: false,
                error
            };
        }
        return {
            success: true,
            data
        };
    } catch (error) {
        console.error('Email sending exception:', error);
        return {
            success: false,
            error
        };
    }
}
}),
"[project]/app/actions/join-waitlist.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40807be106533d4006da9c4d8ad09ed86b97d8116a":"joinWaitlist"},"",""] */ __turbopack_context__.s([
    "joinWaitlist",
    ()=>joinWaitlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/email.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
// Initialize Resend with key from env
const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resend"](process.env.RESEND_API_KEY);
async function joinWaitlist(email) {
    try {
        // 1. Validate input (basic check, could use zod)
        if (!email || !email.includes('@')) {
            return {
                success: false,
                message: 'Invalid email address'
            };
        }
        // 2. Insert into Supabase
        const { error: dbError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from('waitlist').insert([
            {
                email,
                status: 'pending'
            }
        ]);
        if (dbError) {
            // Handle duplicate email specifically if possible
            if (dbError.code === '23505') {
                return {
                    success: true,
                    message: 'You are already on the waitlist!'
                };
            }
            console.error('Database error:', dbError);
            return {
                success: false,
                message: 'Failed to join waitlist. Please try again.'
            };
        }
        // 3. Send Email via Resend
        // Note: We wrap this in try/catch to not fail the whole request if email fails, 
        // but ideally we want both to succeed.
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendWelcomeEmail"])(email);
        } catch (e) {
            console.error('Email sending failed:', e);
        }
        return {
            success: true,
            message: 'Successfully joined the waitlist!'
        };
    } catch (err) {
        console.error('Unexpected error:', err);
        return {
            success: false,
            message: 'An unexpected error occurred.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    joinWaitlist
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(joinWaitlist, "40807be106533d4006da9c4d8ad09ed86b97d8116a", null);
}),
"[project]/.next-internal/server/app/waitlist/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/join-waitlist.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$join$2d$waitlist$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/join-waitlist.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/waitlist/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/join-waitlist.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40807be106533d4006da9c4d8ad09ed86b97d8116a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$join$2d$waitlist$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["joinWaitlist"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$waitlist$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$join$2d$waitlist$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/waitlist/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/join-waitlist.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$join$2d$waitlist$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/join-waitlist.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4ac3e578._.js.map
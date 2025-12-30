# Supabase Edge Functions Deployment Guide

This guide will help you deploy your KasaNow SMS Services application using Supabase Edge Functions instead of Netlify.

## Prerequisites

1. Install Supabase CLI:
```bash
npm install -g supabase
```

2. Login to Supabase:
```bash
supabase login
```

## Setup Instructions

### 1. Initialize Supabase Project

```bash
# Initialize the project
supabase init

# Start local development
supabase start
```

### 2. Link to Remote Project

```bash
# Link to your existing Supabase project
supabase link --project-ref uwnfgigdzbxgsdhc
```

### 3. Run Database Migrations

```bash
# Apply the database schema
supabase db push
```

### 4. Update Configuration

1. In your Supabase dashboard, go to `Table Editor`
2. Find the `app_config` table
3. Update the `RESEND_API_KEY` with your actual Resend API key:
   ```sql
   UPDATE app_config 
   SET key_value = 'your_actual_resend_api_key_here' 
   WHERE key_name = 'RESEND_API_KEY' AND environment = 'production';
   ```

### 5. Deploy Edge Functions

```bash
# Deploy all Edge Functions
supabase functions deploy

# Or deploy specific function
supabase functions deploy join-waitlist
```

### 6. Update Environment Variables

In your Supabase dashboard, go to `Settings > API` and note:
- Project URL
- Anon public key
- Service role secret key (for functions)

### 7. Deploy Frontend

You can deploy your Next.js app to any platform (Vercel, Netlify, etc.) with these environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Local Development

```bash
# Start Supabase locally
npm run supabase:start

# Start Next.js development server
npm run dev

# Deploy functions locally for testing
supabase functions serve
```

## Project Structure

```
├── supabase/
│   ├── config.toml              # Supabase configuration
│   ├── functions/
│   │   └── join-waitlist/
│   │       └── index.ts         # Edge function for waitlist
│   └── migrations/
│       └── 20241218000001_initial_schema.sql
├── app/
│   └── actions/
│       └── join-waitlist.ts     # Updated to use Edge Functions
├── lib/
│   ├── supabase.ts             # Supabase client
│   └── config.ts               # Configuration management
└── package.json                # Updated with Supabase scripts
```

## Benefits of This Setup

1. **No Environment Variables**: All configuration is stored securely in the database
2. **Edge Functions**: Fast, serverless functions that scale automatically
3. **Database Integration**: Direct access to Supabase without API keys
4. **Global Distribution**: Edge functions run close to your users worldwide
5. **Cost Effective**: Pay only for what you use

## Testing the Deployment

1. Submit an email on your waitlist form
2. Check the `waitlist` table in Supabase dashboard
3. Verify that the welcome email was sent
4. Monitor function logs in Supabase dashboard

## Troubleshooting

- Check function logs in Supabase dashboard under `Functions > Logs`
- Verify database policies allow the operations
- Ensure your Resend API key is correctly set in the `app_config` table
- Test locally first with `supabase start` before deploying
# Supabase Integration Setup Guide

This guide will help you set up Supabase for your Next.js project.

## 📋 Prerequisites

1. A Supabase account (sign up at [supabase.com](https://supabase.com))
2. A Supabase project created

## 🔑 Required Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```env
# Your Supabase Project URL
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co

# Your Supabase Anonymous/Public Key (safe to expose in client-side code)
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Your Supabase Service Role Key (KEEP THIS SECRET - server-side only!)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

## 🔍 How to Find Your Supabase Credentials

### Step 1: Access Your Supabase Dashboard
1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Sign in to your account
3. Select your project (or create a new one)

### Step 2: Get Your Project URL
1. In your project dashboard, go to **Settings** (gear icon in the left sidebar)
2. Click on **API** in the settings menu
3. Find **Project URL** under the "Project API keys" section
4. Copy this URL and use it as `NEXT_PUBLIC_SUPABASE_URL`

### Step 3: Get Your Anonymous Key
1. In the same **Settings > API** page
2. Find the **anon** or **public** key under "Project API keys"
3. Click the **eye icon** to reveal it (or click "Reveal" button)
4. Copy this key and use it as `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Step 4: Get Your Service Role Key
1. Still in **Settings > API** page
2. Find the **service_role** key (⚠️ This is a secret key!)
3. Click the **eye icon** to reveal it
4. Copy this key and use it as `SUPABASE_SERVICE_ROLE_KEY`
5. **⚠️ IMPORTANT**: Never expose this key in client-side code or commit it to version control

## 📁 Project Structure

Your Supabase setup is already configured with:

- **Client-side client**: `utils/supabase/client.ts`
  - Use this in React components (Client Components)
  - Example: `const supabase = createClient()`

- **Server-side client**: `utils/supabase/server.ts`
  - Use this in Server Components and API routes
  - Example: `const supabase = createClient(cookies())`

## 🚀 Usage Examples

### Client Component Example
```typescript
'use client'
import { createClient } from '@/utils/supabase/client'

export default function MyComponent() {
  const supabase = createClient()
  
  // Use supabase client here
  const fetchData = async () => {
    const { data, error } = await supabase
      .from('your_table')
      .select('*')
  }
  
  return <div>...</div>
}
```

### Server Component Example
```typescript
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function MyServerComponent() {
  const supabase = createClient(cookies())
  
  const { data, error } = await supabase
    .from('your_table')
    .select('*')
  
  return <div>...</div>
}
```

### API Route Example (with Service Role)
```typescript
import { createServerClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

export async function POST(request: Request) {
  const supabaseAdmin = createServerClient(supabaseUrl!, serviceKey!, {
    cookies: {
      getAll() { return [] },
      setAll() {},
    },
  })
  
  // Use supabaseAdmin for admin operations
  const { data, error } = await supabaseAdmin
    .from('your_table')
    .insert({ ... })
}
```

## 🔒 Security Best Practices

1. **Never commit `.env.local`** to version control (it's already in `.gitignore`)
2. **Never expose `SUPABASE_SERVICE_ROLE_KEY`** in client-side code
3. **Use Row Level Security (RLS)** policies in Supabase for data protection
4. **Use the anon key** for client-side operations (it respects RLS policies)
5. **Use the service role key** only in server-side API routes when you need to bypass RLS

## 📊 Database Setup

For the reservations feature, you'll need to create a table in Supabase:

1. Go to **Table Editor** in your Supabase dashboard
2. Create a new table called `reservations` with the following columns:
   - `id` (uuid, primary key, default: `gen_random_uuid()`)
   - `name` (text, not null)
   - `company` (text, not null)
   - `email` (text, not null)
   - `phone` (text, not null)
   - `event_type` (text, not null)
   - `desired_date` (date, not null)
   - `number_of_people` (integer, nullable)
   - `project_details` (text, nullable)
   - `locale` (text, nullable)
   - `created_at` (timestamp, default: `now()`)

3. Enable Row Level Security (RLS) on the table
4. Create policies as needed for your use case

## ✅ Verification

After setting up your environment variables:

1. Restart your Next.js development server
2. Check that the environment variables are loaded (they should be available in your code)
3. Test a simple Supabase query to verify the connection

## 🆘 Troubleshooting

### "Missing Supabase environment variables" error
- Make sure `.env.local` exists in the root directory
- Verify all three environment variables are set
- Restart your development server after adding/changing environment variables

### Connection errors
- Verify your `NEXT_PUBLIC_SUPABASE_URL` is correct
- Check that your Supabase project is active
- Verify your API keys are correct (they're long strings)

### RLS (Row Level Security) errors
- Check your RLS policies in Supabase dashboard
- For admin operations, use the service role key in API routes

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Next.js Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Supabase SSR Guide](https://supabase.com/docs/guides/auth/server-side/creating-a-client)


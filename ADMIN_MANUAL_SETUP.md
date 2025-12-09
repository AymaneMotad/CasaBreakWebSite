# Manual Admin User Setup

The script might fail due to Supabase Auth settings. Here's how to create the admin user manually:

## Option 1: Via Supabase Dashboard (Recommended)

1. Go to your Supabase Dashboard
2. Navigate to **Authentication** → **Users**
3. Click **"Add user"** → **"Create new user"**
4. Fill in:
   - **Email**: `casaBreakEvents@casabreak.ma`
   - **Password**: `e4e4615eb184aeb589f82d51b6b97299A1!`
   - **Auto Confirm User**: ✅ Check this box (important!)
5. Click **"Create user"**

## Option 2: Disable Email Confirmation (Then run script)

1. Go to Supabase Dashboard → **Authentication** → **Settings**
2. Under **"Email Auth"**, disable **"Enable email confirmations"**
3. Save settings
4. Run the script again: `node scripts/setup-admin.js`

## Option 3: Use Supabase SQL (Alternative)

Run this in Supabase SQL Editor (requires service role):

```sql
-- This creates the user directly in auth.users
-- Note: You still need to set the password via Dashboard or API

INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  confirmation_token,
  recovery_token
)
VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'casaBreakEvents@casabreak.ma',
  crypt('e4e4615eb184aeb589f82d51b6b97299A1!', gen_salt('bf')),
  NOW(),
  NOW(),
  NOW(),
  '{"provider":"email","providers":["email"]}',
  '{"role":"admin","name":"CasaBreak Admin"}',
  false,
  '',
  ''
);
```

**Note**: The SQL method requires password hashing. It's easier to use the Dashboard method.

## After Creating User

1. Login at: `http://localhost:3000/admin/login`
2. Email: `casaBreakEvents@casabreak.ma`
3. Password: `e4e4615eb184aeb589f82d51b6b97299A1!`

## Troubleshooting

### "Invalid login credentials"
- Make sure "Auto Confirm User" was checked when creating
- Check that email is exactly: `casaBreakEvents@casabreak.ma` (case-sensitive)
- Try resetting password in Supabase Dashboard

### "Email not confirmed"
- Go to Supabase Dashboard → Authentication → Users
- Find your user and click "Confirm email" button

### Still not working?
- Check Supabase Dashboard → Authentication → Settings
- Make sure email auth is enabled
- Check if there are any RLS policies blocking access


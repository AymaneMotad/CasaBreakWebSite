/**
 * Setup Admin User Script
 * Run this once to create the admin user in Supabase
 * 
 * Usage: node scripts/setup-admin.js
 * 
 * Make sure you have SUPABASE_SERVICE_ROLE_KEY in your .env.local
 */

const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !serviceKey) {
  console.error('❌ Missing Supabase environment variables!')
  console.error('Make sure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, serviceKey)

async function setupAdmin() {
  const email = 'casaBreakEvents@casabreak.ma'
  const password = 'e4e4615eb184aeb589f82d51b6b97299A1!'
  
  console.log('🚀 Setting up admin user...')
  console.log(`📧 Email: ${email}`)
  console.log(`🔑 Password: ${password}`)
  console.log('')

  try {
    // Check if user already exists
    const { data: existingUsers } = await supabase.auth.admin.listUsers()
    const existingUser = existingUsers?.users?.find(u => u.email === email)

    if (existingUser) {
      console.log('⚠️  User already exists. Resetting password...')
      const { data, error } = await supabase.auth.admin.updateUserById(
        existingUser.id,
        { password }
      )
      
      if (error) throw error
      console.log('✅ Password updated successfully!')
    } else {
      // Create new user
      console.log('👤 Creating new admin user...')
      const { data, error } = await supabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true, // Auto-confirm email
        phone_confirm: false,
        user_metadata: {
          role: 'admin',
          name: 'CasaBreak Admin'
        },
        app_metadata: {
          role: 'admin'
        }
      })

      if (error) {
        console.error('❌ Error details:', error)
        if (error.message.includes('not allowed') || error.message.includes('User not allowed')) {
          console.error('')
          console.error('⚠️  SUPABASE AUTH SETTINGS ISSUE')
          console.error('')
          console.error('Please create the user manually via Supabase Dashboard:')
          console.error('1. Go to Supabase Dashboard → Authentication → Users')
          console.error('2. Click "Add user" → "Create new user"')
          console.error(`3. Email: ${email}`)
          console.error(`4. Password: ${password}`)
          console.error('5. ✅ Check "Auto Confirm User"')
          console.error('6. Click "Create user"')
          console.error('')
          console.error('Or disable email confirmation:')
          console.error('Dashboard → Authentication → Settings → Disable "Enable email confirmations"')
          throw error
        }
        throw error
      }
      console.log('✅ Admin user created successfully!')
      console.log('User ID:', data.user?.id)
    }

    // Add to admin_users table if it exists
    try {
      const { data: user } = await supabase.auth.admin.listUsers()
      const adminUser = user?.users?.find(u => u.email === email)
      
      if (adminUser) {
        const { error: insertError } = await supabase
          .from('admin_users')
          .upsert({
            id: adminUser.id,
            email: adminUser.email,
            role: 'admin'
          }, { onConflict: 'id' })

        if (insertError && !insertError.message.includes('does not exist')) {
          console.warn('⚠️  Could not add to admin_users table:', insertError.message)
        } else {
          console.log('✅ Added to admin_users table')
        }
      }
    } catch (err) {
      console.warn('⚠️  admin_users table might not exist yet. Run create-admin-user.sql first.')
    }

    console.log('')
    console.log('='.repeat(50))
    console.log('✅ SETUP COMPLETE!')
    console.log('='.repeat(50))
    console.log('')
    console.log('📧 Login Email:', email)
    console.log('🔑 Password:', password)
    console.log('')
    console.log('🌐 Login URL: http://localhost:3000/admin/login')
    console.log('')
    console.log('⚠️  IMPORTANT: Save this password securely!')
    console.log('='.repeat(50))

  } catch (error) {
    console.error('❌ Error setting up admin:', error.message)
    process.exit(1)
  }
}

setupAdmin()


# Admin Panel Setup Guide

Complete CRUD admin panel for managing restaurants with image uploads.

## 🚀 Quick Setup

### Step 1: Install Dependencies

```bash
npm install @supabase/supabase-js dotenv
```

### Step 2: Create Supabase Storage Bucket

1. Go to Supabase Dashboard → Storage
2. Create a new bucket named: `restaurant-images`
3. Set it to **Public** (or Private with proper RLS policies)
4. Enable public access if you want images to be publicly accessible

### Step 3: Run Admin User Setup

```bash
node scripts/setup-admin.js
```

This will create the admin user with credentials:
- **Email**: `casaBreakEvents@casabreak.ma`
- **Password**: `e4e4615eb184aeb589f82d51b6b97299A1!`

### Step 4: (Optional) Create Admin Users Table

Run this SQL in Supabase SQL Editor:

```sql
-- See database/create-admin-user.sql
```

## 📋 Admin Credentials

**Login Email**: `casaBreakEvents@casabreak.ma`  
**Password**: `e4e4615eb184aeb589f82d51b6b97299A1!`

**⚠️ IMPORTANT**: Change this password after first login!

## 🎯 Features

### ✅ Full CRUD Operations
- **Create**: Add new restaurants with all details
- **Read**: View all restaurants in a table
- **Update**: Edit existing restaurants
- **Delete**: Remove restaurants

### ✅ Image Management
- Upload images directly to Supabase Storage
- Preview images before saving
- Support for both uploaded images and image URLs
- Automatic image URL generation

### ✅ Restaurant Fields
- Basic info (name, description, slug)
- Images (upload or URL)
- Location (district)
- Pricing (price level)
- Ratings
- Tags
- Website links
- Publication status

## 🔐 Security

- Protected routes (requires authentication)
- Supabase Auth integration
- Row Level Security (RLS) ready
- Admin-only access

## 📁 File Structure

```
app/admin/
├── login/page.tsx              # Login page
├── layout.tsx                   # Admin layout with auth
└── restaurants/
    ├── page.tsx                 # List all restaurants
    ├── new/page.tsx             # Create new restaurant
    └── [id]/page.tsx            # Edit restaurant

scripts/
└── setup-admin.js               # Admin user setup script

database/
└── create-admin-user.sql        # Admin users table SQL
```

## 🚦 Usage

### Access Admin Panel

1. Start your dev server: `npm run dev`
2. Navigate to: `http://localhost:3000/admin/login`
3. Login with the credentials above

### Managing Restaurants

1. **View All**: Go to `/admin/restaurants`
2. **Create New**: Click "Add Restaurant" button
3. **Edit**: Click the edit icon (pencil) on any restaurant
4. **Delete**: Click the delete icon (trash) on any restaurant

### Uploading Images

1. Go to edit/create restaurant page
2. Click "Choose File" under Image section
3. Select an image file
4. Image will upload to Supabase Storage automatically
5. Preview will show the uploaded image
6. Save the restaurant

## 🔧 Configuration

### Storage Bucket Name

The default bucket name is `restaurant-images`. To change it:

1. Update in `app/admin/restaurants/[id]/page.tsx`:
   ```typescript
   .from("restaurant-images")  // Change this
   ```

2. Create the bucket in Supabase Dashboard with the new name

### Email Domain

To change the admin email, edit `scripts/setup-admin.js`:
```javascript
const email = 'your-email@example.com'
```

## 🐛 Troubleshooting

### "Storage bucket not found"
- Make sure you created the `restaurant-images` bucket in Supabase
- Check that the bucket name matches exactly

### "Authentication failed"
- Run `node scripts/setup-admin.js` again
- Check that SUPABASE_SERVICE_ROLE_KEY is set correctly

### "Permission denied"
- Check RLS policies on `venues` table
- Ensure admin user has proper permissions

### Images not showing
- Check bucket is set to Public
- Verify image URLs in database
- Check browser console for CORS errors

## 📝 Notes

- Admin routes are excluded from locale routing (`/admin/*`)
- Images are stored in Supabase Storage
- All restaurant data is stored in `venues` table
- JSONB column stores flexible restaurant data

## 🔄 Next Steps

1. Change the default password after first login
2. Add more admin users if needed
3. Customize the admin UI to match your brand
4. Add more content types (bars, cafes, etc.)


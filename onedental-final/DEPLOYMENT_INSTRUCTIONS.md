# 🦷 OneDental Website - Complete Deployment Guide

This guide will help you deploy the OneDental website from zero to a fully functional dental clinic website with patient management, appointments, and admin dashboard.

## 📋 What You'll Get

- **Complete dental clinic website** with modern design
- **Patient management system** with appointment booking
- **Admin dashboard** for managing appointments and patients
- **Referral system** for patient rewards
- **Contact forms** with email notifications
- **Responsive design** for all devices
- **SEO optimized** for search engines

## 🚀 Quick Start (3 Simple Steps)

### Step 1: Download the Code
1. Download all files from the `onedental-final` folder
2. Extract to your computer (you'll need these files)

### Step 2: Set Up the Database (5 minutes)
1. Go to [Supabase.com](https://app.supabase.com)
2. Click "New Project"
3. Choose your organization and create a project
4. Wait for setup to complete (2-3 minutes)
5. Go to **SQL Editor** in the sidebar
6. Click "New Query"
7. Copy and paste the entire content from `supabase/migrations/20230101000000_initial_schema.sql`
8. Click "Run" - this creates all the database tables

### Step 3: Deploy to Vercel (2 minutes)
1. Go to [Vercel.com](https://vercel.com)
2. Click "Import Project"
3. Upload your `onedental-final` folder (drag and drop)
4. Add environment variables (see below)
5. Click "Deploy"

## 🔧 Environment Variables Setup

Before deploying, you need to set up these environment variables in Vercel:

### Required Variables:
```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**How to get these:**
1. In your Supabase project, go to **Settings** → **API**
2. Copy the "Project URL" → use as `VITE_SUPABASE_URL`
3. Copy the "anon/public" key → use as `VITE_SUPABASE_ANON_KEY`

### Optional Variables (for customization):
```
VITE_SITE_URL=https://yourdomain.com
VITE_CLINIC_PHONE=+34 976 123 456
VITE_CLINIC_EMAIL=info@yourdental.com
VITE_CLINIC_ADDRESS=Your clinic address
```

## 📁 Detailed Step-by-Step Instructions

### Phase 1: Supabase Database Setup

#### 1.1 Create Supabase Account
1. Visit [supabase.com](https://app.supabase.com)
2. Click "Start your project"
3. Sign up with GitHub, Google, or email
4. Verify your email if needed

#### 1.2 Create New Project
1. Click "New Project"
2. Choose your organization
3. Enter project details:
   - **Name**: OneDental (or your clinic name)
   - **Database Password**: Choose a strong password (save it!)
   - **Region**: Choose closest to your location
4. Click "Create new project"
5. **Wait 2-3 minutes** for setup to complete

#### 1.3 Set Up Database Tables
1. In your Supabase dashboard, click **SQL Editor** (left sidebar)
2. Click "+ New query"
3. Open the file `supabase/migrations/20230101000000_initial_schema.sql` from your downloaded files
4. Copy the entire content (Ctrl+A, Ctrl+C)
5. Paste into the Supabase SQL editor
6. Click "Run" (or press Ctrl+Enter)
7. You should see "Success. No rows returned" - this is normal!

#### 1.4 Get Your Credentials
1. Go to **Settings** → **API** (left sidebar)
2. Copy these two values:
   - **Project URL** (starts with https://)
   - **anon public** key (long text starting with eyJ...)
3. Save these - you'll need them for deployment

### Phase 2: Vercel Deployment

#### 2.1 Prepare Your Files
1. Make sure you have the `onedental-final` folder with all files
2. Create a `.env` file in the root (copy from `.env.example`)
3. Fill in your Supabase credentials in the `.env` file

#### 2.2 Deploy to Vercel
1. Visit [vercel.com](https://vercel.com)
2. Click "Sign up" and use GitHub, Google, or email
3. Once logged in, click "Import Project" or "New Project"
4. **Option A - Upload folder:**
   - Drag and drop your `onedental-final` folder
   - Wait for upload to complete
5. **Option B - GitHub (recommended):**
   - Push your files to GitHub first
   - Import from GitHub repository

#### 2.3 Configure Environment Variables
1. In Vercel, before deployment, click "Environment Variables"
2. Add each variable:
   - Name: `VITE_SUPABASE_URL`
   - Value: Your Supabase URL
   - Click "Add"
   - Repeat for `VITE_SUPABASE_ANON_KEY`
3. Add optional variables if desired
4. Click "Deploy"

#### 2.4 Wait for Deployment
1. Vercel will show building progress
2. Takes 2-3 minutes usually
3. When done, you'll get a URL like `https://onedental-xyz.vercel.app`
4. Click the URL to test your website!

### Phase 3: Testing Your Website

#### 3.1 Test Basic Functions
1. Visit your deployed URL
2. Check if the homepage loads correctly
3. Try navigating to different pages
4. Test the "Contacto" form
5. Try booking an appointment

#### 3.2 Admin Access
1. Go to `/admin` on your website
2. Create an admin account:
   - Register normally
   - Go to your Supabase dashboard
   - **Authentication** → **Users**
   - Find your user, edit it
   - In "Raw User Meta Data", add: `{"role": "admin"}`
   - Save changes
3. Refresh your admin page - you should now see the dashboard

## 🎯 Common Issues & Solutions

### ❌ "Missing environment variables"
**Solution:** Make sure you added `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in Vercel settings

### ❌ "Failed to load"
**Solution:** Check your Supabase URL is correct and project is running

### ❌ "Can't create appointment"
**Solution:** Verify database tables were created correctly in Supabase SQL Editor

### ❌ "Admin page shows nothing"
**Solution:** Update your user role in Supabase Authentication panel

## 🎨 Customization

Once deployed, you can customize:

### Change Colors & Branding
1. Edit `src/index.css` for main colors
2. Replace images in `public/images/`
3. Update clinic information in components

### Add/Edit Services
1. Go to Supabase dashboard
2. **Table Editor** → **services**
3. Add/edit services directly

### Modify Contact Information
1. Update environment variables in Vercel
2. Or edit `src/components/layout/Footer.tsx`

## 📞 Support

If you need help:
1. Check this guide again carefully
2. Verify all environment variables are set correctly
3. Check Supabase logs for database errors
4. Check Vercel function logs for deployment issues

## ✅ Final Checklist

- [ ] Supabase project created and database setup completed
- [ ] Environment variables configured in Vercel
- [ ] Website deployed and accessible via URL
- [ ] Homepage loads correctly
- [ ] Contact form works
- [ ] Appointment booking works
- [ ] Admin access configured and tested
- [ ] Custom domain connected (if desired)

**🎉 Congratulations! Your dental clinic website is now live and ready to accept appointments!**

---

*This website includes patient management, appointment booking, admin dashboard, and referral system - everything you need to run a modern dental practice online.*

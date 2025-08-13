# ✅ OneDental Deployment Checklist

## Pre-Deployment
- [ ] Downloaded all files from `onedental-final` folder
- [ ] Reviewed `DEPLOYMENT_INSTRUCTIONS.md`
- [ ] Have access to Supabase.com account
- [ ] Have access to Vercel.com account

## Database Setup (Supabase)
- [ ] Created Supabase account
- [ ] Created new Supabase project
- [ ] Copied and ran the SQL from `supabase/migrations/20230101000000_initial_schema.sql`
- [ ] Database tables created successfully (no errors in SQL editor)
- [ ] Copied Supabase URL from Settings → API
- [ ] Copied Supabase Anon Key from Settings → API

## Website Deployment (Vercel)
- [ ] Created Vercel account
- [ ] Uploaded `onedental-final` folder OR imported from GitHub
- [ ] Added environment variables:
  - [ ] `VITE_SUPABASE_URL` = your supabase project URL
  - [ ] `VITE_SUPABASE_ANON_KEY` = your supabase anon key
- [ ] Deployment completed successfully
- [ ] Received deployment URL from Vercel

## Testing
- [ ] Website loads correctly at deployment URL
- [ ] Homepage displays properly
- [ ] Can navigate between pages
- [ ] Contact form works (test with your email)
- [ ] Appointment booking works
- [ ] Database receives test data (check in Supabase)

## Admin Access Setup
- [ ] Registered a test account on your website
- [ ] Found user in Supabase Authentication → Users
- [ ] Updated user metadata to `{"role": "admin"}`
- [ ] Can access `/admin` page with admin privileges
- [ ] Admin dashboard displays appointments and users

## Optional Customization
- [ ] Updated clinic contact information in environment variables
- [ ] Replaced default images with your clinic photos
- [ ] Customized colors/branding (optional)
- [ ] Added your clinic services in Supabase services table
- [ ] Connected custom domain (optional)

## Launch Checklist
- [ ] All testing completed successfully
- [ ] Admin access working
- [ ] Contact information updated
- [ ] Ready to receive real appointments
- [ ] Staff trained on admin dashboard usage

---

**🎉 When all items are checked, your dental clinic website is ready for patients!**

**Support:** If any item fails, refer back to `DEPLOYMENT_INSTRUCTIONS.md` for detailed troubleshooting.

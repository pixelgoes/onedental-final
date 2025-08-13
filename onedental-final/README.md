# 🦷 OneDental - Complete Dental Clinic Website

> **Ready-to-deploy dental clinic website with patient management, appointment booking, and admin dashboard.**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/import?repository-url=https://github.com/your-repo/onedental)

## 🎯 What This Includes

✓ **Modern dental clinic website** with professional design  
✓ **Patient appointment booking** with calendar integration  
✓ **Admin dashboard** for managing appointments and patients  
✓ **Patient referral system** with rewards tracking  
✓ **Contact forms** with automatic email notifications  
✓ **Responsive design** - works perfectly on mobile and desktop  
✓ **SEO optimized** for Google search ranking  
✓ **Database included** - complete patient management system  

## 🚀 Quick Deploy (5 minutes)

1. **Get the database ready:**
   - Create account at [Supabase.com](https://app.supabase.com)
   - Create new project, run the SQL from `supabase/migrations/20230101000000_initial_schema.sql`

2. **Deploy the website:**
   - Upload this folder to [Vercel.com](https://vercel.com)
   - Add your Supabase credentials as environment variables
   - Click deploy!

3. **You're done!** Your dental clinic website is live.

📈 **Need detailed instructions?** See [`DEPLOYMENT_INSTRUCTIONS.md`](./DEPLOYMENT_INSTRUCTIONS.md)

## 🖥️ Screenshots

### Homepage
- Modern, professional design with appointment booking
- Service showcase with detailed information
- Patient testimonials and clinic information

### Admin Dashboard
- View and manage all appointments
- Patient information management
- Analytics and reporting
- Referral system management

### Patient Portal
- Book appointments online
- View appointment history
- Refer friends and earn rewards
- Update personal information

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript + Vite
- **UI:** TailwindCSS + Radix UI components
- **Backend:** Supabase (Database + Authentication + Edge Functions)
- **Deployment:** Vercel (recommended) or any static hosting
- **Database:** PostgreSQL (via Supabase)

## 📁 Project Structure

```
onedental-final/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Website pages
│   ├── lib/            # Supabase client & utilities
│   └── contexts/       # React contexts (auth, theme)
├── public/
│   ├── images/         # Website images
│   └── data/           # Static data (services, etc.)
├── supabase/
│   ├── migrations/     # Database schema
│   └── functions/      # Edge functions (API endpoints)
└── DEPLOYMENT_INSTRUCTIONS.md  # Step-by-step setup guide
```

## ⚙️ Development Setup (Optional)

If you want to modify the code before deployment:

```bash
# Install dependencies
npm install
# or
pnpm install

# Copy environment variables
cp .env.example .env
# Edit .env with your Supabase credentials

# Start development server
npm run dev
# Visit http://localhost:5173
```

## 🎨 Customization

Easily customize:

- **Colors & Theme:** Edit `src/index.css`
- **Clinic Info:** Update contact details in environment variables
- **Services:** Add/edit services in Supabase database
- **Images:** Replace images in `public/images/`
- **Content:** Edit page components in `src/pages/`

## 🔐 Admin Access

After deployment:

1. Register a normal account on your website
2. In Supabase dashboard, go to Authentication > Users
3. Edit your user and add: `{"role": "admin"}` in Raw User Meta Data
4. Visit `/admin` on your website - you now have admin access!

## 📊 Features Overview

### For Patients:
- Browse dental services with detailed information
- Book appointments online with calendar picker
- View appointment history and status
- Refer friends and earn rewards
- Contact forms with instant responses

### For Clinic Staff:
- Complete admin dashboard
- Manage all appointments (confirm, cancel, reschedule)
- View patient information and history
- Track referrals and rewards
- Analytics and reporting
- Manage clinic services and pricing

### Technical Features:
- **SEO Optimized:** Meta tags, structured data, sitemap
- **Fast Loading:** Optimized images and code splitting
- **Secure:** Built-in authentication and data protection
- **Scalable:** Database can handle thousands of patients
- **Mobile First:** Perfect on all device sizes

## 📦 What's Included

- ✅ Complete website source code
- ✅ Database schema with all tables
- ✅ Backend API functions
- ✅ Professional images and icons
- ✅ Step-by-step deployment guide
- ✅ Environment configuration examples
- ✅ Ready-to-use forms and components

## 🎆 Getting Help

If you need assistance:

1. 📄 **Check the deployment guide:** [`DEPLOYMENT_INSTRUCTIONS.md`](./DEPLOYMENT_INSTRUCTIONS.md)
2. ⚙️ **Verify environment variables** are set correctly
3. 📡 **Check Supabase logs** for database issues
4. 🔍 **Review Vercel logs** for deployment problems

## ⚖️ License

MIT License - You can use this for your dental clinic or client projects.

---

**🎉 Ready to launch your dental clinic online? Follow the deployment guide and you'll have a professional website running in 5 minutes!**

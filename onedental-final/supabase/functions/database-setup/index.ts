Deno.serve(async (req) => {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE, PATCH',
        'Access-Control-Max-Age': '86400',
        'Access-Control-Allow-Credentials': 'false'
    };

    if (req.method === 'OPTIONS') {
        return new Response(null, { status: 200, headers: corsHeaders });
    }

    try {
        console.log('Database setup function called');
        
        // Get environment variables
        const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
        const supabaseUrl = Deno.env.get('SUPABASE_URL');

        if (!serviceRoleKey || !supabaseUrl) {
            throw new Error('Supabase configuration missing');
        }

        // Database schema SQL - Execute all tables creation
        const schemaSQL = `
        -- Create profiles table for user data (extends Supabase auth.users)
        CREATE TABLE IF NOT EXISTS profiles (
            id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
            email TEXT UNIQUE NOT NULL,
            full_name TEXT,
            phone TEXT,
            date_of_birth DATE,
            address TEXT,
            emergency_contact TEXT,
            role TEXT DEFAULT 'patient' CHECK (role IN ('patient', 'admin')),
            profile_picture_url TEXT,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
        
        -- Create referrals table for referral program
        CREATE TABLE IF NOT EXISTS referrals (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            referrer_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
            referee_email TEXT NOT NULL,
            referee_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
            referral_code TEXT UNIQUE NOT NULL,
            status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'expired', 'cancelled')),
            reward_amount DECIMAL(10,2) DEFAULT 50.00,
            reward_claimed BOOLEAN DEFAULT FALSE,
            expires_at TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + INTERVAL '90 days'),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            completed_at TIMESTAMP WITH TIME ZONE,
            claimed_at TIMESTAMP WITH TIME ZONE
        );
        
        -- Create appointments table
        CREATE TABLE IF NOT EXISTS appointments (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            patient_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
            service_type TEXT NOT NULL,
            service_category TEXT,
            preferred_date DATE NOT NULL,
            preferred_time TIME NOT NULL,
            alternative_dates DATE[],
            status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed', 'no_show')),
            notes TEXT,
            patient_name TEXT NOT NULL,
            patient_email TEXT NOT NULL,
            patient_phone TEXT NOT NULL,
            emergency_contact TEXT,
            medical_history TEXT,
            insurance_provider TEXT,
            insurance_number TEXT,
            admin_notes TEXT,
            confirmation_sent BOOLEAN DEFAULT FALSE,
            reminder_sent BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            confirmed_at TIMESTAMP WITH TIME ZONE,
            appointment_datetime TIMESTAMP WITH TIME ZONE
        );
        
        -- Create contact_submissions table for contact form
        CREATE TABLE IF NOT EXISTS contact_submissions (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            subject TEXT,
            message TEXT NOT NULL,
            status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'spam')),
            priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
            assigned_to UUID REFERENCES profiles(id) ON DELETE SET NULL,
            admin_notes TEXT,
            follow_up_date DATE,
            response_sent BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            resolved_at TIMESTAMP WITH TIME ZONE
        );
        
        -- Create services table for service management
        CREATE TABLE IF NOT EXISTS services (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            name TEXT NOT NULL,
            slug TEXT UNIQUE NOT NULL,
            description TEXT,
            short_description TEXT,
            price_range TEXT,
            base_price DECIMAL(10,2),
            duration INTEGER,
            category TEXT NOT NULL,
            subcategory TEXT,
            is_active BOOLEAN DEFAULT true,
            is_featured BOOLEAN DEFAULT false,
            image_url TEXT,
            gallery_urls TEXT[],
            benefits TEXT[],
            procedures TEXT[],
            before_after_images TEXT[],
            seo_title TEXT,
            seo_description TEXT,
            seo_keywords TEXT[],
            display_order INTEGER DEFAULT 0,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
        
        -- Create admin_settings table
        CREATE TABLE IF NOT EXISTS admin_settings (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            setting_key TEXT UNIQUE NOT NULL,
            setting_value TEXT,
            setting_type TEXT DEFAULT 'text' CHECK (setting_type IN ('text', 'number', 'boolean', 'json', 'date')),
            category TEXT DEFAULT 'general',
            description TEXT,
            is_public BOOLEAN DEFAULT false,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
        
        -- Create analytics_events table
        CREATE TABLE IF NOT EXISTS analytics_events (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
            session_id TEXT,
            event_type TEXT NOT NULL,
            event_name TEXT NOT NULL,
            page_url TEXT,
            page_title TEXT,
            referrer TEXT,
            user_agent TEXT,
            ip_address INET,
            country TEXT,
            city TEXT,
            device_type TEXT,
            browser TEXT,
            os TEXT,
            properties JSONB,
            timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
        
        -- Create notifications table
        CREATE TABLE IF NOT EXISTS notifications (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
            title TEXT NOT NULL,
            message TEXT NOT NULL,
            type TEXT DEFAULT 'info' CHECK (type IN ('info', 'success', 'warning', 'error')),
            category TEXT DEFAULT 'general',
            is_read BOOLEAN DEFAULT FALSE,
            action_url TEXT,
            action_text TEXT,
            priority TEXT DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
            expires_at TIMESTAMP WITH TIME ZONE,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            read_at TIMESTAMP WITH TIME ZONE
        );
        
        -- Enable RLS on all tables
        ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
        ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;
        ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
        ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
        ALTER TABLE services ENABLE ROW LEVEL SECURITY;
        ALTER TABLE admin_settings ENABLE ROW LEVEL SECURITY;
        ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
        ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
        `;

        // Execute the schema
        console.log('Executing database schema...');
        const schemaResponse = await fetch(`${supabaseUrl}/rest/v1/rpc/exec`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${serviceRoleKey}`,
                'apikey': serviceRoleKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ sql: schemaSQL })
        });

        if (!schemaResponse.ok) {
            const errorText = await schemaResponse.text();
            console.error('Schema execution failed:', errorText);
            throw new Error(`Schema execution failed: ${errorText}`);
        }

        console.log('Database schema created successfully');

        const result = {
            data: {
                status: 'success',
                message: 'Database schema has been set up successfully',
                timestamp: new Date().toISOString()
            }
        };

        return new Response(JSON.stringify(result), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Database setup error:', error);

        const errorResponse = {
            error: {
                code: 'DATABASE_SETUP_FAILED',
                message: error.message,
                timestamp: new Date().toISOString()
            }
        };

        return new Response(JSON.stringify(errorResponse), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
});
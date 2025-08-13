-- One Dental Website Database Schema
-- This file contains all the tables and policies needed for the complete application

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create custom types
CREATE TYPE user_role AS ENUM ('patient', 'admin', 'staff');
CREATE TYPE appointment_status AS ENUM ('pending', 'confirmed', 'completed', 'cancelled', 'no_show');
CREATE TYPE contact_status AS ENUM ('new', 'in_progress', 'resolved', 'closed');
CREATE TYPE referral_status AS ENUM ('pending', 'used', 'expired');

-- =============================================
-- USERS AND AUTHENTICATION TABLES
-- =============================================

-- Profiles table (extends Supabase auth.users)
CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    phone TEXT,
    role user_role DEFAULT 'patient' NOT NULL,
    avatar_url TEXT,
    date_of_birth DATE,
    address TEXT,
    emergency_contact_name TEXT,
    emergency_contact_phone TEXT,
    medical_history TEXT,
    allergies TEXT,
    current_medications TEXT,
    insurance_provider TEXT,
    insurance_policy_number TEXT,
    preferred_language TEXT DEFAULT 'es',
    marketing_consent BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Function to handle updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for profiles updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- SERVICES TABLES
-- =============================================

-- Services table
CREATE TABLE public.services (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    detailed_description TEXT,
    price_from DECIMAL(10,2),
    price_to DECIMAL(10,2),
    duration_minutes INTEGER DEFAULT 60,
    category TEXT,
    image_url TEXT,
    gallery_urls TEXT[],
    benefits TEXT[],
    procedure_steps TEXT[],
    recovery_info TEXT,
    faq JSONB,
    is_active BOOLEAN DEFAULT true,
    display_order INTEGER DEFAULT 0,
    meta_title TEXT,
    meta_description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Trigger for services updated_at
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON public.services
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- APPOINTMENTS SYSTEM
-- =============================================

-- Appointments table
CREATE TABLE public.appointments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    patient_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    service_id UUID REFERENCES public.services(id) ON DELETE SET NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    duration_minutes INTEGER DEFAULT 60,
    status appointment_status DEFAULT 'pending',
    notes TEXT,
    staff_notes TEXT,
    confirmation_sent_at TIMESTAMP WITH TIME ZONE,
    reminder_sent_at TIMESTAMP WITH TIME ZONE,
    estimated_price DECIMAL(10,2),
    actual_price DECIMAL(10,2),
    payment_status TEXT DEFAULT 'pending',
    cancellation_reason TEXT,
    cancelled_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Ensure no double booking for same time slot
    UNIQUE(appointment_date, appointment_time)
);

-- Trigger for appointments updated_at
CREATE TRIGGER update_appointments_updated_at BEFORE UPDATE ON public.appointments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Available time slots table
CREATE TABLE public.available_slots (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    day_of_week INTEGER NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6), -- 0 = Sunday
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    is_available BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- REFERRAL SYSTEM
-- =============================================

-- Referrals table
CREATE TABLE public.referrals (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    referrer_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    referee_email TEXT NOT NULL,
    referee_name TEXT,
    referee_phone TEXT,
    referral_code TEXT UNIQUE NOT NULL,
    status referral_status DEFAULT 'pending',
    reward_amount DECIMAL(10,2) DEFAULT 50.00,
    reward_claimed BOOLEAN DEFAULT false,
    reward_claimed_at TIMESTAMP WITH TIME ZONE,
    expires_at TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + INTERVAL '90 days'),
    first_appointment_id UUID REFERENCES public.appointments(id),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Trigger for referrals updated_at
CREATE TRIGGER update_referrals_updated_at BEFORE UPDATE ON public.referrals
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- CONTACT AND COMMUNICATION
-- =============================================

-- Contact messages table
CREATE TABLE public.contact_messages (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    service_interest TEXT,
    message TEXT NOT NULL,
    status contact_status DEFAULT 'new',
    assigned_to UUID REFERENCES public.profiles(id),
    response TEXT,
    responded_at TIMESTAMP WITH TIME ZONE,
    responded_by UUID REFERENCES public.profiles(id),
    priority INTEGER DEFAULT 1, -- 1=low, 2=medium, 3=high
    source TEXT DEFAULT 'website', -- website, phone, email, etc.
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Trigger for contact_messages updated_at
CREATE TRIGGER update_contact_messages_updated_at BEFORE UPDATE ON public.contact_messages
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Newsletter subscriptions
CREATE TABLE public.newsletter_subscriptions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    is_active BOOLEAN DEFAULT true,
    interests TEXT[],
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    unsubscribed_at TIMESTAMP WITH TIME ZONE,
    source TEXT DEFAULT 'website'
);

-- =============================================
-- BLOG AND CONTENT
-- =============================================

-- Blog posts table
CREATE TABLE public.blog_posts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    featured_image TEXT,
    author_id UUID REFERENCES public.profiles(id),
    category TEXT,
    tags TEXT[],
    is_published BOOLEAN DEFAULT false,
    published_at TIMESTAMP WITH TIME ZONE,
    meta_title TEXT,
    meta_description TEXT,
    read_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Trigger for blog_posts updated_at
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON public.blog_posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- ANALYTICS AND TRACKING
-- =============================================

-- Page views tracking
CREATE TABLE public.page_views (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    page_url TEXT NOT NULL,
    visitor_id TEXT, -- Anonymous tracking ID
    user_id UUID REFERENCES public.profiles(id),
    referrer TEXT,
    user_agent TEXT,
    ip_address INET,
    session_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Conversion tracking
CREATE TABLE public.conversions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    visitor_id TEXT,
    user_id UUID REFERENCES public.profiles(id),
    conversion_type TEXT NOT NULL, -- 'appointment', 'contact', 'newsletter', 'referral'
    conversion_value DECIMAL(10,2),
    source_page TEXT,
    campaign_source TEXT,
    campaign_medium TEXT,
    campaign_name TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- SYSTEM SETTINGS
-- =============================================

-- Site settings table
CREATE TABLE public.site_settings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    setting_key TEXT UNIQUE NOT NULL,
    setting_value JSONB NOT NULL,
    description TEXT,
    updated_by UUID REFERENCES public.profiles(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Trigger for site_settings updated_at
CREATE TRIGGER update_site_settings_updated_at BEFORE UPDATE ON public.site_settings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =============================================

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.available_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.conversions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON public.profiles
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

CREATE POLICY "Admins can update all profiles" ON public.profiles
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Services policies (public read, admin write)
CREATE POLICY "Anyone can view active services" ON public.services
    FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage services" ON public.services
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role IN ('admin', 'staff')
        )
    );

-- Appointments policies
CREATE POLICY "Users can view own appointments" ON public.appointments
    FOR SELECT USING (auth.uid() = patient_id);

CREATE POLICY "Users can create own appointments" ON public.appointments
    FOR INSERT WITH CHECK (auth.uid() = patient_id);

CREATE POLICY "Users can update own appointments" ON public.appointments
    FOR UPDATE USING (auth.uid() = patient_id);

CREATE POLICY "Admins can view all appointments" ON public.appointments
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role IN ('admin', 'staff')
        )
    );

CREATE POLICY "Admins can manage all appointments" ON public.appointments
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role IN ('admin', 'staff')
        )
    );

-- Available slots policies (public read, admin write)
CREATE POLICY "Anyone can view available slots" ON public.available_slots
    FOR SELECT USING (true);

CREATE POLICY "Admins can manage available slots" ON public.available_slots
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role IN ('admin', 'staff')
        )
    );

-- Referrals policies
CREATE POLICY "Users can view own referrals" ON public.referrals
    FOR SELECT USING (auth.uid() = referrer_id);

CREATE POLICY "Users can create referrals" ON public.referrals
    FOR INSERT WITH CHECK (auth.uid() = referrer_id);

CREATE POLICY "Admins can view all referrals" ON public.referrals
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role IN ('admin', 'staff')
        )
    );

CREATE POLICY "Admins can manage referrals" ON public.referrals
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role IN ('admin', 'staff')
        )
    );

-- Contact messages policies (admin only)
CREATE POLICY "Admins can manage contact messages" ON public.contact_messages
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role IN ('admin', 'staff')
        )
    );

-- Newsletter subscriptions policies (public insert, admin manage)
CREATE POLICY "Anyone can subscribe to newsletter" ON public.newsletter_subscriptions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can manage newsletter subscriptions" ON public.newsletter_subscriptions
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role IN ('admin', 'staff')
        )
    );

-- Blog posts policies (public read published, admin manage all)
CREATE POLICY "Anyone can view published blog posts" ON public.blog_posts
    FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can manage blog posts" ON public.blog_posts
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role IN ('admin', 'staff')
        )
    );

-- Page views policies (insert only)
CREATE POLICY "Anyone can insert page views" ON public.page_views
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view page views" ON public.page_views
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role IN ('admin', 'staff')
        )
    );

-- Conversions policies (similar to page views)
CREATE POLICY "Anyone can insert conversions" ON public.conversions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view conversions" ON public.conversions
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role IN ('admin', 'staff')
        )
    );

-- Site settings policies (admin only)
CREATE POLICY "Admins can manage site settings" ON public.site_settings
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- =============================================
-- FUNCTIONS AND TRIGGERS
-- =============================================

-- Function to automatically create profile when user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name, role)
    VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name', 'patient');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to generate referral code
CREATE OR REPLACE FUNCTION generate_referral_code()
RETURNS TEXT AS $$
BEGIN
    RETURN 'OD' || UPPER(substring(md5(random()::text), 1, 8));
END;
$$ LANGUAGE plpgsql;

-- Function to check appointment conflicts
CREATE OR REPLACE FUNCTION check_appointment_conflict()
RETURNS TRIGGER AS $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM public.appointments
        WHERE appointment_date = NEW.appointment_date
        AND appointment_time = NEW.appointment_time
        AND status NOT IN ('cancelled', 'no_show')
        AND id != COALESCE(NEW.id, '00000000-0000-0000-0000-000000000000'::uuid)
    ) THEN
        RAISE EXCEPTION 'Time slot already booked';
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for appointment conflicts
CREATE TRIGGER check_appointment_conflict_trigger
    BEFORE INSERT OR UPDATE ON public.appointments
    FOR EACH ROW EXECUTE FUNCTION check_appointment_conflict();

-- =============================================
-- INITIAL DATA
-- =============================================

-- Insert default services
INSERT INTO public.services (name, slug, description, detailed_description, price_from, price_to, category, display_order) VALUES
('Estética Dental', 'estetica-dental', 'Mejora la apariencia de tu sonrisa con nuestros tratamientos estéticos.', 'Nuestros tratamientos de estética dental incluyen blanqueamiento, carillas, coronas estéticas y más. Utilizamos las técnicas más avanzadas para lograr resultados naturales y duraderos.', 200.00, 2500.00, 'Estética', 1),
('Implantes Dentales', 'implantes-dentales', 'Recupera la funcionalidad completa de tu dentadura.', 'Los implantes dentales son la solución más avanzada para reemplazar dientes perdidos. Ofrecemos implantes de titanio de alta calidad con garantía y seguimiento personalizado.', 1200.00, 3500.00, 'Implantología', 2),
('Odontología Integral', 'odontologia-integral', 'Cuidado completo para toda la familia.', 'Servicios completos de odontología preventiva y curativa: limpiezas, empastes, endodoncias, extracciones y más. Atención personalizada para todas las edades.', 50.00, 800.00, 'General', 3),
('Ortodoncia', 'ortodoncia', 'Corrige la posición de tus dientes con tratamientos modernos.', 'Ofrecemos ortodoncia tradicional con brackets y ortodoncia invisible con alineadores transparentes. Planes de tratamiento personalizados para cada paciente.', 1500.00, 4000.00, 'Ortodoncia', 4),
('Cirugía Oral', 'cirugia-oral', 'Procedimientos quirúrgicos especializados.', 'Realizamos extracciones complejas, cirugía de muelas del juicio, injertos óseos y otros procedimientos quirúrgicos con las máximas garantías de seguridad.', 150.00, 2000.00, 'Cirugía', 5),
('Periodoncia', 'periodoncia', 'Tratamiento especializado de encías.', 'Diagnóstico y tratamiento de enfermedades de las encías. Desde limpiezas profundas hasta cirugías periodontales para mantener tus encías sanas.', 100.00, 1500.00, 'Periodoncia', 6);

-- Insert default available slots (Monday to Friday, 9 AM to 6 PM)
INSERT INTO public.available_slots (day_of_week, start_time, end_time) VALUES
(1, '09:00', '10:00'), (1, '10:00', '11:00'), (1, '11:00', '12:00'), (1, '12:00', '13:00'),
(1, '15:00', '16:00'), (1, '16:00', '17:00'), (1, '17:00', '18:00'),
(2, '09:00', '10:00'), (2, '10:00', '11:00'), (2, '11:00', '12:00'), (2, '12:00', '13:00'),
(2, '15:00', '16:00'), (2, '16:00', '17:00'), (2, '17:00', '18:00'),
(3, '09:00', '10:00'), (3, '10:00', '11:00'), (3, '11:00', '12:00'), (3, '12:00', '13:00'),
(3, '15:00', '16:00'), (3, '16:00', '17:00'), (3, '17:00', '18:00'),
(4, '09:00', '10:00'), (4, '10:00', '11:00'), (4, '11:00', '12:00'), (4, '12:00', '13:00'),
(4, '15:00', '16:00'), (4, '16:00', '17:00'), (4, '17:00', '18:00'),
(5, '09:00', '10:00'), (5, '10:00', '11:00'), (5, '11:00', '12:00'), (5, '12:00', '13:00'),
(5, '15:00', '16:00'), (5, '16:00', '17:00'), (5, '17:00', '18:00');

-- Insert default site settings
INSERT INTO public.site_settings (setting_key, setting_value, description) VALUES
('clinic_name', '"One Dental"', 'Name of the dental clinic'),
('clinic_phone', '"+34 123 456 789"', 'Main phone number'),
('clinic_email', '"info@onedental.com"', 'Main email address'),
('clinic_address', '"Calle Principal 123, Madrid, España"', 'Clinic address'),
('business_hours', '{"monday": "9:00-18:00", "tuesday": "9:00-18:00", "wednesday": "9:00-18:00", "thursday": "9:00-18:00", "friday": "9:00-18:00", "saturday": "Closed", "sunday": "Closed"}', 'Business operating hours'),
('social_media', '{"facebook": "https://facebook.com/onedental", "instagram": "https://instagram.com/onedental", "twitter": "https://twitter.com/onedental"}', 'Social media links'),
('referral_reward', '50.00', 'Referral reward amount in EUR'),
('appointment_booking_enabled', 'true', 'Enable/disable online appointment booking'),
('emergency_phone', '"+34 987 654 321"', 'Emergency contact number'),
('whatsapp_number', '"+34 123 456 789"', 'WhatsApp contact number');

-- Create indexes for better performance
CREATE INDEX idx_profiles_role ON public.profiles(role);
CREATE INDEX idx_profiles_email ON public.profiles(email);
CREATE INDEX idx_appointments_patient_id ON public.appointments(patient_id);
CREATE INDEX idx_appointments_date_time ON public.appointments(appointment_date, appointment_time);
CREATE INDEX idx_appointments_status ON public.appointments(status);
CREATE INDEX idx_referrals_referrer_id ON public.referrals(referrer_id);
CREATE INDEX idx_referrals_code ON public.referrals(referral_code);
CREATE INDEX idx_referrals_status ON public.referrals(status);
CREATE INDEX idx_contact_messages_status ON public.contact_messages(status);
CREATE INDEX idx_contact_messages_created_at ON public.contact_messages(created_at);
CREATE INDEX idx_services_active ON public.services(is_active);
CREATE INDEX idx_services_category ON public.services(category);
CREATE INDEX idx_page_views_created_at ON public.page_views(created_at);
CREATE INDEX idx_conversions_created_at ON public.conversions(created_at);
CREATE INDEX idx_blog_posts_published ON public.blog_posts(is_published);
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);

-- Add comments for documentation
COMMENT ON TABLE public.profiles IS 'Extended user profiles with role-based access';
COMMENT ON TABLE public.services IS 'Dental services offered by the clinic';
COMMENT ON TABLE public.appointments IS 'Patient appointments and scheduling';
COMMENT ON TABLE public.referrals IS 'Patient referral system for rewards';
COMMENT ON TABLE public.contact_messages IS 'Contact form submissions and inquiries';
COMMENT ON TABLE public.newsletter_subscriptions IS 'Newsletter email subscriptions';
COMMENT ON TABLE public.blog_posts IS 'Blog content for SEO and patient education';
COMMENT ON TABLE public.page_views IS 'Website analytics and page tracking';
COMMENT ON TABLE public.conversions IS 'Conversion tracking for marketing analysis';
COMMENT ON TABLE public.site_settings IS 'Configurable site settings and preferences';

COMMENT ON COLUMN public.profiles.role IS 'User role: patient, admin, or staff';
COMMENT ON COLUMN public.appointments.status IS 'Appointment status: pending, confirmed, completed, cancelled, no_show';
COMMENT ON COLUMN public.referrals.referral_code IS 'Unique referral code for sharing';
COMMENT ON COLUMN public.contact_messages.status IS 'Message status: new, in_progress, resolved, closed';

-- Final success message
SELECT 'One Dental database schema created successfully!' as message;
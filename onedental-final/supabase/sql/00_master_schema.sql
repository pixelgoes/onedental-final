-- Master schema file that runs all database setup scripts in order
-- This file should be executed to set up the complete database schema

-- Execute all schema files in order
\i 01_profiles.sql
\i 02_referrals.sql
\i 03_appointments.sql
\i 04_contact_submissions.sql
\i 05_services.sql
\i 06_admin_settings.sql
\i 07_analytics.sql
\i 08_notifications.sql

-- Create some utility functions

-- Function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin(user_uuid UUID DEFAULT auth.uid())
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM profiles
        WHERE id = user_uuid AND role = 'admin'
    );
END;
$$;

-- Function to get user role
CREATE OR REPLACE FUNCTION get_user_role(user_uuid UUID DEFAULT auth.uid())
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    user_role TEXT;
BEGIN
    SELECT role INTO user_role
    FROM profiles
    WHERE id = user_uuid;
    
    RETURN COALESCE(user_role, 'patient');
END;
$$;

-- Function to create notification
CREATE OR REPLACE FUNCTION create_notification(
    target_user_id UUID,
    notification_title TEXT,
    notification_message TEXT,
    notification_type TEXT DEFAULT 'info',
    notification_category TEXT DEFAULT 'general',
    notification_priority TEXT DEFAULT 'normal',
    action_url TEXT DEFAULT NULL,
    action_text TEXT DEFAULT NULL,
    expires_in_days INTEGER DEFAULT 30
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    notification_id UUID;
BEGIN
    INSERT INTO notifications (
        user_id,
        title,
        message,
        type,
        category,
        priority,
        action_url,
        action_text,
        expires_at
    ) VALUES (
        target_user_id,
        notification_title,
        notification_message,
        notification_type,
        notification_category,
        notification_priority,
        action_url,
        action_text,
        NOW() + (expires_in_days || ' days')::INTERVAL
    )
    RETURNING id INTO notification_id;
    
    RETURN notification_id;
END;
$$;

-- Function to update referral status when user registers
CREATE OR REPLACE FUNCTION handle_referral_completion()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    referral_record RECORD;
BEGIN
    -- Check if this user was referred
    SELECT * INTO referral_record
    FROM referrals
    WHERE referee_email = NEW.email
      AND status = 'pending'
      AND expires_at > NOW()
    LIMIT 1;
    
    IF referral_record IS NOT NULL THEN
        -- Update referral status to completed
        UPDATE referrals
        SET status = 'completed',
            referee_id = NEW.id,
            completed_at = NOW()
        WHERE id = referral_record.id;
        
        -- Create notification for referrer
        PERFORM create_notification(
            referral_record.referrer_id,
            '¡Referido completado!',
            'Tu referido ' || NEW.email || ' se ha registrado exitosamente. Tu recompensa de €' || referral_record.reward_amount || ' está disponible.',
            'success',
            'referral',
            'normal',
            '/referrals',
            'Ver referidos'
        );
        
        -- Create notification for referee
        PERFORM create_notification(
            NEW.id,
            '¡Bienvenido a One Dental!',
            'Te has registrado exitosamente a través de un referido. ¡Disfruta de nuestros servicios!',
            'success',
            'welcome',
            'normal',
            '/services',
            'Ver servicios'
        );
    ELSE
        -- Create welcome notification for regular users
        PERFORM create_notification(
            NEW.id,
            '¡Bienvenido a One Dental!',
            'Tu cuenta ha sido creada exitosamente. Explora nuestros servicios y reserva tu primera cita.',
            'success',
            'welcome',
            'normal',
            '/services',
            'Ver servicios'
        );
    END IF;
    
    RETURN NEW;
END;
$$;

-- Create trigger for referral completion
CREATE OR REPLACE TRIGGER handle_referral_completion_trigger
    AFTER INSERT ON profiles
    FOR EACH ROW
    EXECUTE FUNCTION handle_referral_completion();

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO authenticated, anon;
GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO authenticated;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_profiles_created_at ON profiles(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON appointments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_referrals_created_at ON referrals(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Final message
SELECT 'Database schema setup completed successfully!' as status;
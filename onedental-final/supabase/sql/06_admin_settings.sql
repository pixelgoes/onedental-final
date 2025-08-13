-- Create admin_settings table for admin panel configuration
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

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_admin_settings_key ON admin_settings(setting_key);
CREATE INDEX IF NOT EXISTS idx_admin_settings_category ON admin_settings(category);
CREATE INDEX IF NOT EXISTS idx_admin_settings_public ON admin_settings(is_public);

-- Enable RLS
ALTER TABLE admin_settings ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view public settings" ON admin_settings
    FOR SELECT USING (is_public = true);

CREATE POLICY "Admins can manage all settings" ON admin_settings
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles
            WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
        )
    );

-- Function to update timestamp
CREATE OR REPLACE FUNCTION update_admin_settings_timestamp()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at := NOW();
    RETURN NEW;
END;
$$;

-- Create trigger
CREATE OR REPLACE TRIGGER update_admin_settings_timestamp_trigger
    BEFORE UPDATE ON admin_settings
    FOR EACH ROW
    EXECUTE FUNCTION update_admin_settings_timestamp();

-- Insert default settings
INSERT INTO admin_settings (setting_key, setting_value, setting_type, category, description, is_public) VALUES
('clinic_name', 'One Dental', 'text', 'clinic_info', 'Nombre de la clínica', true),
('clinic_phone', '+34 900 000 000', 'text', 'clinic_info', 'Teléfono principal', true),
('clinic_email', 'info@onedental.es', 'text', 'clinic_info', 'Email de contacto', true),
('clinic_address', 'Calle Principal, 123, 28001 Madrid', 'text', 'clinic_info', 'Dirección de la clínica', true),
('business_hours', '{"monday": "09:00-18:00", "tuesday": "09:00-18:00", "wednesday": "09:00-18:00", "thursday": "09:00-18:00", "friday": "09:00-18:00", "saturday": "10:00-14:00", "sunday": "closed"}', 'json', 'clinic_info', 'Horarios de atención', true),
('emergency_phone', '+34 900 111 111', 'text', 'clinic_info', 'Teléfono de emergencia', true),
('referral_reward_amount', '50.00', 'number', 'referral_program', 'Monto de recompensa por referido', false),
('appointment_confirmation_enabled', 'true', 'boolean', 'appointments', 'Enviar confirmaciones automáticas', false),
('appointment_reminder_enabled', 'true', 'boolean', 'appointments', 'Enviar recordatorios automáticos', false),
('max_appointments_per_day', '20', 'number', 'appointments', 'Máximo de citas por día', false)
ON CONFLICT (setting_key) DO NOTHING;
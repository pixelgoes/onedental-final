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

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_appointments_patient ON appointments(patient_id);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);
CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(preferred_date);
CREATE INDEX IF NOT EXISTS idx_appointments_datetime ON appointments(appointment_datetime);

-- Enable RLS
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Patients can view own appointments" ON appointments
    FOR SELECT USING (auth.uid() = patient_id);

CREATE POLICY "Patients can create appointments" ON appointments
    FOR INSERT WITH CHECK (auth.uid() = patient_id OR patient_id IS NULL);

CREATE POLICY "Patients can update own appointments" ON appointments
    FOR UPDATE USING (auth.uid() = patient_id);

CREATE POLICY "Admins can manage all appointments" ON appointments
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles
            WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
        )
    );

-- Function to automatically set appointment_datetime
CREATE OR REPLACE FUNCTION set_appointment_datetime()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    IF NEW.preferred_date IS NOT NULL AND NEW.preferred_time IS NOT NULL THEN
        NEW.appointment_datetime := NEW.preferred_date + NEW.preferred_time;
    END IF;
    NEW.updated_at := NOW();
    RETURN NEW;
END;
$$;

-- Create trigger
CREATE OR REPLACE TRIGGER update_appointment_datetime
    BEFORE INSERT OR UPDATE ON appointments
    FOR EACH ROW
    EXECUTE FUNCTION set_appointment_datetime();
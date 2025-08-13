-- Create services table for service management
CREATE TABLE IF NOT EXISTS services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    short_description TEXT,
    price_range TEXT,
    base_price DECIMAL(10,2),
    duration INTEGER, -- in minutes
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

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_services_category ON services(category);
CREATE INDEX IF NOT EXISTS idx_services_active ON services(is_active);
CREATE INDEX IF NOT EXISTS idx_services_featured ON services(is_featured);
CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_services_display_order ON services(display_order);

-- Enable RLS
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view active services" ON services
    FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage services" ON services
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles
            WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
        )
    );

-- Function to generate slug from name
CREATE OR REPLACE FUNCTION generate_service_slug(service_name TEXT)
RETURNS TEXT
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN lower(regexp_replace(trim(service_name), '[^a-zA-Z0-9]+', '-', 'g'));
END;
$$;

-- Function to auto-generate slug and update timestamp
CREATE OR REPLACE FUNCTION update_service_slug_and_timestamp()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    IF NEW.slug IS NULL OR NEW.slug = '' THEN
        NEW.slug := generate_service_slug(NEW.name);
    END IF;
    NEW.updated_at := NOW();
    RETURN NEW;
END;
$$;

-- Create trigger
CREATE OR REPLACE TRIGGER update_service_trigger
    BEFORE INSERT OR UPDATE ON services
    FOR EACH ROW
    EXECUTE FUNCTION update_service_slug_and_timestamp();
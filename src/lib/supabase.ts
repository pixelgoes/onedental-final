import { createClient } from '@supabase/supabase-js'

// Supabase configuration using environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Validate required environment variables
if (!supabaseUrl) {
  throw new Error('Missing VITE_SUPABASE_URL environment variable')
}

if (!supabaseAnonKey) {
  throw new Error('Missing VITE_SUPABASE_ANON_KEY environment variable')
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Database types for better TypeScript support
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name?: string
          phone?: string
          date_of_birth?: string
          address?: string
          emergency_contact?: string
          role: 'patient' | 'admin'
          profile_picture_url?: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string
          phone?: string
          date_of_birth?: string
          address?: string
          emergency_contact?: string
          role?: 'patient' | 'admin'
          profile_picture_url?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          phone?: string
          date_of_birth?: string
          address?: string
          emergency_contact?: string
          role?: 'patient' | 'admin'
          profile_picture_url?: string
          created_at?: string
          updated_at?: string
        }
      }
      referrals: {
        Row: {
          id: string
          referrer_id: string
          referee_email: string
          referee_id?: string
          referral_code: string
          status: 'pending' | 'completed' | 'expired' | 'cancelled'
          reward_amount: number
          reward_claimed: boolean
          expires_at: string
          created_at: string
          completed_at?: string
          claimed_at?: string
        }
        Insert: {
          id?: string
          referrer_id: string
          referee_email: string
          referee_id?: string
          referral_code: string
          status?: 'pending' | 'completed' | 'expired' | 'cancelled'
          reward_amount?: number
          reward_claimed?: boolean
          expires_at?: string
          created_at?: string
          completed_at?: string
          claimed_at?: string
        }
        Update: {
          id?: string
          referrer_id?: string
          referee_email?: string
          referee_id?: string
          referral_code?: string
          status?: 'pending' | 'completed' | 'expired' | 'cancelled'
          reward_amount?: number
          reward_claimed?: boolean
          expires_at?: string
          created_at?: string
          completed_at?: string
          claimed_at?: string
        }
      }
      appointments: {
        Row: {
          id: string
          patient_id?: string
          service_type: string
          service_category?: string
          preferred_date: string
          preferred_time: string
          alternative_dates?: string[]
          status: 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'no_show'
          notes?: string
          patient_name: string
          patient_email: string
          patient_phone: string
          emergency_contact?: string
          medical_history?: string
          insurance_provider?: string
          insurance_number?: string
          admin_notes?: string
          confirmation_sent: boolean
          reminder_sent: boolean
          created_at: string
          updated_at: string
          confirmed_at?: string
          appointment_datetime?: string
        }
        Insert: {
          id?: string
          patient_id?: string
          service_type: string
          service_category?: string
          preferred_date: string
          preferred_time: string
          alternative_dates?: string[]
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'no_show'
          notes?: string
          patient_name: string
          patient_email: string
          patient_phone: string
          emergency_contact?: string
          medical_history?: string
          insurance_provider?: string
          insurance_number?: string
          admin_notes?: string
          confirmation_sent?: boolean
          reminder_sent?: boolean
          created_at?: string
          updated_at?: string
          confirmed_at?: string
          appointment_datetime?: string
        }
        Update: {
          id?: string
          patient_id?: string
          service_type?: string
          service_category?: string
          preferred_date?: string
          preferred_time?: string
          alternative_dates?: string[]
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'no_show'
          notes?: string
          patient_name?: string
          patient_email?: string
          patient_phone?: string
          emergency_contact?: string
          medical_history?: string
          insurance_provider?: string
          insurance_number?: string
          admin_notes?: string
          confirmation_sent?: boolean
          reminder_sent?: boolean
          created_at?: string
          updated_at?: string
          confirmed_at?: string
          appointment_datetime?: string
        }
      }
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          phone?: string
          subject?: string
          message: string
          status: 'new' | 'in_progress' | 'resolved' | 'spam'
          priority: 'low' | 'medium' | 'high' | 'urgent'
          assigned_to?: string
          admin_notes?: string
          follow_up_date?: string
          response_sent: boolean
          created_at: string
          updated_at: string
          resolved_at?: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string
          subject?: string
          message: string
          status?: 'new' | 'in_progress' | 'resolved' | 'spam'
          priority?: 'low' | 'medium' | 'high' | 'urgent'
          assigned_to?: string
          admin_notes?: string
          follow_up_date?: string
          response_sent?: boolean
          created_at?: string
          updated_at?: string
          resolved_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string
          subject?: string
          message?: string
          status?: 'new' | 'in_progress' | 'resolved' | 'spam'
          priority?: 'low' | 'medium' | 'high' | 'urgent'
          assigned_to?: string
          admin_notes?: string
          follow_up_date?: string
          response_sent?: boolean
          created_at?: string
          updated_at?: string
          resolved_at?: string
        }
      }
      services: {
        Row: {
          id: string
          name: string
          slug: string
          description?: string
          short_description?: string
          price_range?: string
          base_price?: number
          duration?: number
          category: string
          subcategory?: string
          is_active: boolean
          is_featured: boolean
          image_url?: string
          gallery_urls?: string[]
          benefits?: string[]
          procedures?: string[]
          before_after_images?: string[]
          seo_title?: string
          seo_description?: string
          seo_keywords?: string[]
          display_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug?: string
          description?: string
          short_description?: string
          price_range?: string
          base_price?: number
          duration?: number
          category: string
          subcategory?: string
          is_active?: boolean
          is_featured?: boolean
          image_url?: string
          gallery_urls?: string[]
          benefits?: string[]
          procedures?: string[]
          before_after_images?: string[]
          seo_title?: string
          seo_description?: string
          seo_keywords?: string[]
          display_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string
          short_description?: string
          price_range?: string
          base_price?: number
          duration?: number
          category?: string
          subcategory?: string
          is_active?: boolean
          is_featured?: boolean
          image_url?: string
          gallery_urls?: string[]
          benefits?: string[]
          procedures?: string[]
          before_after_images?: string[]
          seo_title?: string
          seo_description?: string
          seo_keywords?: string[]
          display_order?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: {
        Args: {
          user_uuid?: string
        }
        Returns: boolean
      }
      get_user_role: {
        Args: {
          user_uuid?: string
        }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// Helper functions for common operations
export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error) {
    console.error('Error getting user:', error)
    return null
  }
  return user
}

export async function getCurrentUserProfile() {
  const user = await getCurrentUser()
  if (!user) return null

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .maybeSingle()

  if (error) {
    console.error('Error getting user profile:', error)
    return null
  }
  
  return data
}

export async function isUserAdmin() {
  const profile = await getCurrentUserProfile()
  return profile?.role === 'admin'
}

export async function signUp(email: string, password: string, userData?: { full_name?: string; phone?: string }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.protocol}//${window.location.host}/auth/callback`
    }
  })

  if (error) {
    console.error('Error signing up:', error.message)
    throw error
  }

  // Create profile if user was created
  if (data.user && !error) {
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: data.user.id,
        email: data.user.email!,
        full_name: userData?.full_name || '',
        phone: userData?.phone || '',
        role: 'patient'
      })

    if (profileError) {
      console.error('Error creating profile:', profileError)
    }
  }

  return data
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    console.error('Error signing in:', error.message)
    throw error
  }

  return data
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.error('Error signing out:', error.message)
    throw error
  }
}

export async function resetPassword(email: string) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.protocol}//${window.location.host}/auth/reset-password`
  })

  if (error) {
    console.error('Error resetting password:', error.message)
    throw error
  }
}
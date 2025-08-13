import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase, getCurrentUser, getCurrentUserProfile, signIn, signOut, signUp, resetPassword } from '../lib/supabase'

interface Profile {
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

interface AuthContextType {
  user: User | null
  profile: Profile | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<any>
  signUp: (email: string, password: string, userData?: { full_name?: string; phone?: string }) => Promise<any>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
  isAdmin: () => boolean
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  // Load user and profile on mount
  useEffect(() => {
    async function loadUser() {
      try {
        const currentUser = await getCurrentUser()
        setUser(currentUser)
        
        if (currentUser) {
          const userProfile = await getCurrentUserProfile()
          setProfile(userProfile)
        }
      } catch (error) {
        console.error('Error loading user:', error)
      } finally {
        setLoading(false)
      }
    }

    loadUser()

    // Set up auth listener - KEEP SIMPLE, avoid any async operations in callback
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        // NEVER use any async operations in callback
        const sessionUser = session?.user || null
        setUser(sessionUser)
        
        if (!sessionUser) {
          setProfile(null)
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  // Refresh profile data
  const refreshProfile = async () => {
    if (user) {
      try {
        const userProfile = await getCurrentUserProfile()
        setProfile(userProfile)
      } catch (error) {
        console.error('Error refreshing profile:', error)
      }
    }
  }

  // Check if user is admin
  const isAdmin = () => {
    return profile?.role === 'admin'
  }

  // Auth methods
  const handleSignIn = async (email: string, password: string) => {
    try {
      const result = await signIn(email, password)
      
      // Load profile after successful sign in
      if (result.user) {
        const userProfile = await getCurrentUserProfile()
        setProfile(userProfile)
      }
      
      return result
    } catch (error) {
      throw error
    }
  }

  const handleSignUp = async (email: string, password: string, userData?: { full_name?: string; phone?: string }) => {
    try {
      const result = await signUp(email, password, userData)
      return result
    } catch (error) {
      throw error
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      setUser(null)
      setProfile(null)
    } catch (error) {
      throw error
    }
  }

  const handleResetPassword = async (email: string) => {
    try {
      await resetPassword(email)
    } catch (error) {
      throw error
    }
  }

  const value = {
    user,
    profile,
    loading,
    signIn: handleSignIn,
    signUp: handleSignUp,
    signOut: handleSignOut,
    resetPassword: handleResetPassword,
    isAdmin,
    refreshProfile
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
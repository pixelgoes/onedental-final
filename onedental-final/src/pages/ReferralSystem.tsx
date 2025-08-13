import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { Database } from '../lib/supabase'
import { Helmet } from 'react-helmet'
import { toast } from 'sonner'

type Referral = Database['public']['Tables']['referrals']['Row']

const ReferralSystem: React.FC = () => {
  const { user, profile } = useAuth()
  const [referrals, setReferrals] = useState<Referral[]>([])
  const [loading, setLoading] = useState(true)
  const [newReferralEmail, setNewReferralEmail] = useState('')
  const [creatingReferral, setCreatingReferral] = useState(false)
  const [stats, setStats] = useState({
    totalReferrals: 0,
    completedReferrals: 0,
    pendingReferrals: 0,
    totalRewards: 0,
    claimedRewards: 0
  })

  useEffect(() => {
    if (user) {
      loadReferrals()
    }
  }, [user])

  const loadReferrals = async () => {
    if (!user) return

    try {
      const { data, error } = await supabase
        .from('referrals')
        .select('*')
        .eq('referrer_id', user.id)
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error loading referrals:', error)
        return
      }

      setReferrals(data || [])
      
      // Calculate stats
      const totalReferrals = data?.length || 0
      const completedReferrals = data?.filter(r => r.status === 'completed').length || 0
      const pendingReferrals = data?.filter(r => r.status === 'pending').length || 0
      const totalRewards = data?.reduce((sum, r) => sum + (r.reward_amount || 0), 0) || 0
      const claimedRewards = data?.filter(r => r.reward_claimed).reduce((sum, r) => sum + (r.reward_amount || 0), 0) || 0

      setStats({
        totalReferrals,
        completedReferrals,
        pendingReferrals,
        totalRewards,
        claimedRewards
      })
    } catch (error) {
      console.error('Error loading referrals:', error)
    } finally {
      setLoading(false)
    }
  }

  const createReferral = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!user || !newReferralEmail) return

    setCreatingReferral(true)

    try {
      const { data, error } = await supabase.functions.invoke('create-referral', {
        body: {
          referrer_id: user.id,
          referree_email: newReferralEmail
        }
      })

      if (error) {
        throw new Error(error.message)
      }

      toast.success('¡Referido creado exitosamente!')
      setNewReferralEmail('')
      loadReferrals() // Reload referrals

      // Show referral URL
      if (data?.data?.referral_url) {
        const referralUrl = data.data.referral_url
        navigator.clipboard.writeText(referralUrl)
        toast.success('Enlace de referido copiado al portapapeles')
      }
    } catch (err: any) {
      console.error('Error creating referral:', err)
      toast.error(err.message || 'Error al crear el referido')
    } finally {
      setCreatingReferral(false)
    }
  }

  const copyReferralUrl = (referralCode: string) => {
    const url = `${window.location.origin}/register?ref=${referralCode}`
    navigator.clipboard.writeText(url)
    toast.success('Enlace copiado al portapapeles')
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getStatusColor = (status: string) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      completed: 'bg-green-100 text-green-800',
      expired: 'bg-red-100 text-red-800',
      cancelled: 'bg-gray-100 text-gray-800'
    }
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getStatusText = (status: string) => {
    const texts = {
      pending: 'Pendiente',
      completed: 'Completado',
      expired: 'Expirado',
      cancelled: 'Cancelado'
    }
    return texts[status as keyof typeof texts] || status
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-lg w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Inicia Sesión</h1>
          <p className="text-gray-600 mb-8">
            Necesitas iniciar sesión para acceder al sistema de referidos.
          </p>
          <a 
            href="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Iniciar Sesión
          </a>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Sistema de Referidos - One Dental</title>
        <meta name="description" content="Refiere amigos y gana recompensas con nuestro sistema de referidos. Por cada amigo que se registre, recibes €50." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Header */}
        <section className="py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sistema de <span className="text-yellow-300">Referidos</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Refiere amigos y familiares y gana €50 por cada referido exitoso
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-semibold text-gray-900">{stats.totalReferrals}</p>
                  <p className="text-gray-600">Total Referidos</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-semibold text-gray-900">{stats.completedReferrals}</p>
                  <p className="text-gray-600">Completados</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-yellow-100">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-semibold text-gray-900">{stats.pendingReferrals}</p>
                  <p className="text-gray-600">Pendientes</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-100">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-semibold text-gray-900">€{stats.claimedRewards}</p>
                  <p className="text-gray-600">Recompensas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Create New Referral */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Crear Nuevo Referido</h2>
                <form onSubmit={createReferral} className="space-y-6">
                  <div>
                    <label htmlFor="referralEmail" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email del Referido
                    </label>
                    <input
                      type="email"
                      id="referralEmail"
                      required
                      value={newReferralEmail}
                      onChange={(e) => setNewReferralEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="email@ejemplo.com"
                      disabled={creatingReferral}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={creatingReferral || !newReferralEmail}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {creatingReferral ? 'Creando...' : 'Crear Referido'}
                  </button>
                </form>

                {/* How it works */}
                <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                  <h3 className="font-semibold text-blue-900 mb-4">¿Cómo funciona?</h3>
                  <ol className="text-sm text-blue-800 space-y-2">
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                      Ingresa el email de tu amigo/familiar
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                      Comparte el enlace único que se genera
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                      Cuando se registre, ¡ambos ganan €50!
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Referrals List */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg">
                <div className="px-8 py-6 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-800">Mis Referidos</h2>
                </div>

                {loading ? (
                  <div className="p-8 text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Cargando referidos...</p>
                  </div>
                ) : referrals.length === 0 ? (
                  <div className="p-8 text-center">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Aún no tienes referidos</h3>
                    <p className="text-gray-600">¡Crea tu primer referido y comienza a ganar recompensas!</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email Referido</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Código</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recompensa</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {referrals.map((referral) => (
                          <tr key={referral.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{referral.referee_email}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded">
                                {referral.referral_code}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(referral.status)}`}>
                                {getStatusText(referral.status)}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {formatDate(referral.created_at)}
                              {referral.expires_at && (
                                <div className="text-xs text-gray-500">
                                  Expira: {formatDate(referral.expires_at)}
                                </div>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">
                                €{referral.reward_amount}
                              </div>
                              {referral.reward_claimed ? (
                                <div className="text-xs text-green-600">Reclamada</div>
                              ) : referral.status === 'completed' ? (
                                <div className="text-xs text-blue-600">Disponible</div>
                              ) : (
                                <div className="text-xs text-gray-500">Pendiente</div>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button
                                onClick={() => copyReferralUrl(referral.referral_code)}
                                className="text-blue-600 hover:text-blue-900 flex items-center"
                              >
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                Copiar
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReferralSystem
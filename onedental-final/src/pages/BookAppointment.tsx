import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { Helmet } from 'react-helmet'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'

interface AppointmentFormData {
  service_type: string
  service_category: string
  preferred_date: string
  preferred_time: string
  alternative_dates: string[]
  patient_name: string
  patient_email: string
  patient_phone: string
  notes: string
  emergency_contact: string
  medical_history: string
  insurance_provider: string
  insurance_number: string
}

const BookAppointment: React.FC = () => {
  const { user, profile } = useAuth()
  const [formData, setFormData] = useState<AppointmentFormData>({
    service_type: '',
    service_category: '',
    preferred_date: '',
    preferred_time: '',
    alternative_dates: [],
    patient_name: profile?.full_name || '',
    patient_email: user?.email || '',
    patient_phone: profile?.phone || '',
    notes: '',
    emergency_contact: profile?.emergency_contact || '',
    medical_history: '',
    insurance_provider: '',
    insurance_number: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [confirmationNumber, setConfirmationNumber] = useState('')
  const [services, setServices] = useState<any[]>([])

  useEffect(() => {
    loadServices()
  }, [])

  useEffect(() => {
    if (profile) {
      setFormData(prev => ({
        ...prev,
        patient_name: profile.full_name || '',
        patient_email: user?.email || '',
        patient_phone: profile.phone || '',
        emergency_contact: profile.emergency_contact || ''
      }))
    }
  }, [profile, user])

  const loadServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('category')
        .order('name')

      if (!error && data) {
        setServices(data)
      } else {
        // Fallback to static services if database is not available
        setServices([
          { name: 'Consulta General', category: 'Preventiva' },
          { name: 'Limpieza Dental', category: 'Preventiva' },
          { name: 'Blanqueamiento Dental', category: 'Estética' },
          { name: 'Carillas de Porcelana', category: 'Estética' },
          { name: 'Implante Dental', category: 'Implantología' },
          { name: 'Ortodoncia', category: 'Ortodoncia' },
          { name: 'Endodoncia', category: 'Tratamiento' },
          { name: 'Cirugía Dental', category: 'Cirugía' }
        ])
      }
    } catch (error) {
      console.error('Error loading services:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { data, error } = await supabase.functions.invoke('book-appointment', {
        body: formData,
        headers: user ? {
          Authorization: `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`
        } : {}
      })

      if (error) {
        throw new Error(error.message)
      }

      setConfirmationNumber(data.data.confirmation_number)
      setSubmitted(true)
      toast.success('¡Cita solicitada exitosamente!')
    } catch (err: any) {
      console.error('Appointment booking error:', err)
      toast.error(err.message || 'Error al solicitar la cita. Por favor, inténtalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  // Get minimum date (tomorrow)
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  // Get maximum date (3 months from now)
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 3)
  const maxDateStr = maxDate.toISOString().split('T')[0]

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Cita Solicitada - One Dental</title>
        </Helmet>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-lg w-full">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">¡Cita Solicitada!</h1>
            <p className="text-gray-600 mb-4">
              Tu solicitud de cita ha sido enviada exitosamente. Nuestro equipo se pondrá en contacto contigo pronto para confirmar la fecha y hora.
            </p>
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800 font-semibold">
                Número de Confirmación: {confirmationNumber}
              </p>
              <p className="text-xs text-blue-600 mt-1">
                Guarda este número para futuras referencias
              </p>
            </div>
            <div className="space-y-3">
              <Link 
                to="/"
                className="block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Volver al Inicio
              </Link>
              {user && (
                <Link 
                  to="/dashboard"
                  className="block bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                >
                  Ver Mi Dashboard
                </Link>
              )}
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>Reservar Cita - One Dental | Solicitar Cita Online</title>
        <meta name="description" content="Reserva tu cita en One Dental de forma rápida y sencilla. Atención personalizada con los mejores especialistas dentales." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Header */}
        <section className="py-16 px-4 text-center bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Reservar <span className="text-yellow-300">Cita</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Solicita tu cita de forma rápida y sencilla
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 px-8 py-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">Solicitud de Cita</h2>
              <p className="text-gray-600 mt-2">
                Completa el formulario y nos pondremos en contacto contigo para confirmar tu cita.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Service Selection */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipo de Servicio *
                  </label>
                  <select
                    name="service_type"
                    required
                    value={formData.service_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.name}>
                        {service.name} ({service.category})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date and Time */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Fecha Preferida *
                  </label>
                  <input
                    type="date"
                    name="preferred_date"
                    required
                    min={minDate}
                    max={maxDateStr}
                    value={formData.preferred_date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Hora Preferida *
                  </label>
                  <select
                    name="preferred_time"
                    required
                    value={formData.preferred_time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecciona una hora</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
                </div>

                {/* Patient Information */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="patient_name"
                    required
                    value={formData.patient_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="patient_email"
                    required
                    value={formData.patient_email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="patient_phone"
                    required
                    value={formData.patient_phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+34 600 000 000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Contacto de Emergencia
                  </label>
                  <input
                    type="text"
                    name="emergency_contact"
                    value={formData.emergency_contact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nombre y teléfono de contacto de emergencia"
                  />
                </div>

                {/* Insurance Information */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Seguro Médico
                  </label>
                  <input
                    type="text"
                    name="insurance_provider"
                    value={formData.insurance_provider}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nombre del seguro (opcional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Número de Póliza
                  </label>
                  <input
                    type="text"
                    name="insurance_number"
                    value={formData.insurance_number}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Número de póliza (opcional)"
                  />
                </div>

                {/* Medical History */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Historial Médico Relevante
                  </label>
                  <textarea
                    name="medical_history"
                    rows={3}
                    value={formData.medical_history}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Menciona alergias, medicamentos, condiciones médicas relevantes..."
                  />
                </div>

                {/* Additional Notes */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Notas Adicionales
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Cualquier información adicional que consideres importante..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-lg"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando Solicitud...
                    </div>
                  ) : (
                    'Solicitar Cita'
                  )}
                </button>
                <p className="text-sm text-gray-500 mt-3 text-center">
                  Nos pondremos en contacto contigo dentro de las próximas 24 horas para confirmar tu cita.
                </p>
              </div>
            </form>
          </div>

          {/* Additional Information */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Horarios</h3>
              <p className="text-sm text-gray-600">
                Lun - Vie: 9:00 - 18:00<br />
                Sábado: 10:00 - 14:00
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Urgencias</h3>
              <p className="text-sm text-gray-600">
                Para urgencias:<br />
                <strong>+34 900 111 111</strong>
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Ubicación</h3>
              <p className="text-sm text-gray-600">
                Calle Principal, 123<br />
                28001 Madrid
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookAppointment
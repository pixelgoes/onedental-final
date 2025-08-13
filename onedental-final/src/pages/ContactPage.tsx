import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
// import { useAuth } from '../../contexts/AuthContext'
import { supabase } from '../lib/supabase'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const ContactPage: React.FC = () => {
  // const { user } = useAuth()
  const user = null
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: user?.email || '',
    phone: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Submit via Supabase edge function
      const { data, error } = await supabase.functions.invoke('contact-form', {
        body: formData
      })

      if (error) {
        throw new Error(error.message)
      }

      setSubmitted(true)
      setFormData({
        name: '',
        email: user?.email || '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (err: any) {
      console.error('Contact form error:', err)
      setError(err.message || 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Mensaje Enviado - One Dental</title>
        </Helmet>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-lg w-full">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">¡Mensaje Enviado!</h1>
            <p className="text-gray-600 mb-8">
              Gracias por contactarnos. Hemos recibido tu mensaje y nuestro equipo se pondrá en contacto contigo pronto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Volver al Inicio
              </Link>
              <button 
                onClick={() => setSubmitted(false)}
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
              >
                Enviar Otro Mensaje
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>Contacto - One Dental | Clínica Dental en Madrid</title>
        <meta name="description" content="Contacta con One Dental. Te ayudamos con todas tus consultas sobre tratamientos dentales. Primera consulta gratuita." />
        <meta name="keywords" content="contacto, clínica dental Madrid, consulta dental, cita dentista" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contacta con <span className="text-yellow-300">Nosotros</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Estamos aquí para ayudarte con todas tus consultas sobre salud dental
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+34 600 000 000"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="Cita">Solicitar Cita</option>
                    <option value="Información">Información sobre Tratamientos</option>
                    <option value="Urgencia">Urgencia Dental</option>
                    <option value="Presupuesto">Solicitar Presupuesto</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Dirección</h4>
                      <p className="text-gray-600">Calle Principal, 123<br />28001 Madrid, España</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Teléfono</h4>
                      <p className="text-gray-600">+34 900 000 000</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">info@onedental.es</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Horario</h4>
                      <p className="text-gray-600">
                        Lun - Vie: 9:00 - 18:00<br />
                        Sábado: 10:00 - 14:00<br />
                        Domingo: Cerrado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Urgencias Dentales</h3>
                <p className="mb-4 opacity-90">
                  Para urgencias dentales fuera del horario de atención:
                </p>
                <a 
                  href="tel:+34900111111"
                  className="inline-flex items-center bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +34 900 111 111
                </a>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Acciones Rápidas</h3>
                <div className="space-y-3">
                  <Link 
                    to="/primera-consulta-gratuita"
                    className="block bg-white/20 hover:bg-white/30 px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Primera Consulta Gratuita
                  </Link>
                  <Link 
                    to="/urgencias-dentales"
                    className="block bg-white/20 hover:bg-white/30 px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Urgencias Dentales
                  </Link>
                  <Link 
                    to="/calculadora-precios"
                    className="block bg-white/20 hover:bg-white/30 px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Calculadora de Precios
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
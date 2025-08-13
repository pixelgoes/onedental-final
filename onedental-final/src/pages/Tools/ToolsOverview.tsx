import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const ToolsOverview: React.FC = () => {
  const tools = [
    {
      id: 'calculadora-precios',
      title: 'Calculadora de Precios',
      description: 'Estima el costo de tus tratamientos dentales de forma rápida y precisa',
      icon: '📊',
      color: 'from-blue-500 to-blue-600',
      link: '/calculadora-precios',
      features: ['Presupuesto instantáneo', 'Múltiples tratamientos', 'Opciones de financiación']
    },
    {
      id: 'tour-virtual',
      title: 'Tour Virtual 360°',
      description: 'Explora nuestras instalaciones desde la comodidad de tu hogar',
      icon: '🏥',
      color: 'from-green-500 to-green-600',
      link: '/tour-virtual',
      features: ['Visita virtual completa', 'Tecnología 360°', 'Consultorios y equipos']
    },
    {
      id: 'simulador-sonrisa',
      title: 'Simulador de Sonrisa AR',
      description: 'Visualiza cómo quedaría tu nueva sonrisa con realidad aumentada',
      icon: '😊',
      color: 'from-purple-500 to-purple-600',
      link: '/simulador-sonrisa',
      features: ['Realidad aumentada', 'Vista previa instantánea', 'Diferentes tratamientos']
    },
    {
      id: 'testimonios-dinamicos',
      title: 'Testimonios Interactivos',
      description: 'Conoce las experiencias reales de nuestros pacientes',
      icon: '⭐',
      color: 'from-yellow-500 to-orange-500',
      link: '/testimonios-dinamicos',
      features: ['Vídeos reales', 'Historias de éxito', 'Antes y después']
    },
    {
      id: 'chat-bot',
      title: 'Asistente Virtual IA',
      description: 'Obtén respuestas inmediatas a tus consultas dentales',
      icon: '🤖',
      color: 'from-cyan-500 to-blue-500',
      link: '/chat-bot-inteligente',
      features: ['Disponible 24/7', 'Respuestas personalizadas', 'Consultas especializadas']
    },
    {
      id: 'sistema-citas',
      title: 'Sistema de Citas Online',
      description: 'Reserva y gestiona tus citas de manera fácil y rápida',
      icon: '📅',
      color: 'from-red-500 to-pink-500',
      link: '/sistema-citas',
      features: ['Reserva instantánea', 'Recordatorios automáticos', 'Historial completo']
    }
  ]

  return (
    <>
      <Helmet>
        <title>Herramientas Digitales - One Dental | Innovación Dental</title>
        <meta name="description" content="Descubre nuestras herramientas digitales innovadoras: calculadora de precios, tour virtual, simulador de sonrisa AR y más." />
        <meta name="keywords" content="herramientas dentales, tecnología dental, simulador sonrisa, calculadora precios, tour virtual" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-green-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Herramientas <span className="text-yellow-300">Digitales</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Experimenta el futuro de la odontología con nuestras herramientas tecnológicas avanzadas
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/book-appointment" 
                className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
              >
                Reservar Cita
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contactar
              </Link>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Innovación al Servicio de tu Sonrisa
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Utilizamos las últimas tecnologías para ofrecerte una experiencia dental única y personalizada
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool) => (
                <div 
                  key={tool.id} 
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Card Header */}
                  <div className={`bg-gradient-to-r ${tool.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{tool.icon}</div>
                      <div className="opacity-20 group-hover:opacity-40 transition-opacity">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                    <p className="opacity-90 text-sm">{tool.description}</p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <ul className="space-y-2 mb-6">
                      {tool.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to={tool.link}
                      className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${tool.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 group-hover:scale-105`}
                    >
                      Usar Herramienta
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Ventajas de Nuestras Herramientas
              </h2>
              <p className="text-xl text-gray-600">
                Tecnología que hace la diferencia en tu experiencia dental
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Rapidez y Eficiencia</h3>
                <p className="text-gray-600">
                  Obtén resultados inmediatos y toma decisiones informadas sobre tu tratamiento dental.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Precisión Garantizada</h3>
                <p className="text-gray-600">
                  Herramientas calibradas y validadas por nuestros especialistas para resultados precisos.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Experiencia Personalizada</h3>
                <p className="text-gray-600">
                  Cada herramienta se adapta a tus necesidades específicas para una atención única.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Experimentar el Futuro Dental?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Descubre cómo nuestras herramientas pueden transformar tu experiencia dental
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/book-appointment"
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors text-lg"
              >
                Reservar Cita Ahora
              </Link>
              <Link 
                to="/primera-consulta-gratuita"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
              >
                Consulta Gratis
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ToolsOverview
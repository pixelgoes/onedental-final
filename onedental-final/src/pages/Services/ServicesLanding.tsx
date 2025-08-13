import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { supabase } from '../../lib/supabase'
import { Database } from '../../lib/supabase'

type Service = Database['public']['Tables']['services']['Row']

const ServicesLanding: React.FC = () => {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  useEffect(() => {
    async function loadServices() {
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .eq('is_active', true)
          .order('display_order', { ascending: true })
          .order('created_at', { ascending: false })

        if (error) {
          console.error('Error loading services:', error)
          // Fallback to static data if database isn't available
          setServices(staticServices)
        } else {
          setServices(data || [])
        }
      } catch (error) {
        console.error('Error loading services:', error)
        setServices(staticServices)
      } finally {
        setLoading(false)
      }
    }

    loadServices()
  }, [])

  // Static fallback data
  const staticServices: Partial<Service>[] = [
    {
      id: '1',
      name: 'Estética Dental',
      slug: 'estetica-dental',
      short_description: 'Transforma tu sonrisa con nuestros tratamientos de estética dental avanzada',
      category: 'Estética',
      image_url: '/images/blanqueamiento_1.jpg',
      price_range: '€200 - €800',
      is_featured: true
    },
    {
      id: '2',
      name: 'Implantes Dentales',
      slug: 'implantes-dentales',
      short_description: 'Recupera la funcionalidad completa de tu sonrisa con implantes de última generación',
      category: 'Implantología',
      image_url: '/images/implante-dental.jpg',
      price_range: '€800 - €2000',
      is_featured: true
    },
    {
      id: '3',
      name: 'Blanqueamiento Dental',
      slug: 'blanqueamiento-dental',
      short_description: 'Consigue una sonrisa más blanca y brillante de forma segura y efectiva',
      category: 'Estética',
      image_url: '/images/blanqueamiento_5.jpg',
      price_range: '€150 - €400'
    },
    {
      id: '4',
      name: 'Ortodoncia',
      slug: 'ortodoncia',
      short_description: 'Corrige la posición de tus dientes con técnicas ortodóncicas modernas',
      category: 'Ortodoncia',
      image_url: '/images/doctor-profesional.jpg',
      price_range: '€1500 - €3500'
    },
    {
      id: '5',
      name: 'Carillas de Porcelana',
      slug: 'carillas-porcelana',
      short_description: 'Mejora la apariencia de tus dientes con carillas de porcelana personalizadas',
      category: 'Estética',
      image_url: '/images/carillas-dentales.jpg',
      price_range: '€400 - €800'
    },
    {
      id: '6',
      name: 'Higiene Dental',
      slug: 'higiene-dental',
      short_description: 'Mantén tu salud bucal con limpiezas profesionales y tratamientos preventivos',
      category: 'Preventiva',
      image_url: '/images/clinica-moderna_1.jpg',
      price_range: '€60 - €120'
    }
  ]

  const categories = ['all', 'Estética', 'Implantología', 'Ortodoncia', 'Preventiva']
  
  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

  const featuredServices = services.filter(service => service.is_featured)

  return (
    <>
      <Helmet>
        <title>Nuestros Servicios - One Dental | Clínica Dental en Madrid</title>
        <meta name="description" content="Descubre todos nuestros servicios dentales: estética dental, implantes, ortodoncia, blanqueamiento y más. Tecnología avanzada y atención personalizada." />
        <meta name="keywords" content="servicios dentales, estética dental, implantes dentales, ortodoncia, blanqueamiento, Madrid" />
        <link rel="canonical" href="https://onedental.es/services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nuestros <span className="text-yellow-300">Servicios</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Ofrecemos una amplia gama de tratamientos dentales con tecnología de vanguardia 
              y la experiencia de nuestro equipo especializado.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
              >
                Solicitar Cita
              </Link>
              <Link 
                to="/primera-consulta-gratuita" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Primera Consulta Gratis
              </Link>
            </div>
          </div>
        </section>

        {/* Services Filter */}
        <section className="py-12 px-4 bg-white shadow-sm">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'Todos los Servicios' : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        {selectedCategory === 'all' && featuredServices.length > 0 && (
          <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-green-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                Servicios Destacados
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredServices.map((service) => (
                  <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img 
                        src={service.image_url || '/images/clinica-moderna.jpg'} 
                        alt={service.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                        Destacado
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{service.name}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.short_description || service.description}
                      </p>
                      {service.price_range && (
                        <div className="flex items-center mb-4">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {service.price_range}
                          </span>
                        </div>
                      )}
                      <Link 
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Ver Detalles
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
        )}

        {/* All Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              {selectedCategory === 'all' ? 'Todos Nuestros Servicios' : `Servicios de ${selectedCategory}`}
            </h2>
            
            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                    <div className="bg-gray-300 h-48 w-full"></div>
                    <div className="p-6">
                      <div className="h-6 bg-gray-300 rounded mb-3"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredServices.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img 
                        src={service.image_url || '/images/clinica-moderna.jpg'} 
                        alt={service.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                        {service.category && (
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                            {service.category}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.short_description || service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        {service.price_range && (
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {service.price_range}
                          </span>
                        )}
                        <Link 
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                        >
                          Ver Más
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg mb-4">
                  No hay servicios disponibles en esta categoría
                </div>
                <button 
                  onClick={() => setSelectedCategory('all')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Ver Todos los Servicios
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Mejorar tu Sonrisa?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nuestro equipo de especialistas está aquí para ayudarte a conseguir la sonrisa que siempre has deseado.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact"
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors text-lg"
              >
                Solicitar Consulta
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

export default ServicesLanding
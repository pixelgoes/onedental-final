import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Clock, Euro, Check, Phone, Mail, MapPin, Star, Quote } from 'lucide-react';

interface ServiceDetail {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  features: string[];
  process: string[];
  duration: string;
  price: string;
  category: string;
  image: string;
  beforeAfter: Array<{
    before: string;
    after: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<ServiceDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const loadService = async () => {
      try {
        const response = await fetch('/data/services-detail.json');
        const services = await response.json();
        
        const foundService = services.find((s: ServiceDetail) => s.slug === slug);
        if (foundService) {
          setService(foundService);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error loading service:', error);
        setLoading(false);
      }
    };

    loadService();
  }, [slug]);

  useEffect(() => {
    // Actualizar meta tags
    if (service) {
      document.title = service.metaTitle;
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', service.metaDescription);
      }
      
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', service.keywords.join(', '));
      }
    }
  }, [service]);

  const renderContent = (content: string) => {
    let html = content
      .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h2>')
      .replace(/### (.*)/g, '<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">$1</h3>')
      .replace(/#### (.*)/g, '<h4 class="text-lg font-bold text-gray-900 mt-4 mb-2">$1</h4>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/- (.*)/g, '<li class="mb-2">$1</li>');

    html = html.replace(/(<li class="mb-2">.*<\/li>)/gs, '<ul class="list-disc pl-6 mb-6 space-y-2">$1</ul>');
    html = '<p class="mb-4">' + html + '</p>';

    return { __html: html };
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando servicio...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Servicio no encontrado</h1>
          <p className="text-gray-600 mb-8">Lo sentimos, no pudimos encontrar el servicio que buscas.</p>
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <nav className="bg-white border-b py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/servicios" className="hover:text-blue-600 transition-colors">Servicios</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">{service.title}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  {service.category}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {service.title}
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-300" />
                    <span className="text-blue-100">Duración: {service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Euro className="h-5 w-5 text-blue-300" />
                    <span className="text-blue-100">Desde: {service.price}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Solicitar consulta gratuita
                  </button>
                  <a
                    href="tel:+34976123456"
                    className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-center"
                  >
                    Llamar ahora
                  </a>
                </div>
              </div>
              
              <div className="lg:text-right">
                <div className="inline-block bg-white rounded-xl p-8 shadow-2xl">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características Principales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              ¿Por qué elegir este tratamiento?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proceso del Tratamiento */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Proceso del Tratamiento
            </h2>
            
            <div className="space-y-8">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Paso {index + 1}
                    </h3>
                    <p className="text-gray-700">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contenido Detallado */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg prose-blue max-w-none"
              dangerouslySetInnerHTML={renderContent(service.content)}
            />
          </div>
        </div>
      </section>

      {/* Casos Antes/Después */}
      {service.beforeAfter.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Casos de Éxito
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.beforeAfter.map((caso, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="grid grid-cols-2">
                      <div className="aspect-square bg-gray-200">
                        <img 
                          src={caso.before} 
                          alt="Antes"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-square bg-gray-200">
                        <img 
                          src={caso.after} 
                          alt="Después"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
                        <span>Antes</span>
                        <span>Después</span>
                      </div>
                      <p className="text-gray-700 text-sm">{caso.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Preguntas Frecuentes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Preguntas Frecuentes
            </h2>
            
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Lo que dicen nuestros pacientes
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "María González",
                  treatment: service.title,
                  text: `El resultado de mi ${service.title.toLowerCase()} superó todas mis expectativas. El equipo de OneDental fue excepcional en todo momento.`,
                  rating: 5
                },
                {
                  name: "Carlos Rodríguez", 
                  treatment: service.title,
                  text: `Profesionalidad y tecnología de vanguardia. Recomiendo OneDental al 100% para cualquier tratamiento dental.`,
                  rating: 5
                },
                {
                  name: "Ana Martín",
                  treatment: service.title,
                  text: `Una experiencia increíble desde la primera consulta. El resultado es exactamente lo que esperaba.`,
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-blue-600 opacity-50" />
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.treatment}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para tu {service.title}?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Comienza tu transformación con una consulta gratuita. Nuestro equipo te guiará en cada paso.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                <h3 className="font-bold mb-2">Llama ahora</h3>
                <p className="text-blue-100">+34 976 123 456</p>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-blue-100">info@onedental-zaragoza.com</p>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                <h3 className="font-bold mb-2">Visítanos</h3>
                <p className="text-blue-100">Calle Ejemplo, 123, Zaragoza</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Solicitar consulta gratuita
              </button>
              <Link
                to="/instalaciones"
                className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Ver instalaciones
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Contacto */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Solicitar Consulta Gratuita
              </h3>
              <p className="text-gray-600 mb-6">
                Completa el formulario y te contactaremos en menos de 24 horas.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tu teléfono"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tu email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Cuéntanos más sobre tu caso"
                  />
                </div>
                
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Enviar solicitud
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="px-4 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;

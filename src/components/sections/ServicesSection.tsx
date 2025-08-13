import React, { useState } from 'react';
import { Sparkles, Settings, Building, ChevronRight, Check, Star } from '../icons/LucideIcons';

interface Service {
  name: string;
  description: string;
  features: string[];
  price: string;
}

interface ServiceCategory {
  category: string;
  icon: string;
  services: Service[];
}

const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const serviceCategories: ServiceCategory[] = [
    {
      category: "Estética Dental",
      icon: "✨",
      services: [
        {
          name: "Digital Smile Design",
          description: "Diseño digital de sonrisa con tecnología 3D de vanguardia",
          features: ["Simulación 3D", "Previsualización del resultado", "Precisión milimétrica"],
          price: "Desde 1.200€"
        },
        {
          name: "Carillas de Porcelana",
          description: "Carillas ultrafinas que transforman tu sonrisa",
          features: ["Porcelana de alta calidad", "Resultado natural", "Durabilidad garantizada"],
          price: "Desde 450€/pieza"
        },
        {
          name: "Blanqueamiento Dental",
          description: "Blanqueamiento profesional seguro y efectivo",
          features: ["Hasta 8 tonos más blanco", "Sin sensibilidad", "Resultados inmediatos"],
          price: "Desde 350€"
        }
      ]
    },
    {
      category: "Implantes Dentales",
      icon: "🦷",
      services: [
        {
          name: "Implantes Guiados por Ordenador",
          description: "Implantología asistida por ordenador para máxima precisión",
          features: ["Cirugía guiada", "Menor tiempo quirúrgico", "Mayor precisión"],
          price: "Desde 890€"
        },
        {
          name: "Implantes Inmediatos",
          description: "Implante y corona provisional en el mismo día",
          features: ["Una sola sesión", "Sin período de espera", "Funcionalidad inmediata"],
          price: "Desde 1.200€"
        },
        {
          name: "Regeneración Ósea",
          description: "Técnicas avanzadas de regeneración para casos complejos",
          features: ["Biomateriales avanzados", "Recuperación óptima", "Casos complejos"],
          price: "Desde 650€"
        }
      ]
    },
    {
      category: "Odontología Integral",
      icon: "🏥",
      services: [
        {
          name: "Periodoncia",
          description: "Tratamiento de encías y prevención de enfermedades periodontales",
          features: ["Diagnóstico avanzado", "Tratamientos mínimamente invasivos", "Mantenimiento personalizado"],
          price: "Desde 120€"
        },
        {
          name: "Endodoncia",
          description: "Tratamiento de conductos con tecnología rotatoria",
          features: ["Técnica microscópica", "Mayor tasa de éxito", "Menor molestia"],
          price: "Desde 280€"
        },
        {
          name: "Ortodoncia",
          description: "Corrección de malposiciones dentales",
          features: ["Brackets metálicos/estéticos", "Ortodoncia invisible", "Tratamiento personalizado"],
          price: "Desde 2.500€"
        }
      ]
    }
  ];

  const getIconComponent = (category: string) => {
    switch (category) {
      case "Estética Dental":
        return <Sparkles className="w-6 h-6" />;
      case "Implantes Dentales":
        return <Settings className="w-6 h-6" />;
      case "Odontología Integral":
        return <Building className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde estética dental con Digital Smile Design hasta implantes guiados por ordenador. 
            Tecnología de vanguardia para transformar tu sonrisa.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-col lg:flex-row justify-center mb-12">
          <div className="flex flex-col lg:flex-row bg-white rounded-xl p-2 shadow-lg max-w-4xl mx-auto">
            {serviceCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-lg transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {getIconComponent(category.category)}
                <span className="font-semibold">{category.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {serviceCategories[activeCategory].services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => setSelectedService(service)}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-500">Características:</span>
                  <span className="text-lg font-bold text-blue-600">{service.price}</span>
                </div>
                <ul className="space-y-2">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 2 && (
                    <li className="text-sm text-gray-500">
                      +{service.features.length - 2} características más
                    </li>
                  )}
                </ul>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <span>Más Información</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Featured Service Highlight */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">SERVICIO DESTACADO</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Digital Smile Design
              </h3>
              <p className="text-xl mb-6 text-blue-100">
                Pioneros en Zaragoza en esta revolucionaria tecnología que te permite 
                ver tu nueva sonrisa antes del tratamiento.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Simulación 3D de tu nueva sonrisa</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Previsualización del resultado final</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Precisión milimétrica garantizada</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#cita"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Consulta Gratuita
                </a>
                <a
                  href="#casos"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  Ver Casos de Éxito
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">🦷</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Transformación Digital</h4>
                  <p className="text-gray-600 mb-4">Tecnología 3D de vanguardia</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">Desde 1.200€</div>
                    <div className="text-sm text-gray-600">Primera consulta GRATUITA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿No encuentras el tratamiento que buscas?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios dentales. Contacta con nosotros para 
            una consulta personalizada y descubre cómo podemos ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contacto"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contactar Ahora
            </a>
            <a
              href="tel:976527761"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              📞 976 527 761
            </a>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedService.name}</h3>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-600 mb-6">{selectedService.description}</p>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Características incluidas:</h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-bold text-blue-600">{selectedService.price}</span>
                <span className="text-sm text-gray-500">Primera consulta GRATUITA</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="#cita"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-center transition-colors"
                  onClick={() => setSelectedService(null)}
                >
                  Solicitar Cita
                </a>
                <a
                  href="tel:976527761"
                  className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  Llamar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;

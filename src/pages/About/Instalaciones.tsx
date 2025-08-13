import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, X, Check, Shield, Award, Zap, Heart } from 'lucide-react';

interface Area {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  highlights: string[];
}

interface Certification {
  name: string;
  description: string;
  type: string;
}

interface Technology {
  name: string;
  description: string;
  benefits: string[];
}

interface InstalacionesData {
  title: string;
  description: string;
  introduction: string;
  areas: Area[];
  certifications: Certification[];
  technology: Technology[];
  safety_measures: string[];
  accessibility: string[];
  virtual_tour: {
    available: boolean;
    description: string;
    sections: string[];
  };
  schedule_visit: {
    title: string;
    description: string;
    contact: {
      phone: string;
      email: string;
      address: string;
    };
  };
}

const Instalaciones: React.FC = () => {
  const [data, setData] = useState<InstalacionesData | null>(null);
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);
  const [showVirtualTour, setShowVirtualTour] = useState(false);
  const [loading, setLoading] = useState(true);

  // Cerrar modal con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowVirtualTour(false);
        setSelectedArea(null);
      }
    };

    if (showVirtualTour || selectedArea !== null) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [showVirtualTour, selectedArea]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/data/instalaciones.json');
        const instalacionesData = await response.json();
        setData(instalacionesData);
        setLoading(false);
      } catch (error) {
        console.error('Error loading instalaciones data:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando instalaciones...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Error al cargar</h1>
          <p className="text-gray-600">No pudimos cargar la información de las instalaciones.</p>
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
            <a href="/" className="hover:text-blue-600 transition-colors">Inicio</a>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">Instalaciones</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {data.description}
            </p>
            
            {/* Virtual Tour Button */}
            {data.virtual_tour.available && (
              <button
                onClick={() => setShowVirtualTour(true)}
                className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Play className="h-6 w-6" />
                Tour Virtual
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              {data.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Áreas de la Clínica */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Nuestras Áreas Especializadas
          </h2>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {data.areas.map((area, index) => (
              <div 
                key={area.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedArea(area)}
              >
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img 
                    src={area.image} 
                    alt={area.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {area.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {area.features.slice(0, 3).map((feature, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {area.features.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{area.features.length - 3} más
                      </span>
                    )}
                  </div>
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Ver detalles →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnología */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Tecnología de Vanguardia
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.technology.map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {tech.description}
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {tech.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones y Seguridad */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Certificaciones */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Certificaciones
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {data.certifications.map((cert, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-bold text-gray-900">{cert.name}</h3>
                          <p className="text-gray-600 text-sm">{cert.description}</p>
                          <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {cert.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Medidas de Seguridad */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Seguridad e Higiene
                  </h2>
                </div>
                
                <div className="space-y-3">
                  {data.safety_measures.map((measure, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{measure}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accesibilidad */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Compromiso con la Accesibilidad
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {data.accessibility.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {data.schedule_visit.title}
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              {data.schedule_visit.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${data.schedule_visit.contact.phone}`}
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Llamar ahora
              </a>
              <a
                href="/contacto"
                className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contactar online
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Área Detallada */}
      {selectedArea && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedArea(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-screen overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">{selectedArea.name}</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedArea(null);
                }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-6">
                <img 
                  src={selectedArea.image} 
                  alt={selectedArea.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedArea.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Características</h4>
                  <ul className="space-y-3">
                    {selectedArea.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Aspectos Destacados</h4>
                  <ul className="space-y-3">
                    {selectedArea.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Tour Virtual */}
      {showVirtualTour && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={() => setShowVirtualTour(false)}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">Tour Virtual</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowVirtualTour(false);
                }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                {data.virtual_tour.description}
              </p>
              
              <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center text-white">
                  <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Tour Virtual Interactivo</p>
                  <p className="text-sm opacity-75">Próximamente disponible</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Secciones del Tour</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {data.virtual_tour.sections.map((section, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Check className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700">{section}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Instalaciones;

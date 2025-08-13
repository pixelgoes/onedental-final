import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { 
  Sparkles,
  Clock,
  Euro,
  ArrowRight,
  Star,
  CheckCircle,
  Phone
} from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      id: 'digital-smile-design-zaragoza',
      name: 'Digital Smile Design',
      category: 'Estética Dental',
      description: 'Tecnología avanzada de diseño de sonrisa digital para resultados predecibles y estéticamente perfectos.',
      shortDescription: 'Diseño digital avanzado de sonrisa',
      price: 'Incluido en tratamiento',
      duration: '2-4 semanas',
      image: '/images/digital-smile-design.JPG',
      featured: true,
      benefits: ['Resultados predecibles', 'Visualización previa', 'Planificación precisa']
    },
    {
      id: 'implantes-dentales-zaragoza',
      name: 'Implantes Dentales',
      category: 'Implantología',
      description: 'Implantes dentales de titanio con tecnología avanzada para restaurar tu sonrisa de forma permanente.',
      shortDescription: 'Solución permanente para dientes perdidos',
      price: '800€ - 1.500€',
      duration: '90 min',
      image: '/images/implante-dental.jpg',
      featured: true,
      benefits: ['Solución permanente', 'Titanio de calidad', 'Aspecto natural']
    },
    {
      id: 'carillas-porcelana-zaragoza',
      name: 'Carillas de Porcelana',
      category: 'Estética Dental',
      description: 'Carillas de porcelana ultra-finas para transformar tu sonrisa de manera espectacular.',
      shortDescription: 'Transformación inmediata de la sonrisa',
      price: '300€ - 600€',
      duration: '60 min',
      image: '/images/carillas-dentales.jpg',
      featured: false,
      benefits: ['Mínimamente invasivas', 'Durabilidad excelente', 'Resultado inmediato']
    },
    {
      id: 'blanqueamiento-dental-zaragoza',
      name: 'Blanqueamiento Dental',
      category: 'Estética Dental',
      description: 'Blanqueamiento profesional con resultados inmediatos y duraderos.',
      shortDescription: 'Sonrisa más blanca y brillante',
      price: '200€ - 400€',
      duration: '60 min',
      image: '/images/blanqueamiento_1.jpg',
      featured: false,
      benefits: ['Resultados inmediatos', 'Seguro y efectivo', 'Sin sensibilidad']
    },
    {
      id: 'ortodoncia-invisible-zaragoza',
      name: 'Ortodoncia Invisible',
      category: 'Ortodoncia',
      description: 'Alineadores transparentes personalizados para corregir tu sonrisa de forma discreta.',
      shortDescription: 'Corrección dental invisible',
      price: '2.500€ - 5.000€',
      duration: '45 min',
      image: '/images/sonrisa-perfecta_3.jpg',
      featured: true,
      benefits: ['Completamente invisible', 'Removible', 'Cómodo de usar']
    },
    {
      id: 'higiene-dental-zaragoza',
      name: 'Higiene Dental Profesional',
      category: 'Odontología General',
      description: 'Limpieza profunda y mantenimiento preventivo para una salud oral óptima.',
      shortDescription: 'Prevención y mantenimiento oral',
      price: '60€ - 120€',
      duration: '45 min',
      image: '/images/clinica-moderna_1.jpg',
      featured: false,
      benefits: ['Prevención efectiva', 'Limpieza profunda', 'Consejos personalizados']
    }
  ];

  const allServices = [
    ...services,
    {
      id: 'ortodoncia-zaragoza',
      name: 'Ortodoncia Tradicional',
      category: 'Ortodoncia',
      shortDescription: 'Corrección dental tradicional',
      price: '2.000€ - 4.000€',
      duration: '45 min',
      image: '/images/sonrisa-perfecta_1.jpg',
      featured: false
    },
    {
      id: 'periodoncia-zaragoza',
      name: 'Periodoncia',
      category: 'Odontología General',
      shortDescription: 'Cuidado integral de las encías',
      price: '150€ - 800€',
      duration: '60 min',
      image: '/images/equipo-dental.jpg',
      featured: false
    },
    {
      id: 'endodoncia-zaragoza',
      name: 'Endodoncia',
      category: 'Odontología General',
      shortDescription: 'Salvamos tu diente natural',
      price: '200€ - 500€',
      duration: '90 min',
      image: '/images/clinica-moderna.jpg',
      featured: false
    }
  ];

  const featuredServices = services.filter(service => service.featured);
  const categorizedServices = allServices.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof allServices>);

  return (
    <>
      <Helmet>
        <title>Servicios Dentales - OneDental Zaragoza</title>
        <meta name="description" content="Descubre todos nuestros servicios dentales en Zaragoza: estética dental, implantes, ortodoncia, blanqueamiento y más. Tecnología avanzada y profesionales expertos." />
        <meta name="keywords" content="servicios dentales Zaragoza, estética dental, implantes dentales, ortodoncia, blanqueamiento dental, OneDental" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Nuestros Servicios
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Tecnología avanzada y profesionales expertos para cuidar tu sonrisa
              </p>
              <div className="flex items-center justify-center space-x-8 text-blue-100">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6" />
                  <span>12+ años de experiencia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6" />
                  <span>Tecnología Digital Smile Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-6 h-6" />
                  <span>Primera consulta gratuita</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Servicios Destacados
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Los tratamientos más demandados con la tecnología más avanzada
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service) => (
                <Card key={service.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700">
                      Destacado
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{service.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <Euro className="w-4 h-4 text-green-600" />
                          <span className="font-medium">{service.price}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link to={`/servicios/${service.id}`}>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          Ver Detalles
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Services by Category */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Todos Nuestros Servicios
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Soluciones completas para todas tus necesidades dentales
              </p>
            </div>

            {Object.entries(categorizedServices).map(([category, categoryServices]) => (
              <div key={category} className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
                  {category}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryServices.map((service) => (
                    <Card key={service.id} className="hover:shadow-md transition-shadow">
                      <div className="flex">
                        <img 
                          src={service.image} 
                          alt={service.name}
                          className="w-24 h-24 object-cover rounded-l-lg"
                        />
                        <div className="flex-1 p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900 line-clamp-1">
                              {service.name}
                            </h4>
                            {service.featured && (
                              <Badge variant="secondary" className="ml-2">★</Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {service.shortDescription}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span>{service.price}</span>
                              <span>{service.duration}</span>
                            </div>
                            <Link 
                              to={`/servicios/${service.id}`}
                              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                              Ver más →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Transformar tu Sonrisa?
            </h2>
            <p className="text-xl mb-8">
              Agenda tu primera consulta gratuita y descubre el tratamiento perfecto para ti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/primera-consulta-gratuita">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Primera Consulta Gratuita
                </Button>
              </Link>
              <Link to="/reservar-cita">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Reservar Cita Online
                </Button>
              </Link>
            </div>
            <div className="mt-8 text-blue-100">
              <p className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>O llámanos al: 976 527 761</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesOverview;
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Phone, 
  Calendar, 
  Search, 
  ArrowRight,
  MapPin,
  Mail,
  Clock
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';

export default function NotFound() {
  const paginasPopulares = [
    {
      titulo: 'Digital Smile Design',
      descripcion: 'Diseña tu sonrisa perfecta con tecnología 3D',
      enlace: '/servicios/digital-smile-design-zaragoza',
      icono: '✨'
    },
    {
      titulo: 'Implantes Dentales',
      descripcion: 'Recupera tu sonrisa con implantes de última generación',
      enlace: '/servicios/implantes-dentales-zaragoza',
      icono: '🦷'
    },
    {
      titulo: 'Primera Consulta Gratuita',
      descripcion: 'Agenda tu evaluación dental sin coste',
      enlace: '/primera-consulta-gratuita',
      icono: '🎁'
    },
    {
      titulo: 'Urgencias Dentales',
      descripcion: 'Atención inmediata para emergencias',
      enlace: '/urgencias-dentales',
      icono: '🚨'
    },
    {
      titulo: 'Calculadora de Precios',
      descripcion: 'Calcula el coste de tu tratamiento',
      enlace: '/calculadora-precios',
      icono: '💰'
    },
    {
      titulo: 'Tour Virtual 360°',
      descripcion: 'Conoce nuestras instalaciones',
      enlace: '/tour-virtual',
      icono: '🏥'
    }
  ];

  const contactoRapido = [
    {
      titulo: 'Llamar Ahora',
      descripcion: '976 527 761',
      enlace: 'tel:976527761',
      icono: <Phone className="h-6 w-6" />,
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      titulo: 'Reservar Cita',
      descripcion: 'Online 24/7',
      enlace: '/reservar-cita',
      icono: <Calendar className="h-6 w-6" />,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      titulo: 'Ubicación',
      descripcion: 'Cómo llegar',
      enlace: '#ubicacion',
      icono: <MapPin className="h-6 w-6" />,
      color: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Página no encontrada (404) - OneDental Zaragoza</title>
        <meta name="description" content="La página que buscas no existe. Encuentra información sobre nuestros servicios dentales en Zaragoza o contacta con nosotros." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Main 404 Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* 404 Visual */}
            <div className="mb-12">
              <div className="text-8xl lg:text-9xl font-bold text-blue-600 opacity-50 mb-4">
                404
              </div>
              <div className="text-6xl mb-6">🦷</div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                ¡Ups! Esta página se ha perdido
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                La página que buscas no existe o ha sido movida. Pero no te preocupes, 
                podemos ayudarte a encontrar lo que necesitas para tu salud dental.
              </p>
            </div>

            {/* Quick Contact Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {contactoRapido.map((accion, index) => (
                <Link key={index} to={accion.enlace} className="block">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-white mb-4 ${accion.color}`}>
                        {accion.icono}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{accion.titulo}</h3>
                      <p className="text-gray-600 text-sm">{accion.descripcion}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Search Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Qué estabas buscando?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Buscar servicios, tratamientos..." 
                    className="pl-10"
                  />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Buscar
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Pages */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Páginas Más Visitadas
              </h2>
              <p className="text-xl text-gray-600">
                Estas son las secciones que más interesan a nuestros pacientes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginasPopulares.map((pagina, index) => (
                <Link key={index} to={pagina.enlace} className="block">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="text-3xl mb-4">{pagina.icono}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {pagina.titulo}
                      </h3>
                      <p className="text-gray-600 mb-4">{pagina.descripcion}</p>
                      <div className="flex items-center text-blue-600 hover:text-blue-700">
                        <span className="text-sm font-medium">Ver más</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-5xl mb-6">🚨</div>
            <h2 className="text-3xl font-bold mb-4">
              ¿Tienes una urgencia dental?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              No dejes que el dolor espere. Atendemos urgencias dentales las 24 horas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
                <Phone className="h-5 w-5 mr-2" />
                Llamar Urgencias: 976 527 761
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                <Calendar className="h-5 w-5 mr-2" />
                Cita Urgente Online
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Necesitas ayuda?
              </h2>
              <p className="text-xl text-gray-600">
                Nuestro equipo está aquí para ayudarte a encontrar lo que necesitas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Teléfono</h3>
                  <p className="text-gray-600">976 527 761</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">info@onedental.es</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Dirección</h3>
                  <p className="text-gray-600">Calle Pablo Neruda, 17<br/>50018 Zaragoza</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Horarios</h3>
                  <p className="text-gray-600">Lun-Vie: 9:00-20:00<br/>Sáb: 9:00-14:00</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Link to="/">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Home className="h-5 w-5 mr-2" />
                  Volver al Inicio
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

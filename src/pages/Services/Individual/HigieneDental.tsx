import React from 'react';
import { Helmet } from 'react-helmet';
import { Sparkles, Shield, Clock, Phone, Calendar, CheckCircle, Heart } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';

export default function HigieneDental() {
  const servicios = [
    {
      nombre: 'Limpieza Dental Básica',
      descripcion: 'Eliminación de placa y sarro superficial',
      precio: '60€',
      duracion: '30 minutos',
      frecuencia: 'Cada 6 meses'
    },
    {
      nombre: 'Limpieza Profunda',
      descripcion: 'Profilaxis completa con ultrasonidos',
      precio: '90€',
      duracion: '45 minutos',
      frecuencia: 'Cada 4-6 meses'
    },
    {
      nombre: 'Fluorización',
      descripcion: 'Aplicación de flúor para fortalecer el esmalte',
      precio: '25€',
      duracion: '15 minutos',
      frecuencia: 'Según necesidad'
    },
    {
      nombre: 'Sellado de Fisuras',
      descripcion: 'Protección preventiva en niños',
      precio: '40€/diente',
      duracion: '20 minutos',
      frecuencia: 'Una vez'
    }
  ];

  const beneficios = [
    'Previene caries y enfermedades periodontales',
    'Elimina manchas y decoloraciones',
    'Reduce el mal aliento',
    'Mejora la salud cardiovascular',
    'Detecta problemas en fases tempranas',
    'Mantiene encías saludables'
  ];

  const consejos = [
    'Cepillado 3 veces al día',
    'Uso diario de hilo dental',
    'Enjuague bucal antibacteriano',
    'Limitar azúcares y ácidos',
    'No fumar ni mascar tabaco',
    'Cambiar cepillo cada 3 meses'
  ];

  return (
    <>
      <Helmet>
        <title>Higiene Dental Zaragoza - Limpieza y Prevención - OneDental</title>
        <meta name="description" content="Higiene dental profesional en Zaragoza. Limpieza, profilaxis y prevención. Mantén tu sonrisa saludable." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                <Sparkles className="h-4 w-4 mr-2" />
                Prevención y Salud
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Higiene Dental
                <span className="block text-3xl lg:text-4xl text-teal-200">en Zaragoza</span>
              </h1>
              <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
                La base de una sonrisa saludable. Servicios de higiene dental profesional 
                para prevenir problemas y mantener tu boca en perfectas condiciones.
              </p>
              <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
                <Calendar className="h-5 w-5 mr-2" />
                Reservar Limpieza
              </Button>
            </div>
          </div>
        </section>

        {/* Servicios de Higiene */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Servicios de Higiene Dental
              </h2>
              <p className="text-xl text-gray-600">
                Tratamientos preventivos para mantener tu salud bucal óptima
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicios.map((servicio, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{servicio.nombre}</h3>
                    <p className="text-gray-600 mb-4">{servicio.descripcion}</p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-teal-600">Precio:</span>
                        <div>{servicio.precio}</div>
                      </div>
                      <div>
                        <span className="font-medium text-teal-600">Duración:</span>
                        <div>{servicio.duracion}</div>
                      </div>
                      <div>
                        <span className="font-medium text-teal-600">Frecuencia:</span>
                        <div>{servicio.frecuencia}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 bg-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Beneficios de la Higiene Dental
                </h2>
                <div className="space-y-4">
                  {beneficios.map((beneficio, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Heart className="h-5 w-5 text-teal-600 flex-shrink-0" />
                      <span className="text-gray-700">{beneficio}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Consejos de Higiene en Casa
                </h2>
                <div className="space-y-4">
                  {consejos.map((consejo, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{consejo}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plan de Mantenimiento */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Plan de Mantenimiento Anual
              </h2>
              <p className="text-xl text-gray-600">
                Programa personalizado de higiene dental preventiva
              </p>
            </div>

            <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-200">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Shield className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">2 Limpiezas Anuales</h3>
                    <p className="text-sm text-gray-600">Cada 6 meses</p>
                  </div>
                  <div>
                    <Clock className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Revisiones Completas</h3>
                    <p className="text-sm text-gray-600">Detección temprana</p>
                  </div>
                  <div>
                    <Sparkles className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Tratamientos Preventivos</h3>
                    <p className="text-sm text-gray-600">Flúor y sellados</p>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <div className="text-3xl font-bold text-teal-600 mb-2">150€/año</div>
                  <p className="text-gray-600 mb-4">Ahorra hasta 40€ vs. pagos individuales</p>
                  <Button className="bg-teal-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Únete al Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Tu sonrisa merece el mejor cuidado</h2>
            <p className="text-xl text-teal-100 mb-8">
              Programa tu limpieza dental hoy. La prevención es la mejor inversión en tu salud.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
                <Calendar className="h-5 w-5 mr-2" />
                Reservar Limpieza
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="h-5 w-5 mr-2" />
                Llamar: 976 527 761
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
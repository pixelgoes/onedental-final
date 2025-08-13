import React from 'react';
import { Helmet } from 'react-helmet';
import { Scissors, Shield, Clock, Phone, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';

export default function CirugiaDental() {
  const procedimientos = [
    { nombre: 'Extracción Simple', precio: '80€', descripcion: 'Extracción de dientes sin complicaciones' },
    { nombre: 'Extracción Quirúrgica', precio: '150€', descripcion: 'Extracciones complejas con cirugía' },
    { nombre: 'Muelas del Juicio', precio: '200€', descripcion: 'Extracción de terceros molares' },
    { nombre: 'Cirugía de Quistes', precio: '350€', descripcion: 'Eliminación de quistes y granulomas' },
    { nombre: 'Injertos de Hueso', precio: 'Desde 400€', descripcion: 'Regeneración ósea para implantes' },
    { nombre: 'Frenectomía', precio: '180€', descripcion: 'Corrección de frenillos labiales o linguales' }
  ];

  return (
    <>
      <Helmet>
        <title>Cirugía Dental Zaragoza - Extracciones y Cirugía Oral - OneDental</title>
        <meta name="description" content="Cirugía dental en Zaragoza. Extracciones, muelas del juicio, injertos de hueso. Técnicas mínimamente invasivas." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Cirugía Oral Especializada
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Cirugía Dental en Zaragoza
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Procedimientos quirúrgicos dentales con las técnicas más avanzadas y mínimamente invasivas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Calendar className="h-5 w-5 mr-2" />
                  Solicitar Consulta
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  <Phone className="h-5 w-5 mr-2" />
                  Llámanos: 976 527 761
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Procedimientos de Cirugía Dental
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ofrecemos una amplia gama de tratamientos quirúrgicos dentales con la máxima precisión y cuidado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {procedimientos.map((procedimiento, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Scissors className="h-8 w-8 text-gray-600" />
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        {procedimiento.precio}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{procedimiento.nombre}</h3>
                    <p className="text-gray-600 mb-4">{procedimiento.descripcion}</p>
                    <Button className="w-full" variant="outline">
                      Más información
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Por qué elegir nuestra cirugía dental?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Técnicas Mínimamente Invasivas</h3>
                <p className="text-gray-600">
                  Utilizamos las técnicas más avanzadas para minimizar molestias y acelerar la recuperación
                </p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Recuperación Rápida</h3>
                <p className="text-gray-600">
                  Protocolos optimizados que permiten una recuperación más rápida y cómoda
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Éxito Garantizado</h3>
                <p className="text-gray-600">
                  Más de 15 años de experiencia en cirugía dental con resultados excepcionales
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Necesitas una cirugía dental?
            </h2>
            <p className="text-xl mb-8">
              Consulta con nuestros especialistas y obtén un diagnóstico personalizado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Consulta
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Phone className="h-5 w-5 mr-2" />
                Llamar Ahora
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

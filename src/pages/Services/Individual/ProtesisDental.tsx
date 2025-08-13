import React from 'react';
import { Helmet } from 'react-helmet';
import { Crown, Smile, Zap, Shield, Phone, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';

export default function ProtesisDental() {
  const tiposProtesis = [
    {
      nombre: 'Corona Individual',
      descripcion: 'Rehabilitación de un solo diente',
      precio: 'Desde 400€',
      material: 'Porcelana/Zirconio',
      duracion: '15-20 años'
    },
    {
      nombre: 'Puente Dental',
      descripcion: 'Reemplazo de varios dientes consecutivos',
      precio: 'Desde 1.200€',
      material: 'Porcelana sobre metal',
      duracion: '10-15 años'
    },
    {
      nombre: 'Prótesis Removible',
      descripcion: 'Dentadura parcial o completa',
      precio: 'Desde 600€',
      material: 'Resina acrílica',
      duracion: '5-7 años'
    },
    {
      nombre: 'Prótesis sobre Implantes',
      descripcion: 'Máxima estabilidad y comodidad',
      precio: 'Desde 2.500€',
      material: 'Porcelana/Zirconio',
      duracion: '20+ años'
    }
  ];

  const ventajas = [
    'Recupera función masticatoria completa',
    'Mejora estética facial',
    'Previene problemas de articulación',
    'Aumenta autoestima y confianza',
    'Materiales de alta calidad',
    'Ajuste perfecto personalizado'
  ];

  return (
    <>
      <Helmet>
        <title>Prótesis Dental Zaragoza - Coronas y Puentes - OneDental</title>
        <meta name="description" content="Prótesis dental en Zaragoza. Coronas, puentes y dentaduras de alta calidad. Recupera tu sonrisa y función masticatoria." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                <Crown className="h-4 w-4 mr-2" />
                Rehabilitación Completa
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Prótesis Dental
                <span className="block text-3xl lg:text-4xl text-purple-200">en Zaragoza</span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Recupera la funcionalidad y estética de tu sonrisa con prótesis dentales 
                de última generación. Coronas, puentes y dentaduras personalizadas.
              </p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                <Calendar className="h-5 w-5 mr-2" />
                Consulta Gratuita
              </Button>
            </div>
          </div>
        </section>

        {/* Tipos de Prótesis */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tipos de Prótesis Dental
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tiposProtesis.map((protesis, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{protesis.nombre}</h3>
                    <p className="text-gray-600 mb-4">{protesis.descripcion}</p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-purple-600">Precio:</span>
                        <div>{protesis.precio}</div>
                      </div>
                      <div>
                        <span className="font-medium text-purple-600">Material:</span>
                        <div>{protesis.material}</div>
                      </div>
                      <div>
                        <span className="font-medium text-purple-600">Duración:</span>
                        <div>{protesis.duracion}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ventajas */}
        <section className="py-16 bg-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Beneficios de las Prótesis Dentales
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ventajas.map((ventaja, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">{ventaja}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Recupera tu sonrisa completa</h2>
            <p className="text-xl text-purple-100 mb-8">
              Prótesis dentales de alta calidad con garantía y seguimiento personalizado.
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
              <Phone className="h-5 w-5 mr-2" />
              Llamar: 976 527 761
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
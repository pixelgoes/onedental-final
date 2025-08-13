import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  Heart,
  Shield,
  AlertTriangle,
  CheckCircle,
  Phone,
  Calendar,
  Star,
  Quote
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';

export default function Periodoncia() {
  const sintomas = [
    'Encías que sangran al cepillarse',
    'Encías rojas, inflamadas o sensibles',
    'Mal aliento persistente',
    'Retracción de las encías',
    'Dientes que se mueven',
    'Dolor al masticar'
  ];

  const tratamientos = [
    {
      nombre: 'Limpieza Periodontal',
      descripcion: 'Eliminación de placa y sarro subgingival',
      precio: '120€',
      sesiones: '1-2 sesiones'
    },
    {
      nombre: 'Curetaje',
      descripcion: 'Raspado y alisado radicular profundo',
      precio: '80€/cuadrante',
      sesiones: '2-4 sesiones'
    },
    {
      nombre: 'Cirugía Periodontal',
      descripcion: 'Regeneración de tejidos periodontales',
      precio: 'Desde 450€',
      sesiones: 'Según caso'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Periodoncia Zaragoza - Tratamiento de Encías - OneDental</title>
        <meta name="description" content="Tratamiento de encías en Zaragoza. Periodoncia avanzada para gingivitis y periodontitis. Primera consulta gratuita." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-white/20 text-white border-white/30 mb-4">
                  <Heart className="h-4 w-4 mr-2" />
                  Salud de las Encías
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Periodoncia
                  <span className="block text-3xl lg:text-4xl text-red-200">en Zaragoza</span>
                </h1>
                <p className="text-xl text-red-100 mb-8 leading-relaxed">
                  Especialistas en el tratamiento de encías. Detectamos y tratamos 
                  gingivitis y periodontitis para mantener tus dientes y encías saludables.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
                    <Calendar className="h-5 w-5 mr-2" />
                    Consulta Gratuita
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Phone className="h-5 w-5 mr-2" />
                    976 527 761
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/sonrisa-perfecta_5.jpg" 
                  alt="Periodoncia OneDental Zaragoza"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Síntomas de Alerta */}
        <section className="py-16 bg-red-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Síntomas de Problemas Periodontales
              </h2>
              <p className="text-xl text-gray-600">
                ¿Tienes alguno de estos síntomas? Es importante actuar a tiempo
              </p>
            </div>

            <Card className="border-red-200">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sintomas.map((sintoma, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <span className="text-gray-700">{sintoma}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-red-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    Evaluación Urgente
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tratamientos */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tratamientos Periodontales
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tratamientos.map((tratamiento, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-4">{tratamiento.nombre}</h3>
                    <p className="text-gray-600 mb-4">{tratamiento.descripcion}</p>
                    <div className="text-2xl font-bold text-red-600 mb-2">{tratamiento.precio}</div>
                    <Badge variant="outline">{tratamiento.sesiones}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Cuida la salud de tus encías
            </h2>
            <p className="text-xl text-red-100 mb-8">
              La periodoncia es fundamental para mantener tus dientes. 
              No esperes más, agenda tu consulta gratuita.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
                <Calendar className="h-5 w-5 mr-2" />
                Consulta Gratuita
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
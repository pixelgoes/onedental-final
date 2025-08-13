import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Sparkles,
  Palette,
  Eye,
  Shield,
  Clock,
  Award,
  CheckCircle,
  Phone,
  Calendar,
  Star,
  Quote,
  ArrowRight,
  Camera,
  Zap
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Progress } from '../../../components/ui/progress';

export default function CarillasPorcelana() {
  const [tipoCarilla, setTipoCarilla] = useState('porcelana');

  const ventajas = [
    {
      icono: <Eye className="h-6 w-6" />,
      titulo: 'Aspecto Natural',
      descripcion: 'Indistinguibles de los dientes naturales, translucidez perfecta'
    },
    {
      icono: <Shield className="h-6 w-6" />,
      titulo: 'Resistencia Superior',
      descripcion: 'Porcelana de alta calidad, resistente a manchas y fracturas'
    },
    {
      icono: <Palette className="h-6 w-6" />,
      titulo: 'Personalización Total',
      descripcion: 'Color, forma y tamaño diseñados específicamente para ti'
    },
    {
      icono: <Zap className="h-6 w-6" />,
      titulo: 'Mínimamente Invasivo',
      descripcion: 'Tallado mínimo del diente, preservando estructura natural'
    }
  ];

  const tiposCarillas = [
    {
      id: 'porcelana',
      nombre: 'Carillas de Porcelana',
      descripcion: 'Máxima estética y durabilidad',
      precio: '450€/pieza',
      duracion: '15-20 años',
      grosor: '0.3-0.7mm',
      ventajas: ['Máxima estética', 'Resistencia superior', 'Sin decoloración', 'Biocompatible']
    },
    {
      id: 'composite',
      nombre: 'Carillas de Composite',
      descripcion: 'Solución económica y rápida',
      precio: '180€/pieza',
      duracion: '5-8 años',
      grosor: '0.5-1.0mm',
      ventajas: ['Procedimiento rápido', 'Reversible', 'Económico', 'Sin laboratorio']
    },
    {
      id: 'ultrafinas',
      nombre: 'Carillas Ultrafinas',
      descripcion: 'Sin tallado, máxima conservación',
      precio: '550€/pieza',
      duracion: '20+ años',
      grosor: '0.2-0.3mm',
      ventajas: ['Sin tallado', 'Conserva esmalte', 'Máxima estética', 'Reversible']
    }
  ];

  const proceso = [
    {
      numero: 1,
      titulo: 'Evaluación y Diseño',
      descripcion: 'Análisis estético y diseño digital de la sonrisa',
      duracion: '45 min',
      detalles: 'Fotografías, modelos y diseño digital con simulación del resultado'
    },
    {
      numero: 2,
      titulo: 'Preparación Dental',
      descripcion: 'Tallado mínimo y toma de impresiones',
      duracion: '90 min',
      detalles: 'Preparación conservadora y carillas provisionales'
    },
    {
      numero: 3,
      titulo: 'Fabricación Personalizada',
      descripcion: 'Elaboración en laboratorio especializado',
      duracion: '7-10 días',
      detalles: 'Fabricación artesanal con porcelana de alta calidad'
    },
    {
      numero: 4,
      titulo: 'Colocación Final',
      descripcion: 'Prueba, ajuste y cementado definitivo',
      duracion: '60 min',
      detalles: 'Ajuste perfecto y cementado con adhesivos especializados'
    }
  ];

  const candidatos = [
    'Dientes con manchas permanentes',
    'Dientes fracturados o astillados',
    'Espacios entre dientes (diastemas)',
    'Dientes desalineados levemente',
    'Dientes desgastados o pequeños',
    'Mejora estética general de la sonrisa'
  ];

  const testimonios = [
    {
      nombre: 'Elena Martín',
      edad: 28,
      testimonio: 'Las carillas me cambiaron la vida. Mi sonrisa ahora es perfecta y nadie nota que las tengo.',
      rating: 5,
      tratamiento: '8 Carillas de Porcelana'
    },
    {
      nombre: 'Miguel Ángel',
      edad: 35,
      testimonio: 'Proceso muy profesional. El resultado superó mis expectativas, color y forma perfectos.',
      rating: 5,
      tratamiento: '6 Carillas Ultrafinas'
    }
  ];

  const preguntasFrecuentes = [
    {
      pregunta: '¿Las carillas se ven naturales?',
      respuesta: 'Absolutamente. Las carillas de porcelana tienen la misma translucidez y brillo que los dientes naturales. Nuestro laboratorio especializado las personaliza completamente para que se integren perfectamente.'
    },
    {
      pregunta: '¿Cuánto duran las carillas de porcelana?',
      respuesta: 'Con cuidado adecuado, las carillas de porcelana pueden durar 15-20 años o más. Son muy resistentes a manchas y desgaste.'
    },
    {
      pregunta: '¿Es doloroso el proceso?',
      respuesta: 'El procedimiento es mínimamente invasivo. Utilizamos anestesia local durante la preparación, y las molestias posteriores son muy leves.'
    },
    {
      pregunta: '¿Puedo comer normalmente con carillas?',
      respuesta: 'Sí, puedes comer prácticamente todo. Recomendamos evitar morder objetos duros y usar protector nocturno si tienes bruxismo.'
    },
    {
      pregunta: '¿Las carillas se manchan?',
      respuesta: 'Las carillas de porcelana son altamente resistentes a manchas, mucho más que los dientes naturales. Mantienen su color original durante años.'
    }
  ];

  const cuidados = [
    'Higiene dental regular (cepillado y hilo dental)',
    'Revisiones cada 6 meses',
    'Evitar morder objetos duros',
    'Usar protector nocturno si hay bruxismo',
    'Limitación de alimentos muy duros',
    'Pulido profesional anual'
  ];

  return (
    <>
      <Helmet>
        <title>Carillas de Porcelana Zaragoza - OneDental Dr. Onésimo</title>
        <meta name="description" content="Carillas de porcelana en Zaragoza. Sonrisa perfecta en 2 semanas. Máxima estética y naturalidad. Primera consulta gratuita con diseño digital." />
        <meta name="keywords" content="carillas porcelana Zaragoza, carillas dentales, estética dental, sonrisa perfecta, veneers" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-white/20 text-white border-white/30 mb-4">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Sonrisa Perfecta
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Carillas de Porcelana
                  <span className="block text-3xl lg:text-4xl text-pink-200">en Zaragoza</span>
                </h1>
                <p className="text-xl text-pink-100 mb-8 leading-relaxed">
                  Transforma tu sonrisa en solo 2 semanas con carillas de porcelana 
                  de máxima calidad. Resultados naturales, duraderos y personalizados 
                  para cada paciente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50">
                    <Camera className="h-5 w-5 mr-2" />
                    Diseño Digital Gratuito
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Phone className="h-5 w-5 mr-2" />
                    976 527 761
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/carillas-dentales.jpg" 
                  alt="Carillas de porcelana OneDental Zaragoza"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Dr. Onésimo Fernández</p>
                  <p className="text-sm text-pink-200">Especialista en Estética Dental</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de Carillas */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Tipos de Carillas Dentales
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Diferentes opciones para adaptarse a tus necesidades específicas 
                y presupuesto
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiposCarillas.map((tipo) => (
                <Card 
                  key={tipo.id}
                  className={`cursor-pointer transition-all ${
                    tipoCarilla === tipo.id ? 'ring-2 ring-pink-500 bg-pink-50' : 'hover:shadow-lg'
                  }`}
                  onClick={() => setTipoCarilla(tipo.id)}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold mb-2">{tipo.nombre}</h3>
                      <p className="text-gray-600 mb-4">{tipo.descripcion}</p>
                      <div className="text-3xl font-bold text-pink-600 mb-2">{tipo.precio}</div>
                      <div className="text-sm text-gray-500 space-y-1">
                        <div>Duración: {tipo.duracion}</div>
                        <div>Grosor: {tipo.grosor}</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">Ventajas:</h4>
                      {tipo.ventajas.map((ventaja, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-pink-600" />
                          <span className="text-sm text-gray-700">{ventaja}</span>
                        </div>
                      ))}
                    </div>
                    <Button className={`w-full mt-6 ${
                      tipoCarilla === tipo.id ? 'bg-pink-600' : 'bg-gray-600'
                    }`}>
                      Más Información
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ventajas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Por qué elegir carillas de porcelana?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ventajas.map((ventaja, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-pink-600">
                        {ventaja.icono}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{ventaja.titulo}</h3>
                    <p className="text-gray-600 text-sm">{ventaja.descripcion}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Proceso de Carillas de Porcelana
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un proceso cuidadoso y personalizado para garantizar 
                resultados perfectos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {proceso.map((paso, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-white">{paso.numero}</span>
                    </div>
                    {index < proceso.length - 1 && (
                      <ArrowRight className="absolute top-1/2 -right-4 transform -translate-y-1/2 h-6 w-6 text-gray-400 hidden lg:block" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{paso.titulo}</h3>
                  <p className="text-gray-600 mb-2">{paso.descripcion}</p>
                  <Badge variant="outline">{paso.duracion}</Badge>
                  <p className="text-sm text-gray-500 mt-2">{paso.detalles}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Candidatos Ideales */}
        <section className="py-16 bg-pink-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Eres candidato para carillas?
              </h2>
              <p className="text-xl text-gray-600">
                Las carillas de porcelana son ideales para múltiples situaciones
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {candidatos.map((candidato, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0" />
                      <span className="text-gray-700">{candidato}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-pink-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    Evaluación Gratuita
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sonrisas Transformadas
              </h2>
              <p className="text-xl text-gray-600">
                Casos reales de pacientes con carillas de porcelana
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonios.map((testimonio, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(testimonio.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                      <Badge variant="outline" className="ml-auto">
                        {testimonio.tratamiento}
                      </Badge>
                    </div>
                    <Quote className="h-8 w-8 text-pink-600 mb-4" />
                    <p className="text-gray-700 mb-4 italic">"{testimonio.testimonio}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonio.nombre}</p>
                      <p className="text-sm text-gray-600">{testimonio.edad} años</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cuidados */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cuidado de las Carillas
              </h2>
              <p className="text-xl text-gray-600">
                Cuidados simples para mantener tus carillas perfectas durante años
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cuidados.map((cuidado, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0" />
                      <span className="text-gray-700">{cuidado}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Preguntas Frecuentes sobre Carillas
              </h2>
            </div>

            <div className="space-y-6">
              {preguntasFrecuentes.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.pregunta}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.respuesta}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Lista tu nueva sonrisa perfecta?
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Consulta gratuita con diseño digital incluido. Visualiza tu resultado 
              antes de empezar. Financiación sin intereses disponible.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50">
                <Camera className="h-5 w-5 mr-2" />
                Diseño Digital Gratuito
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="h-5 w-5 mr-2" />
                Llamar: 976 527 761
              </Button>
            </div>
            <p className="text-sm text-pink-200 mt-6">
              📍 Calle Pablo Neruda, 17, 50018 Zaragoza | ⏰ Lun-Vie: 9:00-17:00
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Smile,
  Eye,
  Clock,
  Award,
  CheckCircle,
  Phone,
  Calendar,
  Star,
  Quote,
  ArrowRight,
  Shield,
  Zap,
  Users
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Progress } from '../../../components/ui/progress';

export default function Ortodoncia() {
  const [tipoOrtodoncia, setTipoOrtodoncia] = useState('invisalign');

  const ventajas = [
    {
      icono: <Eye className="h-6 w-6" />,
      titulo: 'Estética Invisible',
      descripcion: 'Alineadores transparentes prácticamente imperceptibles'
    },
    {
      icono: <Zap className="h-6 w-6" />,
      titulo: 'Removible',
      descripcion: 'Quítate los alineadores para comer y limpiar tus dientes'
    },
    {
      icono: <Clock className="h-6 w-6" />,
      titulo: 'Resultados Predecibles',
      descripcion: 'Visualiza tu resultado final antes de empezar el tratamiento'
    },
    {
      icono: <Shield className="h-6 w-6" />,
      titulo: 'Mayor Comodidad',
      descripcion: 'Sin brackets ni alambres, máximo confort durante el tratamiento'
    }
  ];

  const tiposOrtodoncia = [
    {
      id: 'invisalign',
      nombre: 'Invisalign',
      descripcion: 'Alineadores transparentes removibles',
      precio: 'Desde 2.800€',
      duracion: '12-18 meses',
      edad: 'Adolescentes y adultos',
      ventajas: ['Invisible', 'Removible', 'Cómodo', 'Predecible'],
      ideal: 'Casos leves a moderados'
    },
    {
      id: 'brackets-zafiro',
      nombre: 'Brackets de Zafiro',
      descripción: 'Brackets transparentes estéticos',
      precio: 'Desde 2.200€',
      duracion: '18-24 meses',
      edad: 'Todas las edades',
      ventajas: ['Estético', 'Resistente', 'Económico', 'Efectivo'],
      ideal: 'Casos moderados a severos'
    },
    {
      id: 'brackets-metalicos',
      nombre: 'Brackets Metálicos',
      descripcion: 'Ortodoncia tradicional de alta eficacia',
      precio: 'Desde 1.800€',
      duracion: '18-30 meses',
      edad: 'Niños y adolescentes',
      ventajas: ['Más económico', 'Muy efectivo', 'Duradero', 'Versatil'],
      ideal: 'Casos complejos'
    },
    {
      id: 'lingual',
      nombre: 'Ortodoncia Lingual',
      descripcion: 'Brackets por la cara interna del diente',
      precio: 'Desde 4.500€',
      duracion: '18-24 meses',
      edad: 'Adultos',
      ventajas: ['100% invisible', 'Personalizado', 'Efectivo', 'Estético'],
      ideal: 'Adultos que requieren discreción'
    }
  ];

  const proceso = [
    {
      numero: 1,
      titulo: 'Estudio Ortodóncico',
      descripcion: 'Radiografías, fotografías y modelos digitales',
      duracion: '60 min'
    },
    {
      numero: 2,
      titulo: 'Plan de Tratamiento',
      descripcion: 'Diseño personalizado y simulación digital',
      duracion: '7-10 días'
    },
    {
      numero: 3,
      titulo: 'Inicio del Tratamiento',
      descripcion: 'Colocación de aparatología o entrega de alineadores',
      duracion: '90 min'
    },
    {
      numero: 4,
      titulo: 'Seguimiento Regular',
      descripcion: 'Revisiones mensuales y ajustes necesarios',
      duracion: 'Cada 4-6 semanas'
    }
  ];

  const problemas = [
    'Dientes apiñados o montados',
    'Espacios entre dientes (diastemas)',
    'Mordida cruzada',
    'Sobremordida (dientes superiores muy salidos)',
    'Mordida abierta',
    'Línea media desviada',
    'Dientes rotados o mal posicionados'
  ];

  const testimonios = [
    {
      nombre: 'Cristina Ruiz',
      edad: 32,
      testimonio: 'Invisalign fue perfecto para mi trabajo. Nadie notó que llevaba ortodoncia y el resultado es increíble.',
      rating: 5,
      tratamiento: 'Invisalign 14 meses'
    },
    {
      nombre: 'Pablo Martín',
      edad: 16,
      testimonio: 'Los brackets de zafiro fueron geniales. Muy estéticos y el tratamiento fue más rápido de lo esperado.',
      rating: 5,
      tratamiento: 'Brackets Zafiro 20 meses'
    }
  ];

  const edades = [
    {
      grupo: 'Niños (7-11 años)',
      tratamiento: 'Ortodoncia Interceptiva',
      descripcion: 'Corrección temprana de problemas de crecimiento',
      beneficios: ['Previene problemas futuros', 'Facilita tratamiento posterior', 'Mejora función masticatoria']
    },
    {
      grupo: 'Adolescentes (12-17 años)',
      tratamiento: 'Ortodoncia Correctiva',
      descripcion: 'Edad ideal para corregir problemas de alineación',
      beneficios: ['Máxima efectividad', 'Mejores resultados', 'Mayor cooperación del paciente']
    },
    {
      grupo: 'Adultos (18+ años)',
      tratamiento: 'Ortodoncia Estética',
      descripcion: 'Opciones discretas para adultos profesionales',
      beneficios: ['Opciones invisibles', 'Tratamientos personalizados', 'Mejora autoestima y función']
    }
  ];

  const preguntasFrecuentes = [
    {
      pregunta: '¿A qué edad se puede empezar la ortodoncia?',
      respuesta: 'La ortodoncia puede iniciarse a cualquier edad. En niños recomendamos una primera evaluación a los 7 años. Para adultos, no hay límite de edad siempre que tengan salud periodontal adecuada.'
    },
    {
      pregunta: '¿Duele la ortodoncia?',
      respuesta: 'Es normal sentir molestias los primeros días tras la colocación o ajustes. Con Invisalign las molestias son mínimas. Proporcionamos consejos y medicación si es necesario.'
    },
    {
      pregunta: '¿Cuánto tiempo dura el tratamiento?',
      respuesta: 'Depende de la complejidad del caso. Generalmente entre 12-24 meses. Los casos leves con Invisalign pueden resolverse en 6-12 meses.'
    },
    {
      pregunta: '¿Puedo hacer deporte con ortodoncia?',
      respuesta: 'Sí, recomendamos protector bucal para deportes de contacto. Con Invisalign puedes quitarte los alineadores durante la actividad deportiva.'
    },
    {
      pregunta: '¿Necesitaré retenedores después?',
      respuesta: 'Sí, los retenedores son esenciales para mantener los resultados. Pueden ser fijos o removibles según cada caso.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ortodoncia Zaragoza - Invisalign - OneDental Dr. Onésimo</title>
        <meta name="description" content="Ortodoncia en Zaragoza con Invisalign, brackets estéticos y tradicionales. Primera consulta gratuita. Financiación sin intereses." />
        <meta name="keywords" content="ortodoncia Zaragoza, Invisalign, brackets, alineadores transparentes, dientes rectos" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-white/20 text-white border-white/30 mb-4">
                  <Smile className="h-4 w-4 mr-2" />
                  Sonrisa Perfecta
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Ortodoncia
                  <span className="block text-3xl lg:text-4xl text-blue-200">en Zaragoza</span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Consigue la sonrisa perfecta con Invisalign y brackets estéticos. 
                  Tratamientos personalizados para todas las edades con la última 
                  tecnología en ortodoncia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
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
                  src="/images/sonrisa-perfecta_3.jpg" 
                  alt="Ortodoncia OneDental Zaragoza"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Dr. Onésimo Fernández</p>
                  <p className="text-sm text-blue-200">Especialista en Ortodoncia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ventajas Principales */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ventajas de la Ortodoncia Moderna
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ventajas.map((ventaja, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-blue-600">
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

        {/* Tipos de Ortodoncia */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Tipos de Ortodoncia
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Diferentes opciones para adaptarse a tus necesidades, edad y estilo de vida
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tiposOrtodoncia.map((tipo) => (
                <Card 
                  key={tipo.id}
                  className={`cursor-pointer transition-all ${
                    tipoOrtodoncia === tipo.id ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:shadow-lg'
                  } ${tipo.id === 'invisalign' ? 'md:scale-105' : ''}`}
                  onClick={() => setTipoOrtodoncia(tipo.id)}
                >
                  {tipo.id === 'invisalign' && (
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-center py-2 text-sm font-medium">
                      ⭐ MÁS DEMANDADO
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">{tipo.nombre}</h3>
                      <p className="text-gray-600 mb-4">{tipo.descripcion}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-blue-600">Precio:</span>
                          <div className="text-lg font-bold">{tipo.precio}</div>
                        </div>
                        <div>
                          <span className="font-medium text-blue-600">Duración:</span>
                          <div>{tipo.duracion}</div>
                        </div>
                        <div className="col-span-2">
                          <span className="font-medium text-blue-600">Ideal para:</span>
                          <div>{tipo.ideal}</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">Ventajas:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {tipo.ventajas.map((ventaja, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                            <span className="text-sm text-gray-700">{ventaja}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button className={`w-full mt-6 ${
                      tipoOrtodoncia === tipo.id ? 'bg-blue-600' : 'bg-gray-600'
                    }`}>
                      Más Información
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ortodoncia por Edades */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ortodoncia para Cada Edad
              </h2>
              <p className="text-xl text-gray-600">
                Tratamientos especializados según la etapa de desarrollo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {edades.map((edad, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-semibold text-blue-600 mb-2">{edad.grupo}</h3>
                      <h4 className="text-xl font-bold mb-2">{edad.tratamiento}</h4>
                      <p className="text-gray-600 text-sm">{edad.descripcion}</p>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-medium text-gray-900">Beneficios:</h5>
                      {edad.beneficios.map((beneficio, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">{beneficio}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso de Tratamiento */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Proceso de Tratamiento
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un proceso estructurado para garantizar los mejores resultados
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {proceso.map((paso, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-white">{paso.numero}</span>
                    </div>
                    {index < proceso.length - 1 && (
                      <ArrowRight className="absolute top-1/2 -right-4 transform -translate-y-1/2 h-6 w-6 text-gray-400 hidden lg:block" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{paso.titulo}</h3>
                  <p className="text-gray-600 mb-2">{paso.descripcion}</p>
                  <Badge variant="outline">{paso.duracion}</Badge>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problemas que Corregimos */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Problemas que Corregimos
              </h2>
              <p className="text-xl text-gray-600">
                La ortodoncia soluciona múltiples problemas de alineación y mordida
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {problemas.map((problema, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{problema}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-blue-600">
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
                Casos reales de pacientes con ortodoncia
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
                    <Quote className="h-8 w-8 text-blue-600 mb-4" />
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

        {/* Preguntas Frecuentes */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Preguntas Frecuentes sobre Ortodoncia
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
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Listo para tu sonrisa perfecta?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Consulta gratuita con estudio ortodóncico completo. 
              Financiación sin intereses hasta 36 meses. Primera valoración sin coste.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Calendar className="h-5 w-5 mr-2" />
                Consulta Gratuita
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="h-5 w-5 mr-2" />
                Llamar: 976 527 761
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              📍 Calle Pablo Neruda, 17, 50018 Zaragoza | ⏰ Lun-Vie: 9:00-17:00
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
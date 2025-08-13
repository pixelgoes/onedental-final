import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Shield,
  Calendar,
  Award,
  CheckCircle,
  Clock,
  Users,
  Phone,
  AlertCircle,
  Star,
  Quote,
  ArrowRight,
  Download,
  Zap
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Progress } from '../../../components/ui/progress';

export default function ImplantesDentales() {
  const [tipoImplante, setTipoImplante] = useState('unitario');

  const ventajas = [
    {
      icono: <Shield className="h-6 w-6" />,
      titulo: 'Titanio de Grado Médico',
      descripcion: 'Materiales biocompatibles de la más alta calidad y durabilidad'
    },
    {
      icono: <Zap className="h-6 w-6" />,
      titulo: 'Cirugía Guiada 3D',
      descripcion: 'Precisión milimétrica con planificación digital avanzada'
    },
    {
      icono: <Clock className="h-6 w-6" />,
      titulo: 'Carga Inmediata',
      descripcion: 'Diente provisional el mismo día en casos seleccionados'
    },
    {
      icono: <Award className="h-6 w-6" />,
      titulo: 'Garantía de por Vida',
      descripcion: '25 años de garantía en implantes y seguimiento continuo'
    }
  ];

  const tiposImplantes = [
    {
      id: 'unitario',
      nombre: 'Implante Unitario',
      descripcion: 'Sustitución de un solo diente',
      precio: '1.200€',
      duracion: '2-4 meses',
      incluye: ['Implante de titanio', 'Corona de porcelana', 'Cirugía guiada', 'Seguimiento 1 año']
    },
    {
      id: 'multiple',
      nombre: 'Implantes Múltiples',
      descripcion: 'Varios dientes adyacentes',
      precio: 'Desde 2.800€',
      duracion: '3-6 meses',
      incluye: ['2-4 Implantes', 'Puente fijo', 'Planificación 3D', 'Seguimiento 2 años']
    },
    {
      id: 'allin4',
      nombre: 'All-on-4',
      descripcion: 'Arcada completa con 4 implantes',
      precio: '8.500€',
      duracion: '4-6 meses',
      incluye: ['4 Implantes estratégicos', 'Prótesis fija', 'Dientes provisionales', 'Garantía extendida']
    }
  ];

  const proceso = [
    {
      numero: 1,
      titulo: 'Evaluación y Diagnóstico',
      descripcion: 'TAC 3D y planificación digital completa',
      duracion: '1 hora'
    },
    {
      numero: 2,
      titulo: 'Cirugía de Implante',
      descripcion: 'Colocación precisa con cirugía guiada',
      duracion: '45-90 min'
    },
    {
      numero: 3,
      titulo: 'Osteointegración',
      descripcion: 'Fusión del implante con el hueso',
      duracion: '2-6 meses'
    },
    {
      numero: 4,
      titulo: 'Corona Definitiva',
      descripcion: 'Colocación de la corona personalizada',
      duracion: '30 min'
    }
  ];

  const testimonios = [
    {
      nombre: 'Antonio Ruiz',
      edad: 52,
      testimonio: 'Perdí un diente en un accidente. El implante quedó perfecto, nadie nota la diferencia.',
      rating: 5,
      tipo: 'Implante Unitario'
    },
    {
      nombre: 'Carmen López',
      edad: 48,
      testimonio: 'El All-on-4 me devolvió la confianza para sonreír. Proceso más fácil de lo que esperaba.',
      rating: 5,
      tipo: 'All-on-4'
    }
  ];

  const preguntasFrecuentes = [
    {
      pregunta: '¿Duelen los implantes dentales?',
      respuesta: 'La cirugía se realiza con anestesia local, por lo que no sentirás dolor durante el procedimiento. Las molestias postoperatorias son mínimas y se controlan con analgésicos.'
    },
    {
      pregunta: '¿Cuánto duran los implantes dentales?',
      respuesta: 'Con un cuidado adecuado, los implantes pueden durar toda la vida. Ofrecemos garantía de 25 años en nuestros implantes.'
    },
    {
      pregunta: '¿Puedo hacerme implantes si tengo poco hueso?',
      respuesta: 'En muchos casos sí. Tenemos técnicas de regeneración ósea y implantes especiales para casos de poco hueso disponible.'
    },
    {
      pregunta: '¿Cuándo podré comer normalmente?',
      respuesta: 'Con implantes de carga inmediata, puedes comer alimentos blandos el mismo día. Con la corona definitiva, podrás comer completamente normal.'
    }
  ];

  const cuidadosPostoperatorios = [
    'Aplicar hielo las primeras 24 horas',
    'Tomar medicación según prescripción',
    'Dieta blanda los primeros 7 días',
    'Higiene suave en la zona',
    'No fumar durante el proceso de cicatrización',
    'Revisiones programadas'
  ];

  return (
    <>
      <Helmet>
        <title>Implantes Dentales Zaragoza - OneDental Dr. Onésimo</title>
        <meta name="description" content="Implantes dentales en Zaragoza con cirugía guiada 3D. Garantía 25 años. Carga inmediata disponible. Primera consulta gratuita con TAC incluido." />
        <meta name="keywords" content="implantes dentales Zaragoza, cirugía guiada, All-on-4, carga inmediata, implantología" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-white/20 text-white border-white/30 mb-4">
                  <Shield className="h-4 w-4 mr-2" />
                  Garantía 25 Años
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Implantes Dentales
                  <span className="block text-3xl lg:text-4xl text-emerald-200">en Zaragoza</span>
                </h1>
                <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                  Recupera tu sonrisa completa con implantes de última generación. 
                  Cirugía guiada 3D, materiales premium y carga inmediata disponible. 
                  Garantía de por vida con seguimiento continuo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                    <Calendar className="h-5 w-5 mr-2" />
                    Consulta + TAC Gratuito
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Phone className="h-5 w-5 mr-2" />
                    976 527 761
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/implante-dental.jpg" 
                  alt="Implantes dentales en OneDental Zaragoza"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Dr. Onésimo Fernández</p>
                  <p className="text-sm text-emerald-200">Especialista en Implantología</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de Implantes */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Tipos de Implantes Dentales
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Soluciones personalizadas para cada caso, desde un solo diente 
                hasta arcadas completas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiposImplantes.map((tipo) => (
                <Card 
                  key={tipo.id}
                  className={`cursor-pointer transition-all ${
                    tipoImplante === tipo.id ? 'ring-2 ring-emerald-500 bg-emerald-50' : 'hover:shadow-lg'
                  }`}
                  onClick={() => setTipoImplante(tipo.id)}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold mb-2">{tipo.nombre}</h3>
                      <p className="text-gray-600 mb-4">{tipo.descripcion}</p>
                      <div className="text-3xl font-bold text-emerald-600 mb-2">{tipo.precio}</div>
                      <Badge variant="outline">{tipo.duracion}</Badge>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">Incluye:</h4>
                      {tipo.incluye.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button className={`w-full mt-6 ${
                      tipoImplante === tipo.id ? 'bg-emerald-600' : 'bg-gray-600'
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
                ¿Por qué elegir nuestros implantes?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ventajas.map((ventaja, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-emerald-600">
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
                Proceso de Implante Dental
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un proceso paso a paso diseñado para garantizar el máximo confort 
                y los mejores resultados
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {proceso.map((paso, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto">
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

        {/* Cuidados Postoperatorios */}
        <section className="py-16 bg-emerald-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cuidados Postoperatorios
              </h2>
              <p className="text-xl text-gray-600">
                Instrucciones importantes para una recuperación exitosa
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cuidadosPostoperatorios.map((cuidado, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">{cuidado}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900 mb-1">Importante</h4>
                      <p className="text-sm text-blue-700">
                        Si experimentas dolor intenso, sangrado excesivo o cualquier complicación, 
                        contacta inmediatamente con nosotros al 976 527 761 (24h disponible).
                      </p>
                    </div>
                  </div>
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
                Pacientes Satisfechos
              </h2>
              <p className="text-xl text-gray-600">
                Casos reales de implantes exitosos en OneDental
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
                        {testimonio.tipo}
                      </Badge>
                    </div>
                    <Quote className="h-8 w-8 text-emerald-600 mb-4" />
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
                Preguntas Frecuentes sobre Implantes
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
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Listo para recuperar tu sonrisa completa?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Consulta gratuita con TAC 3D incluido. Financiación sin intereses disponible. 
              Garantía de 25 años en todos nuestros implantes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                <Calendar className="h-5 w-5 mr-2" />
                Consulta + TAC Gratuito
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="h-5 w-5 mr-2" />
                Llamar: 976 527 761
              </Button>
            </div>
            <p className="text-sm text-emerald-200 mt-6">
              📍 Calle Pablo Neruda, 17, 50018 Zaragoza | ⏰ Lun-Vie: 9:00-17:00
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
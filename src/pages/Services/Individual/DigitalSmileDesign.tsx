import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Sparkles,
  Camera,
  Monitor,
  Users,
  Clock,
  Award,
  CheckCircle,
  Phone,
  Calendar,
  Star,
  Quote,
  ArrowRight,
  Download,
  Play
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Progress } from '../../../components/ui/progress';

export default function DigitalSmileDesign() {
  const [pasoActivo, setPasoActivo] = useState(0);

  const ventajas = [
    {
      icono: <Monitor className="h-6 w-6" />,
      titulo: 'Diseño Digital 3D',
      descripcion: 'Visualiza tu nueva sonrisa antes del tratamiento con tecnología avanzada'
    },
    {
      icono: <Camera className="h-6 w-6" />,
      titulo: 'Fotografía Especializada',
      descripcion: 'Análisis facial completo con cámaras de alta definición'
    },
    {
      icono: <Users className="h-6 w-6" />,
      titulo: 'Participación del Paciente',
      descripcion: 'Tú decides cómo quieres que sea tu sonrisa perfecta'
    },
    {
      icono: <Award className="h-6 w-6" />,
      titulo: 'Resultados Predecibles',
      descripcion: 'Máxima precisión y resultados garantizados'
    }
  ];

  const proceso = [
    {
      numero: 1,
      titulo: 'Análisis Digital',
      descripcion: 'Fotografías, videos y análisis facial completo',
      duracion: '45 min',
      detalles: 'Capturamos imágenes de alta resolución de tu rostro y sonrisa desde múltiples ángulos'
    },
    {
      numero: 2,
      titulo: 'Diseño Personalizado',
      descripcion: 'Creación del diseño digital de tu nueva sonrisa',
      duracion: '2-3 días',
      detalles: 'Nuestro equipo diseña digitalmente tu sonrisa ideal considerando tu anatomía facial'
    },
    {
      numero: 3,
      titulo: 'Presentación 3D',
      descripcion: 'Te mostramos el resultado final antes de empezar',
      duracion: '30 min',
      detalles: 'Presentamos el diseño en 3D y realizamos los ajustes que desees'
    },
    {
      numero: 4,
      titulo: 'Ejecución del Tratamiento',
      descripcion: 'Realizamos el tratamiento siguiendo el diseño digital',
      duracion: 'Variable',
      detalles: 'Ejecutamos el plan de tratamiento con precisión milimétrica'
    }
  ];

  const testimonios = [
    {
      nombre: 'María González',
      edad: 34,
      testimonio: 'El Digital Smile Design cambió mi vida. Ver mi sonrisa antes del tratamiento me dio total confianza.',
      rating: 5,
      tratamiento: 'DSD + Carillas'
    },
    {
      nombre: 'Carlos Martín',
      edad: 42,
      testimonio: 'Increíble tecnología. Exactamente como me lo enseñaron en el diseño digital.',
      rating: 5,
      tratamiento: 'DSD + Implantes'
    }
  ];

  const preguntasFrecuentes = [
    {
      pregunta: '¿Qué es exactamente el Digital Smile Design?',
      respuesta: 'Es una tecnología avanzada que nos permite diseñar digitalmente tu sonrisa perfecta antes de realizar cualquier tratamiento, utilizando fotografías y videos especializados.'
    },
    {
      pregunta: '¿Cuánto tiempo toma el proceso completo?',
      respuesta: 'El análisis y diseño inicial toma 2-3 días. El tratamiento posterior depende del plan específico, desde 1 semana para carillas hasta varios meses para casos complejos.'
    },
    {
      pregunta: '¿El resultado será exactamente como en el diseño?',
      respuesta: 'Sí, trabajamos con precisión milimétrica siguiendo el diseño digital aprobado por ti. Es por eso que los resultados son tan predecibles.'
    },
    {
      pregunta: '¿Es compatible con cualquier tratamiento dental?',
      respuesta: 'El DSD se puede aplicar a carillas, coronas, implantes, ortodoncia y blanqueamientos. Es especialmente útil en casos de estética dental.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Smile Design Zaragoza - OneDental Dr. Onésimo</title>
        <meta name="description" content="Diseña tu sonrisa perfecta con tecnología Digital Smile Design en Zaragoza. Visualiza tu resultado antes del tratamiento. Primera consulta gratuita." />
        <meta name="keywords" content="digital smile design, DSD, diseño sonrisa digital, odontología estética Zaragoza, carillas digitales" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-white/20 text-white border-white/30 mb-4">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Tecnología Avanzada
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Digital Smile Design
                  <span className="block text-3xl lg:text-4xl text-blue-200">en Zaragoza</span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Diseña tu sonrisa perfecta con la tecnología más avanzada. 
                  Visualiza tu resultado antes de empezar el tratamiento y participa 
                  activamente en el diseño de tu nueva sonrisa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    <Calendar className="h-5 w-5 mr-2" />
                    Consulta Gratuita DSD
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Phone className="h-5 w-5 mr-2" />
                    976 527 761
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/digital-smile-design.JPG" 
                  alt="Digital Smile Design en OneDental"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Dr. Onésimo Fernández</p>
                  <p className="text-sm text-blue-200">Especialista en Digital Smile Design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Información Clave */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Proceso Rápido</h3>
                  <p className="text-gray-600">Diseño completo en 2-3 días laborables</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Resultados Garantizados</h3>
                  <p className="text-gray-600">Precisión del 99% en el resultado final</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Totalmente Personalizado</h3>
                  <p className="text-gray-600">Diseñado específicamente para ti</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Proceso Paso a Paso */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Proceso Digital Smile Design
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un proceso simple y tecnológico que te permitirá ver tu sonrisa perfecta 
                antes de comenzar cualquier tratamiento
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                {proceso.map((paso, index) => (
                  <Card 
                    key={index}
                    className={`cursor-pointer transition-all ${
                      pasoActivo === index ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:shadow-lg'
                    }`}
                    onClick={() => setPasoActivo(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                          pasoActivo === index ? 'bg-blue-600' : 'bg-gray-400'
                        }`}>
                          {paso.numero}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold">{paso.titulo}</h3>
                            <Badge variant="outline">{paso.duracion}</Badge>
                          </div>
                          <p className="text-gray-600 mb-2">{paso.descripcion}</p>
                          {pasoActivo === index && (
                            <p className="text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">
                              {paso.detalles}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="lg:sticky lg:top-8 lg:self-start">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">¿Por qué elegir DSD?</h3>
                    <div className="space-y-4">
                      {ventajas.map((ventaja, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="text-blue-600 mt-1">
                            {ventaja.icono}
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">{ventaja.titulo}</h4>
                            <p className="text-sm text-gray-600">{ventaja.descripcion}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6">
                      <Calendar className="h-4 w-4 mr-2" />
                      Reservar Consulta DSD
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Casos de Éxito con DSD
              </h2>
              <p className="text-xl text-gray-600">
                Pacientes reales que transformaron su sonrisa con Digital Smile Design
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
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Preguntas Frecuentes sobre DSD
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
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Listo para diseñar tu sonrisa perfecta?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Reserva tu consulta gratuita de Digital Smile Design y descubre 
              cómo puedes tener la sonrisa de tus sueños
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
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Sparkles,
  Sun,
  Home,
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
  AlertTriangle
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Progress } from '../../../components/ui/progress';

export default function BlanqueamientoDental() {
  const [tipoBlanqueamiento, setTipoBlanqueamiento] = useState('clinica');

  const ventajas = [
    {
      icono: <Zap className="h-6 w-6" />,
      titulo: 'Resultados Inmediatos',
      descripcion: 'Hasta 8 tonos más blanco en una sola sesión'
    },
    {
      icono: <Shield className="h-6 w-6" />,
      titulo: 'Totalmente Seguro',
      descripcion: 'Productos profesionales que no dañan el esmalte'
    },
    {
      icono: <Award className="h-6 w-6" />,
      titulo: 'Duración Prolongada',
      descripcion: 'Resultados que duran hasta 3 años con cuidado adecuado'
    },
    {
      icono: <Clock className="h-6 w-6" />,
      titulo: 'Procedimiento Rápido',
      descripcion: 'Solo 60-90 minutos para una sonrisa más brillante'
    }
  ];

  const tiposBlanqueamiento = [
    {
      id: 'clinica',
      nombre: 'Blanqueamiento en Clínica',
      descripcion: 'Tratamiento profesional con resultados inmediatos',
      precio: '350€',
      duracion: '90 minutos',
      tonos: 'Hasta 8 tonos',
      ventajas: ['Resultados inmediatos', 'Supervisión profesional', 'Máxima potencia', 'Sin sensibilidad']
    },
    {
      id: 'domicilio',
      nombre: 'Blanqueamiento en Casa',
      descripcion: 'Kit personalizado para uso domiciliario',
      precio: '180€',
      duracion: '2-3 semanas',
      tonos: 'Hasta 5 tonos',
      ventajas: ['Comodidad del hogar', 'Férulas personalizadas', 'Tratamiento gradual', 'Económico']
    },
    {
      id: 'combinado',
      nombre: 'Tratamiento Combinado',
      descripcion: 'Clínica + domicilio para máximos resultados',
      precio: '450€',
      duracion: '1 día + 2 semanas',
      tonos: 'Hasta 10 tonos',
      ventajas: ['Máximos resultados', 'Duración extendida', 'Mejor relación calidad-precio', 'Mantenimiento incluido']
    }
  ];

  const proceso = [
    {
      numero: 1,
      titulo: 'Evaluación Inicial',
      descripcion: 'Examen dental y determinación del color inicial',
      duracion: '20 min'
    },
    {
      numero: 2,
      titulo: 'Preparación',
      descripcion: 'Protección de encías y preparación dental',
      duracion: '15 min'
    },
    {
      numero: 3,
      titulo: 'Aplicación del Gel',
      descripcion: 'Aplicación del gel blanqueador profesional',
      duracion: '45 min'
    },
    {
      numero: 4,
      titulo: 'Activación LED',
      descripcion: 'Activación con luz LED especializada',
      duracion: '15 min'
    }
  ];

  const candidatos = [
    'Dientes amarillentos por edad',
    'Manchas por café, té o tabaco',
    'Decoloración por medicamentos',
    'Manchas por alimentos',
    'Deseo de sonrisa más brillante',
    'Preparación para eventos especiales'
  ];

  const contraindicaciones = [
    'Embarazo y lactancia',
    'Menores de 16 años',
    'Hipersensibilidad dental severa',
    'Restauraciones extensas en zona visible',
    'Gingivitis o periodontitis activa',
    'Expectativas irreales'
  ];

  const testimonios = [
    {
      nombre: 'Laura Jiménez',
      edad: 29,
      testimonio: 'Increíble el cambio en una sola sesión. Mis dientes están 6 tonos más blancos y sin sensibilidad.',
      rating: 5,
      tratamiento: 'Blanqueamiento en Clínica'
    },
    {
      nombre: 'Roberto García',
      edad: 42,
      testimonio: 'El tratamiento combinado fue perfecto. Resultados duraderos y muy naturales.',
      rating: 5,
      tratamiento: 'Tratamiento Combinado'
    }
  ];

  const preguntasFrecuentes = [
    {
      pregunta: '¿Es seguro el blanqueamiento dental?',
      respuesta: 'Sí, es completamente seguro cuando se realiza por profesionales. Utilizamos productos de grado clínico que no dañan el esmalte dental.'
    },
    {
      pregunta: '¿Cuánto dura el efecto del blanqueamiento?',
      respuesta: 'Los resultados pueden durar entre 1-3 años dependiendo de tus hábitos alimenticios y de higiene. Proporcionamos recomendaciones para maximizar la duración.'
    },
    {
      pregunta: '¿Produce sensibilidad dental?',
      respuesta: 'Con nuestros productos profesionales y técnica adecuada, la sensibilidad es mínima y temporal. Utilizamos agentes desensibilizantes preventivos.'
    },
    {
      pregunta: '¿Funciona en todos los tipos de manchas?',
      respuesta: 'Es muy efectivo para manchas por edad, alimentos y tabaco. Las manchas por medicamentos pueden requerir tratamientos adicionales.'
    },
    {
      pregunta: '¿Cuántas sesiones necesito?',
      respuesta: 'Generalmente una sesión en clínica es suficiente. Casos severos pueden requerir 2-3 sesiones para resultados óptimos.'
    }
  ];

  const cuidadosPost = [
    'Evitar alimentos y bebidas con colorantes las primeras 48h',
    'No fumar durante las primeras 24-48 horas',
    'Usar pasta dental para dientes sensibles si es necesario',
    'Mantener excelente higiene oral',
    'Limitar consumo de café, té y vino tinto',
    'Revisiones periódicas cada 6 meses'
  ];

  const alimentosEvitar = [
    { nombre: 'Café y té', tiempo: '48 horas' },
    { nombre: 'Vino tinto', tiempo: '72 horas' },
    { nombre: 'Salsas oscuras', tiempo: '24 horas' },
    { nombre: 'Frutas con color', tiempo: '24 horas' },
    { nombre: 'Refrescos de cola', tiempo: '48 horas' },
    { nombre: 'Chocolate', tiempo: '24 horas' }
  ];

  return (
    <>
      <Helmet>
        <title>Blanqueamiento Dental Zaragoza - OneDental Dr. Onésimo</title>
        <meta name="description" content="Blanqueamiento dental en Zaragoza. Hasta 8 tonos más blanco en 90 minutos. Resultados inmediatos y duraderos. Primera consulta gratuita." />
        <meta name="keywords" content="blanqueamiento dental Zaragoza, blanqueamiento profesional, dientes blancos, sonrisa brillante" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-white/20 text-white border-white/30 mb-4">
                  <Sun className="h-4 w-4 mr-2" />
                  Sonrisa Brillante
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Blanqueamiento Dental
                  <span className="block text-3xl lg:text-4xl text-yellow-200">en Zaragoza</span>
                </h1>
                <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
                  Consigue una sonrisa hasta 8 tonos más blanca en solo 90 minutos. 
                  Tratamiento profesional, seguro y con resultados inmediatos que 
                  duran hasta 3 años.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-orange-600 hover:bg-yellow-50">
                    <Sparkles className="h-5 w-5 mr-2" />
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
                  src="/images/blanqueamiento_1.jpg" 
                  alt="Blanqueamiento dental OneDental Zaragoza"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Dr. Onésimo Fernández</p>
                  <p className="text-sm text-yellow-200">Especialista en Estética Dental</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Información Clave */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {ventajas.map((ventaja, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-yellow-600">
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

        {/* Tipos de Blanqueamiento */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Opciones de Blanqueamiento
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Elige el tratamiento que mejor se adapte a tus necesidades y estilo de vida
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiposBlanqueamiento.map((tipo) => (
                <Card 
                  key={tipo.id}
                  className={`cursor-pointer transition-all ${
                    tipoBlanqueamiento === tipo.id ? 'ring-2 ring-yellow-500 bg-yellow-50' : 'hover:shadow-lg'
                  } ${tipo.id === 'combinado' ? 'md:scale-105' : ''}`}
                  onClick={() => setTipoBlanqueamiento(tipo.id)}
                >
                  {tipo.id === 'combinado' && (
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-center py-2 text-sm font-medium">
                      ⭐ MÁS POPULAR
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold mb-2">{tipo.nombre}</h3>
                      <p className="text-gray-600 mb-4">{tipo.descripcion}</p>
                      <div className="text-3xl font-bold text-yellow-600 mb-2">{tipo.precio}</div>
                      <div className="text-sm text-gray-500 space-y-1">
                        <div>Tiempo: {tipo.duracion}</div>
                        <div>Resultado: {tipo.tonos}</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">Ventajas:</h4>
                      {tipo.ventajas.map((ventaja, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-yellow-600" />
                          <span className="text-sm text-gray-700">{ventaja}</span>
                        </div>
                      ))}
                    </div>
                    <Button className={`w-full mt-6 ${
                      tipoBlanqueamiento === tipo.id ? 'bg-yellow-600' : 'bg-gray-600'
                    }`}>
                      Más Información
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Proceso de Blanqueamiento en Clínica
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un procedimiento simple y cómodo que te dará resultados inmediatos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {proceso.map((paso, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto">
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

        {/* Candidatos y Contraindicaciones */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-800">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    Candidatos Ideales
                  </CardTitle>
                  <CardDescription>
                    El blanqueamiento es perfecto si tienes:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {candidatos.map((candidato, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{candidato}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-green-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Evaluación Gratuita
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-800">
                    <AlertTriangle className="h-6 w-6 mr-2" />
                    Contraindicaciones
                  </CardTitle>
                  <CardDescription>
                    El blanqueamiento no es recomendable si:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {contraindicaciones.map((contra, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0" />
                        <span className="text-gray-700">{contra}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <strong>Nota:</strong> Siempre realizamos una evaluación completa 
                      antes del tratamiento para garantizar tu seguridad.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cuidados Post-Tratamiento */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cuidados Post-Blanqueamiento
              </h2>
              <p className="text-xl text-gray-600">
                Sigue estos consejos para maximizar y mantener tus resultados
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Cuidados Generales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {cuidadosPost.map((cuidado, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                        <span className="text-gray-700">{cuidado}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alimentos a Evitar Temporalmente</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {alimentosEvitar.map((alimento, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-700">{alimento.nombre}</span>
                        <Badge variant="outline">{alimento.tiempo}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sonrisas Más Brillantes
              </h2>
              <p className="text-xl text-gray-600">
                Casos reales de pacientes con blanqueamiento dental
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
                    <Quote className="h-8 w-8 text-yellow-600 mb-4" />
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
                Preguntas Frecuentes sobre Blanqueamiento
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
        <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Listo para una sonrisa más brillante?
            </h2>
            <p className="text-xl text-yellow-100 mb-8">
              Consulta gratuita para evaluar tu caso. Resultados inmediatos 
              en una sola sesión. Financiación sin intereses disponible.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-yellow-50">
                <Sparkles className="h-5 w-5 mr-2" />
                Consulta Gratuita
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="h-5 w-5 mr-2" />
                Llamar: 976 527 761
              </Button>
            </div>
            <p className="text-sm text-yellow-200 mt-6">
              📍 Calle Pablo Neruda, 17, 50018 Zaragoza | ⏰ Lun-Vie: 9:00-17:00
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
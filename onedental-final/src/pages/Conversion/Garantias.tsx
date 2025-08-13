import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  Shield, 
  Award, 
  CheckCircle, 
  Clock, 
  RefreshCw,
  FileText,
  Phone,
  Calendar,
  Heart,
  Star,
  Users,
  Target,
  ArrowRight,
  AlertCircle,
  Info
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Alert, AlertDescription } from '../../components/ui/alert';

export default function Garantias() {
  const garantiasTratamientos = [
    {
      categoria: "Implantología",
      tratamientos: [
        {
          nombre: "Implantes Dentales",
          garantia: "10 años",
          descripcion: "Garantía total del implante incluyendo reposición sin coste",
          cobertura: ["Implante osteointegrado", "Corona protésica", "Revisiones anuales", "Reposición completa"],
          condiciones: "Mantenimiento de higiene adecuada y revisiones",
          icono: "🦷"
        },
        {
          nombre: "Regeneración Ósea",
          garantia: "5 años",
          descripcion: "Garantía de éxito del injerto óseo y regeneración",
          cobertura: ["Material de injerto", "Membrana protectora", "Revisiones postoperatorias"],
          condiciones: "Seguimiento de indicaciones post-quirúrgicas",
          icono: "🦴"
        }
      ]
    },
    {
      categoria: "Estética Dental",
      tratamientos: [
        {
          nombre: "Digital Smile Design",
          garantia: "5 años",
          descripcion: "Garantía del resultado estético y funcional",
          cobertura: ["Diseño digital", "Carillas/coronas", "Ajustes necesarios", "Satisfacción estética"],
          condiciones: "Uso de férula nocturna y cuidado adecuado",
          icono: "✨"
        },
        {
          nombre: "Carillas de Porcelana",
          garantia: "7 años",
          descripcion: "Garantía estructural y estética de las carillas",
          cobertura: ["Rotura o despegado", "Cambio de color", "Ajuste de mordida"],
          condiciones: "Higiene adecuada y revisiones semestrales",
          icono: "💎"
        },
        {
          nombre: "Blanqueamiento Dental",
          garantia: "2 años",
          descripcion: "Garantía de mantenimiento del tono conseguido",
          cobertura: ["Retoque gratuito anual", "Productos de mantenimiento"],
          condiciones: "Evitar alimentos que tiñen y revisiones",
          icono: "⚪"
        }
      ]
    },
    {
      categoria: "Ortodoncia",
      tratamientos: [
        {
          nombre: "Invisalign",
          garantia: "Resultado garantizado",
          descripcion: "Garantía de satisfacción con el resultado final",
          cobertura: ["Refinamiento hasta satisfacción", "Retenedores incluidos", "Seguimiento 2 años"],
          condiciones: "Uso según indicaciones y asistencia a citas",
          icono: "🦷"
        },
        {
          nombre: "Ortodoncia Tradicional",
          garantia: "Resultado garantizado",
          descripcion: "Garantía del resultado ortodóncico planificado",
          cobertura: ["Tratamiento hasta objetivo", "Retenedores incluidos", "Ajustes necesarios"],
          condiciones: "Cumplimiento del tratamiento y cuidados",
          icono: "🔧"
        }
      ]
    },
    {
      categoria: "Prótesis Dental",
      tratamientos: [
        {
          nombre: "Prótesis Fijas",
          garantia: "8 años",
          descripcion: "Garantía estructural y funcional de coronas y puentes",
          cobertura: ["Rotura o despegado", "Ajuste de oclusión", "Reemplazo necesario"],
          condiciones: "Higiene adecuada y no usar como herramienta",
          icono: "👑"
        },
        {
          nombre: "Prótesis Removibles",
          garantia: "3 años",
          descripcion: "Garantía de adaptación y funcionalidad",
          cobertura: ["Reajustes necesarios", "Reparaciones menores", "Rebase anual"],
          condiciones: "Uso adecuado y limpieza diaria",
          icono: "🦷"
        }
      ]
    }
  ];

  const garantiasGenerales = [
    {
      titulo: "Satisfacción Garantizada",
      descripcion: "Si no estás satisfecho con el resultado, trabajamos hasta conseguir tu sonrisa ideal",
      icono: <Heart className="h-8 w-8" />,
      color: "text-red-600"
    },
    {
      titulo: "Calidad de Materiales",
      descripcion: "Todos nuestros materiales son de primera calidad con certificación europea",
      icono: <Award className="h-8 w-8" />,
      color: "text-yellow-600"
    },
    {
      titulo: "Seguimiento Continuo",
      descripcion: "Seguimiento post-tratamiento incluido en todas nuestras garantías",
      icono: <Clock className="h-8 w-8" />,
      color: "text-blue-600"
    },
    {
      titulo: "Equipo Especializado",
      descripcion: "Garantía de tratamiento por especialistas certificados en cada área",
      icono: <Users className="h-8 w-8" />,
      color: "text-green-600"
    }
  ];

  const procesoProcedimiento = [
    {
      paso: 1,
      titulo: "Evaluación Inicial",
      descripcion: "Revisión completa del tratamiento y estado actual",
      tiempo: "Inmediato"
    },
    {
      paso: 2,
      titulo: "Diagnóstico Profesional",
      descripcion: "Análisis por nuestro equipo especializado",
      tiempo: "24-48 horas"
    },
    {
      paso: 3,
      titulo: "Plan de Acción",
      descripcion: "Propuesta de solución sin coste adicional",
      tiempo: "48 horas"
    },
    {
      paso: 4,
      titulo: "Resolución",
      descripcion: "Ejecución de la solución acordada",
      tiempo: "Según caso"
    }
  ];

  const exclusionesLimitaciones = [
    "Daños causados por traumatismos o accidentes externos",
    "Falta de seguimiento de las indicaciones post-operatorias",
    "No asistencia a las revisiones programadas",
    "Modificaciones realizadas por otros profesionales",
    "Desgaste normal por el paso del tiempo (más allá del período de garantía)",
    "Problemas derivados de bruxismo no tratado adecuadamente"
  ];

  const certificacionesCalidad = [
    { nombre: "ISO 9001:2015", descripcion: "Gestión de Calidad", vigencia: "2025" },
    { nombre: "Certificado CE", descripcion: "Conformidad Europea", vigencia: "Permanente" },
    { nombre: "Nobel Biocare Partner", descripcion: "Implantes Premium", vigencia: "2024" },
    { nombre: "Digital Smile Design", descripcion: "Protocolo DSD", vigencia: "2024" }
  ];

  return (
    <>
      <Helmet>
        <title>Garantías de Tratamientos Dentales - OneDental Zaragoza</title>
        <meta name="description" content="Conoce nuestras garantías de hasta 10 años en implantes, 7 años en carillas y garantía de satisfacción en todos los tratamientos dentales." />
        <meta name="keywords" content="garantía dental, implantes garantizados, carillas garantía, OneDental Zaragoza, seguridad tratamientos" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                <Shield className="h-4 w-4 mr-2" />
                Garantía Total
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Garantías de Tratamientos
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Tu tranquilidad es nuestra prioridad. Ofrecemos las garantías más amplias del sector 
                dental con hasta 10 años de cobertura en implantes y satisfacción garantizada
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <FileText className="h-5 w-5 mr-2" />
                  Ver Todas las Garantías
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Phone className="h-5 w-5 mr-2" />
                  Consultar Garantía
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* General Guarantees */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Nuestro Compromiso Contigo
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Garantías integrales que cubren todos los aspectos de tu tratamiento dental
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {garantiasGenerales.map((garantia, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 ${garantia.color}`}>
                      {garantia.icono}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{garantia.titulo}</h3>
                    <p className="text-gray-600">{garantia.descripcion}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Guarantees */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Garantías por Tratamiento
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cada tratamiento incluye garantías específicas adaptadas a sus características
              </p>
            </div>

            <div className="space-y-12">
              {garantiasTratamientos.map((categoria, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    {categoria.categoria}
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {categoria.tratamientos.map((tratamiento, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <CardHeader className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
                          <CardTitle className="flex items-center space-x-3">
                            <span className="text-2xl">{tratamiento.icono}</span>
                            <div>
                              <h4 className="text-xl font-bold">{tratamiento.nombre}</h4>
                              <Badge className="bg-white/20 text-white border-white/30 mt-1">
                                Garantía: {tratamiento.garantia}
                              </Badge>
                            </div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                          <p className="text-gray-700 mb-4">{tratamiento.descripcion}</p>
                          
                          <div className="mb-4">
                            <h5 className="font-semibold text-gray-900 mb-2">Cobertura incluida:</h5>
                            <div className="space-y-2">
                              {tratamiento.cobertura.map((item, i) => (
                                <div key={i} className="flex items-center space-x-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  <span className="text-sm text-gray-700">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <Alert>
                            <Info className="h-4 w-4" />
                            <AlertDescription className="text-sm">
                              <strong>Condiciones:</strong> {tratamiento.condiciones}
                            </AlertDescription>
                          </Alert>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Procedimiento de Garantía
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proceso simple y rápido para hacer efectiva tu garantía
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {procesoProcedimiento.map((paso, index) => (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {paso.paso}
                    </div>
                    {index < procesoProcedimiento.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{paso.titulo}</h3>
                  <p className="text-gray-600 text-sm mb-2">{paso.descripcion}</p>
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    {paso.tiempo}
                  </Badge>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <Phone className="h-5 w-5 mr-2" />
                Activar Garantía: 976 527 761
              </Button>
            </div>
          </div>
        </section>

        {/* Quality Certifications */}
        <section className="py-20 bg-gradient-to-r from-slate-800 to-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Certificaciones de Calidad
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Nuestras garantías están respaldadas por las certificaciones más exigentes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {certificacionesCalidad.map((cert, index) => (
                <Card key={index} className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
                    <h3 className="font-semibold mb-1">{cert.nombre}</h3>
                    <p className="text-sm text-slate-300 mb-2">{cert.descripcion}</p>
                    <Badge className="bg-green-600 text-white">
                      Vigente {cert.vigencia}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Exclusions */}
        <section className="py-20 bg-yellow-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Exclusiones y Limitaciones
              </h2>
              <p className="text-xl text-gray-600">
                Conoce las situaciones no cubiertas por nuestras garantías para total transparencia
              </p>
            </div>

            <Alert className="border-yellow-300 bg-yellow-50">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              <AlertDescription>
                <div className="text-gray-700">
                  <p className="font-semibold mb-3">Las garantías no cubren:</p>
                  <ul className="space-y-2">
                    {exclusionesLimitaciones.map((exclusion, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span className="text-sm">{exclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Tienes alguna duda sobre nuestras garantías?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Nuestro equipo está disponible para resolver todas tus preguntas sobre garantías y cobertura
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Calendar className="h-5 w-5 mr-2" />
                Consulta Gratuita
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Phone className="h-5 w-5 mr-2" />
                Llamar: 976 527 761
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Atención personalizada · Sin compromiso · Garantías por escrito
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

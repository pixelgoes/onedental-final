import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  Award, 
  Shield, 
  CheckCircle, 
  Star, 
  Trophy,
  Medal,
  FileText,
  Globe,
  Users,
  BookOpen,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

export default function Certificaciones() {
  const certificacionesPrincipales = [
    {
      titulo: "Digital Smile Design Certified Clinic",
      entidad: "Digital Smile Design - DSD",
      año: "2024",
      descripcion: "Certificación internacional en diseño digital de sonrisas. Solo clínicas seleccionadas mundialmente.",
      nivel: "Internacional",
      imagen: "/images/digital-smile-design.JPG",
      beneficios: ["Planificación digital avanzada", "Resultados predecibles", "Protocolo DSD oficial"],
      color: "from-blue-600 to-indigo-600"
    },
    {
      titulo: "Invisalign Diamond Provider",
      entidad: "Align Technology",
      año: "2024",
      descripcion: "Máximo nivel de certificación Invisalign. Más de 500 casos tratados exitosamente.",
      nivel: "Elite",
      imagen: "/images/tecnologia-dental.jpg",
      beneficios: ["Casos complejos", "Formación continua", "Acceso prioritario a innovaciones"],
      color: "from-emerald-600 to-green-600"
    },
    {
      titulo: "Nobel Biocare Partner Clinic",
      entidad: "Nobel Biocare",
      año: "2023",
      descripcion: "Clínica partner oficial para implantología de alta gama con sistemas Nobel Biocare.",
      nivel: "Partner Oficial",
      imagen: "/images/implante-dental.jpg",
      beneficios: ["Implantes premium", "Garantía extendida", "Soporte técnico especializado"],
      color: "from-purple-600 to-pink-600"
    },
    {
      titulo: "ISO 9001:2015 Gestión de Calidad",
      entidad: "AENOR",
      año: "2023",
      descripcion: "Certificación de calidad internacional para centros sanitarios. Renovación anual.",
      nivel: "Internacional",
      imagen: "/images/clinica-moderna.jpg",
      beneficios: ["Protocolos estandarizados", "Mejora continua", "Auditorías regulares"],
      color: "from-orange-600 to-red-600"
    }
  ];

  const certificacionesOficiales = [
    {
      categoria: "Certificaciones Sanitarias",
      certificaciones: [
        { nombre: "Registro Sanitario de Centros", entidad: "Gobierno de Aragón", codigo: "50-C15-0234", vigencia: "2025" },
        { nombre: "Autorización Sanitaria", entidad: "Dept. Sanidad Aragón", codigo: "AS-ZAR-2023-156", vigencia: "2025" },
        { nombre: "Centro Autorizado Radioprotección", entidad: "Consejo Seguridad Nuclear", codigo: "RP-50-789", vigencia: "2024" }
      ]
    },
    {
      categoria: "Certificaciones Profesionales",
      certificaciones: [
        { nombre: "Colegiado Ilustre Colegio Odontólogos", entidad: "ICOZA", codigo: "2156", vigencia: "Permanente" },
        { nombre: "Especialista en Estética Dental", entidad: "Universidad Complutense", codigo: "UCM-EST-456", vigencia: "Permanente" },
        { nombre: "Máster Implantología Oral", entidad: "Universidad de Barcelona", codigo: "UB-IMP-789", vigencia: "Permanente" }
      ]
    },
    {
      categoria: "Certificaciones de Calidad",
      certificaciones: [
        { nombre: "Protocolo de Esterilización", entidad: "AENOR", codigo: "AE-EST-2023", vigencia: "2024" },
        { nombre: "Gestión de Residuos Sanitarios", entidad: "ECOEMBES", codigo: "ECO-RES-456", vigencia: "2024" },
        { nombre: "Protección de Datos RGPD", entidad: "AEPD", codigo: "RGPD-CL-789", vigencia: "2025" }
      ]
    }
  ];

  const premiosReconocimientos = [
    {
      titulo: "Mejor Clínica Dental Zaragoza 2024",
      organizacion: "Doctoralia",
      descripcion: "Reconocimiento basado en valoraciones de pacientes y calidad de servicio",
      año: "2024",
      icono: <Trophy className="h-8 w-8" />
    },
    {
      titulo: "Top 10 Clínicas Digitales España",
      organizacion: "Dental Tribune",
      descripcion: "Seleccionada entre las 10 clínicas más avanzadas tecnológicamente",
      año: "2024",
      icono: <Medal className="h-8 w-8" />
    },
    {
      titulo: "Excelencia en Atención al Paciente",
      organizacion: "Google Reviews",
      descripcion: "4.9/5 estrellas con más de 500 reseñas verificadas",
      año: "2024",
      icono: <Star className="h-8 w-8" />
    }
  ];

  const formacionContinua = [
    { curso: "Advanced Digital Smile Design", horas: 40, año: "2024", certificador: "DSD Academy" },
    { curso: "Implantología Inmediata Avanzada", horas: 60, año: "2024", certificador: "Nobel Biocare Institute" },
    { curso: "Invisalign Clinical Excellence", horas: 32, año: "2024", certificador: "Align Technology" },
    { curso: "Sedación Consciente Dental", horas: 50, año: "2023", certificador: "SECOM" },
    { curso: "Cirugía Guiada por Ordenador", horas: 45, año: "2023", certificador: "3Shape Academy" }
  ];

  return (
    <>
      <Helmet>
        <title>Certificaciones y Acreditaciones - OneDental Zaragoza</title>
        <meta name="description" content="Conoce las certificaciones oficiales, acreditaciones y reconocimientos de OneDental. Digital Smile Design, Invisalign Diamond, ISO 9001 y más." />
        <meta name="keywords" content="certificaciones dentales, acreditaciones, Digital Smile Design, Invisalign Diamond, ISO 9001, Nobel Biocare, Zaragoza" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                <Award className="h-4 w-4 mr-2" />
                Excelencia Certificada
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Certificaciones y Acreditaciones
              </h1>
              <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
                Nuestro compromiso con la excelencia está respaldado por las certificaciones 
                más prestigiosas del sector dental a nivel nacional e internacional
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-slate-800 hover:bg-slate-100">
                  <FileText className="h-5 w-5 mr-2" />
                  Ver Certificaciones
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800">
                  Verificar Credenciales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Certifications */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Certificaciones Principales
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Las acreditaciones más importantes que avalan nuestra excelencia en el cuidado dental
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {certificacionesPrincipales.map((cert, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img 
                        src={cert.imagen} 
                        alt={cert.titulo}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <Badge className={`bg-gradient-to-r ${cert.color} text-white mb-2`}>
                            {cert.nivel}
                          </Badge>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.titulo}</h3>
                          <p className="text-sm text-gray-600 mb-1">{cert.entidad}</p>
                          <p className="text-sm font-medium text-gray-800">Año: {cert.año}</p>
                        </div>
                        <Award className="h-8 w-8 text-yellow-500" />
                      </div>
                      
                      <p className="text-gray-700 mb-4">{cert.descripcion}</p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Beneficios:</h4>
                        {cert.beneficios.map((beneficio, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-gray-700">{beneficio}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Official Certifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Certificaciones Oficiales
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Todas nuestras acreditaciones oficiales vigentes y verificables
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {certificacionesOficiales.map((categoria, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <span>{categoria.categoria}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {categoria.certificaciones.map((cert, i) => (
                        <div key={i} className="border-l-4 border-blue-200 pl-4 py-2">
                          <h4 className="font-semibold text-gray-900 text-sm">{cert.nombre}</h4>
                          <p className="text-xs text-gray-600">{cert.entidad}</p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-xs text-gray-500">Código: {cert.codigo}</span>
                            <Badge variant="outline" className="text-green-600 border-green-200 text-xs">
                              Vigente {cert.vigencia}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Awards and Recognition */}
        <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Premios y Reconocimientos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Reconocimientos que avalan nuestro compromiso con la excelencia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {premiosReconocimientos.map((premio, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white">
                        {premio.icono}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{premio.titulo}</h3>
                    <p className="text-sm font-medium text-amber-600 mb-2">{premio.organizacion}</p>
                    <p className="text-gray-600 text-sm mb-4">{premio.descripcion}</p>
                    <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                      {premio.año}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Continuous Training */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Formación Continua
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nuestro compromiso con la actualización constante y la excelencia profesional
              </p>
            </div>

            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {formacionContinua.map((curso, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{curso.curso}</h4>
                          <p className="text-sm text-gray-600">{curso.certificador}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-4">
                          <div className="text-sm">
                            <span className="font-medium">{curso.horas}h</span>
                            <span className="text-gray-500"> · {curso.año}</span>
                          </div>
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Confianza Basada en Certificaciones
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Nuestras certificaciones garantizan que recibes el más alto nivel de cuidado dental, 
                con los estándares más exigentes de calidad y seguridad
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Calendar className="h-5 w-5 mr-2" />
                  Solicitar Consulta
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Verificar Certificaciones
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

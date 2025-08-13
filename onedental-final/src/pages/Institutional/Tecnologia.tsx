import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  Zap, 
  Microscope, 
  Scan, 
  Camera, 
  Monitor, 
  Cpu,
  Shield,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Eye,
  Target
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

export default function Tecnologia() {
  const tecnologias = [
    {
      nombre: "Digital Smile Design (DSD)",
      categoria: "Diseño Digital",
      descripcion: "Software avanzado para diseñar sonrisas perfectas antes del tratamiento",
      beneficios: ["Previsualización 3D", "Planificación precisa", "Resultados predecibles"],
      imagen: "/images/digital-smile-design.JPG",
      certificacion: "DSD Certified Clinic",
      icono: <Monitor className="h-8 w-8" />
    },
    {
      nombre: "Escáner Intraoral 3D",
      categoria: "Diagnóstico",
      descripcion: "Tecnología de escaneo 3D para impresiones digitales precisas",
      beneficios: ["Sin moldes tradicionales", "Mayor comodidad", "Precisión submilimétrica"],
      imagen: "/images/tecnologia-dental.jpg",
      certificacion: "iTero Element",
      icono: <Scan className="h-8 w-8" />
    },
    {
      nombre: "Microscopio Quirúrgico",
      categoria: "Cirugía",
      descripcion: "Microscopio de alta precisión para cirugías dentales complejas",
      beneficios: ["Magnificación 25x", "Iluminación LED", "Documentación HD"],
      imagen: "/images/clinica-moderna.jpg",
      certificacion: "Carl Zeiss",
      icono: <Microscope className="h-8 w-8" />
    },
    {
      nombre: "TAC 3D Cone Beam",
      categoria: "Radiología",
      descripcion: "Tomografía computarizada 3D de baja radiación",
      beneficios: ["Imágenes 3D precisas", "Baja radiación", "Diagnóstico exacto"],
      imagen: "/images/clinica-moderna_1.jpg",
      certificacion: "FDA Approved",
      icono: <Camera className="h-8 w-8" />
    },
    {
      nombre: "Láser Dental Diodo",
      categoria: "Terapéutica",
      descripcion: "Tecnología láser para tratamientos periodontales y cirugía",
      beneficios: ["Mínimamente invasivo", "Cicatrización rápida", "Sin sangrado"],
      imagen: "/images/clinica-moderna_8.jpg",
      certificacion: "CE Medical",
      icono: <Zap className="h-8 w-8" />
    },
    {
      nombre: "Sistema CAD/CAM",
      categoria: "Prótesis",
      descripcion: "Diseño y fabricación asistida por computadora",
      beneficios: ["Restauraciones en 1 día", "Ajuste perfecto", "Materiales premium"],
      imagen: "/images/tecnologia-dental.jpg",
      certificacion: "CEREC System",
      icono: <Cpu className="h-8 w-8" />
    }
  ];

  const certificaciones = [
    { nombre: "Digital Smile Design Certified", autoridad: "DSD International", año: "2024" },
    { nombre: "Invisalign Diamond Provider", autoridad: "Align Technology", año: "2024" },
    { nombre: "Nobel Biocare Partner", autoridad: "Nobel Biocare", año: "2023" },
    { nombre: "ISO 9001:2015", autoridad: "AENOR", año: "2023" },
    { nombre: "Certificado Sanitario", autoridad: "Gobierno de Aragón", año: "2024" }
  ];

  const innovaciones = [
    {
      titulo: "Inteligencia Artificial",
      descripcion: "Análisis predictivo para diagnósticos más precisos",
      icono: <Sparkles className="h-6 w-6" />
    },
    {
      titulo: "Realidad Aumentada",
      descripcion: "Simulación en tiempo real de resultados de tratamientos",
      icono: <Eye className="h-6 w-6" />
    },
    {
      titulo: "Flujo Digital Completo",
      descripcion: "Desde diagnóstico hasta fabricación completamente digital",
      icono: <Target className="h-6 w-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tecnología Avanzada - OneDental Zaragoza</title>
        <meta name="description" content="Descubre la tecnología dental más avanzada en Zaragoza. Digital Smile Design, escáner 3D, microscopio quirúrgico y más en OneDental." />
        <meta name="keywords" content="tecnología dental, Digital Smile Design, escáner 3D, microscopio dental, TAC 3D, láser dental, Zaragoza" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                <Zap className="h-4 w-4 mr-2" />
                Tecnología de Vanguardia
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Tecnología Dental Avanzada
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                En OneDental utilizamos la tecnología más avanzada del sector dental para 
                ofrecerte tratamientos precisos, cómodos y con resultados excepcionales
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Conoce Nuestro Equipamiento
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Solicitar Consulta Tecnológica
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Nuestro Arsenal Tecnológico
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cada pieza de tecnología ha sido cuidadosamente seleccionada para garantizar 
                la máxima precisión y comodidad en tus tratamientos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tecnologias.map((tech, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <div className="relative overflow-hidden">
                    <img 
                      src={tech.imagen} 
                      alt={tech.nombre}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">
                        {tech.categoria}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                      <div className="text-blue-600">
                        {tech.icono}
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.nombre}</h3>
                    <p className="text-gray-600 mb-4">{tech.descripcion}</p>
                    
                    <div className="space-y-2 mb-4">
                      {tech.beneficios.map((beneficio, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">{beneficio}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        <Award className="h-3 w-3 mr-1" />
                        {tech.certificacion}
                      </Badge>
                      <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700">
                        Ver detalles
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Innovations Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Innovaciones del Futuro, Hoy
              </h2>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                Implementamos las últimas innovaciones tecnológicas para estar siempre 
                a la vanguardia del cuidado dental
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {innovaciones.map((innovacion, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                    <div className="text-white">
                      {innovacion.icono}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{innovacion.titulo}</h3>
                  <p className="text-indigo-100">{innovacion.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Certificaciones y Acreditaciones
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nuestro compromiso con la excelencia está respaldado por las certificaciones 
                más prestigiosas del sector dental
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificaciones.map((cert, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <Award className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{cert.nombre}</h3>
                    <p className="text-gray-600 text-sm mb-2">{cert.autoridad}</p>
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      {cert.año}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">
                ¿Por qué elegir tecnología avanzada?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <Shield className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                  <h3 className="text-xl font-semibold mb-2">Mayor Precisión</h3>
                  <p className="text-blue-100">
                    Diagnósticos más exactos y tratamientos con precisión milimétrica
                  </p>
                </div>
                <div>
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                  <h3 className="text-xl font-semibold mb-2">Mejor Comodidad</h3>
                  <p className="text-blue-100">
                    Procedimientos menos invasivos y más cómodos para el paciente
                  </p>
                </div>
                <div>
                  <Zap className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                  <h3 className="text-xl font-semibold mb-2">Resultados Superiores</h3>
                  <p className="text-blue-100">
                    Tratamientos más efectivos con resultados duraderos y estéticos
                  </p>
                </div>
              </div>

              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Experimenta la Diferencia Tecnológica
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

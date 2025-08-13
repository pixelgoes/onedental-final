import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Camera, 
  Move3D, 
  MapPin, 
  Info, 
  ChevronLeft, 
  ChevronRight, 
  Calendar,
  Phone,
  Maximize,
  Navigation
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';

interface AreaClinica {
  id: string;
  nombre: string;
  descripcion: string;
  tecnologia: string[];
  imagen: string;
  hotspots: {
    x: number;
    y: number;
    info: string;
    titulo: string;
  }[];
  caracteristicas: string[];
  conectaA: string[];
}

const areasClinica: AreaClinica[] = [
  {
    id: 'recepcion',
    nombre: 'Recepción OneDental',
    descripcion: 'Bienvenido a nuestro espacio de recepción moderno y acogedor. Aquí nuestro equipo administrativo te atenderá con la máxima profesionalidad.',
    tecnologia: ['Sistema gestión digital', 'Cita online', 'Historial digital'],
    imagen: '/images/instalaciones/recepcion-moderna.jpg',
    hotspots: [
      { x: 30, y: 40, titulo: 'Mostrador recepción', info: 'Atención personalizada con sistema digital avanzado' },
      { x: 70, y: 60, titulo: 'Zona espera', info: 'Asientos cómodos con WiFi gratuito' },
      { x: 50, y: 20, titulo: 'Información', info: 'Pantallas informativas con tratamientos' }
    ],
    caracteristicas: [
      'Atención personalizada 24/7',
      'Sistema de citas online',
      'Gestión digital de historiales',
      'WiFi gratuito',
      'Revistas especializadas'
    ],
    conectaA: ['sala-espera-general', 'despacho-doctor']
  },
  {
    id: 'sala-espera-general',
    nombre: 'Sala de Espera General',
    descripcion: 'Espacio amplio y luminoso diseñado para tu comodidad mientras esperas tu consulta.',
    tecnologia: ['Purificador aire', 'Climatización inteligente', 'Sistema sonido ambiental'],
    imagen: '/images/instalaciones/sala-espera-general.jpg',
    hotspots: [
      { x: 40, y: 50, titulo: 'Asientos ergonómicos', info: 'Sillones diseñados para máximo confort' },
      { x: 80, y: 30, titulo: 'Revistas y libros', info: 'Selección de lectura actualizada' },
      { x: 20, y: 70, titulo: 'Purificador aire', info: 'Sistema HEPA de última generación' }
    ],
    caracteristicas: [
      'Asientos ergonómicos de alta calidad',
      'Iluminación natural optimizada',
      'Sistema purificación de aire HEPA',
      'Temperatura controlada automáticamente',
      'Música ambiental relajante'
    ],
    conectaA: ['recepcion', 'sala-espera-ninos', 'gabinete-1']
  },
  {
    id: 'sala-espera-ninos',
    nombre: 'Sala de Espera Niños',
    descripcion: 'Espacio especialmente diseñado para los más pequeños con juegos educativos y decoración divertida.',
    tecnologia: ['Tablet educativa', 'Juegos interactivos', 'Sistema seguridad infantil'],
    imagen: '/images/instalaciones/sala-espera-ninos.jpg',
    hotspots: [
      { x: 35, y: 45, titulo: 'Zona de juegos', info: 'Juegos educativos y libros infantiles' },
      { x: 60, y: 30, titulo: 'Tablet interactiva', info: 'Juegos dentales educativos' },
      { x: 25, y: 75, titulo: 'Asientos familiares', info: 'Espacio para padres e hijos' }
    ],
    caracteristicas: [
      'Decoración temática dental divertida',
      'Juegos educativos sobre higiene dental',
      'Libros y cuentos para niños',
      'Tablet con aplicaciones educativas',
      'Zona segura para padres'
    ],
    conectaA: ['sala-espera-general', 'gabinete-1']
  },
  {
    id: 'gabinete-1',
    nombre: 'Gabinete de Tratamiento 1',
    descripcion: 'Gabinete principal equipado con la última tecnología dental para tratamientos generales y estéticos.',
    tecnologia: ['Digital Smile Design', 'Scanner intraoral', 'Láser dental', 'Microscopio'],
    imagen: '/images/instalaciones/gabinete-tratamiento.jpg',
    hotspots: [
      { x: 45, y: 40, titulo: 'Sillón dental', info: 'Sillón ergonómico con última tecnología' },
      { x: 70, y: 25, titulo: 'Monitor paciente', info: 'Pantalla para mostrar radiografías y tratamientos' },
      { x: 25, y: 60, titulo: 'Scanner intraoral', info: 'Tecnología 3D para impresiones digitales' }
    ],
    caracteristicas: [
      'Sillón dental ergonómico programable',
      'Iluminación LED sin sombras',
      'Sistema aspiración de alta potencia',
      'Monitor para visualización de tratamientos',
      'Tecnología Digital Smile Design'
    ],
    conectaA: ['sala-espera-general', 'gabinete-2', 'sala-rayos-x']
  },
  {
    id: 'gabinete-2',
    nombre: 'Gabinete de Tratamiento 2',
    descripcion: 'Segundo gabinete especializado en implantología y cirugía oral menor.',
    tecnologia: ['Cirugía guiada', 'Piezocirugía', 'Regeneración ósea', 'Sedación consciente'],
    imagen: '/images/instalaciones/gabinete-tratamiento.jpg',
    hotspots: [
      { x: 50, y: 45, titulo: 'Sillón cirugía', info: 'Equipamiento especializado para implantes' },
      { x: 30, y: 30, titulo: 'Piezocirugía', info: 'Tecnología ultrasónica para cirugía precisa' },
      { x: 75, y: 55, titulo: 'Sistema irrigación', info: 'Irrigación con suero fisiológico estéril' }
    ],
    caracteristicas: [
      'Equipamiento quirúrgico avanzado',
      'Sistema de cirugía guiada por ordenador',
      'Tecnología piezocirugía ultrasónica',
      'Opción de sedación consciente',
      'Iluminación quirúrgica LED'
    ],
    conectaA: ['gabinete-1', 'gabinete-3', 'quirofano']
  },
  {
    id: 'gabinete-3',
    nombre: 'Gabinete de Tratamiento 3',
    descripcion: 'Gabinete especializado en ortodoncia y tratamientos pediátricos.',
    tecnologia: ['Escáner 3D ortodoncia', 'Simulador sonrisa', 'Cámara intraoral', 'Sistema digital'],
    imagen: '/images/instalaciones/gabinete-tratamiento.jpg',
    hotspots: [
      { x: 40, y: 50, titulo: 'Escáner 3D', info: 'Tecnología para ortodoncia invisible' },
      { x: 65, y: 35, titulo: 'Simulador sonrisa', info: 'Visualización del resultado final' },
      { x: 30, y: 70, titulo: 'Herramientas pediátricas', info: 'Instrumental especializado para niños' }
    ],
    caracteristicas: [
      'Tecnología 3D para ortodoncia invisible',
      'Simulador de sonrisa en tiempo real',
      'Instrumental pediátrico especializado',
      'Ambiente relajante para niños',
      'Sistema digital de seguimiento'
    ],
    conectaA: ['gabinete-2', 'sala-rayos-x', 'zona-esterilizacion']
  },
  {
    id: 'sala-rayos-x',
    nombre: 'Sala de Radiología Digital',
    descripcion: 'Sala equipada con tecnología de radiología 3D para diagnósticos precisos.',
    tecnologia: ['TAC dental 3D', 'Radiografía panorámica', 'Radiografía periapical', 'Sistema digital'],
    imagen: '/images/instalaciones/sala-rayos-x.jpg',
    hotspots: [
      { x: 50, y: 40, titulo: 'TAC dental 3D', info: 'Tomografía computarizada de alta precisión' },
      { x: 25, y: 60, titulo: 'Protección plomada', info: 'Máxima seguridad radiológica' },
      { x: 70, y: 50, titulo: 'Monitor diagnóstico', info: 'Pantalla de alta resolución para análisis' }
    ],
    caracteristicas: [
      'TAC dental 3D de última generación',
      'Radiografía panorámica digital',
      'Tiempo de exposición mínimo',
      'Protección radiológica completa',
      'Diagnóstico inmediato'
    ],
    conectaA: ['gabinete-1', 'gabinete-3', 'quirofano']
  },
  {
    id: 'quirofano',
    nombre: 'Quirófano de Implantes',
    descripcion: 'Quirófano especializado en implantología y cirugía oral mayor con las máximas garantías de esterilidad.',
    tecnologia: ['Cirugía guiada', 'Implantes inmediatos', 'Regeneración ósea', 'All-on-4'],
    imagen: '/images/instalaciones/quirofano-implantes.jpg',
    hotspots: [
      { x: 45, y: 45, titulo: 'Mesa quirúrgica', info: 'Mesa con tecnología de cirugía guiada' },
      { x: 70, y: 30, titulo: 'Lámpara quirúrgica', info: 'Iluminación LED sin generación de calor' },
      { x: 25, y: 65, titulo: 'Monitor cirugía', info: 'Visualización en tiempo real del procedimiento' }
    ],
    caracteristicas: [
      'Ambiente estéril de quirófano',
      'Tecnología de cirugía guiada por ordenador',
      'Implantes inmediatos disponibles',
      'Técnica All-on-4 para rehabilitación total',
      'Monitorización continua del paciente'
    ],
    conectaA: ['zona-esterilizacion', 'gabinete-2', 'sala-rayos-x']
  },
  {
    id: 'zona-esterilizacion',
    nombre: 'Zona de Esterilización',
    descripcion: 'Área técnica donde se garantiza la máxima esterilidad de todos los instrumentos.',
    tecnologia: ['Autoclaves clase B', 'Sistema trazabilidad', 'Control biológico', 'Ultrasonidos'],
    imagen: '/images/instalaciones/zona-esterilizacion.jpeg',
    hotspots: [
      { x: 40, y: 40, titulo: 'Autoclaves', info: 'Esterilización al vapor clase B' },
      { x: 65, y: 55, titulo: 'Ultrasonidos', info: 'Limpieza ultrasónica pre-esterilización' },
      { x: 30, y: 70, titulo: 'Control biológico', info: 'Verificación de la esterilización' }
    ],
    caracteristicas: [
      'Autoclaves de clase B para máxima esterilidad',
      'Sistema de trazabilidad de instrumentos',
      'Control biológico de esterilización',
      'Limpieza ultrasónica previa',
      'Protocolos internacionales de seguridad'
    ],
    conectaA: ['gabinete-3', 'quirofano', 'despacho-doctor']
  },
  {
    id: 'despacho-doctor',
    nombre: 'Despacho Dr. Onésimo',
    descripcion: 'Despacho personal del Dr. Onésimo Fernández para consultas privadas y planificación de tratamientos.',
    tecnologia: ['Software 3D', 'Biblioteca digital', 'Telemedicina', 'Sistema gestión'],
    imagen: '/images/doctor-profesional.jpg',
    hotspots: [
      { x: 50, y: 45, titulo: 'Mesa consultas', info: 'Espacio para planificación de tratamientos' },
      { x: 25, y: 35, titulo: 'Biblioteca médica', info: 'Formación continua y referencias' },
      { x: 70, y: 60, titulo: 'Sistema 3D', info: 'Planificación digital de tratamientos' }
    ],
    caracteristicas: [
      'Ambiente privado y profesional',
      'Software de planificación 3D',
      'Biblioteca médica especializada',
      'Sistema de telemedicina',
      'Área de consulta familiar'
    ],
    conectaA: ['recepcion', 'zona-esterilizacion']
  }
];

export default function TourVirtual() {
  const [areaActual, setAreaActual] = useState<string>('recepcion');
  const [hotspotSeleccionado, setHotspotSeleccionado] = useState<number | null>(null);
  const [modoFullscreen, setModoFullscreen] = useState<boolean>(false);
  const [progresoTour, setProgresoTour] = useState<number>(0);

  const area = areasClinica.find(a => a.id === areaActual);
  const indiceActual = areasClinica.findIndex(a => a.id === areaActual);

  useEffect(() => {
    setProgresoTour((indiceActual + 1) / areasClinica.length * 100);
  }, [indiceActual]);

  const navegarArea = (direccion: 'anterior' | 'siguiente') => {
    const nuevoIndice = direccion === 'anterior' 
      ? Math.max(0, indiceActual - 1)
      : Math.min(areasClinica.length - 1, indiceActual + 1);
    
    setAreaActual(areasClinica[nuevoIndice].id);
    setHotspotSeleccionado(null);
  };

  const saltarAArea = (areaId: string) => {
    setAreaActual(areaId);
    setHotspotSeleccionado(null);
  };

  if (!area) return null;

  return (
    <>
      <Helmet>
        <title>Tour Virtual 360° - OneDental Zaragoza</title>
        <meta name="description" content="Explora nuestras instalaciones con nuestro tour virtual 360°. Conoce la tecnología avanzada de OneDental Zaragoza." />
        <meta name="keywords" content="tour virtual clínica dental, instalaciones OneDental, tecnología dental Zaragoza" />
      </Helmet>

      <div className={`${modoFullscreen ? 'fixed inset-0 z-50 bg-black' : 'min-h-screen bg-gradient-to-br from-blue-50 to-white py-12'}`}>
        <div className="container mx-auto px-4 h-full">
          {/* Header */}
          {!modoFullscreen && (
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-6">
                <Camera className="h-12 w-12 text-blue-600 mr-4" />
                <h1 className="text-4xl font-bold text-gray-900">
                  Tour Virtual 360°
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explora nuestras instalaciones desde la comodidad de tu hogar. 
                Descubre la tecnología avanzada que hace de OneDental la clínica más innovadora de Zaragoza.
              </p>
            </div>
          )}

          {/* Progreso del Tour */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Progreso del tour: {indiceActual + 1} de {areasClinica.length}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setModoFullscreen(!modoFullscreen)}
              >
                <Maximize className="h-4 w-4 mr-2" />
                {modoFullscreen ? 'Salir' : 'Pantalla completa'}
              </Button>
            </div>
            <Progress value={progresoTour} className="w-full" />
          </div>

          <div className="grid lg:grid-cols-4 gap-6 h-full">
            {/* Visor Principal */}
            <div className="lg:col-span-3">
              <Card className="h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <Move3D className="h-6 w-6 mr-2 text-blue-600" />
                        {area.nombre}
                      </CardTitle>
                      <CardDescription>{area.descripcion}</CardDescription>
                    </div>
                    <Badge variant="secondary">
                      <Navigation className="h-4 w-4 mr-1" />
                      360° Interactivo
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    {/* Imagen principal */}
                    <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                      <img 
                        src={area.imagen} 
                        alt={area.nombre}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay con hotspots */}
                      <div className="absolute inset-0">
                        {area.hotspots.map((hotspot, index) => (
                          <div
                            key={index}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                            onClick={() => setHotspotSeleccionado(
                              hotspotSeleccionado === index ? null : index
                            )}
                          >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                              hotspotSeleccionado === index 
                                ? 'bg-blue-600 scale-125 shadow-lg' 
                                : 'bg-white border-2 border-blue-600 hover:scale-110'
                            }`}>
                              <Info className={`h-4 w-4 ${
                                hotspotSeleccionado === index ? 'text-white' : 'text-blue-600'
                              }`} />
                            </div>
                            
                            {/* Tooltip de información */}
                            {hotspotSeleccionado === index && (
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64">
                                <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                                  <h4 className="font-semibold text-gray-900 mb-1">
                                    {hotspot.titulo}
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    {hotspot.info}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      {/* Controles de navegación */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => navegarArea('anterior')}
                          disabled={indiceActual === 0}
                        >
                          <ChevronLeft className="h-4 w-4 mr-1" />
                          Anterior
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => navegarArea('siguiente')}
                          disabled={indiceActual === areasClinica.length - 1}
                        >
                          Siguiente
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Panel lateral */}
            <div className="space-y-6">
              {/* Información del área */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Información del Área</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tecnología Disponible:</h4>
                    <ul className="text-sm space-y-1">
                      {area.tecnologia.map((tech, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Características:</h4>
                    <ul className="text-sm space-y-1">
                      {area.caracteristicas.map((caracteristica, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                          {caracteristica}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Navegación rápida */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Navegación Rápida</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {areasClinica.map((areaItem, index) => (
                      <Button
                        key={areaItem.id}
                        variant={areaItem.id === areaActual ? "default" : "outline"}
                        size="sm"
                        className="w-full justify-start text-left"
                        onClick={() => saltarAArea(areaItem.id)}
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="truncate">{areaItem.nombre}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Acciones */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">¿Te gusta lo que ves?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full"
                    onClick={() => window.location.href = '/primera-consulta-gratuita'}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Reservar Visita Presencial
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.location.href = 'tel:976527761'}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Llamar: 976 527 761
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

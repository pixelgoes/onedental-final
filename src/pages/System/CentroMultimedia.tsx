import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Play,
  Video,
  Headphones,
  Image as ImageIcon,
  FileText,
  BookOpen,
  Search,
  Filter,
  Share2,
  Heart,
  Eye,
  Download,
  Clock,
  User
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';

interface ContenidoMultimedia {
  id: string;
  titulo: string;
  descripcion: string;
  tipo: 'video' | 'audio' | 'galeria' | 'documento';
  categoria: string;
  tratamiento?: string;
  duracion?: string;
  fechaPublicacion: string;
  autor: string;
  visualizaciones: number;
  likes: number;
  thumbnail: string;
  etiquetas: string[];
  dificultad: 'Básico' | 'Intermedio' | 'Avanzado';
}

interface GaleriaAntesDespues {
  id: string;
  tratamiento: string;
  paciente: string;
  antes: string;
  despues: string;
  descripcion: string;
  duracionTratamiento: string;
  fechaTratamiento: string;
}

interface PodcastEpisodio {
  id: string;
  titulo: string;
  descripcion: string;
  duracion: string;
  fechaPublicacion: string;
  temporada: number;
  episodio: number;
  invitado?: string;
  temas: string[];
  reproducciones: number;
}

// Contenido multimedia simulado
const contenidoMultimedia: ContenidoMultimedia[] = [
  {
    id: '1',
    titulo: 'Digital Smile Design: Revolucionando la Odontología Estética',
    descripcion: 'Descubre cómo la tecnología DSD está cambiando el diseño de sonrisas',
    tipo: 'video',
    categoria: 'Tratamientos',
    tratamiento: 'Digital Smile Design',
    duracion: '15:30',
    fechaPublicacion: '2025-06-01',
    autor: 'Dr. Onésimo Fernández',
    visualizaciones: 5420,
    likes: 234,
    thumbnail: '/images/digital-smile-design.JPG',
    etiquetas: ['DSD', 'Tecnología', 'Estética', 'Innovación'],
    dificultad: 'Intermedio'
  },
  {
    id: '2',
    titulo: 'Cuidados Post-Implante: Guía Completa para Pacientes',
    descripcion: 'Todo lo que necesitas saber para cuidar tu implante dental',
    tipo: 'video',
    categoria: 'Cuidados',
    tratamiento: 'Implantes',
    duracion: '12:45',
    fechaPublicacion: '2025-05-30',
    autor: 'Dra. Ana García',
    visualizaciones: 2890,
    likes: 156,
    thumbnail: '/images/implante-dental.jpg',
    etiquetas: ['Implantes', 'Cuidados', 'Postoperatorio'],
    dificultad: 'Avanzado'
  },
  {
    id: '3',
    titulo: 'Higiene Dental: Técnicas Correctas de Cepillado',
    descripcion: 'Aprende las técnicas profesionales para una higiene dental perfecta',
    tipo: 'video',
    categoria: 'Prevención',
    duracion: '8:45',
    fechaPublicacion: '2025-05-25',
    autor: 'Dra. Laura Martín',
    visualizaciones: 3421,
    likes: 312,
    thumbnail: '/images/paciente-satisfecho_0.jpg',
    etiquetas: ['Higiene', 'Prevención', 'Cepillado'],
    dificultad: 'Básico'
  },
  {
    id: '4',
    titulo: 'Blanqueamiento Dental: Mitos y Realidades',
    descripcion: 'Todo lo que necesitas saber sobre el blanqueamiento dental profesional',
    tipo: 'audio',
    categoria: 'Educativo',
    tratamiento: 'Blanqueamiento',
    duracion: '12:30',
    fechaPublicacion: '2025-05-20',
    autor: 'Dr. Onésimo Fernández',
    visualizaciones: 1543,
    likes: 98,
    thumbnail: '/images/blanqueamiento_1.jpg',
    etiquetas: ['Blanqueamiento', 'Mitos', 'Educación'],
    dificultad: 'Básico'
  }
];

// Galería antes/después
const galeriasAntesDespues: GaleriaAntesDespues[] = [
  {
    id: '1',
    tratamiento: 'Digital Smile Design',
    paciente: 'Paciente A.',
    antes: '/images/sonrisa-perfecta_1.jpg',
    despues: '/images/sonrisa-perfecta_3.jpg',
    descripcion: 'Transformación completa de sonrisa con tecnología DSD',
    duracionTratamiento: '3 meses',
    fechaTratamiento: '2025-03-15'
  },
  {
    id: '2',
    tratamiento: 'Carillas de Porcelana',
    paciente: 'Paciente B.',
    antes: '/images/sonrisa-perfecta_4.jpg',
    despues: '/images/sonrisa-perfecta_5.jpg',
    descripcion: '8 carillas de porcelana para sonrisa perfecta',
    duracionTratamiento: '2 semanas',
    fechaTratamiento: '2025-04-20'
  },
  {
    id: '3',
    tratamiento: 'Blanqueamiento Dental',
    paciente: 'Paciente C.',
    antes: '/images/sonrisa-perfecta_6.jpg',
    despues: '/images/sonrisa-perfecta_7.jpg',
    descripcion: 'Blanqueamiento profesional con 6 tonos de mejora',
    duracionTratamiento: '1 día',
    fechaTratamiento: '2025-05-10'
  }
];

// Episodios del podcast
const episodiosPodcast: PodcastEpisodio[] = [
  {
    id: '1',
    titulo: 'Bienvenidos a Sonrisas Saludables',
    descripcion: 'Primer episodio donde presentamos el podcast y hablamos sobre la importancia de la salud dental',
    duracion: '25:30',
    fechaPublicacion: '2025-06-01',
    temporada: 1,
    episodio: 1,
    temas: ['Introducción', 'Salud Dental', 'Prevención'],
    reproducciones: 1234
  },
  {
    id: '2',
    titulo: 'Digital Smile Design: Revolución en Estética Dental',
    descripcion: 'Analizamos cómo la tecnología está cambiando el diseño de sonrisas',
    duracion: '32:15',
    fechaPublicacion: '2025-05-25',
    temporada: 1,
    episodio: 2,
    invitado: 'Dr. Carlos Mendoza - Especialista en DSD',
    temas: ['DSD', 'Tecnología', 'Estética', 'Innovación'],
    reproducciones: 987
  },
  {
    id: '3',
    titulo: 'Implantes Dentales: Mitos y Realidades',
    descripcion: 'Desmontamos los mitos más comunes sobre los implantes dentales',
    duracion: '28:45',
    fechaPublicacion: '2025-05-18',
    temporada: 1,
    episodio: 3,
    temas: ['Implantes', 'Mitos', 'Cirugía', 'Recuperación'],
    reproducciones: 756
  }
];

export default function CentroMultimedia() {
  const [busqueda, setBusqueda] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('todas');
  const [filtroTipo, setFiltroTipo] = useState('todos');
  const [seccionActiva, setSeccionActiva] = useState('biblioteca');

  // Filtrar contenido
  const contenidoFiltrado = contenidoMultimedia.filter(item => {
    const coincideBusqueda = busqueda === '' || 
      item.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      item.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
      item.etiquetas.some(tag => tag.toLowerCase().includes(busqueda.toLowerCase()));
    
    const coincideCategoria = filtroCategoria === 'todas' || item.categoria === filtroCategoria;
    const coincideTipo = filtroTipo === 'todos' || item.tipo === filtroTipo;
    
    return coincideBusqueda && coincideCategoria && coincideTipo;
  });

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case 'video': return <Video className="h-4 w-4" />;
      case 'audio': return <Headphones className="h-4 w-4" />;
      case 'galeria': return <ImageIcon className="h-4 w-4" />;
      case 'documento': return <FileText className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getDificultadColor = (dificultad: string) => {
    switch (dificultad) {
      case 'Básico': return 'bg-green-100 text-green-800';
      case 'Intermedio': return 'bg-yellow-100 text-yellow-800';
      case 'Avanzado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Helmet>
        <title>Centro Multimedia - OneDental Zaragoza</title>
        <meta name="description" content="Centro multimedia OneDental con videos educativos, galerías antes/después, podcast Sonrisas Saludables y recursos para pacientes." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Play className="h-12 w-12 mr-4" />
                <h1 className="text-4xl font-bold">
                  Centro Multimedia OneDental
                </h1>
              </div>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Explora nuestra biblioteca de contenido educativo: videos, podcasts, galerías de casos reales 
                y recursos para mantener tu sonrisa perfecta.
              </p>
              
              {/* Estadísticas */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold">{contenidoMultimedia.length}</div>
                  <div className="text-sm text-purple-100">Videos & Audios</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{galeriasAntesDespues.length}</div>
                  <div className="text-sm text-purple-100">Galerías</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{episodiosPodcast.length}</div>
                  <div className="text-sm text-purple-100">Episodios Podcast</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15K+</div>
                  <div className="text-sm text-purple-100">Visualizaciones</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Tabs value={seccionActiva} onValueChange={setSeccionActiva} className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="biblioteca">📚 Biblioteca</TabsTrigger>
              <TabsTrigger value="galeria">🖼️ Galería</TabsTrigger>
              <TabsTrigger value="podcast">🎧 Podcast</TabsTrigger>
              <TabsTrigger value="recursos">📄 Recursos</TabsTrigger>
            </TabsList>

            {/* Biblioteca de Videos y Audios */}
            <TabsContent value="biblioteca" className="space-y-6">
              {/* Filtros */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Buscar contenido..."
                      value={busqueda}
                      onChange={(e) => setBusqueda(e.target.value)}
                      className="w-full pl-10"
                    />
                  </div>
                </div>
                <Select value={filtroCategoria} onValueChange={setFiltroCategoria}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todas">Todas las categorías</SelectItem>
                    <SelectItem value="Tratamientos">Tratamientos</SelectItem>
                    <SelectItem value="Cuidados">Cuidados</SelectItem>
                    <SelectItem value="Prevención">Prevención</SelectItem>
                    <SelectItem value="Educativo">Educativo</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filtroTipo} onValueChange={setFiltroTipo}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="video">Videos</SelectItem>
                    <SelectItem value="audio">Audios</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Grid de contenido */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contenidoFiltrado.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={item.thumbnail} 
                        alt={item.titulo}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                          <Play className="h-6 w-6 mr-2" />
                          Reproducir
                        </Button>
                      </div>
                      <div className="absolute top-2 left-2">
                        <Badge variant="secondary" className="flex items-center">
                          {getTipoIcon(item.tipo)}
                          <span className="ml-1 capitalize">{item.tipo}</span>
                        </Badge>
                      </div>
                      <div className="absolute top-2 right-2">
                        <Badge className={getDificultadColor(item.dificultad)}>
                          {item.dificultad}
                        </Badge>
                      </div>
                      {item.duracion && (
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                          {item.duracion}
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.titulo}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.descripcion}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {item.autor}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {new Date(item.fechaPublicacion).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            {item.visualizaciones.toLocaleString()}
                          </span>
                          <span className="flex items-center">
                            <Heart className="h-3 w-3 mr-1" />
                            {item.likes}
                          </span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {item.etiquetas.slice(0, 3).map((etiqueta, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {etiqueta}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Galería Antes/Después */}
            <TabsContent value="galeria" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Galería Antes/Después</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Descubre las increíbles transformaciones que hemos logrado con nuestros pacientes. 
                  Casos reales que demuestran la excelencia de nuestros tratamientos.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galeriasAntesDespues.map((caso) => (
                  <Card key={caso.id} className="overflow-hidden">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{caso.tratamiento}</span>
                        <Badge variant="outline">{caso.duracionTratamiento}</Badge>
                      </CardTitle>
                      <CardDescription>{caso.descripcion}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-600 mb-2">Antes</h4>
                          <img 
                            src={caso.antes} 
                            alt="Antes del tratamiento"
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-600 mb-2">Después</h4>
                          <img 
                            src={caso.despues} 
                            alt="Después del tratamiento"
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p><strong>Paciente:</strong> {caso.paciente}</p>
                        <p><strong>Fecha:</strong> {new Date(caso.fechaTratamiento).toLocaleDateString()}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Podcast */}
            <TabsContent value="podcast" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Podcast: Sonrisas Saludables</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Nuestro podcast semanal donde exploramos temas de salud dental, 
                  entrevistamos a expertos y compartimos consejos para mantener tu sonrisa perfecta.
                </p>
              </div>

              <div className="space-y-6">
                {episodiosPodcast.map((episodio) => (
                  <Card key={episodio.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                            <Headphones className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="outline">T{episodio.temporada}E{episodio.episodio}</Badge>
                            <span className="text-sm text-gray-500">{episodio.duracion}</span>
                            <span className="text-sm text-gray-500">
                              {episodio.reproducciones.toLocaleString()} reproducciones
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{episodio.titulo}</h3>
                          <p className="text-gray-600 mb-3">{episodio.descripcion}</p>
                          {episodio.invitado && (
                            <p className="text-sm text-blue-600 mb-3">
                              <strong>Invitado:</strong> {episodio.invitado}
                            </p>
                          )}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {episodio.temas.map((tema, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tema}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center space-x-4">
                            <Button className="flex items-center">
                              <Play className="h-4 w-4 mr-2" />
                              Escuchar
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Descargar
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Recursos */}
            <TabsContent value="recursos" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Recursos para Pacientes</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Documentos, guías y recursos descargables para ayudarte en tu cuidado dental.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    titulo: 'Guía de Cuidados Post-Cirugía',
                    descripcion: 'Instrucciones detalladas para el cuidado después de una cirugía dental',
                    tipo: 'PDF',
                    tamaño: '2.5 MB',
                    descargas: 1250
                  },
                  {
                    titulo: 'Manual de Higiene Dental',
                    descripcion: 'Técnicas correctas de cepillado, uso de hilo dental y enjuagues',
                    tipo: 'PDF',
                    tamaño: '1.8 MB',
                    descargas: 2340
                  },
                  {
                    titulo: 'Calendario de Cuidados Preventivos',
                    descripcion: 'Planifica tus visitas y cuidados dentales anuales',
                    tipo: 'PDF',
                    tamaño: '0.5 MB',
                    descargas: 890
                  }
                ].map((recurso, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                            <FileText className="h-6 w-6 text-red-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{recurso.titulo}</h3>
                          <p className="text-gray-600 text-sm mb-3">{recurso.descripcion}</p>
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <span>{recurso.tipo} • {recurso.tamaño}</span>
                            <span>{recurso.descargas.toLocaleString()} descargas</span>
                          </div>
                          <Button className="w-full">
                            <Download className="h-4 w-4 mr-2" />
                            Descargar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
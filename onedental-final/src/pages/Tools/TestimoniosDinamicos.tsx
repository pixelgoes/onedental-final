import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause,
  Filter,
  Heart,
  Quote,
  Calendar,
  Award,
  Users,
  TrendingUp
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';

interface Testimonio {
  id: string;
  nombre: string;
  edad: number;
  tratamiento: string;
  rating: number;
  comentario: string;
  fecha: string;
  imagen: string;
  imagenAntes?: string;
  imagenDespues?: string;
  videoUrl?: string;
  verificado: boolean;
  duracionTratamiento: string;
  resultados: string[];
}

interface EstadisticaTratamiento {
  tratamiento: string;
  satisfaccion: number;
  numeroReseñas: number;
  tiempoPromedio: string;
}

const testimonios: Testimonio[] = [
  {
    id: '1',
    nombre: 'María González',
    edad: 34,
    tratamiento: 'Digital Smile Design',
    rating: 5,
    comentario: 'Increíble transformación. El Dr. Onésimo me explicó todo el proceso con tecnología 3D. Pude ver el resultado antes de empezar. El resultado superó mis expectativas.',
    fecha: '2024-05-15',
    imagen: '/images/paciente-satisfecho_2.jpg',
    imagenAntes: '/images/casos/antes-1.jpg',
    imagenDespues: '/images/casos/despues-1.jpg',
    verificado: true,
    duracionTratamiento: '6 semanas',
    resultados: ['Sonrisa perfecta', 'Autoestima renovada', 'Resultado natural']
  },
  {
    id: '2',
    nombre: 'Carlos Mendoza',
    edad: 45,
    tratamiento: 'Implantes Dentales',
    rating: 5,
    comentario: 'Después de años con problemas dentales, OneDental me devolvió la confianza. La cirugía fue muy precisa y sin dolor. Tecnología increíble.',
    fecha: '2024-04-22',
    imagen: '/images/paciente-satisfecho_3.jpg',
    imagenAntes: '/images/casos/antes-2.jpg',
    imagenDespues: '/images/casos/despues-2.jpg',
    videoUrl: '/videos/testimonio-carlos.mp4',
    verificado: true,
    duracionTratamiento: '4 meses',
    resultados: ['Masticación perfecta', 'Aspecto natural', 'Sin molestias']
  },
  {
    id: '3',
    nombre: 'Ana Rodríguez',
    edad: 28,
    tratamiento: 'Carillas de Porcelana',
    rating: 5,
    comentario: 'Las carillas cambiaron completamente mi sonrisa. El proceso fue rápido y el resultado es exactamente lo que esperaba. Recomiendo 100% OneDental.',
    fecha: '2024-05-01',
    imagen: '/images/paciente-satisfecho_6.jpg',
    imagenAntes: '/images/casos/antes-3.jpg',
    imagenDespues: '/images/casos/despues-3.jpg',
    verificado: true,
    duracionTratamiento: '3 semanas',
    resultados: ['Sonrisa uniforme', 'Color perfecto', 'Resultado inmediato']
  },
  {
    id: '4',
    nombre: 'David López',
    edad: 52,
    tratamiento: 'Blanqueamiento Dental',
    rating: 4,
    comentario: 'Excelente servicio. Mi sonrisa se ve mucho más blanca y natural. El tratamiento fue cómodo y rápido.',
    fecha: '2024-05-10',
    imagen: '/images/paciente-satisfecho_8.jpg',
    verificado: true,
    duracionTratamiento: '2 sesiones',
    resultados: ['Dientes más blancos', 'Sonrisa radiante', 'Proceso cómodo']
  },
  {
    id: '5',
    nombre: 'Laura Martín',
    edad: 25,
    tratamiento: 'Ortodoncia',
    rating: 5,
    comentario: 'La ortodoncia invisible de OneDental es fantástica. Nadie notó que la llevaba y los resultados son perfectos.',
    fecha: '2024-03-15',
    imagen: '/images/paciente-satisfecho_9.jpg',
    imagenAntes: '/images/casos/antes-5.jpg',
    imagenDespues: '/images/casos/despues-5.jpg',
    verificado: true,
    duracionTratamiento: '18 meses',
    resultados: ['Dientes alineados', 'Invisible durante tratamiento', 'Resultado perfecto']
  },
  {
    id: '6',
    nombre: 'Roberto Sánchez',
    edad: 41,
    tratamiento: 'Digital Smile Design',
    rating: 5,
    comentario: 'La tecnología 3D me permitió ver exactamente cómo quedaría mi sonrisa. El Dr. Onésimo es un profesional excepcional.',
    fecha: '2024-04-08',
    imagen: '/images/paciente-satisfecho_0.jpg',
    videoUrl: '/videos/testimonio-roberto.mp4',
    verificado: true,
    duracionTratamiento: '8 semanas',
    resultados: ['Diseño personalizado', 'Tecnología avanzada', 'Resultado excepcional']
  }
];

const estadisticasTratamientos: EstadisticaTratamiento[] = [
  { tratamiento: 'Digital Smile Design', satisfaccion: 98, numeroReseñas: 156, tiempoPromedio: '6-8 semanas' },
  { tratamiento: 'Implantes Dentales', satisfaccion: 97, numeroReseñas: 123, tiempoPromedio: '3-4 meses' },
  { tratamiento: 'Carillas de Porcelana', satisfaccion: 96, numeroReseñas: 98, tiempoPromedio: '2-3 semanas' },
  { tratamiento: 'Blanqueamiento Dental', satisfaccion: 94, numeroReseñas: 234, tiempoPromedio: '1-2 sesiones' },
  { tratamiento: 'Ortodoncia', satisfaccion: 95, numeroReseñas: 67, tiempoPromedio: '12-24 meses' }
];

export default function TestimoniosDinamicos() {
  const [testimonioActual, setTestimonioActual] = useState(0);
  const [filtroTratamiento, setFiltroTratamiento] = useState<string>('todos');
  const [reproduccionAutomatica, setReproduccionAutomatica] = useState(true);
  const [vistaActual, setVistaActual] = useState<'grid' | 'carrusel'>('carrusel');

  const testimoniosFiltrados = filtroTratamiento === 'todos' 
    ? testimonios 
    : testimonios.filter(t => t.tratamiento === filtroTratamiento);

  // Carrusel automático
  useEffect(() => {
    if (!reproduccionAutomatica) return;

    const interval = setInterval(() => {
      setTestimonioActual((prev) => 
        prev === testimoniosFiltrados.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimoniosFiltrados.length, reproduccionAutomatica]);

  const navegarTestimonio = (direccion: 'anterior' | 'siguiente') => {
    if (direccion === 'anterior') {
      setTestimonioActual(prev => 
        prev === 0 ? testimoniosFiltrados.length - 1 : prev - 1
      );
    } else {
      setTestimonioActual(prev => 
        prev === testimoniosFiltrados.length - 1 ? 0 : prev + 1
      );
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const tratamientosUnicos = [...new Set(testimonios.map(t => t.tratamiento))];

  return (
    <>
      <Helmet>
        <title>Testimonios y Casos de Éxito - OneDental Zaragoza</title>
        <meta name="description" content="Descubre los testimonios reales de nuestros pacientes en OneDental Zaragoza. Casos antes y después con resultados excepcionales." />
        <meta name="keywords" content="testimonios dentista zaragoza, casos éxito dental, antes después OneDental, reseñas clínica dental" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-12 w-12 text-red-500 mr-4" />
              <h1 className="text-4xl font-bold text-gray-900">
                Testimonios Reales
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre las experiencias de nuestros pacientes y cómo OneDental 
              ha transformado sus sonrisas y vidas con tecnología avanzada.
            </p>
          </div>

          {/* Estadísticas Generales */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Pacientes Satisfechos</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">4.9</div>
                <div className="text-sm text-gray-600">Valoración Media</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Casos de Éxito</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">12+</div>
                <div className="text-sm text-gray-600">Años Experiencia</div>
              </CardContent>
            </Card>
          </div>

          {/* Controles */}
          <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
            <div className="flex items-center space-x-4">
              <Select value={filtroTratamiento} onValueChange={setFiltroTratamiento}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filtrar por tratamiento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos los tratamientos</SelectItem>
                  {tratamientosUnicos.map(tratamiento => (
                    <SelectItem key={tratamiento} value={tratamiento}>
                      {tratamiento}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setReproduccionAutomatica(!reproduccionAutomatica)}
              >
                {reproduccionAutomatica ? (
                  <Pause className="h-4 w-4 mr-2" />
                ) : (
                  <Play className="h-4 w-4 mr-2" />
                )}
                {reproduccionAutomatica ? 'Pausar' : 'Reproducir'}
              </Button>
            </div>

            <Tabs value={vistaActual} onValueChange={(value) => setVistaActual(value as 'grid' | 'carrusel')}>
              <TabsList>
                <TabsTrigger value="carrusel">Carrusel</TabsTrigger>
                <TabsTrigger value="grid">Cuadrícula</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <Tabs value={vistaActual} className="space-y-8">
            {/* Vista Carrusel */}
            <TabsContent value="carrusel">
              {testimoniosFiltrados.length > 0 && (
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      {/* Testimonio Principal */}
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
                        <div className="max-w-4xl mx-auto">
                          <div className="grid md:grid-cols-3 gap-8 items-center">
                            {/* Imagen del paciente */}
                            <div className="text-center">
                              <img
                                src={testimoniosFiltrados[testimonioActual]?.imagen}
                                alt={testimoniosFiltrados[testimonioActual]?.nombre}
                                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover"
                              />
                              <h3 className="text-xl font-bold">
                                {testimoniosFiltrados[testimonioActual]?.nombre}
                              </h3>
                              <p className="text-blue-200">
                                {testimoniosFiltrados[testimonioActual]?.edad} años
                              </p>
                              {testimoniosFiltrados[testimonioActual]?.verificado && (
                                <Badge variant="secondary" className="mt-2">
                                  <Award className="h-3 w-3 mr-1" />
                                  Verificado
                                </Badge>
                              )}
                            </div>

                            {/* Testimonio */}
                            <div className="md:col-span-2">
                              <div className="flex items-center mb-4">
                                <div className="flex space-x-1">
                                  {renderStars(testimoniosFiltrados[testimonioActual]?.rating || 0)}
                                </div>
                                <Badge variant="outline" className="ml-4 text-white border-white">
                                  {testimoniosFiltrados[testimonioActual]?.tratamiento}
                                </Badge>
                              </div>

                              <Quote className="h-8 w-8 text-blue-300 mb-4" />
                              <p className="text-lg leading-relaxed mb-4">
                                {testimoniosFiltrados[testimonioActual]?.comentario}
                              </p>

                              <div className="flex items-center text-blue-200 text-sm">
                                <Calendar className="h-4 w-4 mr-2" />
                                {new Date(testimoniosFiltrados[testimonioActual]?.fecha || '').toLocaleDateString('es-ES')}
                                <span className="mx-4">•</span>
                                <span>Duración: {testimoniosFiltrados[testimonioActual]?.duracionTratamiento}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Controles de navegación */}
                      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navegarTestimonio('anterior')}
                          className="bg-white/90 hover:bg-white"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navegarTestimonio('siguiente')}
                          className="bg-white/90 hover:bg-white"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Indicadores */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {testimoniosFiltrados.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setTestimonioActual(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              index === testimonioActual
                                ? 'bg-white'
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Resultados del tratamiento */}
                    {testimoniosFiltrados[testimonioActual]?.resultados && (
                      <div className="p-6 bg-gray-50">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Resultados obtenidos:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {testimoniosFiltrados[testimonioActual].resultados.map((resultado, index) => (
                            <Badge key={index} variant="secondary">
                              {resultado}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Vista Grid */}
            <TabsContent value="grid">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimoniosFiltrados.map((testimonio) => (
                  <Card key={testimonio.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <img
                          src={testimonio.imagen}
                          alt={testimonio.nombre}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <CardTitle className="text-lg">{testimonio.nombre}</CardTitle>
                          <CardDescription>{testimonio.tratamiento}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center mb-3">
                        <div className="flex space-x-1">
                          {renderStars(testimonio.rating)}
                        </div>
                        {testimonio.verificado && (
                          <Badge variant="outline" className="ml-2">
                            <Award className="h-3 w-3 mr-1" />
                            Verificado
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {testimonio.comentario}
                      </p>
                      
                      <div className="text-xs text-gray-500 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(testimonio.fecha).toLocaleDateString('es-ES')}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Estadísticas por Tratamiento */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Satisfacción por Tratamiento
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {estadisticasTratamientos.map((stat) => (
                <Card key={stat.tratamiento}>
                  <CardHeader>
                    <CardTitle className="text-lg">{stat.tratamiento}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Satisfacción</span>
                          <span className="text-2xl font-bold text-green-600">
                            {stat.satisfaccion}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${stat.satisfaccion}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Reseñas:</span>
                        <span className="font-semibold">{stat.numeroReseñas}</span>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Tiempo promedio:</span>
                        <span className="font-semibold">{stat.tiempoPromedio}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">
                  ¿Quieres ser nuestro próximo caso de éxito?
                </h2>
                <p className="text-xl mb-6 text-blue-100">
                  Únete a más de 500 pacientes satisfechos con resultados excepcionales
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    onClick={() => window.location.href = '/primera-consulta-gratuita'}
                  >
                    Primera Consulta GRATUITA
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-blue-600"
                    onClick={() => window.location.href = '/calculadora-precios'}
                  >
                    Calcular Precio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

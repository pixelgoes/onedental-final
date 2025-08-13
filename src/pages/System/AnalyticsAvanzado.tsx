import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  BarChart3,
  TrendingUp,
  Eye,
  Users,
  Target,
  Clock,
  Activity,
  Search,
  Download,
  Filter,
  ArrowUp,
  ArrowDown,
  Minus
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Progress } from '../../components/ui/progress';

interface MetricaAnalytics {
  titulo: string;
  valor: string | number;
  cambio: number;
  tendencia: 'up' | 'down' | 'neutral';
  icono: React.ReactNode;
  color: string;
  descripcion: string;
}

export default function AnalyticsAvanzado() {
  const [periodoSeleccionado, setPeriodoSeleccionado] = useState('30d');
  const [vistaActual, setVistaActual] = useState('general');

  const metricas: MetricaAnalytics[] = [
    {
      titulo: 'Visitantes Únicos',
      valor: '12,847',
      cambio: 15.2,
      tendencia: 'up',
      icono: <Users className="h-6 w-6" />,
      color: 'text-blue-600',
      descripcion: 'Visitantes únicos en los últimos 30 días'
    },
    {
      titulo: 'Tasa de Conversión',
      valor: '4.8%',
      cambio: 8.5,
      tendencia: 'up',
      icono: <Target className="h-6 w-6" />,
      color: 'text-green-600',
      descripcion: 'Porcentaje de visitantes que reservan cita'
    },
    {
      titulo: 'Tiempo en Página',
      valor: '3:42',
      cambio: -2.1,
      tendencia: 'down',
      icono: <Clock className="h-6 w-6" />,
      color: 'text-orange-600',
      descripcion: 'Tiempo promedio de sesión'
    },
    {
      titulo: 'Score Performance',
      valor: '94/100',
      cambio: 12.3,
      tendencia: 'up',
      icono: <Activity className="h-6 w-6" />,
      color: 'text-purple-600',
      descripcion: 'Core Web Vitals y velocidad'
    }
  ];

  const getTendenciaIcon = (tendencia: string, cambio: number) => {
    if (tendencia === 'up') return <ArrowUp className="h-4 w-4 text-green-600" />;
    if (tendencia === 'down') return <ArrowDown className="h-4 w-4 text-red-600" />;
    return <Minus className="h-4 w-4 text-gray-400" />;
  };

  return (
    <>
      <Helmet>
        <title>Analytics Avanzado - OneDental Zaragoza</title>
        <meta name="description" content="Dashboard de analytics avanzado OneDental. Métricas tiempo real, heatmaps, análisis conversión y ROI marketing." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header Analytics */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <h1 className="text-2xl font-bold text-gray-900">Analytics Avanzado</h1>
                  <p className="text-sm text-gray-500">Métricas tiempo real OneDental</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Select value={periodoSeleccionado} onValueChange={setPeriodoSeleccionado}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">7 días</SelectItem>
                    <SelectItem value="30d">30 días</SelectItem>
                    <SelectItem value="90d">90 días</SelectItem>
                    <SelectItem value="1y">1 año</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
                
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs value={vistaActual} onValueChange={setVistaActual} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="general">📊 General</TabsTrigger>
              <TabsTrigger value="conversion">🎯 Conversión</TabsTrigger>
              <TabsTrigger value="seo">🔍 SEO Local</TabsTrigger>
              <TabsTrigger value="marketing">📈 Marketing</TabsTrigger>
            </TabsList>

            {/* Dashboard General */}
            <TabsContent value="general" className="space-y-6">
              {/* Métricas principales */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metricas.map((metrica, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`${metrica.color}`}>
                            {metrica.icono}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-600">{metrica.titulo}</p>
                            <p className="text-2xl font-bold text-gray-900">{metrica.valor}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1">
                            {getTendenciaIcon(metrica.tendencia, metrica.cambio)}
                            <span className={`text-sm font-medium ${
                              metrica.tendencia === 'up' ? 'text-green-600' : 
                              metrica.tendencia === 'down' ? 'text-red-600' : 'text-gray-500'
                            }`}>
                              {metrica.cambio > 0 ? '+' : ''}{metrica.cambio}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">{metrica.descripcion}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Gráficos principales */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Visitantes Últimos 30 Días
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-7 gap-2 text-xs">
                        {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((dia, index) => (
                          <div key={index} className="text-center">
                            <div 
                              className="bg-blue-600 rounded-t" 
                              style={{ height: `${40 + Math.random() * 60}px` }}
                            ></div>
                            <span className="text-gray-500 mt-1">{dia}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Promedio: 428 visitantes/día</span>
                        <span>Pico: 672 visitantes</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Eye className="h-5 w-5 mr-2" />
                      Páginas Más Visitadas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { pagina: 'Inicio', visitantes: 3420, porcentaje: 35 },
                        { pagina: 'Servicios', visitantes: 2840, porcentaje: 29 },
                        { pagina: 'Calculadora Precios', visitantes: 1950, porcentaje: 20 },
                        { pagina: 'Blog', visitantes: 1080, porcentaje: 11 },
                        { pagina: 'Contacto', visitantes: 557, porcentaje: 6 }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm font-medium">{item.pagina}</span>
                          <div className="flex items-center space-x-3">
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${item.porcentaje}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 w-12">{item.porcentaje}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Análisis de Conversión */}
            <TabsContent value="conversion" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Funnel de Conversión
                  </CardTitle>
                  <CardDescription>
                    Análisis del recorrido del usuario hasta reservar cita
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { etapa: 'Visitantes Web', visitantes: 12847, conversion: 100 },
                      { etapa: 'Página Servicios', visitantes: 8920, conversion: 69.4 },
                      { etapa: 'Calculadora Precios', visitantes: 3240, conversion: 36.3 },
                      { etapa: 'Formulario Cita', visitantes: 1850, conversion: 57.1 },
                      { etapa: 'Cita Reservada', visitantes: 612, conversion: 33.1 }
                    ].map((etapa, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{etapa.etapa}</h4>
                          <span className="text-sm text-gray-500">
                            {etapa.visitantes.toLocaleString()} visitantes
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Progress value={etapa.conversion} className="flex-1" />
                          <span className="text-sm font-medium">{etapa.conversion}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* SEO Local */}
            <TabsContent value="seo" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Search className="h-5 w-5 mr-2" />
                    Posicionamiento SEO Local
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { keyword: 'dentista zaragoza', posicion: 2, volumen: 1200 },
                      { keyword: 'implantes dentales zaragoza', posicion: 1, volumen: 800 },
                      { keyword: 'blanqueamiento dental zaragoza', posicion: 3, volumen: 600 },
                      { keyword: 'carillas porcelana zaragoza', posicion: 1, volumen: 400 },
                      { keyword: 'digital smile design zaragoza', posicion: 1, volumen: 320 }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <span className="font-medium">{item.keyword}</span>
                          <p className="text-sm text-gray-500">{item.volumen} búsquedas/mes</p>
                        </div>
                        <div className="text-right">
                          <span className={`text-lg font-bold ${
                            item.posicion <= 3 ? 'text-green-600' : 'text-yellow-600'
                          }`}>
                            #{item.posicion}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Marketing ROI */}
            <TabsContent value="marketing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>ROI por Canal de Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { canal: 'Google Ads', roi: 420, inversion: 1200, ingresos: 5040 },
                      { canal: 'SEO Orgánico', roi: 1580, inversion: 300, ingresos: 4740 },
                      { canal: 'Redes Sociales', roi: 280, inversion: 450, ingresos: 1260 },
                      { canal: 'Email Marketing', roi: 650, inversion: 150, ingresos: 975 }
                    ].map((canal, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium">{canal.canal}</h4>
                          <span className={`font-bold ${
                            canal.roi >= 400 ? 'text-green-600' : 
                            canal.roi >= 200 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            ROI: {canal.roi}%
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Inversión:</span>
                            <span className="ml-2 font-medium">€{canal.inversion}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Ingresos:</span>
                            <span className="ml-2 font-medium text-green-600">€{canal.ingresos}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
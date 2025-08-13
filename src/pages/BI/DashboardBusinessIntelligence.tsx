import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Calendar, 
  Target,
  AlertCircle,
  CheckCircle,
  Clock,
  Star,
  Activity,
  PieChart,
  LineChart,
  Download,
  Filter,
  RefreshCw,
  Eye,
  Heart,
  Zap,
  Award,
  ArrowUp,
  ArrowDown,
  Minus
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Progress } from '../../components/ui/progress';

export default function DashboardBusinessIntelligence() {
  const [dateRange, setDateRange] = useState('30d');
  const [refreshing, setRefreshing] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  // Datos simulados de BI
  const kpiPrincipales = [
    {
      id: 'revenue',
      titulo: 'Ingresos Mensuales',
      valor: '89.450€',
      cambio: '+12.5%',
      tendencia: 'up',
      meta: '85.000€',
      icono: <DollarSign className="h-6 w-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'patients',
      titulo: 'Pacientes Nuevos',
      valor: '127',
      cambio: '+8.3%',
      tendencia: 'up',
      meta: '120',
      icono: <Users className="h-6 w-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'appointments',
      titulo: 'Citas Completadas',
      valor: '284',
      cambio: '+15.2%',
      tendencia: 'up',
      meta: '250',
      icono: <Calendar className="h-6 w-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'satisfaction',
      titulo: 'Satisfacción Media',
      valor: '4.8/5',
      cambio: '+2.1%',
      tendencia: 'up',
      meta: '4.5/5',
      icono: <Star className="h-6 w-6" />,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const tratamientosPorRentabilidad = [
    {
      tratamiento: 'Digital Smile Design',
      ingresos: '24.500€',
      pacientes: 42,
      margen: '78%',
      tendencia: '+15%',
      popularidad: 95
    },
    {
      tratamiento: 'Implantes Dentales',
      ingresos: '31.200€',
      pacientes: 26,
      margen: '65%',
      tendencia: '+8%',
      popularidad: 87
    },
    {
      tratamiento: 'Carillas de Porcelana',
      ingresos: '18.900€',
      pacientes: 35,
      margen: '72%',
      tendencia: '+22%',
      popularidad: 92
    },
    {
      tratamiento: 'Invisalign',
      ingresos: '14.850€',
      pacientes: 18,
      margen: '68%',
      tendencia: '+12%',
      popularidad: 89
    }
  ];

  const prediccionesIA = [
    {
      periodo: 'Próximos 30 días',
      ingresosPredecidos: '92.300€',
      confianza: 94,
      factores: ['Aumento demanda DSD', 'Temporada alta implantes'],
      riesgo: 'bajo'
    },
    {
      periodo: 'Próximos 90 días',
      ingresosPredecidos: '278.500€',
      confianza: 87,
      factores: ['Campaña marketing', 'Nuevos servicios'],
      riesgo: 'medio'
    },
    {
      periodo: 'Próximo año',
      ingresosPredecidos: '1.125.000€',
      confianza: 78,
      factores: ['Expansión servicios', 'Mercado creciente'],
      riesgo: 'medio'
    }
  ];

  const alertasProactivas = [
    {
      tipo: 'opportunity',
      titulo: 'Oportunidad de Optimización',
      mensaje: 'Las citas de blanqueamiento han aumentado 35%. Considera aumentar disponibilidad.',
      prioridad: 'alta',
      accion: 'Ajustar agenda'
    },
    {
      tipo: 'warning',
      titulo: 'Tendencia Negativa',
      mensaje: 'Las cancelaciones de última hora han aumentado 8% esta semana.',
      prioridad: 'media',
      accion: 'Revisar política'
    },
    {
      tipo: 'success',
      titulo: 'Meta Alcanzada',
      mensaje: 'Ingresos mensuales superan la meta en un 5.2%. ¡Excelente trabajo!',
      prioridad: 'info',
      accion: 'Celebrar éxito'
    }
  ];

  const rentabilidadPorTiempo = [
    { hora: '09:00', ingresos: 2400, eficiencia: 92 },
    { hora: '10:00', ingresos: 3200, eficiencia: 95 },
    { hora: '11:00', ingresos: 2800, eficiencia: 88 },
    { hora: '12:00', ingresos: 1800, eficiencia: 75 },
    { hora: '16:00', ingresos: 3600, eficiencia: 98 },
    { hora: '17:00', ingresos: 3100, eficiencia: 94 },
    { hora: '18:00', ingresos: 2900, eficiencia: 91 }
  ];

  const conversionesChatBot = [
    { fuente: 'Chat Bot', conversiones: 45, tasa: '12.3%' },
    { fuente: 'Formulario Web', conversiones: 32, tasa: '8.7%' },
    { fuente: 'Llamada Directa', conversiones: 28, tasa: '15.2%' },
    { fuente: 'Redes Sociales', conversiones: 19, tasa: '6.8%' }
  ];

  const refreshData = async () => {
    setRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setRefreshing(false);
  };

  const getTendenciaIcon = (tendencia: string) => {
    switch (tendencia) {
      case 'up':
        return <ArrowUp className="h-4 w-4 text-green-600" />;
      case 'down':
        return <ArrowDown className="h-4 w-4 text-red-600" />;
      default:
        return <Minus className="h-4 w-4 text-gray-600" />;
    }
  };

  const getAlertIcon = (tipo: string) => {
    switch (tipo) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      case 'opportunity':
        return <Target className="h-5 w-5 text-blue-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Business Intelligence Dashboard - OneDental</title>
        <meta name="description" content="Dashboard avanzado de Business Intelligence con métricas en tiempo real, predicciones de IA y análisis de rentabilidad." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-slate-800 via-slate-700 to-indigo-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Business Intelligence Dashboard</h1>
                <p className="text-slate-300">Analytics avanzado y predicciones de IA para OneDental</p>
              </div>
              <div className="flex items-center space-x-4">
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger className="w-40 bg-white/10 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">Últimos 7 días</SelectItem>
                    <SelectItem value="30d">Últimos 30 días</SelectItem>
                    <SelectItem value="90d">Últimos 90 días</SelectItem>
                    <SelectItem value="1y">Último año</SelectItem>
                  </SelectContent>
                </Select>
                <Button 
                  variant="outline" 
                  onClick={refreshData}
                  disabled={refreshing}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
                  Actualizar
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* KPIs Principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpiPrincipales.map((kpi) => (
              <Card key={kpi.id} className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${kpi.color} opacity-5`}></div>
                <CardContent className="p-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${kpi.color}`}>
                      <div className="text-white">
                        {kpi.icono}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {getTendenciaIcon(kpi.tendencia)}
                      <span className={`text-sm font-medium ${
                        kpi.tendencia === 'up' ? 'text-green-600' : 
                        kpi.tendencia === 'down' ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {kpi.cambio}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{kpi.titulo}</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">{kpi.valor}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Meta: {kpi.meta}</span>
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        Meta superada
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Alertas Proactivas */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-red-600" />
                <span>Alertas Proactivas e Insights</span>
                <Badge className="bg-red-100 text-red-700">3 nuevas</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alertasProactivas.map((alerta, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    {getAlertIcon(alerta.tipo)}
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{alerta.titulo}</h4>
                      <p className="text-gray-600 text-sm mb-2">{alerta.mensaje}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant={alerta.prioridad === 'alta' ? 'destructive' : alerta.prioridad === 'media' ? 'default' : 'secondary'}>
                          Prioridad {alerta.prioridad}
                        </Badge>
                        <Button size="sm" variant="outline">
                          {alerta.accion}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Análisis de Rentabilidad por Tratamiento */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  <span>Rentabilidad por Tratamiento</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tratamientosPorRentabilidad.map((tratamiento, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">{tratamiento.tratamiento}</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-green-600 font-bold">{tratamiento.ingresos}</span>
                          <Badge variant="outline" className="text-green-600">
                            {tratamiento.tendencia}
                          </Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Pacientes:</span>
                          <div className="font-medium">{tratamiento.pacientes}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Margen:</span>
                          <div className="font-medium text-green-600">{tratamiento.margen}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Popularidad:</span>
                          <div className="font-medium">{tratamiento.popularidad}%</div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <Progress value={tratamiento.popularidad} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Predicciones de IA */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-purple-600" />
                  <span>Predicciones IA</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {prediccionesIA.map((prediccion, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm">{prediccion.periodo}</h4>
                        <Badge variant={prediccion.riesgo === 'bajo' ? 'default' : 'secondary'}>
                          {prediccion.confianza}% confianza
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold text-purple-600 mb-2">
                        {prediccion.ingresosPredecidos}
                      </div>
                      <div className="text-xs text-gray-600 space-y-1">
                        {prediccion.factores.map((factor, i) => (
                          <div key={i} className="flex items-center space-x-1">
                            <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
                            <span>{factor}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs con Análisis Detallados */}
          <Tabs defaultValue="optimizacion" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="optimizacion">Optimización Horarios</TabsTrigger>
              <TabsTrigger value="conversiones">Conversiones</TabsTrigger>
              <TabsTrigger value="reportes">Reportes</TabsTrigger>
              <TabsTrigger value="exportar">Exportar</TabsTrigger>
            </TabsList>

            <TabsContent value="optimizacion">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <span>Optimización de Horarios por Rentabilidad</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-4">Ingresos por Hora</h4>
                      <div className="space-y-3">
                        {rentabilidadPorTiempo.map((slot, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <span className="font-medium">{slot.hora}</span>
                            <div className="text-right">
                              <div className="font-bold text-green-600">{slot.ingresos}€</div>
                              <div className="text-sm text-gray-600">{slot.eficiencia}% eficiencia</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Recomendaciones IA</h4>
                      <div className="space-y-3">
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <div className="flex items-center space-x-2 text-green-700 mb-2">
                            <CheckCircle className="h-4 w-4" />
                            <span className="font-semibold">Hora Premium Identificada</span>
                          </div>
                          <p className="text-sm text-green-700">
                            16:00-17:00 muestra la mayor rentabilidad. Considera reservar para tratamientos premium.
                          </p>
                        </div>
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="flex items-center space-x-2 text-blue-700 mb-2">
                            <Target className="h-4 w-4" />
                            <span className="font-semibold">Oportunidad de Mejora</span>
                          </div>
                          <p className="text-sm text-blue-700">
                            La franja 12:00-13:00 tiene baja rentabilidad. Sugerencia: consultas rápidas o blanqueamientos.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="conversiones">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-indigo-600" />
                    <span>Análisis de Conversiones por Canal</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-4">Conversiones por Fuente</h4>
                      <div className="space-y-3">
                        {conversionesChatBot.map((canal, index) => (
                          <div key={index} className="p-4 border rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">{canal.fuente}</span>
                              <Badge variant="outline">{canal.tasa}</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-2xl font-bold text-indigo-600">{canal.conversiones}</span>
                              <span className="text-sm text-gray-600">conversiones</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Insights de Conversión</h4>
                      <div className="space-y-3">
                        <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                          <div className="flex items-center space-x-2 text-purple-700 mb-2">
                            <Award className="h-4 w-4" />
                            <span className="font-semibold">Mejor Canal</span>
                          </div>
                          <p className="text-sm text-purple-700">
                            Llamada directa tiene la mayor tasa de conversión (15.2%). Optimizar disponibilidad telefónica.
                          </p>
                        </div>
                        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <div className="flex items-center space-x-2 text-yellow-700 mb-2">
                            <Eye className="h-4 w-4" />
                            <span className="font-semibold">Chat Bot Performance</span>
                          </div>
                          <p className="text-sm text-yellow-700">
                            El Chat Bot genera 45 conversiones con 12.3% de tasa. Mayor volumen pero menor conversión que llamadas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reportes">
              <Card>
                <CardHeader>
                  <CardTitle>Reportes Ejecutivos Automáticos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg text-center">
                      <PieChart className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <h4 className="font-semibold mb-2">Reporte Financiero</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Análisis detallado de ingresos, gastos y rentabilidad por período
                      </p>
                      <Button size="sm" className="w-full">
                        Generar Reporte
                      </Button>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <Users className="h-8 w-8 mx-auto mb-2 text-green-600" />
                      <h4 className="font-semibold mb-2">Reporte Pacientes</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Estadísticas de pacientes, satisfacción y retención
                      </p>
                      <Button size="sm" className="w-full">
                        Generar Reporte
                      </Button>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <LineChart className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                      <h4 className="font-semibold mb-2">Reporte Operacional</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Eficiencia operativa, utilización de recursos y productividad
                      </p>
                      <Button size="sm" className="w-full">
                        Generar Reporte
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="exportar">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Download className="h-5 w-5 text-gray-600" />
                    <span>Exportar Datos</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Formatos Disponibles</h4>
                        <div className="space-y-2">
                          <Button variant="outline" className="w-full justify-start">
                            <Download className="h-4 w-4 mr-2" />
                            Exportar a Excel (.xlsx)
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <Download className="h-4 w-4 mr-2" />
                            Exportar a PDF
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <Download className="h-4 w-4 mr-2" />
                            Exportar a CSV
                          </Button>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Exportaciones Programadas</h4>
                        <div className="space-y-2">
                          <div className="p-3 border rounded-lg">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Reporte Semanal</span>
                              <Badge variant="outline">Activo</Badge>
                            </div>
                            <p className="text-xs text-gray-600">Lunes 9:00 AM</p>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Reporte Mensual</span>
                              <Badge variant="outline">Activo</Badge>
                            </div>
                            <p className="text-xs text-gray-600">Día 1 cada mes</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
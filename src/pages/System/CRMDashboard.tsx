import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  BarChart3,
  Users,
  Calendar,
  DollarSign,
  Activity,
  Download,
  Bell,
  Settings,
  Search,
  Filter,
  Eye,
  Mail,
  Phone,
  AlertTriangle,
  ArrowUp,
  ArrowDown,
  Minus
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Progress } from '../../components/ui/progress';

interface Paciente {
  id: string;
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  fechaNacimiento: string;
  fechaRegistro: string;
  ultimaVisita: string;
  proximaCita?: string;
  tratamientos: string[];
  estadoPago: 'pagado' | 'pendiente' | 'atrasado';
  valorTotal: number;
  notas: string;
  urgente?: boolean;
}

interface Cita {
  id: string;
  pacienteId: string;
  pacienteNombre: string;
  fecha: string;
  hora: string;
  tratamiento: string;
  duracion: number;
  estado: 'confirmada' | 'pendiente' | 'cancelada' | 'completada';
  notas?: string;
  precio?: number;
}

interface MetricaNegocio {
  titulo: string;
  valor: string | number;
  cambio: number;
  periodo: string;
  icono: React.ReactNode;
  color: string;
}

// Datos simulados para demostración
const pacientesSimulados: Paciente[] = [
  {
    id: '1',
    nombre: 'María',
    apellidos: 'García López',
    email: 'maria.garcia@email.com',
    telefono: '976 123 456',
    fechaNacimiento: '1985-03-15',
    fechaRegistro: '2024-01-15',
    ultimaVisita: '2025-05-20',
    proximaCita: '2025-06-15',
    tratamientos: ['Digital Smile Design', 'Carillas'],
    estadoPago: 'pagado',
    valorTotal: 3200,
    notas: 'Paciente muy satisfecha con DSD. Interesada en blanqueamiento.'
  },
  {
    id: '2',
    nombre: 'Carlos',
    apellidos: 'Martín Ruiz',
    email: 'carlos.martin@email.com',
    telefono: '976 234 567',
    fechaNacimiento: '1978-09-22',
    fechaRegistro: '2024-03-08',
    ultimaVisita: '2025-06-01',
    proximaCita: '2025-06-20',
    tratamientos: ['Implante Dental', 'Corona'],
    estadoPago: 'pendiente',
    valorTotal: 1800,
    notas: 'Requiere seguimiento post-implante. Evolución excelente.'
  },
  {
    id: '3',
    nombre: 'Ana',
    apellidos: 'Fernández Silva',
    email: 'ana.fernandez@email.com',
    telefono: '976 345 678',
    fechaNacimiento: '1992-11-08',
    fechaRegistro: '2024-05-20',
    ultimaVisita: '2025-06-05',
    tratamientos: ['Ortodoncia', 'Limpieza'],
    estadoPago: 'pagado',
    valorTotal: 2800,
    notas: 'Ortodoncia en progreso. Excelente colaboración.',
    urgente: false
  },
  {
    id: '4',
    nombre: 'David',
    apellidos: 'López Sánchez',
    email: 'david.lopez@email.com',
    telefono: '976 456 789',
    fechaNacimiento: '1988-07-14',
    fechaRegistro: '2025-01-10',
    ultimaVisita: '2025-06-07',
    proximaCita: '2025-06-10',
    tratamientos: ['Urgencia', 'Endodoncia'],
    estadoPago: 'atrasado',
    valorTotal: 650,
    notas: 'Urgencia resuelta. Pendiente segunda sesión endodoncia.',
    urgente: true
  }
];

const citasSimuladas: Cita[] = [
  {
    id: '1',
    pacienteId: '1',
    pacienteNombre: 'María García López',
    fecha: '2025-06-08',
    hora: '10:00',
    tratamiento: 'Control DSD',
    duracion: 30,
    estado: 'confirmada',
    precio: 0
  },
  {
    id: '2',
    pacienteId: '2',
    pacienteNombre: 'Carlos Martín Ruiz',
    fecha: '2025-06-08',
    hora: '11:30',
    tratamiento: 'Revisión Implante',
    duracion: 45,
    estado: 'confirmada',
    precio: 150
  },
  {
    id: '3',
    pacienteId: '4',
    pacienteNombre: 'David López Sánchez',
    fecha: '2025-06-08',
    hora: '16:00',
    tratamiento: 'Endodoncia 2ª sesión',
    duracion: 90,
    estado: 'pendiente',
    precio: 350
  },
  {
    id: '4',
    pacienteId: '3',
    pacienteNombre: 'Ana Fernández Silva',
    fecha: '2025-06-09',
    hora: '09:30',
    tratamiento: 'Control Ortodoncia',
    duracion: 45,
    estado: 'confirmada',
    precio: 0
  }
];

export default function CRMDashboard() {
  const [seccionActiva, setSeccionActiva] = useState('dashboard');
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState<Paciente | null>(null);
  const [filtroEstado, setFiltroEstado] = useState('todos');
  const [busquedaPaciente, setBusquedaPaciente] = useState('');
  const [vistaCitas, setVistaCitas] = useState<'dia' | 'semana' | 'mes'>('dia');
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date().toISOString().split('T')[0]);

  // Métricas calculadas
  const metricas: MetricaNegocio[] = [
    {
      titulo: 'Pacientes Totales',
      valor: pacientesSimulados.length,
      cambio: 12.5,
      periodo: 'vs mes anterior',
      icono: <Users className="h-6 w-6" />,
      color: 'text-blue-600'
    },
    {
      titulo: 'Citas Hoy',
      valor: citasSimuladas.filter(c => c.fecha === fechaSeleccionada).length,
      cambio: 8.2,
      periodo: 'vs ayer',
      icono: <Calendar className="h-6 w-6" />,
      color: 'text-green-600'
    },
    {
      titulo: 'Ingresos Mes',
      valor: '€12,450',
      cambio: 15.3,
      periodo: 'vs mes anterior',
      icono: <DollarSign className="h-6 w-6" />,
      color: 'text-emerald-600'
    },
    {
      titulo: 'Tasa Ocupación',
      valor: '87%',
      cambio: 5.1,
      periodo: 'capacidad clínica',
      icono: <Activity className="h-6 w-6" />,
      color: 'text-purple-600'
    }
  ];

  const pacientesFiltrados = pacientesSimulados.filter(paciente => {
    const coincideBusqueda = busquedaPaciente === '' || 
      `${paciente.nombre} ${paciente.apellidos}`.toLowerCase().includes(busquedaPaciente.toLowerCase());
    
    const coincideEstado = filtroEstado === 'todos' || 
      paciente.estadoPago === filtroEstado;
    
    return coincideBusqueda && coincideEstado;
  });

  const citasDelDia = citasSimuladas.filter(cita => cita.fecha === fechaSeleccionada);

  const tratamientosMasComunes = [
    { nombre: 'Digital Smile Design', cantidad: 8, porcentaje: 35 },
    { nombre: 'Implantes Dentales', cantidad: 6, porcentaje: 26 },
    { nombre: 'Carillas Porcelana', cantidad: 5, porcentaje: 22 },
    { nombre: 'Blanqueamiento', cantidad: 4, porcentaje: 17 }
  ];

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'pagado': return 'bg-green-100 text-green-800';
      case 'pendiente': return 'bg-yellow-100 text-yellow-800';
      case 'atrasado': return 'bg-red-100 text-red-800';
      case 'confirmada': return 'bg-blue-100 text-blue-800';
      case 'completada': return 'bg-green-100 text-green-800';
      case 'cancelada': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTendenciaIcon = (cambio: number) => {
    if (cambio > 0) return <ArrowUp className="h-4 w-4 text-green-600" />;
    if (cambio < 0) return <ArrowDown className="h-4 w-4 text-red-600" />;
    return <Minus className="h-4 w-4 text-gray-400" />;
  };

  return (
    <>
      <Helmet>
        <title>CRM Dashboard - OneDental Zaragoza</title>
        <meta name="description" content="Dashboard de gestión completo para OneDental. Gestión de pacientes, citas, métricas y análisis de negocio." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header del Dashboard */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h1 className="text-2xl font-bold text-gray-900">OneDental CRM</h1>
                  <p className="text-sm text-gray-500">Sistema de Gestión Integral</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar Datos
                </Button>
                <Button variant="outline" size="sm" className="relative">
                  <Bell className="h-4 w-4 mr-2" />
                  <Badge className="absolute -top-1 -right-1 bg-red-500 text-xs px-1 py-0">3</Badge>
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Configuración
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs value={seccionActiva} onValueChange={setSeccionActiva} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="dashboard">📊 Dashboard</TabsTrigger>
              <TabsTrigger value="pacientes">👥 Pacientes</TabsTrigger>
              <TabsTrigger value="citas">📅 Agenda</TabsTrigger>
              <TabsTrigger value="reportes">📈 Reportes</TabsTrigger>
            </TabsList>

            {/* Dashboard Principal */}
            <TabsContent value="dashboard" className="space-y-6">
              {/* Métricas principales */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metricas.map((metrica, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={metrica.color}>
                            {metrica.icono}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-600">{metrica.titulo}</p>
                            <p className="text-2xl font-bold text-gray-900">{metrica.valor}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1">
                            {getTendenciaIcon(metrica.cambio)}
                            <span className={`text-sm font-medium ${
                              metrica.cambio > 0 ? 'text-green-600' : 
                              metrica.cambio < 0 ? 'text-red-600' : 'text-gray-500'
                            }`}>
                              {metrica.cambio > 0 ? '+' : ''}{metrica.cambio}%
                            </span>
                          </div>
                          <p className="text-xs text-gray-500">{metrica.periodo}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Resumen del día */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Citas de Hoy ({citasDelDia.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {citasDelDia.length > 0 ? citasDelDia.map((cita) => (
                        <div key={cita.id} className="flex items-center justify-between p-3 border rounded">
                          <div>
                            <div className="font-medium">{cita.hora} - {cita.pacienteNombre}</div>
                            <div className="text-sm text-gray-600">{cita.tratamiento} ({cita.duracion}min)</div>
                          </div>
                          <Badge className={getEstadoColor(cita.estado)}>
                            {cita.estado}
                          </Badge>
                        </div>
                      )) : (
                        <p className="text-gray-500 text-center py-4">No hay citas programadas para hoy</p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="h-5 w-5 mr-2" />
                      Tratamientos Más Comunes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {tratamientosMasComunes.map((tratamiento, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm font-medium">{tratamiento.nombre}</span>
                          <div className="flex items-center space-x-3">
                            <div className="w-20 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${tratamiento.porcentaje}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 w-8">{tratamiento.cantidad}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Gestión de Pacientes */}
            <TabsContent value="pacientes" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Gestión de Pacientes</h2>
                <Button>Nuevo Paciente</Button>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <Input
                    placeholder="Buscar paciente..."
                    value={busquedaPaciente}
                    onChange={(e) => setBusquedaPaciente(e.target.value)}
                    className="max-w-sm"
                  />
                </div>
                <Select value={filtroEstado} onValueChange={setFiltroEstado}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="pagado">Pagado</SelectItem>
                    <SelectItem value="pendiente">Pendiente</SelectItem>
                    <SelectItem value="atrasado">Atrasado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-4">
                {pacientesFiltrados.map((paciente) => (
                  <Card key={paciente.id} className={`cursor-pointer transition-all ${
                    paciente.urgente ? 'border-red-200 bg-red-50' : ''
                  }`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h3 className="font-semibold flex items-center">
                              {paciente.nombre} {paciente.apellidos}
                              {paciente.urgente && <AlertTriangle className="h-4 w-4 text-red-500 ml-2" />}
                            </h3>
                            <div className="text-sm text-gray-600 space-y-1">
                              <div className="flex items-center">
                                <Mail className="h-3 w-3 mr-1" />
                                {paciente.email}
                              </div>
                              <div className="flex items-center">
                                <Phone className="h-3 w-3 mr-1" />
                                {paciente.telefono}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={getEstadoColor(paciente.estadoPago)}>
                            {paciente.estadoPago}
                          </Badge>
                          <div className="text-sm text-gray-600 mt-1">
                            Valor: €{paciente.valorTotal}
                          </div>
                          {paciente.proximaCita && (
                            <div className="text-sm text-blue-600">
                              Próxima: {new Date(paciente.proximaCita).toLocaleDateString()}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Agenda de Citas */}
            <TabsContent value="citas" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Agenda de Citas</h2>
                <Button>Nueva Cita</Button>
              </div>

              <div className="flex items-center space-x-4">
                <Input
                  type="date"
                  value={fechaSeleccionada}
                  onChange={(e) => setFechaSeleccionada(e.target.value)}
                  className="max-w-xs"
                />
                <Select value={vistaCitas} onValueChange={(value: 'dia' | 'semana' | 'mes') => setVistaCitas(value)}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dia">Día</SelectItem>
                    <SelectItem value="semana">Semana</SelectItem>
                    <SelectItem value="mes">Mes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>
                    Citas para {new Date(fechaSeleccionada).toLocaleDateString('es-ES', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {citasDelDia.map((cita) => (
                      <div key={cita.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{cita.hora} - {cita.pacienteNombre}</div>
                            <div className="text-sm text-gray-600">{cita.tratamiento}</div>
                            <div className="text-sm text-gray-500">Duración: {cita.duracion} minutos</div>
                            {cita.precio && cita.precio > 0 && (
                              <div className="text-sm text-green-600">Precio: €{cita.precio}</div>
                            )}
                          </div>
                          <div className="text-right">
                            <Badge className={getEstadoColor(cita.estado)}>
                              {cita.estado}
                            </Badge>
                            <div className="mt-2 space-x-2">
                              <Button size="sm" variant="outline">Editar</Button>
                              <Button size="sm" variant="outline">Completar</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reportes */}
            <TabsContent value="reportes" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Reportes de Negocio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Ingresos por Tratamiento</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Digital Smile Design</span>
                          <span className="font-medium">€25,600</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Implantes Dentales</span>
                          <span className="font-medium">€18,400</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Carillas Porcelana</span>
                          <span className="font-medium">€14,200</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Pacientes por Estado</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Al día</span>
                          <span className="font-medium text-green-600">145</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pendientes</span>
                          <span className="font-medium text-yellow-600">23</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Atrasados</span>
                          <span className="font-medium text-red-600">8</span>
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
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Bell, 
  Mail, 
  MessageSquare, 
  Smartphone, 
  Settings, 
  Send,
  Users,
  Calendar,
  Heart,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  Play,
  Pause,
  Edit3,
  Eye,
  BarChart3,
  Target,
  Zap,
  Filter
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Switch } from '../../components/ui/switch';
import { Progress } from '../../components/ui/progress';

export default function SistemaNotificaciones() {
  const [activeWorkflows, setActiveWorkflows] = useState(12);
  const [notificationsSent, setNotificationsSent] = useState(2847);
  const [openRate, setOpenRate] = useState(87.3);
  const [clickRate, setClickRate] = useState(23.8);

  const tiposNotificacion = [
    {
      id: 'push',
      nombre: 'Notificaciones Push',
      descripcion: 'Notificaciones instantáneas en dispositivos',
      icono: <Bell className="h-6 w-6" />,
      activo: true,
      alcance: '94%',
      tasa: '78%'
    },
    {
      id: 'email',
      nombre: 'Email Marketing',
      descripcion: 'Campañas de email automatizadas',
      icono: <Mail className="h-6 w-6" />,
      activo: true,
      alcance: '98%',
      tasa: '45%'
    },
    {
      id: 'sms',
      nombre: 'SMS Recordatorios',
      descripcion: 'Mensajes de texto automáticos',
      icono: <MessageSquare className="h-6 w-6" />,
      activo: true,
      alcance: '99%',
      tasa: '92%'
    },
    {
      id: 'whatsapp',
      nombre: 'WhatsApp Business',
      descripcion: 'Mensajes vía WhatsApp API',
      icono: <Smartphone className="h-6 w-6" />,
      activo: false,
      alcance: '87%',
      tasa: '85%'
    }
  ];

  const workflowsAutomatizados = [
    {
      id: 'cita-confirmacion',
      nombre: 'Confirmación de Cita',
      descripcion: 'Confirma citas 24h antes automáticamente',
      trigger: 'Cita programada',
      estado: 'activo',
      enviados: 156,
      tasa: '95%',
      tipo: 'email+sms',
      prioridad: 'alta'
    },
    {
      id: 'post-tratamiento',
      nombre: 'Seguimiento Post-Tratamiento',
      descripcion: 'Serie de 3 emails después del tratamiento',
      trigger: 'Tratamiento completado',
      estado: 'activo',
      enviados: 89,
      tasa: '78%',
      tipo: 'email',
      prioridad: 'media'
    },
    {
      id: 'revision-anual',
      nombre: 'Recordatorio Revisión Anual',
      descripcion: 'Recuerda revisiones anuales a pacientes',
      trigger: 'Fecha última revisión',
      estado: 'activo',
      enviados: 234,
      tasa: '67%',
      tipo: 'email+push',
      prioridad: 'media'
    },
    {
      id: 'promociones',
      nombre: 'Promociones Personalizadas',
      descripcion: 'Ofertas basadas en historial del paciente',
      trigger: 'Algoritmo IA',
      estado: 'activo',
      enviados: 67,
      tasa: '34%',
      tipo: 'email+push',
      prioridad: 'baja'
    },
    {
      id: 'cumpleanos',
      nombre: 'Felicitación Cumpleaños',
      descripcion: 'Mensaje personalizado con descuento especial',
      trigger: 'Fecha cumpleaños',
      estado: 'activo',
      enviados: 45,
      tasa: '89%',
      tipo: 'email+sms',
      prioridad: 'baja'
    }
  ];

  const templatesOneDental = [
    {
      id: 'cita-recordatorio',
      nombre: 'Recordatorio de Cita',
      tipo: 'email',
      asunto: '⏰ Recordatorio: Tu cita en OneDental mañana',
      preview: 'Hola {nombre}, te recordamos tu cita mañana a las {hora} con Dr. Onésimo...',
      uso: 'Alto',
      conversion: '92%',
      personalizacion: ['nombre', 'hora', 'tratamiento', 'doctor']
    },
    {
      id: 'post-implante',
      nombre: 'Cuidados Post-Implante',
      tipo: 'email',
      asunto: '🦷 Cuidados importantes tras tu implante dental',
      preview: 'Estimado/a {nombre}, tu implante dental ha sido un éxito. Te compartimos...',
      uso: 'Medio',
      conversion: '78%',
      personalizacion: ['nombre', 'fecha_tratamiento', 'cuidados_especificos']
    },
    {
      id: 'promocion-blanqueamiento',
      nombre: 'Promoción Blanqueamiento',
      tipo: 'email',
      asunto: '✨ {nombre}, consigue tu sonrisa más brillante',
      preview: 'Oferta especial en blanqueamiento dental. Solo para ti...',
      uso: 'Medio',
      conversion: '45%',
      personalizacion: ['nombre', 'descuento', 'fecha_limite']
    }
  ];

  const metricas = [
    {
      canal: 'Email',
      enviados: 1234,
      entregados: 1198,
      abiertos: 456,
      clicks: 89,
      conversiones: 23,
      tasa_apertura: '38.1%',
      tasa_click: '19.5%',
      tasa_conversion: '25.8%'
    },
    {
      canal: 'SMS',
      enviados: 856,
      entregados: 847,
      abiertos: 798,
      clicks: 234,
      conversiones: 67,
      tasa_apertura: '94.2%',
      tasa_click: '29.3%',
      tasa_conversion: '28.6%'
    },
    {
      canal: 'Push',
      enviados: 567,
      entregados: 534,
      abiertos: 267,
      clicks: 89,
      conversiones: 34,
      tasa_apertura: '50.0%',
      tasa_click: '33.3%',
      tasa_conversion: '38.2%'
    }
  ];

  const configuracionPaciente = [
    { tipo: 'Confirmación de citas', activo: true, canales: ['email', 'sms'] },
    { tipo: 'Recordatorios de citas', activo: true, canales: ['email', 'sms', 'push'] },
    { tipo: 'Seguimiento post-tratamiento', activo: true, canales: ['email'] },
    { tipo: 'Promociones y ofertas', activo: false, canales: ['email', 'push'] },
    { tipo: 'Newsletter mensual', activo: true, canales: ['email'] },
    { tipo: 'Recordatorios de higiene', activo: true, canales: ['push'] }
  ];

  const toggleWorkflow = (workflowId: string) => {
    // Lógica para activar/desactivar workflow
    console.log(`Toggle workflow: ${workflowId}`);
  };

  const enviarTestNotification = (tipo: string) => {
    // Lógica para enviar notificación de prueba
    console.log(`Enviando notificación de prueba: ${tipo}`);
  };

  return (
    <>
      <Helmet>
        <title>Sistema de Notificaciones - OneDental</title>
        <meta name="description" content="Sistema avanzado de notificaciones automáticas con email marketing, SMS y push notifications para OneDental." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Bell className="h-16 w-16 text-purple-200" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Sistema de Notificaciones Automáticas
              </h1>
              <p className="text-xl text-purple-100 mb-6">
                Automatiza la comunicación con tus pacientes con IA avanzada
              </p>
              
              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">{activeWorkflows}</div>
                  <div className="text-purple-200 text-sm">Workflows Activos</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">{notificationsSent.toLocaleString()}</div>
                  <div className="text-purple-200 text-sm">Notificaciones Enviadas</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">{openRate}%</div>
                  <div className="text-purple-200 text-sm">Tasa de Apertura</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">{clickRate}%</div>
                  <div className="text-purple-200 text-sm">Tasa de Click</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs defaultValue="dashboard" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="workflows">Workflows</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="configuracion">Configuración</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-6">
              {/* Canales de Notificación */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tiposNotificacion.map((tipo) => (
                  <Card key={tipo.id} className={`${tipo.activo ? 'ring-2 ring-purple-200' : 'opacity-70'}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-purple-100 rounded-lg">
                          <div className="text-purple-600">
                            {tipo.icono}
                          </div>
                        </div>
                        <Switch checked={tipo.activo} />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{tipo.nombre}</h3>
                      <p className="text-gray-600 text-sm mb-4">{tipo.descripcion}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-500">Alcance:</span>
                          <div className="font-bold text-purple-600">{tipo.alcance}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Apertura:</span>
                          <div className="font-bold text-green-600">{tipo.tasa}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Workflows Recientes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-purple-600" />
                    <span>Workflows Automatizados Activos</span>
                    <Badge className="bg-purple-100 text-purple-700">{activeWorkflows} activos</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {workflowsAutomatizados.slice(0, 3).map((workflow) => (
                      <div key={workflow.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold">{workflow.nombre}</h4>
                            <Badge variant={workflow.estado === 'activo' ? 'default' : 'secondary'}>
                              {workflow.estado}
                            </Badge>
                            <Badge variant="outline" className={`
                              ${workflow.prioridad === 'alta' ? 'border-red-200 text-red-700' : 
                                workflow.prioridad === 'media' ? 'border-yellow-200 text-yellow-700' : 
                                'border-green-200 text-green-700'}
                            `}>
                              {workflow.prioridad}
                            </Badge>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{workflow.descripcion}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Trigger: {workflow.trigger}</span>
                            <span>•</span>
                            <span>Enviados: {workflow.enviados}</span>
                            <span>•</span>
                            <span>Éxito: {workflow.tasa}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit3 className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant={workflow.estado === 'activo' ? 'destructive' : 'default'}
                            onClick={() => toggleWorkflow(workflow.id)}
                          >
                            {workflow.estado === 'activo' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="workflows" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Workflows Automatizados</h2>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Zap className="h-4 w-4 mr-2" />
                  Crear Workflow
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {workflowsAutomatizados.map((workflow) => (
                  <Card key={workflow.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <h3 className="text-xl font-semibold">{workflow.nombre}</h3>
                          <Badge variant={workflow.estado === 'activo' ? 'default' : 'secondary'}>
                            {workflow.estado}
                          </Badge>
                          <Badge variant="outline" className={`
                            ${workflow.prioridad === 'alta' ? 'border-red-200 text-red-700' : 
                              workflow.prioridad === 'media' ? 'border-yellow-200 text-yellow-700' : 
                              'border-green-200 text-green-700'}
                          `}>
                            Prioridad {workflow.prioridad}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <BarChart3 className="h-4 w-4 mr-2" />
                            Métricas
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit3 className="h-4 w-4 mr-2" />
                            Editar
                          </Button>
                          <Button 
                            size="sm" 
                            variant={workflow.estado === 'activo' ? 'destructive' : 'default'}
                          >
                            {workflow.estado === 'activo' ? 
                              <><Pause className="h-4 w-4 mr-2" />Pausar</> : 
                              <><Play className="h-4 w-4 mr-2" />Activar</>
                            }
                          </Button>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{workflow.descripcion}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <Label className="text-gray-500">Trigger</Label>
                          <div className="font-medium">{workflow.trigger}</div>
                        </div>
                        <div>
                          <Label className="text-gray-500">Canales</Label>
                          <div className="font-medium">{workflow.tipo}</div>
                        </div>
                        <div>
                          <Label className="text-gray-500">Enviados</Label>
                          <div className="font-medium text-blue-600">{workflow.enviados}</div>
                        </div>
                        <div>
                          <Label className="text-gray-500">Tasa de Éxito</Label>
                          <div className="font-medium text-green-600">{workflow.tasa}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="templates" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Templates OneDental</h2>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Edit3 className="h-4 w-4 mr-2" />
                  Crear Template
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templatesOneDental.map((template) => (
                  <Card key={template.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline">{template.tipo}</Badge>
                        <div className="flex items-center space-x-2">
                          <Badge variant={template.uso === 'Alto' ? 'default' : template.uso === 'Medio' ? 'secondary' : 'outline'}>
                            {template.uso} uso
                          </Badge>
                          <Badge className="bg-green-100 text-green-700">
                            {template.conversion}
                          </Badge>
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-lg mb-2">{template.nombre}</h3>
                      <div className="bg-gray-50 p-3 rounded-lg mb-4">
                        <div className="text-sm font-medium text-gray-900 mb-1">{template.asunto}</div>
                        <div className="text-xs text-gray-600">{template.preview}</div>
                      </div>
                      
                      <div className="mb-4">
                        <Label className="text-gray-500 text-xs">Personalización disponible:</Label>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {template.personalizacion.map((campo, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {campo}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Edit3 className="h-4 w-4 mr-2" />
                          Editar
                        </Button>
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <h2 className="text-2xl font-bold">Analytics de Notificaciones</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {metricas.map((metrica, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        {metrica.canal === 'Email' && <Mail className="h-5 w-5 text-blue-600" />}
                        {metrica.canal === 'SMS' && <MessageSquare className="h-5 w-5 text-green-600" />}
                        {metrica.canal === 'Push' && <Bell className="h-5 w-5 text-purple-600" />}
                        <span>{metrica.canal}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <Label className="text-gray-500">Enviados</Label>
                            <div className="text-2xl font-bold">{metrica.enviados}</div>
                          </div>
                          <div>
                            <Label className="text-gray-500">Entregados</Label>
                            <div className="text-2xl font-bold text-blue-600">{metrica.entregados}</div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Tasa de Apertura</span>
                              <span className="font-medium">{metrica.tasa_apertura}</span>
                            </div>
                            <Progress value={parseFloat(metrica.tasa_apertura)} className="h-2" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Tasa de Click</span>
                              <span className="font-medium">{metrica.tasa_click}</span>
                            </div>
                            <Progress value={parseFloat(metrica.tasa_click)} className="h-2" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Conversión</span>
                              <span className="font-medium">{metrica.tasa_conversion}</span>
                            </div>
                            <Progress value={parseFloat(metrica.tasa_conversion)} className="h-2" />
                          </div>
                        </div>
                        
                        <div className="pt-2 border-t">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">{metrica.conversiones}</div>
                            <div className="text-sm text-gray-600">Conversiones Totales</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="configuracion" className="space-y-6">
              <h2 className="text-2xl font-bold">Configuración de Notificaciones</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Preferencias por Defecto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {configuracionPaciente.map((config, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <div className="font-medium">{config.tipo}</div>
                            <div className="text-sm text-gray-600">
                              Canales: {config.canales.join(', ')}
                            </div>
                          </div>
                          <Switch checked={config.activo} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Configuración Avanzada</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <Label className="text-sm font-medium">Horario de Envío</Label>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                          <div>
                            <Label className="text-xs text-gray-500">Hora inicio</Label>
                            <Select defaultValue="09:00">
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="08:00">08:00</SelectItem>
                                <SelectItem value="09:00">09:00</SelectItem>
                                <SelectItem value="10:00">10:00</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label className="text-xs text-gray-500">Hora fin</Label>
                            <Select defaultValue="20:00">
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="18:00">18:00</SelectItem>
                                <SelectItem value="19:00">19:00</SelectItem>
                                <SelectItem value="20:00">20:00</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-medium">Frecuencia Máxima</Label>
                        <Select defaultValue="2">
                          <SelectTrigger className="mt-2">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 notificación por día</SelectItem>
                            <SelectItem value="2">2 notificaciones por día</SelectItem>
                            <SelectItem value="3">3 notificaciones por día</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="text-sm font-medium">Configuración de Reintento</Label>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                          <div>
                            <Label className="text-xs text-gray-500">Intentos máximos</Label>
                            <Input type="number" defaultValue="3" />
                          </div>
                          <div>
                            <Label className="text-xs text-gray-500">Intervalo (horas)</Label>
                            <Input type="number" defaultValue="24" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
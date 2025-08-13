import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { 
  CreditCard, 
  Shield, 
  Check, 
  Lock, 
  Euro, 
  Calendar, 
  FileText, 
  Download,
  AlertCircle,
  ChevronRight,
  Star,
  Clock,
  Users
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Progress } from '../../components/ui/progress';

export default function SistemaPagos() {
  const [selectedService, setSelectedService] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentStep, setPaymentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const servicios = [
    {
      id: 'digital-smile-design',
      nombre: 'Digital Smile Design',
      precio: 450,
      descripcion: 'Diseño digital de sonrisa personalizado',
      duracion: '2 horas',
      popularidad: 95
    },
    {
      id: 'implantes-dentales',
      nombre: 'Implante Dental Unitario',
      precio: 1200,
      descripcion: 'Implante completo con corona',
      duracion: '90 minutos',
      popularidad: 88
    },
    {
      id: 'carillas-porcelana',
      nombre: 'Carillas de Porcelana',
      precio: 450,
      descripcion: 'Por carilla individual',
      duracion: '45 minutos',
      popularidad: 92
    },
    {
      id: 'blanqueamiento',
      nombre: 'Blanqueamiento Dental',
      precio: 350,
      descripcion: 'Tratamiento completo en clínica',
      duracion: '90 minutos',
      popularidad: 85
    },
    {
      id: 'ortodoncia-invisalign',
      nombre: 'Invisalign Completo',
      precio: 2800,
      descripcion: 'Tratamiento ortodóncico invisible',
      duracion: '12-18 meses',
      popularidad: 90
    },
    {
      id: 'consulta-reserva',
      nombre: 'Primera Consulta (Reserva)',
      precio: 0,
      descripcion: 'Consulta gratuita con reserva de tarjeta',
      duracion: '45 minutos',
      popularidad: 100
    }
  ];

  const metodsPago = [
    {
      id: 'stripe',
      nombre: 'Tarjeta de Crédito/Débito',
      icono: <CreditCard className="h-5 w-5" />,
      descripcion: 'Pago seguro con Stripe',
      comision: '2.9%',
      disponible: true
    },
    {
      id: 'paypal',
      nombre: 'PayPal',
      icono: <Shield className="h-5 w-5" />,
      descripcion: 'Pago rápido con PayPal',
      comision: '3.4%',
      disponible: true
    },
    {
      id: 'redsys',
      nombre: 'Transferencia Bancaria',
      icono: <FileText className="h-5 w-5" />,
      descripcion: 'Pago por transferencia (Redsys)',
      comision: '0%',
      disponible: true
    },
    {
      id: 'financiacion',
      nombre: 'Financiación',
      icono: <Calendar className="h-5 w-5" />,
      descripcion: 'Hasta 36 meses sin intereses',
      comision: '0%',
      disponible: true
    }
  ];

  const planesFinanciacion = [
    { meses: 3, interes: 0, cuota: 0 },
    { meses: 6, interes: 0, cuota: 0 },
    { meses: 12, interes: 0, cuota: 0 },
    { meses: 24, interes: 2.5, cuota: 0 },
    { meses: 36, interes: 4.5, cuota: 0 }
  ];

  const calcularCuota = (precio: number, meses: number, interes: number) => {
    if (interes === 0) return precio / meses;
    const interesMensual = interes / 100 / 12;
    return precio * (interesMensual * Math.pow(1 + interesMensual, meses)) / 
           (Math.pow(1 + interesMensual, meses) - 1);
  };

  const procesarPago = async () => {
    setIsProcessing(true);
    // Simulación de procesamiento de pago
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsProcessing(false);
    setPaymentSuccess(true);
    setPaymentStep(4);
  };

  const servicioSeleccionado = servicios.find(s => s.id === selectedService);

  return (
    <>
      <Helmet>
        <title>Sistema de Pagos - OneDental Zaragoza</title>
        <meta name="description" content="Sistema de pagos seguro para tratamientos dentales. Múltiples métodos de pago y financiación sin intereses." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-16 w-16 text-blue-200" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Sistema de Pagos Seguro
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Paga tu tratamiento dental de forma segura con múltiples opciones
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Lock className="h-4 w-4" />
                  <span>SSL Encriptado</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>PCI Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <span>Garantía 100%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Indicator */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between text-sm">
              <div className={`flex items-center space-x-2 ${paymentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${paymentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                  1
                </div>
                <span>Seleccionar Servicio</span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <div className={`flex items-center space-x-2 ${paymentStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${paymentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                  2
                </div>
                <span>Método de Pago</span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <div className={`flex items-center space-x-2 ${paymentStep >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${paymentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                  3
                </div>
                <span>Confirmación</span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <div className={`flex items-center space-x-2 ${paymentStep >= 4 ? 'text-green-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${paymentStep >= 4 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                  {paymentStep >= 4 ? <Check className="h-4 w-4" /> : '4'}
                </div>
                <span>Completado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2 space-y-6">
              {paymentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Euro className="h-5 w-5 text-blue-600" />
                      <span>Selecciona tu Tratamiento</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {servicios.map((servicio) => (
                        <Card 
                          key={servicio.id} 
                          className={`cursor-pointer transition-all hover:shadow-md ${
                            selectedService === servicio.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                          }`}
                          onClick={() => setSelectedService(servicio.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-3">
                              <h3 className="font-semibold text-lg">{servicio.nombre}</h3>
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm text-gray-600">{servicio.popularidad}%</span>
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">{servicio.descripcion}</p>
                            <div className="flex justify-between items-center">
                              <div className="text-2xl font-bold text-blue-600">
                                {servicio.precio === 0 ? 'GRATIS' : `${servicio.precio}€`}
                              </div>
                              <div className="flex items-center space-x-1 text-sm text-gray-500">
                                <Clock className="h-4 w-4" />
                                <span>{servicio.duracion}</span>
                              </div>
                            </div>
                            {servicio.precio === 0 && (
                              <div className="mt-2">
                                <Badge variant="secondary" className="text-green-600">
                                  Solo reserva de tarjeta
                                </Badge>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <div className="mt-6 flex justify-end">
                      <Button 
                        onClick={() => setPaymentStep(2)} 
                        disabled={!selectedService}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Continuar
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {paymentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CreditCard className="h-5 w-5 text-blue-600" />
                      <span>Método de Pago</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="pago-directo" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="pago-directo">Pago Directo</TabsTrigger>
                        <TabsTrigger value="financiacion">Financiación</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="pago-directo" className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {metodsPago.filter(m => m.id !== 'financiacion').map((metodo) => (
                            <Card 
                              key={metodo.id}
                              className={`cursor-pointer transition-all hover:shadow-md ${
                                paymentMethod === metodo.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                              } ${!metodo.disponible ? 'opacity-50 cursor-not-allowed' : ''}`}
                              onClick={() => metodo.disponible && setPaymentMethod(metodo.id)}
                            >
                              <CardContent className="p-4">
                                <div className="flex items-center space-x-3 mb-2">
                                  {metodo.icono}
                                  <span className="font-medium">{metodo.nombre}</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">{metodo.descripcion}</p>
                                <div className="text-xs text-gray-500">
                                  Comisión: {metodo.comision}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="financiacion" className="space-y-4">
                        <div className="grid grid-cols-1 gap-3">
                          {planesFinanciacion.map((plan) => {
                            const cuota = servicioSeleccionado ? calcularCuota(servicioSeleccionado.precio, plan.meses, plan.interes) : 0;
                            return (
                              <Card 
                                key={plan.meses}
                                className={`cursor-pointer transition-all hover:shadow-md ${
                                  paymentMethod === `financiacion-${plan.meses}` ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                                }`}
                                onClick={() => setPaymentMethod(`financiacion-${plan.meses}`)}
                              >
                                <CardContent className="p-4">
                                  <div className="flex justify-between items-center">
                                    <div>
                                      <div className="font-medium">
                                        {plan.meses} meses {plan.interes === 0 ? '(Sin intereses)' : `(${plan.interes}% TIN)`}
                                      </div>
                                      <div className="text-sm text-gray-600">
                                        Cuota mensual: {cuota.toFixed(2)}€
                                      </div>
                                    </div>
                                    {plan.interes === 0 && (
                                      <Badge variant="secondary" className="text-green-600">
                                        0% interés
                                      </Badge>
                                    )}
                                  </div>
                                </CardContent>
                              </Card>
                            );
                          })}
                        </div>
                      </TabsContent>
                    </Tabs>
                    
                    <div className="mt-6 flex justify-between">
                      <Button variant="outline" onClick={() => setPaymentStep(1)}>
                        Volver
                      </Button>
                      <Button 
                        onClick={() => setPaymentStep(3)} 
                        disabled={!paymentMethod}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Continuar
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {paymentStep === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Lock className="h-5 w-5 text-blue-600" />
                      <span>Datos de Pago</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="nombre">Nombre Completo</Label>
                          <Input id="nombre" placeholder="Dr. Juan Pérez" />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="juan@email.com" />
                        </div>
                      </div>
                      
                      {paymentMethod === 'stripe' && (
                        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                          <div>
                            <Label htmlFor="card">Número de Tarjeta</Label>
                            <Input id="card" placeholder="1234 5678 9012 3456" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiry">MM/AA</Label>
                              <Input id="expiry" placeholder="12/28" />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" placeholder="123" />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="terms" className="rounded" />
                        <Label htmlFor="terms" className="text-sm">
                          Acepto los <a href="/terminos-condiciones" className="text-blue-600 hover:underline">términos y condiciones</a>
                        </Label>
                      </div>
                    </form>
                    
                    <div className="mt-6 flex justify-between">
                      <Button variant="outline" onClick={() => setPaymentStep(2)}>
                        Volver
                      </Button>
                      <Button 
                        onClick={procesarPago} 
                        disabled={isProcessing}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        {isProcessing ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Procesando...
                          </>
                        ) : (
                          <>
                            <Lock className="h-4 w-4 mr-2" />
                            Pagar Ahora
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {paymentStep === 4 && paymentSuccess && (
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-green-800 mb-2">¡Pago Completado!</h2>
                    <p className="text-green-700 mb-6">
                      Tu pago ha sido procesado exitosamente. Te hemos enviado la confirmación por email.
                    </p>
                    <div className="space-y-3">
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <Download className="h-4 w-4 mr-2" />
                        Descargar Factura
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Calendar className="h-4 w-4 mr-2" />
                        Confirmar Cita
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Summary Sidebar */}
            <div className="space-y-6">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-lg">Resumen del Pedido</CardTitle>
                </CardHeader>
                <CardContent>
                  {servicioSeleccionado ? (
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">{servicioSeleccionado.nombre}</h3>
                        <p className="text-sm text-gray-600">{servicioSeleccionado.descripcion}</p>
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total:</span>
                          <span className="text-blue-600">
                            {servicioSeleccionado.precio === 0 ? 'GRATIS' : `${servicioSeleccionado.precio}€`}
                          </span>
                        </div>
                        {paymentMethod.startsWith('financiacion-') && (
                          <div className="text-sm text-gray-600 mt-2">
                            Financiado en {paymentMethod.split('-')[1]} cuotas
                          </div>
                        )}
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center space-x-2 text-blue-700 text-sm">
                          <Shield className="h-4 w-4" />
                          <span>Garantía incluida</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500">Selecciona un servicio para ver el resumen</p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span>¿Necesitas Ayuda?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <span>📞 Llamar: 976 527 761</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <span>💬 Chat en Vivo</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <span>📧 Email: info@onedental.es</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Security Footer */}
        <section className="bg-gray-50 py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Pagos 100% Seguros</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center justify-center space-x-2 p-3 bg-white rounded-lg shadow-sm">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">SSL 256-bit</span>
                </div>
                <div className="flex items-center justify-center space-x-2 p-3 bg-white rounded-lg shadow-sm">
                  <Lock className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">PCI Compliant</span>
                </div>
                <div className="flex items-center justify-center space-x-2 p-3 bg-white rounded-lg shadow-sm">
                  <Check className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">Verificado</span>
                </div>
                <div className="flex items-center justify-center space-x-2 p-3 bg-white rounded-lg shadow-sm">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  <span className="text-sm font-medium">Garantía 100%</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
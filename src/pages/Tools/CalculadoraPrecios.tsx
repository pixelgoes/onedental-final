import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Calculator, DollarSign, FileText, Download, Heart, Smile, Circle, Sparkles } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Checkbox } from '../../components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';

interface Tratamiento {
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
  duracion: string;
  icon: React.ComponentType<any>;
  categoria: 'estetico' | 'reconstructivo' | 'preventivo' | 'ortodontico';
  descuentoCombo?: number;
}

const tratamientos: Tratamiento[] = [
  {
    id: 'digital-smile-design',
    nombre: 'Digital Smile Design',
    precio: 2500,
    descripcion: 'Diseño digital de sonrisa con tecnología 3D',
    duracion: '2-3 sesiones',
    icon: Sparkles,
    categoria: 'estetico',
    descuentoCombo: 15
  },
  {
    id: 'implante-unitario',
    nombre: 'Implante Dental Unitario',
    precio: 1200,
    descripcion: 'Implante dental completo con corona',
    duracion: '3-4 meses',
    icon: Circle,
    categoria: 'reconstructivo',
    descuentoCombo: 10
  },
  {
    id: 'carilla-porcelana',
    nombre: 'Carilla de Porcelana',
    precio: 450,
    descripcion: 'Carilla de porcelana por pieza',
    duracion: '2-3 sesiones',
    icon: Smile,
    categoria: 'estetico',
    descuentoCombo: 8
  },
  {
    id: 'blanqueamiento',
    nombre: 'Blanqueamiento Dental',
    precio: 350,
    descripcion: 'Blanqueamiento profesional en clínica',
    duracion: '1-2 sesiones',
    icon: Sparkles,
    categoria: 'estetico',
    descuentoCombo: 5
  },
  {
    id: 'ortodoncia',
    nombre: 'Ortodoncia Completa',
    precio: 2800,
    descripcion: 'Tratamiento ortodóncico completo',
    duracion: '18-24 meses',
    icon: Heart,
    categoria: 'ortodontico',
    descuentoCombo: 20
  },
  {
    id: 'limpieza-dental',
    nombre: 'Higiene Dental Profesional',
    precio: 80,
    descripcion: 'Limpieza dental profesional completa',
    duracion: '1 sesión',
    icon: Sparkles,
    categoria: 'preventivo',
    descuentoCombo: 0
  }
];

const opcionesFinanciacion = [
  { meses: 6, interes: 0, nombre: 'Sin intereses' },
  { meses: 12, interes: 3.5, nombre: '12 meses' },
  { meses: 24, interes: 5.2, nombre: '24 meses' },
  { meses: 36, interes: 6.8, nombre: '36 meses' }
];

export default function CalculadoraPrecios() {
  const [tratamientosSeleccionados, setTratamientosSeleccionados] = useState<{[key: string]: number}>({});
  const [mesesFinanciacion, setMesesFinanciacion] = useState<number>(6);
  const [datosContacto, setDatosContacto] = useState({
    nombre: '',
    email: '',
    telefono: ''
  });
  const [mostrarPresupuesto, setMostrarPresupuesto] = useState(false);

  // Cálculos automáticos
  const subtotal = Object.entries(tratamientosSeleccionados).reduce((total, [id, cantidad]) => {
    const tratamiento = tratamientos.find(t => t.id === id);
    return total + (tratamiento ? tratamiento.precio * cantidad : 0);
  }, 0);

  const descuentoCombo = subtotal > 3000 ? 0.15 : subtotal > 2000 ? 0.10 : subtotal > 1000 ? 0.05 : 0;
  const ahorroDescuento = subtotal * descuentoCombo;
  const totalConDescuento = subtotal - ahorroDescuento;
  
  const opcionFinanciacion = opcionesFinanciacion.find(op => op.meses === mesesFinanciacion) || opcionesFinanciacion[0];
  const montoConInteres = totalConDescuento * (1 + opcionFinanciacion.interes / 100);
  const cuotaMensual = montoConInteres / mesesFinanciacion;

  const handleTratamientoChange = (tratamientoId: string, cantidad: number) => {
    if (cantidad === 0) {
      const nuevos = { ...tratamientosSeleccionados };
      delete nuevos[tratamientoId];
      setTratamientosSeleccionados(nuevos);
    } else {
      setTratamientosSeleccionados({
        ...tratamientosSeleccionados,
        [tratamientoId]: cantidad
      });
    }
  };

  const generarPresupuesto = () => {
    if (!datosContacto.nombre || !datosContacto.email) {
      alert('Por favor, completa tus datos de contacto');
      return;
    }
    setMostrarPresupuesto(true);
    
    // Aquí normalmente enviarías los datos al servidor
    console.log('Presupuesto generado:', {
      tratamientos: tratamientosSeleccionados,
      subtotal,
      descuento: ahorroDescuento,
      total: totalConDescuento,
      financiacion: opcionFinanciacion,
      cuotaMensual,
      contacto: datosContacto
    });
  };

  return (
    <>
      <Helmet>
        <title>Calculadora de Precios - OneDental Zaragoza</title>
        <meta name="description" content="Calcula el precio de tu tratamiento dental en OneDental Zaragoza. Financiación hasta 36 meses sin intereses. Primera consulta gratuita." />
        <meta name="keywords" content="precios dentista zaragoza, financiación dental, presupuesto dental, OneDental precios" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Calculator className="h-12 w-12 text-blue-600 mr-4" />
              <h1 className="text-4xl font-bold text-gray-900">
                Calculadora de Precios
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre el precio de tu tratamiento dental ideal con nuestra calculadora interactiva. 
              Financiación personalizada y descuentos por tratamientos combinados.
            </p>
            <Badge variant="secondary" className="mt-4">
              Primera Consulta GRATUITA
            </Badge>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Selector de Tratamientos */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Circle className="h-6 w-6 mr-2 text-blue-600" />
                    Selecciona tus Tratamientos
                  </CardTitle>
                  <CardDescription>
                    Elige los tratamientos que necesitas y ajusta las cantidades
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {tratamientos.map((tratamiento) => {
                    const IconComponent = tratamiento.icon;
                    const cantidad = tratamientosSeleccionados[tratamiento.id] || 0;
                    
                    return (
                      <div key={tratamiento.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 flex-1">
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                checked={cantidad > 0}
                                onCheckedChange={(checked) => 
                                  handleTratamientoChange(tratamiento.id, checked ? 1 : 0)
                                }
                              />
                              <IconComponent className="h-6 w-6 text-blue-600" />
                            </div>
                            
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">{tratamiento.nombre}</h4>
                              <p className="text-sm text-gray-600">{tratamiento.descripcion}</p>
                              <p className="text-sm text-gray-500">{tratamiento.duracion}</p>
                            </div>
                            
                            <div className="text-right">
                              <p className="text-xl font-bold text-blue-600">
                                {tratamiento.precio.toLocaleString('es-ES')}€
                              </p>
                              {tratamiento.descuentoCombo && tratamiento.descuentoCombo > 0 && (
                                <p className="text-sm text-green-600">
                                  -{tratamiento.descuentoCombo}% en combo
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {cantidad > 0 && (
                          <div className="mt-4 flex items-center space-x-4">
                            <Label htmlFor={`cantidad-${tratamiento.id}`} className="text-sm">
                              Cantidad:
                            </Label>
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleTratamientoChange(tratamiento.id, Math.max(0, cantidad - 1))}
                              >
                                -
                              </Button>
                              <span className="w-8 text-center">{cantidad}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleTratamientoChange(tratamiento.id, cantidad + 1)}
                              >
                                +
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Resumen y Financiación */}
            <div className="space-y-6">
              {/* Resumen de Precios */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-6 w-6 mr-2 text-green-600" />
                    Resumen de Precios
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(tratamientosSeleccionados).map(([id, cantidad]) => {
                    const tratamiento = tratamientos.find(t => t.id === id);
                    if (!tratamiento) return null;
                    
                    return (
                      <div key={id} className="flex justify-between text-sm">
                        <span>{tratamiento.nombre} x{cantidad}</span>
                        <span>{(tratamiento.precio * cantidad).toLocaleString('es-ES')}€</span>
                      </div>
                    );
                  })}
                  
                  {subtotal > 0 && (
                    <>
                      <hr className="my-4" />
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>{subtotal.toLocaleString('es-ES')}€</span>
                      </div>
                      
                      {descuentoCombo > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Descuento combo ({(descuentoCombo * 100).toFixed(0)}%):</span>
                          <span>-{ahorroDescuento.toLocaleString('es-ES')}€</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between text-xl font-bold text-blue-600 pt-2 border-t">
                        <span>Total:</span>
                        <span>{totalConDescuento.toLocaleString('es-ES')}€</span>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Opciones de Financiación */}
              {totalConDescuento > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Financiación</CardTitle>
                    <CardDescription>
                      Elige tu plan de pago preferido
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Select
                      value={mesesFinanciacion.toString()}
                      onValueChange={(value) => setMesesFinanciacion(parseInt(value))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {opcionesFinanciacion.map((opcion) => (
                          <SelectItem key={opcion.meses} value={opcion.meses.toString()}>
                            {opcion.nombre} - {opcion.interes === 0 ? 'Sin intereses' : `${opcion.interes}% TAE`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Cuota mensual:</span>
                        <span className="text-2xl font-bold text-blue-600">
                          {cuotaMensual.toLocaleString('es-ES', { maximumFractionDigits: 0 })}€/mes
                        </span>
                      </div>
                      {opcionFinanciacion.interes > 0 && (
                        <p className="text-xs text-gray-500 mt-2">
                          Total a pagar: {montoConInteres.toLocaleString('es-ES', { maximumFractionDigits: 0 })}€
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Formulario de Contacto */}
              {totalConDescuento > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-6 w-6 mr-2 text-purple-600" />
                      Obtener Presupuesto
                    </CardTitle>
                    <CardDescription>
                      Recibe tu presupuesto personalizado
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="nombre">Nombre completo *</Label>
                      <Input
                        id="nombre"
                        value={datosContacto.nombre}
                        onChange={(e) => setDatosContacto({...datosContacto, nombre: e.target.value})}
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={datosContacto.email}
                        onChange={(e) => setDatosContacto({...datosContacto, email: e.target.value})}
                        placeholder="tu@email.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input
                        id="telefono"
                        value={datosContacto.telefono}
                        onChange={(e) => setDatosContacto({...datosContacto, telefono: e.target.value})}
                        placeholder="976 527 761"
                      />
                    </div>
                    
                    <Button 
                      className="w-full" 
                      onClick={generarPresupuesto}
                      disabled={!datosContacto.nombre || !datosContacto.email}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Generar Presupuesto
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Modal de Presupuesto Generado */}
          {mostrarPresupuesto && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <Card className="max-w-2xl w-full max-h-screen overflow-y-auto">
                <CardHeader>
                  <CardTitle className="text-center text-green-600">
                    ¡Presupuesto Generado con Éxito!
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <FileText className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Hola {datosContacto.nombre}
                    </h3>
                    <p className="text-gray-600">
                      Tu presupuesto personalizado ha sido generado y enviado a {datosContacto.email}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-4">Resumen de tu Presupuesto:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Total del tratamiento:</span>
                        <span className="font-semibold">{totalConDescuento.toLocaleString('es-ES')}€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Financiación elegida:</span>
                        <span>{opcionFinanciacion.nombre}</span>
                      </div>
                      <div className="flex justify-between text-blue-600 font-semibold">
                        <span>Cuota mensual:</span>
                        <span>{cuotaMensual.toLocaleString('es-ES', { maximumFractionDigits: 0 })}€/mes</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <p className="text-sm text-gray-600">
                      Próximos pasos:
                    </p>
                    <ul className="text-sm text-left space-y-2">
                      <li>✅ Recibirás el presupuesto detallado por email</li>
                      <li>✅ Te contactaremos en las próximas 24 horas</li>
                      <li>✅ Primera consulta completamente gratuita</li>
                    </ul>
                    
                    <div className="flex space-x-4">
                      <Button 
                        variant="outline" 
                        onClick={() => setMostrarPresupuesto(false)}
                        className="flex-1"
                      >
                        Cerrar
                      </Button>
                      <Button 
                        className="flex-1"
                        onClick={() => window.location.href = '/primera-consulta-gratuita'}
                      >
                        Reservar Consulta
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

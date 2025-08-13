import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  CreditCard, 
  Calculator, 
  CheckCircle, 
  Calendar, 
  Euro,
  PiggyBank,
  Percent,
  Clock,
  Shield,
  Users,
  Heart,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';

export default function Financiacion() {
  const [tratamiento, setTratamiento] = useState('');
  const [importe, setImporte] = useState('');
  const [plazo, setPlazo] = useState('');
  const [cuotaMensual, setCuotaMensual] = useState(0);

  const opcionesFinanciacion = [
    {
      titulo: "Sin Intereses hasta 12 meses",
      descripcion: "Financia tu tratamiento sin ningún tipo de interés",
      caracteristicas: ["0% TAE", "Sin comisiones", "Aprobación inmediata", "Sin aval"],
      monto: "Hasta 3.000€",
      plazo: "3-12 meses",
      aprobacion: "24 horas",
      color: "from-green-600 to-emerald-600",
      popular: true
    },
    {
      titulo: "Financiación Extendida",
      descripcion: "Para tratamientos de mayor importe con condiciones ventajosas",
      caracteristicas: ["TAE desde 4.9%", "Hasta 60 meses", "Cuotas fijas", "Sin penalización"],
      monto: "Hasta 15.000€",
      plazo: "12-60 meses",
      aprobacion: "48 horas",
      color: "from-blue-600 to-indigo-600",
      popular: false
    },
    {
      titulo: "Pago Aplazado",
      descripcion: "Divide tu tratamiento en cómodos pagos mensuales",
      caracteristicas: ["Sin intereses", "Hasta 6 meses", "Sin comisiones", "Gestión simple"],
      monto: "Hasta 1.500€",
      plazo: "2-6 meses",
      aprobacion: "Inmediata",
      color: "from-purple-600 to-pink-600",
      popular: false
    }
  ];

  const tratamientosPopulares = [
    { nombre: "Digital Smile Design", precio: 2500, meses: 12, cuota: 208 },
    { nombre: "Implante Dental Unitario", precio: 1200, meses: 8, cuota: 150 },
    { nombre: "Invisalign Completo", precio: 2800, meses: 18, cuota: 156 },
    { nombre: "Carillas de Porcelana (6 piezas)", precio: 2700, meses: 15, cuota: 180 },
    { nombre: "Rehabilitación Oral Completa", precio: 8500, meses: 36, cuota: 236 },
    { nombre: "Blanqueamiento + Higiene", precio: 450, meses: 6, cuota: 75 }
  ];

  const entidadesColaboradoras = [
    { nombre: "Santander Consumer", tipo: "Banco", interes: "0-5.9%", logo: "🏦" },
    { nombre: "Cofidis", tipo: "Financiera", interes: "4.9-7.9%", logo: "💳" },
    { nombre: "Cetelem", tipo: "Financiera", interes: "3.9-6.9%", logo: "🏪" },
    { nombre: "Pepper Money", tipo: "Financiera", interes: "5.9-8.9%", logo: "🌶️" }
  ];

  const calcularCuota = () => {
    const precio = parseFloat(importe);
    const meses = parseInt(plazo);
    if (precio && meses) {
      // Cálculo simplificado sin intereses para demostración
      const cuota = precio / meses;
      setCuotaMensual(cuota);
    }
  };

  const beneficiosFinanciacion = [
    {
      icono: <PiggyBank className="h-8 w-8" />,
      titulo: "Acceso Inmediato",
      descripcion: "No esperes a tener todo el dinero. Comienza tu tratamiento hoy mismo."
    },
    {
      icono: <Calculator className="h-8 w-8" />,
      titulo: "Cuotas Adaptadas",
      descripcion: "Cuotas mensuales que se adaptan a tu presupuesto familiar."
    },
    {
      icono: <Shield className="h-8 w-8" />,
      titulo: "Sin Sorpresas",
      descripcion: "Condiciones transparentes, sin letra pequeña ni comisiones ocultas."
    },
    {
      icono: <Clock className="h-8 w-8" />,
      titulo: "Aprobación Rápida",
      descripcion: "Respuesta en 24-48 horas para que no retrases tu tratamiento."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Financiación de Tratamientos Dentales - OneDental Zaragoza</title>
        <meta name="description" content="Financia tu tratamiento dental con las mejores condiciones. Sin intereses hasta 12 meses, cuotas desde 50€/mes. Aprobación en 24h." />
        <meta name="keywords" content="financiación dental, pago aplazado, implantes financiados, invisalign a plazos, Zaragoza" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                <CreditCard className="h-4 w-4 mr-2" />
                Financiación Flexible
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Financia tu Sonrisa
              </h1>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                No dejes que el dinero sea un obstáculo para tu salud dental. 
                Ofertas de financiación desde 0% TAE y cuotas desde 50€/mes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                  <Calculator className="h-5 w-5 mr-2" />
                  Calcular Mi Cuota
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  <Phone className="h-5 w-5 mr-2" />
                  Consultar por Teléfono
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Financing Options */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Opciones de Financiación
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Elige la opción que mejor se adapte a tus necesidades y presupuesto
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {opcionesFinanciacion.map((opcion, index) => (
                <Card key={index} className={`relative overflow-hidden ${opcion.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}>
                  {opcion.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-green-500 text-white text-center py-2 text-sm font-semibold">
                      Más Popular
                    </div>
                  )}
                  <div className={`h-2 bg-gradient-to-r ${opcion.color} ${opcion.popular ? 'mt-8' : ''}`}></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{opcion.titulo}</h3>
                    <p className="text-gray-600 mb-6">{opcion.descripcion}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="text-gray-500">Monto máximo:</span>
                        <div className="font-semibold text-green-600">{opcion.monto}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Plazo:</span>
                        <div className="font-semibold">{opcion.plazo}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Aprobación:</span>
                        <div className="font-semibold">{opcion.aprobacion}</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {opcion.caracteristicas.map((caracteristica, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">{caracteristica}</span>
                        </div>
                      ))}
                    </div>

                    <Button className={`w-full bg-gradient-to-r ${opcion.color} text-white hover:opacity-90`}>
                      Solicitar Esta Opción
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Calculadora de Financiación
              </h2>
              <p className="text-xl text-gray-600">
                Descubre cuánto pagarías mensualmente por tu tratamiento
              </p>
            </div>

            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="tratamiento">Tratamiento</Label>
                  <Select value={tratamiento} onValueChange={setTratamiento}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tratamiento" />
                    </SelectTrigger>
                    <SelectContent>
                      {tratamientosPopulares.map((tratamiento, index) => (
                        <SelectItem key={index} value={tratamiento.nombre}>
                          {tratamiento.nombre} - {tratamiento.precio}€
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="importe">Importe (€)</Label>
                  <Input 
                    id="importe"
                    type="number" 
                    placeholder="2500"
                    value={importe}
                    onChange={(e) => setImporte(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="plazo">Plazo (meses)</Label>
                  <Select value={plazo} onValueChange={setPlazo}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona plazo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6">6 meses</SelectItem>
                      <SelectItem value="12">12 meses</SelectItem>
                      <SelectItem value="18">18 meses</SelectItem>
                      <SelectItem value="24">24 meses</SelectItem>
                      <SelectItem value="36">36 meses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button onClick={calcularCuota} className="bg-green-600 hover:bg-green-700">
                  <Calculator className="h-4 w-4 mr-2" />
                  Calcular Cuota
                </Button>
              </div>

              {cuotaMensual > 0 && (
                <div className="mt-6 p-6 bg-green-50 rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Tu cuota mensual sería:</h3>
                  <div className="text-3xl font-bold text-green-600">{cuotaMensual.toFixed(2)}€/mes</div>
                  <p className="text-sm text-gray-600 mt-2">*Cálculo orientativo sin intereses</p>
                </div>
              )}
            </Card>
          </div>
        </section>

        {/* Popular Treatments */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tratamientos Más Financiados
              </h2>
              <p className="text-xl text-gray-600">
                Ejemplos de cuotas mensuales para nuestros tratamientos más populares
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tratamientosPopulares.map((tratamiento, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">{tratamiento.nombre}</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{tratamiento.precio}€</div>
                    <div className="text-sm text-gray-600 mb-4">
                      En {tratamiento.meses} meses sin intereses
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-lg font-bold text-blue-700">{tratamiento.cuota}€/mes</div>
                      <div className="text-xs text-blue-600">Cuota mensual</div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      Financiar Ahora
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Por qué financiar tu tratamiento?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {beneficiosFinanciacion.map((beneficio, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                    {beneficio.icono}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{beneficio.titulo}</h3>
                  <p className="text-gray-600">{beneficio.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Entities */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Entidades Colaboradoras
              </h2>
              <p className="text-xl text-gray-600">
                Trabajamos con las mejores entidades financieras para ofrecerte las mejores condiciones
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {entidadesColaboradoras.map((entidad, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{entidad.logo}</div>
                    <h3 className="font-semibold text-gray-900 mb-1">{entidad.nombre}</h3>
                    <p className="text-sm text-gray-600 mb-2">{entidad.tipo}</p>
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      TAE {entidad.interes}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para financiar tu tratamiento?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Nuestro equipo de asesores financieros te ayudará a encontrar la mejor opción
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                <Calendar className="h-5 w-5 mr-2" />
                Solicitar Financiación
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <Phone className="h-5 w-5 mr-2" />
                Llamar: 976 527 761
              </Button>
            </div>
            <p className="text-sm text-green-200 mt-4">
              Respuesta en menos de 24 horas · Sin compromiso
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

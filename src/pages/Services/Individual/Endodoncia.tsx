import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  Zap,
  Shield,
  Clock,
  Phone,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';

export default function Endodoncia() {
  const sintomas = [
    'Dolor intenso al morder',
    'Sensibilidad extrema al frío/calor',
    'Dolor de diente espontáneo',
    'Inflamación en la encía',
    'Decoloración del diente',
    'Dolor que no cesa con analgésicos'
  ];

  const ventajas = [
    'Salvamos tu diente natural',
    'Sin dolor con anestesia moderna',
    'Procedimiento en 1-2 sesiones',
    'Garantía de éxito del 95%'
  ];

  return (
    <>
      <Helmet>
        <title>Endodoncia Zaragoza - Tratamiento de Conductos - OneDental</title>
        <meta name="description" content="Endodoncia en Zaragoza. Salvamos tu diente con tratamiento de conductos sin dolor. Primera consulta gratuita." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-white/20 text-white border-white/30 mb-4">
                  <Zap className="h-4 w-4 mr-2" />
                  Salvamos tu Diente
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Endodoncia
                  <span className="block text-3xl lg:text-4xl text-green-200">en Zaragoza</span>
                </h1>
                <p className="text-xl text-green-100 mb-8 leading-relaxed">
                  Tratamiento de conductos radiculares para salvar dientes con pulpa dañada. 
                  Procedimiento sin dolor con tecnología de última generación.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                    <Calendar className="h-5 w-5 mr-2" />
                    Consulta Urgente
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Phone className="h-5 w-5 mr-2" />
                    976 527 761
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/doctor-profesional.jpg" 
                  alt="Endodoncia OneDental Zaragoza"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Síntomas */}
        <section className="py-16 bg-red-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Necesitas una Endodoncia?
              </h2>
              <p className="text-xl text-gray-600">Síntomas que indican daño en la pulpa dental</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Síntomas de Alerta</h3>
                  <div className="space-y-3">
                    {sintomas.map((sintoma, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Zap className="h-4 w-4 text-red-600" />
                        <span className="text-gray-700">{sintoma}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Nuestras Ventajas</h3>
                  <div className="space-y-3">
                    {ventajas.map((ventaja, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">{ventaja}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-green-50 rounded">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">450€</div>
                      <div className="text-sm text-gray-600">Endodoncia completa</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">¿Tienes dolor de diente?</h2>
            <p className="text-xl text-green-100 mb-8">
              No esperes más. Una endodoncia a tiempo puede salvar tu diente natural.
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
              <Phone className="h-5 w-5 mr-2" />
              Llamar Ahora: 976 527 761
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
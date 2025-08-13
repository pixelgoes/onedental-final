import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const UrgenciasDentales: React.FC = () => {
  const [selectedUrgency, setSelectedUrgency] = useState('');

  const urgencias = [
    {
      id: 'dolor-intenso',
      title: 'Dolor Dental Intenso',
      description: 'Dolor severo que no cede con analgésicos',
      icon: '😣',
      severity: 'alta'
    },
    {
      id: 'traumatismo',
      title: 'Traumatismo / Golpe',
      description: 'Diente roto, fracturado o que se ha salido',
      icon: '🦷💥',
      severity: 'alta'
    },
    {
      id: 'hinchazon',
      title: 'Hinchazón o Flemón',
      description: 'Inflamación en cara, encía o dentro de la boca',
      icon: '🤧',
      severity: 'alta'
    },
    {
      id: 'sangrado',
      title: 'Sangrado Abundante',
      description: 'Sangrado de encías que no se detiene',
      icon: '🩸',
      severity: 'media'
    },
    {
      id: 'protesis-rota',
      title: 'Prótesis Rota',
      description: 'Dentadura, corona o puente fracturado',
      icon: '🔧',
      severity: 'media'
    },
    {
      id: 'empaste-perdido',
      title: 'Empaste Perdido',
      description: 'Se ha caído un empaste o corona',
      icon: '⚠️',
      severity: 'baja'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'alta': return 'bg-red-100 border-red-300 text-red-800';
      case 'media': return 'bg-orange-100 border-orange-300 text-orange-800';
      case 'baja': return 'bg-yellow-100 border-yellow-300 text-yellow-800';
      default: return 'bg-gray-100 border-gray-300 text-gray-800';
    }
  };

  return (
    <>
      <Helmet>
        <title>Urgencias Dentales Zaragoza | Atención Inmediata OneDental</title>
        <meta name="description" content="Urgencias dentales en Zaragoza. Atención inmediata para dolor, traumatismos, flemones. Llamanos 976 527 761. OneDental urgencias 24h." />
        <meta name="keywords" content="urgencias dentales zaragoza, dolor dental, urgencia 24h, dentista urgencias, onedental emergencias" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section de Urgencia */}
        <div className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🚨</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Urgencias Dentales
              </h1>
              <p className="text-xl md:text-2xl text-red-100 mb-8">
                Atención inmediata cuando más lo necesitas
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
                <p className="text-lg mb-4">
                  <strong>¿Tienes una urgencia dental?</strong>
                </p>
                <p className="text-red-100 mb-6">
                  No esperes más. Llámanos ahora y te atenderemos en el menor tiempo posible.
                </p>
                <a
                  href="tel:976527761"
                  className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-red-50 transition-colors animate-pulse"
                >
                  📞 976 527 761
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tipos de Urgencias */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Identifica Tu Urgencia Dental
              </h2>
              <p className="text-lg text-gray-600">
                Selecciona el tipo de urgencia que mejor describe tu situación
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {urgencias.map((urgencia) => (
                <div
                  key={urgencia.id}
                  className={`cursor-pointer border-2 rounded-lg p-6 transition-all hover:shadow-lg ${
                    selectedUrgency === urgencia.id
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 bg-white hover:border-red-300'
                  }`}
                  onClick={() => setSelectedUrgency(urgencia.id)}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{urgencia.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {urgencia.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {urgencia.description}
                    </p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getSeverityColor(urgencia.severity)}`}>
                      {urgencia.severity === 'alta' && 'URGENCIA ALTA'}
                      {urgencia.severity === 'media' && 'URGENCIA MEDIA'}
                      {urgencia.severity === 'baja' && 'URGENCIA BAJA'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {selectedUrgency && (
              <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-red-800 mb-4">
                    ¿Tienes esta urgencia?
                  </h3>
                  <p className="text-red-700 mb-6">
                    No esperes más. Cuanto antes recibas atención, mejor será el pronóstico.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:976527761"
                      className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                      📞 Llamar Ahora: 976 527 761
                    </a>
                    <a
                      href="/primera-consulta-gratuita"
                      className="inline-flex items-center gap-2 bg-white text-red-600 border border-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                    >
                      📅 Reservar Cita Urgente
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Primeros Auxilios */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Primeros Auxilios Dentales
              </h2>
              <p className="text-lg text-gray-600">
                Qué hacer mientras llamas o vienes a la clínica
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                    😣 Dolor Dental Intenso
                  </h3>
                  <ul className="space-y-2 text-red-700">
                    <li>• Toma analgésicos (paracetamol o ibuprofeno)</li>
                    <li>• Aplica frío en el exterior de la mejilla</li>
                    <li>• Evita alimentos muy calientes o fríos</li>
                    <li>• No apliques aspirina directamente en el diente</li>
                    <li>• Llámanos inmediatamente</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-bold text-orange-800 mb-3 flex items-center">
                    🦷💥 Traumatismo Dental
                  </h3>
                  <ul className="space-y-2 text-orange-700">
                    <li>• Si el diente se ha salido, mantenlo en leche</li>
                    <li>• No toques la raíz del diente</li>
                    <li>• Aplica presión para controlar el sangrado</li>
                    <li>• Aplica hielo en el exterior</li>
                    <li>• Ven a la clínica INMEDIATAMENTE</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                    🤧 Hinchazón o Flemón
                  </h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Aplica frío en el exterior de la cara</li>
                    <li>• Mantén la cabeza elevada al dormir</li>
                    <li>• Enjuágate con agua tibia y sal</li>
                    <li>• Toma antiinflamatorios si no hay contraindicación</li>
                    <li>• No apliques calor ni revientes nada</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-lg font-bold text-green-800 mb-3 flex items-center">
                    🩸 Sangrado Dental
                  </h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Aplica presión con gasa limpia</li>
                    <li>• Muerde una bolsita de té negro húmeda</li>
                    <li>• Evita enjuagar vigorosamente</li>
                    <li>• No escupas constantemente</li>
                    <li>• Si no para en 20 min, llama urgente</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cuándo es Urgencia Real */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Cuándo es una Urgencia Real?
              </h2>
              <p className="text-lg text-gray-600">
                Aprende a distinguir entre urgencia real y molestia dental
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Urgencia Real */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🚨</div>
                  <h3 className="text-2xl font-bold text-red-800">URGENCIA REAL</h3>
                  <p className="text-red-600">Requiere atención inmediata</p>
                </div>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Dolor dental severo que no cede con analgésicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Hinchazón importante en cara o cuello</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Diente fracturado o que se ha salido</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Sangrado abundante que no se detiene</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Fiebre asociada a problema dental</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Dificultad para tragar o respirar</span>
                  </li>
                </ul>
              </div>

              {/* Puede Esperar */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">⏰</div>
                  <h3 className="text-2xl font-bold text-green-800">PUEDE ESPERAR</h3>
                  <p className="text-green-600">Programa cita en horario normal</p>
                </div>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Sensibilidad dental leve</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Empaste pequeño que se ha caído</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Dolor leve que mejora con analgésicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Bracket de ortodoncia suelto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Pequeña rozadura en la encía</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Revisión rutinaria o limpieza</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Atención de Urgencias */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nuestra Atención de Urgencias
              </h2>
              <p className="text-lg text-gray-600">
                Protocolo de atención inmediata en OneDental
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">1. Llamada Inmediata</h3>
                <p className="text-gray-600">
                  Llama al 976 527 761. Evaluamos tu caso y te damos instrucciones 
                  de primeros auxilios si es necesario.
                </p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-4xl mb-4">🏃‍♂️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">2. Atención Prioritaria</h3>
                <p className="text-gray-600">
                  Te reservamos un hueco urgente el mismo día. Las urgencias 
                  tienen prioridad sobre las citas programadas.
                </p>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-4xl mb-4">🩺</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">3. Tratamiento Inmediato</h3>
                <p className="text-gray-600">
                  Resolvemos tu urgencia de inmediato y planificamos el 
                  tratamiento definitivo si es necesario.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Costes de Urgencias */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Costes de Urgencias
              </h2>
              <p className="text-lg text-gray-600">
                Transparencia total en nuestras tarifas de urgencia
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Horario Normal</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Consulta de urgencia</span>
                      <span className="font-semibold">50€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tratamiento del dolor</span>
                      <span className="font-semibold">80-120€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Extracción urgente</span>
                      <span className="font-semibold">80-150€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Endodoncia urgente</span>
                      <span className="font-semibold">200-300€</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Fuera de Horario</h3>
                  <div className="space-y-3">
                    <div className="bg-orange-50 p-3 rounded">
                      <p className="text-orange-800 text-sm mb-2">
                        <strong>Suplemento del 25%</strong> en urgencias fuera del horario habitual
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <span>Consulta urgente nocturna</span>
                      <span className="font-semibold">65€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tratamiento del dolor</span>
                      <span className="font-semibold">100-150€</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">💡 Importante:</h4>
                <ul className="text-blue-800 space-y-1">
                  <li>• Los precios incluyen IVA</li>
                  <li>• Aceptamos todos los métodos de pago</li>
                  <li>• Posibilidad de financiación en tratamientos amplios</li>
                  <li>• Algunas urgencias pueden estar cubiertas por seguros</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto de Urgencias */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Necesitas Atención Urgente?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              No esperes más. Cada minuto cuenta en una urgencia dental.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">📞 Teléfono de Urgencias</h3>
                  <a
                    href="tel:976527761"
                    className="text-3xl font-bold text-yellow-300 hover:text-yellow-200 transition-colors"
                  >
                    976 527 761
                  </a>
                </div>
                
                <div className="border-t border-white/20 pt-6">
                  <h4 className="text-lg font-semibold mb-4">Horarios de Atención</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>L-X-V:</strong> 9:00-17:00</p>
                      <p><strong>M-J:</strong> 9:00-21:00</p>
                    </div>
                    <div>
                      <p><strong>Urgencias:</strong> 24/7</p>
                      <p><strong>Respuesta:</strong> &lt; 30 min</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <p className="text-red-100">
                    <strong>📍 Dirección:</strong> Calle Pablo Neruda 17, Zaragoza
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UrgenciasDentales;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const PrimeraConsultaGratuita: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    telefono: '',
    email: '',
    fecha: '',
    hora: '',
    tratamiento: '',
    mensaje: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¡Solicitud Enviada!</h2>
          <p className="text-gray-600 mb-6">
            Hemos recibido tu solicitud. Nos pondremos en contacto contigo en las próximas 2 horas 
            para confirmar tu cita.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-blue-800 font-semibold">
              📞 Si tienes urgencia, llámanos directamente al 976 527 761
            </p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Volver al formulario
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Primera Consulta Gratuita | OneDental Zaragoza - Reserva Ahora</title>
        <meta name="description" content="Reserva tu primera consulta gratuita en OneDental Zaragoza. Diagnóstico completo, presupuesto personalizado y plan de tratamiento sin coste." />
        <meta name="keywords" content="consulta gratuita, dentista zaragoza, diagnostico dental, presupuesto gratis, onedental cita" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                  ✨ OFERTA ESPECIAL ✨
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Primera Consulta
                  <span className="block text-green-300">Completamente GRATUITA</span>
                </h1>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="text-green-300 mr-3 text-xl">✓</div>
                    <span className="text-lg">Diagnóstico completo sin coste</span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-green-300 mr-3 text-xl">✓</div>
                    <span className="text-lg">Presupuesto personalizado</span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-green-300 mr-3 text-xl">✓</div>
                    <span className="text-lg">Plan de tratamiento detallado</span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-green-300 mr-3 text-xl">✓</div>
                    <span className="text-lg">Asesoramiento profesional</span>
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-blue-100">
                    <strong>Valor de la consulta: 150€</strong> - 
                    <span className="text-green-300"> ¡Ahora GRATIS!</span>
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/doctor-profesional.jpg" 
                  alt="Dr. Onésimo Fernández - Consulta gratuita" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-2 rounded-lg font-bold">
                  ¡GRATIS!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario de Reserva */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Reserva Tu Consulta Gratuita
                </h2>
                <p className="text-lg text-gray-600">
                  Completa el formulario y nos pondremos en contacto contigo en menos de 2 horas
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apellidos *
                    </label>
                    <input
                      type="text"
                      name="apellidos"
                      value={formData.apellidos}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tus apellidos"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="976 XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha preferida
                    </label>
                    <input
                      type="date"
                      name="fecha"
                      value={formData.fecha}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hora preferida
                    </label>
                    <select
                      name="hora"
                      value={formData.hora}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Selecciona una hora</option>
                      <option value="09:00">09:00</option>
                      <option value="09:30">09:30</option>
                      <option value="10:00">10:00</option>
                      <option value="10:30">10:30</option>
                      <option value="11:00">11:00</option>
                      <option value="11:30">11:30</option>
                      <option value="12:00">12:00</option>
                      <option value="16:00">16:00</option>
                      <option value="16:30">16:30</option>
                      <option value="17:00">17:00</option>
                      <option value="17:30">17:30</option>
                      <option value="18:00">18:00</option>
                      <option value="18:30">18:30</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tratamiento de interés
                  </label>
                  <select
                    name="tratamiento"
                    value={formData.tratamiento}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un tratamiento</option>
                    <option value="digital-smile-design">Digital Smile Design</option>
                    <option value="implantes-dentales">Implantes Dentales</option>
                    <option value="carillas-porcelana">Carillas de Porcelana</option>
                    <option value="blanqueamiento-dental">Blanqueamiento Dental</option>
                    <option value="ortodoncia">Ortodoncia</option>
                    <option value="periodoncia">Periodoncia</option>
                    <option value="endodoncia">Endodoncia</option>
                    <option value="cirugia-dental">Cirugía Dental</option>
                    <option value="protesis-dental">Prótesis Dental</option>
                    <option value="higiene-dental">Higiene Dental</option>
                    <option value="revision-general">Revisión General</option>
                    <option value="urgencia">Urgencia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cuéntanos tu caso (opcional)
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe brevemente tu situación o qué te gustaría consultar..."
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="acepto"
                      required
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="acepto" className="text-sm text-gray-600">
                      Acepto la <a href="/politica-privacidad" className="text-blue-600 hover:text-blue-800">política de privacidad</a> y 
                      autorizo el tratamiento de mis datos para la gestión de la cita. *
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
                >
                  🗓️ Reservar Mi Consulta Gratuita
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  ¿Prefieres llamar? Estamos disponibles:
                </p>
                <a
                  href="tel:976527761"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  📞 976 527 761
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ¿Qué incluye tu consulta gratuita? */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Qué Incluye Tu Consulta Gratuita?
              </h2>
              <p className="text-lg text-gray-600">
                Una valoración completa y profesional sin ningún coste
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="font-bold text-gray-900 mb-2">Exploración Completa</h3>
                <p className="text-gray-600 text-sm">
                  Revisión exhaustiva de dientes, encías y estructuras orales
                </p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="font-bold text-gray-900 mb-2">Diagnóstico Detallado</h3>
                <p className="text-gray-600 text-sm">
                  Evaluación profesional de tu estado de salud oral actual
                </p>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="font-bold text-gray-900 mb-2">Plan de Tratamiento</h3>
                <p className="text-gray-600 text-sm">
                  Propuesta personalizada con opciones y alternativas
                </p>
              </div>

              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="font-bold text-gray-900 mb-2">Presupuesto Detallado</h3>
                <p className="text-gray-600 text-sm">
                  Precios transparentes y opciones de financiación
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué elegir OneDental */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Por Qué Elegir OneDental?
              </h2>
              <p className="text-lg text-gray-600">
                La confianza de cientos de familias en Zaragoza
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">12+ Años de Experiencia</h3>
                <p className="text-gray-600">
                  Más de una década transformando sonrisas con la tecnología más avanzada
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tecnología de Vanguardia</h3>
                <p className="text-gray-600">
                  Digital Smile Design, implantes guiados y equipamiento de última generación
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">98% de Satisfacción</h3>
                <p className="text-gray-600">
                  Nuestros pacientes avalan la calidad de nuestros tratamientos
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Lo que Dicen Nuestros Pacientes
              </h2>
              <p className="text-lg text-gray-600">
                Testimonios reales de personas que confiaron en nosotros
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 mr-1">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4">
                  "La consulta gratuita me convenció. El Dr. Onésimo me explicó todo con paciencia 
                  y el resultado de mis implantes ha sido perfecto."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Carlos Ruiz</p>
                  <p className="text-sm text-gray-600">Implantes dentales</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 mr-1">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Desde la primera consulta me sentí en confianza. El trato es excepcional 
                  y las instalaciones muy modernas."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Ana López</p>
                  <p className="text-sm text-gray-600">Carillas de porcelana</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 mr-1">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4">
                  "El Digital Smile Design me permitió ver mi sonrisa antes del tratamiento. 
                  El resultado superó mis expectativas."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">María González</p>
                  <p className="text-sm text-gray-600">Digital Smile Design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgencias */}
        <section className="py-16 bg-red-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-red-600 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                🚨 ¿Tienes una Urgencia Dental?
              </h2>
              <p className="text-lg mb-6">
                Si tienes dolor intenso o una emergencia dental, llámanos inmediatamente. 
                Atendemos urgencias en el mismo día.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:976527761"
                  className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                >
                  📞 Llamar Ahora: 976 527 761
                </a>
                <a
                  href="/urgencias-dentales"
                  className="inline-flex items-center justify-center gap-2 bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-400 transition-colors"
                >
                  🏥 Info Urgencias
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrimeraConsultaGratuita;

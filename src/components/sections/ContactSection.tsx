import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, User, MessageCircle, Send, CheckCircle } from '../icons/LucideIcons';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Digital Smile Design',
    'Carillas de Porcelana', 
    'Blanqueamiento Dental',
    'Implantes Dentales',
    'Implantes Guiados por Ordenador',
    'Implantes Inmediatos',
    'Periodoncia',
    'Endodoncia',
    'Ortodoncia',
    'Prótesis Dentales',
    'Consulta General',
    'Otro'
  ];

  const timeSlots = [
    'Mañana (9:00-13:00)',
    'Tarde (15:30-17:00)',
    'Tarde (17:00-20:00)',
    'Sin preferencia'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¡Solicitud Enviada Correctamente!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Gracias por confiar en OneDental. Nos pondremos en contacto contigo en las próximas 24 horas 
              para confirmar tu cita y resolver cualquier duda que puedas tener.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-gray-900 mb-2">¿Necesitas atención inmediata?</h3>
              <p className="text-gray-600 mb-4">Puedes llamarnos directamente al teléfono:</p>
              <a
                href="tel:976527761"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>976 527 761</span>
              </a>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  phone: '',
                  email: '',
                  service: '',
                  preferredTime: '',
                  message: ''
                });
              }}
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Solicitar otra cita
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contacta con Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tu nueva sonrisa está a solo una llamada de distancia. Programa tu consulta gratuita 
            y descubre cómo podemos transformar tu sonrisa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full inline-flex items-center space-x-2 mb-6">
              <Calendar className="w-4 h-4" />
              <span className="font-semibold">PRIMERA CONSULTA GRATUITA</span>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Solicita tu Cita Gratuita
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tu nombre"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tu teléfono"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Servicio de interés
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Preferred Time */}
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                  Horario preferido
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecciona un horario</option>
                  {timeSlots.map((slot, index) => (
                    <option key={index} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje (opcional)
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Cuéntanos brevemente sobre tu caso o dudas..."
                  />
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  Al enviar este formulario, aceptas que OneDental se ponga en contacto contigo para 
                  programar tu cita. Tus datos se tratarán conforme a nuestra política de privacidad.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Solicitar Cita Gratuita</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Información de Contacto
            </h3>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Ubicación</h4>
                  <p className="text-gray-600">
                    Calle de Pablo Neruda, 17<br />
                    50018 Zaragoza, España
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Calle+Pablo+Neruda+17+Zaragoza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm font-semibold mt-2 inline-block"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                  <a 
                    href="tel:976527761"
                    className="text-lg font-bold text-green-600 hover:text-green-700"
                  >
                    976 527 761
                  </a>
                  <p className="text-gray-600 text-sm">Llamadas y WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a 
                    href="mailto:info@onedental.es"
                    className="text-purple-600 hover:text-purple-700 font-semibold"
                  >
                    info@onedental.es
                  </a>
                  <p className="text-gray-600 text-sm">Respuesta en 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Horarios</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Lunes:</span>
                      <span className="font-semibold">9:00-17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Martes:</span>
                      <span className="font-semibold">9:00-13:30, 15:30-21:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Miércoles:</span>
                      <span className="font-semibold">9:00-17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Jueves:</span>
                      <span className="font-semibold">9:00-13:30, 15:30-20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Viernes:</span>
                      <span className="font-semibold">9:00-13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado-Domingo:</span>
                      <span className="text-red-600 font-semibold">Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Fácil acceso</h4>
              <p className="text-gray-600 mb-4">
                Ubicados en Pablo Neruda 17, con fácil acceso en transporte público y parking disponible.
              </p>
              <a
                href="https://maps.google.com/?q=Calle+Pablo+Neruda+17+Zaragoza"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
              >
                <MapPin className="w-5 h-5" />
                <span>Cómo llegar</span>
              </a>
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-red-800 mb-2">¿Urgencia dental?</h4>
              <p className="text-red-700 mb-4">
                Para urgencias fuera de horario, contacta con nosotros por WhatsApp.
              </p>
              <a
                href="https://wa.me/34976527761?text=Tengo una urgencia dental"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
              >
                <span>📱</span>
                <span>WhatsApp Urgencias</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

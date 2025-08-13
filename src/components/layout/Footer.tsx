import React from 'react';
import { MapPin, Phone, Mail, Clock, Star, Award, Users, Shield } from '../icons/LucideIcons';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Dr. Onésimo', href: '#doctor' },
    { name: 'Casos de Éxito', href: '#casos' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const services = [
    { name: 'Digital Smile Design', href: '#servicios' },
    { name: 'Implantes Dentales', href: '#servicios' },
    { name: 'Carillas de Porcelana', href: '#servicios' },
    { name: 'Blanqueamiento Dental', href: '#servicios' },
    { name: 'Ortodoncia', href: '#servicios' },
    { name: 'Primera Consulta Gratuita', href: '#cita' }
  ];

  const stats = [
    {
      icon: <Clock className="w-5 h-5" />,
      number: "12+",
      text: "Años de Experiencia"
    },
    {
      icon: <Users className="w-5 h-5" />,
      number: "500+",
      text: "Pacientes Satisfechos"
    },
    {
      icon: <Star className="w-5 h-5" />,
      number: "4.9/5",
      text: "Valoración Google"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      number: "98%",
      text: "Tasa de Éxito"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <span className="font-bold text-xl">1D</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">OneDental</h3>
                <p className="text-gray-400 text-sm">Clínica Dental Dr. Onésimo Fernández</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              12 años transformando sonrisas en Zaragoza con la tecnología más avanzada. 
              Especialistas en Digital Smile Design e implantología.
            </p>

            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Award className="w-4 h-4 text-blue-400" />
                <span>Colegio Profesional de Odontólogos</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Garantía en todos los tratamientos</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Primera consulta GRATUITA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300">
                    Calle de Pablo Neruda, 17<br />
                    50018 Zaragoza, España
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <div>
                  <a
                    href="tel:976527761"
                    className="text-gray-300 hover:text-green-400 transition-colors font-semibold"
                  >
                    976 527 761
                  </a>
                  <p className="text-gray-400 text-sm">Llamadas y WhatsApp</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <div>
                  <a
                    href="mailto:info@onedental.es"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    info@onedental.es
                  </a>
                  <p className="text-gray-400 text-sm">Respuesta en 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Lun-Mié: 9:00-17:00<br />
                    Mar: 9:00-13:30, 15:30-21:00<br />
                    Jue: 9:00-13:30, 15:30-20:00<br />
                    Vie: 9:00-13:00
                  </p>
                </div>
              </div>
            </div>

            {/* Social/Contact Buttons */}
            <div className="mt-6 space-y-3">
              <a
                href="tel:976527761"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Llamar Ahora</span>
              </a>
              <a
                href="https://wa.me/34976527761?text=Hola, me gustaría solicitar información sobre sus servicios dentales"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <span>📱</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-blue-400">{stat.number}</div>
                </div>
                <div className="text-gray-300 text-sm">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">¿Listo para tu nueva sonrisa?</h3>
          <p className="text-blue-100 mb-6">
            Primera consulta GRATUITA con el Dr. Onésimo Fernández
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#cita"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Solicitar Cita Gratuita
            </a>
            <a
              href="tel:976527761"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              📞 976 527 761
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <p>&copy; 2024 OneDental - Clínica Dental Dr. Onésimo Fernández. Todos los derechos reservados.</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-700 text-center">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Calle Pablo Neruda, 17, 50018 Zaragoza</span>
              <span>•</span>
              <Phone className="w-4 h-4" />
              <span>976 527 761</span>
              <span>•</span>
              <Mail className="w-4 h-4" />
              <span>info@onedental.es</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

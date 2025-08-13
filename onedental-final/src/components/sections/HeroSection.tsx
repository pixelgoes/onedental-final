import React from 'react';
import { Star, Award, Users, Clock } from '../icons/LucideIcons';

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-blue-50 to-white pt-24 lg:pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="lg:pr-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              <span>12+ años transformando sonrisas en Zaragoza</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Especialistas en{' '}
              <span className="text-blue-600">Estética Dental</span> y{' '}
              <span className="text-blue-600">Digital Smile Design</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              12 años transformando sonrisas con la tecnología más avanzada. 
              <span className="font-semibold text-gray-800"> Primera consulta gratuita</span> con el Dr. Onésimo Fernández.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">12+ Años</div>
                  <div className="text-sm text-gray-600">Experiencia</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Star className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">4.9/5</div>
                  <div className="text-sm text-gray-600">Valoración</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Pacientes</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <a
                href="#cita"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2 shadow-lg"
              >
                <Clock className="w-5 h-5" />
                <span>Primera Consulta GRATUITA</span>
              </a>
              <a
                href="tel:976527761"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
              >
                📞 976 527 761
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="ml-1">4.9/5 en Google</span>
              </div>
              <div className="hidden sm:block">|</div>
              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4 text-blue-600" />
                <span>Certificado por el Colegio de Odontólogos</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 shadow-2xl">
              {/* Placeholder for doctor image */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="text-4xl">👨‍⚕️</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Onésimo Fernández</h3>
                  <p className="text-gray-600 mb-4">Director Médico</p>
                  <p className="text-sm text-gray-600">
                    Especialista en Implanto-prótesis UCM<br />
                    Pionero en Digital Smile Design
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                <Star className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg">
                <Award className="w-6 h-6" />
              </div>
            </div>

            {/* Testimonial popup */}
            <div className="absolute -bottom-6 left-4 right-4 bg-white p-4 rounded-lg shadow-xl border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm">👩</span>
                </div>
                <div className="flex-1">
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700">"Increíble resultado con Digital Smile Design"</p>
                  <p className="text-xs text-gray-500">- María G.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
            <div className="text-gray-600">Años de Experiencia</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Pacientes Satisfechos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Tasa de Éxito</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
            <div className="text-gray-600">Años Especializándose</div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-100 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-100 rounded-full opacity-50"></div>
      </div>
    </section>
  );
};

export default HeroSection;

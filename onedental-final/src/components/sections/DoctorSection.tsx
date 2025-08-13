import React from 'react';
import { Award, GraduationCap, Users, Star, Clock, Shield } from '../icons/LucideIcons';

const DoctorSection: React.FC = () => {
  const qualifications = [
    {
      title: "Licenciado en Odontología",
      institution: "Universidad Europea Madrid",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      title: "Especialista en Implanto-prótesis",
      institution: "Universidad Complutense Madrid",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Formación Digital Smile Design",
      institution: "Certificación Internacional",
      icon: <Star className="w-5 h-5" />
    }
  ];

  const achievements = [
    {
      number: "24",
      text: "Años especializándose en prótesis",
      icon: <Clock className="w-6 h-6" />
    },
    {
      number: "500+",
      text: "Pacientes satisfechos",
      icon: <Users className="w-6 h-6" />
    },
    {
      number: "98%",
      text: "Tasa de éxito en tratamientos",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const teamMembers = [
    {
      name: "Sara Royo",
      position: "Higienista Dental",
      experience: "Desde 2008",
      description: "Especialista en prevención y mantenimiento de la salud oral."
    },
    {
      name: "Ana Córdoba", 
      position: "Higienista Dental",
      experience: "Desde 2015",
      description: "Experta en tratamientos preventivos y cuidado periodontal."
    }
  ];

  return (
    <section id="doctor" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conoce a Nuestro Equipo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un equipo de profesionales con más de 12 años de experiencia, especializados en las 
            técnicas más avanzadas de odontología estética e implantología.
          </p>
        </div>

        {/* Dr. Onésimo Fernández Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Doctor Info */}
          <div>
            <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full inline-flex items-center space-x-2 mb-6">
              <Award className="w-4 h-4" />
              <span className="font-semibold">Director Médico</span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dr. Onésimo Fernández
            </h3>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Pionero en <span className="font-semibold text-blue-600">Digital Smile Design</span> en Zaragoza, 
              con más de 24 años especializándose en prótesis dentales e implantología avanzada.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Formación y Certificaciones:</h4>
              <div className="space-y-3">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-blue-600 mt-1">
                      {qual.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{qual.title}</div>
                      <div className="text-gray-600 text-sm">{qual.institution}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Filosofía de Trabajo:</h4>
              <blockquote className="border-l-4 border-blue-600 pl-4 text-gray-700 italic">
                "Cada sonrisa es única. Mi compromiso es combinar la experiencia de más de dos décadas 
                con la tecnología más avanzada para crear resultados que superen las expectativas de 
                nuestros pacientes."
              </blockquote>
            </div>

            <a
              href="#cita"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <Clock className="w-5 h-5" />
              <span>Consulta con el Dr. Fernández</span>
            </a>
          </div>

          {/* Doctor Image & Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              {/* Doctor placeholder */}
              <div className="bg-white rounded-xl p-6 shadow-lg text-center mb-6">
                <div className="w-40 h-40 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-6xl">👨‍⚕️</div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Dr. Onésimo Fernández</h4>
                <p className="text-blue-600 font-semibold mb-4">Director Médico & Especialista</p>
                <div className="flex justify-center items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Valoración de pacientes: 4.9/5</p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-1 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-md flex items-center space-x-4">
                    <div className="text-blue-600">
                      {achievement.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{achievement.number}</div>
                      <div className="text-sm text-gray-600">{achievement.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
              <Award className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg">
              <GraduationCap className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Equipo Completo</h3>
            <p className="text-gray-600">
              Un equipo estable y experimentado que trabaja en perfecta coordinación para brindarte la mejor atención.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="text-2xl">👩‍⚕️</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                    <p className="text-blue-600 font-semibold">{member.position}</p>
                    <p className="text-sm text-gray-500">{member.experience}</p>
                  </div>
                </div>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué elegir OneDental?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Experiencia Consolidada</h4>
              <p className="text-gray-600">
                12 años en Zaragoza con un equipo estable que conoce tu historial dental.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Tecnología Pionera</h4>
              <p className="text-gray-600">
                Primeros en traer Digital Smile Design a Zaragoza con resultados excepcionales.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Atención Personalizada</h4>
              <p className="text-gray-600">
                Cada tratamiento se adapta a tus necesidades específicas con seguimiento completo.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">¿Listo para transformar tu sonrisa?</h3>
          <p className="text-xl mb-8 text-blue-100">
            El Dr. Onésimo Fernández te espera para una consulta personalizada completamente gratuita.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#cita"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Primera Consulta GRATUITA
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
    </section>
  );
};

export default DoctorSection;

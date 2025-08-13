import React from 'react';
import { Helmet } from 'react-helmet';

const EquipoMedico: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Equipo Médico | Dr. Onésimo Fernández y Equipo OneDental Zaragoza</title>
        <meta name="description" content="Conoce al Dr. Onésimo Fernández y todo el equipo médico de OneDental Zaragoza. Especialistas en implantología, estética dental y Digital Smile Design." />
        <meta name="keywords" content="dr onesimo fernandez, equipo onedental, dentistas zaragoza, implantologia, especializacion dental" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nuestro Equipo Médico
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Profesionales especializados comprometidos con tu sonrisa y bienestar
              </p>
            </div>
          </div>
        </div>

        {/* Dr. Onésimo Fernández - Director Médico */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src="/images/doctor-profesional.jpg" 
                  alt="Dr. Onésimo Fernández - Director Médico OneDental" 
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                  <span className="font-semibold">Director Médico</span>
                </div>
              </div>
              
              <div>
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Dr. Onésimo Fernández
                  </h2>
                  <p className="text-xl text-blue-600 font-semibold">
                    Director Médico y Especialista en Implanto-prótesis
                  </p>
                </div>

                <div className="space-y-4 text-gray-700 mb-8">
                  <p>
                    El Dr. Onésimo Fernández es el fundador y director médico de OneDental, 
                    con más de <strong>20 años de experiencia</strong> dedicados exclusivamente 
                    a la implantología y prótesis dentales.
                  </p>
                  <p>
                    Pionero en <strong>Digital Smile Design en Zaragoza</strong>, ha sido el primer 
                    profesional en introducir esta revolucionaria tecnología en Aragón, 
                    transformando la manera de planificar y ejecutar tratamientos estéticos.
                  </p>
                  <p>
                    Su filosofía se basa en la <strong>excelencia técnica</strong> combinada con 
                    un trato humano y personalizado, entendiendo que cada sonrisa es única 
                    y merece un enfoque individualizado.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">20+</div>
                    <div className="text-sm text-gray-600">Años de Experiencia</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">500+</div>
                    <div className="text-sm text-gray-600">Pacientes Tratados</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">98%</div>
                    <div className="text-sm text-gray-600">Tasa de Éxito</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">2001</div>
                    <div className="text-sm text-gray-600">Especialista desde</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Implantología</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Prótesis</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Digital Smile Design</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Estética Dental</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formación y Experiencia del Dr. Onésimo */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Formación y Experiencia Profesional
              </h2>
              <p className="text-lg text-gray-600">
                Una trayectoria marcada por la excelencia y la formación continua
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Formación Académica */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">🎓</div>
                  <h3 className="text-xl font-bold text-gray-900">Formación Académica</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Licenciatura en Odontología</h4>
                    <p className="text-gray-600">Universidad Europea de Madrid</p>
                    <p className="text-sm text-gray-500">Graduado con honores</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Especialización en Implanto-prótesis</h4>
                    <p className="text-gray-600">Universidad Complutense de Madrid (UCM)</p>
                    <p className="text-sm text-gray-500">Programa de especialización avanzada</p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Certificación Digital Smile Design</h4>
                    <p className="text-gray-600">DSD Academy Internacional</p>
                    <p className="text-sm text-gray-500">Primer certificado en Aragón</p>
                  </div>
                </div>
              </div>

              {/* Especialidades y Competencias */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">🔬</div>
                  <h3 className="text-xl font-bold text-gray-900">Especialidades</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-3 mt-1">•</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Implantología Avanzada</h4>
                      <p className="text-gray-600 text-sm">Técnicas de última generación, implantes inmediatos</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-600 mr-3 mt-1">•</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Prótesis Complejas</h4>
                      <p className="text-gray-600 text-sm">Rehabilitaciones completas, prótesis sobre implantes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-purple-600 mr-3 mt-1">•</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Digital Smile Design</h4>
                      <p className="text-gray-600 text-sm">Planificación digital, resultados predecibles</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-orange-600 mr-3 mt-1">•</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Cirugía Guiada</h4>
                      <p className="text-gray-600 text-sm">Implantes guiados por ordenador</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipo de Higienistas */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Equipo de Higienistas Especializadas
              </h2>
              <p className="text-lg text-gray-600">
                Profesionales expertas en prevención y mantenimiento de la salud oral
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sara Royo */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    SR
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Sara Royo</h3>
                    <p className="text-blue-600 font-semibold">Higienista Dental Senior</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Sara</strong> forma parte del equipo OneDental desde <strong>2008</strong>, 
                    aportando una experiencia invaluable en prevención y mantenimiento de la salud oral.
                  </p>
                  <p>
                    Especialista en <strong>tratamientos periodontales</strong> y experta en educación 
                    sanitaria, Sara se caracteriza por su trato cercano y su capacidad para hacer 
                    sentir cómodos a los pacientes más nerviosos.
                  </p>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-sm">Especialista en prevención desde 2008</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">Experta en tratamientos periodontales</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-sm">Formación continua en nuevas técnicas</span>
                  </div>
                </div>
              </div>

              {/* Ana Córdoba */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    AC
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Ana Córdoba</h3>
                    <p className="text-green-600 font-semibold">Higienista Dental</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Ana</strong> se incorporó al equipo en <strong>2015</strong> y desde entonces 
                    ha demostrado una dedicación excepcional hacia la salud periodontal y la 
                    prevención de enfermedades de las encías.
                  </p>
                  <p>
                    Su especialización en <strong>cuidado periodontal</strong> y su enfoque 
                    meticuloso han sido clave en el mantenimiento a largo plazo de la salud 
                    oral de nuestros pacientes.
                  </p>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-sm">Especialista en cuidado periodontal</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">Experta en mantenimiento preventivo</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-sm">Trato excepcional con pacientes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filosofía del Equipo */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Nuestra Filosofía de Trabajo
              </h2>
              <p className="text-xl text-blue-100">
                Principios que guían cada tratamiento y cada interacción
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-4">Trabajo en Equipo</h3>
                <p className="text-blue-100">
                  Cada miembro del equipo aporta su experiencia única para ofrecer 
                  una atención integral y coordinada.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold mb-4">Formación Continua</h3>
                <p className="text-blue-100">
                  Nos mantenemos al día con las últimas técnicas y tecnologías 
                  mediante formación permanente.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-xl font-bold mb-4">Trato Humano</h3>
                <p className="text-blue-100">
                  Cada paciente es único y merece una atención personalizada, 
                  empática y profesional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios del Equipo */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Lo que Opinan Nuestros Pacientes
              </h2>
              <p className="text-lg text-gray-600">
                Testimonios reales sobre la experiencia con nuestro equipo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 mr-1">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4">
                  "El Dr. Onésimo es excepcional. Su experiencia y conocimiento son evidentes 
                  en cada consulta. Me explicó todo el proceso de mis implantes con paciencia y claridad."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Carlos Ruiz</p>
                  <p className="text-sm text-gray-600">Implantes dentales</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 mr-1">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Sara es maravillosa. Sus limpiezas dentales son muy cuidadosas y siempre 
                  me da consejos útiles para mantener mi salud oral en casa."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Ana López</p>
                  <p className="text-sm text-gray-600">Higiene dental</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 mr-1">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Todo el equipo de OneDental es profesional y cercano. Ana me ayudó mucho 
                  con mis problemas de encías. Ahora tengo una sonrisa sana."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Javier Martín</p>
                  <p className="text-sm text-gray-600">Tratamiento periodontal</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compromiso con la Excelencia */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Compromiso con la Excelencia
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Nuestro equipo se compromete a mantenerse en la vanguardia de la odontología 
                    moderna, participando regularmente en cursos de formación, congresos y 
                    seminarios especializados.
                  </p>
                  <p>
                    Creemos que la <strong>formación continua</strong> es esencial para ofrecer 
                    a nuestros pacientes los tratamientos más avanzados y efectivos disponibles.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-2">Nuestros Compromisos:</h3>
                    <ul className="space-y-1 text-blue-800">
                      <li>• Formación continua en nuevas técnicas</li>
                      <li>• Actualización constante de equipamiento</li>
                      <li>• Protocolos de calidad estrictos</li>
                      <li>• Atención personalizada a cada paciente</li>
                      <li>• Seguimiento post-tratamiento</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/tecnologia-dental.jpg" 
                  alt="Equipo utilizando tecnología avanzada" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Quieres Conocer a Nuestro Equipo?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Reserva tu primera consulta gratuita y descubre por qué somos 
              el equipo dental de confianza en Zaragoza
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/primera-consulta-gratuita"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                📅 Primera Consulta Gratuita
              </a>
              <a
                href="tel:976527761"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors"
              >
                📞 976 527 761
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EquipoMedico;

import React from 'react';
import { Helmet } from 'react-helmet';

const SobreNosotros: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | OneDental Zaragoza - Dr. Onésimo Fernández</title>
        <meta name="description" content="Conoce la historia de OneDental, clínica dental en Zaragoza especializada en estética dental y Digital Smile Design. Más de 12 años transformando sonrisas." />
        <meta name="keywords" content="sobre onedental, clinica dental zaragoza, dr onesimo fernandez, historia clinica, mision vision" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nuestra Historia
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Más de 12 años transformando sonrisas en Zaragoza con 
                la tecnología más avanzada y el trato más humano
              </p>
            </div>
          </div>
        </div>

        {/* Historia */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  🏥 Nuestra Historia
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    OneDental nació en 2001 de la mano del <strong>Dr. Onésimo Fernández</strong>, 
                    con la visión de crear una clínica dental que combinara la excelencia técnica 
                    con el trato humano y personalizado que cada paciente merece.
                  </p>
                  <p>
                    Desde nuestros inicios en la <strong>Calle Pablo Neruda 17</strong>, hemos sido 
                    pioneros en incorporar las últimas tecnologías en odontología, siendo la primera 
                    clínica en Zaragoza en ofrecer <strong>Digital Smile Design</strong> y técnicas 
                    avanzadas de estética dental.
                  </p>
                  <p>
                    Con más de <strong>500 pacientes atendidos</strong> y una tasa de satisfacción 
                    del <strong>98%</strong>, OneDental se ha consolidado como referente en estética 
                    dental e implantología en Aragón.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/clinica-moderna_1.jpg" 
                  alt="Instalaciones modernas OneDental" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Misión, Visión y Valores */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nuestros Principios
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Los valores que nos guían en cada tratamiento y en cada interacción con nuestros pacientes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Misión */}
              <div className="text-center p-8 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
                <p className="text-gray-700">
                  Transformar sonrisas y vidas mediante tratamientos dentales de excelencia, 
                  utilizando la tecnología más avanzada y brindando un servicio personalizado 
                  que supere las expectativas de nuestros pacientes.
                </p>
              </div>

              {/* Visión */}
              <div className="text-center p-8 bg-green-50 rounded-lg">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
                <p className="text-gray-700">
                  Ser la clínica dental de referencia en Aragón, reconocida por nuestra 
                  innovación tecnológica, excelencia clínica y compromiso con la satisfacción 
                  total de nuestros pacientes.
                </p>
              </div>

              {/* Valores */}
              <div className="text-center p-8 bg-purple-50 rounded-lg">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nuestros Valores</h3>
                <ul className="text-gray-700 space-y-2 text-left">
                  <li>• <strong>Excelencia:</strong> En cada tratamiento</li>
                  <li>• <strong>Innovación:</strong> Tecnología de vanguardia</li>
                  <li>• <strong>Confianza:</strong> Transparencia total</li>
                  <li>• <strong>Humanidad:</strong> Trato cercano y empático</li>
                  <li>• <strong>Integridad:</strong> Ética profesional</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciadores */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Por qué elegir OneDental?
              </h2>
              <p className="text-lg text-gray-600">
                Las características que nos hacen únicos en Zaragoza
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="font-bold text-gray-900 mb-2">12+ Años de Experiencia</h3>
                <p className="text-gray-600 text-sm">
                  Más de una década perfeccionando técnicas y cuidando sonrisas en Zaragoza
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl mb-4">💻</div>
                <h3 className="font-bold text-gray-900 mb-2">Tecnología de Vanguardia</h3>
                <p className="text-gray-600 text-sm">
                  Digital Smile Design, implantes guiados por ordenador y equipamiento de última generación
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="font-bold text-gray-900 mb-2">Especialistas en Prótesis</h3>
                <p className="text-gray-600 text-sm">
                  Especialización desde 2001 en prótesis e implantología con resultados excepcionales
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl mb-4">💝</div>
                <h3 className="font-bold text-gray-900 mb-2">Primera Consulta Gratuita</h3>
                <p className="text-gray-600 text-sm">
                  Diagnóstico completo sin coste y presupuesto personalizado
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reconocimientos */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Reconocimientos y Acreditaciones
              </h2>
              <p className="text-lg text-gray-600">
                La confianza de instituciones y organismos oficiales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-3xl mb-4">🏛️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Colegio Profesional</h3>
                <p className="text-gray-600 text-sm">
                  Odontólogos de Aragón
                </p>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="font-semibold text-gray-900 mb-2">Universidad Europea</h3>
                <p className="text-gray-600 text-sm">
                  Formación de Madrid
                </p>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-3xl mb-4">🔬</div>
                <h3 className="font-semibold text-gray-900 mb-2">UCM Especialista</h3>
                <p className="text-gray-600 text-sm">
                  Implanto-prótesis
                </p>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="font-semibold text-gray-900 mb-2">DSD Certified</h3>
                <p className="text-gray-600 text-sm">
                  Digital Smile Design
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Estadísticas */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                OneDental en Números
              </h2>
              <p className="text-xl text-blue-100">
                Los resultados que avalan nuestra experiencia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Pacientes Atendidos</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2">12+</div>
                <div className="text-blue-100">Años de Experiencia</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Tasa de Éxito</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-blue-100">Profesionales</div>
              </div>
            </div>
          </div>
        </section>

        {/* Compromiso Social */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  🤝 Compromiso Social
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    En OneDental creemos que una sonrisa sana es un derecho fundamental. 
                    Por eso, participamos activamente en programas de salud oral comunitaria 
                    y colaboramos con organizaciones benéficas locales.
                  </p>
                  <p>
                    Nuestro compromiso va más allá de la clínica: organizamos charlas 
                    educativas en colegios, participamos en jornadas de salud bucodental 
                    y ofrecemos tratamientos pro bono para casos especiales.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-2">Iniciativas Actuales:</h3>
                    <ul className="space-y-1 text-blue-800">
                      <li>• Programa "Sonrisas Solidarias" para familias necesitadas</li>
                      <li>• Charlas educativas en centros escolares</li>
                      <li>• Colaboración con residencias de mayores</li>
                      <li>• Jornadas de prevención en centros cívicos</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/equipo-dental.jpg" 
                  alt="Equipo OneDental comprometido" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ubicación y Filosofía */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src="/images/clinica-moderna_8.jpg" 
                  alt="Ubicación privilegiada en Pablo Neruda" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  📍 Ubicación Privilegiada
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Nuestra clínica está estratégicamente ubicada en la <strong>Calle Pablo Neruda 17</strong>, 
                    una zona de fácil acceso con excelentes conexiones de transporte público y amplias 
                    posibilidades de aparcamiento.
                  </p>
                  <p>
                    Hemos diseñado nuestras instalaciones pensando en la comodidad y tranquilidad de 
                    nuestros pacientes, con espacios amplios, luminosos y equipados con la última tecnología.
                  </p>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-bold text-green-900 mb-2">Ventajas de nuestra ubicación:</h3>
                    <ul className="space-y-1 text-green-800">
                      <li>• Fácil acceso en transporte público</li>
                      <li>• Parking disponible en la zona</li>
                      <li>• Entorno tranquilo y seguro</li>
                      <li>• Instalaciones accesibles</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Quieres Conocer Más Sobre OneDental?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Te invitamos a visitarnos y descubrir por qué somos la clínica dental 
              de confianza de cientos de familias en Zaragoza
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/primera-consulta-gratuita"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                📅 Primera Consulta Gratuita
              </a>
              <a
                href="/instalaciones"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
              >
                🏥 Conoce Nuestras Instalaciones
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

export default SobreNosotros;

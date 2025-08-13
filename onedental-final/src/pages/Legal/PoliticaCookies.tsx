import React from 'react';
import { Helmet } from 'react-helmet';

const PoliticaCookies: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Política de Cookies | OneDental Zaragoza</title>
        <meta name="description" content="Política de cookies de OneDental. Información sobre el uso de cookies y tecnologías similares en nuestro sitio web." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Política de Cookies
            </h1>
            <p className="text-lg text-gray-600">
              OneDental - Clínica Dental Dr. Onésimo Fernández
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Última actualización: 8 de junio de 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 prose prose-lg max-w-none">
            
            <h2>1. ¿Qué son las Cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tableta, smartphone) 
              cuando visita nuestro sitio web. Estas cookies nos permiten reconocer su dispositivo y recordar información 
              sobre su visita para mejorar su experiencia de navegación.
            </p>

            <h2>2. Tipos de Cookies que Utilizamos</h2>
            
            <h3>2.1 Según su Finalidad</h3>
            
            <h4>🔧 Cookies Técnicas (Necesarias)</h4>
            <p>Estas cookies son esenciales para el funcionamiento básico del sitio web:</p>
            <ul>
              <li><strong>Cookies de sesión:</strong> Mantienen la sesión activa durante su visita</li>
              <li><strong>Cookies de seguridad:</strong> Detectan intentos de acceso fraudulento</li>
              <li><strong>Cookies de funcionalidad:</strong> Permiten recordar preferencias de idioma y configuración</li>
            </ul>

            <h4>📊 Cookies Analíticas</h4>
            <p>Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio web:</p>
            <ul>
              <li><strong>Google Analytics:</strong> Estadísticas de uso anónimas</li>
              <li><strong>Análisis de rendimiento:</strong> Tiempo de carga, errores, comportamiento del usuario</li>
              <li><strong>Mapas de calor:</strong> Zonas más visitadas y clicadas</li>
            </ul>

            <h4>🎯 Cookies de Personalización</h4>
            <p>Mejoran su experiencia personalizando el contenido:</p>
            <ul>
              <li><strong>Preferencias de usuario:</strong> Idioma, zona horaria, configuración</li>
              <li><strong>Contenido personalizado:</strong> Servicios más relevantes para usted</li>
              <li><strong>Recordar formularios:</strong> Evitar rellenar datos repetidamente</li>
            </ul>

            <h4>📢 Cookies Publicitarias</h4>
            <p>Gestionan la publicidad de manera eficiente:</p>
            <ul>
              <li><strong>Google Ads:</strong> Mostrar anuncios relevantes</li>
              <li><strong>Facebook Pixel:</strong> Medir efectividad de campañas</li>
              <li><strong>Remarketing:</strong> Mostrar contenido personalizado a visitantes previos</li>
            </ul>

            <h3>2.2 Según su Duración</h3>
            
            <h4>⏰ Cookies de Sesión</h4>
            <p>Se eliminan automáticamente cuando cierra el navegador.</p>
            
            <h4>🗓️ Cookies Persistentes</h4>
            <p>Permanecen en su dispositivo durante un período determinado:</p>
            <ul>
              <li><strong>Corta duración:</strong> 24 horas - 30 días</li>
              <li><strong>Media duración:</strong> 1-12 meses</li>
              <li><strong>Larga duración:</strong> Hasta 2 años (solo con consentimiento explícito)</li>
            </ul>

            <h3>2.3 Según su Origen</h3>
            
            <h4>🏠 Cookies Propias</h4>
            <p>Establecidas directamente por OneDental para funcionalidades básicas.</p>
            
            <h4>🌐 Cookies de Terceros</h4>
            <p>Establecidas por servicios externos que utilizamos:</p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Servicio</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Finalidad</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Duración</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Más Info</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">Análisis de tráfico web</td>
                    <td className="border border-gray-300 px-4 py-2">2 años</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://policies.google.com/privacy" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener">
                        Política Google
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Google Ads</td>
                    <td className="border border-gray-300 px-4 py-2">Publicidad personalizada</td>
                    <td className="border border-gray-300 px-4 py-2">90 días</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener">
                        Política Ads
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Facebook Pixel</td>
                    <td className="border border-gray-300 px-4 py-2">Medición de conversiones</td>
                    <td className="border border-gray-300 px-4 py-2">180 días</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://www.facebook.com/privacy/explanation" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener">
                        Política Facebook
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">reCAPTCHA</td>
                    <td className="border border-gray-300 px-4 py-2">Protección contra spam</td>
                    <td className="border border-gray-300 px-4 py-2">6 meses</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://policies.google.com/privacy" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener">
                        Política Google
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>3. Finalidades Específicas</h2>
            
            <h3>3.1 Mejora de la Experiencia</h3>
            <ul>
              <li>Recordar preferencias de navegación</li>
              <li>Mantener la sesión activa</li>
              <li>Evitar rellenar formularios repetidamente</li>
              <li>Personalizar contenido según intereses</li>
            </ul>

            <h3>3.2 Análisis y Estadísticas</h3>
            <ul>
              <li>Número de visitantes únicos</li>
              <li>Páginas más visitadas</li>
              <li>Tiempo de permanencia</li>
              <li>Rutas de navegación</li>
              <li>Detección de errores técnicos</li>
            </ul>

            <h3>3.3 Marketing y Comunicación</h3>
            <ul>
              <li>Medir efectividad de campañas publicitarias</li>
              <li>Mostrar anuncios relevantes</li>
              <li>Remarketing a visitantes previos</li>
              <li>Análisis de conversiones</li>
            </ul>

            <h2>4. Base Legal</h2>
            <p>El uso de cookies se basa en:</p>
            <ul>
              <li><strong>Cookies técnicas:</strong> Interés legítimo para funcionamiento del sitio</li>
              <li><strong>Cookies analíticas:</strong> Consentimiento o interés legítimo (datos anonimizados)</li>
              <li><strong>Cookies publicitarias:</strong> Consentimiento explícito del usuario</li>
              <li><strong>Cookies de personalización:</strong> Consentimiento o interés legítimo</li>
            </ul>

            <h2>5. Gestión de Consentimiento</h2>
            
            <h3>5.1 Banner de Cookies</h3>
            <p>
              Al acceder por primera vez a nuestro sitio web, aparece un banner informativo 
              donde puede gestionar sus preferencias de cookies.
            </p>

            <h3>5.2 Opciones Disponibles</h3>
            <ul>
              <li><strong>Aceptar todas:</strong> Consiente todas las categorías de cookies</li>
              <li><strong>Rechazar opcionales:</strong> Solo cookies técnicas necesarias</li>
              <li><strong>Configurar:</strong> Seleccionar categorías específicas</li>
              <li><strong>Más información:</strong> Acceso a esta política detallada</li>
            </ul>

            <h2>6. Cómo Gestionar las Cookies</h2>
            
            <h3>6.1 Configuración del Navegador</h3>
            <p>Puede gestionar las cookies desde la configuración de su navegador:</p>
            
            <h4>Chrome</h4>
            <p>Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</p>
            
            <h4>Firefox</h4>
            <p>Opciones → Privacidad y seguridad → Cookies y datos del sitio</p>
            
            <h4>Safari</h4>
            <p>Preferencias → Privacidad → Gestionar datos del sitio web</p>
            
            <h4>Edge</h4>
            <p>Configuración → Privacidad, búsqueda y servicios → Cookies</p>

            <h3>6.2 Herramientas de Opt-out</h3>
            <ul>
              <li>
                <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener">
                  Google Analytics Opt-out
                </a>
              </li>
              <li>
                <a href="https://adssettings.google.com/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener">
                  Google Ads Settings
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/settings?tab=ads" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener">
                  Facebook Ad Settings
                </a>
              </li>
            </ul>

            <h2>7. Consecuencias de Desactivar Cookies</h2>
            
            <h3>7.1 Cookies Técnicas</h3>
            <p>⚠️ <strong>No recomendado:</strong> El sitio web puede no funcionar correctamente</p>
            
            <h3>7.2 Cookies Analíticas</h3>
            <p>✅ <strong>Sin impacto funcional:</strong> Solo afecta a nuestras estadísticas internas</p>
            
            <h3>7.3 Cookies de Personalización</h3>
            <p>ℹ️ <strong>Experiencia genérica:</strong> Contenido menos personalizado</p>
            
            <h3>7.4 Cookies Publicitarias</h3>
            <p>📢 <strong>Publicidad genérica:</strong> Anuncios menos relevantes</p>

            <h2>8. Actualización de Datos</h2>
            <p>
              Si instala nuevas cookies o modificamos las existentes, actualizaremos esta política 
              y solicitaremos su consentimiento renovado cuando sea necesario.
            </p>

            <h2>9. Sus Derechos</h2>
            <p>En relación con las cookies, usted tiene derecho a:</p>
            <ul>
              <li>Ser informado sobre las cookies que utilizamos</li>
              <li>Dar, denegar o retirar su consentimiento</li>
              <li>Configurar sus preferencias de cookies</li>
              <li>Eliminar las cookies almacenadas</li>
              <li>Solicitar información sobre tratamiento de datos</li>
            </ul>

            <h2>10. Contacto</h2>
            <p>Para consultas sobre nuestra política de cookies:</p>
            
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">OneDental - Protección de Datos</h3>
              <p className="text-blue-800">
                📧 Email: info@onedental.es<br/>
                📞 Teléfono: 976 527 761<br/>
                📍 Dirección: Calle de Pablo Neruda, 17, 50018 Zaragoza<br/>
                🕒 Horario: Lunes a Viernes de 9:00 a 17:00h
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">🍪 Configurar Cookies</h3>
              <p className="text-green-800 mb-4">
                Puede modificar sus preferencias de cookies en cualquier momento:
              </p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Configurar Cookies
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <a
              href="/politica-privacidad"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              ← Política de Privacidad
            </a>
            <a
              href="/aviso-legal"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              Aviso Legal →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliticaCookies;

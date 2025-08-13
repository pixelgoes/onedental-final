import React from 'react';
import { Helmet } from 'react-helmet';

const PoliticaPrivacidad: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad | OneDental Zaragoza</title>
        <meta name="description" content="Política de privacidad y protección de datos de OneDental. Información sobre el tratamiento de datos personales según GDPR." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Política de Privacidad
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
            
            <h2>1. Responsable del Tratamiento</h2>
            <p>
              <strong>OneDental - Clínica Dental Dr. Onésimo Fernández</strong><br/>
              NIF: [Número de identificación fiscal]<br/>
              Dirección: Calle de Pablo Neruda, 17, 50018 Zaragoza, España<br/>
              Teléfono: 976 527 761<br/>
              Email: info@onedental.es
            </p>

            <h2>2. Finalidad del Tratamiento de Datos</h2>
            <p>En OneDental tratamos sus datos personales para las siguientes finalidades:</p>
            <ul>
              <li><strong>Gestión de citas médicas:</strong> Para programar, modificar y confirmar sus citas dentales.</li>
              <li><strong>Historial clínico:</strong> Para mantener un registro completo de sus tratamientos y seguimiento médico.</li>
              <li><strong>Comunicaciones médicas:</strong> Para enviarle recordatorios de citas, resultados de tratamientos y recomendaciones post-tratamiento.</li>
              <li><strong>Gestión administrativa:</strong> Para la facturación, seguros médicos y gestión de pagos.</li>
              <li><strong>Marketing directo:</strong> Solo con su consentimiento expreso, para informarle sobre nuevos servicios y promociones.</li>
              <li><strong>Cumplimiento legal:</strong> Para cumplir con las obligaciones legales sanitarias y fiscales.</li>
            </ul>

            <h2>3. Base Jurídica</h2>
            <p>El tratamiento de sus datos se basa en:</p>
            <ul>
              <li><strong>Ejecución de contrato:</strong> Para la prestación de servicios médicos solicitados.</li>
              <li><strong>Interés legítimo:</strong> Para la gestión administrativa y mejora de nuestros servicios.</li>
              <li><strong>Consentimiento:</strong> Para comunicaciones comerciales y marketing directo.</li>
              <li><strong>Obligación legal:</strong> Para cumplir con la normativa sanitaria vigente.</li>
            </ul>

            <h2>4. Datos que Recopilamos</h2>
            <h3>4.1 Datos de Identificación</h3>
            <ul>
              <li>Nombre y apellidos</li>
              <li>DNI/NIE</li>
              <li>Fecha de nacimiento</li>
              <li>Dirección postal</li>
              <li>Teléfono y email</li>
            </ul>

            <h3>4.2 Datos de Salud</h3>
            <ul>
              <li>Historial médico dental</li>
              <li>Alergias y medicaciones</li>
              <li>Radiografías y pruebas diagnósticas</li>
              <li>Tratamientos realizados</li>
              <li>Fotografías intraorales (con consentimiento)</li>
            </ul>

            <h3>4.3 Datos Económicos</h3>
            <ul>
              <li>Información de facturación</li>
              <li>Datos de seguros médicos</li>
              <li>Forma de pago</li>
            </ul>

            <h2>5. Destinatarios de los Datos</h2>
            <p>Sus datos pueden ser comunicados a:</p>
            <ul>
              <li><strong>Laboratorios dentales:</strong> Para la elaboración de prótesis y aparatos dentales.</li>
              <li><strong>Compañías de seguros:</strong> Para la gestión de reembolsos y autorizaciones.</li>
              <li><strong>Administraciones públicas:</strong> Cuando sea requerido por ley.</li>
              <li><strong>Proveedores tecnológicos:</strong> Para el mantenimiento de sistemas informáticos (con contrato de encargado de tratamiento).</li>
            </ul>

            <h2>6. Transferencias Internacionales</h2>
            <p>
              No realizamos transferencias internacionales de datos. Todos sus datos se almacenan y procesan dentro del Espacio Económico Europeo bajo la protección del GDPR.
            </p>

            <h2>7. Plazo de Conservación</h2>
            <ul>
              <li><strong>Historial clínico:</strong> Mínimo 5 años desde la última asistencia (Ley 41/2002).</li>
              <li><strong>Datos administrativos:</strong> 6 años desde la finalización del tratamiento.</li>
              <li><strong>Datos de marketing:</strong> Hasta que retire su consentimiento.</li>
              <li><strong>Imágenes médicas:</strong> Mínimo 5 años o según criterio clínico.</li>
            </ul>

            <h2>8. Sus Derechos</h2>
            <p>Como titular de los datos, usted tiene derecho a:</p>
            <ul>
              <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre usted.</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos.</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos (salvo obligaciones legales).</li>
              <li><strong>Limitación:</strong> Restringir el tratamiento en determinadas circunstancias.</li>
              <li><strong>Portabilidad:</strong> Obtener sus datos en formato estructurado.</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento basado en interés legítimo.</li>
              <li><strong>Retirada de consentimiento:</strong> Para tratamientos basados en consentimiento.</li>
            </ul>

            <p>
              Para ejercer estos derechos, puede contactarnos en info@onedental.es o en nuestra dirección postal, 
              adjuntando copia de su DNI.
            </p>

            <h2>9. Medidas de Seguridad</h2>
            <p>Implementamos medidas técnicas y organizativas apropiadas:</p>
            <ul>
              <li>Acceso restringido por credenciales</li>
              <li>Cifrado de datos sensibles</li>
              <li>Copias de seguridad regulares</li>
              <li>Formación del personal en protección de datos</li>
              <li>Controles de acceso físico a instalaciones</li>
            </ul>

            <h2>10. Cookies y Tecnologías Similares</h2>
            <p>
              Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario. 
              Para más información, consulte nuestra <a href="/politica-cookies" className="text-blue-600 hover:text-blue-800">Política de Cookies</a>.
            </p>

            <h2>11. Reclamaciones</h2>
            <p>
              Si considera que hemos vulnerado sus derechos, puede presentar una reclamación ante la 
              Agencia Española de Protección de Datos (AEPD) en www.aepd.es o ante la autoridad 
              de control de su país de residencia.
            </p>

            <h2>12. Modificaciones</h2>
            <p>
              Esta política puede ser modificada para adaptarse a cambios normativos o de nuestros servicios. 
              Las modificaciones se publicarán en nuestro sitio web con antelación suficiente.
            </p>

            <h2>13. Contacto</h2>
            <p>
              Para cualquier consulta sobre esta política de privacidad o el tratamiento de sus datos:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">OneDental - Protección de Datos</h3>
              <p className="text-blue-800">
                📧 Email: info@onedental.es<br/>
                📞 Teléfono: 976 527 761<br/>
                📍 Dirección: Calle de Pablo Neruda, 17, 50018 Zaragoza<br/>
                🕒 Horario: Lunes a Viernes de 9:00 a 17:00h
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <a
              href="/terminos-condiciones"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              ← Términos y Condiciones
            </a>
            <a
              href="/politica-cookies"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              Política de Cookies →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliticaPrivacidad;

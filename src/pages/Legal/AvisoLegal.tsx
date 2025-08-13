import React from 'react';
import { Helmet } from 'react-helmet';

const AvisoLegal: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Aviso Legal | OneDental Zaragoza</title>
        <meta name="description" content="Aviso legal de OneDental. Información sobre datos de la empresa, condiciones de uso del sitio web y aspectos legales." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Aviso Legal
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
            
            <h2>1. Datos Identificativos</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">OneDental - Clínica Dental Dr. Onésimo Fernández</h3>
              <div className="text-blue-800 space-y-1">
                <p><strong>Razón Social:</strong> OneDental Clínica Dental S.L.</p>
                <p><strong>NIF:</strong> B-99999999 (Ejemplo)</p>
                <p><strong>Domicilio Social:</strong> Calle de Pablo Neruda, 17, 50018 Zaragoza, España</p>
                <p><strong>Teléfono:</strong> 976 527 761</p>
                <p><strong>Email:</strong> info@onedental.es</p>
                <p><strong>Web:</strong> www.onedental.es</p>
                <p><strong>Registro Mercantil:</strong> Registro Mercantil de Zaragoza, Tomo [XXX], Folio [XXX], Hoja Z-[XXXXX]</p>
                <p><strong>Registro Sanitario:</strong> Nº [XXXXXX] - Consejería de Sanidad del Gobierno de Aragón</p>
                <p><strong>Colegio Profesional:</strong> Ilustre Colegio Profesional de Odontólogos y Estomatólogos de Aragón</p>
                <p><strong>Nº Colegiado Director:</strong> [XXXX] - Dr. Onésimo Fernández</p>
              </div>
            </div>

            <h2>2. Objeto y Actividad</h2>
            <p>
              OneDental es un centro sanitario especializado en odontología que desarrolla su actividad bajo la 
              dirección médica del Dr. Onésimo Fernández, colegiado nº [XXXX] del Ilustre Colegio Profesional 
              de Odontólogos y Estomatólogos de Aragón.
            </p>

            <h3>2.1 Servicios Sanitarios</h3>
            <ul>
              <li>Odontología general y preventiva</li>
              <li>Estética dental avanzada (Digital Smile Design)</li>
              <li>Implantología y cirugía oral</li>
              <li>Ortodoncia y ortopedia dentofacial</li>
              <li>Periodoncia y endodoncia</li>
              <li>Prótesis dentales fijas y removibles</li>
              <li>Blanqueamiento dental profesional</li>
              <li>Urgencias odontológicas</li>
            </ul>

            <h3>2.2 Autorizaciones Sanitarias</h3>
            <ul>
              <li>Centro sanitario autorizado por el Gobierno de Aragón</li>
              <li>Cumplimiento normativa RD 1277/2003 de bases generales de autorización de centros</li>
              <li>Protocolo de esterilización según normativa UNE-EN ISO 17665</li>
              <li>Gestión de residuos sanitarios según RD 952/1997</li>
            </ul>

            <h2>3. Condiciones de Uso del Sitio Web</h2>
            
            <h3>3.1 Acceso y Navegación</h3>
            <p>
              El acceso al sitio web de OneDental es gratuito y no requiere registro previo. 
              El usuario se compromete a:
            </p>
            <ul>
              <li>Hacer un uso adecuado y lícito del sitio web</li>
              <li>No utilizar el sitio para fines ilícitos o prohibidos</li>
              <li>No dañar, inutilizar o sobrecargar el sitio web</li>
              <li>Respetar los derechos de propiedad intelectual</li>
            </ul>

            <h3>3.2 Información Médica</h3>
            <p>
              ⚠️ <strong>Importante:</strong> La información contenida en este sitio web tiene carácter meramente 
              informativo y educativo. No sustituye en ningún caso la consulta, el diagnóstico o el tratamiento 
              médico profesional.
            </p>
            <ul>
              <li>Consulte siempre a un profesional sanitario cualificado</li>
              <li>No ignore consejos médicos por información leída en Internet</li>
              <li>Ante urgencias médicas, contacte servicios de emergencia (112)</li>
            </ul>

            <h2>4. Propiedad Intelectual e Industrial</h2>
            
            <h3>4.1 Derechos de Autor</h3>
            <p>
              Todos los contenidos del sitio web (textos, imágenes, sonidos, audio, vídeo, software, diseños gráficos, 
              códigos fuente, etc.) son propiedad de OneDental o de terceros que han autorizado su uso, y están 
              protegidos por derechos de propiedad intelectual e industrial.
            </p>

            <h3>4.2 Marcas y Signos Distintivos</h3>
            <ul>
              <li><strong>OneDental®</strong> - Marca registrada</li>
              <li>Diseños gráficos y logotipos propietarios</li>
              <li>Nombres comerciales protegidos</li>
              <li>Derechos sobre "Digital Smile Design" según licencia</li>
            </ul>

            <h3>4.3 Uso Autorizado</h3>
            <p>Se autoriza exclusivamente:</p>
            <ul>
              <li>Visualización temporal en pantalla</li>
              <li>Impresión de copias temporales para uso personal</li>
              <li>Almacenamiento en memoria del dispositivo para navegación</li>
            </ul>

            <p><strong>Queda expresamente prohibido:</strong></p>
            <ul>
              <li>Modificar, copiar, distribuir, transmitir o reproducir contenidos</li>
              <li>Uso comercial sin autorización expresa</li>
              <li>Ingeniería inversa, descompilación o desmontaje</li>
              <li>Eliminación de marcas de agua o avisos de copyright</li>
            </ul>

            <h2>5. Responsabilidad y Garantías</h2>
            
            <h3>5.1 Información del Sitio Web</h3>
            <p>
              OneDental se esfuerza por mantener la información actualizada y libre de errores, 
              sin embargo no garantiza:
            </p>
            <ul>
              <li>Exactitud, integridad o actualidad de los contenidos</li>
              <li>Ausencia de errores técnicos o tipográficos</li>
              <li>Disponibilidad continua del servicio</li>
              <li>Ausencia de virus informáticos</li>
            </ul>

            <h3>5.2 Enlaces Externos</h3>
            <p>
              El sitio web puede contener enlaces a sitios web de terceros. OneDental no se hace 
              responsable del contenido, políticas de privacidad o prácticas de estos sitios externos.
            </p>

            <h3>5.3 Limitación de Responsabilidad</h3>
            <p>
              OneDental excluye cualquier responsabilidad por daños y perjuicios que puedan deberse a:
            </p>
            <ul>
              <li>Interrupciones, virus informáticos o averías</li>
              <li>Retrasos o bloqueos causados por deficiencias de Internet</li>
              <li>Uso inadecuado de los contenidos por parte del usuario</li>
              <li>Falta de disponibilidad, mantenimiento y efectivo funcionamiento</li>
            </ul>

            <h2>6. Política de Enlaces</h2>
            
            <h3>6.1 Enlaces Hacia Nuestro Sitio</h3>
            <p>Se permite enlazar a nuestro sitio web siempre que:</p>
            <ul>
              <li>No se reproduzcan contenidos sin autorización</li>
              <li>No se realicen manifestaciones falsas sobre OneDental</li>
              <li>El enlace no implique patrocinio o recomendación no autorizada</li>
              <li>No se enmarque el contenido en sitios web de terceros</li>
            </ul>

            <h3>6.2 Enlaces Desde Nuestro Sitio</h3>
            <p>
              Los enlaces a sitios web de terceros se proporcionan únicamente para conveniencia 
              del usuario y no implican aprobación de su contenido.
            </p>

            <h2>7. Modificaciones</h2>
            <p>
              OneDental se reserva el derecho a:
            </p>
            <ul>
              <li>Modificar en cualquier momento los contenidos del sitio web</li>
              <li>Actualizar o cambiar las condiciones de uso</li>
              <li>Suspender temporal o definitivamente el acceso</li>
              <li>Modificar la estructura y diseño del sitio</li>
            </ul>

            <h2>8. Duración y Terminación</h2>
            <p>
              Los servicios del sitio web se prestan por tiempo indefinido. OneDental puede dar por 
              terminado o suspender el servicio en cualquier momento, con o sin causa justificada.
            </p>

            <h2>9. Ley Aplicable y Jurisdicción</h2>
            <ul>
              <li><strong>Ley aplicable:</strong> Legislación española</li>
              <li><strong>Jurisdicción:</strong> Juzgados y Tribunales de Zaragoza, España</li>
              <li><strong>Normativa sanitaria:</strong> Ley 14/1986 General de Sanidad</li>
              <li><strong>Protección de datos:</strong> GDPR y LOPDGDD</li>
              <li><strong>Comercio electrónico:</strong> Ley 34/2002 LSSI-CE</li>
            </ul>

            <h2>10. Resolución de Conflictos</h2>
            
            <h3>10.1 Mediación Previa</h3>
            <p>
              Antes de acudir a la vía judicial, las partes se comprometen a intentar resolver 
              cualquier controversia mediante mediación a través de:
            </p>
            <ul>
              <li>Colegio Profesional de Odontólogos de Aragón</li>
              <li>Comisión de Mediación, Arbitraje y Conciliación</li>
              <li>Servicios de mediación reconocidos oficialmente</li>
            </ul>

            <h3>10.2 Atención al Cliente</h3>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-3">📞 Atención al Paciente</h3>
              <p className="text-green-800">
                Para consultas, sugerencias o reclamaciones:<br/>
                📧 Email: info@onedental.es<br/>
                📞 Teléfono: 976 527 761<br/>
                📍 Presencial: Calle de Pablo Neruda, 17, 50018 Zaragoza<br/>
                🕒 Horario: L-X-V: 9:00-17:00, M-J: 9:00-13:30 y 15:30-21:00/20:00<br/>
                📄 Hojas de reclamaciones disponibles en clínica
              </p>
            </div>

            <h2>11. Contacto Legal</h2>
            <p>
              Para cuestiones legales relacionadas con este aviso legal o el sitio web:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">⚖️ Asuntos Legales</h3>
              <p className="text-blue-800">
                📧 Email: legal@onedental.es<br/>
                📞 Teléfono: 976 527 761<br/>
                📍 Dirección: Calle de Pablo Neruda, 17, 50018 Zaragoza<br/>
                📋 Referencia: Aviso Legal - www.onedental.es
              </p>
            </div>

            <h2>12. Validez</h2>
            <p>
              En caso de que cualquier disposición de este aviso legal sea declarada nula o inaplicable, 
              el resto de disposiciones mantendrán su validez y vigencia.
            </p>

            <p className="text-sm text-gray-600 mt-8 p-4 bg-gray-50 rounded">
              <strong>Documento verificado:</strong> Este aviso legal cumple con la normativa española vigente, 
              incluyendo la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), 
              el Reglamento General de Protección de Datos (GDPR) y la Ley Orgánica 3/2018 de Protección de Datos 
              Personales y garantía de los derechos digitales (LOPDGDD).
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <a
              href="/politica-cookies"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              ← Política de Cookies
            </a>
            <a
              href="/terminos-condiciones"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              Términos y Condiciones →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvisoLegal;
